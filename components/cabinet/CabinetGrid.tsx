"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/animations";
import type { Word } from "@/data/word-types";
import CabinetCard from "./CabinetCard";

interface CabinetGridProps {
  words: Word[];
}

/** Split words into rows of `perShelf` items */
function toShelves(words: Word[], perShelf: number): Word[][] {
  const shelves: Word[][] = [];
  for (let i = 0; i < words.length; i += perShelf) {
    shelves.push(words.slice(i, i + perShelf));
  }
  return shelves;
}

const shelfVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeSmooth,
      delay: i * 0.15,
    },
  }),
};

export default function CabinetGrid({ words }: CabinetGridProps) {
  // Build shelves — 3 per row on desktop, responsive via CSS
  const shelves = useMemo(() => toShelves(words, 3), [words]);

  // Track global index for stagger across all cards
  let globalIndex = 0;

  return (
    <div className="px-6 max-w-5xl mx-auto space-y-0">
      {shelves.map((shelf, shelfIndex) => (
        <motion.div
          key={shelfIndex}
          custom={shelfIndex}
          variants={shelfVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Cards on this shelf */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {shelf.map((word) => {
              const idx = globalIndex++;
              return <CabinetCard key={word.slug} word={word} index={idx} />;
            })}
          </div>

          {/* The shelf edge */}
          <div className="relative h-px w-full">
            {/* Main shelf line */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent 0%, var(--theme-border-strong) 15%, var(--theme-border-strong) 85%, transparent 100%)",
              }}
            />
            {/* Shelf shadow — gives depth */}
            <div
              className="absolute inset-x-0 top-px h-6"
              style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
            {/* Subtle light reflection on top edge */}
            <div
              className="absolute inset-x-[10%] -top-px h-px"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
