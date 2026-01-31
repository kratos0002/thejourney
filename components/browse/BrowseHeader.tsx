"use client";

import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/animations";

interface BrowseHeaderProps {
  totalWords: number;
  totalLanguages: number;
}

export default function BrowseHeader({
  totalWords,
  totalLanguages,
}: BrowseHeaderProps) {
  return (
    <div className="text-center mb-12 px-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: easeSmooth, delay: 0.1 }}
        className="text-[10px] uppercase tracking-[0.35em] font-body mb-4"
        style={{ color: "var(--theme-text-tertiary)", opacity: 0.5 }}
      >
        Index
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: easeSmooth, delay: 0.2 }}
        className="font-display text-4xl md:text-5xl lg:text-6xl mb-5"
        style={{
          color: "var(--theme-text-primary)",
          textShadow: "0 0 80px rgba(212, 165, 116, 0.08)",
        }}
      >
        The Collection
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: easeSmooth, delay: 0.5 }}
      >
        {/* Decorative divider */}
        <div
          className="w-12 h-px mx-auto mb-5"
          style={{ background: "var(--theme-accent)", opacity: 0.3 }}
        />

        <p
          className="font-body text-sm md:text-base"
          style={{ color: "var(--theme-text-secondary)", opacity: 0.6 }}
        >
          {totalWords} words from {totalLanguages} languages
        </p>
      </motion.div>
    </div>
  );
}
