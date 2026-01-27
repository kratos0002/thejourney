"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Sound } from "@/data/word-types";
import { trackEvent } from "@/lib/analytics";

interface WordSoundProps {
  sounds: Sound[];
}

export default function WordSound({ sounds }: WordSoundProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [speechSupported, setSpeechSupported] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.speechSynthesis) {
      setSpeechSupported(false);
    }
  }, []);

  const handlePlay = useCallback((index: number, sound: Sound) => {
    setActiveIndex(index);
    trackEvent("sound_played", { label: sound.label, lang: sound.lang });

    if (speechSupported && sound.text) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(sound.text);
      if (sound.lang) {
        utterance.lang = sound.lang;
      }
      utterance.rate = 0.8;
      utterance.pitch = 1;

      utterance.onend = () => {
        setActiveIndex(null);
      };
      utterance.onerror = () => {
        setActiveIndex(null);
      };

      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback: just show animation for 2s
      setTimeout(() => setActiveIndex(null), 2000);
    }
  }, [speechSupported]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

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
        <h3 className="text-center text-sm uppercase tracking-[0.2em] font-body mb-12" style={{ color: "var(--theme-text-tertiary)" }}>
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
            <p className="text-xs uppercase tracking-wider mb-2 font-body" style={{ color: "var(--theme-text-tertiary)" }}>
              {sound.label}
            </p>
            <button
              onClick={() => handlePlay(index, sound)}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-500 group cursor-pointer"
              style={{ background: "var(--theme-surface)", border: "1px solid var(--theme-border)" }}
              aria-label={`Play ${sound.label} pronunciation`}
            >
              {/* Play icon */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                {activeIndex === index ? (
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute w-6 h-6 rounded-full animate-ping" style={{ border: "2px solid var(--theme-accent)", opacity: 0.6 }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: "var(--theme-accent)", opacity: 0.8 }} />
                  </div>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ color: "var(--theme-text-secondary)" }}
                    className="group-hover:text-amber-glow transition-colors duration-300"
                  >
                    <path
                      d="M4 3L13 8L4 13V3Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </div>

              {/* IPA */}
              <span className="font-mono text-base sm:text-lg transition-colors duration-300" style={{ color: "var(--theme-text-primary)", opacity: 0.8 }}>
                {sound.ipa}
              </span>

              {/* Native text (if different from IPA) */}
              {sound.text && (
                <span className="ml-auto text-sm font-body" style={{ color: "var(--theme-text-tertiary)" }}>
                  {sound.text}
                </span>
              )}

              {/* Waveform animation */}
              {activeIndex === index && (
                <div className="absolute right-4 flex gap-0.5 items-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-0.5 rounded-full"
                      style={{ background: "var(--theme-accent)", opacity: 0.6 }}
                      animate={{
                        height: [6, 16 + Math.random() * 8, 6],
                      }}
                      transition={{
                        duration: 0.5 + Math.random() * 0.3,
                        repeat: Infinity,
                        delay: i * 0.08,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              )}
            </button>
          </motion.div>
        ))}

        {!speechSupported && (
          <p className="text-center text-xs font-body mt-4" style={{ color: "var(--theme-text-tertiary)" }}>
            Audio not supported in this browser
          </p>
        )}
      </motion.div>
    </section>
  );
}
