"use client";

import { useEffect, useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { Word } from "@/data/word-types";
import BubbleNav from "@/components/home/BubbleNav";
import StartPrompt from "@/components/home/StartPrompt";
import ProfilePanel from "@/components/ProfilePanel";
import FeedbackModal from "@/components/FeedbackModal";
import { getNotificationCount } from "@/lib/feedback";
import { trackEvent } from "@/lib/analytics";
import { useExploration } from "@/components/ExplorationProvider";

const WorldBackground = dynamic(() => import("@/components/home/WorldBackground"), {
  ssr: false,
});

const IntroSequence = dynamic(() => import("@/components/home/IntroSequence"), {
  ssr: false,
});

export default function HomePage({ words }: { words: Word[] }) {
  const [showIntro, setShowIntro] = useState(false);
  const [ready, setReady] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [notifCount, setNotifCount] = useState(0);
  const { user } = useExploration();

  useEffect(() => {
    const hasVisited = localStorage.getItem("journey-visited");
    if (!hasVisited) {
      setShowIntro(true);
    } else {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (user) {
      getNotificationCount().then(setNotifCount).catch(() => {});
    } else {
      setNotifCount(0);
    }
  }, [user]);

  const handleIntroComplete = useCallback(() => {
    localStorage.setItem("journey-visited", "true");
    setShowIntro(false);
    setReady(true);
  }, []);

  return (
    <main className="fixed inset-0 overflow-hidden overscroll-none">
      {/* First-visit intro */}
      {showIntro && <IntroSequence onComplete={handleIntroComplete} />}

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-abyss via-deep-water to-abyss" />

      {/* World map silhouette with origin dots */}
      {ready && <WorldBackground words={words} />}

      {/* Full-screen bubble navigation */}
      <div className="absolute inset-0 z-10">
        <BubbleNav words={words} />
      </div>

      {/* Start prompt for first-time users */}
      <StartPrompt />

      {/* Header overlay */}
      <motion.header
        className="absolute top-0 left-0 right-0 z-20 text-center pointer-events-none"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 1.5rem)" }}
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
        className="absolute right-6 z-20 w-9 h-9 rounded-full border border-moonlight/10 bg-abyss/40 backdrop-blur-sm flex items-center justify-center hover:border-moonlight/20 transition-colors duration-300 cursor-pointer"
        style={{ top: "calc(env(safe-area-inset-top, 0px) + 1.5rem)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => { setProfileOpen(true); trackEvent("profile_opened"); }}
        aria-label="Profile"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-fog/50">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>
        </svg>
        {notifCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-glow rounded-full border border-abyss" />
        )}
      </motion.button>

      {/* Profile panel */}
      <ProfilePanel words={words} open={profileOpen} onClose={() => setProfileOpen(false)} onFeedbackClick={() => setFeedbackOpen(true)} />

      {/* Feedback modal */}
      <FeedbackModal words={words} open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </main>
  );
}
