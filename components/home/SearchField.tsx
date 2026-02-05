/**
 * SearchField — "The Summoning" text input for the Discovery Drawer.
 *
 * A minimal, brand-aligned search input that sits above the curated
 * journeys carousel. Uses Cormorant Garamond italic for the scholarly
 * voice. Shows match count, empty state with suggestions, and a clear
 * button. All results appear on the globe — this component is input only.
 *
 * @see docs/features/SEARCH_WORD_SPEC.md
 */

"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

interface SearchFieldProps {
  /** Current query text */
  query: string;
  /** Called on every keystroke */
  onQueryChange: (query: string) => void;
  /** Clear the search */
  onClear: () => void;
  /** Whether the debounced search is active (query >= 2 chars) */
  isSearching: boolean;
  /** Number of matching words */
  matchCount: number;
  /** Total words in the collection */
  totalWords: number;
  /** "Did you mean?" suggestion for empty state */
  suggestion: string | null;
  /** Called when user taps a suggestion */
  onSuggestionTap: (slug: string) => void;
  /** Random word for "while you're here" empty state */
  serendipityWord: { slug: string; hook: string } | null;
  /** Called when user taps the serendipity word */
  onSerendipityTap: (slug: string) => void;
}

export default function SearchField({
  query,
  onQueryChange,
  onClear,
  isSearching,
  matchCount,
  totalWords,
  suggestion,
  onSuggestionTap,
  serendipityWord,
  onSerendipityTap,
}: SearchFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const hasTrackedRef = useRef(false);

  // Track search invocation once per session
  useEffect(() => {
    if (query.length >= 2 && !hasTrackedRef.current) {
      hasTrackedRef.current = true;
      trackEvent("search_invoked", { query_length: query.length });
    }
    if (query.length === 0) {
      hasTrackedRef.current = false;
    }
  }, [query]);

  // Track completed search when results settle
  useEffect(() => {
    if (!isSearching) return;
    const timer = setTimeout(() => {
      trackEvent("search_completed", {
        query,
        result_count: matchCount,
      });
    }, 600);
    return () => clearTimeout(timer);
  }, [isSearching, query, matchCount]);

  // Track empty state
  useEffect(() => {
    if (isSearching && matchCount === 0) {
      trackEvent("search_empty_state", {
        query,
        suggestion_shown: suggestion,
      });
    }
  }, [isSearching, matchCount, query, suggestion]);

  const handleClear = useCallback(() => {
    trackEvent("search_cleared", { had_results: matchCount > 0 });
    onClear();
    inputRef.current?.focus();
  }, [onClear, matchCount]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      // Escape clears text; if already empty, let drawer handle closing
      if (e.key === "Escape" && query.length > 0) {
        e.stopPropagation();
        handleClear();
      }
    },
    [query, handleClear]
  );

  const showEmptyState = isSearching && matchCount === 0;

  return (
    <div className="px-5 mb-4">
      {/* Input container */}
      <div
        className="relative flex items-center rounded-xl transition-all duration-300"
        style={{
          background: "var(--theme-bg-tertiary)",
          border: "1px solid var(--theme-border)",
        }}
      >
        <input
          ref={inputRef}
          type="text"
          role="searchbox"
          aria-label="Search words"
          placeholder="Call a word..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent px-4 py-2.5 font-display italic text-sm outline-none placeholder:opacity-50"
          style={{
            color: "var(--theme-text-primary)",
            caretColor: "var(--theme-accent)",
          }}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
        />

        {/* Clear button — appears when text is entered */}
        <AnimatePresence>
          {query.length > 0 && (
            <motion.button
              className="absolute right-3 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer"
              style={{
                background: "var(--theme-border-strong)",
                color: "var(--theme-text-tertiary)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              onClick={handleClear}
              aria-label="Clear search"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Match count — live region for accessibility */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="mt-1.5 min-h-[1rem]"
      >
        <AnimatePresence mode="wait">
          {isSearching && matchCount > 0 && (
            <motion.p
              key="count"
              className="text-[10px] font-body px-1"
              style={{ color: "var(--theme-text-tertiary)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {matchCount} {matchCount === 1 ? "word answers" : "words answer"}{" "}
              your call
            </motion.p>
          )}

          {/* Empty state */}
          {showEmptyState && (
            <motion.div
              key="empty"
              className="py-3 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p
                className="font-display italic text-sm mb-3"
                style={{ color: "var(--theme-text-secondary)" }}
              >
                No word has answered your call... yet.
              </p>

              {/* "Did you mean?" suggestion */}
              {suggestion && (
                <button
                  className="block mx-auto text-xs font-body mb-3 cursor-pointer transition-opacity hover:opacity-80"
                  style={{ color: "var(--theme-accent)" }}
                  onClick={() => {
                    trackEvent("search_empty_state", {
                      query,
                      suggestion_shown: suggestion,
                      suggestion_tapped: true,
                    });
                    onSuggestionTap(suggestion);
                  }}
                >
                  Perhaps: &ldquo;{suggestion}&rdquo;?
                </button>
              )}

              {/* Serendipity word */}
              {serendipityWord && (
                <div className="mt-2">
                  <p
                    className="text-[10px] font-body mb-1.5"
                    style={{
                      color: "var(--theme-text-tertiary)",
                      opacity: 0.6,
                    }}
                  >
                    While you&apos;re here...
                  </p>
                  <button
                    className="text-xs font-display italic cursor-pointer transition-opacity hover:opacity-80 max-w-xs mx-auto"
                    style={{ color: "var(--theme-text-secondary)" }}
                    onClick={() => {
                      trackEvent("search_empty_state", {
                        query,
                        serendipity_slug: serendipityWord.slug,
                        serendipity_tapped: true,
                      });
                      onSerendipityTap(serendipityWord.slug);
                    }}
                  >
                    &ldquo;{serendipityWord.hook}&rdquo;
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
