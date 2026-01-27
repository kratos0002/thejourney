"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Word } from "@/data/word-types";
import { useTransition } from "@/components/TransitionProvider";
import { useExploration } from "@/components/ExplorationProvider";
import { useFeatureFlag } from "@/hooks/useFeatureFlag";
import WordHero from "@/components/word/WordHero";
import WordHook from "@/components/word/WordHook";
import WordStory from "@/components/word/WordStory";
import WordRelatives from "@/components/word/WordRelatives";
import WordMeaning from "@/components/word/WordMeaning";
import ProgressIndicator from "@/components/word/ProgressIndicator";
import AmbientBackground from "@/components/word/AmbientBackground";
import KeyboardNav from "@/components/word/KeyboardNav";
import ExplorationGate from "@/components/word/ExplorationGate";
import PremiumGate from "@/components/word/PremiumGate";
import ExplorationProgress from "@/components/word/ExplorationProgress";

const ShareDrawer = dynamic(() => import("@/components/share/ShareDrawer"), {
  ssr: false,
});

const JourneyMap = dynamic(() => import("@/components/word/JourneyMap"), {
  ssr: false,
  loading: () => (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 animate-spin" style={{ borderColor: "var(--theme-accent)", borderTopColor: "var(--theme-accent)", opacity: 0.5 }} />
    </section>
  ),
});

const WordSound = dynamic(() => import("@/components/word/WordSound"), {
  ssr: false,
  loading: () => (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-6 h-6 rounded-full border-2 animate-spin" style={{ borderColor: "var(--theme-text-primary)", borderTopColor: "var(--theme-text-primary)", opacity: 0.3 }} />
    </section>
  ),
});

export default function WordPageClient({ word, suggestions }: { word: Word; suggestions: { slug: string; romanization: string }[] }) {
  const { navigateHome } = useTransition();
  const { markExplored } = useExploration();
  const shareCardsEnabled = useFeatureFlag("share_cards");
  const [shareOpen, setShareOpen] = useState(false);

  // Mark word as explored after 3s dwell time
  useEffect(() => {
    const timer = setTimeout(() => {
      markExplored(word.slug);
    }, 3000);
    return () => clearTimeout(timer);
  }, [word.slug, markExplored]);

  return (
    <main className="relative transition-colors duration-300" style={{ background: "var(--theme-bg-primary)" }}>
      <ExplorationGate />
      <PremiumGate />
      <KeyboardNav />
      <AmbientBackground />

      <motion.header
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 1rem)", paddingBottom: "1rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <button
          onClick={navigateHome}
          className="transition-colors duration-300 font-body text-sm cursor-pointer"
          style={{ color: "var(--theme-text-tertiary)" }}
          aria-label="Return home"
        >
          &larr; Back
        </button>
        <div className="flex items-center gap-4">
          {shareCardsEnabled && (
            <button
              onClick={() => setShareOpen(true)}
              className="transition-colors duration-300 cursor-pointer p-2 rounded-full"
              style={{ color: "var(--theme-text-tertiary)" }}
              aria-label="Share this word"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </button>
          )}
          <div className="flex flex-col items-end gap-0.5">
            <span className="text-xs font-body tracking-wider" style={{ color: "var(--theme-text-tertiary)" }}>
              {word.romanization}
            </span>
            <ExplorationProgress />
          </div>
        </div>
      </motion.header>

      <ProgressIndicator />

      <div className="relative z-10 snap-y snap-mandatory">
        <WordHero word={word} />
        <WordHook hook={word.hook} />
        <WordStory story={word.story} />
        <JourneyMap journey={word.journey} word={word} />
        <WordSound sounds={word.sounds} />
        <WordRelatives relatives={word.relatives} />
        <WordMeaning word={word} suggestions={suggestions} />
      </div>

      {shareCardsEnabled && (
        <ShareDrawer word={word} open={shareOpen} onClose={() => setShareOpen(false)} />
      )}
    </main>
  );
}
