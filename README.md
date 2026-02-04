# The Journey

**Transform etymology from dry reference into immersive experience — each word becomes a world you travel through.**

The Journey is a premium, curated etymology app where words don't have origins; they have *journeys* across continents, centuries, and cultures. Positioned as "knowledge-as-luxury" — closer to an art book or museum exhibition than a dictionary.

**Live:** [etymology.life](https://www.etymology.life)

---

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Required Environment Variables

| Variable | Service | Purpose |
|----------|---------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase | Database and auth |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase | Client-side access |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase | Admin/server access |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog | Analytics |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog | Analytics host |

---

## Project Stats (February 2026)

| Metric | Count |
|--------|-------|
| Words in collection | 302 |
| Word batches | 29 |
| Language histories | 2 (Sanskrit, Persian) |
| Routes (app pages) | 324 static + dynamic |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.1.4 (App Router, Turbopack) |
| UI | React 19.2.3 |
| Styling | Tailwind CSS 4, PostCSS |
| Animation | Framer Motion 12.29 + GSAP 3.14 |
| Maps/Viz | D3.js 7.9 + TopoJSON + Natural Earth projection |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth (email OTP) |
| Analytics | PostHog |
| Monetization | RevenueCat (built, currently disabled) |
| Video | Remotion 4.0 (reel generation) |
| Hosting | Vercel |

---

## Architecture

```
app/                          # Next.js App Router pages
  page.tsx                    # Home - interactive globe with floating words
  word/[slug]/                # Word experience - 7-layer scroll journey
  browse/                     # Browse all words - filterable grid
  cabinet/                    # Personal collection - explored words as museum artifacts
  language/[slug]/            # Language history - animated zone-based map
  languages/                  # All language histories index
  admin/                      # Admin dashboard (CRUD, flags, audio, feedback)
  privacy/                    # Privacy policy
  api/                        # API routes (admin-check, revalidation)

components/
  home/                       # Globe, bubbles, discovery drawer, intro sequence
  word/                       # Hero, hook, story, journey map, sound, relatives, meaning
  browse/                     # Cards, filters, language sections
  cabinet/                    # Grid, cards, milestones, empty states
  language/                   # LanguageHistoryMap (D3 zone-based map)
  share/                      # Share drawer + card renderer

data/
  words.ts                    # Main aggregator - imports all batches
  words-batch{2-31}.ts        # Word data in batches of ~10
  word-types.ts               # TypeScript interfaces for words
  language-types.ts           # TypeScript interfaces for languages
  languages/                  # Language history data (sanskrit.ts, persian.ts)
  slug-registry.txt           # Auto-generated deduplication index

lib/
  words.ts                    # Word query utilities
  daily-word.ts               # Daily word selection logic
  animations.ts               # GSAP animation helpers
  curated-journeys.ts         # Themed word collections
  supabase/                   # Supabase clients (admin, client, server)
  share/card-renderer.ts      # Share card image generation

scripts/
  generate-slug-registry.ts   # Creates slug deduplication index
  validate-words.ts           # Validates word data structure
  seed-words.ts               # Seeds Supabase from TypeScript data
```

---

## Key Features

### Word Experience (7 Layers)
Each word page is a cinematic scroll-through with: hero display in native script, a compelling hook, a 4-paragraph story, an animated journey map (D3 great-circle arcs), pronunciation with IPA, related words, and modern meaning.

### Language History
Animated zone-based maps showing how languages spread across the world through eras. Each language has 4-7 historical phases with radial gradient regions, playback controls, and tap-to-reveal tooltips on mobile.

### Cabinet of Curiosities
Personal collection of explored words displayed as museum artifacts with cultural color tinting and breathing glows.

### Interactive Globe
Home page features a 3D interactive globe with floating word bubbles. Includes curated journeys accessible through a discovery drawer.

---

## NPM Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run words:check` | Validate all words + generate slug registry |
| `npm run words:registry` | Generate slug-registry.txt |
| `npm run words:validate` | Validate word entries for errors |
| `npm run remotion:studio` | Open Remotion video editor |
| `npm run remotion:render` | Render journey reel video |

---

## Adding Content

### New Word
See `CLAUDE.md` for detailed workflow. Quick version:
1. Check `data/slug-registry.txt` for existing slugs
2. Create entry in a `data/words-batch{N}.ts` file
3. Import and spread into `data/words.ts`
4. Run `npm run words:check` to validate
5. Run `npm run build` to verify

### New Language History
1. Create `data/languages/{slug}.ts` following the `LanguageHistory` interface
2. Add 4-7 phases with regions (coordinates, radius, dominance)
3. Import and export in `data/languages/index.ts`
4. Run `npm run build` to verify

---

## Documentation

All project documentation lives in `/docs/`. See [`docs/INDEX.md`](docs/INDEX.md) for a categorized guide.

| Document | Purpose |
|----------|---------|
| `CLAUDE.md` | Development workflow and conventions |
| `docs/INDEX.md` | Documentation table of contents |
| `docs/PRODUCT_VISION.md` | Core philosophy and experience design |
| `docs/BACKLOG.md` | Feature roadmap (shipped, planned, anti-patterns) |
| `docs/DESIGN_LANGUAGE.md` | Visual design system |

---

## Design Principles

1. **Content IS the reward** — never build meta-games around content
2. **The user is a traveler, not a reader** — everything flows like water
3. **Depth over breadth** — 302 deeply researched words beats 10,000 shallow definitions
4. **Museum curator voice** — no streaks, badges, leaderboards, XP, or gamification
5. **Invitation, not obligation** — frame new content as gifts, not tasks
