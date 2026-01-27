"use server";

import { createServerSupabase } from "@/lib/supabase/server";
import { createAdminSupabase } from "@/lib/supabase/admin";
import { allWords } from "@/data/words";
import type { Sound } from "@/data/word-types";

async function requireAdmin() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    throw new Error("Unauthorized");
  }
  return user.email;
}

export type AudioStatus = "pending" | "verified" | "incorrect" | "needs_review";

export interface AudioVerification {
  id: string;
  word_slug: string;
  sound_index: number;
  sound_label: string;
  status: AudioStatus;
  audio_url: string | null;
  notes: string | null;
  verified_by: string | null;
  updated_at: string;
}

export interface WordAudioInfo {
  slug: string;
  word: string;
  language: string;
  sounds: (Sound & {
    index: number;
    verification?: AudioVerification;
  })[];
}

export interface AudioAuditStats {
  totalWords: number;
  totalSounds: number;
  verified: number;
  incorrect: number;
  needs_review: number;
  pending: number;
}

export async function getAudioAuditStats(): Promise<AudioAuditStats> {
  await requireAdmin();

  const words = allWords;
  const totalWords = words.length;
  const totalSounds = words.reduce((sum, w) => sum + (w.sounds?.length || 0), 0);

  const supabase = createAdminSupabase();

  const { data: verifications } = await supabase
    .from("audio_verifications")
    .select("status") as { data: { status: AudioStatus }[] | null };

  const counts = {
    verified: 0,
    incorrect: 0,
    needs_review: 0,
    pending: totalSounds, // Start with all as pending
  };

  if (verifications) {
    for (const v of verifications) {
      if (v.status === "verified") counts.verified++;
      else if (v.status === "incorrect") counts.incorrect++;
      else if (v.status === "needs_review") counts.needs_review++;
    }
    // Pending = total - verified - incorrect - needs_review
    counts.pending = totalSounds - counts.verified - counts.incorrect - counts.needs_review;
  }

  return {
    totalWords,
    totalSounds,
    ...counts,
  };
}

export async function getWordsForAudit(filter?: AudioStatus | "all"): Promise<WordAudioInfo[]> {
  await requireAdmin();

  const words = allWords;
  const supabase = createAdminSupabase();

  // Get all verifications
  const { data: verifications } = await supabase
    .from("audio_verifications")
    .select("*") as { data: AudioVerification[] | null };

  const verificationMap = new Map<string, AudioVerification>();
  if (verifications) {
    for (const v of verifications) {
      const key = `${v.word_slug}:${v.sound_index}`;
      verificationMap.set(key, v);
    }
  }

  const result: WordAudioInfo[] = [];

  for (const word of words) {
    if (!word.sounds || word.sounds.length === 0) continue;

    const soundsWithVerification = word.sounds.map((sound, index) => {
      const key = `${word.slug}:${index}`;
      const verification = verificationMap.get(key);
      return {
        ...sound,
        index,
        verification,
      };
    });

    // Apply filter
    if (filter && filter !== "all") {
      const hasMatchingStatus = soundsWithVerification.some(s => {
        const status = s.verification?.status || "pending";
        return status === filter;
      });
      if (!hasMatchingStatus) continue;
    }

    result.push({
      slug: word.slug,
      word: word.word,
      language: word.language,
      sounds: soundsWithVerification,
    });
  }

  return result;
}

export async function updateAudioVerification(
  wordSlug: string,
  soundIndex: number,
  soundLabel: string,
  status: AudioStatus,
  notes?: string,
  audioUrl?: string
): Promise<{ error?: string }> {
  const adminEmail = await requireAdmin();
  const supabase = createAdminSupabase();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (supabase as any)
    .from("audio_verifications")
    .upsert({
      word_slug: wordSlug,
      sound_index: soundIndex,
      sound_label: soundLabel,
      status,
      notes: notes || null,
      audio_url: audioUrl || null,
      verified_by: adminEmail,
      updated_at: new Date().toISOString(),
    }, {
      onConflict: "word_slug,sound_index",
    });

  if (error) {
    console.error("Error updating audio verification:", error);
    return { error: error.message };
  }

  return {};
}

export async function bulkMarkStatus(
  wordSlug: string,
  status: AudioStatus
): Promise<{ error?: string }> {
  const adminEmail = await requireAdmin();
  const supabase = createAdminSupabase();

  const words = allWords;
  const word = words.find(w => w.slug === wordSlug);

  if (!word || !word.sounds) {
    return { error: "Word not found" };
  }

  const records = word.sounds.map((sound, index) => ({
    word_slug: wordSlug,
    sound_index: index,
    sound_label: sound.label,
    status,
    verified_by: adminEmail,
    updated_at: new Date().toISOString(),
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (supabase as any)
    .from("audio_verifications")
    .upsert(records, {
      onConflict: "word_slug,sound_index",
    });

  if (error) {
    console.error("Error bulk updating audio verification:", error);
    return { error: error.message };
  }

  return {};
}
