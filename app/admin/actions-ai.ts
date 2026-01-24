"use server";

import { revalidateTag } from "next/cache";
import { createServerSupabase } from "@/lib/supabase/server";
import { createAdminSupabase } from "@/lib/supabase/admin";
import type { Word } from "@/data/word-types";

const SYSTEM_PROMPT = `You are the world's foremost etymologist — a polyglot scholar with encyclopedic knowledge of historical linguistics, phonological evolution, cultural diffusion, and the deep histories of words across every language family. You combine the rigor of an academic linguist with the storytelling ability of a master narrator. Your knowledge spans Proto-Indo-European reconstructions, Semitic roots, Sino-Tibetan evolution, Austronesian migrations, and every language family in between. You always cite specific historical periods, trade routes, and cultural contexts. You never fabricate — if uncertain, you say so.`;

async function requireAdmin() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    throw new Error("Unauthorized");
  }
}

async function callPerplexity(messages: { role: string; content: string }[]): Promise<{ result?: string; error?: string }> {
  if (!process.env.PERPLEXITY_API_KEY) {
    return { error: "PERPLEXITY_API_KEY is not configured" };
  }

  const response = await fetch("https://api.perplexity.ai/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.PERPLEXITY_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "sonar-pro",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.3,
    }),
  });

  if (!response.ok) {
    return { error: `Perplexity API error: ${response.status}` };
  }

  const data = await response.json();
  return { result: data.choices[0].message.content };
}

export async function suggestImprovements(word: Word): Promise<{ result?: string; error?: string }> {
  await requireAdmin();

  const prompt = `Analyze this etymological entry for accuracy, completeness, and missed opportunities. The entry is for the word "${word.romanization}" (${word.word}) from ${word.language}.

Hook: "${word.hook}"

Story:
${word.story.join("\n\n")}

Journey stops:
${word.journey.map((j, i) => `${i + 1}. ${j.location} (${j.period}): "${j.form}" — ${j.context}`).join("\n")}

Sounds/Pronunciations:
${word.sounds.map(s => `- ${s.label}: ${s.ipa}`).join("\n")}

Related words:
${word.relatives.map(r => `- ${r.word} (${r.language}): ${r.connection}`).join("\n")}

Meaning today: "${word.meaningNow}"

Please provide:
1. **Factual corrections** — any historical dates, locations, or claims that are incorrect or misleading
2. **Missing journey stops** — important intermediate languages/cultures the word passed through that are omitted
3. **Missing relatives** — significant cognates or descendants not mentioned
4. **Story improvements** — suggestions to make the narrative more compelling or accurate
5. **Sound/pronunciation issues** — any IPA transcriptions that seem wrong
6. **Coordinate check** — any journey stop coordinates that seem geographically wrong for the stated location

Be specific and cite sources where possible. If something is correct, say so briefly.`;

  return callPerplexity([{ role: "user", content: prompt }]);
}

export async function suggestNewWords(existingSlugs: string[]): Promise<{ result?: string; error?: string }> {
  await requireAdmin();

  const prompt = `I'm building an immersive etymology app called "The Journey" that traces words across languages, cultures, and centuries. Each word has a rich etymological journey with multiple stops across geography and time.

Words already in the app: ${existingSlugs.join(", ")}

Suggest exactly 5 NEW words that would make excellent additions. Prioritize:
- Words with fascinating, multi-hop etymological journeys (at least 4-5 geographic/linguistic stops)
- Diversity of origin languages (don't cluster in one language family)
- Words with surprising or counterintuitive origins that would captivate users
- Words that connect to major historical events, trade routes, or cultural exchanges
- Words used in everyday modern life whose origins are unknown to most people

For each word, provide:
1. The word in its original script
2. Romanization
3. Origin language
4. A 1-sentence compelling hook (the kind that makes you go "wait, really?")
5. Brief summary of the journey (3-4 sentence overview)

Format as JSON array:
[{"word": "original script", "romanization": "...", "language": "...", "hook": "...", "summary": "..."}]

Return ONLY the JSON array, no other text.`;

  return callPerplexity([{ role: "user", content: prompt }]);
}

export async function generateWordData(wordName: string, language: string, hook: string): Promise<{ result?: string; error?: string }> {
  await requireAdmin();

  const prompt = `Generate a complete etymological entry for the word "${wordName}" from ${language}. Hook: "${hook}"

I need the FULL data in this exact JSON format. Be thorough, historically accurate, and narratively compelling. Every journey stop must have real geographic coordinates [longitude, latitude].

{
  "slug": "url-safe-slug",
  "word": "word in original script",
  "romanization": "latin transliteration",
  "language": "${language}",
  "hook": "${hook}",
  "story": [
    "First paragraph — the origin story, vivid and specific...",
    "Second paragraph — the journey through cultures/languages...",
    "Third paragraph — key transformation or cultural moment...",
    "Fourth paragraph — arrival in modern usage..."
  ],
  "journey": [
    {
      "location": "Place name",
      "period": "~date or century",
      "form": "word form at this stage",
      "script": "in original script if applicable",
      "context": "Brief cultural/linguistic context",
      "color": "#hexcolor (warm earth tones)",
      "coordinates": [longitude, latitude]
    }
  ],
  "sounds": [
    {
      "label": "Language/period label",
      "ipa": "/IPA transcription/",
      "text": "text for speech synthesis",
      "lang": "BCP-47 code"
    }
  ],
  "relatives": [
    {
      "word": "related word",
      "language": "its language",
      "connection": "how it's connected",
      "available": false
    }
  ],
  "meaningNow": "A thoughtful paragraph about what this word means in the modern world — its cultural significance, how its meaning has shifted, what it reveals about human connection."
}

Requirements:
- Journey should have 5-7 stops minimum, tracing the actual historical path
- Coordinates must be accurate for the stated locations
- IPA must be linguistically correct
- Include 3-5 sounds showing pronunciation evolution
- Include 4-6 relatives (cognates, descendants, or related borrowings)
- Story paragraphs should be 2-4 sentences each, vivid and specific
- Colors should progress through warm earth tones
- The meaningNow should be reflective and literary (2-3 sentences)

Return ONLY valid JSON, no markdown code fences or other text.`;

  return callPerplexity([{ role: "user", content: prompt }]);
}

export async function createWordFromAI(wordJson: string): Promise<{ error?: string; slug?: string }> {
  await requireAdmin();

  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(wordJson);
  } catch {
    return { error: "Invalid JSON from AI" };
  }

  const supabase = createAdminSupabase();
  const row = {
    slug: parsed.slug as string,
    word: parsed.word as string,
    romanization: parsed.romanization as string,
    language: parsed.language as string,
    hook: parsed.hook as string,
    story: parsed.story as unknown as import("@/lib/supabase/types").Json,
    journey: parsed.journey as unknown as import("@/lib/supabase/types").Json,
    sounds: parsed.sounds as unknown as import("@/lib/supabase/types").Json,
    relatives: parsed.relatives as unknown as import("@/lib/supabase/types").Json,
    meaning_now: parsed.meaningNow as string,
  };
  const { error } = await supabase.from("words").insert(row);

  if (error) {
    return { error: error.message };
  }

  revalidateTag("words", { expire: 0 });
  return { slug: parsed.slug as string };
}
