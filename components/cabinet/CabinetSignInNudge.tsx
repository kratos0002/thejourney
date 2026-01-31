"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useExploration } from "@/components/ExplorationProvider";
import { trackEvent } from "@/lib/analytics";
import { easeSmooth } from "@/lib/animations";

const NUDGE_DISMISSED_KEY = "journey-cabinet-nudge-dismissed";

function wasDismissed(): boolean {
  try {
    return localStorage.getItem(NUDGE_DISMISSED_KEY) === "true";
  } catch {
    return false;
  }
}

function persistDismiss() {
  try {
    localStorage.setItem(NUDGE_DISMISSED_KEY, "true");
  } catch {}
}

export default function CabinetSignInNudge() {
  const { user, authReady, exploredCount, signInWithEmail, verifyOtp } =
    useExploration();
  const [dismissed, setDismissed] = useState(wasDismissed);
  const [expanded, setExpanded] = useState(false);
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Don't show if: auth loading, signed in, dismissed, or fewer than 3 words
  if (!authReady || user || dismissed || exploredCount < 3) {
    return null;
  }

  const handleDismiss = () => {
    setDismissed(true);
    persistDismiss();
    trackEvent("cabinet_nudge_dismissed", { explored_count: exploredCount });
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: err } = await signInWithEmail(email);
    setLoading(false);

    if (err) {
      setError(err);
    } else {
      trackEvent("sign_in_started", { source: "cabinet_nudge" });
      setStep("otp");
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: err } = await verifyOtp(email, otp);
    setLoading(false);

    if (err) {
      setError(err);
    }
    // On success, user becomes non-null and this component unmounts
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeSmooth, delay: 0.6 }}
      className="max-w-md mx-auto mb-12 px-6"
    >
      <div
        className="relative rounded-xl px-6 py-5 text-center"
        style={{
          background: "var(--theme-accent-muted, rgba(212, 165, 116, 0.06))",
          border: "1px solid var(--theme-border-strong)",
        }}
      >
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 transition-opacity hover:opacity-70 cursor-pointer"
          style={{ color: "var(--theme-text-tertiary)", opacity: 0.4 }}
          aria-label="Dismiss"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <AnimatePresence mode="wait">
          {!expanded ? (
            <motion.div
              key="prompt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p
                className="font-body text-sm mb-3 leading-relaxed"
                style={{ color: "var(--theme-text-secondary)", opacity: 0.7 }}
              >
                Sign in to keep your cabinet safe across devices.
              </p>
              <button
                onClick={() => {
                  setExpanded(true);
                  trackEvent("cabinet_nudge_expanded", { explored_count: exploredCount });
                }}
                className="font-body text-xs tracking-wider transition-all hover:opacity-80 cursor-pointer"
                style={{ color: "var(--theme-accent)" }}
              >
                Sign in with email
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: easeSmooth }}
            >
              {step === "email" && (
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <p
                    className="font-body text-xs mb-1"
                    style={{ color: "var(--theme-text-tertiary)", opacity: 0.5 }}
                  >
                    No password needed
                  </p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-lg px-4 py-2.5 font-body text-sm focus:outline-none transition-all duration-300"
                    style={{
                      background: "var(--theme-bg-secondary, rgba(255,255,255,0.05))",
                      border: "1px solid var(--theme-border-strong)",
                      color: "var(--theme-text-primary)",
                    }}
                    required
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg px-4 py-2.5 font-body text-sm tracking-wider disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                    style={{
                      color: "var(--theme-accent)",
                      background: "var(--theme-accent-muted, rgba(212, 165, 116, 0.1))",
                      border: "1px solid var(--theme-accent)",
                      opacity: loading ? 0.4 : 1,
                    }}
                  >
                    {loading ? "Sending..." : "Continue"}
                  </button>
                </form>
              )}

              {step === "otp" && (
                <form onSubmit={handleOtpSubmit} className="space-y-3">
                  <p
                    className="font-body text-xs mb-1"
                    style={{ color: "var(--theme-text-tertiary)", opacity: 0.5 }}
                  >
                    Code sent to {email}
                  </p>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={8}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="00000000"
                    className="w-full rounded-lg px-4 py-2.5 font-mono text-xl text-center tracking-[0.3em] focus:outline-none transition-all duration-300"
                    style={{
                      background: "var(--theme-bg-secondary, rgba(255,255,255,0.05))",
                      border: "1px solid var(--theme-border-strong)",
                      color: "var(--theme-text-primary)",
                    }}
                    required
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={loading || otp.length < 8}
                    className="w-full rounded-lg px-4 py-2.5 font-body text-sm tracking-wider disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                    style={{
                      color: "var(--theme-accent)",
                      background: "var(--theme-accent-muted, rgba(212, 165, 116, 0.1))",
                      border: "1px solid var(--theme-accent)",
                    }}
                  >
                    {loading ? "Verifying..." : "Verify"}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setStep("email"); setOtp(""); setError(null); }}
                    className="font-body text-xs transition-colors cursor-pointer"
                    style={{ color: "var(--theme-text-tertiary)", opacity: 0.4 }}
                  >
                    Use a different email
                  </button>
                </form>
              )}

              {error && (
                <p className="mt-2 text-red-400/80 text-xs font-body">{error}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
