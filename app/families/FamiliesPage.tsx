"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { easeSmooth, fadeIn } from "@/lib/animations";
import { useTransition } from "@/components/TransitionProvider";
import type { LanguageFamilyTree } from "@/data/language-types";

interface FamiliesPageProps {
  families: LanguageFamilyTree[];
  totalBranches: number;
  totalLanguages: number;
}

export default function FamiliesPage({
  families,
  totalBranches,
  totalLanguages,
}: FamiliesPageProps) {
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
              Language Families
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl mb-6"
              style={{ color: "var(--theme-text-primary)" }}
            >
              The Great Language Trees
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--theme-text-secondary)" }}
            >
              Every language belongs to a family — a tree of tongues that share
              a common ancestor. Explore the branches that connect Sanskrit to
              English, Arabic to Hebrew, and discover the genealogy of human
              speech.
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
                  {families.length}
                </p>
                <p
                  className="text-xs font-body uppercase tracking-wider"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  Families
                </p>
              </div>
              <div className="text-center">
                <p
                  className="text-2xl font-display"
                  style={{ color: "var(--theme-accent)" }}
                >
                  {totalBranches}
                </p>
                <p
                  className="text-xs font-body uppercase tracking-wider"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  Branches
                </p>
              </div>
              <div className="text-center">
                <p
                  className="text-2xl font-display"
                  style={{ color: "var(--theme-accent)" }}
                >
                  {totalLanguages}
                </p>
                <p
                  className="text-xs font-body uppercase tracking-wider"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  Languages
                </p>
              </div>
            </motion.div>
          </header>

          {/* Navigation link to Language Histories */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 mb-8"
          >
            <Link
              href="/languages"
              className="block text-center text-sm font-body transition-opacity hover:opacity-70"
              style={{ color: "var(--theme-accent)" }}
            >
              Looking for individual language histories? View Language Histories →
            </Link>
          </motion.div>

          {/* Family Cards */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid gap-6 sm:gap-8">
              {families.map((family, index) => (
                <motion.div
                  key={family.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <Link href={`/family/${family.slug}`}>
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

                      <div className="relative">
                        {/* Family name + badge */}
                        <div className="flex items-center gap-3 mb-3">
                          <h2
                            className="font-display text-xl sm:text-2xl"
                            style={{ color: "var(--theme-accent)" }}
                          >
                            {family.name}
                          </h2>
                          <span
                            className="text-xs font-body px-2 py-0.5 rounded-full"
                            style={{
                              background: "var(--theme-surface-hover)",
                              color: "var(--theme-text-tertiary)",
                            }}
                          >
                            {family.livingLanguages} languages
                          </span>
                        </div>

                        {/* Hook */}
                        <p
                          className="font-body text-sm sm:text-base leading-relaxed mb-4"
                          style={{ color: "var(--theme-text-secondary)" }}
                        >
                          {family.hook}
                        </p>

                        {/* Meta row */}
                        <div className="flex flex-wrap gap-4">
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
                            {family.originPeriod}
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
                            {family.originRegion}
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
                            {family.totalSpeakers} speakers
                          </span>
                        </div>

                        {/* Tree preview: show branch names */}
                        {family.tree.children && (
                          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[var(--theme-border)]">
                            {family.tree.children.map((branch) => (
                              <span
                                key={branch.id}
                                className="text-[10px] font-body px-2 py-0.5 rounded-full"
                                style={{
                                  background: branch.displayColor
                                    ? `${branch.displayColor}20`
                                    : "var(--theme-surface-hover)",
                                  color: branch.displayColor || "var(--theme-text-tertiary)",
                                  border: `1px solid ${branch.displayColor || "var(--theme-border)"}40`,
                                }}
                              >
                                {branch.name}
                                {branch.status === "extinct" && " †"}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Arrow */}
                      <div
                        className="absolute top-6 right-6 hidden sm:flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group-hover:translate-x-1"
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
                More families coming soon: Sino-Tibetan, Dravidian, Austronesian,
                Niger-Congo...
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
