"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { LanguageHistory } from "@/data/language-types";
import { useTransition } from "@/components/TransitionProvider";

const LanguageHistoryMap = dynamic(
  () => import("@/components/language/LanguageHistoryMap"),
  {
    ssr: false,
    loading: () => (
      <section className="min-h-screen flex items-center justify-center">
        <div
          className="w-8 h-8 rounded-full border-2 animate-spin"
          style={{
            borderColor: "var(--theme-accent)",
            borderTopColor: "var(--theme-accent)",
            opacity: 0.5,
          }}
        />
      </section>
    ),
  }
);

interface LanguagePageClientProps {
  language: LanguageHistory;
  familySlug?: string;
}

export default function LanguagePageClient({ language, familySlug }: LanguagePageClientProps) {
  const { navigateHome } = useTransition();

  return (
    <main
      className="relative transition-colors duration-300"
      style={{ background: "var(--theme-bg-primary)" }}
    >

      {/* Breadcrumb Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6"
        style={{
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 1rem)",
          paddingBottom: "1rem",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={navigateHome}
            className="flex items-center gap-1 transition-opacity duration-300 hover:opacity-70 cursor-pointer"
            style={{ color: "var(--theme-text-tertiary)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="text-xs font-body tracking-wider">Home</span>
          </button>
          <span className="text-xs font-body" style={{ color: "var(--theme-text-tertiary)", opacity: 0.4 }}>/</span>
          <Link href="/languages" className="text-xs font-body tracking-wider transition-opacity hover:opacity-70" style={{ color: "var(--theme-text-tertiary)" }}>
            Languages
          </Link>
          <span className="text-xs font-body" style={{ color: "var(--theme-text-tertiary)", opacity: 0.4 }}>/</span>
          <span className="text-xs font-body tracking-wider" style={{ color: "var(--theme-accent)", opacity: 0.8 }}>
            {language.language}
          </span>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <span
            className="text-xs font-body tracking-wider"
            style={{ color: "var(--theme-text-tertiary)" }}
          >
            Language History
          </span>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Script */}
          <motion.p
            className="font-display text-5xl sm:text-7xl mb-4"
            style={{ color: "var(--theme-text-primary)" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {language.script}
          </motion.p>

          {/* Language name */}
          <motion.h1
            className="font-display text-2xl sm:text-3xl mb-2"
            style={{ color: "var(--theme-accent)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {language.language}
          </motion.h1>

          {/* Romanization & family */}
          <motion.p
            className="text-sm font-body mb-6"
            style={{ color: "var(--theme-text-tertiary)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {language.romanization} · {language.languageFamily} ·{" "}
            {familySlug ? (
              <Link
                href={`/family/${familySlug}`}
                className="transition-opacity duration-300 hover:opacity-70"
                style={{ color: "var(--theme-accent)", opacity: 0.8 }}
              >
                {language.parentFamily}
              </Link>
            ) : (
              language.parentFamily
            )}
          </motion.p>

          {/* Hook */}
          <motion.p
            className="font-body text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--theme-text-secondary)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {language.hook}
          </motion.p>

          {/* Stats */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center">
              <p
                className="text-2xl font-display"
                style={{ color: "var(--theme-accent)" }}
              >
                {language.originPeriod}
              </p>
              <p
                className="text-xs font-body uppercase tracking-wider"
                style={{ color: "var(--theme-text-tertiary)" }}
              >
                Origin
              </p>
            </div>
            <div className="text-center">
              <p
                className="text-2xl font-display"
                style={{ color: "var(--theme-accent)" }}
              >
                {language.phases.length}
              </p>
              <p
                className="text-xs font-body uppercase tracking-wider"
                style={{ color: "var(--theme-text-tertiary)" }}
              >
                Major Eras
              </p>
            </div>
            <div className="text-center">
              <p
                className="text-lg font-display"
                style={{ color: "var(--theme-accent)" }}
              >
                {language.currentSpeakers.split(";")[0]}
              </p>
              <p
                className="text-xs font-body uppercase tracking-wider"
                style={{ color: "var(--theme-text-tertiary)" }}
              >
                Today
              </p>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="mx-auto animate-bounce"
              style={{ color: "var(--theme-text-tertiary)" }}
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            className="text-center text-sm uppercase tracking-[0.2em] font-body mb-12"
            style={{ color: "var(--theme-text-tertiary)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
          >
            The Story
          </motion.h2>
          <div className="space-y-6">
            {language.story.map((paragraph, i) => (
              <motion.p
                key={i}
                className="font-body text-base sm:text-lg leading-relaxed"
                style={{ color: "var(--theme-text-secondary)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <LanguageHistoryMap language={language} />

      {/* Related Words Section */}
      {language.relatedWords && language.relatedWords.length > 0 && (
        <section className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-sm uppercase tracking-[0.2em] font-body mb-8"
              style={{ color: "var(--theme-text-tertiary)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
            >
              Words from {language.language}
            </motion.h2>
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {language.relatedWords.map((slug) => (
                <Link
                  key={slug}
                  href={`/word/${slug}`}
                  className="px-4 py-2 rounded-lg font-body text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "var(--theme-surface)",
                    color: "var(--theme-text-secondary)",
                    border: "1px solid var(--theme-border)",
                  }}
                >
                  {slug}
                </Link>
              ))}
            </motion.div>
            <motion.p
              className="mt-6 text-xs font-body"
              style={{ color: "var(--theme-text-tertiary)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Explore how {language.language} words traveled into English
            </motion.p>
          </div>
        </section>
      )}

      {/* Discovery Footer */}
      <section className="py-16 px-6">
        <motion.div
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-3">
            {familySlug && (
              <Link
                href={`/family/${familySlug}`}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--theme-surface)",
                  color: "var(--theme-text-secondary)",
                  border: "1px solid var(--theme-border)",
                }}
              >
                Part of the{" "}
                <span style={{ color: "var(--theme-accent)" }}>
                  {language.parentFamily}
                </span>{" "}
                family
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            )}
            <Link
              href="/languages"
              className="text-xs font-body tracking-wide transition-opacity duration-300 hover:opacity-70"
              style={{ color: "var(--theme-accent)", opacity: 0.5 }}
            >
              Explore all language histories &rarr;
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <p
          className="text-xs font-body"
          style={{ color: "var(--theme-text-tertiary)", opacity: 0.5 }}
        >
          Language histories are simplified for clarity. Linguistic evolution is complex and often contested.
        </p>
      </footer>
    </main>
  );
}
