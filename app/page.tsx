"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import BubbleNav from "@/components/home/BubbleNav";

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
    <main className="relative h-screen w-screen overflow-hidden">
      {/* First-visit intro */}
      {showIntro && <IntroSequence onComplete={handleIntroComplete} />}

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-abyss via-deep-water to-abyss" />

      {/* World map silhouette with origin dots */}
      {ready && <WorldBackground />}

      {/* Full-screen bubble navigation */}
      <div className="absolute inset-0 z-10">
        <BubbleNav searchQuery={searchQuery} />
      </div>

      {/* Header overlay */}
      <motion.header
        className="absolute top-0 left-0 right-0 z-20 pt-6 sm:pt-8 text-center pointer-events-none"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-moonlight/70 tracking-wide"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          The Journey
        </motion.h1>
        <motion.p
          className="mt-1 text-xs sm:text-sm text-mist/40 font-body tracking-widest"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          Fifty words. Fifty worlds.
        </motion.p>
      </motion.header>

      {/* Search overlay */}
      <motion.div
        className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 z-20 w-full max-w-xs px-6 pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="relative pointer-events-auto">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-fog/40"
            width="14"
            height="14"
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
            placeholder="Search words..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-ink/80 border border-moonlight/10 text-moonlight/90 placeholder-fog/30 font-body text-xs focus:outline-none focus:border-amber-glow/30 focus:bg-ink/90 transition-all duration-300 backdrop-blur-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-fog/40 hover:text-moonlight transition-colors cursor-pointer"
              aria-label="Clear search"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </motion.div>
    </main>
  );
}
