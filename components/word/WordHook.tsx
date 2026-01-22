"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface WordHookProps {
  hook: string;
}

export default function WordHook({ hook }: WordHookProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.blockquote
        className="max-w-xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p className="font-body text-xl sm:text-2xl md:text-3xl italic text-moonlight/90 leading-relaxed sm:leading-[1.8]">
          &ldquo;{hook}&rdquo;
        </p>
      </motion.blockquote>
    </section>
  );
}
