"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { easeSmooth } from "@/lib/animations";
import type { Word } from "@/data/word-types";

interface CabinetCardProps {
  word: Word;
  index: number;
}

function truncateHook(hook: string, maxLength = 60): string {
  if (hook.length <= maxLength) return hook;
  const truncated = hook.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 25 ? truncated.slice(0, lastSpace) : truncated) + "\u2026";
}

function getGlowColor(word: Word): string {
  if (word.journey.length > 0 && word.journey[0].color) {
    return word.journey[0].color;
  }
  return "#d4a574";
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: easeSmooth,
      delay: i * 0.07,
    },
  }),
};

export default function CabinetCard({ word, index }: CabinetCardProps) {
  const glowColor = getGlowColor(word);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -6,
        transition: { duration: 0.4, ease: easeSmooth },
      }}
      className="group shrink-0 w-[200px] sm:w-auto"
    >
      <Link
        href={`/word/${word.slug}`}
        className="block text-center px-4 pt-6 pb-4 transition-all duration-500"
        style={{ position: "relative" }}
      >
        {/* Cultural color ambient glow behind the word */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(ellipse at center 30%, ${glowColor}08 0%, transparent 70%)`,
          }}
        />

        {/* Word in original script — the artifact */}
        <div className="relative mb-2">
          <p
            className="font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-tight"
            style={{
              color: "var(--theme-text-primary)",
              textShadow: `0 0 40px ${glowColor}30, 0 0 80px ${glowColor}15`,
              animation: "breathe 6s ease-in-out infinite",
            }}
          >
            {word.word}
          </p>
        </div>

        {/* Museum placard */}
        <p
          className="font-body text-sm tracking-wide mb-0.5"
          style={{ color: "var(--theme-accent)", opacity: 0.75 }}
        >
          {word.romanization}
        </p>

        <p
          className="text-[9px] uppercase tracking-[0.25em] font-body mb-2"
          style={{ color: "var(--theme-text-tertiary)", opacity: 0.6 }}
        >
          {word.language}
        </p>

        {/* Hook — whispered context */}
        <p
          className="font-body text-[11px] leading-relaxed max-w-[180px] mx-auto hidden sm:block"
          style={{ color: "var(--theme-text-secondary)", opacity: 0.45 }}
        >
          {truncateHook(word.hook)}
        </p>
      </Link>
    </motion.div>
  );
}
