"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { wordCardVariants } from "@/lib/animations";
import type { Word } from "@/data/word-types";

interface CabinetCardProps {
  word: Word;
}

function truncateHook(hook: string, maxLength = 80): string {
  if (hook.length <= maxLength) return hook;
  const truncated = hook.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 40 ? truncated.slice(0, lastSpace) : truncated) + "...";
}

function getCardGlowColor(word: Word): string {
  if (word.journey.length > 0 && word.journey[0].color) {
    return word.journey[0].color;
  }
  return "rgba(212, 165, 116, 0.15)";
}

export default function CabinetCard({ word }: CabinetCardProps) {
  const glowColor = getCardGlowColor(word);

  return (
    <motion.div variants={wordCardVariants} whileHover="hover">
      <Link
        href={`/word/${word.slug}`}
        className="block rounded-2xl p-6 transition-colors duration-300"
        style={{
          background: "var(--theme-surface)",
          border: "1px solid var(--theme-border)",
        }}
      >
        {/* Word in original script */}
        <p
          className="font-display text-3xl mb-2"
          style={{
            color: "var(--theme-text-primary)",
            textShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
          }}
        >
          {word.word}
        </p>

        {/* Romanization */}
        <p
          className="font-body text-sm mb-1"
          style={{ color: "var(--theme-accent)", opacity: 0.8 }}
        >
          {word.romanization}
        </p>

        {/* Language */}
        <p
          className="text-[10px] uppercase tracking-[0.2em] font-body mb-3"
          style={{ color: "var(--theme-text-tertiary)" }}
        >
          {word.language}
        </p>

        {/* Hook */}
        <p
          className="font-body text-xs leading-relaxed"
          style={{ color: "var(--theme-text-secondary)", opacity: 0.7 }}
        >
          {truncateHook(word.hook)}
        </p>
      </Link>
    </motion.div>
  );
}
