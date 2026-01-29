"use client";

import { useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type { Word } from "@/data/word-types";
import { useExploration } from "@/components/ExplorationProvider";
import { useTransition } from "@/components/TransitionProvider";
import { useFeatureFlag } from "@/hooks/useFeatureFlag";
import { getContinentFromCoords } from "@/lib/geo-utils";
import { fadeIn, easeSmooth } from "@/lib/animations";
import CabinetHeader from "./CabinetHeader";
import CabinetGrid from "./CabinetGrid";
import CabinetEmpty from "./CabinetEmpty";

export default function CabinetPage({ words }: { words: Word[] }) {
  const enabled = useFeatureFlag("cabinet_of_curiosities");
  const { exploredSlugs } = useExploration();
  const { navigateHome } = useTransition();
  const router = useRouter();
  useEffect(() => {
    if (enabled === false) {
      router.replace("/");
    }
  }, [enabled, router]);

  const exploredWords = useMemo(
    () => words.filter((w) => exploredSlugs.has(w.slug)),
    [words, exploredSlugs]
  );

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
      className="grain min-h-screen pb-16 transition-colors duration-300 relative"
      style={{ background: "var(--theme-bg-primary)" }}
    >
      {/* Ambient vignette */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(10, 10, 20, 0.4) 100%)",
        }}
      />

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeSmooth, delay: 0.2 }}
        className="fixed top-0 left-0 z-10 p-5"
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
        {exploredWords.length === 0 ? (
          <CabinetEmpty />
        ) : (
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <CabinetHeader
              wordCount={metadata.wordCount}
              languageCount={metadata.languageCount}
              continentCount={metadata.continentCount}
            />
            <CabinetGrid words={exploredWords} />
          </motion.div>
        )}
      </div>
    </main>
  );
}
