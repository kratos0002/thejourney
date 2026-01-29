"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type { Word } from "@/data/word-types";
import { useExploration } from "@/components/ExplorationProvider";
import { useTransition } from "@/components/TransitionProvider";
import { useFeatureFlag } from "@/hooks/useFeatureFlag";
import { getContinentFromCoords } from "@/lib/geo-utils";
import { staggerContainer } from "@/lib/animations";
import CabinetHeader from "./CabinetHeader";
import CabinetGrid from "./CabinetGrid";
import CabinetEmpty from "./CabinetEmpty";
import CabinetMilestones from "./CabinetMilestones";

export default function CabinetPage({ words }: { words: Word[] }) {
  const enabled = useFeatureFlag("cabinet_of_curiosities");
  const { exploredSlugs } = useExploration();
  const { navigateHome } = useTransition();
  const router = useRouter();
  const [languageFilter, setLanguageFilter] = useState<string | null>(null);

  useEffect(() => {
    if (enabled === false) {
      router.replace("/");
    }
  }, [enabled, router]);

  const exploredWords = useMemo(
    () => words.filter((w) => exploredSlugs.has(w.slug)),
    [words, exploredSlugs]
  );

  const filteredWords = useMemo(() => {
    if (!languageFilter) return exploredWords;
    return exploredWords.filter((w) => w.language === languageFilter);
  }, [exploredWords, languageFilter]);

  const metadata = useMemo(() => {
    const languages = new Set<string>();
    const continents = new Set<string>();

    exploredWords.forEach((w) => {
      languages.add(w.language);
      if (w.journey.length > 0) {
        const continent = getContinentFromCoords(w.journey[0].coordinates);
        if (continent !== "Unknown") {
          continents.add(continent);
        }
      }
    });

    return {
      wordCount: exploredWords.length,
      languageCount: languages.size,
      continentCount: continents.size,
    };
  }, [exploredWords]);

  // Don't render while loading flag or if disabled
  if (enabled === null || enabled === false) {
    return null;
  }

  return (
    <main
      className="min-h-screen pb-16 transition-colors duration-300"
      style={{ background: "var(--theme-bg-primary)" }}
    >
      {/* Back button */}
      <div className="fixed top-0 left-0 right-0 z-10 p-5">
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
      </div>

      {/* Content */}
      <div className="pt-24">
        {exploredWords.length === 0 ? (
          <CabinetEmpty />
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <CabinetHeader
              wordCount={metadata.wordCount}
              languageCount={metadata.languageCount}
              continentCount={metadata.continentCount}
            />
            <CabinetGrid words={filteredWords} />
            <CabinetMilestones
              words={exploredWords}
              onGroupByLanguage={setLanguageFilter}
            />
          </motion.div>
        )}
      </div>
    </main>
  );
}
