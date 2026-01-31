import { Metadata } from "next";
import { getAllWords } from "@/lib/words";
import BrowsePage from "@/components/browse/BrowsePage";

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://etymology.life";

export const metadata: Metadata = {
  title: "Browse All Word Origins — The Journey",
  description:
    "Explore 250+ word origins from 30+ languages. Discover where everyday English words really come from — from Arabic qahwa to Japanese tsunami.",
  alternates: {
    canonical: `${baseUrl}/browse`,
  },
  openGraph: {
    title: "Browse All Word Origins — The Journey",
    description:
      "Explore 250+ word origins from 30+ languages. Discover where everyday English words really come from.",
    type: "website",
    url: `${baseUrl}/browse`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Browse All Word Origins — The Journey",
    description:
      "Explore 250+ word origins from 30+ languages. Discover where everyday English words really come from.",
  },
};

export default async function BrowsePageRoute() {
  const words = await getAllWords();

  // Group words by language
  const languageGroups = new Map<string, typeof words>();
  for (const word of words) {
    const lang = word.language;
    if (!languageGroups.has(lang)) {
      languageGroups.set(lang, []);
    }
    languageGroups.get(lang)!.push(word);
  }

  // Sort groups by count descending; within each group, sort by romanization
  const sortedGroups = Array.from(languageGroups.entries())
    .map(([language, groupWords]) => ({
      language,
      words: groupWords.sort((a, b) =>
        a.romanization.localeCompare(b.romanization)
      ),
    }))
    .sort((a, b) => b.words.length - a.words.length);

  // Separate single-word languages into "& Others"
  const mainGroups = sortedGroups.filter((g) => g.words.length > 1);
  const singletons = sortedGroups.filter((g) => g.words.length === 1);

  const othersWords = singletons
    .flatMap((g) => g.words)
    .sort((a, b) => a.romanization.localeCompare(b.romanization));

  const allGroups =
    othersWords.length > 0
      ? [...mainGroups, { language: "& Others", words: othersWords }]
      : mainGroups;

  // Count unique languages
  const uniqueLanguages = new Set(words.map((w) => w.language));

  // JSON-LD: CollectionPage + BreadcrumbList
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Browse All Word Origins",
      description: `Explore ${words.length}+ word origins from ${uniqueLanguages.size}+ languages.`,
      url: `${baseUrl}/browse`,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: words.length,
        itemListElement: words.map((word, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: word.romanization,
          url: `${baseUrl}/word/${word.slug}`,
        })),
      },
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
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrowsePage
        groups={allGroups}
        totalWords={words.length}
        totalLanguages={uniqueLanguages.size}
      />
    </>
  );
}
