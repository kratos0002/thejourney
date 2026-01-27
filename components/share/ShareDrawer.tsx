"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Word } from "@/data/word-types";
import { renderCard, shareCard, downloadBlob, type CardSize, type CardType } from "@/lib/share/card-renderer";

interface ShareDrawerProps {
  word: Word;
  open: boolean;
  onClose: () => void;
}

type GenerationState = "idle" | "generating" | "ready" | "error";

const CARD_TYPES: { type: CardType; label: string; icon: string; description: string }[] = [
  { type: "moment", label: "Quote", icon: "quote", description: "The hook that captures the essence" },
  { type: "path", label: "Journey", icon: "map", description: "The word's path through time and place" },
];

export default function ShareDrawer({ word, open, onClose }: ShareDrawerProps) {
  const [cardType, setCardType] = useState<CardType>("moment");
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
      const blob = await renderCard(word, cardType, cardSize);
      setCardBlob(blob);

      // Cleanup previous preview URL
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      setPreviewUrl(URL.createObjectURL(blob));
      setState("ready");
    } catch (err) {
      console.error("Card generation failed:", err);
      setError("Failed to generate card");
      setState("error");
    }
  }, [word, cardType, cardSize]);

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
  }, [open]);

  // Regenerate when type or size changes
  useEffect(() => {
    if (open) {
      generateCard();
    }
  }, [cardType, cardSize]);

  const handleShare = async () => {
    if (!cardBlob) return;
    await shareCard(cardBlob, word, true);
  };

  const handleDownload = () => {
    if (!cardBlob) return;
    downloadBlob(cardBlob, `${word.slug}-${cardType}-${cardSize}.png`);
  };

  const handleCopyLink = async () => {
    const url = `https://thejourney.app/word/${word.slug}`;
    await navigator.clipboard.writeText(url);
  };

  const getCardIcon = (iconType: string) => {
    switch (iconType) {
      case "quote":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3z" />
          </svg>
        );
      case "map":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" />
            <path d="M9 3v15" />
            <path d="M15 6v15" />
          </svg>
        );
      default:
        return null;
    }
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
              {/* Card Type Tabs */}
              <div className="flex gap-2 mb-4">
                {CARD_TYPES.map(({ type, label, icon }) => (
                  <button
                    key={type}
                    onClick={() => setCardType(type)}
                    className="flex-1 py-3 px-3 rounded-xl text-sm font-body transition-all flex flex-col items-center gap-1.5"
                    style={{
                      background: cardType === type ? "var(--theme-accent-muted)" : "var(--theme-bg-primary)",
                      color: cardType === type ? "var(--theme-accent)" : "var(--theme-text-secondary)",
                      border: cardType === type ? "1px solid var(--theme-accent)" : "1px solid var(--theme-border)",
                    }}
                  >
                    <span style={{ opacity: cardType === type ? 1 : 0.6 }}>
                      {getCardIcon(icon)}
                    </span>
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {/* Card type description */}
              <p className="text-xs font-body text-center mb-4" style={{ color: "var(--theme-text-tertiary)" }}>
                {CARD_TYPES.find(c => c.type === cardType)?.description}
              </p>

              {/* Size Toggle */}
              <div className="flex gap-2 mb-5">
                <button
                  onClick={() => setCardSize("story")}
                  className="flex-1 py-2 px-4 rounded-lg text-xs font-body transition-colors"
                  style={{
                    background: cardSize === "story" ? "var(--theme-bg-tertiary)" : "transparent",
                    color: cardSize === "story" ? "var(--theme-text-primary)" : "var(--theme-text-tertiary)",
                    border: `1px solid ${cardSize === "story" ? "var(--theme-border-strong)" : "var(--theme-border)"}`,
                  }}
                >
                  Story 9:16
                </button>
                <button
                  onClick={() => setCardSize("square")}
                  className="flex-1 py-2 px-4 rounded-lg text-xs font-body transition-colors"
                  style={{
                    background: cardSize === "square" ? "var(--theme-bg-tertiary)" : "transparent",
                    color: cardSize === "square" ? "var(--theme-text-primary)" : "var(--theme-text-tertiary)",
                    border: `1px solid ${cardSize === "square" ? "var(--theme-border-strong)" : "var(--theme-border)"}`,
                  }}
                >
                  Square 1:1
                </button>
              </div>

              {/* Card Preview */}
              <div
                className="relative mx-auto mb-6 rounded-xl overflow-hidden flex items-center justify-center"
                style={{
                  background: "var(--theme-bg-primary)",
                  aspectRatio: cardSize === "story" ? "9/16" : "1/1",
                  maxHeight: cardSize === "story" ? "380px" : "280px",
                  width: cardSize === "story" ? "214px" : "280px",
                }}
              >
                {state === "generating" && (
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className="w-8 h-8 border-2 rounded-full animate-spin"
                      style={{ borderColor: "var(--theme-border)", borderTopColor: "var(--theme-accent)" }}
                    />
                    <span className="text-xs font-body" style={{ color: "var(--theme-text-tertiary)" }}>
                      Creating card...
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
                    <span className="text-red-400 text-xs font-body">{error}</span>
                    <button
                      onClick={generateCard}
                      className="text-xs font-body px-4 py-2 rounded-lg"
                      style={{ background: "var(--theme-accent-muted)", color: "var(--theme-accent)" }}
                    >
                      Retry
                    </button>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-3">
                {/* Primary: Share */}
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
                  Share
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
