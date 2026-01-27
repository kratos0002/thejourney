"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { useExploration } from "@/components/ExplorationProvider";
import { Word } from "@/data/word-types";
import { getUserNotifications, dismissNotification, type UserNotification } from "@/lib/feedback";
import { useFeatureFlag } from "@/hooks/useFeatureFlag";
import InstallInstructionsModal from "@/components/InstallInstructionsModal";
import ThemeSelector from "@/components/ThemeSelector";

const INSTALL_DISMISS_KEY = "journey-install-dismissed";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function ProfilePanel({ words, open, onClose, onFeedbackClick }: { words: Word[]; open: boolean; onClose: () => void; onFeedbackClick?: () => void }) {
  const { user, authReady, exploredSlugs, exploredCount, isPremium, signInWithEmail, verifyOtp } = useExploration();
  const [notifications, setNotifications] = useState<UserNotification[]>([]);
  const showThemeSelector = useFeatureFlag("theme_selection");

  const [authStep, setAuthStep] = useState<"idle" | "email" | "otp">("idle");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [canInstall, setCanInstall] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showInstallInstructions, setShowInstallInstructions] = useState(false);
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
    } else {
      // No native prompt available - show instructions modal
      setShowInstallInstructions(true);
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
        <div className="rounded-2xl p-4 shadow-2xl transition-colors duration-300" style={{ background: "var(--theme-bg-secondary)", border: "1px solid var(--theme-border-strong)" }}>
              {/* Stats row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center flex-1">
                  <p className="font-display text-xl" style={{ color: "var(--theme-text-primary)", opacity: 0.9 }}>{analytics.words}</p>
                  <p className="text-[9px] font-body tracking-widest uppercase" style={{ color: "var(--theme-text-tertiary)" }}>words</p>
                </div>
                <div className="w-px h-8" style={{ background: "var(--theme-border)" }} />
                <div className="text-center flex-1">
                  <p className="font-display text-xl" style={{ color: "var(--theme-accent)", opacity: 0.8 }}>{analytics.languages}</p>
                  <p className="text-[9px] font-body tracking-widest uppercase" style={{ color: "var(--theme-text-tertiary)" }}>languages</p>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--theme-bg-primary)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${(analytics.words / words.length) * 100}%`, background: "var(--theme-accent)", opacity: 0.5 }}
                  />
                </div>
                <p className="text-[9px] font-body mt-1.5 text-right" style={{ color: "var(--theme-text-tertiary)", opacity: 0.6 }}>
                  {analytics.words}/{words.length}
                </p>
              </div>

              {/* Journey Pass badge */}
              {user && isPremium && (
                <div className="mb-4 flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: "var(--theme-accent-muted)", border: "1px solid var(--theme-accent)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0" style={{ color: "var(--theme-accent)", opacity: 0.7 }}>
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                  </svg>
                  <span className="text-[11px] font-body tracking-wide" style={{ color: "var(--theme-accent)", opacity: 0.8 }}>Journey Pass</span>
                </div>
              )}

              {/* Notifications */}
              {user && notifications.length > 0 && (
                <div className="mb-4">
                  <p className="text-[9px] font-body tracking-widest uppercase mb-2" style={{ color: "var(--theme-text-tertiary)" }}>What&apos;s New</p>
                  <div className="space-y-1.5 max-h-32 overflow-y-auto">
                    {notifications.map(notif => (
                      <div key={notif.id} className="flex items-start gap-2 rounded-lg px-2.5 py-2" style={{ background: "var(--theme-bg-primary)", opacity: 0.8 }}>
                        <span className="text-[10px] mt-0.5">
                          {notif.notification_type === "feature" ? "✨" :
                           notif.notification_type === "bug_fix" ? "🐛" :
                           notif.notification_type === "feedback_response" ? "💬" :
                           notif.notification_type === "tip" ? "💡" : "🔧"}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-body font-medium truncate" style={{ color: "var(--theme-text-primary)", opacity: 0.7 }}>{notif.title}</p>
                          <p className="text-[10px] font-body truncate" style={{ color: "var(--theme-text-tertiary)" }}>{notif.message}</p>
                        </div>
                        <button
                          onClick={() => handleDismissNotification(notif.id)}
                          className="transition-colors shrink-0 cursor-pointer"
                          style={{ color: "var(--theme-text-tertiary)" }}
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
              {authReady && !user && authStep === "idle" && (
                <button
                  onClick={() => setAuthStep("email")}
                  className="w-full py-2 text-xs font-body rounded-lg transition-colors cursor-pointer"
                  style={{ color: "var(--theme-text-secondary)", border: "1px solid var(--theme-border)" }}
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
                    className="w-full rounded-lg px-3 py-2 font-body text-xs focus:outline-none transition-colors"
                    style={{ background: "var(--theme-bg-primary)", border: "1px solid var(--theme-border)", color: "var(--theme-text-primary)" }}
                    required
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={authLoading}
                    className="w-full py-2 text-xs font-body rounded-lg disabled:opacity-40 transition-colors cursor-pointer"
                    style={{ color: "var(--theme-accent)", background: "var(--theme-accent-muted)", border: "1px solid var(--theme-accent)" }}
                  >
                    {authLoading ? "Sending..." : "Continue"}
                  </button>
                  {authError && <p className="text-red-400/70 text-[10px] font-body">{authError}</p>}
                </form>
              )}

              {!user && authStep === "otp" && (
                <form onSubmit={handleOtpSubmit} className="space-y-2">
                  <p className="text-[10px] font-body" style={{ color: "var(--theme-text-tertiary)" }}>Code sent to {email}</p>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={8}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="00000000"
                    className="w-full rounded-lg px-3 py-2 font-mono text-sm text-center tracking-[0.2em] focus:outline-none transition-colors"
                    style={{ background: "var(--theme-bg-primary)", border: "1px solid var(--theme-border)", color: "var(--theme-text-primary)" }}
                    required
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={authLoading || otp.length < 8}
                    className="w-full py-2 text-xs font-body rounded-lg disabled:opacity-40 transition-colors cursor-pointer"
                    style={{ color: "var(--theme-accent)", background: "var(--theme-accent-muted)", border: "1px solid var(--theme-accent)" }}
                  >
                    {authLoading ? "Verifying..." : "Verify"}
                  </button>
                  {authError && <p className="text-red-400/70 text-[10px] font-body">{authError}</p>}
                </form>
              )}

              {user && (
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-body truncate max-w-[140px]" style={{ color: "var(--theme-text-tertiary)" }}>
                    {user.email}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="text-[10px] font-body transition-colors cursor-pointer"
                    style={{ color: "var(--theme-text-tertiary)" }}
                  >
                    Sign out
                  </button>
                </div>
              )}

              {/* Feedback */}
              {user && onFeedbackClick && (
                <button
                  onClick={() => { onFeedbackClick(); onClose(); }}
                  className="w-full mt-3 py-2 text-xs font-body rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  style={{ color: "var(--theme-text-secondary)", border: "1px solid var(--theme-border)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--theme-accent)", opacity: 0.5 }}>
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  Send Feedback
                </button>
              )}

              {/* Install */}
              {!isStandalone && (canInstall || isIOS) && (
                <button
                  onClick={handleInstall}
                  className="w-full mt-3 py-2 text-xs font-body rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  style={{ color: "var(--theme-text-secondary)", border: "1px solid var(--theme-border)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--theme-accent)", opacity: 0.5 }}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Install app
                </button>
              )}

              {/* Theme Selector - behind feature flag for logged-in users */}
              {user && showThemeSelector && (
                <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--theme-border)" }}>
                  <ThemeSelector />
                </div>
              )}
            </div>
      </div>

      {/* Install Instructions Modal */}
      <InstallInstructionsModal
        open={showInstallInstructions}
        onClose={() => setShowInstallInstructions(false)}
      />
    </>
  );
}
