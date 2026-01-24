"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { useExploration } from "@/components/ExplorationProvider";
import { Word } from "@/data/word-types";
import { getUserNotifications, dismissNotification, type UserNotification } from "@/lib/feedback";

const INSTALL_DISMISS_KEY = "journey-install-dismissed";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function ProfilePanel({ words, open, onClose, onFeedbackClick }: { words: Word[]; open: boolean; onClose: () => void; onFeedbackClick?: () => void }) {
  const { user, exploredSlugs, exploredCount, isPremium, signInWithEmail, verifyOtp } = useExploration();
  const [notifications, setNotifications] = useState<UserNotification[]>([]);

  const [authStep, setAuthStep] = useState<"idle" | "email" | "otp">("idle");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [canInstall, setCanInstall] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
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
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    setIsStandalone(standalone);
    if (standalone) return;

    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream;
    setIsIOS(ios);

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setCanInstall(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  // Fetch notifications when panel opens and user is signed in
  useEffect(() => {
    if (open && user) {
      getUserNotifications().then(setNotifications).catch(() => {});
    }
  }, [open, user]);

  const handleDismissNotification = useCallback(async (id: string) => {
    await dismissNotification(id);
    setNotifications(prev => prev.filter(n => n.id !== id));
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
      <div className="fixed right-5 z-30 w-64" style={{ top: "calc(env(safe-area-inset-top, 0px) + 4rem)" }}>
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

              {/* Journey Pass badge */}
              {user && isPremium && (
                <div className="mb-4 flex items-center gap-2 bg-amber-glow/5 border border-amber-glow/15 rounded-lg px-3 py-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-amber-glow/70 shrink-0">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                  </svg>
                  <span className="text-[11px] text-amber-glow/80 font-body tracking-wide">Journey Pass</span>
                </div>
              )}

              {/* Notifications */}
              {user && notifications.length > 0 && (
                <div className="mb-4">
                  <p className="text-[9px] text-fog/40 font-body tracking-widest uppercase mb-2">What&apos;s New</p>
                  <div className="space-y-1.5 max-h-32 overflow-y-auto">
                    {notifications.map(notif => (
                      <div key={notif.id} className="flex items-start gap-2 bg-abyss/50 rounded-lg px-2.5 py-2">
                        <span className="text-[10px] mt-0.5">
                          {notif.notification_type === "feature" ? "✨" :
                           notif.notification_type === "bug_fix" ? "🐛" :
                           notif.notification_type === "feedback_response" ? "💬" :
                           notif.notification_type === "tip" ? "💡" : "🔧"}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] text-moonlight/70 font-body font-medium truncate">{notif.title}</p>
                          <p className="text-[10px] text-fog/40 font-body truncate">{notif.message}</p>
                        </div>
                        <button
                          onClick={() => handleDismissNotification(notif.id)}
                          className="text-fog/20 hover:text-fog/50 transition-colors shrink-0 cursor-pointer"
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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

              {/* Feedback */}
              {user && onFeedbackClick && (
                <button
                  onClick={() => { onFeedbackClick(); onClose(); }}
                  className="w-full mt-3 py-2 text-xs text-moonlight/50 hover:text-moonlight font-body border border-moonlight/8 hover:border-moonlight/15 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-glow/50">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  Send Feedback
                </button>
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
              {!canInstall && isIOS && !isStandalone && (
                <div className="mt-3 py-2 px-3 border border-moonlight/8 rounded-lg">
                  <p className="text-xs text-moonlight/50 font-body flex items-center justify-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-glow/50">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                      <polyline points="16,6 12,2 8,6"/>
                      <line x1="12" y1="2" x2="12" y2="15"/>
                    </svg>
                    Tap share, then &ldquo;Add to Home Screen&rdquo;
                  </p>
                </div>
              )}
            </div>
      </div>
    </>
  );
}
