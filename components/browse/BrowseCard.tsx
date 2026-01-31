"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { easeSmooth } from "@/lib/animations";
import type { Word } from "@/data/word-types";

interface BrowseCardProps {
  word: Word;
  index: number;
}

function truncateHook(hook: string, maxLength = 55): string {
  if (hook.length <= maxLength) return hook;
  const truncated = hook.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 20 ? truncated.slice(0, lastSpace) : truncated) + "\u2026";
}

function getGlowColor(word: Word): string {
  if (word.journey.length > 0 && word.journey[0].color) {
    return word.journey[0].color;
  }
  return "#d4a574";
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeSmooth,
      delay: i * 0.04,
    },
  }),
};

export default function BrowseCard({ word, index }: BrowseCardProps) {
  const glowColor = getGlowColor(word);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{
        y: -4,
        transition: { duration: 0.3, ease: easeSmooth },
      }}
      className="group"
    >
      <Link
        href={`/word/${word.slug}`}
        className="block text-center px-3 py-4 sm:px-4 sm:py-5 rounded-xl transition-all duration-500 relative"
      >
        {/* Ambient glow on hover */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(ellipse at center 30%, ${glowColor}10 0%, transparent 70%)`,
          }}
        />

        {/* Word in original script */}
        <p
          className="font-display text-2xl sm:text-3xl leading-tight relative mb-1"
          style={{
            color: "var(--theme-text-primary)",
            textShadow: `0 0 30px ${glowColor}20, 0 0 60px ${glowColor}10`,
          }}
        >
          {word.word}
        </p>

        {/* Romanization */}
        <p
          className="font-body text-xs sm:text-sm tracking-wide mb-0.5"
          style={{ color: "var(--theme-accent)", opacity: 0.7 }}
        >
          {word.romanization}
        </p>

        {/* Hook — desktop only */}
        <p
          className="font-body text-[10px] leading-relaxed max-w-[160px] mx-auto hidden lg:block mt-1"
          style={{ color: "var(--theme-text-secondary)", opacity: 0.35 }}
        >
          {truncateHook(word.hook)}
        </p>
      </Link>
    </motion.div>
  );
}
