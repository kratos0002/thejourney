"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { paragraphStagger, paragraphItem } from "@/lib/animations";

interface WordStoryProps {
  story: string[];
}

export default function WordStory({ story }: WordStoryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <motion.div
        className="max-w-[600px] w-full"
        variants={paragraphStagger}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {story.map((paragraph, index) => (
          <motion.p
            key={index}
            className="font-body text-base sm:text-lg leading-[1.75] mb-8 last:mb-0"
            style={{ color: "var(--theme-text-primary)", opacity: 0.85 }}
            variants={paragraphItem}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}
