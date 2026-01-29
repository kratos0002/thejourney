"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { Word } from "@/data/word-types";

interface CabinetMilestonesProps {
  words: Word[];
  onGroupByLanguage?: (language: string | null) => void;
}

export default function CabinetMilestones({ words, onGroupByLanguage }: CabinetMilestonesProps) {
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null);

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

  const handleLanguageClick = (language: string) => {
    const next = activeLanguage === language ? null : language;
    setActiveLanguage(next);
    onGroupByLanguage?.(next);
  };

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="mt-12 px-6 max-w-5xl mx-auto"
    >
      <div
        className="rounded-2xl p-6"
        style={{
          background: "var(--theme-surface)",
          border: "1px solid var(--theme-border)",
        }}
      >
        <p
          className="text-[10px] uppercase tracking-[0.3em] font-body mb-4"
          style={{ color: "var(--theme-text-tertiary)" }}
        >
          Languages you&apos;ve explored
        </p>

        <div className="flex flex-wrap gap-2">
          {/* Show "All" filter when 10+ words */}
          {words.length >= 10 && (
            <button
              onClick={() => { setActiveLanguage(null); onGroupByLanguage?.(null); }}
              className="px-3 py-1.5 rounded-full text-xs font-body transition-all duration-300 cursor-pointer"
              style={{
                color: activeLanguage === null ? "var(--theme-bg-primary)" : "var(--theme-text-secondary)",
                background: activeLanguage === null ? "var(--theme-accent)" : "transparent",
                border: `1px solid ${activeLanguage === null ? "var(--theme-accent)" : "var(--theme-border)"}`,
              }}
            >
              All
            </button>
          )}

          {languageCounts.map(({ language, count }) => (
            <button
              key={language}
              onClick={() => words.length >= 10 ? handleLanguageClick(language) : undefined}
              className={`px-3 py-1.5 rounded-full text-xs font-body transition-all duration-300 ${words.length >= 10 ? "cursor-pointer" : "cursor-default"}`}
              style={{
                color: activeLanguage === language ? "var(--theme-bg-primary)" : "var(--theme-text-secondary)",
                background: activeLanguage === language ? "var(--theme-accent)" : "transparent",
                border: `1px solid ${activeLanguage === language ? "var(--theme-accent)" : "var(--theme-border)"}`,
                opacity: activeLanguage && activeLanguage !== language ? 0.5 : 1,
              }}
            >
              {language} <span style={{ opacity: 0.5 }}>{count}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
