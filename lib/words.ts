import { createClient } from "@supabase/supabase-js";
import { unstable_cache } from "next/cache";
import type { Database } from "@/lib/supabase/types";
import type { Word, JourneyStop, Sound, RelativeWord } from "@/data/word-types";

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
);

type WordRow = Database["public"]["Tables"]["words"]["Row"];

function rowToWord(row: WordRow): Word {
  return {
    slug: row.slug,
    word: row.word,
    romanization: row.romanization,
    language: row.language,
    hook: row.hook,
    story: row.story as unknown as string[],
    journey: row.journey as unknown as JourneyStop[],
    sounds: row.sounds as unknown as Sound[],
    relatives: row.relatives as unknown as RelativeWord[],
    meaningNow: row.meaning_now,
  };
}

// Fallback: import static data for when DB table doesn't exist yet
async function getStaticFallback(): Promise<Word[]> {
  const { allWords } = await import("@/data/words");
  return allWords;
}

export const getAllWords = unstable_cache(
  async (): Promise<Word[]> => {
    const { data, error } = await supabase
      .from("words")
      .select("*")
      .order("romanization");

    if (error) {
      console.warn(`[words] DB fetch failed, using static fallback: ${error.message}`);
      return getStaticFallback();
    }
    if (!data || data.length === 0) {
      return getStaticFallback();
    }
    return (data as unknown as WordRow[]).map(rowToWord);
  },
  ["all-words"],
  { tags: ["words"], revalidate: 3600 }
);

export const getWordBySlug = unstable_cache(
  async (slug: string): Promise<Word | null> => {
    const { data, error } = await supabase
      .from("words")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      // Fallback to static data
      const allWords = await getStaticFallback();
      return allWords.find(w => w.slug === slug) ?? null;
    }
    return data ? rowToWord(data as unknown as WordRow) : null;
  },
  ["word-by-slug"],
  { tags: ["words"], revalidate: 3600 }
);
