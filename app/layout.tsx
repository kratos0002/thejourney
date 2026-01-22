import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Serif_4, JetBrains_Mono, Noto_Sans_Arabic, Noto_Sans_JP } from "next/font/google";
import { TransitionProvider } from "@/components/TransitionProvider";
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://thejourney.app"),
  title: "The Journey — Ten Words. Ten Worlds.",
  description: "An immersive exploration of 10 words and their etymological journeys across languages, cultures, and centuries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} ${notoArabic.variable} ${notoJP.variable} grain`}
      >
        <AmbientParticles />
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
