"use client";

import { useRef } from "react";
import { Word } from "@/data/word-types";
import { useTransition } from "@/components/TransitionProvider";

interface BubbleItemProps {
  word: Word;
  screenX: number;
  screenY: number;
  depth: number; // -1 (back) to 1 (front)
  projScale: number; // perspective scale factor
  dimmed?: boolean;
  wasDrag: () => boolean;
}

const BASE_SIZE = 64;

export default function BubbleItem({
  word,
  screenX,
  screenY,
  depth,
  projScale,
  dimmed,
  wasDrag,
}: BubbleItemProps) {
  const { navigateToWord } = useTransition();
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (dimmed || wasDrag() || depth < 0.1) return;
    const rect = ref.current?.getBoundingClientRect();
    const origin = rect
      ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      : { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    navigateToWord(word.slug, word.word, origin);
  };

  // Size and opacity based on depth
  const size = BASE_SIZE * projScale;
  const opacity = dimmed ? 0.05 : Math.max(0, Math.min(1, (depth + 0.3) * 0.9));
  const showLabel = depth > 0.3 && size > 40;
  const fontSize = Math.max(10, 14 * projScale);

  return (
    <button
      ref={ref}
      data-bubble
      className="absolute group flex items-center justify-center"
      style={{
        left: screenX,
        top: screenY,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        opacity,
        zIndex: Math.round((depth + 1) * 50),
        pointerEvents: dimmed || depth < 0.1 ? "none" : "auto",
        cursor: dimmed || depth < 0.1 ? "default" : "pointer",
      }}
      onClick={handleClick}
      aria-label={`Explore ${word.romanization} - ${word.language}`}
      aria-hidden={dimmed || depth < 0}
      tabIndex={dimmed || depth < 0.1 ? -1 : 0}
    >
      {/* Circle */}
      <div
        className="absolute inset-0 rounded-full border group-hover:border-amber-glow/50 transition-all duration-200"
        style={{
          background: `rgba(26, 26, 36, ${0.6 + depth * 0.2})`,
          borderColor: `rgba(240, 237, 230, ${0.06 + depth * 0.06})`,
        }}
      />

      {/* Hover glow */}
      <div className="absolute inset-[-4px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-amber-glow/10 blur-md" />

      {/* Word */}
      <span
        className="relative z-10 font-display font-semibold text-moonlight/90 group-hover:text-moonlight transition-colors duration-200 leading-tight text-center px-1"
        style={{
          fontSize,
          maxWidth: size - 10,
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
            bottom: -(8 + projScale * 6),
            fontSize: Math.max(8, 10 * projScale),
          }}
        >
          {word.romanization}
        </span>
      )}
    </button>
  );
}
