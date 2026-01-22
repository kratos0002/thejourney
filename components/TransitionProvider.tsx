"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionState {
  isTransitioning: boolean;
  word?: string;
  origin?: { x: number; y: number };
  targetSlug?: string;
  direction: "in" | "out";
}

interface TransitionContextType {
  navigateToWord: (slug: string, word: string, origin: { x: number; y: number }) => void;
  navigateHome: () => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateToWord: () => {},
  navigateHome: () => {},
  isTransitioning: false,
});

export function useTransition() {
  return useContext(TransitionContext);
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState<TransitionState>({
    isTransitioning: false,
    direction: "in",
  });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigateToWord = useCallback((slug: string, word: string, origin: { x: number; y: number }) => {
    setState({
      isTransitioning: true,
      word,
      origin,
      targetSlug: slug,
      direction: "in",
    });

    timeoutRef.current = setTimeout(() => {
      router.push(`/word/${slug}`);
      // Keep overlay visible during navigation, clear after mount
      setTimeout(() => {
        setState(prev => ({ ...prev, isTransitioning: false }));
      }, 300);
    }, 700);
  }, [router]);

  const navigateHome = useCallback(() => {
    setState({
      isTransitioning: true,
      direction: "out",
    });

    timeoutRef.current = setTimeout(() => {
      router.push("/");
      setTimeout(() => {
        setState(prev => ({ ...prev, isTransitioning: false }));
      }, 300);
    }, 500);
  }, [router]);

  return (
    <TransitionContext.Provider value={{ navigateToWord, navigateHome, isTransitioning: state.isTransitioning }}>
      {children}

      {/* Transition overlay */}
      <AnimatePresence>
        {state.isTransitioning && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background fade */}
            <motion.div
              className="absolute inset-0 bg-abyss"
              initial={{ opacity: 0 }}
              animate={{ opacity: state.direction === "in" ? 1 : 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Growing word */}
            {state.word && state.direction === "in" && (
              <motion.div
                className="relative z-10 font-display text-moonlight/90"
                initial={{
                  opacity: 0.8,
                  scale: 1,
                  x: state.origin ? state.origin.x - window.innerWidth / 2 : 0,
                  y: state.origin ? state.origin.y - window.innerHeight / 2 : 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 2.5,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl font-semibold">
                  {state.word}
                </span>
              </motion.div>
            )}

            {/* Outgoing transition - simple fade with subtle upward drift */}
            {state.direction === "out" && (
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span className="font-display text-2xl text-moonlight/60">
                  The Journey
                </span>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
