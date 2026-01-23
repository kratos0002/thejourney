"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { useExploration } from "@/components/ExplorationProvider";
import { Word } from "@/data/word-types";

const INSTALL_DISMISS_KEY = "journey-install-dismissed";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function ProfilePanel({ words, open, onClose }: { words: Word[]; open: boolean; onClose: () => void }) {
  const { user, exploredSlugs, exploredCount, signInWithEmail, verifyOtp } = useExploration();

  const [authStep, setAuthStep] = useState<"idle" | "email" | "otp">("idle");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [canInstall, setCanInstall] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  const analytics = useMemo(() => {
    const explored = words.filter(w => exploredSlugs.has(w.slug));
    const languages = new Set(explored.map(w => w.language));
    return {
      words: exploredCount,
      languages: languages.size,
    };
  }, [exploredSlugs, exploredCount]);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setCanInstall(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = useCallback(async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setCanInstall(false);
        localStorage.setItem(INSTALL_DISMISS_KEY, "true");
      }
      setDeferredPrompt(null);
    }
  }, [deferredPrompt]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthLoading(true);
    const { error } = await signInWithEmail(email);
    setAuthLoading(false);
    if (error) setAuthError(error);
    else setAuthStep("otp");
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthLoading(true);
    const { error } = await verifyOtp(email, otp);
    setAuthLoading(false);
    if (error) setAuthError(error);
    else { setAuthStep("idle"); onClose(); }
  };

  const handleSignOut = async () => {
    const { supabase } = await import("@/lib/supabase/client");
    await supabase.auth.signOut();
    onClose();
  };

  if (!open) return null;

  return (
    <>
      {/* Invisible backdrop to close */}
      <div className="fixed inset-0 z-[29]" onClick={onClose} />

      {/* Compact dropdown card */}
      <div className="fixed top-16 right-5 z-30 w-64">
        <div className="bg-ink border border-moonlight/12 rounded-2xl p-4 shadow-2xl shadow-black/40">
              {/* Stats row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center flex-1">
                  <p className="font-display text-xl text-moonlight/90">{analytics.words}</p>
                  <p className="text-[9px] text-fog/40 font-body tracking-widest uppercase">words</p>
                </div>
                <div className="w-px h-8 bg-moonlight/8" />
                <div className="text-center flex-1">
                  <p className="font-display text-xl text-amber-glow/80">{analytics.languages}</p>
                  <p className="text-[9px] text-fog/40 font-body tracking-widest uppercase">languages</p>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="h-1 bg-abyss rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-glow/50 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${(analytics.words / words.length) * 100}%` }}
                  />
                </div>
                <p className="text-[9px] text-fog/25 font-body mt-1.5 text-right">
                  {analytics.words}/{words.length}
                </p>
              </div>

              {/* Auth */}
              {!user && authStep === "idle" && (
                <button
                  onClick={() => setAuthStep("email")}
                  className="w-full py-2 text-xs text-moonlight/60 hover:text-moonlight font-body border border-moonlight/8 hover:border-moonlight/15 rounded-lg transition-colors cursor-pointer"
                >
                  Sign in to sync
                </button>
              )}

              {!user && authStep === "email" && (
                <form onSubmit={handleEmailSubmit} className="space-y-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-abyss border border-fog/12 rounded-lg px-3 py-2 text-moonlight/80 font-body text-xs placeholder:text-fog/20 focus:outline-none focus:border-amber-glow/30 transition-colors"
                    required
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={authLoading}
                    className="w-full py-2 text-xs text-amber-glow font-body bg-amber-glow/8 border border-amber-glow/20 rounded-lg hover:bg-amber-glow/12 disabled:opacity-40 transition-colors cursor-pointer"
                  >
                    {authLoading ? "Sending..." : "Continue"}
                  </button>
                  {authError && <p className="text-red-400/70 text-[10px] font-body">{authError}</p>}
                </form>
              )}

              {!user && authStep === "otp" && (
                <form onSubmit={handleOtpSubmit} className="space-y-2">
                  <p className="text-[10px] text-fog/40 font-body">Code sent to {email}</p>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={8}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="00000000"
                    className="w-full bg-abyss border border-fog/12 rounded-lg px-3 py-2 text-moonlight/80 font-mono text-sm text-center tracking-[0.2em] placeholder:text-fog/15 focus:outline-none focus:border-amber-glow/30 transition-colors"
                    required
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={authLoading || otp.length < 8}
                    className="w-full py-2 text-xs text-amber-glow font-body bg-amber-glow/8 border border-amber-glow/20 rounded-lg hover:bg-amber-glow/12 disabled:opacity-40 transition-colors cursor-pointer"
                  >
                    {authLoading ? "Verifying..." : "Verify"}
                  </button>
                  {authError && <p className="text-red-400/70 text-[10px] font-body">{authError}</p>}
                </form>
              )}

              {user && (
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-fog/40 font-body truncate max-w-[140px]">
                    {user.email}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="text-[10px] text-fog/30 hover:text-fog/60 font-body transition-colors cursor-pointer"
                  >
                    Sign out
                  </button>
                </div>
              )}

              {/* Install */}
              {canInstall && (
                <button
                  onClick={handleInstall}
                  className="w-full mt-3 py-2 text-xs text-moonlight/50 hover:text-moonlight font-body border border-moonlight/8 hover:border-moonlight/15 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-glow/50">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Install app
                </button>
              )}
            </div>
      </div>
    </>
  );
}
