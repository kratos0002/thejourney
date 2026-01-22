"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Color temperature per section (index matches layer order)
const sectionAmbience = [
  { from: "rgba(10, 10, 20, 0.9)", to: "rgba(15, 15, 30, 0.8)", accent: "rgba(240, 237, 230, 0.03)" },   // The Word - deep, warm moonlight
  { from: "rgba(8, 12, 24, 0.9)", to: "rgba(12, 18, 35, 0.8)", accent: "rgba(168, 164, 160, 0.03)" },     // The Hook - slightly cool
  { from: "rgba(10, 14, 28, 0.9)", to: "rgba(14, 20, 38, 0.8)", accent: "rgba(107, 104, 102, 0.03)" },    // The Story - neutral deep
  { from: "rgba(15, 12, 20, 0.9)", to: "rgba(20, 15, 25, 0.8)", accent: "rgba(212, 165, 116, 0.04)" },    // The Journey - warm amber
  { from: "rgba(8, 15, 22, 0.9)", to: "rgba(10, 20, 30, 0.8)", accent: "rgba(64, 150, 130, 0.04)" },      // The Sound - cool teal
  { from: "rgba(12, 12, 18, 0.9)", to: "rgba(16, 16, 26, 0.8)", accent: "rgba(168, 164, 160, 0.03)" },    // The Relatives - neutral mist
  { from: "rgba(14, 10, 16, 0.9)", to: "rgba(18, 14, 22, 0.8)", accent: "rgba(212, 165, 116, 0.05)" },    // Today - warm glow
];

export default function AmbientBackground() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ambience = sectionAmbience[activeSection] || sectionAmbience[0];

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      animate={{
        background: `linear-gradient(180deg, ${ambience.from} 0%, ${ambience.to} 100%)`,
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Radial accent glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `radial-gradient(ellipse at 50% 40%, ${ambience.accent} 0%, transparent 70%)`,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
