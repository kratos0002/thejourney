"use client";

import { useEffect, useCallback, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { Word } from "@/data/word-types";
import BubbleNav from "@/components/home/BubbleNav";
import StartPrompt from "@/components/home/StartPrompt";
import ProfilePanel from "@/components/ProfilePanel";
import FeedbackModal from "@/components/FeedbackModal";
import DiscoveryDrawer from "@/components/home/DiscoveryDrawer";
import { getDailyFeaturedWord } from "@/lib/daily-word";
import { getNotificationCount } from "@/lib/feedback";
import { trackEvent } from "@/lib/analytics";
import { useExploration } from "@/components/ExplorationProvider";
import { useTransition } from "@/components/TransitionProvider";
import { useFeatureFlag } from "@/hooks/useFeatureFlag";

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
  const [filteredSlugs, setFilteredSlugs] = useState<Set<string>>(new Set());
  const [hasActiveFilters, setHasActiveFilters] = useState(false);
  const { user, exploredCount } = useExploration();
  const { navigateToWord } = useTransition();
  const discoveryDrawerEnabled = useFeatureFlag("discovery_drawer");
  const dailyWordRitualEnabled = useFeatureFlag("daily_word_ritual");

  // Daily word: stable all day, independent of exploration state
  const dailyWord = useMemo(
    () => dailyWordRitualEnabled ? getDailyFeaturedWord(words) : undefined,
    [words, dailyWordRitualEnabled]
  );
  // Subtitle hook: show once per day (localStorage gated), then fade back
  const [showingHook, setShowingHook] = useState(false);
  useEffect(() => {
    if (!dailyWord || exploredCount === 0) return;
    const todayKey = new Date().toISOString().slice(0, 10);
    const storageKey = "journey-daily-hook-shown";
    if (localStorage.getItem(storageKey) === todayKey) return;

    const showTimer = setTimeout(() => {
      setShowingHook(true);
      localStorage.setItem(storageKey, todayKey);
    }, 2500);
    const hideTimer = setTimeout(() => setShowingHook(false), 12500);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, [dailyWord, exploredCount]);

  const handleFiltersChange = useCallback((matching: Set<string>, hasFilters: boolean) => {
    setFilteredSlugs(matching);
    setHasActiveFilters(hasFilters);
  }, []);

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
      <div className="absolute inset-0 transition-colors duration-500" style={{ background: "linear-gradient(to bottom, var(--theme-bg-primary), var(--theme-bg-secondary), var(--theme-bg-primary))" }} />

      {/* World map silhouette with origin dots */}
      {ready && <WorldBackground words={words} />}

      {/* Full-screen bubble navigation */}
      <div className="absolute inset-0 z-10">
        <BubbleNav
          words={words}
          filteredSlugs={hasActiveFilters ? filteredSlugs : undefined}
          hasActiveFilters={hasActiveFilters}
        />
      </div>

      {/* Start prompt for first-time users */}
      <StartPrompt />

      {/* Header overlay - fades in classroom mode */}
      <motion.header
        className="absolute top-0 left-0 right-0 z-20 text-center pointer-events-none classroom-hide transition-all duration-500"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 1.5rem)" }}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-display text-2xl sm:text-3xl md:text-4xl font-light tracking-wide"
          style={{ color: "var(--theme-text-primary)", opacity: 0.7 }}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          The Journey
        </motion.h1>
        <div className="mt-1 relative" style={{ minHeight: "1.5rem" }}>
          <AnimatePresence mode="wait">
            {showingHook && dailyWord ? (
              <motion.button
                key="hook"
                className="text-[11px] sm:text-sm font-body italic leading-snug max-w-md mx-auto px-4 line-clamp-2 pointer-events-auto cursor-pointer"
                style={{ color: "var(--theme-accent)", opacity: 0.6 }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={(e) => {
                  trackEvent("daily_word_tapped", { slug: dailyWord.slug });
                  navigateToWord(dailyWord.slug, dailyWord.word, { x: e.clientX, y: e.clientY });
                }}
              >
                &ldquo;{dailyWord.hook}&rdquo;
              </motion.button>
            ) : (
              <motion.p
                key="default"
                className="text-xs sm:text-sm font-body tracking-widest"
                style={{ color: "var(--theme-text-secondary)", opacity: 0.4 }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Where every word began
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Profile button */}
      <motion.button
        className="absolute right-6 z-20 w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors duration-300 cursor-pointer"
        style={{
          top: "calc(env(safe-area-inset-top, 0px) + 1.5rem)",
          background: "var(--theme-surface)",
          border: "1px solid var(--theme-border)"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => { setProfileOpen(true); trackEvent("profile_opened"); }}
        aria-label="Profile"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--theme-text-tertiary)" }}>
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>
        </svg>
        {notifCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full" style={{ background: "var(--theme-accent)", border: "1px solid var(--theme-bg-primary)" }} />
        )}
      </motion.button>

      {/* Profile panel */}
      <ProfilePanel words={words} open={profileOpen} onClose={() => setProfileOpen(false)} onFeedbackClick={() => setFeedbackOpen(true)} />

      {/* Feedback modal */}
      <FeedbackModal words={words} open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />

      {/* Discovery Drawer (behind feature flag) */}
      {discoveryDrawerEnabled && (
        <DiscoveryDrawer words={words} onFiltersChange={handleFiltersChange} />
      )}
    </main>
  );
}
