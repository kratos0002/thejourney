"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sound } from "@/data/words";

interface WordSoundProps {
  sounds: Sound[];
}

export default function WordSound({ sounds }: WordSoundProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    setActiveIndex(index);
    setTimeout(() => setActiveIndex(null), 2000);
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.div
        className="max-w-md w-full space-y-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h3 className="text-center text-sm uppercase tracking-[0.2em] text-fog/70 font-body mb-12">
          The Sound
        </h3>

        {sounds.map((sound, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-xs text-fog/60 uppercase tracking-wider mb-2 font-body">
              {sound.label}
            </p>
            <button
              onClick={() => handlePlay(index)}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-xl bg-ink/50 hover:bg-ink/80 border border-moonlight/5 hover:border-moonlight/10 transition-all duration-500 group cursor-pointer"
              aria-label={`Play ${sound.label} pronunciation`}
            >
              {/* Play icon */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                {activeIndex === index ? (
                  <div className="w-6 h-6 rounded-full border-2 border-amber-glow/60 animate-ping" />
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-mist/60 group-hover:text-amber-glow transition-colors duration-300"
                  >
                    <path
                      d="M4 3L13 8L4 13V3Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </div>

              {/* IPA */}
              <span className="font-mono text-base sm:text-lg text-moonlight/80 group-hover:text-moonlight transition-colors duration-300">
                {sound.ipa}
              </span>

              {/* Ripple animation */}
              {activeIndex === index && (
                <div className="absolute right-4 flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-0.5 bg-amber-glow/50 rounded-full"
                      animate={{
                        height: [8, 20, 8],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              )}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
