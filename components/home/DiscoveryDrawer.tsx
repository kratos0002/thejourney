"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Word } from "@/data/word-types";
import {
  getAvailableFilters,
  filterWords,
  type ActiveFilters,
} from "@/lib/word-filters";

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className="shrink-0 px-3 py-1.5 rounded-full text-xs font-body border transition-all duration-300 cursor-pointer"
      style={active
        ? { background: "var(--theme-accent-muted)", borderColor: "var(--theme-accent)", color: "var(--theme-accent)" }
        : { background: "var(--theme-surface)", borderColor: "var(--theme-border)", color: "var(--theme-text-tertiary)" }
      }
    >
      {label}
    </button>
  );
}

interface FilterRowProps {
  title: string;
  chips: string[];
  activeChips: string[];
  onToggle: (chip: string) => void;
}

function FilterRow({ title, chips, activeChips, onToggle }: FilterRowProps) {
  if (chips.length === 0) return null;

  return (
    <div className="space-y-2">
      <p className="text-[10px] font-body tracking-widest uppercase px-1" style={{ color: "var(--theme-text-tertiary)" }}>
        {title}
      </p>
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {chips.map(chip => (
          <FilterChip
            key={chip}
            label={chip}
            active={activeChips.includes(chip)}
            onClick={() => onToggle(chip)}
          />
        ))}
      </div>
    </div>
  );
}

interface DiscoveryDrawerProps {
  words: Word[];
  onFiltersChange: (matchingSlugs: Set<string>, hasActiveFilters: boolean) => void;
}

export default function DiscoveryDrawer({ words, onFiltersChange }: DiscoveryDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<ActiveFilters>({
    languageFamilies: [],
    themes: [],
    journeyPaths: [],
  });

  const availableFilters = useMemo(() => getAvailableFilters(words), [words]);

  const hasActiveFilters = filters.languageFamilies.length > 0 ||
    filters.themes.length > 0 ||
    filters.journeyPaths.length > 0;

  const matchingCount = useMemo(() => {
    if (!hasActiveFilters) return words.length;
    return filterWords(words, filters).size;
  }, [words, filters, hasActiveFilters]);

  const toggleFilter = useCallback((category: keyof ActiveFilters, value: string) => {
    setFilters(prev => {
      const current = prev[category];
      const next = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];

      const newFilters = { ...prev, [category]: next };

      // Notify parent of filter change
      const hasFilters = newFilters.languageFamilies.length > 0 ||
        newFilters.themes.length > 0 ||
        newFilters.journeyPaths.length > 0;
      const matching = filterWords(words, newFilters);
      onFiltersChange(matching, hasFilters);

      return newFilters;
    });
  }, [words, onFiltersChange]);

  const clearFilters = useCallback(() => {
    setFilters({
      languageFamilies: [],
      themes: [],
      journeyPaths: [],
    });
    onFiltersChange(new Set(words.map(w => w.slug)), false);
  }, [words, onFiltersChange]);

  return (
    <>
      {/* Drawer Handle / Trigger */}
      <motion.button
        className="fixed bottom-0 left-0 right-0 z-20 flex flex-col items-center pb-6 pt-3 cursor-pointer"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1.5rem)" }}
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {hasActiveFilters ? (
          <span className="text-[10px] font-body tracking-wider" style={{ color: "var(--theme-accent)", opacity: 0.7 }}>
            {matchingCount} journeys
          </span>
        ) : (
          <span className="text-[10px] font-body tracking-wider" style={{ color: "var(--theme-text-tertiary)", opacity: 0.5 }}>
            Explore paths...
          </span>
        )}
        <div className="w-10 h-1 rounded-full mt-2" style={{ background: "var(--theme-text-tertiary)", opacity: 0.2 }} />
      </motion.button>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-30 backdrop-blur-sm"
              style={{ background: "var(--theme-bg-primary)", opacity: 0.6 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md rounded-t-2xl"
              style={{
                paddingBottom: "env(safe-area-inset-bottom, 0px)",
                background: "var(--theme-bg-secondary)",
                borderTop: "1px solid var(--theme-border)"
              }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-1 rounded-full cursor-pointer"
                  style={{ background: "var(--theme-text-tertiary)", opacity: 0.3 }}
                />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 pb-3">
                <div>
                  <h3 className="font-display text-lg" style={{ color: "var(--theme-text-primary)", opacity: 0.8 }}>Explore paths</h3>
                  <p className="text-[10px] font-body" style={{ color: "var(--theme-text-tertiary)" }}>
                    {hasActiveFilters
                      ? `${matchingCount} of ${words.length} journeys`
                      : `${words.length} journeys to discover`
                    }
                  </p>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-[10px] font-body transition-colors cursor-pointer"
                    style={{ color: "var(--theme-text-tertiary)" }}
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Filter Rows */}
              <div className="px-5 pb-6 space-y-4 max-h-[50vh] overflow-y-auto">
                <FilterRow
                  title="By origin"
                  chips={availableFilters.languageFamilies}
                  activeChips={filters.languageFamilies}
                  onToggle={(chip) => toggleFilter("languageFamilies", chip)}
                />
                <FilterRow
                  title="By theme"
                  chips={availableFilters.themes}
                  activeChips={filters.themes}
                  onToggle={(chip) => toggleFilter("themes", chip)}
                />
                <FilterRow
                  title="By journey"
                  chips={availableFilters.journeyPaths}
                  activeChips={filters.journeyPaths}
                  onToggle={(chip) => toggleFilter("journeyPaths", chip)}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
