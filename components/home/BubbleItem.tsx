"use client";

import { useRef } from "react";
import { Word } from "@/data/word-types";
import { useTransition } from "@/components/TransitionProvider";

interface BubbleItemProps {
  word: Word;
  screenX: number;
  screenY: number;
  bubbleScale: number;
  dimmed?: boolean;
  wasDrag: () => boolean;
}

const SIZE = 82;

export default function BubbleItem({
  word,
  screenX,
  screenY,
  bubbleScale,
  dimmed,
  wasDrag,
}: BubbleItemProps) {
  const { navigateToWord } = useTransition();
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Only navigate if this wasn't a drag gesture
    if (dimmed || wasDrag()) return;
    const rect = ref.current?.getBoundingClientRect();
    const origin = rect
      ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      : { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    navigateToWord(word.slug, word.word, origin);
  };

  // Compute visual size from sphere distortion
  const visualSize = SIZE * bubbleScale;
  const opacity = dimmed ? 0.1 : Math.max(0.15, bubbleScale);
  const showLabel = bubbleScale > 0.6;

  return (
    <button
      ref={ref}
      data-bubble
      className="absolute group flex flex-col items-center justify-center"
      style={{
        left: screenX,
        top: screenY,
        width: visualSize,
        height: visualSize,
        transform: "translate(-50%, -50%)",
        opacity,
        pointerEvents: dimmed ? "none" : "auto",
        transition: "width 0.15s ease-out, height 0.15s ease-out, opacity 0.2s ease-out",
        willChange: "left, top, width, height, opacity",
      }}
      onClick={handleClick}
      aria-label={`Explore ${word.romanization} - ${word.language}`}
      aria-hidden={dimmed}
      tabIndex={dimmed ? -1 : 0}
    >
      {/* Circle background */}
      <div className="absolute inset-0 rounded-full bg-ink/70 border border-moonlight/10 group-hover:border-amber-glow/40 group-hover:bg-ink/90 transition-all duration-200" />

      {/* Hover glow */}
      <div className="absolute inset-0 -m-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-amber-glow/10 blur-md" />

      {/* Word in original script */}
      <span
        className="relative z-10 font-display font-semibold text-moonlight/90 group-hover:text-moonlight transition-colors duration-200 leading-tight text-center px-1"
        style={{
          fontSize: `${Math.max(10, bubbleScale * 18)}px`,
          maxWidth: visualSize - 8,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {word.word}
      </span>

      {/* Romanization below */}
      {showLabel && (
        <span
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-mist/60 group-hover:text-mist font-body transition-colors duration-200"
          style={{
            bottom: -Math.max(12, bubbleScale * 16),
            fontSize: `${Math.max(8, bubbleScale * 11)}px`,
          }}
        >
          {word.romanization}
        </span>
      )}
    </button>
  );
}
