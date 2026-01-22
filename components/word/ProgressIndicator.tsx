"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const layers = [
  "The Word",
  "The Hook",
  "The Story",
  "The Journey",
  "The Sound",
  "The Relatives",
  "Today",
];

export default function ProgressIndicator() {
  const [activeLayer, setActiveLayer] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveLayer(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToLayer = (index: number) => {
    const sections = document.querySelectorAll("section");
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3"
      aria-label="Section navigation"
    >
      {layers.map((layer, index) => (
        <button
          key={layer}
          onClick={() => scrollToLayer(index)}
          className="group relative flex items-center gap-3 cursor-pointer"
          aria-label={`Go to ${layer}`}
          aria-current={activeLayer === index ? "true" : undefined}
        >
          {/* Tooltip */}
          <span className="absolute right-6 whitespace-nowrap text-xs text-mist/0 group-hover:text-mist/70 transition-all duration-300 font-body">
            {layer}
          </span>

          {/* Dot */}
          <motion.div
            className="w-2 h-2 rounded-full transition-all duration-500"
            animate={{
              scale: activeLayer === index ? 1.5 : 1,
              backgroundColor: activeLayer === index
                ? "#d4a574"
                : index < activeLayer
                  ? "rgba(168, 164, 160, 0.5)"
                  : "rgba(107, 104, 102, 0.3)",
              boxShadow: activeLayer === index
                ? "0 0 12px rgba(212, 165, 116, 0.4)"
                : "none",
            }}
          />
        </button>
      ))}
    </nav>
  );
}
