"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useExploration } from "@/components/ExplorationProvider";
import { trackEvent } from "@/lib/analytics";

const DISMISS_KEY = "journey-install-dismissed";
const SHOW_AFTER_WORDS = 2;

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const { exploredCount } = useExploration();
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const deferredPrompt = useRef<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    // Don't show if already dismissed or already installed
    if (localStorage.getItem(DISMISS_KEY)) return;
    if (window.matchMedia("(display-mode: standalone)").matches) return;

    // Detect iOS
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream;
    setIsIOS(ios);

    // Listen for install prompt (Chrome/Android)
    const handler = (e: Event) => {
      e.preventDefault();
      deferredPrompt.current = e as BeforeInstallPromptEvent;
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  // Show after user has explored enough words
  useEffect(() => {
    if (exploredCount >= SHOW_AFTER_WORDS && !localStorage.getItem(DISMISS_KEY)) {
      if (window.matchMedia("(display-mode: standalone)").matches) return;
      const timer = setTimeout(() => { setShow(true); trackEvent("install_prompt_shown"); }, 1500);
      return () => clearTimeout(timer);
    }
  }, [exploredCount]);

  const handleInstall = useCallback(async () => {
    if (deferredPrompt.current) {
      await deferredPrompt.current.prompt();
      const { outcome } = await deferredPrompt.current.userChoice;
      trackEvent("install_prompt_response", { outcome });
      if (outcome === "accepted") {
        setShow(false);
        localStorage.setItem(DISMISS_KEY, "true");
      }
      deferredPrompt.current = null;
    }
  }, []);

  const handleDismiss = useCallback(() => {
    setShow(false);
    localStorage.setItem(DISMISS_KEY, "true");
    trackEvent("install_prompt_dismissed");
  }, []);

  // Register service worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-6 left-4 right-4 z-[80] max-w-sm mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="bg-deep-water/95 backdrop-blur-lg border border-moonlight/10 rounded-2xl px-5 py-4 shadow-2xl">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-abyss border border-amber-glow/20 flex items-center justify-center shrink-0 mt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-amber-glow/70">
                  <circle cx="6" cy="16" r="2.5" fill="currentColor" opacity="0.6"/>
                  <circle cx="12" cy="10" r="2" fill="currentColor" opacity="0.4"/>
                  <circle cx="18" cy="6" r="2.5" fill="currentColor" opacity="0.7"/>
                  <path d="M 6 16 Q 9 12 12 10 Q 15 8 18 6" stroke="currentColor" strokeWidth="1" strokeDasharray="3,4" opacity="0.3"/>
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="font-display text-sm text-moonlight/90 font-medium">
                  Add to Home Screen
                </p>
                {isIOS ? (
                  <p className="text-xs text-mist/50 font-body mt-1 leading-relaxed">
                    Tap <span className="inline-block mx-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline text-mist/70">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                        <polyline points="16,6 12,2 8,6"/>
                        <line x1="12" y1="2" x2="12" y2="15"/>
                      </svg>
                    </span> then &ldquo;Add to Home Screen&rdquo;
                  </p>
                ) : (
                  <p className="text-xs text-mist/50 font-body mt-1 leading-relaxed">
                    Continue your journey offline, anytime.
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                {!isIOS && (
                  <button
                    onClick={handleInstall}
                    className="px-3 py-1.5 text-xs text-amber-glow font-body border border-amber-glow/30 rounded-lg hover:bg-amber-glow/10 transition-colors cursor-pointer"
                  >
                    Install
                  </button>
                )}
                <button
                  onClick={handleDismiss}
                  className="p-1.5 text-fog/40 hover:text-fog/70 transition-colors cursor-pointer"
                  aria-label="Dismiss"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
