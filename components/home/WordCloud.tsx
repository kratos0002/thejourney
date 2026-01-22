"use client";

import { motion } from "framer-motion";
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

export default function WordCloud() {
  return (
    <motion.div
      className="relative w-full h-full min-h-[600px]"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <WordCard
          key={word.slug}
          word={word}
          index={index}
          position={positions[index]}
        />
      ))}
    </motion.div>
  );
}
