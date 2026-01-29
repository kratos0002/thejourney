"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/animations";
import type { Word } from "@/data/word-types";

interface CabinetMilestonesProps {
  words: Word[];
  onGroupByLanguage?: (language: string | null) => void;
}

export default function CabinetMilestones({ words, onGroupByLanguage }: CabinetMilestonesProps) {
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null);
  const canFilter = words.length >= 10;

  const languageCounts = useMemo(() => {
    const counts = new Map<string, number>();
    words.forEach((w) => {
      counts.set(w.language, (counts.get(w.language) || 0) + 1);
    });
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([language, count]) => ({ language, count }));
  }, [words]);

  // Don't render until 5+ words
  if (words.length < 5) return null;

  const handleLanguageClick = (language: string | null) => {
    if (!canFilter) return;
    const next = activeLanguage === language ? null : language;
    setActiveLanguage(next);
    onGroupByLanguage?.(next);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: easeSmooth, delay: 0.8 }}
      className="mt-20 mb-8 px-6 max-w-3xl mx-auto"
    >
      {/* Section divider */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className="flex-1 h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--theme-border-strong))" }}
        />
        <p
          className="text-[9px] uppercase tracking-[0.4em] font-body shrink-0"
          style={{ color: "var(--theme-text-tertiary)", opacity: 0.4 }}
        >
          Languages explored
        </p>
        <div
          className="flex-1 h-px"
          style={{ background: "linear-gradient(90deg, var(--theme-border-strong), transparent)" }}
        />
      </div>

      {/* Language entries — like a museum index */}
      <div className="space-y-0">
        {languageCounts.map(({ language, count }, i) => (
          <motion.div
            key={language}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: easeSmooth, delay: 0.9 + i * 0.05 }}
          >
            <button
              onClick={() => handleLanguageClick(language)}
              disabled={!canFilter}
              className={`w-full flex items-center gap-4 py-3 transition-all duration-500 ${canFilter ? "cursor-pointer" : "cursor-default"}`}
              style={{
                opacity: activeLanguage && activeLanguage !== language ? 0.25 : 1,
              }}
            >
              {/* Language name */}
              <span
                className="font-display text-lg md:text-xl"
                style={{
                  color: activeLanguage === language
                    ? "var(--theme-accent)"
                    : "var(--theme-text-primary)",
                  opacity: 0.8,
                }}
              >
                {language}
              </span>

              {/* Dotted leader line */}
              <span
                className="flex-1 border-b border-dotted"
                style={{ borderColor: "var(--theme-border)", opacity: 0.3 }}
              />

              {/* Count */}
              <span
                className="font-body text-xs tabular-nums"
                style={{ color: "var(--theme-text-tertiary)", opacity: 0.5 }}
              >
                {count} {count === 1 ? "word" : "words"}
              </span>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Clear filter hint */}
      {canFilter && activeLanguage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-6 text-center"
        >
          <button
            onClick={() => handleLanguageClick(null)}
            className="font-body text-[10px] tracking-wider cursor-pointer transition-opacity duration-300 hover:opacity-70"
            style={{ color: "var(--theme-text-tertiary)", opacity: 0.4 }}
          >
            showing {activeLanguage} &middot; tap to clear
          </button>
        </motion.div>
      )}
    </motion.section>
  );
}
