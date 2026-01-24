import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllWords, getWordBySlug } from "@/lib/words";
import WordPageClient from "./WordPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
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
  const word = await getWordBySlug(slug);

  if (!word) {
    notFound();
  }

  // Pick suggestion candidates for "explore more" (filtered client-side)
  const allWords = await getAllWords();
  const others = allWords.filter(w => w.slug !== slug);
  const suggestions = others
    .sort(() => Math.random() - 0.5)
    .slice(0, 12)
    .map(w => ({ slug: w.slug, romanization: w.romanization }));

  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://etymology.life";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${word.romanization} — Etymology & Origin`,
    description: word.hook,
    url: `${baseUrl}/word/${word.slug}`,
    inLanguage: "en",
    about: {
      "@type": "DefinedTerm",
      name: word.romanization,
      description: word.meaningNow,
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
      <WordPageClient word={word} suggestions={suggestions} />
    </>
  );
}
