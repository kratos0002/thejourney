"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useExploration } from "@/components/ExplorationProvider";

export default function ExplorationGate() {
  const { shouldShowGate, signInWithEmail, verifyOtp } = useExploration();
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: err } = await signInWithEmail(email);
    setLoading(false);

    if (err) {
      setError(err);
    } else {
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
    // On success, ExplorationProvider will set shouldShowGate = false
  };

  return (
    <AnimatePresence>
      {shouldShowGate && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-abyss/95 backdrop-blur-md" />

          {/* Content */}
          <motion.div
            className="relative z-10 max-w-md mx-auto px-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {step === "email" && (
              <>
                <p className="text-amber-glow/80 text-xs font-body tracking-[0.2em] uppercase mb-4">
                  Your journey deepens
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-moonlight/90 font-light mb-6">
                  You&apos;ve explored 10 words.
                </h2>
                <p className="text-mist/60 font-body text-base mb-10 leading-relaxed">
                  Create a free account to continue your journey through the remaining worlds.
                </p>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-deep-water/80 border border-fog/20 rounded-lg px-4 py-3 text-moonlight/80 font-body text-sm placeholder:text-fog/30 focus:outline-none focus:border-amber-glow/40 focus:ring-1 focus:ring-amber-glow/20 transition-all duration-300"
                    required
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-glow/10 border border-amber-glow/30 rounded-lg px-4 py-3 text-amber-glow font-body text-sm tracking-wider hover:bg-amber-glow/20 hover:border-amber-glow/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                  >
                    {loading ? "Sending..." : "Continue with email"}
                  </button>
                </form>

                {error && (
                  <p className="mt-4 text-red-400/80 text-xs font-body">{error}</p>
                )}

                <p className="mt-6 text-fog/30 text-xs font-body">
                  No password needed. We&apos;ll send a verification code.
                </p>
              </>
            )}

            {step === "otp" && (
              <>
                <p className="text-amber-glow/80 text-xs font-body tracking-[0.2em] uppercase mb-4">
                  Check your email
                </p>
                <h2 className="font-display text-2xl sm:text-3xl text-moonlight/90 font-light mb-4">
                  Enter the 6-digit code
                </h2>
                <p className="text-mist/50 font-body text-sm mb-8">
                  Sent to {email}
                </p>

                <form onSubmit={handleOtpSubmit} className="space-y-4">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="000000"
                    className="w-full bg-deep-water/80 border border-fog/20 rounded-lg px-4 py-3 text-moonlight/80 font-mono text-2xl text-center tracking-[0.5em] placeholder:text-fog/20 focus:outline-none focus:border-amber-glow/40 focus:ring-1 focus:ring-amber-glow/20 transition-all duration-300"
                    required
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={loading || otp.length < 6}
                    className="w-full bg-amber-glow/10 border border-amber-glow/30 rounded-lg px-4 py-3 text-amber-glow font-body text-sm tracking-wider hover:bg-amber-glow/20 hover:border-amber-glow/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                  >
                    {loading ? "Verifying..." : "Verify"}
                  </button>
                </form>

                {error && (
                  <p className="mt-4 text-red-400/80 text-xs font-body">{error}</p>
                )}

                <button
                  onClick={() => { setStep("email"); setOtp(""); setError(null); }}
                  className="mt-6 text-fog/40 hover:text-fog/60 text-xs font-body transition-colors cursor-pointer"
                >
                  Use a different email
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
