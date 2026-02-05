import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLanguageBySlug, getAllLanguageSlugs } from "@/data/languages";
import { getFamilyByName } from "@/data/language-families";
import LanguagePageClient from "./LanguagePageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllLanguageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const language = getLanguageBySlug(slug);
  if (!language) return { title: "Language Not Found" };

  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://etymology.life";

  const title = `History of ${language.language} — How It Spread Across the World`;
  const description = `${language.hook} Explore the ${language.phases.length} major eras of ${language.language}, from ${language.originRegion} (${language.originPeriod}) to today.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/language/${slug}`,
    },
    openGraph: {
      title: `History of ${language.language} | The Journey`,
      description,
      type: "article",
      url: `${baseUrl}/language/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `History of ${language.language} | The Journey`,
      description,
    },
  };
}

export default async function LanguagePage({ params }: PageProps) {
  const { slug } = await params;
  const language = getLanguageBySlug(slug);

  if (!language) {
    notFound();
  }

  const familySlug = getFamilyByName(language.parentFamily)?.slug;

  return <LanguagePageClient language={language} familySlug={familySlug} />;
}
