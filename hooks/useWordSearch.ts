/**
 * useWordSearch — React hook for "The Summoning" search experience.
 *
 * Builds a search index once, debounces user input, and returns
 * matching slugs + the highlighted (top-scoring) word. Integrates
 * with the existing Discovery Drawer filter pipeline via a Set<string>
 * of matching slugs.
 *
 * @see docs/features/SEARCH_WORD_SPEC.md
 */

"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import type { Word } from "@/data/word-types";
import {
  buildSearchIndex,
  searchWords,
  findClosestMatch,
  type SearchResult,
  type SearchEntry,
} from "@/lib/word-search";

/** Debounce delay in ms — keeps the globe smooth while typing */
const DEBOUNCE_MS = 150;

export interface WordSearchState {
  /** Current raw query text */
  query: string;
  /** Update the query (from the input onChange) */
  setQuery: (q: string) => void;
  /** Clear the query and reset search state */
  clearSearch: () => void;
  /** Whether a search is actively filtering results */
  isSearching: boolean;
  /** Set of matching word slugs (empty array = no matches) */
  matchingSlugs: Set<string>;
  /** Total number of matches */
  matchCount: number;
  /** Scored search results (for analytics / future whisper cards) */
  results: SearchResult[];
  /** The top-scoring slug — gets the glow ring on the globe */
  highlightedSlug: string | null;
  /** The hook text of the highlighted word */
  highlightedHook: string | null;
  /** Closest fuzzy suggestion when there are no results */
  suggestion: string | null;
}

export function useWordSearch(words: Word[]): WordSearchState {
  const [query, setQueryRaw] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Build index once when words change
  const index: SearchEntry[] = useMemo(
    () => buildSearchIndex(words),
    [words]
  );

  // Debounced query setter
  const setQuery = useCallback((q: string) => {
    setQueryRaw(q);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDebouncedQuery(q);
    }, DEBOUNCE_MS);
  }, []);

  // Clear on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Run search against debounced query
  const results = useMemo(
    () => searchWords(index, words, debouncedQuery),
    [index, words, debouncedQuery]
  );

  // Derive state from results
  const matchingSlugs = useMemo(
    () => new Set(results.map((r) => r.slug)),
    [results]
  );

  const isSearching = debouncedQuery.trim().length >= 2;

  const highlightedSlug = results.length > 0 ? results[0].slug : null;
  const highlightedHook = results.length > 0 ? results[0].hook : null;

  // Suggestion for empty state (only compute when no results and query is long enough)
  const suggestion = useMemo(() => {
    if (results.length > 0 || !isSearching) return null;
    return findClosestMatch(index, debouncedQuery);
  }, [results, isSearching, index, debouncedQuery]);

  const clearSearch = useCallback(() => {
    setQueryRaw("");
    setDebouncedQuery("");
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  return {
    query,
    setQuery,
    clearSearch,
    isSearching,
    matchingSlugs,
    matchCount: results.length,
    results,
    highlightedSlug,
    highlightedHook,
    suggestion,
  };
}
