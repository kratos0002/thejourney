import type { Word } from "@/data/word-types";

/**
 * Get a deterministic "daily featured word" that rotates each calendar day.
 * Always picks from the full word list so the selection is stable all day
 * regardless of what the user has explored.
 */
export function getDailyFeaturedWord(words: Word[]): Word | undefined {
  if (words.length === 0) return undefined;

  const today = new Date();
  const dayIndex =
    today.getFullYear() * 1000 + today.getMonth() * 32 + today.getDate();
  const index = dayIndex % words.length;

  return words[index];
}
