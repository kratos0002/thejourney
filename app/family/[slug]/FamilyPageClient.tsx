"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { easeSmooth, fadeIn } from "@/lib/animations";
import { useTransition } from "@/components/TransitionProvider";
import type { LanguageFamilyTree } from "@/data/language-types";
import { countLanguages, getConnectedLanguages } from "@/data/language-families";

const LanguageFamilyTreeViz = dynamic(
  () => import("@/components/language/LanguageFamilyTree"),
  { ssr: false }
);

interface FamilyPageClientProps {
  family: LanguageFamilyTree;
}

// Staggered card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeSmooth,
      delay: i * 0.08,
    },
  }),
};

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

      {/* Breadcrumbs */}
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="text-xs font-body tracking-wider">Home</span>
          </button>
          <span className="text-xs font-body" style={{ color: "var(--theme-text-tertiary)", opacity: 0.4 }}>/</span>
          <Link href="/families" className="text-xs font-body tracking-wider transition-opacity hover:opacity-70" style={{ color: "var(--theme-text-tertiary)" }}>
            Families
          </Link>
          <span className="text-xs font-body" style={{ color: "var(--theme-text-tertiary)", opacity: 0.4 }}>/</span>
          <span className="text-xs font-body tracking-wider" style={{ color: "var(--theme-accent)", opacity: 0.8 }}>
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
              {[
                { value: branchCount, label: "Branches" },
                { value: languageCount, label: "Languages" },
                { value: family.totalSpeakers, label: "Speakers" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-display" style={{ color: "var(--theme-accent)" }}>
                    {stat.value}
                  </p>
                  <p className="text-xs font-body uppercase tracking-wider" style={{ color: "var(--theme-text-tertiary)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </header>

          {/* Story */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-3xl mx-auto px-6 mb-16"
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
            className="max-w-5xl mx-auto px-4 sm:px-6 mb-16"
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
              Click nodes to expand branches. Highlighted languages link to their history pages.
            </p>
          </motion.section>

          {/* Meta info */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-3xl mx-auto px-6 mb-16"
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl"
              style={{
                background: "var(--theme-surface)",
                border: "1px solid var(--theme-border)",
              }}
            >
              {[
                { label: "Origin Region", value: family.originRegion },
                { label: "Origin Period", value: family.originPeriod },
                { label: "Living Languages", value: family.livingLanguages },
                { label: "Total Speakers", value: family.totalSpeakers },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-body uppercase tracking-wider mb-1" style={{ color: "var(--theme-text-tertiary)" }}>
                    {item.label}
                  </p>
                  <p className="font-body text-sm" style={{ color: "var(--theme-text-secondary)" }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── Explore Language Histories ── */}
          {connectedLanguages.length > 0 && (
            <section className="max-w-3xl mx-auto px-6 mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8 }}
              >
                <p
                  className="text-xs font-body uppercase tracking-[0.2em] text-center mb-2"
                  style={{ color: "var(--theme-text-tertiary)", opacity: 0.6 }}
                >
                  Deep Dives
                </p>
                <h2
                  className="font-display text-xl sm:text-2xl text-center mb-8"
                  style={{ color: "var(--theme-text-primary)" }}
                >
                  Explore Language Histories
                </h2>
              </motion.div>

              <div className="grid gap-4">
                {connectedLanguages.map((lang, i) => (
                  <motion.div
                    key={lang.id}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.3, ease: easeSmooth },
                    }}
                    className="group"
                  >
                    <Link href={`/language/${lang.languageSlugs![0]}`}>
                      <div
                        className="relative p-5 sm:p-6 rounded-2xl transition-all duration-500 overflow-hidden"
                        style={{
                          background: "var(--theme-surface)",
                          border: "1px solid var(--theme-border)",
                        }}
                      >
                        {/* Hover glow overlay */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                          style={{
                            background: `radial-gradient(ellipse at center 30%, ${lang.displayColor || "var(--theme-accent)"}15 0%, transparent 70%)`,
                          }}
                        />

                        <div className="relative flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4 min-w-0">
                            {/* Color accent bar */}
                            <div
                              className="w-1 h-10 rounded-full flex-shrink-0 transition-all duration-500 group-hover:h-12"
                              style={{
                                background: lang.displayColor || "var(--theme-accent)",
                                opacity: 0.7,
                                boxShadow: `0 0 12px ${lang.displayColor || "var(--theme-accent)"}30`,
                              }}
                            />
                            <div className="min-w-0">
                              <h3
                                className="font-display text-lg sm:text-xl transition-all duration-300"
                                style={{
                                  color: "var(--theme-accent)",
                                  textShadow: `0 0 30px ${lang.displayColor || "var(--theme-accent)"}20`,
                                }}
                              >
                                {lang.name}
                              </h3>
                              {lang.description && (
                                <p
                                  className="text-sm font-body mt-1 leading-relaxed line-clamp-2"
                                  style={{ color: "var(--theme-text-secondary)" }}
                                >
                                  {lang.description}
                                </p>
                              )}
                              {lang.region && (
                                <p
                                  className="text-xs font-body mt-1.5"
                                  style={{ color: "var(--theme-text-tertiary)", opacity: 0.7 }}
                                >
                                  {lang.region}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Arrow */}
                          <div
                            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 group-hover:translate-x-1 flex-shrink-0"
                            style={{
                              background: "var(--theme-surface-hover)",
                              color: "var(--theme-text-tertiary)",
                            }}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* ── Branches ── */}
          <section className="max-w-3xl mx-auto px-6 mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
            >
              <p
                className="text-xs font-body uppercase tracking-[0.2em] text-center mb-2"
                style={{ color: "var(--theme-text-tertiary)", opacity: 0.6 }}
              >
                Classification
              </p>
              <h2
                className="font-display text-xl sm:text-2xl text-center mb-8"
                style={{ color: "var(--theme-text-primary)" }}
              >
                Branches of {family.name}
              </h2>
            </motion.div>

            <div className="grid gap-4">
              {family.tree.children?.map((branch, i) => (
                <motion.div
                  key={branch.id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  className="group"
                >
                  <div
                    className="relative p-5 sm:p-6 rounded-2xl transition-all duration-500 overflow-hidden"
                    style={{
                      background: "var(--theme-surface)",
                      border: "1px solid var(--theme-border)",
                    }}
                  >
                    {/* Subtle ambient glow from branch color */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-30 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(ellipse at 10% 50%, ${branch.displayColor || "#888"}10 0%, transparent 60%)`,
                      }}
                    />

                    <div className="relative flex items-start gap-4">
                      {/* Branch color accent */}
                      <div className="flex flex-col items-center gap-1 pt-1 flex-shrink-0">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            background: branch.displayColor || "var(--theme-text-tertiary)",
                            opacity: branch.status === "extinct" ? 0.4 : 0.9,
                            boxShadow: branch.status !== "extinct"
                              ? `0 0 10px ${branch.displayColor || "transparent"}40`
                              : "none",
                          }}
                        />
                        {/* Thin line connecting to sub-branches visually */}
                        {branch.children && branch.children.length > 0 && (
                          <div
                            className="w-px flex-1 min-h-[16px]"
                            style={{
                              background: `linear-gradient(to bottom, ${branch.displayColor || "var(--theme-border)"}40, transparent)`,
                            }}
                          />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2.5 flex-wrap">
                          <h3
                            className="font-display text-base sm:text-lg"
                            style={{
                              color: branch.status === "extinct"
                                ? "var(--theme-text-tertiary)"
                                : "var(--theme-text-primary)",
                              fontStyle: branch.status === "extinct" ? "italic" : "normal",
                            }}
                          >
                            {branch.name}
                            {branch.status === "extinct" && " †"}
                          </h3>
                          {branch.approximateAge && (
                            <span
                              className="text-[10px] font-mono tracking-wide"
                              style={{ color: "var(--theme-text-tertiary)", opacity: 0.6 }}
                            >
                              {branch.approximateAge}
                            </span>
                          )}
                        </div>

                        {branch.description && (
                          <p
                            className="text-sm font-body mt-1.5 leading-relaxed"
                            style={{ color: "var(--theme-text-secondary)" }}
                          >
                            {branch.description}
                          </p>
                        )}

                        {/* Sub-branch chips */}
                        {branch.children && branch.children.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {branch.children.map((child) => (
                              <span
                                key={child.id}
                                className="text-[10px] font-body px-2 py-0.5 rounded-full transition-colors duration-300"
                                style={{
                                  background: "var(--theme-surface-hover)",
                                  color: child.status === "extinct"
                                    ? "var(--theme-text-tertiary)"
                                    : "var(--theme-text-secondary)",
                                  fontStyle: child.status === "extinct" ? "italic" : "normal",
                                  border: "1px solid var(--theme-border)",
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
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
