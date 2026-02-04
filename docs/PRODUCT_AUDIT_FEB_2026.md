# Product Audit — February 2026

## Executive Summary

**The Journey** is a premium, curated etymology app that transforms words from dry reference material into immersive, visual experiences. Positioned as "knowledge-as-luxury" — closer to an art book or museum exhibition than a dictionary.

**Current State:** Production app with 302 words, 2 language histories, comprehensive admin dashboard, full theme system, share cards, cabinet, and daily word ritual shipped. Monetization infrastructure built but disabled. Language History feature (M1) just shipped.

**Live at:** [etymology.life](https://www.etymology.life)

---

## Tech Stack

| Layer | Version | Purpose |
|-------|---------|---------|
| Next.js | 16.1.4 | App Router, Turbopack |
| React | 19.2.3 | UI |
| Tailwind CSS | 4 | Styling |
| Framer Motion | 12.29 | UI animation |
| GSAP | 3.14 | Map/complex animation |
| D3.js | 7.9 | Map visualization |
| Supabase | 2.91 | PostgreSQL, Auth (email OTP) |
| RevenueCat | — | Payments (disabled) |
| PostHog | — | Analytics |
| Remotion | 4.0 | Video/reel generation |
| Vercel | — | Hosting |

---

## Feature Status

### Shipped
- [x] Home screen (3D interactive globe with floating word bubbles)
- [x] Word experience (7-layer cinematic scroll journey)
- [x] Multi-script support (Arabic, Devanagari, CJK, Korean, Hebrew, Cyrillic, etc.)
- [x] Audio pronunciation (TTS + native)
- [x] Journey map visualization (D3 great-circle arcs)
- [x] Authentication (email OTP via Supabase)
- [x] Exploration tracking (local + cloud sync)
- [x] 5-word free gate
- [x] Theme system (Night Sky dark + Parchment light)
- [x] Admin dashboard (full CRUD, word editor, coverage analysis)
- [x] Feature flags system
- [x] Feedback submission system
- [x] Notifications system
- [x] Audio verification workflow
- [x] PWA support
- [x] Analytics (PostHog + Vercel)
- [x] Cabinet of Curiosities — personal collection with museum aesthetics
- [x] Share Cards (Poster/Moment variants, light/dark toggle)
- [x] Daily Word Ritual — header subtitle hook
- [x] Browse page — filterable word grid with language sections
- [x] Discovery drawer — curated journeys, filtering
- [x] Language History (M1) — Sanskrit + Persian with animated zone maps
- [x] Languages index page (/languages)
- [x] Word creation tooling (slug registry, validation scripts)
- [x] SEO optimization (DefinedTerm schema, BreadcrumbList, keyword metadata)
- [x] Sitemap and robots.txt
- [x] Dynamic OG images per word

### Built But Disabled
- [ ] Premium gate (20-word limit) — `shouldShowPremiumGate = false`
- [ ] Theme selector for users — behind `theme_selection` flag

### In Progress
- [ ] Language History M2 (Arabic, scrollytelling, cross-links)

### Planned
- [ ] Word-to-language cross-links
- [ ] Scrollytelling map integration
- [ ] Flow lines on map (migration paths)
- [ ] Spaced repetition / memory features
- [ ] Expansion to more language histories

---

## Content Library

### Current Stats
- **Total Words:** 302 across 29 batches + 1 legacy batch
- **Language Families:** 15+ (Indo-Aryan, Semitic, Germanic, Romance, Slavic, Austronesian, Bantu, CJK, Celtic, Turkic, etc.)
- **Scripts:** Latin, Arabic, Devanagari, Japanese (Kanji/Hiragana), Chinese, Hebrew, Korean, Cyrillic, Thai, Greek, and more
- **Language Histories:** 2 (Sanskrit: 6 phases, Persian: 7 phases)

### Content Files
| File | Content |
|------|---------|
| `data/words-batch{2-31}.ts` | 29 batch files with ~10 words each |
| `data/words-new.ts` | Legacy batch |
| `data/languages/sanskrit.ts` | Sanskrit history, 6 phases, 14 related words |
| `data/languages/persian.ts` | Persian history, 7 phases, 18 related words |

---

## Database Schema

| Table | Purpose | RLS |
|-------|---------|-----|
| `words` | Word content (journey, sounds, story) | No (public read) |
| `explored_words` | User exploration tracking | Yes |
| `user_preferences` | Theme, settings | Yes |
| `feedback_submissions` | User suggestions | Yes |
| `notifications` | Admin announcements | No |
| `user_notification_dismissals` | Dismissal tracking | Yes |
| `feature_flags` | Feature toggles | No (public read) |
| `audio_verifications` | Audio QA status | No |

---

## Monetization

| Tier | Price | Access |
|------|-------|--------|
| Free (Anonymous) | $0 | 5 words |
| Free (Signed In) | $0 | 20 words |
| Premium | $9.99 one-time | All words forever |

**Infrastructure:** RevenueCat integrated, "Journey Pass" entitlement configured, purchase flow built. **Currently disabled.**

See `docs/MONETIZATION.md` for full research and strategy.

---

## Known Issues

### P0 — Blocking Revenue
| Issue | Action |
|-------|--------|
| Premium gate disabled | Decide timing and enable |
| RevenueCat offerings need verification | Verify on dashboard |

### P1 — Quality
| Issue | Action |
|-------|--------|
| Audio verification not enforced pre-publish | Add check |
| Some word batches may lack audio | Audit coverage |

### P2 — Enhancement
| Issue | Action |
|-------|--------|
| No word-to-language cross-links | M2 milestone |
| etymology-coverage.md outdated | Needs refresh |
| WORD_STRATEGY_NEXT_50 word counts outdated | Needs refresh |

---

## What's Changed Since January 2026 Audit

| Area | January 2026 | February 2026 |
|------|-------------|---------------|
| Total words | ~30 across 8 batches | 302 across 29 batches |
| Share cards | Planned | Shipped |
| Cabinet | Planned | Shipped |
| Daily word ritual | Planned | Shipped |
| Browse page | In progress | Shipped |
| Language History | Not started | M1 shipped (Sanskrit + Persian) |
| Word tooling | None | Slug registry + validation |
| SEO | Basic | DefinedTerm schema, keyword optimization |

---

*Previous audit: `docs/archive/PRODUCT_AUDIT_JAN_2026.md`*
*Last updated: February 2026*
