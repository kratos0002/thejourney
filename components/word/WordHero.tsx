"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Word } from "@/data/words";

interface WordHeroProps {
  word: Word;
}

export default function WordHero({ word }: WordHeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* Glow backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-amber-glow/5 blur-3xl animate-[glow-pulse_4s_ease-in-out_infinite]" />
      </div>

      <motion.div
        className="relative text-center"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {/* Word in original script */}
        <motion.h1
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-moonlight glow-text"
          style={{ animation: "breathe 6s ease-in-out infinite" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {word.word}
        </motion.h1>

        {/* Romanization */}
        <motion.p
          className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl text-mist/80 font-body font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {word.romanization}
        </motion.p>

        {/* Language */}
        <motion.p
          className="mt-2 text-sm sm:text-base text-fog/70 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {word.language}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-mist/30 to-transparent animate-[breathe_3s_ease-in-out_infinite]" />
      </motion.div>
    </section>
  );
}
