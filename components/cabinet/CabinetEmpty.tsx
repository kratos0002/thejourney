"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";

export default function CabinetEmpty() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center"
    >
      <h2
        className="font-display text-3xl md:text-4xl mb-4"
        style={{ color: "var(--theme-text-primary)" }}
      >
        Your cabinet is waiting
      </h2>
      <p
        className="font-body text-sm mb-8 max-w-xs"
        style={{ color: "var(--theme-text-secondary)" }}
      >
        Explore a word and it will appear here — a personal collection of the journeys you&apos;ve taken.
      </p>
      <Link
        href="/"
        className="font-body text-sm px-6 py-2.5 rounded-full transition-colors duration-300"
        style={{
          color: "var(--theme-accent)",
          border: "1px solid var(--theme-accent)",
          opacity: 0.8,
        }}
      >
        Start exploring
      </Link>
    </motion.div>
  );
}
