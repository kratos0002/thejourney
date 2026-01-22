"use client";

import { useEffect, useCallback } from "react";
import { useTransition } from "@/components/TransitionProvider";

export default function KeyboardNav() {
  const { navigateHome } = useTransition();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Don't intercept if user is typing in an input
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

    const sections = document.querySelectorAll("section");
    if (!sections.length) return;

    switch (e.key) {
      case "Escape": {
        e.preventDefault();
        navigateHome();
        break;
      }

      case "ArrowDown":
      case "j": {
        e.preventDefault();
        const scrollPos = window.scrollY + window.innerHeight / 2;
        for (let i = 0; i < sections.length; i++) {
          const top = sections[i].offsetTop;
          if (top > scrollPos + 50) {
            sections[i].scrollIntoView({ behavior: "smooth" });
            break;
          }
        }
        break;
      }

      case "ArrowUp":
      case "k": {
        e.preventDefault();
        const scrollPos = window.scrollY + window.innerHeight / 2;
        for (let i = sections.length - 1; i >= 0; i--) {
          const bottom = sections[i].offsetTop + sections[i].offsetHeight;
          if (bottom < scrollPos - 50) {
            sections[i].scrollIntoView({ behavior: "smooth" });
            break;
          }
        }
        break;
      }

      case "Home": {
        e.preventDefault();
        sections[0]?.scrollIntoView({ behavior: "smooth" });
        break;
      }

      case "End": {
        e.preventDefault();
        sections[sections.length - 1]?.scrollIntoView({ behavior: "smooth" });
        break;
      }
    }
  }, [navigateHome]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return null;
}
