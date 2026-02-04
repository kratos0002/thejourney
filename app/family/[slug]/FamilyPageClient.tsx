"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { easeSmooth, fadeIn } from "@/lib/animations";
import { useTransition } from "@/components/TransitionProvider";
import type { LanguageFamilyTree } from "@/data/language-types";
import { countLanguages, getConnectedLanguages } from "@/data/language-families";

// Dynamic import to avoid SSR issues with D3
const LanguageFamilyTreeViz = dynamic(
  () => import("@/components/language/LanguageFamilyTree"),
  { ssr: false }
);

interface FamilyPageClientProps {
  family: LanguageFamilyTree;
}

export default function FamilyPageClient({ family }: FamilyPageClientProps) {
  const { navigateHome } = useTransition();
  const router = useRouter();

  const languageCount = countLanguages(family.tree);
  const branchCount = family.tree.children?.length || 0;
  const connectedLanguages = getConnectedLanguages(family.tree);

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

      {/* Back / breadcrumbs */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easeSmooth, delay: 0.2 }}
        className="fixed top-0 left-0 z-30 p-5"
      >
        <div className="flex items-center gap-2">
          <button
            onClick={navigateHome}
            className="flex items-center gap-1 transition-opacity duration-300 hover:opacity-70 cursor-pointer"
            style={{ color: "var(--theme-text-tertiary)" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="text-xs font-body tracking-wider">Home</span>
          </button>
          <span
            className="text-xs font-body"
            style={{ color: "var(--theme-text-tertiary)", opacity: 0.4 }}
          >
            /
          </span>
          <Link
            href="/families"
            className="text-xs font-body tracking-wider transition-opacity hover:opacity-70"
            style={{ color: "var(--theme-text-tertiary)" }}
          >
            Families
          </Link>
          <span
            className="text-xs font-body"
            style={{ color: "var(--theme-text-tertiary)", opacity: 0.4 }}
          >
            /
          </span>
          <span
            className="text-xs font-body tracking-wider"
            style={{ color: "var(--theme-accent)", opacity: 0.8 }}
          >
            {family.name}
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative pt-24">
        <motion.div variants={fadeIn} initial="hidden" animate="visible">
          {/* Hero */}
          <header className="text-center px-6 mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xs font-body uppercase tracking-[0.25em] mb-4"
              style={{ color: "var(--theme-text-tertiary)" }}
            >
              Language Family
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl mb-4"
              style={{ color: "var(--theme-text-primary)" }}
            >
              {family.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--theme-text-secondary)" }}
            >
              {family.hook}
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
                  {branchCount}
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
                  {languageCount}
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
                  {family.totalSpeakers}
                </p>
                <p
                  className="text-xs font-body uppercase tracking-wider"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  Speakers
                </p>
              </div>
            </motion.div>
          </header>

          {/* Story */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-3xl mx-auto px-6 mb-12"
          >
            {family.story.map((paragraph, i) => (
              <p
                key={i}
                className="font-body text-base leading-relaxed mb-4"
                style={{ color: "var(--theme-text-secondary)" }}
              >
                {paragraph}
              </p>
            ))}
          </motion.section>

          {/* Interactive Tree */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-5xl mx-auto px-4 sm:px-6 mb-12"
          >
            <h2
              className="font-display text-xl sm:text-2xl text-center mb-6"
              style={{ color: "var(--theme-text-primary)" }}
            >
              The {family.name} Family Tree
            </h2>

            <LanguageFamilyTreeViz
              data={family.tree}
              onLanguageClick={(slug) => router.push(`/language/${slug}`)}
            />

            <p
              className="text-center text-xs font-body mt-4"
              style={{ color: "var(--theme-text-tertiary)", opacity: 0.6 }}
            >
              Click nodes to expand branches. Highlighted languages link to their
              history pages.
            </p>
          </motion.section>

          {/* Meta info */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-3xl mx-auto px-6 mb-12"
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl"
              style={{
                background: "var(--theme-surface)",
                border: "1px solid var(--theme-border)",
              }}
            >
              <div>
                <p
                  className="text-xs font-body uppercase tracking-wider mb-1"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  Origin Region
                </p>
                <p
                  className="font-body text-sm"
                  style={{ color: "var(--theme-text-secondary)" }}
                >
                  {family.originRegion}
                </p>
              </div>
              <div>
                <p
                  className="text-xs font-body uppercase tracking-wider mb-1"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  Origin Period
                </p>
                <p
                  className="font-body text-sm"
                  style={{ color: "var(--theme-text-secondary)" }}
                >
                  {family.originPeriod}
                </p>
              </div>
              <div>
                <p
                  className="text-xs font-body uppercase tracking-wider mb-1"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  Living Languages
                </p>
                <p
                  className="font-body text-sm"
                  style={{ color: "var(--theme-text-secondary)" }}
                >
                  {family.livingLanguages}
                </p>
              </div>
              <div>
                <p
                  className="text-xs font-body uppercase tracking-wider mb-1"
                  style={{ color: "var(--theme-text-tertiary)" }}
                >
                  Total Speakers
                </p>
                <p
                  className="font-body text-sm"
                  style={{ color: "var(--theme-text-secondary)" }}
                >
                  {family.totalSpeakers}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Connected Language Histories */}
          {connectedLanguages.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-3xl mx-auto px-6 mb-12"
            >
              <h2
                className="font-display text-xl sm:text-2xl text-center mb-6"
                style={{ color: "var(--theme-text-primary)" }}
              >
                Explore Language Histories
              </h2>

              <div className="grid gap-4">
                {connectedLanguages.map((lang) => (
                  <Link
                    key={lang.id}
                    href={`/language/${lang.languageSlugs![0]}`}
                  >
                    <div
                      className="group p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: "var(--theme-surface)",
                        border: "1px solid var(--theme-border)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3
                            className="font-display text-lg group-hover:opacity-80 transition-opacity"
                            style={{ color: "var(--theme-accent)" }}
                          >
                            {lang.name}
                          </h3>
                          {lang.description && (
                            <p
                              className="text-sm font-body mt-1 line-clamp-1"
                              style={{ color: "var(--theme-text-secondary)" }}
                            >
                              {lang.description}
                            </p>
                          )}
                        </div>
                        <div
                          className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 group-hover:translate-x-1"
                          style={{
                            background: "var(--theme-surface-hover)",
                            color: "var(--theme-text-tertiary)",
                          }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* Branch list */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="max-w-3xl mx-auto px-6 mb-12"
          >
            <h2
              className="font-display text-xl sm:text-2xl text-center mb-6"
              style={{ color: "var(--theme-text-primary)" }}
            >
              Branches of {family.name}
            </h2>

            <div className="grid gap-3">
              {family.tree.children?.map((branch) => (
                <div
                  key={branch.id}
                  className="p-4 rounded-xl"
                  style={{
                    background: "var(--theme-surface)",
                    border: "1px solid var(--theme-border)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    {/* Branch color dot */}
                    <div
                      className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                      style={{
                        background: branch.displayColor || "var(--theme-text-tertiary)",
                        opacity: branch.status === "extinct" ? 0.4 : 0.8,
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3
                          className="font-display text-base"
                          style={{
                            color:
                              branch.status === "extinct"
                                ? "var(--theme-text-tertiary)"
                                : "var(--theme-text-primary)",
                            fontStyle:
                              branch.status === "extinct" ? "italic" : "normal",
                          }}
                        >
                          {branch.name}
                          {branch.status === "extinct" && " †"}
                        </h3>
                        {branch.approximateAge && (
                          <span
                            className="text-[10px] font-body px-1.5 py-0.5 rounded-full"
                            style={{
                              background: "var(--theme-surface-hover)",
                              color: "var(--theme-text-tertiary)",
                            }}
                          >
                            {branch.approximateAge}
                          </span>
                        )}
                      </div>
                      {branch.description && (
                        <p
                          className="text-sm font-body mt-1 leading-relaxed"
                          style={{ color: "var(--theme-text-secondary)" }}
                        >
                          {branch.description}
                        </p>
                      )}
                      {/* Sub-branch names */}
                      {branch.children && branch.children.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {branch.children.map((child) => (
                            <span
                              key={child.id}
                              className="text-[10px] font-body px-1.5 py-0.5 rounded"
                              style={{
                                background: "var(--theme-surface-hover)",
                                color:
                                  child.status === "extinct"
                                    ? "var(--theme-text-tertiary)"
                                    : "var(--theme-text-secondary)",
                                fontStyle:
                                  child.status === "extinct"
                                    ? "italic"
                                    : "normal",
                              }}
                            >
                              {child.name}
                              {child.status === "extinct" && " †"}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
