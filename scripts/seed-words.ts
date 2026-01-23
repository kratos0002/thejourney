/**
 * One-time migration script: seeds the Supabase `words` table
 * from the static TypeScript data files.
 *
 * Usage: npx tsx scripts/seed-words.ts
 *
 * Requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
 * in .env.local (loaded via dotenv).
 */

import { config } from "dotenv";
config({ path: ".env.local" });

import { createClient } from "@supabase/supabase-js";
import { allWords } from "../data/words";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function seed() {
  console.log(`Seeding ${allWords.length} words...`);

  const rows = allWords.map((w) => ({
    slug: w.slug,
    word: w.word,
    romanization: w.romanization,
    language: w.language,
    hook: w.hook,
    story: w.story,
    journey: w.journey,
    sounds: w.sounds,
    relatives: w.relatives,
    meaning_now: w.meaningNow,
  }));

  // Upsert in batches of 50
  const batchSize = 50;
  let inserted = 0;

  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize);
    const { error } = await supabase
      .from("words")
      .upsert(batch, { onConflict: "slug" });

    if (error) {
      console.error(`Error at batch ${i / batchSize + 1}:`, error.message);
      process.exit(1);
    }

    inserted += batch.length;
    console.log(`  ${inserted}/${rows.length} words upserted`);
  }

  console.log("Done! All words seeded successfully.");
}

seed();
