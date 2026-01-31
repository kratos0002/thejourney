"use client";

import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/animations";
import type { Word } from "@/data/word-types";
import BrowseCard from "./BrowseCard";

interface LanguageSectionProps {
  language: string;
  words: Word[];
  id: string;
}

export default function LanguageSection({
  language,
  words,
  id,
}: LanguageSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: easeSmooth }}
      className="mb-16"
    >
      {/* Language label */}
      <div className="flex items-baseline gap-3 mb-6 px-2">
        <h2
          className="font-display text-xl sm:text-2xl"
          style={{ color: "var(--theme-accent)" }}
        >
          {language}
        </h2>
        <span
          className="font-body text-xs"
          style={{ color: "var(--theme-text-tertiary)", opacity: 0.5 }}
        >
          {words.length} {words.length === 1 ? "word" : "words"}
        </span>
      </div>

      {/* Word grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
        {words.map((word, i) => (
          <BrowseCard key={word.slug} word={word} index={i} />
        ))}
      </div>

      {/* Section divider */}
      <div
        className="mt-10 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--theme-border) 20%, var(--theme-border) 80%, transparent 100%)",
          opacity: 0.3,
        }}
      />
    </motion.section>
  );
}
