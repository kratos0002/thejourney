/**
 * Share Card Canvas Renderer
 * Generates shareable image cards for words
 */

import type { Word } from "@/data/word-types";

// Card dimensions
export const CARD_SIZES = {
  story: { width: 1080, height: 1920 }, // 9:16 Instagram Stories
  square: { width: 1080, height: 1080 }, // 1:1 Instagram/Facebook
} as const;

export type CardSize = keyof typeof CARD_SIZES;

// Cultural color accents based on language origin
function getCulturalAccent(language: string): { primary: string; secondary: string } {
  const lang = language.toLowerCase();

  if (lang.includes("arabic") || lang.includes("persian"))
    return { primary: "#6b4a9e", secondary: "#4a3b6b" }; // Deep purple
  if (lang.includes("hindi") || lang.includes("sanskrit") || lang.includes("pali"))
    return { primary: "#b87a4b", secondary: "#8b4a2b" }; // Saffron/copper
  if (lang.includes("japanese") || lang.includes("chinese"))
    return { primary: "#4a7c7c", secondary: "#2d4a4a" }; // Jade/teal
  if (lang.includes("french") || lang.includes("italian") || lang.includes("spanish") || lang.includes("latin"))
    return { primary: "#6488c4", secondary: "#4a5a8c" }; // Cool blue
  if (lang.includes("german") || lang.includes("norse") || lang.includes("yiddish"))
    return { primary: "#a0a0be", secondary: "#6b6b8c" }; // Silver
  if (lang.includes("greek"))
    return { primary: "#9682c8", secondary: "#6b5a9e" }; // Violet
  if (lang.includes("zulu") || lang.includes("swahili"))
    return { primary: "#8bb866", secondary: "#5a8b3b" }; // Green

  return { primary: "#d4a574", secondary: "#a67c52" }; // Default amber
}

/**
 * Render "The Moment" card - hero quote with the word
 */
export async function renderMomentCard(
  word: Word,
  size: CardSize = "story"
): Promise<Blob> {
  const { width, height } = CARD_SIZES[size];
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;

  const accent = getCulturalAccent(word.language);
  const padding = 80;
  const centerX = width / 2;

  // Background gradient
  const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
  bgGradient.addColorStop(0, "#0a0a14");
  bgGradient.addColorStop(0.5, "#0f0f1a");
  bgGradient.addColorStop(1, "#12121e");
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, width, height);

  // Cultural accent glow at center
  const glowGradient = ctx.createRadialGradient(
    centerX, height * 0.55, 0,
    centerX, height * 0.55, width * 0.6
  );
  glowGradient.addColorStop(0, `${accent.primary}20`);
  glowGradient.addColorStop(0.5, `${accent.secondary}10`);
  glowGradient.addColorStop(1, "transparent");
  ctx.fillStyle = glowGradient;
  ctx.fillRect(0, 0, width, height);

  // Vignette
  const vignetteGradient = ctx.createRadialGradient(
    centerX, height / 2, height * 0.3,
    centerX, height / 2, height * 0.8
  );
  vignetteGradient.addColorStop(0, "transparent");
  vignetteGradient.addColorStop(1, "rgba(10, 10, 20, 0.5)");
  ctx.fillStyle = vignetteGradient;
  ctx.fillRect(0, 0, width, height);

  // Decorative quotation mark
  ctx.font = "300px Georgia, serif";
  ctx.fillStyle = `${accent.primary}15`;
  ctx.textAlign = "center";
  ctx.fillText("\u201C", centerX - 100, height * 0.28);

  // Hook text (the hero)
  const hook = word.hook;
  const hookFontSize = size === "story" ? 48 : 42;
  const hookLineHeight = hookFontSize * 1.5;
  const maxHookWidth = width - padding * 2;

  ctx.font = `italic ${hookFontSize}px "Cormorant Garamond", Georgia, serif`;
  ctx.fillStyle = "#f0ede6";
  ctx.textAlign = "center";

  // Word wrap the hook
  const hookLines = wrapText(ctx, hook, maxHookWidth);
  const hookStartY = size === "story" ? height * 0.32 : height * 0.25;

  hookLines.forEach((line, i) => {
    ctx.fillText(line, centerX, hookStartY + i * hookLineHeight);
  });

  // Word card/badge
  const wordCardY = size === "story" ? height * 0.58 : height * 0.55;
  const wordCardHeight = size === "story" ? 220 : 200;
  const wordCardWidth = width - padding * 3;

  // Word card background
  ctx.fillStyle = "rgba(20, 20, 30, 0.6)";
  ctx.beginPath();
  roundRect(ctx, (width - wordCardWidth) / 2, wordCardY, wordCardWidth, wordCardHeight, 20);
  ctx.fill();

  // Word card border
  ctx.strokeStyle = `${accent.primary}40`;
  ctx.lineWidth = 1;
  ctx.stroke();

  // Word glow
  ctx.shadowColor = accent.primary;
  ctx.shadowBlur = 40;

  // Word in original script
  const wordFontSize = size === "story" ? 72 : 64;
  ctx.font = `600 ${wordFontSize}px "Cormorant Garamond", Georgia, serif`;
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.fillText(word.word, centerX, wordCardY + 80);

  ctx.shadowBlur = 0;

  // Romanization
  ctx.font = `400 ${size === "story" ? 28 : 24}px "Source Serif 4", Georgia, serif`;
  ctx.fillStyle = "#a8b0b8";
  ctx.fillText(word.romanization, centerX, wordCardY + 130);

  // Language
  ctx.font = `400 ${size === "story" ? 20 : 18}px "Source Serif 4", Georgia, serif`;
  ctx.fillStyle = accent.primary;
  ctx.fillText(word.language, centerX, wordCardY + 170);

  // Divider line
  const dividerY = size === "story" ? height - 180 : height - 120;
  ctx.strokeStyle = "rgba(240, 237, 230, 0.15)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding * 2, dividerY);
  ctx.lineTo(width - padding * 2, dividerY);
  ctx.stroke();

  // Branding
  ctx.font = `400 ${size === "story" ? 18 : 16}px "Source Serif 4", Georgia, serif`;
  ctx.fillStyle = "rgba(240, 237, 230, 0.5)";
  ctx.textAlign = "center";
  ctx.fillText("thejourney.app", centerX, dividerY + 40);

  // Convert to blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Failed to generate card image"));
      },
      "image/png",
      1.0
    );
  });
}

// Helper: Word wrap text
function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);

    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

// Helper: Rounded rectangle
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

/**
 * Download a blob as a file
 */
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Share using Web Share API (if available)
 */
export async function shareCard(
  blob: Blob,
  word: Word,
  fallbackDownload = true
): Promise<boolean> {
  const file = new File([blob], `${word.slug}-journey.png`, { type: "image/png" });

  // Check if Web Share API with files is supported
  if (navigator.share && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({
        title: `The Journey of ${word.romanization}`,
        text: word.hook,
        url: `https://thejourney.app/word/${word.slug}`,
        files: [file],
      });
      return true;
    } catch (err) {
      // User cancelled or share failed
      if ((err as Error).name !== "AbortError") {
        console.warn("Share failed:", err);
      }
    }
  }

  // Fallback: download the file
  if (fallbackDownload) {
    downloadBlob(blob, `${word.slug}-journey.png`);
    return true;
  }

  return false;
}
