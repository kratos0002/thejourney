"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RelativeWord } from "@/data/word-types";
import { useTransition } from "@/components/TransitionProvider";

interface WordRelativesProps {
  relatives: RelativeWord[];
}

export default function WordRelatives({ relatives }: WordRelativesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const { navigateToWord } = useTransition();

  const handleClick = (relative: RelativeWord, e: React.MouseEvent) => {
    if (!relative.available || !relative.slug) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const origin = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    navigateToWord(relative.slug, relative.word, origin);
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.div
        className="max-w-2xl w-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-center text-sm uppercase tracking-[0.2em] font-body mb-12" style={{ color: "var(--theme-text-tertiary)" }}>
          Related Words
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {relatives.map((relative, index) => (
            <motion.button
              key={index}
              onClick={(e) => handleClick(relative, e)}
              disabled={!relative.available}
              className="relative p-5 sm:p-6 rounded-2xl text-center group transition-all duration-500"
              style={{
                background: relative.available ? "var(--theme-surface)" : "var(--theme-bg-secondary)",
                border: `1px solid ${relative.available ? "var(--theme-border)" : "var(--theme-border)"}`,
                opacity: relative.available ? 1 : 0.6,
                cursor: relative.available ? "pointer" : "default",
              }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <p className="font-display text-xl sm:text-2xl transition-colors" style={{ color: "var(--theme-text-primary)", opacity: 0.9 }}>
                {relative.word}
              </p>
              <p className="mt-1 text-xs font-body" style={{ color: "var(--theme-text-tertiary)" }}>
                {relative.language}
              </p>
              <p className="mt-2 text-xs font-body leading-relaxed" style={{ color: "var(--theme-text-secondary)", opacity: 0.5 }}>
                {relative.connection}
              </p>
              {relative.available && (
                <span className="absolute top-2 right-2 text-[10px] font-body" style={{ color: "var(--theme-accent)", opacity: 0.5 }}>
                  explore &rarr;
                </span>
              )}
              {!relative.available && (
                <span className="absolute top-2 right-2 text-[10px] font-body" style={{ color: "var(--theme-text-tertiary)" }}>
                  coming soon
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
