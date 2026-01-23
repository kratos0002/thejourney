"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { allWords, Word } from "@/data/words";

interface WordMeaningProps {
  word: Word;
}

export default function WordMeaning({ word }: WordMeaningProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const router = useRouter();
  const [shareFeedback, setShareFeedback] = useState(false);

  const handleShare = () => {
    const shareText = `"${word.hook}"\n\nTrace the journey of '${word.romanization}' →`;
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: `${word.romanization} — The Journey`, text: shareText, url });
    } else {
      navigator.clipboard.writeText(`${shareText}\n${url}`);
      setShareFeedback(true);
      setTimeout(() => setShareFeedback(false), 2000);
    }
  };

  // Pick 3 random words to suggest (excluding current word)
  const suggestions = useMemo(() => {
    const others = allWords.filter(w => w.slug !== word.slug);
    const shuffled = [...others].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, [word.slug]);

  const paragraphs = word.meaningNow.split("\n\n");

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

        {/* Action buttons */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <button
            className="px-6 py-3 text-sm text-mist/60 hover:text-moonlight font-body tracking-wider border border-moonlight/10 hover:border-moonlight/20 rounded-full transition-all duration-500 hover:glow-amber cursor-pointer"
            onClick={() => router.push("/")}
          >
            Return to all words
          </button>
          <button
            onClick={handleShare}
            className="px-4 py-3 text-sm text-fog/50 hover:text-amber-glow font-body border border-moonlight/10 hover:border-amber-glow/20 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2"
            aria-label="Share this word"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16,6 12,2 8,6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
            Share
          </button>
        </motion.div>

        {/* Explore more words */}
        <motion.div
          className="mt-20 pt-12 border-t border-moonlight/5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-fog/40 font-body mb-6">
            Explore more words
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {suggestions.map((s) => (
              <button
                key={s.slug}
                onClick={() => router.push(`/word/${s.slug}`)}
                className="px-4 py-2 text-sm text-mist/60 hover:text-moonlight font-body border border-moonlight/8 hover:border-amber-glow/20 rounded-full transition-all duration-300 cursor-pointer"
              >
                {s.romanization}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Share feedback toast */}
        <AnimatePresence>
          {shareFeedback && (
            <motion.div
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg bg-amber-glow/20 border border-amber-glow/30 text-amber-glow text-xs font-body"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              Copied to clipboard
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
