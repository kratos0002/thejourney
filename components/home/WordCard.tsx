"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { wordCardVariants } from "@/lib/animations";
import { Word } from "@/data/words";

interface WordCardProps {
  word: Word;
  index: number;
  position: { x: number; y: number };
  dimmed?: boolean;
}

export default function WordCard({ word, index, position, dimmed }: WordCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (dimmed) return;
    router.push(`/word/${word.slug}`);
  };

  return (
    <motion.button
      className="absolute group text-center"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
        cursor: dimmed ? "default" : "pointer",
      }}
      variants={wordCardVariants}
      whileHover={dimmed ? undefined : "hover"}
      onClick={handleClick}
      animate={{
        opacity: dimmed ? 0.15 : 1,
        scale: dimmed ? 0.9 : 1,
        filter: dimmed ? "blur(1px)" : "blur(0px)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      aria-label={`Explore ${word.romanization} - ${word.language}`}
      aria-hidden={dimmed}
      tabIndex={dimmed ? -1 : 0}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 -m-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-amber-glow/5 blur-xl" />

      {/* Word in original script */}
      <div
        className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-moonlight/90 group-hover:text-moonlight transition-colors duration-500"
        style={{
          animation: dimmed ? "none" : `drift ${8 + index * 2}s ease-in-out infinite`,
          animationDelay: `${index * 0.5}s`,
        }}
      >
        {word.word}
      </div>

      {/* Romanization */}
      <div className="mt-2 text-sm sm:text-base text-mist/70 group-hover:text-mist transition-colors duration-500 font-body">
        {word.romanization}
      </div>

      {/* Language */}
      <div className="mt-1 text-xs text-fog/50 group-hover:text-fog/80 transition-colors duration-500 font-body">
        {word.language}
      </div>
    </motion.button>
  );
}
