"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { easeSmooth } from "@/lib/animations";

interface LanguageBarProps {
  languages: string[];
}

function toId(language: string): string {
  return `lang-${language.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`;
}

export default function LanguageBar({ languages }: LanguageBarProps) {
  const [activeId, setActiveId] = useState<string>("");
  const barRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = languages.map(toId);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [languages]);

  // Scroll chip into view when active changes
  useEffect(() => {
    if (!activeId || !barRef.current) return;
    const chip = chipRefs.current.get(activeId);
    if (chip) {
      chip.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeId]);

  const handleClick = useCallback((language: string) => {
    const id = toId(language);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: easeSmooth, delay: 0.6 }}
      className="sticky top-0 z-20 py-3 mb-8"
      style={{
        background:
          "linear-gradient(180deg, var(--theme-bg-primary) 70%, transparent 100%)",
      }}
    >
      <div
        ref={barRef}
        className="flex gap-2 overflow-x-auto px-4 max-w-5xl mx-auto scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {languages.map((lang) => {
          const id = toId(lang);
          const isActive = activeId === id;

          return (
            <button
              key={lang}
              ref={(el) => {
                if (el) chipRefs.current.set(id, el);
              }}
              onClick={() => handleClick(lang)}
              className="shrink-0 px-3 py-1.5 rounded-full font-body text-xs transition-all duration-300 cursor-pointer whitespace-nowrap"
              style={{
                background: isActive
                  ? "var(--theme-accent)"
                  : "transparent",
                color: isActive
                  ? "var(--theme-bg-primary)"
                  : "var(--theme-text-tertiary)",
                border: `1px solid ${
                  isActive
                    ? "var(--theme-accent)"
                    : "var(--theme-border)"
                }`,
                opacity: isActive ? 1 : 0.6,
              }}
            >
              {lang}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
