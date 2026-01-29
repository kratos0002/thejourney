"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Word } from "@/data/word-types";
import { renderCard, shareCard, downloadBlob, type CardType } from "@/lib/share/card-renderer";

interface ShareDrawerProps {
  word: Word;
  open: boolean;
  onClose: () => void;
}

type GenerationState = "idle" | "generating" | "ready" | "error";

const CARD_TYPES: { type: CardType; label: string }[] = [
  { type: "moment", label: "Moment" },
];

export default function ShareDrawer({ word, open, onClose }: ShareDrawerProps) {
  const [cardType, setCardType] = useState<CardType>("moment");
  const [state, setState] = useState<GenerationState>("idle");
  const [cardBlob, setCardBlob] = useState<Blob | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const generateCard = useCallback(async () => {
    setState("generating");
    setError(null);

    try {
      const blob = await renderCard(word, cardType, "story");
      setCardBlob(blob);

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
  }, [word, cardType]);

  useEffect(() => {
    if (open) {
      generateCard();
    } else {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
      }
      setCardBlob(null);
      setState("idle");
      setCopied(false);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      generateCard();
    }
  }, [cardType]);

  const handleShare = async () => {
    if (!cardBlob) return;
    await shareCard(cardBlob, word, true);
  };

  const handleDownload = () => {
    if (!cardBlob) return;
    downloadBlob(cardBlob, `${word.slug}-${cardType}.png`);
  };

  const handleCopyLink = async () => {
    const url = `https://etymology.life/word/${word.slug}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(10, 10, 20, 0.85)", backdropFilter: "blur(8px)" }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-x-4 top-[10%] bottom-[10%] md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[400px] md:max-h-[85vh] z-50 overflow-hidden rounded-2xl flex flex-col"
            style={{
              background: "linear-gradient(180deg, var(--theme-bg-secondary) 0%, var(--theme-bg-primary) 100%)",
              border: "1px solid var(--theme-border)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300 hover:scale-110"
              style={{ color: "var(--theme-text-tertiary)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Header */}
              <div className="text-center mb-6">
                <p className="text-[10px] uppercase tracking-[0.25em] font-body mb-2" style={{ color: "var(--theme-text-tertiary)" }}>
                  Share
                </p>
                <h2 className="font-display text-2xl" style={{ color: "var(--theme-text-primary)" }}>
                  {word.word}
                </h2>
                <p className="text-sm font-body mt-1" style={{ color: "var(--theme-accent)", opacity: 0.8 }}>
                  {word.romanization}
                </p>
              </div>

              {/* Card Preview */}
              <div className="relative mx-auto mb-6" style={{ width: "200px" }}>
                <div
                  className="relative rounded-xl overflow-hidden flex items-center justify-center"
                  style={{
                    aspectRatio: "9/16",
                    background: "var(--theme-bg-primary)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.03)",
                  }}
                >
                  {state === "generating" && (
                    <motion.div
                      className="flex flex-col items-center gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div
                        className="w-6 h-6 rounded-full animate-spin"
                        style={{ border: "1.5px solid var(--theme-border)", borderTopColor: "var(--theme-accent)" }}
                      />
                      <span className="text-[10px] font-body tracking-wider" style={{ color: "var(--theme-text-tertiary)" }}>
                        Creating...
                      </span>
                    </motion.div>
                  )}

                  {state === "ready" && previewUrl && (
                    <motion.img
                      src={previewUrl}
                      alt={`Share card for ${word.romanization}`}
                      className="w-full h-full object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {state === "error" && (
                    <div className="flex flex-col items-center gap-2 p-4 text-center">
                      <span className="text-[10px] font-body" style={{ color: "var(--theme-text-tertiary)" }}>{error}</span>
                      <button
                        onClick={generateCard}
                        className="text-[10px] font-body px-3 py-1.5 rounded-full transition-colors"
                        style={{ color: "var(--theme-accent)", border: "1px solid var(--theme-accent)" }}
                      >
                        Retry
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <button
                  onClick={handleShare}
                  disabled={state !== "ready"}
                  className="w-full py-3 rounded-full font-body text-sm tracking-wide transition-all duration-300 disabled:opacity-30"
                  style={{
                    background: "var(--theme-accent)",
                    color: "var(--theme-bg-primary)",
                  }}
                >
                  Share
                </button>

                <button
                  onClick={handleDownload}
                  disabled={state !== "ready"}
                  className="w-full py-3 rounded-full font-body text-sm tracking-wide transition-all duration-300 disabled:opacity-30"
                  style={{
                    color: "var(--theme-text-secondary)",
                    border: "1px solid var(--theme-border)",
                  }}
                >
                  Save Image
                </button>

                <button
                  onClick={handleCopyLink}
                  className="w-full py-3 rounded-full font-body text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  {copied ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Copied
                    </>
                  ) : (
                    "Copy Link"
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
