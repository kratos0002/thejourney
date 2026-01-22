"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import WordCloud from "@/components/home/WordCloud";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-abyss via-deep-water to-abyss" />

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
          Ten words. Ten worlds.
        </motion.p>
      </motion.header>

      {/* Word Cloud */}
      <div className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-6 sm:px-12 py-12 sm:py-16">
        <WordCloud />
      </div>
    </main>
  );
}
