import { getAllWords } from "@/lib/words";
import HomePage from "@/components/home/HomePage";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://etymology.life";

export const metadata: Metadata = {
  alternates: {
    canonical: baseUrl,
  },
};

export default async function Home() {
  const words = await getAllWords();
  return <HomePage words={words} />;
}
