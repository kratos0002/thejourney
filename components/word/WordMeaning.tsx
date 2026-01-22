"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

interface WordMeaningProps {
  meaningNow: string;
}

export default function WordMeaning({ meaningNow }: WordMeaningProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const router = useRouter();

  const paragraphs = meaningNow.split("\n\n");

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.div
        className="max-w-[600px] w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h3 className="text-sm uppercase tracking-[0.2em] text-fog/70 font-body mb-12">
          Today
        </h3>

        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="font-body text-base sm:text-lg text-moonlight/80 leading-[1.75]"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Return button */}
        <motion.button
          className="mt-16 px-6 py-3 text-sm text-mist/60 hover:text-moonlight font-body tracking-wider border border-moonlight/10 hover:border-moonlight/20 rounded-full transition-all duration-500 hover:glow-amber cursor-pointer"
          onClick={() => router.push("/")}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          Return to all words
        </motion.button>
      </motion.div>
    </section>
  );
}
