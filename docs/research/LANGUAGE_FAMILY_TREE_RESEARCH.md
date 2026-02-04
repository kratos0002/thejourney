# Language Family Tree Research

> **Date**: February 2026
> **Status**: Complete
> **Purpose**: Research the language family tree concept as a hierarchical navigation layer above individual languages
> **Feeds into**: LANGUAGE_HISTORY_BACKLOG.md (M3), BACKLOG.md

---

## The Concept

A 3-level hierarchy for the app:

```
Language Family Tree (Indo-European, Afro-Asiatic, Sino-Tibetan...)
  └── Individual Language (Sanskrit, Persian, Arabic, Latin...)
        └── Words (algorithm, karma, paradise...)
```

This adds a "zoom-out" layer that shows how individual languages relate to each other genealogically, and how words travel not just between cities but between entire language families.

---

## 1. How Language Family Trees Work

### The Hierarchy

Linguistic classification follows a structure analogous to biological taxonomy:

```
Family → Branch → Sub-branch/Group → Language → Dialect/Variety
```

Real trees vary in depth. Glottolog (the most comprehensive open-access database) classifies the world's languages into **430 genealogical families** (246 multi-member, 184 isolates). Trees can reach **17 levels deep** (Austronesian) or as few as **2-3 levels** (smaller families).

**For this app, 4 levels is the sweet spot**:

1. **Family** (Indo-European, Afro-Asiatic, Sino-Tibetan)
2. **Branch** (Indo-Iranian, Germanic, Italic, Semitic)
3. **Sub-branch** (Indo-Aryan, Iranian, West Germanic, Romance)
4. **Language** (Sanskrit, Persian, English, Latin)

This avoids overwhelming depth while telling the genealogical story.

### The Major Language Families

The six largest by language count (Ethnologue data):

| Family | Languages | Speakers | Key Branches |
|---|---|---|---|
| **Niger-Congo** | ~1,500 | ~700M | Bantu, Atlantic, Mande |
| **Austronesian** | ~1,257 | ~386M | Malayo-Polynesian, Formosan |
| **Trans-New Guinea** | ~480 | ~3.5M | Multiple sub-families |
| **Sino-Tibetan** | ~450 | ~1.3B | Sinitic (Chinese), Tibeto-Burman |
| **Indo-European** | ~449 | ~3.5B | 10 major branches |
| **Afro-Asiatic** | ~391 | ~500M | Semitic, Berber, Chadic, Cushitic |

Other notable: **Dravidian** (85 langs, Tamil/Telugu), **Uralic** (~38, Finnish/Hungarian), **Turkic** (~40), **Japonic** (Japanese + Ryukyuan), **Koreanic** (Korean).

---

## 2. Indo-European: The App's Centerpiece

Since Sanskrit, Persian, Latin, Greek, and English are all Indo-European, this family will dominate. The 10 major branches:

```
Proto-Indo-European (~4500-2500 BCE, Pontic-Caspian Steppe)
│
├── Anatolian (EXTINCT: Hittite, Luwian) — earliest attested
├── Tocharian (EXTINCT: Tocharian A, B) — Tarim Basin
│
├── Indo-Iranian
│   ├── Indo-Aryan → Sanskrit, Hindi, Bengali, Urdu, Punjabi, Marathi
│   ├── Iranian → Avestan, Old Persian → Farsi, Kurdish, Pashto
│   └── Nuristani
│
├── Hellenic → Ancient Greek → Modern Greek
│
├── Italic
│   ├── Latin → Romance (French, Spanish, Portuguese, Italian, Romanian)
│   └── Osco-Umbrian (extinct)
│
├── Celtic
│   ├── Goidelic (Irish, Scots Gaelic, Manx)
│   └── Brythonic (Welsh, Breton, Cornish)
│
├── Germanic
│   ├── West Germanic (English, German, Dutch, Frisian)
│   ├── North Germanic (Swedish, Norwegian, Danish, Icelandic)
│   └── East Germanic (EXTINCT: Gothic)
│
├── Balto-Slavic
│   ├── Baltic (Lithuanian, Latvian)
│   └── Slavic
│       ├── East (Russian, Ukrainian, Belarusian)
│       ├── West (Polish, Czech, Slovak)
│       └── South (Bulgarian, Serbian, Croatian)
│
├── Armenian
└── Albanian
```

**Key story**: Sanskrit and Persian are **siblings** — both under Indo-Iranian. English is a **distant cousin** under Germanic. This genealogical relationship is invisible on individual language pages but becomes clear on the tree.

---

## 3. Coverage for 302 Words

Estimated distribution across families:

| Family | Est. Words | Key Languages | Priority |
|---|---|---|---|
| **Indo-European** | ~250-270 | Sanskrit, Persian, Latin, Greek, English, French, German | P0 — must build |
| **Afro-Asiatic** | ~15-25 | Arabic (algorithm, algebra, alchemy, alcohol, zero) | P0 — second tree |
| **Dravidian** | ~3-5 | Tamil (catamaran, curry, through Sanskrit contact) | P1 |
| **Sino-Tibetan** | ~3-8 | Chinese (tea, typhoon, ketchup) | P1 |
| **Japonic** | ~2-4 | Japanese (tsunami, karate, origami) | P2 |
| **Austronesian** | ~2-3 | Malay/Polynesian (bamboo, taboo) | P2 |
| **Niger-Congo** | ~2-3 | Bantu (ubuntu, safari) | P2 |
| **Turkic** | ~1-2 | Turkish (yogurt, kiosk) | P2 |

**5-8 families cover the current 302 words.** Indo-European dominates overwhelmingly.

---

## 4. Visualization Approaches

### Ranked for This App

#### A. Zoomable Sunburst (Hero visualization — RECOMMENDED)

D3's `d3.partition` with polar coordinates. Root at center, branches radiate outward. Only shows 2 levels at a time with click-to-zoom.

**Why it fits**:
- Visually stunning — feels like a galaxy/constellation (luxury aesthetic)
- Handles size asymmetry naturally (bigger arc = more content in that branch)
- Touch-friendly: tap to drill in, tap center to back out
- Progressive disclosure built in (2 levels visible at a time)
- Arc sizes can encode word count per branch

**Reference**: [D3 Zoomable Sunburst](https://observablehq.com/@d3/zoomable-sunburst)

#### B. Collapsible Dendrogram (Explorer view — RECOMMENDED)

Horizontal or vertical tree with expand/collapse on click. Traditional "family tree" look.

**Why it fits**:
- Familiar mental model (everyone understands family trees)
- Best for showing deep relationships (Sanskrit ↔ Persian as siblings)
- Nodes link directly to existing `/language/[slug]` and `/word/[slug]` pages
- Supports zoom and pan

**Reference**: [Rob Schmuecker's D3 Collapsible Tree](https://gist.github.com/robschmuecker/7880033)

#### C. Network Graph (Word journey overlay)

Force-directed graph showing cross-family loanword paths. Not a tree — it's a graph that can show how words jump between unrelated families.

**Why it fits**:
- Essential for etymology (words don't respect family boundaries)
- Shows Arabic → Latin → English crossing from Afro-Asiatic to Indo-European
- Complements the tree by showing horizontal transmission

**Reference**: Stanford "Visualizing Etymology" project

#### D. Scrollytelling Tree (Narrative layer)

Scroll-driven progressive build of the tree. Proto-Indo-European appears first, then branches split off as user scrolls through time.

**Why it fits**:
- Matches "The Journey" brand perfectly
- Highest retention per research (Penn State 2025)
- The tree literally grows as you scroll through millennia
- Premium content piece

### Mobile vs Desktop

| Approach | Mobile | Desktop |
|---|---|---|
| **Sunburst** | Natural fit — tap to zoom, 2 levels visible | Full sunburst with hover tooltips |
| **Dendrogram** | Needs pinch-zoom + pan, or drill-down pattern (one level per screen) | Full collapsible tree |
| **Network graph** | Force-directed is hard on mobile — use simplified version | Full interactive graph |
| **Scrollytelling** | Best on mobile (natural scroll gesture) | Also great, with wider canvas |

**Recommendation**: Sunburst as primary mobile visualization. Dendrogram as optional "full tree" on larger screens.

---

## 5. The Loanword Complication

### Vertical vs. Horizontal Transmission

Trees show **vertical inheritance** (parent → child language). But words often travel **horizontally** across unrelated families:

```
Sanskrit "sharkara" (sugar)
  → Persian "shakar"              [Indo-Iranian siblings: vertical]
    → Arabic "sukkar"             [CROSS-FAMILY: IE → Afro-Asiatic]
      → Medieval Latin "succarum" [BACK: Afro-Asiatic → IE]
        → Old French "sucre"
          → English "sugar"
```

**Average borrowing rate: ~24.2%** of any language's vocabulary is borrowed (Loanword Typology project). Armenian borrowed so heavily from Iranian that it was initially misclassified as Indo-Iranian.

### Related Concepts

- **Sprachbund (Linguistic Area)**: Languages that share features through contact, not descent. The South Asian Sprachbund (Indo-Aryan + Dravidian) is relevant — shared retroflex consonants, SOV word order despite different families.
- **Wave Theory** (Schmidt, 1872): Alternative to tree model — innovations spread like waves, creating overlapping patterns that trees can't capture.
- **Wanderwörter**: Words that spread so widely they cross many family boundaries (tea/chai, coffee/qahwa, sugar/sukkar).

### Design Implication

The tree is the primary structure, but **cross-family arcs** drawn over it show where words jumped between unrelated languages. The tree is the backbone; the arcs tell the etymology story.

---

## 6. UX Patterns for Hierarchical Navigation

### Navigation Flow: Family → Language → Words

**Recommended: Drill-Down with Persistent Breadcrumbs**

```
[All Families] > Indo-European > Indo-Iranian > Indo-Aryan > Sanskrit > [Word: "Nirvana"]
```

On mobile: show only parent level as back button (`< Indo-Iranian`), full breadcrumb on scroll-up.

### Handling Size Asymmetry

Indo-European might have 270 of 302 words. Sino-Tibetan has 5.

Solutions:
- Sunburst arc sizes honestly represent content distribution
- Sort families by "content richness" (word count), not alphabetically
- Visual indicators: "42 words explored" badges set expectations before drilling in
- Sparse branches get "Coming Soon" state that invites future content

### Progressive Disclosure

- Show 2 levels in sunburst (built-in)
- Show 3 levels expanded in dendrogram, rest collapsible
- One level per screen on mobile (drill-down pattern with animated transitions)
- Curiosity drives deeper exploration

---

## 7. Proposed Page Structure

```
/families                     → Family index (sunburst hero + family cards)
/family/[slug]                → Family detail (e.g., Indo-European) with tree + narrative
/family/[slug]/[branch]       → Branch detail (optional deeper drill-down, future)
/language/[slug]              → Individual language (EXISTING)
/word/[slug]                  → Individual word (EXISTING)
```

### Breadcrumb Navigation

```
Home > Language Families > Indo-European > Indo-Iranian > Sanskrit > Karma
```

---

## 8. Data Model

### Recommended Structure

```typescript
interface LanguageFamilyNode {
  id: string;                    // "indo-european" or "ie-indo-iranian"
  name: string;                  // "Indo-Iranian"
  slug: string;                  // URL slug
  level: 'family' | 'branch' | 'sub-branch' | 'language';

  // Tree structure
  children?: LanguageFamilyNode[];
  parentId?: string;             // For flat/adjacency-list storage

  // Classification
  status: 'living' | 'extinct' | 'reconstructed';
  classification: 'established' | 'widely-accepted' | 'disputed';
  alternateNames?: string[];     // ["IE", "Indo-Germanic"]
  glottocode?: string;           // Glottolog ID

  // Metadata
  protoLanguage?: string;        // "Proto-Indo-European"
  approximateAge?: string;       // "~4500-2500 BCE"
  region?: string;               // "Pontic-Caspian Steppe"
  description?: string;          // Brief description for UI

  // App connections
  wordCount?: number;            // Words in collection from this branch
  languageSlugs?: string[];      // Links to /language/[slug] pages

  // Visualization
  displayColor?: string;         // Branch color for viz
}
```

### Handling Disputes

- **Established**: Solid lines in tree (Indo-European → Germanic)
- **Widely-accepted**: Normal lines with subtle indicator (Balto-Slavic as a group)
- **Disputed**: Dashed lines with tooltip (Altaic hypothesis)

Follow Glottolog's conservative approach: only show classifications with scholarly consensus.

---

## 9. Notable Inspirations

| Source | What It Does | Takeaway |
|---|---|---|
| **EtymologyExplorer** (etymologyexplorer.com) | 1.4M+ words, node-based graph visualization, "Family Explorer" | Graph viz for word journeys is proven |
| **LinguaVine** (linguavine.com) | Interactive tree of all human languages | Clean tree interface, gamification optional |
| **Language Explorer** (languageexplorer.space) | 50+ languages, PIE root tracing | Etymology + family tree combo works |
| **D3 Zoomable Sunburst** | Canonical hierarchical viz | Technical reference for our implementation |
| **Stanford Visualizing Etymology** | Radial graph of etymological networks | Cross-family visualization approach |
| **Wikipedia IndoEuropeanTree.svg** | Static 4-5 level tree | Content reference for depth |
| **Glottolog** | 430 families, 17 levels deep | Data source for classification |
| **Alberto Lucas Lopez / Visual Capitalist** | 7,102 languages in one visualization | Shows scale is possible with good design |

---

## 10. Implementation Recommendations

### Phase 1: Foundation (Data + Static Tree) — RECOMMENDED STARTING POINT

1. Expand `LanguageFamily` interface in `language-types.ts` to support nested tree
2. Create Indo-European family data with full branch mapping
3. Create `/families` index page with family cards
4. Create `/family/[slug]` pages with a collapsible D3 dendrogram
5. Wire breadcrumb navigation: Family → Language → Word
6. Connect existing 2 language histories + 302 words to tree nodes

### Phase 2: Interactive Sunburst

1. D3 zoomable sunburst as hero on `/families`
2. Arc sizes encode word count per branch
3. Tap to drill, tap center to back out
4. Mobile-optimized (works naturally)

### Phase 3: Cross-Family Word Journeys

1. Animated arcs showing loanword paths that cross family boundaries
2. "View on Tree" option from word pages
3. Highlight Wanderwörter that cross multiple families

### Phase 4: Scrollytelling Narrative

1. "The Story of Indo-European" as scroll-driven tree growth
2. Progressive reveal: PIE → branches → modern languages
3. Premium content piece embodying "knowledge-as-luxury"

---

## References

- [Glottolog 5.2](https://glottolog.org/) — Comprehensive language classification
- [Ethnologue - Largest Families](https://www.ethnologue.com/insights/largest-families/)
- [Indo-European languages (Wikipedia)](https://en.wikipedia.org/wiki/Indo-European_languages)
- [Sprachbund (Wikipedia)](https://en.wikipedia.org/wiki/Sprachbund)
- [D3 Hierarchy Module](https://d3js.org/d3-hierarchy)
- [D3 Zoomable Sunburst (Observable)](https://observablehq.com/@d3/zoomable-sunburst)
- [Rob Schmuecker's D3 Collapsible Tree](https://gist.github.com/robschmuecker/7880033)
- [React + D3 Dendrogram Guide](https://www.react-graph-gallery.com/dendrogram)
- [Stanford Visualizing Etymology](http://web.stanford.edu/~cdixit/html-main.html)
- [EtymologyExplorer](https://etymologyexplorer.com/)
- [LinguaVine](https://www.linguavine.com/)
- [Language Explorer](https://languageexplorer.space/)
- [Loanword Typology Project](https://en.wikipedia.org/wiki/Loanword)
- [Smashing Magazine - Breadcrumbs UX](https://www.smashingmagazine.com/2022/04/breadcrumbs-ux-design/)
- Penn State GeoGraphics Lab scrollytelling study (2025)

---

*Created: February 2026*
*Status: Complete*
*Next: Implementation in LANGUAGE_HISTORY_BACKLOG.md M3*
