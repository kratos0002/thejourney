"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Platform = "ios" | "android" | "desktop" | "unknown";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  if (/android/.test(ua)) return "android";
  if (/macintosh|windows|linux/.test(ua) && !/mobile/.test(ua)) return "desktop";
  return "unknown";
}

function getBrowser(): string {
  if (typeof navigator === "undefined") return "browser";
  const ua = navigator.userAgent.toLowerCase();

  if (/chrome/.test(ua) && !/edg/.test(ua)) return "Chrome";
  if (/safari/.test(ua) && !/chrome/.test(ua)) return "Safari";
  if (/firefox/.test(ua)) return "Firefox";
  if (/edg/.test(ua)) return "Edge";
  return "browser";
}

// Share icon (iOS style - box with up arrow)
function ShareIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16,6 12,2 8,6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  );
}

// Three dots menu icon (Android style)
function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="5" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  );
}

// Plus icon for Add to Home Screen
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}

// Checkmark icon
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <polyline points="20,6 9,17 4,12" />
    </svg>
  );
}

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function getSteps(platform: Platform, browser: string): Step[] {
  if (platform === "ios") {
    return [
      {
        icon: <ShareIcon className="w-8 h-8" />,
        title: "Tap Share",
        description: "Tap the share button at the bottom of Safari",
      },
      {
        icon: <PlusIcon className="w-8 h-8" />,
        title: "Add to Home Screen",
        description: "Scroll down and tap \"Add to Home Screen\"",
      },
      {
        icon: <CheckIcon className="w-8 h-8" />,
        title: "Tap Add",
        description: "Tap \"Add\" in the top right corner",
      },
    ];
  }

  if (platform === "android") {
    return [
      {
        icon: <MenuIcon className="w-8 h-8" />,
        title: "Open menu",
        description: `Tap the three dots (⋮) in ${browser}`,
      },
      {
        icon: <PlusIcon className="w-8 h-8" />,
        title: "Install or Add",
        description: "Tap \"Install app\" or \"Add to Home screen\"",
      },
      {
        icon: <CheckIcon className="w-8 h-8" />,
        title: "Confirm",
        description: "Tap \"Install\" to add the app",
      },
    ];
  }

  // Desktop
  return [
    {
      icon: <MenuIcon className="w-8 h-8" />,
      title: "Open browser menu",
      description: `Click the menu icon in ${browser}`,
    },
    {
      icon: <PlusIcon className="w-8 h-8" />,
      title: "Install app",
      description: "Look for \"Install The Journey\" or \"Add to Home screen\"",
    },
    {
      icon: <CheckIcon className="w-8 h-8" />,
      title: "Confirm installation",
      description: "Click \"Install\" in the popup",
    },
  ];
}

export default function InstallInstructionsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [platform, setPlatform] = useState<Platform>("unknown");
  const [browser, setBrowser] = useState("browser");

  useEffect(() => {
    setPlatform(detectPlatform());
    setBrowser(getBrowser());
  }, []);

  const steps = getSteps(platform, browser);
  const platformLabel = platform === "ios" ? "iPhone/iPad" : platform === "android" ? "Android" : "Desktop";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-abyss/95 backdrop-blur-md" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-sm bg-ink border border-moonlight/12 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-moonlight/8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-xl text-moonlight/90">Install The Journey</h2>
                  <p className="text-xs text-fog/40 font-body mt-1">for {platformLabel}</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-moonlight/5 hover:bg-moonlight/10 flex items-center justify-center transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fog/50">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Steps */}
            <div className="px-6 py-5 space-y-5">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  {/* Step number & icon */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-amber-glow/10 border border-amber-glow/20 flex items-center justify-center text-amber-glow/80">
                      {step.icon}
                    </div>
                    <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-amber-glow text-abyss text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-1">
                    <h3 className="font-display text-base text-moonlight/90">{step.title}</h3>
                    <p className="text-sm text-fog/50 font-body mt-0.5 leading-snug">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer hint */}
            <div className="px-6 pb-6">
              <div className="bg-abyss/50 rounded-lg px-4 py-3">
                <p className="text-xs text-fog/40 font-body text-center">
                  {platform === "ios"
                    ? "Use Safari for the best experience"
                    : platform === "android"
                    ? "Use Chrome for the best experience"
                    : "Works best in Chrome, Edge, or Safari"
                  }
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
