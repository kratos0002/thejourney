"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Word } from "@/data/word-types";
import { useTransition } from "@/components/TransitionProvider";

interface BubbleItemProps {
  word: Word;
  x: number;
  y: number;
  dimmed?: boolean;
  scale: number;
}

export default function BubbleItem({ word, x, y, dimmed, scale }: BubbleItemProps) {
  const { navigateToWord } = useTransition();
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (dimmed) return;
    e.stopPropagation();
    const rect = ref.current?.getBoundingClientRect();
    const origin = rect
      ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      : { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    navigateToWord(word.slug, word.word, origin);
  };

  // Show romanization when zoomed in enough
  const showLabel = scale > 0.8;

  return (
    <motion.button
      ref={ref}
      className="absolute group flex flex-col items-center justify-center"
      style={{
        left: x,
        top: y,
        width: 88,
        height: 88,
        transform: "translate(-50%, -50%)",
        cursor: dimmed ? "default" : "pointer",
        pointerEvents: dimmed ? "none" : "auto",
      }}
      onClick={handleClick}
      animate={{
        opacity: dimmed ? 0.12 : 1,
        scale: dimmed ? 0.85 : 1,
      }}
      transition={{ duration: 0.3 }}
      aria-label={`Explore ${word.romanization} - ${word.language}`}
      aria-hidden={dimmed}
      tabIndex={dimmed ? -1 : 0}
    >
      {/* Circle background */}
      <div className="absolute inset-0 rounded-full bg-ink/60 border border-moonlight/8 group-hover:border-amber-glow/30 group-hover:bg-ink/80 transition-all duration-300" />

      {/* Hover glow */}
      <div className="absolute inset-0 -m-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-amber-glow/8 blur-md" />

      {/* Word in original script */}
      <span className="relative z-10 text-lg font-display font-semibold text-moonlight/90 group-hover:text-moonlight transition-colors duration-300 leading-tight text-center px-1 truncate max-w-[80px]">
        {word.word}
      </span>

      {/* Romanization below the circle */}
      {showLabel && (
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-mist/60 group-hover:text-mist/90 font-body transition-colors duration-300">
          {word.romanization}
        </span>
      )}
    </motion.button>
  );
}
