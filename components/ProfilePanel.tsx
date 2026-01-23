"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useExploration } from "@/components/ExplorationProvider";
import { allWords } from "@/data/words";

const INSTALL_DISMISS_KEY = "journey-install-dismissed";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function ProfilePanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { user, exploredSlugs, exploredCount, signInWithEmail, verifyOtp } = useExploration();

  const [authStep, setAuthStep] = useState<"idle" | "email" | "otp">("idle");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [canInstall, setCanInstall] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  // Analytics derived from explored words
  const analytics = useMemo(() => {
    const explored = allWords.filter(w => exploredSlugs.has(w.slug));
    const languages = new Set(explored.map(w => w.language));
    const regions = new Set<string>();
    let totalStops = 0;

    explored.forEach(w => {
      w.journey.forEach(j => {
        regions.add(j.location);
        totalStops++;
      });
    });

    return {
      wordsExplored: exploredCount,
      wordsTotal: allWords.length,
      languages: languages.size,
      regions: regions.size,
      journeyStops: totalStops,
    };
  }, [exploredSlugs, exploredCount]);

  // Install prompt detection
  useEffect(() => {
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

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
    if (error) {
      setAuthError(error);
    } else {
      setAuthStep("otp");
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthLoading(true);
    const { error } = await verifyOtp(email, otp);
    setAuthLoading(false);
    if (error) {
      setAuthError(error);
    } else {
      setAuthStep("idle");
    }
  };

  const handleSignOut = async () => {
    const { supabase } = await import("@/lib/supabase/client");
    await supabase.auth.signOut();
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[85] bg-abyss/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[86] max-h-[85vh] overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="bg-deep-water/98 backdrop-blur-xl border-t border-moonlight/8 rounded-t-3xl px-6 pb-8 pt-4">
              {/* Drag handle */}
              <div className="w-10 h-1 rounded-full bg-fog/20 mx-auto mb-6" />

              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-xl text-moonlight/90 font-light">
                  Your Journey
                </h2>
                {user && (
                  <span className="text-[10px] text-fog/40 font-body tracking-wider">
                    {user.email}
                  </span>
                )}
              </div>

              {/* Analytics Grid */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-abyss/60 rounded-xl p-4 text-center border border-moonlight/5">
                  <p className="font-display text-2xl text-moonlight/90 font-light">
                    {analytics.wordsExplored}
                  </p>
                  <p className="text-[9px] text-fog/40 font-body tracking-widest uppercase mt-1">
                    Words
                  </p>
                </div>
                <div className="bg-abyss/60 rounded-xl p-4 text-center border border-moonlight/5">
                  <p className="font-display text-2xl text-amber-glow/80 font-light">
                    {analytics.languages}
                  </p>
                  <p className="text-[9px] text-fog/40 font-body tracking-widest uppercase mt-1">
                    Languages
                  </p>
                </div>
                <div className="bg-abyss/60 rounded-xl p-4 text-center border border-moonlight/5">
                  <p className="font-display text-2xl text-moonlight/70 font-light">
                    {analytics.journeyStops}
                  </p>
                  <p className="text-[9px] text-fog/40 font-body tracking-widest uppercase mt-1">
                    Stops
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-fog/40 font-body tracking-wider uppercase">
                    Progress
                  </span>
                  <span className="text-[10px] text-fog/30 font-body">
                    {analytics.wordsExplored}/{analytics.wordsTotal}
                  </span>
                </div>
                <div className="h-1 bg-abyss/80 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-amber-glow/60 to-amber-glow/30 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(analytics.wordsExplored / analytics.wordsTotal) * 100}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  />
                </div>
              </div>

              {/* Auth Section */}
              {!user && authStep === "idle" && (
                <div className="mb-6">
                  <button
                    onClick={() => setAuthStep("email")}
                    className="w-full py-3 px-4 bg-abyss/60 border border-moonlight/10 hover:border-amber-glow/20 rounded-xl text-sm text-moonlight/70 hover:text-moonlight font-body transition-all duration-300 cursor-pointer"
                  >
                    Sign in to sync across devices
                  </button>
                </div>
              )}

              {!user && authStep === "email" && (
                <form onSubmit={handleEmailSubmit} className="mb-6 space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-abyss/60 border border-fog/15 rounded-xl px-4 py-3 text-moonlight/80 font-body text-sm placeholder:text-fog/25 focus:outline-none focus:border-amber-glow/30 transition-colors"
                    required
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={authLoading}
                    className="w-full py-3 bg-amber-glow/10 border border-amber-glow/25 rounded-xl text-sm text-amber-glow font-body hover:bg-amber-glow/15 disabled:opacity-40 transition-all cursor-pointer"
                  >
                    {authLoading ? "Sending code..." : "Continue"}
                  </button>
                  {authError && <p className="text-red-400/70 text-xs font-body">{authError}</p>}
                </form>
              )}

              {!user && authStep === "otp" && (
                <form onSubmit={handleOtpSubmit} className="mb-6 space-y-3">
                  <p className="text-xs text-fog/50 font-body mb-2">Code sent to {email}</p>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="000000"
                    className="w-full bg-abyss/60 border border-fog/15 rounded-xl px-4 py-3 text-moonlight/80 font-mono text-xl text-center tracking-[0.4em] placeholder:text-fog/20 focus:outline-none focus:border-amber-glow/30 transition-colors"
                    required
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={authLoading || otp.length < 6}
                    className="w-full py-3 bg-amber-glow/10 border border-amber-glow/25 rounded-xl text-sm text-amber-glow font-body hover:bg-amber-glow/15 disabled:opacity-40 transition-all cursor-pointer"
                  >
                    {authLoading ? "Verifying..." : "Verify"}
                  </button>
                  {authError && <p className="text-red-400/70 text-xs font-body">{authError}</p>}
                </form>
              )}

              {/* Install App */}
              {!isStandalone && (canInstall || /iphone|ipad|ipod/i.test(typeof navigator !== "undefined" ? navigator.userAgent : "")) && (
                <div className="mb-6">
                  {canInstall ? (
                    <button
                      onClick={handleInstall}
                      className="w-full py-3 px-4 bg-abyss/60 border border-moonlight/10 hover:border-amber-glow/20 rounded-xl text-sm text-moonlight/70 hover:text-moonlight font-body flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-glow/60">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7,10 12,15 17,10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      Install app
                    </button>
                  ) : (
                    <div className="py-3 px-4 bg-abyss/60 border border-moonlight/5 rounded-xl text-center">
                      <p className="text-xs text-fog/50 font-body">
                        Tap{" "}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline text-fog/60 mx-0.5">
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                          <polyline points="16,6 12,2 8,6"/>
                          <line x1="12" y1="2" x2="12" y2="15"/>
                        </svg>{" "}
                        then &ldquo;Add to Home Screen&rdquo;
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Sign out */}
              {user && (
                <button
                  onClick={handleSignOut}
                  className="w-full py-2.5 text-xs text-fog/30 hover:text-fog/50 font-body transition-colors cursor-pointer"
                >
                  Sign out
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
