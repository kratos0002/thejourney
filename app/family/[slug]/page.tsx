import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFamilyBySlug, getAllFamilySlugs, countLanguages, countBranches } from "@/data/language-families";
import FamilyPageClient from "./FamilyPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllFamilySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const family = getFamilyBySlug(slug);
  if (!family) return { title: "Language Family Not Found" };

  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://etymology.life";
  const langCount = countLanguages(family.tree);

  const title = `${family.name} Language Family — ${langCount} Languages, One Ancestor`;
  const description = `${family.hook} Explore the ${countBranches(family)} branches and ${langCount} languages of the ${family.name} family tree.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/family/${slug}`,
    },
    openGraph: {
      title: `${family.name} Language Family | The Journey`,
      description,
      type: "article",
      url: `${baseUrl}/family/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${family.name} Language Family | The Journey`,
      description,
    },
  };
}

export default async function FamilyPage({ params }: PageProps) {
  const { slug } = await params;
  const family = getFamilyBySlug(slug);

  if (!family) {
    notFound();
  }

  // JSON-LD
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://etymology.life";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: `${family.name} Language Family`,
    description: family.description,
    url: `${baseUrl}/family/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FamilyPageClient family={family} />
    </>
  );
}
