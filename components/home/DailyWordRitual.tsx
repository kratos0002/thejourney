"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Word } from "@/data/word-types";
import { getDailyFeaturedWord } from "@/lib/daily-word";
import { useTransition } from "@/components/TransitionProvider";
import { useExploration } from "@/components/ExplorationProvider";
import { trackEvent } from "@/lib/analytics";
import { easeSmooth } from "@/lib/animations";

interface DailyWordRitualProps {
  words: Word[];
}

export default function DailyWordRitual({ words }: DailyWordRitualProps) {
  const { navigateToWord } = useTransition();
  const { exploredSlugs, exploredCount } = useExploration();
  const [dismissed, setDismissed] = useState(false);

  const dailyWord = useMemo(
    () => getDailyFeaturedWord(words, exploredSlugs),
    [words, exploredSlugs]
  );

  const visible =
    exploredCount > 0 &&
    dailyWord != null &&
    !dismissed &&
    !exploredSlugs.has(dailyWord.slug);

  const handleTap = useCallback(() => {
    if (!dailyWord) return;
    trackEvent("daily_word_tapped", { slug: dailyWord.slug });
    setDismissed(true);
    setTimeout(() => {
      navigateToWord(dailyWord.slug, dailyWord.word, {
        x: window.innerWidth / 2,
        y: window.innerHeight - 120,
      });
    }, 200);
  }, [dailyWord, navigateToWord]);

  const handleDismiss = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      trackEvent("daily_word_dismissed", { slug: dailyWord?.slug });
      setDismissed(true);
    },
    [dailyWord]
  );

  return (
    <AnimatePresence>
      {visible && dailyWord && (
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 max-w-sm w-[90%]"
          style={{
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 2.5, duration: 1.0, ease: easeSmooth }}
        >
          <button
            className="w-full px-6 py-5 rounded-2xl text-center cursor-pointer group relative"
            style={{
              background: "var(--theme-surface)",
              border: "1px solid var(--theme-border)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 0 40px rgba(212, 165, 116, 0.08)",
            }}
            onClick={handleTap}
            aria-label={`Today's word: ${dailyWord.romanization}. ${dailyWord.hook}`}
          >
            {/* Dismiss button — visible on hover */}
            <span
              className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-60 transition-opacity duration-300"
              style={{ color: "var(--theme-text-tertiary)" }}
              onClick={handleDismiss}
              role="button"
              aria-label="Dismiss"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </span>

            {/* Label */}
            <p
              className="text-[10px] font-body tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--theme-accent)", opacity: 0.7 }}
            >
              A word awaits
            </p>

            {/* Hook */}
            <p
              className="font-body text-sm sm:text-base italic leading-relaxed group-hover:opacity-100 transition-opacity duration-300"
              style={{ color: "var(--theme-text-primary)", opacity: 0.8 }}
            >
              &ldquo;{dailyWord.hook}&rdquo;
            </p>

            {/* Word + language */}
            <p
              className="mt-3 text-[10px] font-body tracking-wider"
              style={{ color: "var(--theme-accent)", opacity: 0.5 }}
            >
              {dailyWord.romanization}
              <span style={{ opacity: 0.6 }}> &mdash; from </span>
              {dailyWord.language}
            </p>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
