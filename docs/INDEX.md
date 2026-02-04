# Documentation Index

> Last updated: February 2026

This is the master guide to all project documentation. Start here to find anything.

---

## For New Contributors

Read these in order:

1. **[README.md](../README.md)** — Project overview, setup, architecture
2. **[CLAUDE.md](../CLAUDE.md)** — Development workflow, conventions, content creation guides
3. **[PRODUCT_VISION.md](PRODUCT_VISION.md)** — Why this project exists, core philosophy
4. **[DESIGN_LANGUAGE.md](DESIGN_LANGUAGE.md)** — Visual design system (colors, type, motion)
5. **[BACKLOG.md](BACKLOG.md)** — What's shipped, what's planned, what to never build

---

## Document Categories

### Product Strategy

| Document | Purpose | Status |
|----------|---------|--------|
| [PRODUCT_VISION.md](PRODUCT_VISION.md) | Core philosophy, experience layers, success metrics | Current |
| [BACKLOG.md](BACKLOG.md) | Feature roadmap organized by priority, anti-patterns | Current |
| [PRODUCT_AUDIT_FEB_2026.md](PRODUCT_AUDIT_FEB_2026.md) | Comprehensive project state assessment | Current |
| [MONETIZATION.md](MONETIZATION.md) | Premium strategy, pricing, personas, RevenueCat integration | Current |

### Design & UX

| Document | Purpose | Status |
|----------|---------|--------|
| [DESIGN_LANGUAGE.md](DESIGN_LANGUAGE.md) | Colors, typography, spacing, motion, component patterns | Current |
| [CORE_UX.md](CORE_UX.md) | Screen flow, word experience layers, transitions, responsive behavior | Current |
| [THEME_SYSTEM.md](THEME_SYSTEM.md) | Night Sky + Parchment themes, CSS variables, Tailwind integration | Current |
| [SEARCH_VISION.md](SEARCH_VISION.md) | Discovery drawer design ("The Summoning"), filter taxonomy | Current |
| [SHARE_CARD_DESIGN_PROPOSAL.md](SHARE_CARD_DESIGN_PROPOSAL.md) | Share card variants, visual design, technical implementation | Current |

### Feature Backlogs

| Document | Purpose | Status |
|----------|---------|--------|
| [features/LANGUAGE_HISTORY_BACKLOG.md](features/LANGUAGE_HISTORY_BACKLOG.md) | Language history feature: milestones, research learnings, design decisions | Current |

### Content Strategy

| Document | Purpose | Status |
|----------|---------|--------|
| [WORD_STRATEGY_NEXT_50.md](WORD_STRATEGY_NEXT_50.md) | Content expansion plan: regional gaps, next 50 words | Needs update (word count outdated) |
| [../data/etymology-coverage.md](../data/etymology-coverage.md) | Coverage tracker: which routes/domains are covered | Needs update |

### Research

All completed research lives in `/docs/research/`. Each fed findings into the backlog.

| Document | Topic | Status |
|----------|-------|--------|
| [research/LEARNING_SCIENCE_RETENTION_RESEARCH.md](research/LEARNING_SCIENCE_RETENTION_RESEARCH.md) | How people learn and remember etymologies | Complete |
| [research/SPACED_REPETITION_RETENTION_RESEARCH.md](research/SPACED_REPETITION_RETENTION_RESEARCH.md) | Spaced repetition and memory techniques | Complete |
| [research/ENGAGEMENT_RETENTION_RESEARCH.md](research/ENGAGEMENT_RETENTION_RESEARCH.md) | Engagement without gamification | Complete |
| [research/DISCOVERY_SERENDIPITY_RESEARCH.md](research/DISCOVERY_SERENDIPITY_RESEARCH.md) | Content discovery without search intent | Complete |
| [research/SOCIAL_SHARING_RESEARCH.md](research/SOCIAL_SHARING_RESEARCH.md) | Sharing behavior and virality | Complete |
| [research/VISUAL_GEOGRAPHIC_LEARNING_RESEARCH.md](research/VISUAL_GEOGRAPHIC_LEARNING_RESEARCH.md) | Visual and geographic learning techniques | Complete |
| [research/SEO_STRATEGY_RESEARCH.md](research/SEO_STRATEGY_RESEARCH.md) | SEO strategy for etymology content | Complete |
| [RESEARCH_AGENDA.md](RESEARCH_AGENDA.md) | Master research roadmap (7/10 areas complete) | Current |

### Development Guides

| Document | Purpose | Status |
|----------|---------|--------|
| [../CLAUDE.md](../CLAUDE.md) | Word creation workflow, language history guide, map design rules, bugs to watch | Current |

### Archived

These documents served their purpose during early development. Kept for historical reference but no longer actively maintained.

| Document | Why Archived |
|----------|-------------|
| [archive/CLAUDE_CODE_PROMPT.md](archive/CLAUDE_CODE_PROMPT.md) | Original build brief for Claude Code. Superseded by actual codebase + CLAUDE.md |
| [archive/WORD_CONTENT.md](archive/WORD_CONTENT.md) | Content for first 10 words. Now lives in TypeScript data files (302 words) |

---

## Database Schema

| Table | Purpose | Access |
|-------|---------|--------|
| `words` | Word content (journey, sounds, story) | Public read |
| `explored_words` | User exploration tracking | RLS per user |
| `user_preferences` | Theme, settings | RLS per user |
| `feedback_submissions` | User suggestions | RLS per user |
| `notifications` | Admin announcements | Public read |
| `user_notification_dismissals` | Dismissal tracking | RLS per user |
| `feature_flags` | Feature toggles | Public read |
| `audio_verifications` | Audio QA status | Public read |

---

## Feature Flags

Key feature flags managed via admin dashboard:

| Flag | Purpose | Current State |
|------|---------|---------------|
| `cabinet_of_curiosities` | Cabinet page at /cabinet | Enabled |
| `daily_word_ritual` | Daily word hook on home screen | Enabled |
| `discovery_drawer` | Browse/filter drawer | Enabled |
| `theme_selection` | User-facing theme selector | Disabled |
| `premium_gate` | Premium paywall (20 word limit) | Disabled |
