"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/animations";
import type { Word } from "@/data/word-types";
import CabinetCard from "./CabinetCard";

interface CabinetGridProps {
  words: Word[];
}

/** Split words into shelves of `perShelf` items */
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

function ShelfEdge() {
  return (
    <div className="relative h-px w-full">
      {/* Main shelf line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--theme-border-strong) 15%, var(--theme-border-strong) 85%, transparent 100%)",
        }}
      />
      {/* Shelf shadow */}
      <div
        className="absolute inset-x-0 top-px h-6"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      {/* Subtle light reflection */}
      <div
        className="absolute inset-x-[10%] -top-px h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

export default function CabinetGrid({ words }: CabinetGridProps) {
  const shelves = useMemo(() => toShelves(words, 3), [words]);

  let globalIndex = 0;

  return (
    <div className="max-w-5xl mx-auto space-y-0">
      {shelves.map((shelf, shelfIndex) => {
        // Capture starting index for this shelf
        const shelfStartIndex = globalIndex;

        return (
          <motion.div
            key={shelfIndex}
            custom={shelfIndex}
            variants={shelfVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/*
              Mobile: horizontal scroll row with snap
              Desktop: grid layout
            */}
            <div
              className="
                flex overflow-x-auto snap-x snap-mandatory gap-0 px-6 pb-2
                sm:grid sm:grid-cols-2 sm:overflow-visible sm:snap-none sm:px-6
                lg:grid-cols-3
                scrollbar-hide
              "
              style={{ scrollbarWidth: "none" }}
            >
              {shelf.map((word, i) => {
                const idx = shelfStartIndex + i;
                globalIndex = shelfStartIndex + i + 1;
                return (
                  <div key={word.slug} className="snap-start">
                    <CabinetCard word={word} index={idx} />
                  </div>
                );
              })}
            </div>

            <ShelfEdge />
          </motion.div>
        );
      })}
    </div>
  );
}
