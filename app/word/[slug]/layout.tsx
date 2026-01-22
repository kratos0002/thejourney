import { Metadata } from "next";
import { getWordBySlug, words } from "@/data/words";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const word = getWordBySlug(slug);

  if (!word) {
    return { title: "Word Not Found — The Journey" };
  }

  return {
    title: `${word.romanization} (${word.language}) — The Journey`,
    description: word.hook,
    openGraph: {
      title: `${word.romanization} — ${word.language}`,
      description: word.hook,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${word.romanization} — ${word.language}`,
      description: word.hook,
    },
  };
}

export async function generateStaticParams() {
  return words.map(word => ({ slug: word.slug }));
}

export default function WordLayout({ children }: { children: React.ReactNode }) {
  return children;
}
