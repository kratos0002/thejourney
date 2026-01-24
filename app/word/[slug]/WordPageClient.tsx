"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Word } from "@/data/word-types";
import { useTransition } from "@/components/TransitionProvider";
import { useExploration } from "@/components/ExplorationProvider";
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

const JourneyMap = dynamic(() => import("@/components/word/JourneyMap"), {
  ssr: false,
  loading: () => (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-amber-glow/30 border-t-amber-glow animate-spin" />
    </section>
  ),
});

const WordSound = dynamic(() => import("@/components/word/WordSound"), {
  ssr: false,
  loading: () => (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-6 h-6 rounded-full border-2 border-moonlight/20 border-t-moonlight/60 animate-spin" />
    </section>
  ),
});

export default function WordPageClient({ word, suggestions }: { word: Word; suggestions: { slug: string; romanization: string }[] }) {
  const { navigateHome } = useTransition();
  const { markExplored } = useExploration();

  // Mark word as explored after 3s dwell time
  useEffect(() => {
    const timer = setTimeout(() => {
      markExplored(word.slug);
    }, 3000);
    return () => clearTimeout(timer);
  }, [word.slug, markExplored]);

  return (
    <main className="relative bg-abyss">
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
          className="text-fog/50 hover:text-moonlight transition-colors duration-300 font-body text-sm cursor-pointer"
          aria-label="Return home"
        >
          &larr; Back
        </button>
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-fog/40 text-xs font-body tracking-wider">
            {word.romanization}
          </span>
          <ExplorationProgress />
        </div>
      </motion.header>

      <ProgressIndicator />

      <div className="relative z-10 snap-y snap-mandatory">
        <WordHero word={word} />
        <WordHook hook={word.hook} />
        <WordStory story={word.story} />
        <JourneyMap journey={word.journey} />
        <WordSound sounds={word.sounds} />
        <WordRelatives relatives={word.relatives} />
        <WordMeaning word={word} suggestions={suggestions} />
      </div>
    </main>
  );
}
