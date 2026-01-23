"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { createServerSupabase } from "@/lib/supabase/server";
import { createAdminSupabase } from "@/lib/supabase/admin";
import type { Database } from "@/lib/supabase/types";
import type { Word, JourneyStop, Sound, RelativeWord } from "@/data/word-types";

async function requireAdmin() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    throw new Error("Unauthorized");
  }
  return user;
}

export async function getWords() {
  await requireAdmin();
  const supabase = createAdminSupabase();
  const { data, error } = await supabase
    .from("words")
    .select("slug, word, romanization, language, updated_at")
    .order("romanization");

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function getWord(slug: string): Promise<Word | null> {
  await requireAdmin();
  const supabase = createAdminSupabase();
  const { data, error } = await supabase
    .from("words")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  const row = data as Database["public"]["Tables"]["words"]["Row"];
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

export async function createWord(formData: FormData) {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const slug = formData.get("slug") as string;
  const word = formData.get("word") as string;
  const romanization = formData.get("romanization") as string;
  const language = formData.get("language") as string;
  const hook = formData.get("hook") as string;
  const meaningNow = formData.get("meaningNow") as string;
  const story = JSON.parse(formData.get("story") as string || "[]");
  const journey = JSON.parse(formData.get("journey") as string || "[]");
  const sounds = JSON.parse(formData.get("sounds") as string || "[]");
  const relatives = JSON.parse(formData.get("relatives") as string || "[]");

  const { error } = await supabase.from("words").insert({
    slug,
    word,
    romanization,
    language,
    hook,
    story,
    journey,
    sounds,
    relatives,
    meaning_now: meaningNow,
  });

  if (error) {
    return { error: error.message };
  }

  revalidateTag("words", { expire: 0 });
  redirect("/admin");
}

export async function updateWord(slug: string, formData: FormData) {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const newSlug = formData.get("slug") as string;
  const word = formData.get("word") as string;
  const romanization = formData.get("romanization") as string;
  const language = formData.get("language") as string;
  const hook = formData.get("hook") as string;
  const meaningNow = formData.get("meaningNow") as string;
  const story = JSON.parse(formData.get("story") as string || "[]");
  const journey = JSON.parse(formData.get("journey") as string || "[]");
  const sounds = JSON.parse(formData.get("sounds") as string || "[]");
  const relatives = JSON.parse(formData.get("relatives") as string || "[]");

  const { error } = await supabase
    .from("words")
    .update({
      slug: newSlug,
      word,
      romanization,
      language,
      hook,
      story,
      journey,
      sounds,
      relatives,
      meaning_now: meaningNow,
    })
    .eq("slug", slug);

  if (error) {
    return { error: error.message };
  }

  revalidateTag("words", { expire: 0 });
  redirect("/admin");
}

export async function deleteWord(slug: string) {
  await requireAdmin();
  const supabase = createAdminSupabase();

  const { error } = await supabase
    .from("words")
    .delete()
    .eq("slug", slug);

  if (error) {
    return { error: error.message };
  }

  revalidateTag("words", { expire: 0 });
  redirect("/admin");
}
