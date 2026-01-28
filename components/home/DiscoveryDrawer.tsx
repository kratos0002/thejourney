"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Word } from "@/data/word-types";
import {
  getAvailableFilters,
  filterWords,
  type ActiveFilters,
} from "@/lib/word-filters";
import {
  getJourneysWithCounts,
  getJourneySlugs,
  type CuratedJourney,
} from "@/lib/curated-journeys";
import { useExploration } from "@/components/ExplorationProvider";
import { JourneyIcon } from "@/components/icons/JourneyIcons";

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

// Journey Card Component
interface JourneyCardProps {
  journey: CuratedJourney & { wordCount: number; wordSlugs: string[] };
  active: boolean;
  exploredCount: number;
  onClick: () => void;
}

function JourneyCard({ journey, active, exploredCount, onClick }: JourneyCardProps) {
  const progress = journey.wordCount > 0 ? (exploredCount / journey.wordCount) * 100 : 0;

  return (
    <button
      onClick={onClick}
      className="shrink-0 w-36 p-3 rounded-xl text-left transition-all duration-300 cursor-pointer relative overflow-hidden"
      style={{
        background: active
          ? "var(--theme-accent-muted)"
          : "var(--theme-surface)",
        border: `1px solid ${active ? "var(--theme-accent)" : "var(--theme-border)"}`,
      }}
    >
      {/* Progress bar at bottom */}
      {exploredCount > 0 && (
        <div
          className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
          style={{
            width: `${progress}%`,
            background: active ? "var(--theme-accent)" : "var(--theme-text-tertiary)",
            opacity: active ? 1 : 0.5,
          }}
        />
      )}

      <div
        className="mb-1.5"
        style={{ color: active ? "var(--theme-accent)" : "var(--theme-text-tertiary)" }}
      >
        <JourneyIcon journeyId={journey.id} size={20} />
      </div>
      <h4
        className="font-display text-sm font-medium leading-tight mb-0.5"
        style={{ color: active ? "var(--theme-accent)" : "var(--theme-text-primary)" }}
      >
        {journey.name}
      </h4>
      <p
        className="text-[10px] font-body leading-tight"
        style={{ color: "var(--theme-text-tertiary)" }}
      >
        {journey.tagline}
      </p>
      <p
        className="text-[9px] font-body mt-1.5"
        style={{ color: active ? "var(--theme-accent)" : "var(--theme-text-tertiary)", opacity: 0.7 }}
      >
        {exploredCount} of {journey.wordCount} explored
      </p>
    </button>
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
  const [activeJourneyId, setActiveJourneyId] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const { exploredSlugs } = useExploration();

  const availableFilters = useMemo(() => getAvailableFilters(words), [words]);
  const journeysWithCounts = useMemo(() => getJourneysWithCounts(words), [words]);

  const hasActiveFilters = filters.languageFamilies.length > 0 ||
    filters.themes.length > 0 ||
    filters.journeyPaths.length > 0 ||
    activeJourneyId !== null;

  const matchingCount = useMemo(() => {
    if (activeJourneyId) {
      return getJourneySlugs(words, activeJourneyId).size;
    }
    if (!hasActiveFilters) return words.length;
    return filterWords(words, filters).size;
  }, [words, filters, hasActiveFilters, activeJourneyId]);

  // Keyboard accessibility - close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus trap when drawer is open
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;

    const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }, [isOpen]);

  const toggleFilter = useCallback((category: keyof ActiveFilters, value: string) => {
    // Clear journey selection when using chip filters
    setActiveJourneyId(null);

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

  const selectJourney = useCallback((journeyId: string) => {
    if (activeJourneyId === journeyId) {
      // Deselect journey
      setActiveJourneyId(null);
      onFiltersChange(new Set(words.map(w => w.slug)), false);
    } else {
      // Select journey, clear chip filters
      setActiveJourneyId(journeyId);
      setFilters({ languageFamilies: [], themes: [], journeyPaths: [] });
      const matching = getJourneySlugs(words, journeyId);
      onFiltersChange(matching, true);
    }
  }, [words, onFiltersChange, activeJourneyId]);

  const clearFilters = useCallback(() => {
    setFilters({
      languageFamilies: [],
      themes: [],
      journeyPaths: [],
    });
    setActiveJourneyId(null);
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
              ref={drawerRef}
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
              role="dialog"
              aria-modal="true"
              aria-label="Discovery drawer"
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-1 rounded-full cursor-pointer"
                  style={{ background: "var(--theme-text-tertiary)", opacity: 0.3 }}
                  aria-label="Close drawer"
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

              {/* Content */}
              <div className="max-h-[60vh] overflow-y-auto">
                {/* Curated Journeys Carousel */}
                <div className="mb-4">
                  <p className="text-[10px] font-body tracking-widest uppercase px-5 mb-2" style={{ color: "var(--theme-text-tertiary)" }}>
                    Curated journeys
                  </p>
                  <div className="flex gap-3 overflow-x-auto px-5 pb-2 scrollbar-hide">
                    {journeysWithCounts.map(journey => {
                      const exploredCount = journey.wordSlugs.filter(slug => exploredSlugs.has(slug)).length;
                      return (
                        <JourneyCard
                          key={journey.id}
                          journey={journey}
                          active={activeJourneyId === journey.id}
                          exploredCount={exploredCount}
                          onClick={() => selectJourney(journey.id)}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Divider */}
                <div className="px-5 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px" style={{ background: "var(--theme-border)" }} />
                    <span className="text-[9px] font-body uppercase tracking-widest" style={{ color: "var(--theme-text-tertiary)", opacity: 0.5 }}>
                      or filter by
                    </span>
                    <div className="flex-1 h-px" style={{ background: "var(--theme-border)" }} />
                  </div>
                </div>

                {/* Filter Rows */}
                <div className="px-5 pb-6 space-y-4">
                  <FilterRow
                    title="Origin"
                    chips={availableFilters.languageFamilies}
                    activeChips={filters.languageFamilies}
                    onToggle={(chip) => toggleFilter("languageFamilies", chip)}
                  />
                  <FilterRow
                    title="Theme"
                    chips={availableFilters.themes}
                    activeChips={filters.themes}
                    onToggle={(chip) => toggleFilter("themes", chip)}
                  />

                  {/* Empty state when no matches */}
                  {hasActiveFilters && matchingCount === 0 && (
                    <div className="text-center py-6">
                      <p className="font-body text-sm" style={{ color: "var(--theme-text-secondary)" }}>
                        No journeys walk all these paths...
                      </p>
                      <button
                        onClick={clearFilters}
                        className="mt-2 text-xs font-body transition-colors cursor-pointer"
                        style={{ color: "var(--theme-accent)" }}
                      >
                        Clear filters
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
