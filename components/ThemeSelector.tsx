"use client";

import { useTheme, ThemeOption } from "./ThemeProvider";
import { motion } from "framer-motion";

const themes: { value: ThemeOption; label: string; description: string; icon: React.ReactNode }[] = [
  {
    value: "night-sky",
    label: "Night Sky",
    description: "Explore by starlight",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
  {
    value: "parchment",
    label: "Parchment",
    description: "Study by daylight",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    value: "system",
    label: "System",
    description: "Match device setting",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function ThemeSelector() {
  const { theme, setTheme, isLoading } = useTheme();

  if (isLoading) {
    return (
      <div className="space-y-3 opacity-50">
        <p className="text-xs uppercase tracking-wider" style={{ color: "var(--theme-text-tertiary)" }}>
          Appearance
        </p>
        <div className="h-24 rounded-xl animate-pulse" style={{ background: "var(--theme-border)" }} />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-wider" style={{ color: "var(--theme-text-tertiary)" }}>
        Appearance
      </p>

      <div className="space-y-2">
        {themes.map((option) => {
          const isSelected = theme === option.value;

          return (
            <motion.button
              key={option.value}
              onClick={() => setTheme(option.value)}
              className="w-full flex items-center gap-3 p-3 rounded-xl text-left transition-colors cursor-pointer"
              style={{
                background: isSelected ? "var(--theme-accent-muted)" : "var(--theme-border)",
                border: isSelected ? "1px solid var(--theme-accent)" : "1px solid transparent",
              }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {/* Radio indicator */}
              <div
                className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                style={{
                  borderColor: isSelected ? "var(--theme-accent)" : "var(--theme-text-tertiary)",
                }}
              >
                {isSelected && (
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: "var(--theme-accent)" }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>

              {/* Icon */}
              <div
                className="flex-shrink-0"
                style={{ color: isSelected ? "var(--theme-accent)" : "var(--theme-text-secondary)" }}
              >
                {option.icon}
              </div>

              {/* Label and description */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm font-medium"
                  style={{ color: isSelected ? "var(--theme-text-primary)" : "var(--theme-text-secondary)" }}
                >
                  {option.label}
                </p>
                <p className="text-xs" style={{ color: "var(--theme-text-tertiary)" }}>
                  {option.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
