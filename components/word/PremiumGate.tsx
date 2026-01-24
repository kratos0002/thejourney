"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useExploration } from "@/components/ExplorationProvider";
import { purchaseJourneyPass } from "@/lib/revenuecat";
import { trackEvent } from "@/lib/analytics";

export default function PremiumGate() {
  const { shouldShowPremiumGate, dismissPremiumGate } = useExploration();

  // Don't show gate if RevenueCat isn't configured
  if (!process.env.NEXT_PUBLIC_REVENUECAT_API_KEY) return null;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const purchaseContainerRef = useRef<HTMLDivElement>(null);

  const handlePurchase = useCallback(async () => {
    setError(null);
    setLoading(true);
    trackEvent("premium_purchase_started");

    const result = await purchaseJourneyPass(purchaseContainerRef.current);
    setLoading(false);

    if (result.success) {
      trackEvent("premium_purchase_completed");
      dismissPremiumGate();
    } else if (result.error === "cancelled") {
      trackEvent("premium_purchase_cancelled");
    } else if (result.error) {
      setError(result.error);
      trackEvent("premium_purchase_error", { error: result.error });
    }
  }, [dismissPremiumGate]);

  return (
    <AnimatePresence>
      {shouldShowPremiumGate && (
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
            <p className="text-amber-glow/80 text-xs font-body tracking-[0.2em] uppercase mb-4">
              Journey Pass
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-moonlight/90 font-light mb-4">
              You&apos;ve explored 20 words.
            </h2>
            <p className="text-mist/60 font-body text-base mb-3 leading-relaxed">
              Unlock every word in The Journey — past, present, and future — with a single purchase.
            </p>
            <p className="text-moonlight/70 font-display text-2xl mb-8">
              $9.99 <span className="text-sm text-fog/50 font-body">one-time, forever</span>
            </p>

            {/* Purchase container (RevenueCat renders checkout UI here) */}
            <div ref={purchaseContainerRef} id="rc-purchase-container" />

            <button
              onClick={handlePurchase}
              disabled={loading}
              className="w-full bg-amber-glow/10 border border-amber-glow/30 rounded-lg px-6 py-3.5 text-amber-glow font-body text-sm tracking-wider hover:bg-amber-glow/20 hover:border-amber-glow/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
            >
              {loading ? "Processing..." : "Get Journey Pass"}
            </button>

            {error && error !== "cancelled" && (
              <p className="mt-4 text-red-400/80 text-xs font-body">
                Something went wrong. Please try again later.
              </p>
            )}

            <button
              onClick={dismissPremiumGate}
              className="mt-6 text-fog/40 hover:text-fog/60 text-xs font-body transition-colors cursor-pointer"
            >
              Maybe later
            </button>

            <p className="mt-8 text-fog/30 text-xs font-body leading-relaxed">
              One purchase unlocks all {100}+ words forever,
              <br />including every word we add in the future.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
