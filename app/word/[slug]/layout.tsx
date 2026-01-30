import { getAllWords } from "@/lib/words";

export async function generateStaticParams() {
  const words = await getAllWords();
  return words.map(word => ({ slug: word.slug }));
}

export default function WordLayout({ children }: { children: React.ReactNode }) {
  return children;
}
