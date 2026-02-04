import { Metadata } from "next";
import { allFamilies, countBranches, countLanguages } from "@/data/language-families";
import FamiliesPage from "./FamiliesPage";

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://etymology.life";

export const metadata: Metadata = {
  title: "Language Families — The Great Language Trees",
  description:
    "Explore the genealogy of human speech. Interactive family trees showing how languages like Sanskrit, Persian, Greek, and English are all related through common ancestors.",
  alternates: {
    canonical: `${baseUrl}/families`,
  },
  openGraph: {
    title: "Language Families — The Journey",
    description:
      "Explore the genealogy of human speech. Interactive family trees showing how the world's languages are related.",
    type: "website",
    url: `${baseUrl}/families`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Language Families — The Journey",
    description:
      "Explore the genealogy of human speech. Interactive family trees showing how the world's languages are related.",
  },
};

export default function FamiliesPageRoute() {
  const totalBranches = allFamilies.reduce(
    (sum, f) => sum + countBranches(f),
    0
  );
  const totalLanguages = allFamilies.reduce(
    (sum, f) => sum + countLanguages(f.tree),
    0
  );

  // JSON-LD: CollectionPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Language Families",
    description: `Explore ${allFamilies.length} language families with interactive trees showing how the world's languages are related.`,
    url: `${baseUrl}/families`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allFamilies.length,
      itemListElement: allFamilies.map((family, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: family.name,
        url: `${baseUrl}/family/${family.slug}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FamiliesPage
        families={allFamilies}
        totalBranches={totalBranches}
        totalLanguages={totalLanguages}
      />
    </>
  );
}
