import { Metadata } from "next";
import { allLanguages } from "@/data/languages";
import LanguagesPage from "./LanguagesPage";

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://etymology.life";

export const metadata: Metadata = {
  title: "Language Histories — How Languages Spread Across the World",
  description:
    "Explore the epic journeys of the world's great languages. Watch Sanskrit spread from India to Southeast Asia, Persian become the lingua franca of empires, and more.",
  alternates: {
    canonical: `${baseUrl}/languages`,
  },
  openGraph: {
    title: "Language Histories — The Journey",
    description:
      "Explore the epic journeys of the world's great languages. Interactive maps showing how languages spread across continents and centuries.",
    type: "website",
    url: `${baseUrl}/languages`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Language Histories — The Journey",
    description:
      "Explore the epic journeys of the world's great languages. Interactive maps showing how languages spread across continents and centuries.",
  },
};

export default function LanguagesPageRoute() {
  // Calculate total phases and related words
  const totalPhases = allLanguages.reduce((sum, lang) => sum + lang.phases.length, 0);
  const totalRelatedWords = allLanguages.reduce(
    (sum, lang) => sum + (lang.relatedWords?.length || 0),
    0
  );

  // JSON-LD: CollectionPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Language Histories",
    description: `Explore ${allLanguages.length} language histories with interactive maps showing how languages spread across the world.`,
    url: `${baseUrl}/languages`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allLanguages.length,
      itemListElement: allLanguages.map((lang, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: lang.language,
        url: `${baseUrl}/language/${lang.slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LanguagesPage
        languages={allLanguages}
        totalPhases={totalPhases}
        totalRelatedWords={totalRelatedWords}
      />
    </>
  );
}
