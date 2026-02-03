import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Serif_4, JetBrains_Mono, Noto_Sans_Arabic, Noto_Sans_JP } from "next/font/google";
import { TransitionProvider } from "@/components/TransitionProvider";
import { ExplorationProvider } from "@/components/ExplorationProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogProvider, PostHogPageView } from "@/components/PostHogProvider";
import AmbientParticles from "@/components/AmbientParticles";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "600"],
  display: "swap",
});

const notoJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a14",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://etymology.life"),
  title: {
    template: "%s | The Journey",
    default: "The Journey — Where Every Word Began",
  },
  description: "An immersive exploration of words and their etymological journeys across languages, cultures, and centuries—discover where everyday language began and how meanings traveled through time.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icons/icon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/icons/icon-192.png",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "The Journey",
              alternateName: "Where Every Word Began",
              url: process.env.NEXT_PUBLIC_URL || "https://etymology.life",
              description: "An immersive exploration of words and their etymological journeys across languages, cultures, and centuries.",
              publisher: {
                "@type": "Organization",
                name: "The Journey",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} ${notoArabic.variable} ${notoJP.variable} grain`}
      >
        <PostHogProvider>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          <AmbientParticles />
          <TransitionProvider>
            <ExplorationProvider>
              <ThemeProvider>
                {children}
              </ThemeProvider>
            </ExplorationProvider>
          </TransitionProvider>
          <Analytics />
          <SpeedInsights />
        </PostHogProvider>
      </body>
    </html>
  );
}
