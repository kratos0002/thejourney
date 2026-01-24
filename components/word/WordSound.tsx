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
              onClick={() => handlePlay(index, sound)}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-xl bg-ink/50 hover:bg-ink/80 border border-moonlight/5 hover:border-moonlight/10 transition-all duration-500 group cursor-pointer"
              aria-label={`Play ${sound.label} pronunciation`}
            >
              {/* Play icon */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                {activeIndex === index ? (
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute w-6 h-6 rounded-full border-2 border-amber-glow/60 animate-ping" />
                    <div className="w-3 h-3 rounded-full bg-amber-glow/80" />
                  </div>
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

              {/* Native text (if different from IPA) */}
              {sound.text && (
                <span className="ml-auto text-sm text-fog/50 font-body">
                  {sound.text}
                </span>
              )}

              {/* Waveform animation */}
              {activeIndex === index && (
                <div className="absolute right-4 flex gap-0.5 items-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-0.5 bg-amber-glow/60 rounded-full"
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
          <p className="text-center text-xs text-fog/40 font-body mt-4">
            Audio not supported in this browser
          </p>
        )}
      </motion.div>
    </section>
  );
}
