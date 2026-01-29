"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface CabinetHeaderProps {
  wordCount: number;
  languageCount: number;
  continentCount: number;
}

function buildStatLine(wordCount: number, languageCount: number, continentCount: number): string {
  const wordPart = wordCount === 1 ? "1 word gathered" : `${wordCount} words gathered`;

  if (languageCount <= 1 && continentCount <= 1) {
    return wordPart;
  }

  const parts = [wordPart];

  if (languageCount > 1) {
    parts.push(`from ${languageCount} languages`);
  }

  if (continentCount > 1) {
    parts.push(`across ${continentCount} continents`);
  }

  return parts.join(" ");
}

export default function CabinetHeader({ wordCount, languageCount, continentCount }: CabinetHeaderProps) {
  return (
    <motion.div variants={fadeInUp} className="text-center mb-12 px-6">
      <p
        className="text-[10px] uppercase tracking-[0.3em] font-body mb-3"
        style={{ color: "var(--theme-text-tertiary)" }}
      >
        Collection
      </p>
      <h1
        className="font-display text-4xl md:text-5xl mb-4"
        style={{ color: "var(--theme-text-primary)" }}
      >
        Your Cabinet
      </h1>
      <p
        className="font-body text-sm md:text-base"
        style={{ color: "var(--theme-text-secondary)" }}
      >
        {buildStatLine(wordCount, languageCount, continentCount)}
      </p>
    </motion.div>
  );
}
