"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroSequenceProps {
  onComplete: () => void;
}

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),    // Show first line
      setTimeout(() => setPhase(2), 2200),   // Show second line
      setTimeout(() => setPhase(3), 3800),   // Show third line
      setTimeout(() => setPhase(4), 5200),   // Fade out
      setTimeout(() => {
        onComplete();
      }, 6000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-abyss"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Line 1 */}
          <motion.p
            className="font-body text-sm text-fog/60 tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Every word has a past
          </motion.p>

          {/* Line 2 - main title */}
          <motion.h1
            className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-light text-moonlight/90"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={phase >= 2 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            The Journey
          </motion.h1>

          {/* Line 3 */}
          <motion.p
            className="mt-4 font-body text-base text-mist/50 tracking-wider"
            initial={{ opacity: 0, y: 8 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Trace the paths words take across centuries
          </motion.p>

          {/* Subtle breathing circle */}
          <motion.div
            className="absolute w-64 h-64 rounded-full border border-moonlight/5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={phase >= 1 ? { scale: [0.8, 1.1, 0.8], opacity: [0, 0.3, 0] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
