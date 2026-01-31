import type { MetadataRoute } from "next";
import { getAllWords } from "@/lib/words";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://etymology.life";
  const words = await getAllWords();

  const wordEntries: MetadataRoute.Sitemap = words.map((word) => ({
    url: `${baseUrl}/word/${word.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/browse`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...wordEntries,
  ];
}
