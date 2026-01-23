"use client";

import { useEffect, useCallback, useState } from "react";
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
        <BubbleNav />
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
          Where every word began
        </motion.p>
      </motion.header>
    </main>
  );
}
