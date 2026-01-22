"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { words } from "@/data/words";
import WordCard from "./WordCard";

// Organic positions for 10 words - spread across the viewport
const positions = [
  { x: 20, y: 25 },
  { x: 72, y: 18 },
  { x: 35, y: 50 },
  { x: 80, y: 45 },
  { x: 15, y: 72 },
  { x: 55, y: 30 },
  { x: 45, y: 75 },
  { x: 85, y: 72 },
  { x: 25, y: 42 },
  { x: 65, y: 62 },
];

interface WordCloudProps {
  searchQuery: string;
}

export default function WordCloud({ searchQuery }: WordCloudProps) {
  const filteredWords = useMemo(() => {
    if (!searchQuery.trim()) return words;
    const q = searchQuery.toLowerCase().trim();
    return words.filter(word =>
      word.romanization.toLowerCase().includes(q) ||
      word.language.toLowerCase().includes(q) ||
      word.word.includes(q) ||
      word.slug.toLowerCase().includes(q) ||
      word.hook.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <motion.div
      className="relative w-full h-full min-h-[600px]"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {words.map((word, index) => {
          const isVisible = filteredWords.includes(word);
          return (
            <WordCard
              key={word.slug}
              word={word}
              index={index}
              position={positions[index]}
              dimmed={!isVisible && searchQuery.trim().length > 0}
            />
          );
        })}
      </AnimatePresence>

      {/* No results message */}
      {searchQuery.trim() && filteredWords.length === 0 && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-fog/50 font-body text-sm">
            No words match &ldquo;{searchQuery}&rdquo;
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
