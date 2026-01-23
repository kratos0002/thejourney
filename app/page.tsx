"use client";

import { useEffect, useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import BubbleNav from "@/components/home/BubbleNav";
import StartPrompt from "@/components/home/StartPrompt";
import ProfilePanel from "@/components/ProfilePanel";


const WorldBackground = dynamic(() => import("@/components/home/WorldBackground"), {
  ssr: false,
});

const IntroSequence = dynamic(() => import("@/components/home/IntroSequence"), {
  ssr: false,
});

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [ready, setReady] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

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

      {/* Start prompt for first-time users */}
      <StartPrompt />

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

      {/* Profile button */}
      <motion.button
        className="absolute top-6 right-6 z-20 w-9 h-9 rounded-full border border-moonlight/10 bg-abyss/40 backdrop-blur-sm flex items-center justify-center hover:border-moonlight/20 transition-colors duration-300 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => setProfileOpen(true)}
        aria-label="Profile"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-fog/50">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>
        </svg>
      </motion.button>

      {/* Profile panel */}
      <ProfilePanel open={profileOpen} onClose={() => setProfileOpen(false)} />
    </main>
  );
}
