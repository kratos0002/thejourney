# Language History Feature — Structured Backlog

> **Vision**: Bring the same cinematic, map-driven storytelling we use for individual words to entire languages. Show how Sanskrit, Persian, Arabic, and other languages spread across the world through conquest, trade, and religion.

---

## Why This Feature

We've already proven the core concept: **geographic journeys make etymology memorable**. The JourneyMap component transforms abstract word histories into visceral experiences—watching a word travel from Arabia to Venice to London creates spatial memory that sticks.

Languages are just macro-scale word journeys. They spread through the same forces (trade routes, empires, religious expansion) but across regions rather than discrete points. If users love watching "coffee" travel from Yemen to Vienna, they'll love watching Arabic spread from a desert peninsula to 26 countries.

### Strategic Value

1. **Content leverage**: One language history page connects dozens of word pages (all Arabic-origin words link to Arabic history)
2. **SEO opportunity**: "History of the Arabic language" is a high-intent search query
3. **Differentiation**: No other etymology resource offers animated language spread visualization
4. **Retention hook**: Language histories create "aha" moments that bring users back

---

## Milestone 1: Foundation (MVP) ✅ SHIPPED

**Goal**: Ship one complete language history page (Sanskrit) with zone-based map visualization.

**Status**: Shipped February 2026. Sanskrit + Persian live. Map decluttered for mobile.

### 1.1 Data Model & Types ✅
- [x] Create `LanguageHistory` interface in `data/language-types.ts`
- [x] Create `LanguagePhase` interface for era-based progression
- [x] Create `LanguageRegion` interface for geographic zones
- [x] Add language family taxonomy (Indo-European, Semitic, Sino-Tibetan, etc.)

Types live in `data/language-types.ts`. See file for current interfaces.

### 1.2 First Language Data: Sanskrit ✅
- [x] Research and write Sanskrit language history (6 phases, 14 related words)
- [x] Define 6 major phases (Vedic → Classical → Buddhist Expansion → Cosmopolitan Peak → Decline → Modern)
- [x] Map geographic spread for each phase
- [x] Identify key events and transitions
- [x] Cross-reference with existing Sanskrit-origin words in collection

### 1.3 Language History Map Component ✅
- [x] Fork `JourneyMap.tsx` → `LanguageHistoryMap.tsx`
- [x] Replace point-and-arc rendering with zone/region rendering (radial gradients)
- [x] Implement phase-based animation (regions glow and expand via GSAP)
- [x] Add era timeline (clickable phases on desktop, dot stepper on mobile)
- [x] Support multiple simultaneous regions per phase
- [x] Tap-to-reveal region labels on mobile (tooltip on tap, always-visible on desktop)
- [x] Playback controls (play/pause, prev/next, speed)
- [x] Keyboard controls (space, arrows, escape)
- [x] Swipe navigation on mobile

### 1.4 Language Page ✅
- [x] Create `/language/[slug]/page.tsx` route with `generateStaticParams`
- [x] Design page layout (hero → story → map → related words)
- [x] Phase detail card below map (context, events, regions)
- [x] Link to related words from collection
- [x] "Words from this language" section with links to `/word/[slug]`

### 1.5 Navigation & Discovery (Partial)
- [ ] Add "Language Histories" section to discovery drawer
- [ ] Link from word pages to their source language history
- [x] Created `/languages` index page with museum-style cards

### 1.6 Mobile Optimization ✅ (added post-launch)
- [x] Compact dot stepper replaces wrapping timeline buttons on mobile
- [x] Region labels hidden on mobile, replaced with tap-to-reveal tooltips
- [x] Reduced circle sizes (radius multiplier 15→8) and tighter gradients
- [x] Reduced glow filter (stdDeviation 8→3) for less visual noise
- [x] Zoom buttons hidden on mobile (pinch-to-zoom is native)
- [x] Playback controls slimmed (reset + speed hidden on mobile)

---

## Milestone 2: Core Languages & Map Evolution

**Goal**: Build out remaining core languages and evolve the map based on research learnings.

### 2.1 Persian Language History ✅
- [x] Research Persian spread (Old → Middle → New Persian) — 7 phases
- [x] Map Achaemenid → Sasanian → Islamic → Mughal → Modern phases
- [x] Show peak as lingua franca (Turkey to India)
- [x] Cross-reference existing Persian-origin words (18 words linked)

### 2.2 Arabic Language History
- [ ] Research Arabic spread with Islamic expansion
- [ ] Map pre-Islamic → Conquest → Golden Age → Modern phases
- [ ] Show current 26-country reach
- [ ] Cross-reference existing Arabic-origin words

### 2.3 Map UX Evolution (from research — see "Learnings" section below)
- [ ] **Scrollytelling integration** — Scroll position drives era transitions (research shows highest retention)
- [ ] **Flow lines** — Animated migration/diffusion paths between regions (stroke-dasharray technique)
- [ ] **Soft-edge territory polygons** — Replace circles with semi-transparent polygons for geographically accurate zones
- [ ] **Small multiples view** — Optional toggle to compare 2+ eras side-by-side
- [ ] **Focus+context** — Dim (don't hide) non-active regions; highlight active era while maintaining geographic orientation
- [ ] Add historical trade routes as context layer (Silk Road, Spice Routes)

### 2.4 Cross-linking
- [ ] Link from word pages to their source language history ("Learn about Sanskrit →")
- [ ] Auto-generate "Related Words" on language pages by filtering `allWords` by language field
- [ ] Add `languageSlug` field to word entries that have a language history page

---

## Milestone 3: Language Family Trees ← RESEARCH COMPLETE, READY TO BUILD

**Goal**: Add a hierarchical layer ABOVE individual languages. Show how Sanskrit, Persian, Greek, Latin, and English all descend from Proto-Indo-European. Create a 3-level navigation: Family Trees → Languages → Words.

**Research**: See `/docs/research/LANGUAGE_FAMILY_TREE_RESEARCH.md` for full findings.

### 3.1 Data Model & Tree Structure
- [ ] Expand `LanguageFamilyNode` interface in `language-types.ts` (nested tree with level, status, classification)
- [ ] Create `data/language-families/` directory for family tree data files
- [ ] Build Indo-European tree data (10 branches, sub-branches, ~20 language nodes)
- [ ] Build Afro-Asiatic tree data (Semitic branch, Arabic)
- [ ] Wire word counts to tree nodes (how many of 302 words trace through each branch)
- [ ] Connect existing language histories (Sanskrit, Persian) to their tree positions

### 3.2 Family Tree Pages
- [ ] Create `/families` index page with family cards (museum-style, matching `/languages`)
- [ ] Create `/family/[slug]` route with `generateStaticParams`
- [ ] Breadcrumb navigation: All Families → Indo-European → Indo-Iranian → Sanskrit → Word
- [ ] Family detail page: hero + narrative + interactive tree + member languages
- [ ] Handle size asymmetry (IE has ~270 words, others have 3-8)

### 3.3 Tree Visualization (Phase 1: Collapsible Dendrogram)
- [ ] Create `LanguageFamilyTree` component using D3 hierarchy + tree layout
- [ ] Collapsible nodes: expand/collapse branches on click
- [ ] Color-code by branch (Indo-Iranian, Germanic, Italic, etc.)
- [ ] Node styling: living (solid), extinct (dimmed), reconstructed (dashed)
- [ ] Word count badges on nodes showing content available
- [ ] Click language node → navigate to `/language/[slug]` if it exists
- [ ] Mobile: vertical tree with tap to expand, or drill-down pattern

### 3.4 Tree Visualization (Phase 2: Sunburst — Future)
- [ ] D3 zoomable sunburst as hero visualization on `/families`
- [ ] Root at center, branches radiate outward
- [ ] Arc sizes encode word count per branch
- [ ] Tap to drill in, tap center to back out
- [ ] Luxury aesthetic: dark background, constellation feel

### 3.5 Cross-Family Features (Future)
- [ ] Cross-family arcs showing loanword paths (Arabic → Latin → English)
- [ ] "View on Tree" from word pages highlighting the word's journey through the tree
- [ ] "Cognate explorer": related words across IE languages
- [ ] "Shared roots": PIE roots that became words in multiple languages

### 3.6 Additional Language Histories
- [ ] Greek (Ancient → Koine → Byzantine → Modern)
- [ ] Latin (Classical → Vulgar → Romance split)
- [ ] Proto-Indo-European (reconstruction, theoretical homeland)

### Key Research Findings (from LANGUAGE_FAMILY_TREE_RESEARCH.md)

**Visualization**: Collapsible dendrogram for explorer view (Phase 1), zoomable sunburst for hero (Phase 2). Sunburst naturally handles mobile (2 levels at a time, tap to zoom).

**Data**: 5-8 language families cover all 302 words. Indo-European dominates (~250-270 words). 4-level depth is the sweet spot (family → branch → sub-branch → language).

**Loanwords**: ~24.2% of any language's vocabulary is borrowed. The tree alone can't capture horizontal transmission — need cross-family arcs overlay. This is actually the most interesting part for etymology.

**UX**: Drill-down with persistent breadcrumbs. On mobile, show only parent as back button. Sort families by content richness, not alphabetically.

---

## Milestone 4: Global Language Families

**Goal**: Expand beyond Indo-European to show world language diversity.

### 4.1 Semitic Languages
- [ ] Arabic (already done in M2)
- [ ] Hebrew (Ancient → Medieval → Modern revival)
- [ ] Aramaic (lingua franca of ancient Near East)

### 4.2 Sino-Tibetan Languages
- [ ] Chinese (Classical → regional varieties → Mandarin standardization)
- [ ] Show character system evolution

### 4.3 Other Major Families
- [ ] Austronesian (Malay, Indonesian, Tagalog spread across Pacific)
- [ ] Niger-Congo (Bantu expansion across Africa)
- [ ] Dravidian (Tamil, Telugu — pre-Indo-European India)

### 4.4 World Language Map
- [ ] Create global overview showing all language families
- [ ] Color-code by family
- [ ] Click family → see member languages
- [ ] "Languages of the Silk Road" curated journey

---

## Milestone 5: Personalization & Learning

**Goal**: Connect language histories to the Language Biography feature.

### 5.1 Language Biography Integration
- [ ] Let users mark languages they connect to
- [ ] Personalized language history suggestions
- [ ] "Your language contributed X words to English"
- [ ] Show user's languages on the global family map

### 5.2 Learning Features
- [ ] "Guess the spread" — predict where language went next
- [ ] Spaced repetition for language history facts
- [ ] Quiz: "Which language family does X belong to?"
- [ ] Connection reveals: "Sanskrit and English are cousins"

### 5.3 Cabinet Integration
- [ ] Add "Languages Explored" section to cabinet
- [ ] Show language family coverage (% of IE languages explored)
- [ ] Milestone: "You've explored 3 Semitic languages"

---

## Technical Considerations

### Map Rendering — Current Implementation (M1)

**JourneyMap (words)**: Points connected by great-circle arcs, sequential animation, single path.

**LanguageHistoryMap (languages)**: Radial gradient circles at coordinates, phase-based animation, multiple simultaneous regions per phase. Uses D3 + GSAP + Natural Earth projection.

**Key implementation decisions made**:
- Radial gradients (not circles or choropleth) — shows fuzzy boundaries naturally
- Tighter 4-stop gradient (0%, 50%, 85%, 100%) concentrates color in center
- Small solid center dots as anchor points for each region
- Invisible hit areas (min 30px) for touch targets
- Responsive radius multiplier: 8 (mobile) / 10 (desktop)

**Evolution path** (based on research, for M2+):
1. **Current**: Radial gradient circles ← we are here
2. **Next**: Semi-transparent polygons with soft/blurred edges where languages overlap
3. **Future**: Scrollytelling-driven transitions + flow lines for migration routes

### Map Mobile Design Patterns — What We Learned

Research from cartography and UX studies converged on these principles:

1. **Progressive disclosure at max 2 levels** (NNGroup). We implemented: Level 1 = map with colored zones + dot stepper; Level 2 = tap region for tooltip.
2. **Dim, don't hide context** — when focusing on a region, reduce opacity of surroundings rather than removing them. Maintains geographic orientation.
3. **Zoom-dependent detail** — labels at overview zoom clutter; show them on tap/zoom only.
4. **Collapsible controls** — bottom-sheet panels, hide non-essential buttons. We hide zoom, reset, speed on mobile.
5. **44x44px minimum touch targets** — hit areas are invisible but sized for thumbs.
6. **Start small, scale up** — build from 320px, add complexity at breakpoints.

### Data Storage

**Current**: TypeScript files in `data/languages/`. Simple, consistent with word storage.
**Future (M3+)**: Migrate to Supabase when we need queryable word↔language relationships.

### Rendering Stack (Recommended for M2+)

Research suggests this optimal stack for language spread maps:
```
Base Map:       Mapbox GL JS or MapLibre (vector tiles, style control)
Data Rendering: deck.gl (GPU-accelerated polygons, smooth transitions)
Animation:      D3.js transitions + time slider
Narrative:      Scrollama.js (scroll-driven era progression)
```

Current stack (D3 + GSAP + topojson) works well for M1-M2 scope. Consider upgrading when we need:
- 10+ languages with large polygon datasets
- Smooth territory morphing between eras
- Interactive flow line animations

---

## Design Principles

Inherit from the main backlog, plus:

1. **Zones, not borders**: Languages spread like water, not like nations. Show soft gradients, not hard lines.

2. **Eras, not years**: Group history into meaningful phases (4-6 per language). Don't overwhelm with dates.

3. **Why, not just where**: Each phase should explain WHY the language spread (empire, religion, trade).

4. **Connection to words**: Always link back to specific words. "Arabic spread here, and brought words like 'algorithm' and 'algebra'."

5. **Respect complexity**: Languages influence each other. Persian borrowed from Arabic; Arabic borrowed from Persian. Show these flows.

6. **Living languages**: Don't treat languages as museum pieces. Show modern speaker counts, current relevance.

---

## Learnings & Research Summary (February 2026)

### What the Research Says About Language Map Visualization

We conducted extensive research on how linguistic atlases, historical empire visualizations, and mobile-first map design work. Key findings:

#### Best Techniques for Showing Language Era Transitions

| Technique | Effectiveness | Best For |
|-----------|--------------|----------|
| **Scrollytelling** | Highest retention & comprehension (Penn State 2025 study) | Guided narrative experience — scroll drives era transitions |
| **Animated transitions** | Users prefer it; better for showing spread/diffusion | Default experience; conveys dynamism of language spread |
| **Small multiples** | Faster + more accurate for comparisons | Optional "Compare Eras" analytical mode |
| **Time slider** | Good for free exploration after guided narrative | Post-narrative exploration |
| **Flow lines** | Shows migration/diffusion routes visually | Major trade/conquest paths |
| **Heatmaps** | Shows bilingual zones and gradual transitions naturally | Areas of language contact |
| **Choropleth** | Clear territory boundaries | Political/administrative language zones |

**Key insight**: Animation vs. small multiples research shows users *prefer* animation (more engaging) but small multiples are *faster and more accurate* for comparisons. **Use animation as default, offer small multiples as toggle.**

#### Mobile-First Map Design (from academic cartography + industry)

1. Mobile screens are not just smaller — they show a smaller *viewport*, meaning fewer visual cues. Demands fundamentally different styling.
2. **Maximum 2 disclosure levels** (NNGroup). 3+ levels cause users to get lost between views.
3. Use **relative units** (em/rem) not fixed pixels. Base labels at 0.875rem mobile, 1rem desktop.
4. Thematic maps have fixed aspect ratios and unevenly distributed data — rescaling to mobile can make spatial units too small. Keep entire map visible for patterns, allow zoom for detail.
5. A 2025 Penn State study found simpler scrollytelling maps are more accessible for mobile users, who spend less time on maps than desktop users.

#### What Causes Clutter on Language Maps

Ranked by impact (what we fixed in M1.6):
1. **Showing all eras simultaneously** — single biggest source of clutter. Show one era at a time.
2. **Always-visible labels** — text labels overlap when regions cluster. Hide on mobile, reveal on interaction.
3. **Large fuzzy circles** — oversized gradients bleed into each other. Tighter gradient stops + smaller radius.
4. **Multiple visible control groups** — zoom, playback, timeline, hints all competing for space.
5. **Excessive glow filters** — stdDeviation 8+ creates visual noise, especially on dense phases.

#### Notable Examples We Studied

- **Business Insider Indo-European animation** — 8,000 years in 90 seconds, based on Quentin Atkinson's phylogenetic research
- **Oreate AI Historical Territorial Changes** — 4000 BC to 2017, event annotation + spatiotemporal navigation
- **Alberto Lucas Lopez "A World of Languages"** (Visual Capitalist) — 7,102 languages in one visualization
- **UNESCO World Atlas of Languages** — color-coded endangerment overlays + revitalization mapping
- **Global Linguistic Distributions Dataset (2025)** — first openly accessible, fully interoperable geographic dataset of language speaker areas

#### Bugs We Hit and Fixed

| Bug | Cause | Fix |
|-----|-------|-----|
| Flickering text on language page | `AmbientBackground` component designed for 7-section word pages; language page has different section structure | Removed AmbientBackground from LanguagePageClient |
| TypeScript error on `svg.select("defs")` | D3 selection type inference too broad for `BaseType` | Added explicit generic: `svg.select<SVGDefsElement>("defs")` |
| Timeline buttons wrapping to 3 rows on mobile | `flex-wrap` on 6-7 era buttons | Replaced with dot stepper on mobile, kept buttons on desktop |

### Design Decisions Log

| Decision | Options Considered | Chosen | Why |
|----------|-------------------|--------|-----|
| Zone rendering | Circles, Choropleth, Heatmap/Gradient | Radial gradients | Shows fuzzy boundaries naturally; simpler than polygons; linguistically more accurate than hard edges |
| Mobile labels | Always show (small), Always hide, Tap-to-reveal | Tap-to-reveal | Eliminates overlap clutter; 2-level disclosure matches NNGroup research |
| Timeline on mobile | Wrap buttons, Horizontal scroll, Dot stepper | Dot stepper + era name | Minimal vertical space; tappable; shows progress visually |
| Map height on mobile | Fixed 350px, Aspect ratio 0.55, Taller ratio 0.65 | 0.65 ratio (max 400px) | More vertical space for regions; compensates for removed labels |
| Controls on mobile | Show all, Hide all, Selective hide | Selective: hide zoom/reset/speed, keep playback | Pinch-to-zoom native; playback essential; speed/reset are power-user features |

---

## Success Metrics

### M1 (MVP) ✅
- [x] Sanskrit page live with animated map
- [x] Persian page live with animated map
- [x] `/languages` index page live
- [x] Mobile-optimized map (decluttered, tap-to-reveal)
- [ ] 3+ minutes average time on page (tracking needed)
- [ ] Links working from Sanskrit-origin word pages (M2 cross-linking)

### M2 (Core Languages)
- [ ] Arabic language history live (3rd language)
- [ ] Word→language cross-links working
- [ ] Scrollytelling integration for map
- [ ] SEO: ranking for "history of [language]" queries

### M3+ (Growth)
- [ ] 10+ language histories
- [ ] Language family tree driving exploration
- [ ] Language Biography adoption rate

---

## Open Questions

1. **How do we show language death?** Some languages (Latin, Sanskrit) "died" as native languages but live on in descendants or liturgical use. How to visualize?

2. **Historical vs. modern boundaries?** The Roman Empire isn't on modern maps. Do we show historical empires as context?

3. **Dialect continuum?** Arabic "dialects" are often mutually unintelligible. Do we treat them as one language or many?

4. **Reconstructed languages?** Proto-Indo-European is theoretical. How do we visualize something we've never heard?

5. **Controversial origins?** Some language origins are disputed (PIE homeland debates). How do we handle scholarly disagreement?

---

## References

### Code
- LanguageHistoryMap: `/components/language/LanguageHistoryMap.tsx`
- Language types: `/data/language-types.ts`
- Language data: `/data/languages/` (sanskrit.ts, persian.ts, index.ts)
- Language page: `/app/language/[slug]/` (page.tsx, LanguagePageClient.tsx)
- Languages index: `/app/languages/` (page.tsx, LanguagesPage.tsx)
- Word JourneyMap (reference): `/components/word/JourneyMap.tsx`

### Research Sources
- Visual learning research: `/docs/research/VISUAL_GEOGRAPHIC_LEARNING_RESEARCH.md`
- Main backlog: `/docs/BACKLOG.md`
- UNESCO World Atlas of Languages: https://en.wal.unesco.org
- Global Linguistic Distributions Dataset (2025): Nature Scientific Data
- Mobile Thematic Map Design (2025): Taylor & Francis
- Penn State GeoGraphics Lab scrollytelling study (2025)
- NNGroup Progressive Disclosure guidelines
- Robertson et al. "Animation vs Small Multiples" effectiveness study

---

*Created: February 2026*
*Status: M1 shipped, M2 in progress*
*Last updated: February 2026*
