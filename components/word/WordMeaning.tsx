"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Word } from "@/data/word-types";
import { trackEvent } from "@/lib/analytics";
import { useExploration } from "@/components/ExplorationProvider";

interface WordMeaningProps {
  word: Word;
  suggestions: { slug: string; romanization: string }[];
  languageSlug?: string;
}

export default function WordMeaning({ word, suggestions, languageSlug }: WordMeaningProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const router = useRouter();
  const { exploredSlugs } = useExploration();

  const unexploredSuggestions = useMemo(
    () => suggestions.filter((s) => !exploredSlugs.has(s.slug)).slice(0, 3),
    [suggestions, exploredSlugs]
  );

  const paragraphs = word.meaningNow.split("\n\n");

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.div
        className="max-w-[600px] w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h3 className="text-sm uppercase tracking-[0.2em] font-body mb-12" style={{ color: "var(--theme-text-tertiary)" }}>
          Today
        </h3>

        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="font-body text-base sm:text-lg leading-[1.75]"
              style={{ color: "var(--theme-text-primary)", opacity: 0.8 }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Action buttons */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <button
            className="px-6 py-3 text-sm font-body tracking-wider rounded-full transition-all duration-500 cursor-pointer"
            style={{ color: "var(--theme-text-secondary)", border: "1px solid var(--theme-border)" }}
            onClick={() => router.push("/")}
          >
            Return to all words
          </button>

          {languageSlug && (
            <Link
              href={`/language/${languageSlug}`}
              className="group inline-flex items-center gap-1.5 text-xs font-body tracking-wide transition-opacity duration-300 hover:opacity-80"
              style={{ color: "var(--theme-accent)", opacity: 0.6 }}
            >
              <span>Discover more from {word.language}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </motion.div>

        {/* Explore more words */}
        {unexploredSuggestions.length > 0 && (
          <motion.div
            className="mt-20 pt-12"
            style={{ borderTop: "1px solid var(--theme-border)" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] font-body mb-6" style={{ color: "var(--theme-text-tertiary)" }}>
              Explore more words
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {unexploredSuggestions.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => { trackEvent("suggestion_clicked", { slug: s.slug, from: word.slug }); router.push(`/word/${s.slug}`); }}
                  className="px-4 py-2 text-sm font-body rounded-full transition-all duration-300 cursor-pointer"
                  style={{ color: "var(--theme-text-secondary)", border: "1px solid var(--theme-border)" }}
                >
                  {s.romanization}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
