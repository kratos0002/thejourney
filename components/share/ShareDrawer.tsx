"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Word } from "@/data/word-types";
import { renderMomentCard, shareCard, downloadBlob, type CardSize } from "@/lib/share/card-renderer";

interface ShareDrawerProps {
  word: Word;
  open: boolean;
  onClose: () => void;
}

type CardType = "moment"; // MVP: only moment card, future: "path" | "sound"
type GenerationState = "idle" | "generating" | "ready" | "error";

export default function ShareDrawer({ word, open, onClose }: ShareDrawerProps) {
  const [cardType] = useState<CardType>("moment");
  const [cardSize, setCardSize] = useState<CardSize>("story");
  const [state, setState] = useState<GenerationState>("idle");
  const [cardBlob, setCardBlob] = useState<Blob | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Generate card when drawer opens or settings change
  const generateCard = useCallback(async () => {
    setState("generating");
    setError(null);

    try {
      const blob = await renderMomentCard(word, cardSize);
      setCardBlob(blob);
      setPreviewUrl(URL.createObjectURL(blob));
      setState("ready");
    } catch (err) {
      console.error("Card generation failed:", err);
      setError("Failed to generate card");
      setState("error");
    }
  }, [word, cardSize]);

  useEffect(() => {
    if (open) {
      generateCard();
    } else {
      // Cleanup on close
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
      }
      setCardBlob(null);
      setState("idle");
    }
  }, [open, generateCard]);

  // Regenerate when size changes
  useEffect(() => {
    if (open && state === "ready") {
      generateCard();
    }
  }, [cardSize]);

  const handleShare = async () => {
    if (!cardBlob) return;
    await shareCard(cardBlob, word, true);
  };

  const handleDownload = () => {
    if (!cardBlob) return;
    downloadBlob(cardBlob, `${word.slug}-journey-${cardSize}.png`);
  };

  const handleCopyLink = async () => {
    const url = `https://thejourney.app/word/${word.slug}`;
    await navigator.clipboard.writeText(url);
    // Could add a toast notification here
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] overflow-hidden rounded-t-3xl"
            style={{ background: "var(--theme-bg-secondary)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "var(--theme-border)" }}>
              <h2 className="font-display text-lg" style={{ color: "var(--theme-text-primary)" }}>
                Share {word.word}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full transition-colors"
                style={{ color: "var(--theme-text-tertiary)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 80px)" }}>
              {/* Size Toggle */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setCardSize("story")}
                  className="flex-1 py-2 px-4 rounded-lg text-sm font-body transition-colors"
                  style={{
                    background: cardSize === "story" ? "var(--theme-accent-muted)" : "var(--theme-bg-primary)",
                    color: cardSize === "story" ? "var(--theme-accent)" : "var(--theme-text-secondary)",
                    border: cardSize === "story" ? "1px solid var(--theme-accent)" : "1px solid var(--theme-border)",
                  }}
                >
                  Story (9:16)
                </button>
                <button
                  onClick={() => setCardSize("square")}
                  className="flex-1 py-2 px-4 rounded-lg text-sm font-body transition-colors"
                  style={{
                    background: cardSize === "square" ? "var(--theme-accent-muted)" : "var(--theme-bg-primary)",
                    color: cardSize === "square" ? "var(--theme-accent)" : "var(--theme-text-secondary)",
                    border: cardSize === "square" ? "1px solid var(--theme-accent)" : "1px solid var(--theme-border)",
                  }}
                >
                  Square (1:1)
                </button>
              </div>

              {/* Card Preview */}
              <div
                className="relative mx-auto mb-6 rounded-xl overflow-hidden flex items-center justify-center"
                style={{
                  background: "var(--theme-bg-primary)",
                  aspectRatio: cardSize === "story" ? "9/16" : "1/1",
                  maxHeight: cardSize === "story" ? "400px" : "300px",
                  width: cardSize === "story" ? "225px" : "300px",
                }}
              >
                {state === "generating" && (
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className="w-8 h-8 border-2 rounded-full animate-spin"
                      style={{ borderColor: "var(--theme-border)", borderTopColor: "var(--theme-accent)" }}
                    />
                    <span className="text-sm font-body" style={{ color: "var(--theme-text-tertiary)" }}>
                      Generating...
                    </span>
                  </div>
                )}

                {state === "ready" && previewUrl && (
                  <img
                    src={previewUrl}
                    alt={`Share card for ${word.romanization}`}
                    className="w-full h-full object-contain"
                  />
                )}

                {state === "error" && (
                  <div className="flex flex-col items-center gap-3 p-4 text-center">
                    <span className="text-red-400 text-sm font-body">{error}</span>
                    <button
                      onClick={generateCard}
                      className="text-sm font-body px-4 py-2 rounded-lg"
                      style={{ background: "var(--theme-accent-muted)", color: "var(--theme-accent)" }}
                    >
                      Retry
                    </button>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-3">
                {/* Primary: Share/Save */}
                <button
                  onClick={handleShare}
                  disabled={state !== "ready"}
                  className="w-full py-3 rounded-xl font-body text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-40"
                  style={{
                    background: "var(--theme-accent)",
                    color: "#0a0a14",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                  Share Image
                </button>

                {/* Secondary: Download */}
                <button
                  onClick={handleDownload}
                  disabled={state !== "ready"}
                  className="w-full py-3 rounded-xl font-body text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-40"
                  style={{
                    background: "var(--theme-bg-primary)",
                    color: "var(--theme-text-secondary)",
                    border: "1px solid var(--theme-border)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Save to Photos
                </button>

                {/* Tertiary: Copy Link */}
                <button
                  onClick={handleCopyLink}
                  className="w-full py-3 rounded-xl font-body text-sm flex items-center justify-center gap-2 transition-colors"
                  style={{
                    background: "transparent",
                    color: "var(--theme-text-tertiary)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  Copy Link
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
