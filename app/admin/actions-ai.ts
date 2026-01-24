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

CRITICAL: Each suggested word MUST be either:
(a) The earliest attested root/origin form (e.g., "papa" from Quechua for the potato journey), OR
(b) The most widely-recognized modern descendant (e.g., "algorithm" from al-Khwārizmī)
NEVER suggest a middle borrowing or intermediate form. The featured word should be the one that creates maximum intrigue — either exotic ancient origin or surprisingly-sourced modern word.

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
- The featured word ("word" and "romanization" fields) MUST be either the earliest attested root OR the most widely-recognized modern descendant — NEVER a middle borrowing or intermediate form. If given a middle form, trace back to the true origin or forward to the best-known modern form and use that as the entry.
- Journey should have 5-7 stops minimum, tracing the actual historical path
- The FIRST journey stop must correspond to the earliest known origin of the word
- The FINAL journey stop must show the word's modern evolved form (e.g., if the word is "usquebaugh", the final stop must be "whiskey"; if "al-jabr", the final stop must be "algebra"). Always trace to the modern descendant.
- Coordinates MUST be [longitude, latitude] format — longitude first (-180 to 180), latitude second (-90 to 90). Double-check each coordinate against a real map. For example: London is [-0.12, 51.51], Baghdad is [44.37, 33.31], Tokyo is [139.69, 35.69], New York is [-74.0, 40.71].
- IPA must be linguistically correct
- Include 3-5 sounds showing pronunciation evolution
- Include 4-6 relatives (cognates, descendants, or related borrowings)
- Story paragraphs should be 2-4 sentences each, vivid and specific
- Colors should progress through warm earth tones
- The meaningNow should be reflective and literary (2-3 sentences)
- ALL text fields must be plain text only — NO markdown formatting (no **, no *, no _, no \`, no #). Just plain sentences.
- The "form" field in journey stops should contain ONLY the word form (e.g., "bārūd", "poudre"), never a sentence or description.
- The "context" field should be a concise sentence of cultural/linguistic context, plain text only.

Return ONLY valid JSON, no markdown code fences or other text.`;

  return callPerplexity([{ role: "user", content: prompt }]);
}

function cleanText(text: unknown): string {
  if (typeof text !== "string") return "";
  return text
    .replace(/\*\*/g, "")          // remove bold markdown
    .replace(/\*/g, "")            // remove italic markdown
    .replace(/__/g, "")            // remove underscore bold
    .replace(/_([^_]+)_/g, "$1")   // remove underscore italic
    .replace(/`([^`]+)`/g, "$1")   // remove inline code
    .replace(/^#+\s*/gm, "")       // remove heading markers
    .replace(/\n{3,}/g, "\n\n")    // collapse excessive newlines
    .trim();
}

function validateCoordinates(coords: unknown): [number, number] | null {
  if (!Array.isArray(coords) || coords.length < 2) return null;
  let lon = Number(coords[0]);
  let lat = Number(coords[1]);
  if (isNaN(lon) || isNaN(lat)) return null;

  // Detect likely lat/lon swap: if "longitude" is in [-90, 90] but "latitude" is outside [-90, 90],
  // they're almost certainly swapped
  if (Math.abs(lon) <= 90 && Math.abs(lat) > 90 && Math.abs(lat) <= 180) {
    [lon, lat] = [lat, lon];
  }

  // Bounds check
  if (lon < -180 || lon > 180 || lat < -90 || lat > 90) return null;

  return [lon, lat];
}

interface JourneyStopRaw {
  location?: unknown;
  period?: unknown;
  form?: unknown;
  script?: unknown;
  context?: unknown;
  color?: unknown;
  coordinates?: unknown;
}

function validateJourney(journey: unknown): { stops: import("@/data/word-types").JourneyStop[]; errors: string[] } {
  const errors: string[] = [];
  if (!Array.isArray(journey) || journey.length === 0) {
    return { stops: [], errors: ["journey must be a non-empty array"] };
  }

  const stops: import("@/data/word-types").JourneyStop[] = [];
  for (let i = 0; i < journey.length; i++) {
    const raw = journey[i] as JourneyStopRaw;

    const location = cleanText(raw.location);
    const period = cleanText(raw.period);
    const form = cleanText(raw.form);
    const context = cleanText(raw.context);
    const script = raw.script ? cleanText(raw.script) : undefined;
    const color = typeof raw.color === "string" ? raw.color : undefined;

    if (!location) { errors.push(`Stop ${i + 1}: missing location`); continue; }
    if (!form) { errors.push(`Stop ${i + 1}: missing form`); continue; }

    const coords = validateCoordinates(raw.coordinates);
    if (!coords) {
      errors.push(`Stop ${i + 1} (${location}): invalid coordinates ${JSON.stringify(raw.coordinates)}`);
      continue;
    }

    stops.push({
      location,
      period: period || "Unknown period",
      form,
      ...(script && { script }),
      context: context || "",
      ...(color && { color }),
      coordinates: coords,
    });
  }

  if (stops.length < 3) {
    errors.push(`Only ${stops.length} valid stops after validation (minimum 3 required)`);
  }

  return { stops, errors };
}

function validateStory(story: unknown): string[] {
  if (!Array.isArray(story)) return [];
  return story
    .map(p => cleanText(p))
    .filter(p => p.length > 0);
}

function validateSounds(sounds: unknown): import("@/data/word-types").Sound[] {
  if (!Array.isArray(sounds)) return [];
  return sounds
    .filter((s: Record<string, unknown>) => s && typeof s.label === "string" && typeof s.ipa === "string")
    .map((s: Record<string, unknown>) => {
      const result: import("@/data/word-types").Sound = {
        label: cleanText(s.label),
        ipa: cleanText(s.ipa),
      };
      if (typeof s.text === "string" && s.text.trim()) result.text = cleanText(s.text);
      if (typeof s.lang === "string" && s.lang.trim()) result.lang = s.lang.trim();
      return result;
    });
}

function validateRelatives(relatives: unknown): import("@/data/word-types").RelativeWord[] {
  if (!Array.isArray(relatives)) return [];
  return relatives
    .filter((r: Record<string, unknown>) => r && typeof r.word === "string" && typeof r.language === "string")
    .map((r: Record<string, unknown>) => ({
      word: cleanText(r.word),
      language: cleanText(r.language),
      connection: cleanText(r.connection) || "",
      available: r.available === true,
    }));
}

export async function createWordFromAI(wordJson: string): Promise<{ error?: string; slug?: string }> {
  await requireAdmin();

  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(wordJson);
  } catch {
    return { error: "Invalid JSON from AI" };
  }

  // Validate required string fields
  const slug = typeof parsed.slug === "string" ? parsed.slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, "-") : "";
  const word = cleanText(parsed.word);
  const romanization = cleanText(parsed.romanization);
  const language = cleanText(parsed.language);
  const hook = cleanText(parsed.hook);
  const meaningNow = cleanText(parsed.meaningNow);

  if (!slug || !word || !romanization || !language) {
    return { error: `Missing required fields: ${[!slug && "slug", !word && "word", !romanization && "romanization", !language && "language"].filter(Boolean).join(", ")}` };
  }

  // Validate journey with coordinate checks
  const { stops, errors: journeyErrors } = validateJourney(parsed.journey);
  if (journeyErrors.length > 0) {
    return { error: `Journey validation failed:\n${journeyErrors.join("\n")}` };
  }

  // Validate story
  const story = validateStory(parsed.story);
  if (story.length === 0) {
    return { error: "Story must have at least one paragraph" };
  }

  // Validate sounds and relatives
  const sounds = validateSounds(parsed.sounds);
  const relatives = validateRelatives(parsed.relatives);

  const supabase = createAdminSupabase();
  const row = {
    slug,
    word,
    romanization,
    language,
    hook: hook || "",
    story: story as unknown as import("@/lib/supabase/types").Json,
    journey: stops as unknown as import("@/lib/supabase/types").Json,
    sounds: sounds as unknown as import("@/lib/supabase/types").Json,
    relatives: relatives as unknown as import("@/lib/supabase/types").Json,
    meaning_now: meaningNow || "",
    source: "ai" as const,
  };
  const { error } = await supabase.from("words").insert(row);

  if (error) {
    return { error: error.message };
  }

  revalidateTag("words", { expire: 0 });
  return { slug };
}
