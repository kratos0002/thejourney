"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { createAdminSupabase } from "@/lib/supabase/admin";
import type { Word, JourneyStop, Sound, RelativeWord } from "@/data/word-types";
import { analyzeAllWords, formatCoverageReport, type CoverageAnalysis, WORD_SUGGESTIONS } from "@/lib/etymology-analyzer";
import type { Database } from "@/lib/supabase/types";

type WordRow = Database["public"]["Tables"]["words"]["Row"];

async function requireAdmin() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    throw new Error("Unauthorized");
  }
}

export async function getEtymologyCoverage(): Promise<{
  analysis: CoverageAnalysis;
  report: string;
  existingSlugs: string[];
}> {
  await requireAdmin();

  const supabase = createAdminSupabase();
  const { data, error } = await supabase
    .from("words")
    .select("*")
    .order("romanization");

  if (error) throw new Error(error.message);

  const words: Word[] = ((data || []) as WordRow[]).map(row => ({
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
  }));

  const existingSlugs = words.map(w => w.slug);
  const analysis = analyzeAllWords(words);
  const report = formatCoverageReport(analysis);

  return { analysis, report, existingSlugs };
}


export async function checkWordExists(slug: string): Promise<boolean> {
  await requireAdmin();
  const supabase = createAdminSupabase();
  const { data } = await supabase
    .from("words")
    .select("slug")
    .eq("slug", slug)
    .single();
  return !!data;
}
