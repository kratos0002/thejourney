"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTransition } from "@/components/TransitionProvider";
import { useExploration } from "@/components/ExplorationProvider";

const FEATURED_WORDS = [
  { slug: "qahwa", romanization: "qahwa", hook: "A word that kept Sufi monks awake for midnight prayers." },
  { slug: "tsunami", romanization: "tsunami", hook: "The sound of a harbor being swallowed." },
  { slug: "eureka", romanization: "eureka", hook: "A naked mathematician ran through the streets shouting a word we still shout today." },
  { slug: "chocolate", romanization: "chocolate", hook: "The Aztecs drank the gods' bitter water. Europe added sugar and changed the world." },
  { slug: "paradise", romanization: "paradise", hook: "The Persian word for a walled garden became every religion's word for heaven." },
  { slug: "assassin", romanization: "assassin", hook: "A medieval sect's name became the word for political murder." },
];

export default function StartPrompt() {
  const { navigateToWord } = useTransition();
  const { exploredCount } = useExploration();
  const [visible, setVisible] = useState(false);

  const featured = useMemo(() => {
    const idx = Math.floor(Math.random() * FEATURED_WORDS.length);
    return FEATURED_WORDS[idx];
  }, []);

  useEffect(() => {
    // Only show if user hasn't explored any words yet
    if (exploredCount === 0) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [exploredCount]);

  const handleClick = () => {
    setVisible(false);
    // Small delay so animation plays before navigation
    setTimeout(() => {
      navigateToWord(featured.slug, featured.romanization, {
        x: window.innerWidth / 2,
        y: window.innerHeight - 120,
      });
    }, 200);
  };

  if (exploredCount > 0) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 max-w-sm w-[90%] px-6 py-4 rounded-2xl border border-moonlight/8 bg-abyss/80 backdrop-blur-sm text-center cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={handleClick}
        >
          <p className="text-xs text-fog/40 font-body tracking-widest uppercase mb-2">
            Start here
          </p>
          <p className="font-display text-sm sm:text-base text-moonlight/80 font-light italic leading-relaxed group-hover:text-moonlight transition-colors duration-300">
            &ldquo;{featured.hook}&rdquo;
          </p>
          <p className="mt-2 text-[10px] text-amber-glow/50 font-body tracking-wider uppercase">
            {featured.romanization} →
          </p>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
