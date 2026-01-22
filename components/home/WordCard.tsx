"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { wordCardVariants } from "@/lib/animations";
import { Word } from "@/data/words";

interface WordCardProps {
  word: Word;
  index: number;
  position: { x: number; y: number };
}

export default function WordCard({ word, index, position }: WordCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/word/${word.slug}`);
  };

  return (
    <motion.button
      className="absolute group cursor-pointer text-center"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      variants={wordCardVariants}
      whileHover="hover"
      onClick={handleClick}
      aria-label={`Explore ${word.romanization} - ${word.language}`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 -m-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-amber-glow/5 blur-xl" />

      {/* Word in original script */}
      <div
        className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-moonlight/90 group-hover:text-moonlight transition-colors duration-500"
        style={{
          animation: `drift ${8 + index * 2}s ease-in-out infinite`,
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
