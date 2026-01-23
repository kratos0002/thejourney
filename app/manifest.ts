import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Journey — Where every word began",
    short_name: "The Journey",
    description: "An immersive exploration of 50 words and their etymological journeys across languages, cultures, and centuries.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a14",
    theme_color: "#0a0a14",
    orientation: "portrait",
    icons: [
      {
        src: "/icons/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
