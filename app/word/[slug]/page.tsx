import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllWords, getWordBySlug } from "@/lib/words";
import type { Word, RelativeWord } from "@/data/word-types";
import WordPageClient from "./WordPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Enrich relatives with availability status based on existing words.
 * This ensures relatives are always up-to-date when new words are added.
 */
function enrichRelatives(word: Word, allSlugs: Set<string>): Word {
  const enrichedRelatives: RelativeWord[] = word.relatives.map((relative) => {
    // Try to find a matching word by slug or by normalizing the word name
    const possibleSlug = relative.slug || relative.word.toLowerCase().replace(/\s+/g, "-");
    const isAvailable = allSlugs.has(possibleSlug);

    return {
      ...relative,
      available: isAvailable,
      slug: isAvailable ? possibleSlug : undefined,
    };
  });

  return {
    ...word,
    relatives: enrichedRelatives,
  };
}

export async function generateStaticParams() {
  const words = await getAllWords();
  return words.map((word) => ({ slug: word.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const word = await getWordBySlug(slug);
  if (!word) return {};

  return {
    title: `${word.romanization} — The Journey`,
    description: word.hook,
    openGraph: {
      title: `${word.romanization} — The Journey`,
      description: word.hook,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${word.romanization} — The Journey`,
      description: word.hook,
    },
  };
}

export default async function WordPage({ params }: PageProps) {
  const { slug } = await params;
  const [word, allWords] = await Promise.all([
    getWordBySlug(slug),
    getAllWords(),
  ]);

  if (!word) {
    notFound();
  }

  // Create a set of all available slugs for quick lookup
  const allSlugs = new Set(allWords.map((w) => w.slug));

  // Enrich relatives with current availability status
  const enrichedWord = enrichRelatives(word, allSlugs);

  // Pick suggestion candidates for "explore more" (filtered client-side)
  const others = allWords.filter(w => w.slug !== slug);
  const suggestions = others
    .sort(() => Math.random() - 0.5)
    .slice(0, 12)
    .map(w => ({ slug: w.slug, romanization: w.romanization }));

  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://etymology.life";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${enrichedWord.romanization} — Etymology & Origin`,
    description: enrichedWord.hook,
    url: `${baseUrl}/word/${enrichedWord.slug}`,
    inLanguage: "en",
    about: {
      "@type": "DefinedTerm",
      name: enrichedWord.romanization,
      description: enrichedWord.meaningNow,
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "The Journey — Etymology Collection",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "The Journey",
      url: baseUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WordPageClient word={enrichedWord} suggestions={suggestions} />
    </>
  );
}
