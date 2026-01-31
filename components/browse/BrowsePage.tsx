"use client";

import { motion } from "framer-motion";
import { easeSmooth, fadeIn } from "@/lib/animations";
import { useTransition } from "@/components/TransitionProvider";
import type { Word } from "@/data/word-types";
import BrowseHeader from "./BrowseHeader";
import LanguageBar from "./LanguageBar";
import LanguageSection from "./LanguageSection";

interface WordGroup {
  language: string;
  words: Word[];
}

interface BrowsePageProps {
  groups: WordGroup[];
  totalWords: number;
  totalLanguages: number;
}

function toId(language: string): string {
  return `lang-${language.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`;
}

export default function BrowsePage({
  groups,
  totalWords,
  totalLanguages,
}: BrowsePageProps) {
  const { navigateHome } = useTransition();
  const languageNames = groups.map((g) => g.language);

  return (
    <main
      className="grain min-h-screen pb-16 transition-colors duration-300 relative"
      style={{ background: "var(--theme-bg-primary)" }}
    >
      {/* Ambient vignette */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(10, 10, 20, 0.4) 100%)",
        }}
      />

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeSmooth, delay: 0.2 }}
        className="fixed top-0 left-0 z-30 p-5"
      >
        <button
          onClick={navigateHome}
          className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-70 cursor-pointer"
          style={{ color: "var(--theme-text-tertiary)" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="text-xs font-body tracking-wider">Back</span>
        </button>
      </motion.div>

      {/* Content */}
      <div className="relative pt-24">
        <motion.div variants={fadeIn} initial="hidden" animate="visible">
          <BrowseHeader
            totalWords={totalWords}
            totalLanguages={totalLanguages}
          />

          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <LanguageBar languages={languageNames} />

            {groups.map((group) => (
              <LanguageSection
                key={group.language}
                id={toId(group.language)}
                language={group.language}
                words={group.words}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
