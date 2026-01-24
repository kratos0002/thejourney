"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useExploration } from "@/components/ExplorationProvider";
import { submitFeedback } from "@/lib/feedback";
import { trackEvent } from "@/lib/analytics";
import type { Word } from "@/data/word-types";

type FeedbackType = "word_suggestion" | "word_improvement" | "general";

const TABS: { type: FeedbackType; label: string; placeholder: string }[] = [
  {
    type: "word_suggestion",
    label: "Suggest Word",
    placeholder: "What word would you like to see? Tell us about it — the language, why it interests you, any context you know about its origins...",
  },
  {
    type: "word_improvement",
    label: "Report Issue",
    placeholder: "What's the issue? Is something inaccurate, missing, or could be better? Be as specific as possible...",
  },
  {
    type: "general",
    label: "General",
    placeholder: "Share your thoughts — feature ideas, things you love, things that could improve...",
  },
];

interface FeedbackModalProps {
  open: boolean;
  onClose: () => void;
  words: Word[];
  initialType?: FeedbackType;
  initialWordSlug?: string;
}

export default function FeedbackModal({ open, onClose, words, initialType, initialWordSlug }: FeedbackModalProps) {
  const { user, exploredCount } = useExploration();
  const [activeType, setActiveType] = useState<FeedbackType>(initialType || "word_suggestion");
  const [text, setText] = useState("");
  const [wordSlug, setWordSlug] = useState(initialWordSlug || "");
  const [wordSearch, setWordSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const filteredWords = wordSearch
    ? words.filter(w =>
        w.romanization.toLowerCase().includes(wordSearch.toLowerCase()) ||
        w.slug.includes(wordSearch.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSubmit = async () => {
    if (text.length < 10) {
      setError("Please write at least 10 characters");
      return;
    }
    if (!user) {
      setError("You must be signed in to submit feedback");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await submitFeedback({
        feedbackType: activeType,
        feedbackText: text,
        wordSlug: activeType === "word_improvement" ? wordSlug || undefined : undefined,
        userContext: {
          exploredCount,
          currentPage: window.location.pathname,
          userAgent: navigator.userAgent,
        },
      });

      if (result.error) {
        setError(result.error);
        setLoading(false);
        return;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
      return;
    }

    setLoading(false);
    setSuccess(true);
    trackEvent("feedback_submitted", { type: activeType, wordSlug: wordSlug || undefined });
    setTimeout(() => {
      onClose();
      setTimeout(() => {
        setSuccess(false);
        setText("");
        setWordSlug("");
        setWordSearch("");
      }, 300);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-abyss/95 backdrop-blur-md" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-md mx-4"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="bg-ink border border-moonlight/12 rounded-2xl p-6 shadow-2xl shadow-black/40">
              {success ? (
                <div className="text-center py-8">
                  <p className="text-amber-glow/80 text-xs font-body tracking-[0.2em] uppercase mb-3">
                    Thank you
                  </p>
                  <h2 className="font-display text-2xl text-moonlight/90 font-light">
                    Feedback received
                  </h2>
                  <p className="text-fog/40 text-sm font-body mt-3">
                    We&apos;ll review it and get back to you.
                  </p>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="font-display text-lg text-moonlight/90 font-light">
                      Send Feedback
                    </h2>
                    <button
                      onClick={onClose}
                      className="text-fog/30 hover:text-fog/60 transition-colors cursor-pointer"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Auth gate */}
                  {!user && (
                    <div className="text-center py-6">
                      <p className="text-fog/50 text-sm font-body">
                        Sign in from your profile to send feedback.
                      </p>
                    </div>
                  )}

                  {user && (
                    <>
                      {/* Tabs */}
                      <div className="flex gap-1 mb-4">
                        {TABS.map(tab => (
                          <button
                            key={tab.type}
                            onClick={() => setActiveType(tab.type)}
                            className={`flex-1 py-2 text-[11px] font-body rounded-lg transition-all cursor-pointer ${
                              activeType === tab.type
                                ? "bg-amber-glow/10 text-amber-glow border border-amber-glow/30"
                                : "text-fog/40 hover:text-fog/60 border border-transparent"
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>

                      {/* Word selector for "Report Issue" */}
                      {activeType === "word_improvement" && (
                        <div className="mb-3 relative">
                          <input
                            value={wordSlug ? words.find(w => w.slug === wordSlug)?.romanization || wordSlug : wordSearch}
                            onChange={e => {
                              setWordSearch(e.target.value);
                              setWordSlug("");
                            }}
                            placeholder="Which word? (optional)"
                            className="w-full bg-abyss border border-fog/12 rounded-lg px-3 py-2 text-moonlight/80 font-body text-xs placeholder:text-fog/45 focus:outline-none focus:border-amber-glow/30 transition-colors"
                          />
                          {wordSearch && filteredWords.length > 0 && !wordSlug && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-deep-water border border-fog/15 rounded-lg overflow-hidden z-10">
                              {filteredWords.map(w => (
                                <button
                                  key={w.slug}
                                  onClick={() => { setWordSlug(w.slug); setWordSearch(""); }}
                                  className="w-full text-left px-3 py-2 text-xs text-moonlight/70 hover:bg-fog/5 transition-colors cursor-pointer"
                                >
                                  <span className="font-medium">{w.romanization}</span>
                                  <span className="text-fog/30 ml-2">({w.language})</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Textarea */}
                      <textarea
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder={TABS.find(t => t.type === activeType)?.placeholder}
                        rows={5}
                        maxLength={2000}
                        className="w-full bg-abyss border border-fog/12 rounded-lg px-3 py-2.5 text-moonlight/80 font-body text-sm placeholder:text-fog/45 focus:outline-none focus:border-amber-glow/30 transition-colors resize-none leading-relaxed"
                      />

                      {/* Character count */}
                      <div className="flex items-center justify-between mt-2 mb-4">
                        <span className={`text-[10px] font-body ${text.length < 10 ? "text-fog/45" : "text-fog/55"}`}>
                          {text.length < 10 ? `${10 - text.length} more characters needed` : `${text.length}/2000`}
                        </span>
                      </div>

                      {/* Error */}
                      {error && (
                        <p className="text-red-400/80 text-xs font-body mb-3">{error}</p>
                      )}

                      {/* Submit */}
                      <button
                        onClick={handleSubmit}
                        disabled={loading || text.length < 10}
                        className="w-full bg-amber-glow/10 border border-amber-glow/30 rounded-lg px-4 py-2.5 text-amber-glow font-body text-sm tracking-wider hover:bg-amber-glow/20 hover:border-amber-glow/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                      >
                        {loading ? "Sending..." : "Submit"}
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
