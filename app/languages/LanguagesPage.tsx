"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { easeSmooth, fadeIn } from "@/lib/animations";
import { useTransition } from "@/components/TransitionProvider";
import type { LanguageHistory } from "@/data/language-types";

interface LanguagesPageProps {
  languages: LanguageHistory[];
  totalPhases: number;
  totalRelatedWords: number;
}

export default function LanguagesPage({
  languages,
  totalPhases,
  totalRelatedWords,
}: LanguagesPageProps) {
  const { navigateHome } = useTransition();

  return (
    <main
      className="grain min-h-screen pb-16 transition-colors duration-300 relative"
      style={{ background: "var(--theme-bg-primary)" }}
    >
      {/* Ambient vignette */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(10, 10, 20, 0.4) 100%)",
        }}
      />

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeSmooth, delay: 0.2 }}
        className="fixed top-0 left-0 z-30 p-5"
      >
        <button
          onClick={navigateHome}
          className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-70 cursor-pointer"
          style={{ color: "var(--theme-text-tertiary)" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="text-xs font-body tracking-wider">Back</span>
        </button>
      </motion.div>

      {/* Content */}
      <div className="relative pt-24">
        <motion.div variants={fadeIn} initial="hidden" animate="visible">
          {/* Header */}
          <header className="text-center px-6 mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xs font-body uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--theme-text-tertiary)" }}
            >
              Language Histories
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl mb-6"
              style={{ color: "var(--theme-text-primary)" }}
            >
              How Languages Conquered the World
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--theme-text-secondary)" }}
            >
              Watch entire languages spread across continents and centuries.
              From sacred Sanskrit to imperial Persian—the same map-driven
              storytelling, at a civilizational scale.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center gap-8 mt-8"
            >
              <div className="text-center">
                <p
                  className="text-2xl font-display"
                  style={{ color: "var(--theme-accent)" }}
                >
                  {languages.length}
                </p>
                <p
                  className="text-xs font-body uppercase tracking-wider"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  Languages
                </p>
              </div>
              <div className="text-center">
                <p
                  className="text-2xl font-display"
                  style={{ color: "var(--theme-accent)" }}
                >
                  {totalPhases}
                </p>
                <p
                  className="text-xs font-body uppercase tracking-wider"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  Historical Eras
                </p>
              </div>
              <div className="text-center">
                <p
                  className="text-2xl font-display"
                  style={{ color: "var(--theme-accent)" }}
                >
                  {totalRelatedWords}
                </p>
                <p
                  className="text-xs font-body uppercase tracking-wider"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  Related Words
                </p>
              </div>
            </motion.div>
          </header>

          {/* Language Cards */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid gap-6 sm:gap-8">
              {languages.map((language, index) => (
                <motion.div
                  key={language.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <Link href={`/language/${language.slug}`}>
                    <article
                      className="group relative p-6 sm:p-8 rounded-2xl transition-all duration-500 hover:scale-[1.02]"
                      style={{
                        background: "var(--theme-surface)",
                        border: "1px solid var(--theme-border)",
                      }}
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "radial-gradient(ellipse at center, var(--theme-accent-dim) 0%, transparent 70%)",
                        }}
                      />

                      <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                        {/* Script */}
                        <div className="flex-shrink-0 text-center sm:text-left">
                          <p
                            className="font-display text-4xl sm:text-5xl group-hover:scale-105 transition-transform duration-500"
                            style={{ color: "var(--theme-text-primary)" }}
                          >
                            {language.script}
                          </p>
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h2
                              className="font-display text-xl sm:text-2xl"
                              style={{ color: "var(--theme-accent)" }}
                            >
                              {language.language}
                            </h2>
                            <span
                              className="text-xs font-body px-2 py-0.5 rounded-full"
                              style={{
                                background: "var(--theme-surface-hover)",
                                color: "var(--theme-text-tertiary)",
                              }}
                            >
                              {language.languageFamily}
                            </span>
                          </div>

                          <p
                            className="font-body text-sm sm:text-base leading-relaxed line-clamp-2"
                            style={{ color: "var(--theme-text-secondary)" }}
                          >
                            {language.hook}
                          </p>

                          {/* Meta */}
                          <div className="flex flex-wrap gap-4 mt-4">
                            <span
                              className="text-xs font-body flex items-center gap-1.5"
                              style={{ color: "var(--theme-text-tertiary)" }}
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12,6 12,12 16,14" />
                              </svg>
                              {language.phases.length} eras
                            </span>
                            <span
                              className="text-xs font-body flex items-center gap-1.5"
                              style={{ color: "var(--theme-text-tertiary)" }}
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                              {language.originRegion}
                            </span>
                            <span
                              className="text-xs font-body flex items-center gap-1.5"
                              style={{ color: "var(--theme-text-tertiary)" }}
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                              </svg>
                              {language.currentSpeakers.split(";")[0]}
                            </span>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div
                          className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group-hover:translate-x-1"
                          style={{
                            background: "var(--theme-surface-hover)",
                            color: "var(--theme-text-tertiary)",
                          }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Coming Soon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 text-center"
            >
              <p
                className="text-sm font-body"
                style={{ color: "var(--theme-text-tertiary)", opacity: 0.6 }}
              >
                More languages coming soon: Arabic, Greek, Latin, Chinese...
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
