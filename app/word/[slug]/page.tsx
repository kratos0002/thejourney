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
  if (!word) return { title: "Word Not Found" };

  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://etymology.life";
  const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);

  // Keyword-optimized title targeting "origin of [word]" and "[word] etymology"
  const title = `${capitalizedSlug} — Origin & Etymology`;

  // Search-optimized description combining hook with structured framing
  const firstStop = word.journey[0];
  const lastStop = word.journey[word.journey.length - 1];
  const journeyFrame = firstStop && lastStop
    ? ` Trace its journey from ${firstStop.location} to ${lastStop.location}.`
    : "";
  const description = `The word "${slug}" comes from ${word.language} ${word.romanization}. ${word.hook}${journeyFrame}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/word/${slug}`,
    },
    openGraph: {
      title: `${capitalizedSlug} — Origin & Etymology | The Journey`,
      description,
      type: "article",
      url: `${baseUrl}/word/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${capitalizedSlug} — Origin & Etymology | The Journey`,
      description,
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
  const wordUrl = `${baseUrl}/word/${enrichedWord.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      name: enrichedWord.romanization,
      alternateName: enrichedWord.slug,
      description: `The word "${enrichedWord.slug}" comes from ${enrichedWord.language} ${enrichedWord.romanization}. ${enrichedWord.hook}`,
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "The Journey — Word Origins",
        url: baseUrl,
      },
      url: wordUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Browse",
          item: `${baseUrl}/browse`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: enrichedWord.slug,
          item: wordUrl,
        },
      ],
    },
  ];

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
