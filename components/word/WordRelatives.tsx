"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { RelativeWord } from "@/data/words";

interface WordRelativesProps {
  relatives: RelativeWord[];
}

export default function WordRelatives({ relatives }: WordRelativesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const router = useRouter();

  const handleClick = (relative: RelativeWord) => {
    if (relative.available && relative.slug) {
      router.push(`/word/${relative.slug}`);
    }
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.div
        className="max-w-2xl w-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-center text-sm uppercase tracking-[0.2em] text-fog/70 font-body mb-12">
          Related Words
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {relatives.map((relative, index) => (
            <motion.button
              key={index}
              onClick={() => handleClick(relative)}
              disabled={!relative.available}
              className={`
                relative p-5 sm:p-6 rounded-2xl text-center group cursor-pointer
                transition-all duration-500
                ${relative.available
                  ? "bg-ink/60 hover:bg-ink border border-moonlight/5 hover:border-moonlight/10 hover:glow-amber"
                  : "bg-ink/30 border border-moonlight/3 opacity-60 cursor-default"
                }
              `}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <p className="font-display text-xl sm:text-2xl text-moonlight/90 group-hover:text-moonlight transition-colors">
                {relative.word}
              </p>
              <p className="mt-1 text-xs text-fog/60 font-body">
                {relative.language}
              </p>
              <p className="mt-2 text-xs text-mist/50 font-body leading-relaxed">
                {relative.connection}
              </p>
              {!relative.available && (
                <span className="absolute top-2 right-2 text-[10px] text-fog/40 font-body">
                  coming soon
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
