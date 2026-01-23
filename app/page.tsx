"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import WordCloud from "@/components/home/WordCloud";

const WorldBackground = dynamic(() => import("@/components/home/WorldBackground"), {
  ssr: false,
});

const IntroSequence = dynamic(() => import("@/components/home/IntroSequence"), {
  ssr: false,
});

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showIntro, setShowIntro] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("journey-visited");
    if (!hasVisited) {
      setShowIntro(true);
    } else {
      setReady(true);
    }
  }, []);

  const handleIntroComplete = useCallback(() => {
    localStorage.setItem("journey-visited", "true");
    setShowIntro(false);
    setReady(true);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* First-visit intro */}
      {showIntro && <IntroSequence onComplete={handleIntroComplete} />}

      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-abyss via-deep-water to-abyss" />

      {/* World map silhouette with origin dots */}
      {ready && <WorldBackground />}

      {/* Header */}
      <motion.header
        className="relative z-10 pt-12 sm:pt-16 md:pt-20 text-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-moonlight/80 tracking-wide"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          The Journey
        </motion.h1>
        <motion.p
          className="mt-3 text-sm sm:text-base text-mist/50 font-body tracking-widest"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          Fifty words. Fifty worlds.
        </motion.p>
      </motion.header>

      {/* Search */}
      <motion.div
        className="relative z-10 mt-8 w-full max-w-sm px-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-fog/40"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search words, languages..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-ink/60 border border-moonlight/8 text-moonlight/90 placeholder-fog/30 font-body text-sm focus:outline-none focus:border-amber-glow/30 focus:bg-ink/80 transition-all duration-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-fog/40 hover:text-moonlight transition-colors cursor-pointer"
              aria-label="Clear search"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </motion.div>

      {/* Word Cloud */}
      <div className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-6 sm:px-12 py-12 sm:py-16">
        <WordCloud searchQuery={searchQuery} />
      </div>
    </main>
  );
}
