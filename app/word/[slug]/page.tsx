"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getWordBySlug, Word } from "@/data/words";
import WordHero from "@/components/word/WordHero";
import WordHook from "@/components/word/WordHook";
import WordStory from "@/components/word/WordStory";
import JourneyMap from "@/components/word/JourneyMap";
import WordSound from "@/components/word/WordSound";
import WordRelatives from "@/components/word/WordRelatives";
import WordMeaning from "@/components/word/WordMeaning";
import ProgressIndicator from "@/components/word/ProgressIndicator";

export default function WordPage() {
  const params = useParams();
  const router = useRouter();
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
      {/* Background gradient that subtly shifts */}
      <div className="fixed inset-0 bg-gradient-to-b from-abyss via-deep-water to-abyss pointer-events-none" />

      {/* Top bar with word name and back button */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <button
          onClick={() => router.push("/")}
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

      {/* Layers */}
      <div className="relative z-10">
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
