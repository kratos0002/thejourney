"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { exportJourneyAnimation, type ExportFormat } from "@/lib/journey-export";
import type { Word } from "@/data/word-types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  word: Word;
}

export default function JourneyDownloadModal({ isOpen, onClose, word }: Props) {
  const [format, setFormat] = useState<ExportFormat>("video");
  const [status, setStatus] = useState<"idle" | "rendering" | "done" | "error">("idle");
  const [progress, setProgress] = useState(0);
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleExport = useCallback(async () => {
    setStatus("rendering");
    setProgress(0);
    setErrorMsg("");
    try {
      const blob = await exportJourneyAnimation({
        format,
        word: word.word,
        romanization: word.romanization,
        language: word.language,
        hook: word.hook,
        journey: word.journey,
        onProgress: setProgress,
      });
      setResultBlob(blob);
      setStatus("done");
    } catch (err) {
      console.warn("[Journey] Export failed:", err);
      setErrorMsg(err instanceof Error ? err.message : "Export failed");
      setStatus("error");
    }
  }, [format, word]);

  const handleDownload = useCallback(() => {
    if (!resultBlob) return;
    const ext = format === "video" ? "webm" : "gif";
    const url = URL.createObjectURL(resultBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${word.slug}-journey.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [resultBlob, format, word.slug]);

  const handleClose = useCallback(() => {
    if (status === "rendering") return;
    setStatus("idle");
    setProgress(0);
    setResultBlob(null);
    onClose();
  }, [status, onClose]);

  const fileSizeEstimate = resultBlob
    ? `${(resultBlob.size / (1024 * 1024)).toFixed(1)} MB`
    : format === "video" ? "~3-5 MB" : "~10-20 MB";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-abyss/90 backdrop-blur-md" onClick={handleClose} />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-sm mx-4 bg-ink border border-moonlight/12 rounded-2xl p-6 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display text-lg text-moonlight/90 mb-1">Download Journey</h3>
            <p className="text-xs text-fog/50 font-body mb-5">
              Export the etymology map animation
            </p>

            {/* Format selection */}
            {status === "idle" && (
              <>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <button
                    onClick={() => setFormat("video")}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      format === "video"
                        ? "border-amber-glow/40 bg-amber-glow/5"
                        : "border-moonlight/10 hover:border-moonlight/20"
                    }`}
                  >
                    <p className={`text-sm font-body font-medium ${format === "video" ? "text-amber-glow" : "text-moonlight/70"}`}>
                      Video
                    </p>
                    <p className="text-[10px] text-fog/40 font-body mt-0.5">
                      WebM, smooth 30fps
                    </p>
                  </button>
                  <button
                    onClick={() => setFormat("gif")}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      format === "gif"
                        ? "border-amber-glow/40 bg-amber-glow/5"
                        : "border-moonlight/10 hover:border-moonlight/20"
                    }`}
                  >
                    <p className={`text-sm font-body font-medium ${format === "gif" ? "text-amber-glow" : "text-moonlight/70"}`}>
                      GIF
                    </p>
                    <p className="text-[10px] text-fog/40 font-body mt-0.5">
                      Universal, shareable
                    </p>
                  </button>
                </div>

                <p className="text-[10px] text-fog/30 font-body mb-4">
                  Estimated size: {fileSizeEstimate}
                </p>

                <button
                  onClick={handleExport}
                  className="w-full py-2.5 bg-amber-glow/10 border border-amber-glow/30 rounded-lg text-amber-glow text-sm font-body tracking-wider hover:bg-amber-glow/20 transition-all cursor-pointer"
                >
                  Generate
                </button>
              </>
            )}

            {/* Rendering progress */}
            {status === "rendering" && (
              <div className="py-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-moonlight/60 font-body">Rendering...</p>
                  <p className="text-xs text-amber-glow/70 font-body">{Math.round(progress)}%</p>
                </div>
                <div className="h-1.5 bg-abyss rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-amber-glow/60 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-[10px] text-fog/30 font-body mt-3 text-center">
                  Please keep this tab open
                </p>
              </div>
            )}

            {/* Done */}
            {status === "done" && (
              <div className="py-4 text-center">
                <p className="text-sm text-moonlight/80 font-body mb-1">Ready to download</p>
                <p className="text-[10px] text-fog/40 font-body mb-4">{fileSizeEstimate}</p>
                <button
                  onClick={handleDownload}
                  className="w-full py-2.5 bg-amber-glow/15 border border-amber-glow/40 rounded-lg text-amber-glow text-sm font-body tracking-wider hover:bg-amber-glow/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download .{format === "video" ? "webm" : "gif"}
                </button>
                <button
                  onClick={() => { setStatus("idle"); setResultBlob(null); }}
                  className="mt-3 text-[11px] text-fog/40 hover:text-fog/60 font-body transition-colors cursor-pointer"
                >
                  Try different format
                </button>
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <div className="py-4 text-center">
                <p className="text-sm text-red-400/80 font-body mb-2">Something went wrong</p>
                <p className="text-[10px] text-fog/40 font-body mb-4">{errorMsg}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs text-moonlight/60 hover:text-moonlight font-body transition-colors cursor-pointer"
                >
                  Try again
                </button>
              </div>
            )}

            {/* Close button */}
            {status !== "rendering" && (
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-fog/30 hover:text-fog/60 transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
