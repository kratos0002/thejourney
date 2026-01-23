"use client";

import { motion } from "framer-motion";
import { useExploration } from "@/components/ExplorationProvider";

export default function ExplorationProgress() {
  const { exploredCount } = useExploration();

  if (exploredCount === 0) return null;

  return (
    <motion.span
      className="text-fog/30 text-[10px] font-body tracking-widest uppercase"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.0, duration: 1.0 }}
    >
      {exploredCount} explored
    </motion.span>
  );
}
