# Product Audit - January 2026

## Executive Summary

**The Journey** is a premium, curated etymology app that transforms words from dry reference material into immersive, visual experiences. Positioned as "knowledge-as-luxury" — closer to an art book or museum exhibition than a dictionary.

**Current State:** Core MVP complete, publicly launched, monetization infrastructure built but disabled, expanding word library, theme system complete, discovery features in progress.

---

## 1. Product Vision & Positioning

### Core Concept
- **One Sentence:** Transform etymology from dry reference into immersive experience — each word becomes a world you travel through.
- **Philosophy:** Words don't have origins; they have **journeys** across continents, centuries, and cultures.

### Positioning
| We Are | We Are Not |
|--------|------------|
| Museum exhibition | Dictionary |
| Vinyl record experience | Spotify playlist |
| Craft cocktail | Fast food |
| Art book | Textbook |

### Target Personas
1. **The Curious Explorer** (25-45) — reads Aeon/Atlantic, wants discovery and serendipity
2. **The Language Lover** (20-40) — multilingual, seeks linguistic patterns
3. **The Collector** (25-35) — wants achievements, progress, exclusivity
4. **The Gift Giver** (30-55) — values beauty and curation

---

## 2. Technical Stack

### Frontend
- Next.js 16.1.4 (App Router)
- React 19.2.3
- Tailwind CSS 4
- Framer Motion 12.29
- D3 7.9 (maps/visualization)

### Backend & Services
- Supabase (PostgreSQL, Auth)
- RevenueCat (payments)
- PostHog (analytics)
- Vercel (hosting)

### Content Tools
- Remotion 4.0 (video generation)
- Forvo (audio sourcing)

---

## 3. Database Schema

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

## 4. Feature Status

### Complete
- [x] Home screen (3D interactive globe)
- [x] Word experience (7-layer scroll journey)
- [x] Multi-script support (Arabic, Devanagari, CJK, etc.)
- [x] Audio pronunciation (TTS + native)
- [x] Journey map visualization (D3)
- [x] Authentication (email OTP)
- [x] Exploration tracking (local + cloud sync)
- [x] 5-word free gate
- [x] Theme system (Night Sky + Parchment)
- [x] Admin dashboard (full CRUD)
- [x] Feedback system
- [x] Notifications system
- [x] Feature flags
- [x] Audio verification workflow
- [x] PWA support
- [x] Analytics (PostHog + Vercel)

### Built But Disabled
- [ ] Premium gate (20-word limit) — `shouldShowPremiumGate = false`
- [ ] Theme selector for users — behind `theme_selection` flag

### In Progress
- [ ] Discovery drawer (filtering by origin, theme, path)
- [ ] Text search

### Planned (Not Started)
- [ ] Collection view (grid of all words)
- [ ] Achievement system
- [ ] Share cards
- [ ] Word journal
- [ ] Expansion packs
- [ ] Offline support

---

## 5. Content Library

### Current Stats
- **Total Words:** ~30 across 8 batches
- **Languages:** 8+ language families
- **Scripts:** Latin, Arabic, Devanagari, Japanese, Chinese, Hebrew

### Coverage Analysis

| Region | Status | Examples |
|--------|--------|----------|
| Middle East/North Africa | Good | qahwa, algorithm, assassin |
| South Asia | Good | saans, daan |
| East Asia | Moderate | tsunami |
| Southern Africa | Good | ubuntu |
| Western Europe | Good | wanderlust, saudade |
| Eastern Europe | Gap | No Slavic words yet |
| Americas | Gap | Limited indigenous languages |
| Southeast Asia | Gap | No Austronesian origins |

### Theme Coverage

| Theme | Status |
|-------|--------|
| Food & Drink | Strong |
| Philosophy | Strong |
| Nature | Moderate |
| Science | Moderate |
| Religion | Moderate |
| Trade/Commerce | Weak |
| Medicine/Anatomy | Weak |

---

## 6. Monetization

### Current Model
| Tier | Price | Access |
|------|-------|--------|
| Free (Anonymous) | $0 | 5 words |
| Free (Signed In) | $0 | 20 words |
| Premium | $9.99 one-time | All words forever |

### Infrastructure Status
- RevenueCat SDK integrated
- "Journey Pass" entitlement configured
- Purchase flow built in ExplorationProvider
- **Currently disabled** — no revenue being captured

### Revenue Projections (Conservative)
- 1,000 users × 5% conversion = $500
- 10,000 users × 5% conversion = $5,000
- 100,000 users × 5% conversion = $50,000

---

## 7. Critical Issues

### P0 - Blocking Revenue
| Issue | Location | Action |
|-------|----------|--------|
| Premium gate disabled | `ExplorationProvider.tsx:76` | Decide timing, enable |
| RevenueCat offerings may be incomplete | RevenueCat dashboard | Verify "Journey Pass" offering exists |

### P1 - Quality Risk
| Issue | Location | Action |
|-------|----------|--------|
| Audio verification not enforced | `audio_verifications` table | Add pre-publish check |
| Cache invalidation missing | `lib/words.ts` | Add `revalidateTag` after admin edits |

### P2 - UX Gaps
| Issue | Impact | Action |
|-------|--------|--------|
| Discovery drawer incomplete | Hard to find words | Complete filtering integration |
| Theme selector hidden | Users can't customize | Enable `theme_selection` flag |
| No offline support | Poor mobile experience | Consider service worker |

---

## 8. Technical Debt

| Area | Issue | Severity |
|------|-------|----------|
| Error handling | Inconsistent patterns across server actions | Medium |
| TypeScript | Some JSON cast as `unknown` | Low |
| Migrations | No automated runner, manual SQL | Low |
| Rate limiting | Admin APIs not protected | Low |
| Status enums | Not fully enforced in TypeScript | Low |

---

## 9. Admin Capabilities

### Available at `/admin`
1. **Word Management** — Create, edit, delete words
2. **Feedback Review** — View/respond to user suggestions
3. **Coverage Analysis** — Gap visualization by region/theme
4. **Audio Verification** — QA workflow for pronunciations
5. **User Management** — Stats and notification targeting
6. **Feature Flags** — Toggle experiments without deploy
7. **Notifications** — Create announcements for users

### Access Control
- Gated by `ADMIN_EMAIL` environment variable
- Server-side verification via `/api/admin-check`

---

## 10. Analytics & Tracking

### Events Tracked (PostHog)
- `sign_in_started` / `sign_in_completed`
- `word_explored`
- `premium_purchase_started` / `completed` / `cancelled` / `error`
- `theme_changed`
- `feedback_submitted`

### Dashboards
- PostHog: Funnels, retention, feature adoption
- Vercel Analytics: Core Web Vitals, performance
- Admin Dashboard: Feedback count, coverage gaps

---

## 11. Security & Compliance

### Implemented
- [x] Email OTP authentication (no passwords)
- [x] Row Level Security on all user tables
- [x] Admin email gating
- [x] Server-side admin verification

### Needs Attention
- [ ] GDPR data deletion mechanism
- [ ] Explicit analytics consent
- [ ] XSS protection audit on rendered content

---

## 12. Performance

### Optimized
- Server-side caching (1-hour revalidation)
- Lazy loading (dynamic imports)
- GPU-accelerated animations
- Font optimization (@next/font)
- Image optimization (Vercel)

### Watch Items
- D3 map performance on low-end devices
- Globe with 100+ bubbles (currently 30)
- No service worker for offline

---

## 13. Design System

### Themes

**Night Sky (Dark, Default)**
```css
--theme-bg-primary: #0a0a14
--theme-text-primary: #f0ede6
--theme-accent: #d4a574
```

**Parchment (Light)**
```css
--theme-bg-primary: #f8f5ef
--theme-text-primary: #2a2520
--theme-accent: #b8860b
```

### Typography
- Display: Cormorant Garamond
- Body: Source Serif 4
- Scripts: Noto Sans (Arabic, JP, etc.)
- Mono: JetBrains Mono

### Motion
- Reveal: 800-1200ms
- Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- GPU-only properties (transform, opacity)

---

## 14. Competitive Position

### White Space
No competitor offers etymology as a luxury, immersive experience.

| Competitor | Model | Gap We Fill |
|------------|-------|-------------|
| Etymonline | Free, ads, text-only | No experience, no beauty |
| Merriam-Webster | Utility-first | No immersion, no journey |
| Vocabulary.com | Gamified, B2B | Not for explorers |

### Comparable Pricing
- MasterClass: $120-240/year
- Brilliant: $130/year
- Blinkist: $150/year
- **The Journey: $9.99 one-time** (underpriced for value)

---

## 15. Roadmap

### Phase 1: MVP (Current)
- [x] Core experience
- [x] Authentication
- [x] Premium infrastructure
- [ ] Discovery drawer (in progress)

### Phase 2: Validation (Next 3 months)
- [ ] Enable premium gate
- [ ] Public theme selector
- [ ] 50+ words
- [ ] Share cards
- [ ] Marketing launch

### Phase 3: Growth (6-12 months)
- [ ] 100+ words
- [ ] Collection view
- [ ] Achievements
- [ ] Subscription tier (if justified)
- [ ] Mobile apps

### Phase 4: Scale (12+ months)
- [ ] Expansion packs
- [ ] Etymology trees
- [ ] B2B/education
- [ ] Physical exhibitions

---

## 16. Immediate Action Items

### This Week
1. **Enable theme selector** — Remove feature flag, it's polished
2. **Audio QA pass** — Verify all 30 words before marketing
3. **Complete discovery drawer** — Finish filtering integration

### This Month
1. **Premium gate decision** — Stakeholder signoff on timing
2. **RevenueCat verification** — Ensure offerings configured
3. **Content pipeline** — Define sustainable creation process
4. **Cache invalidation** — Add manual purge after admin edits

### Before Marketing Push
1. All audio verified
2. Premium gate enabled
3. Discovery drawer complete
4. 50+ words in library
5. Share functionality working

---

## 17. Key Metrics to Track

### Engagement
- Words explored per session
- Session duration
- Return rate (7-day, 30-day)

### Conversion
- Anonymous → Signed in (target: 20%)
- Signed in → Premium (target: 5-10%)

### Quality
- Audio skip rate
- Feedback submission rate
- Error rate

---

## 18. Files & Architecture Reference

```
journey/
├── app/                    # Next.js App Router
│   ├── admin/              # Admin dashboard
│   ├── word/[slug]/        # Word experience
│   └── layout.tsx          # Root with providers
├── components/
│   ├── home/               # Globe, discovery
│   ├── word/               # 7 experience layers
│   ├── ExplorationProvider # State management
│   └── ThemeProvider       # Theme context
├── data/                   # Word content
├── lib/                    # Services & utilities
├── docs/                   # Product documentation
└── supabase/migrations/    # Database schema
```

---

## Document History

| Date | Author | Changes |
|------|--------|---------|
| 2026-01-27 | Product Audit | Initial comprehensive analysis |

---

*This document should be updated quarterly or after major releases.*
