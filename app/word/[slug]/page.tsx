"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getWordBySlug, Word } from "@/data/words";
import { useTransition } from "@/components/TransitionProvider";
import WordHero from "@/components/word/WordHero";
import WordHook from "@/components/word/WordHook";
import WordStory from "@/components/word/WordStory";
import WordRelatives from "@/components/word/WordRelatives";
import WordMeaning from "@/components/word/WordMeaning";
import ProgressIndicator from "@/components/word/ProgressIndicator";
import AmbientBackground from "@/components/word/AmbientBackground";
import KeyboardNav from "@/components/word/KeyboardNav";

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

export default function WordPage() {
  const params = useParams();
  const router = useRouter();
  const { navigateHome } = useTransition();
  const [word, setWord] = useState<Word | null>(null);

  useEffect(() => {
    const slug = params?.slug as string;
    const found = getWordBySlug(slug);
    if (found) {
      setWord(found);
    } else {
      router.push("/");
    }
  }, [params, router]);

  if (!word) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-abyss">
        <div className="w-8 h-8 rounded-full border-2 border-amber-glow/30 border-t-amber-glow animate-spin" />
      </div>
    );
  }

  return (
    <main className="relative bg-abyss">
      {/* Keyboard navigation */}
      <KeyboardNav />

      {/* Ambient background that shifts with scroll */}
      <AmbientBackground />

      {/* Top bar with word name and back button */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4"
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
        <span className="text-fog/40 text-xs font-body tracking-wider">
          {word.romanization}
        </span>
      </motion.header>

      {/* Progress indicator */}
      <ProgressIndicator />

      {/* Layers with scroll-snap */}
      <div className="relative z-10 snap-y snap-mandatory">
        <WordHero word={word} />
        <WordHook hook={word.hook} />
        <WordStory story={word.story} />
        <JourneyMap journey={word.journey} />
        <WordSound sounds={word.sounds} />
        <WordRelatives relatives={word.relatives} />
        <WordMeaning meaningNow={word.meaningNow} />
      </div>
    </main>
  );
}
