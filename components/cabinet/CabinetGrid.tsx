"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import type { Word } from "@/data/word-types";
import CabinetCard from "./CabinetCard";

interface CabinetGridProps {
  words: Word[];
}

export default function CabinetGrid({ words }: CabinetGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6 max-w-5xl mx-auto"
    >
      {words.map((word) => (
        <CabinetCard key={word.slug} word={word} />
      ))}
    </motion.div>
  );
}
