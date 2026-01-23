"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allWords as words } from "@/data/words";
import WordCard from "./WordCard";

// Generate organic positions for N words using golden angle spiral
function generatePositions(count: number): { x: number; y: number }[] {
  const positions: { x: number; y: number }[] = [];
  const goldenAngle = 137.508 * (Math.PI / 180);
  const padding = 8; // % padding from edges

  for (let i = 0; i < count; i++) {
    const angle = i * goldenAngle;
    // Normalize radius so all points fit within bounds
    const radius = Math.sqrt(i / count) * (50 - padding);
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    positions.push({
      x: Math.max(padding, Math.min(100 - padding, x)),
      y: Math.max(padding, Math.min(100 - padding, y)),
    });
  }
  return positions;
}

interface WordCloudProps {
  searchQuery: string;
}

export default function WordCloud({ searchQuery }: WordCloudProps) {
  const positions = useMemo(() => generatePositions(words.length), []);

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
      className="relative w-full h-full min-h-[600px] sm:min-h-[700px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
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
              totalWords={words.length}
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
