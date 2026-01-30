# SEO Strategy Research for The Journey

## Research Question

**How should a content-rich etymology web app optimize for search engines, AI overviews, and social discovery — while maintaining its museum-quality brand?**

The Journey has ~200 word pages at `/word/[slug]`, each with original script, romanization, language of origin, a cultural hook, a multi-stop geographic journey, and pronunciation data. This research covers technical SEO, content strategy, structured data, and competitive positioning.

---

## Executive Summary

### Key Findings

1. **The app's existing SEO foundation is solid** — Sitemap, robots.txt, Open Graph images, PWA manifest, JSON-LD (WebSite + Article), and SSG with ISR are all properly configured. The main gaps are structured data depth, internal linking, and keyword-optimized metadata.

2. **DefinedTerm schema is the correct structured data type** — Merriam-Webster (the gold standard) uses `DefinedTerm`, `DefinedTermSet`, and `AudioObject`. The current Article schema should be replaced or augmented with DefinedTerm for word pages.

3. **Internal linking is the highest-impact lever** — Research shows pages with 40+ internal links achieve 4x the traffic of pages with 0-4 links. The Journey currently has minimal cross-linking between word pages. Language-of-origin hub pages and related-word sections would dramatically improve crawlability and topical authority.

4. **Long-tail etymology queries are low competition, high intent** — Patterns like "origin of [word]", "where does [word] come from", and "[word] etymology" have modest search volume individually but aggregate into significant traffic across 200 pages. These queries increasingly trigger AI Overviews.

5. **Generative Engine Optimization (GEO) is the 2026 frontier** — AI-powered search (Google AI Overviews, ChatGPT, Perplexity) now surfaces content based on structured data and direct-answer formatting. Content with structured data sees 3x improvement in AI citation rates.

6. **The Journey has strong competitive advantages** — No competitor visualizes word migration geographically, combines cultural hooks with pronunciation data, or offers interactive exploration. The 3D globe is a unique engagement mechanism that competitors lack entirely.

### Strategic Recommendations

| Priority | Recommendation | Impact |
|----------|----------------|--------|
| **P0** | Upgrade JSON-LD to DefinedTerm + BreadcrumbList | Schema accuracy, AI citation eligibility |
| **P0** | Optimize title/description templates for long-tail keywords | Direct ranking improvement for 200 pages |
| **P0** | Add canonical URLs via metadata alternates | Prevent duplicate content signals |
| **P1** | Build language-of-origin hub pages (`/origin/[language]`) | Internal linking hubs, topical authority |
| **P1** | Add "Related Words" section to word pages | Cross-linking, session depth, crawlability |
| **P1** | Fix metadata duplication between page.tsx and layout.tsx | Clean metadata chain |
| **P2** | Structure content for AI citation (direct-answer sentences) | GEO optimization |
| **P2** | Create browse/index pages for crawl discovery | Ensure all pages reachable in 3 clicks |
| **P2** | Add AudioObject schema for pronunciation data | Rich result eligibility |
| **P3** | Add `lastModified` from actual content dates (not build time) | More accurate sitemap signals |

---

## Current State Audit

### What's Working Well

- **Sitemap**: Dynamic generation covering all ~200 word pages with proper priorities
- **Robots.txt**: Admin routes blocked, public content allowed, sitemap referenced
- **Open Graph images**: Custom edge-rendered images for both root and individual word pages (1200x630, proper alt text)
- **PWA manifest**: Complete with multiple icon sizes
- **SSG + ISR**: Word pages statically generated at build, revalidated hourly or on-demand
- **Semantic HTML**: Proper `<main>`, `<header>`, `<section>`, `<h1>` hierarchy
- **JSON-LD**: WebSite schema at root, Article schema on word pages
- **Font optimization**: `next/font` with `display: "swap"` for performance
- **Performance monitoring**: Vercel Analytics + Speed Insights integrated

### Gaps Identified

| Gap | Severity | Detail |
|-----|----------|--------|
| Metadata duplication | Medium | `generateMetadata` defined in both `page.tsx` and `layout.tsx` for word routes |
| No canonical URLs | Low | Relies on Next.js automatic handling via `metadataBase` — explicit is better |
| Wrong schema type | Medium | Uses Article schema; DefinedTerm is more accurate for dictionary content |
| No BreadcrumbList schema | Medium | Missing navigational structured data |
| No AudioObject schema | Low | Pronunciation data exists but isn't schema-annotated |
| Generic title templates | High | Titles don't target long-tail search queries |
| No internal cross-linking | High | Word pages don't link to related words |
| No browse/hub pages | Medium | All word pages accessible only via globe or direct URL |
| `lastModified` uses build time | Low | Sitemap shows current date, not actual content modification date |

---

## Structured Data Strategy

### Current: Article Schema (word pages)

```json
{
  "@type": "Article",
  "headline": "Word Etymology & Origin",
  "description": "word.hook",
  "about": { "@type": "DefinedTerm", "name": "word.word" }
}
```

### Recommended: DefinedTerm + BreadcrumbList

```json
[
  {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "qahwa",
    "alternateName": "coffee",
    "description": "From the Arabic word for a dark, stimulating brew...",
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "The Journey — Word Origins",
      "url": "https://etymology.life"
    },
    "url": "https://etymology.life/word/coffee"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://etymology.life" },
      { "@type": "ListItem", "position": 2, "name": "coffee" }
    ]
  }
]
```

**Why DefinedTerm over Article**: Google's documentation and Merriam-Webster's implementation both confirm that `DefinedTerm` is the semantically correct type for dictionary/glossary entries. It signals to search engines that this is a term definition, not a blog post.

**AudioObject for pronunciation** (when pronunciation audio is available):
```json
{
  "@type": "AudioObject",
  "name": "Pronunciation of qahwa",
  "contentUrl": "https://etymology.life/audio/qahwa.mp3",
  "encodingFormat": "audio/mpeg",
  "inLanguage": "ar"
}
```

---

## Meta Tag Strategy

### Title Templates

Current: `{word.romanization} — The Journey`

Recommended templates (rotate based on word characteristics to avoid duplication):

| Pattern | Example | Target Query |
|---------|---------|-------------|
| `{slug} — Origin & Etymology \| The Journey` | `Coffee — Origin & Etymology \| The Journey` | "[word] etymology", "[word] origin" |
| `Where Does "{slug}" Come From? \| The Journey` | `Where Does "Ukulele" Come From? \| The Journey` | "where does [word] come from" |
| `{slug}: From {language} {romanization} \| The Journey` | `Coffee: From Arabic Qahwa \| The Journey` | "[word] meaning in [language]" |

Keep under 60 characters. Use `title.template` in root layout: `{ template: '%s | The Journey', default: 'The Journey — Where Every Word Began' }`.

### Description Templates

Current: Uses `word.hook` directly.

Recommended: Combine hook with search-optimized framing:

```
"Discover the origin of "{slug}" — from {language} {romanization}. {hook} Trace its journey from {first_stop} to {last_stop}."
```

Keep 150-160 characters. Each description must be unique.

---

## Long-Tail Keyword Strategy

### High-Value Query Patterns

| Pattern | Monthly Volume (est.) | Competition | Example |
|---------|----------------------|-------------|---------|
| `origin of [word]` | 500-5,000 | Low | "origin of coffee" |
| `where does [word] come from` | 200-2,000 | Low | "where does ukulele come from" |
| `[word] etymology` | 100-1,000 | Low | "algorithm etymology" |
| `what does [word] mean in [language]` | 100-500 | Very Low | "what does karate mean in Japanese" |
| `why is it called [word]` | 200-1,000 | Low | "why is it called a guitar" |
| `[word] word origin` | 100-500 | Low | "tsunami word origin" |

### Content Optimization

Each word page should naturally answer these query patterns within its content:

1. **First sentence**: Direct answer — "The word [slug] comes from [language] [romanization], meaning [brief meaning]."
2. **H1/H2 structure**: Use headings that match search intent — "The Journey of [word]", "Where [word] Comes From"
3. **Hook placement**: The cultural hook should appear early, formatted as an extractable sentence for AI Overviews (under 25 words)
4. **Journey narrative**: Substantive multi-paragraph content prevents thin content signals

---

## Internal Linking Strategy

### Current State

Word pages are isolated — reachable only via the 3D globe or direct URL. No cross-linking between related words.

### Recommended Architecture

```
Home (/)
├── Word Pages (/word/[slug]) — 200 pages
│   └── Related Words section (5-10 cross-links per page)
├── Language Hub Pages (/origin/[language]) — ~15 pages  [NEW]
│   └── Lists all words from that language origin
├── Browse Pages (/words or /browse) — alphabetical index  [NEW]
│   └── HTML sitemap-style listing of all words
└── Journey/Collection Pages (/journey/[theme]) — curated  [FUTURE]
    └── Themed groupings (Silk Road words, Food words, etc.)
```

### Implementation Priority

1. **Related Words section on word pages** (P1) — Use existing `WordRelatives` component data or add language/region-based recommendations. Target: 5-10 internal links per word page.

2. **Language hub pages** (P1) — e.g., `/origin/arabic` lists all Arabic-origin words with brief hooks. These serve as topical authority hubs and crawl entry points.

3. **Browse index** (P2) — Simple alphabetical listing of all words. Ensures every page is reachable within 2 clicks from home.

### SEO Impact

Research shows internal linking is the single most impactful SEO lever for dictionary sites:
- Pages with 40+ internal links achieve **4x the traffic** of pages with 0-4 links
- Every word page should be reachable within **3 clicks** from the homepage
- Hub pages create **topical clusters** that signal domain authority to search engines

---

## Competitive Analysis

### Competitor Comparison

| Feature | The Journey | Etymonline | Wiktionary | Merriam-Webster |
|---------|-------------|------------|------------|-----------------|
| Visual journey maps | Yes (unique) | No | No | No |
| Cultural hooks | Yes (unique) | No | Partial | Partial |
| Interactive exploration | 3D globe (unique) | No | No | No |
| Original script display | Yes | Rare | Yes | No |
| Pronunciation data | Yes | No | IPA only | Audio + IPA |
| Share cards | Yes (unique) | No | No | No |
| Structured data | Article (weak) | Minimal | MediaWiki | DefinedTerm (gold standard) |
| Internal linking | Minimal | Moderate | Heavy | Heavy |
| Content depth per page | Rich narrative | Brief entries | Comprehensive | Dictionary standard |
| Long-tail keyword targeting | Not optimized | Strong (domain authority) | Strong (scale) | Strong (authority) |

### The Journey's SEO Differentiation

1. **Geographic journey visualization** — No competitor maps word migration visually. This is a unique content type that can earn backlinks from linguistics blogs, education sites, and geography communities.

2. **Cultural hooks** — One-sentence surprising facts are ideal for AI Overview citations and social sharing. This is a content format no dictionary competitor offers.

3. **Interactive experience** — While not directly crawlable, the globe creates engagement signals (time on site, low bounce rate) that indirectly improve rankings.

4. **Share cards** — Purpose-built for social virality, driving backlinks and brand awareness.

---

## Generative Engine Optimization (GEO)

### The 2026 Landscape

AI-powered search (Google AI Overviews, ChatGPT Browse, Perplexity) now surfaces content based on:

1. **Structured data** — JSON-LD markup helps AI models extract and cite information accurately. Sites with proper schema see **3x improvement** in AI citation rates.

2. **Direct-answer formatting** — AI Overviews prefer content that leads with a clear, extractable answer sentence. The Journey's hooks are perfectly formatted for this.

3. **Source authority** — E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness) determine citation priority. Original research and unique content formats help.

4. **Topical depth** — AI systems prefer citing sources that demonstrate comprehensive knowledge of a topic. Having 200 interconnected etymology pages builds this signal.

### Optimization Actions

- Lead each word page with a direct-answer sentence: "The word [X] comes from [language] [word], meaning [meaning]."
- Use clear H2/H3 headings that match conversational queries
- Ensure DefinedTerm schema is complete and accurate
- Build topical authority through internal linking and hub pages

---

## Technical SEO Fixes

### 1. Metadata Duplication (P0)

**Problem**: `generateMetadata` is defined in both `app/word/[slug]/page.tsx` and `app/word/[slug]/layout.tsx`.

**Fix**: Remove from `layout.tsx`, keep in `page.tsx` (where the content lives). Next.js merges metadata from layout and page — having both creates redundancy.

### 2. Canonical URLs (P0)

**Fix**: Add to word page metadata:
```typescript
alternates: {
  canonical: `https://etymology.life/word/${slug}`,
},
```

### 3. Title Template (P0)

**Fix**: Update root layout to use template:
```typescript
title: {
  template: '%s | The Journey',
  default: 'The Journey — Where Every Word Began',
},
```

Update word page `generateMetadata` to use keyword-optimized titles.

### 4. Accurate `lastModified` in Sitemap (P3)

**Fix**: If content has a known modification date, use it instead of `new Date()`. Otherwise, use the build date (which is what `new Date()` effectively becomes in SSG).

---

## Performance Considerations

### Core Web Vitals (2026 Thresholds)

| Metric | Threshold | Risk Area |
|--------|-----------|-----------|
| LCP (Largest Contentful Paint) | < 2.5s | 3D globe on home page |
| INP (Interaction to Next Paint) | < 200ms | Globe interaction, touch events |
| CLS (Cumulative Layout Shift) | < 0.1 | Font loading, dynamic content |

### Home Page Globe

The 3D globe is already dynamically imported with `ssr: false`, which is correct. Key mitigations:
- Text content (title, subtitle) renders before globe — good for LCP
- Canvas has fixed positioning — minimal CLS risk
- Touch handling is client-side — INP depends on event handler efficiency

### Word Pages (SSG)

Word pages should score excellently on Core Web Vitals since they're statically generated. Main risks:
- Non-Latin font loading delays (mitigate with `next/font` preloading)
- Journey map/audio components loading after initial paint (already lazy-loaded)

---

## Implementation Roadmap

### Phase 1: Technical Fixes (Quick Wins)

- [ ] Fix metadata duplication (remove from layout.tsx)
- [ ] Add canonical URLs to word page metadata
- [ ] Update title template for keyword optimization
- [ ] Upgrade JSON-LD from Article to DefinedTerm + BreadcrumbList

### Phase 2: Content & Linking (High Impact)

- [ ] Add "Related Words" section to word pages (cross-links)
- [ ] Build language-of-origin hub pages (`/origin/[language]`)
- [ ] Structure first paragraph for direct-answer citation
- [ ] Add browse/index page for crawl discovery

### Phase 3: Advanced Optimization

- [ ] Add AudioObject schema for pronunciation data
- [ ] Create themed collection pages (curated journeys)
- [ ] Monitor and optimize for AI Overview citations
- [ ] Track keyword rankings for long-tail etymology queries

---

## Sources & References

- Schema.org DefinedTerm specification
- Merriam-Webster structured data implementation (gold standard)
- SEO patterns of online dictionaries (etymonline, Cambridge, Wiktionary)
- Next.js 14+ Metadata API documentation
- Google AI Overviews documentation (2025-2026)
- Core Web Vitals 2026 thresholds
- Internal linking research (pages with 40+ links = 4x traffic)
- Generative Engine Optimization research (structured data = 3x AI citation rate)

---

*Created: January 2026*
*Research Area: SEO & Discovery*
*Relates to: All word pages, site architecture, metadata configuration*
