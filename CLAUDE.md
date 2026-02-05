# Journey Project - Claude Instructions

## Documentation Rule — MANDATORY

**Every commit/push MUST include documentation updates.** Before committing, check and update:

1. **`docs/PRODUCT_AUDIT_FEB_2026.md`** — Update counts (words, languages, families, pages)
2. **`docs/features/LANGUAGE_HISTORY_BACKLOG.md`** — Mark shipped items, update task status
3. **`docs/BACKLOG.md`** — Move completed items to Shipped, update priorities
4. **`docs/INDEX.md`** — Update if new docs/sections were added
5. **`CLAUDE.md`** — Update file structure if new directories/patterns were introduced
6. **`docs/RESEARCH_AGENDA.md`** — Update status of any affected research areas

**Checklist before every push:**
- [ ] Are feature counts accurate? (words, languages, families, pages)
- [ ] Are shipped items marked as shipped in backlogs?
- [ ] Does INDEX.md reflect any new docs?
- [ ] Does CLAUDE.md reflect any new file patterns/workflows?

---

## Word Creation Workflow

When creating new word etymology entries, **ALWAYS** follow this workflow:

### Step 1: Read the Slug Registry
Before writing ANY new words, read `data/slug-registry.txt` to get the list of all existing slugs. This file is the single source of truth.

```bash
# View all existing slugs
cat data/slug-registry.txt
```

### Step 2: Plan New Words
Choose words that are NOT in the registry. Double-check each proposed slug against the registry before proceeding.

### Step 3: Write the Batch File
Create a new batch file following the naming convention: `data/words-batch{N}.ts`

Each word entry MUST have:
- `slug`: unique identifier (lowercase, hyphenated)
- `word`: original script/spelling
- `romanization`: transliteration
- `language`: source language
- `hook`: 1-2 sentence compelling intro
- `story`: array of exactly 4 paragraphs
- `journey`: array of 4+ stops with `[longitude, latitude]` coordinates
- `sounds`: array of 2+ IPA pronunciations
- `relatives`: array of 3+ related words
- `meaningNow`: 2-paragraph modern reflection

### Step 4: Wire into words.ts
Add import and spread into `allWordsRaw` array in `data/words.ts`.

### Step 5: Validate
```bash
npm run words:check
```
This runs both the registry generator and validator. Fix any errors before proceeding.

### Step 6: Build and Seed
```bash
npm run build
npx tsx scripts/seed-words.ts
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run words:registry` | Generate/update slug-registry.txt |
| `npm run words:validate` | Validate all word entries |
| `npm run words:check` | Run both registry + validate |

## Common Mistakes to Avoid

1. **Duplicate slugs**: ALWAYS check the registry first
2. **Wrong coordinate order**: Use `[longitude, latitude]` NOT `[lat, lng]`
3. **Missing story paragraphs**: Must have exactly 4
4. **Forgetting to wire**: New batches must be imported AND spread in words.ts

## File Structure

```
data/
  word-types.ts        # TypeScript interfaces
  words.ts             # Main aggregator (imports all batches)
  words-new.ts         # Legacy batch
  words-batch{N}.ts    # Batch files (2-31+)
  slug-registry.txt    # Auto-generated slug list

scripts/
  generate-slug-registry.ts  # Creates slug-registry.txt
  validate-words.ts          # Validates word structure
  seed-words.ts              # Seeds Supabase database
```

## Search Feature ("The Summoning")

Text search inside the Discovery Drawer. Behind `search_summoning` feature flag, signed-in users only.

### File Structure

```
lib/
  word-search.ts             # Search index builder, scoring, Levenshtein fuzzy match
hooks/
  useWordSearch.ts           # React hook: debounced search, matching slugs, highlighted result
components/
  home/
    SearchField.tsx          # Input UI with empty state ("No word has answered your call...")
    DiscoveryDrawer.tsx      # Modified: accepts search props, renders SearchField
    BubbleNav.tsx            # Modified: highlightedSlug/highlightedHook props for glow ring
    HomePage.tsx             # Modified: wires useWordSearch ↔ DiscoveryDrawer ↔ BubbleNav
```

### How Search ↔ Filters Interact

- Search takes precedence over chip/journey filters (chips dim to 40% opacity)
- Clearing search text restores chip filters if they were active
- Selecting a chip or curated journey clears the search text
- "Clear all" button clears search AND chips AND journey selection

### Match Scoring (in `lib/word-search.ts`)

| Tier | Score | What Matches |
|------|-------|-------------|
| Exact slug | 100 | `slug === query` |
| Slug starts with | 80 | `slug.startsWith(query)` |
| Primary includes | 60 | slug + word + romanization |
| Secondary includes | 40 | hook + language + family |
| Tertiary includes | 20 | story + journey locations + meaningNow + themes |
| Fuzzy slug | 10 | Levenshtein distance ≤ 2 on slug |

---

## Quality Standards

Reference `data/words-batch26.ts` for quality examples. Each entry should:
- Tell a compelling etymological story across cultures/centuries
- Include accurate historical dates and locations
- Have precise geographic coordinates for the journey map
- Cross-reference other words in the collection where appropriate

---

## Language History Feature

### File Structure

```
data/
  language-types.ts              # TypeScript interfaces (LanguageHistory, LanguagePhase, LanguageRegion)
  languages/
    index.ts                     # Central export, allLanguages array, getLanguageBySlug()
    sanskrit.ts                  # Sanskrit: 6 phases, 14 related words
    persian.ts                   # Persian: 7 phases, 18 related words

components/
  language/
    LanguageHistoryMap.tsx        # Zone-based D3 map with phase animation

app/
  language/[slug]/
    page.tsx                     # Server component (SEO, generateStaticParams)
    LanguagePageClient.tsx       # Client component (hero, story, map, related words)
  languages/
    page.tsx                     # Server component for /languages index
    LanguagesPage.tsx            # Client component with museum-style cards
```

### Adding a New Language

1. Create `data/languages/{slug}.ts` following the `LanguageHistory` interface
2. Each language needs: 4-7 phases, each with regions (coordinates + radius + dominance)
3. Add import and export in `data/languages/index.ts`
4. Build to verify: `npm run build`

### Map Design Rules (from research)

These rules were learned from UX research and bug fixes. Follow them:

1. **Mobile-first**: Design for 320px, add complexity at breakpoints
2. **Max 2 disclosure levels**: Map + zones (level 1), tap for tooltip (level 2). Never deeper.
3. **No labels on mobile by default**: Labels overlap when regions cluster. Use tap-to-reveal.
4. **Tight gradients**: 4-stop radial gradient (0%, 50%, 85%, 100%). Concentrate color in center.
5. **Small radius multiplier**: 8 (mobile) / 10 (desktop). Old value of 15 was too large.
6. **Low glow**: stdDeviation 3 (mobile) / 4 (desktop). Old value of 8 was too noisy.
7. **Hide non-essential controls on mobile**: Zoom buttons (pinch works), reset, speed. Keep playback.
8. **Dot stepper on mobile**: Never wrap timeline buttons. Use dots + current era name.
9. **Center dots**: Always show a small solid dot at region center as anchor point.
10. **44px minimum touch targets**: Invisible hit areas for tap interactions.

### Bugs to Watch For

- **AmbientBackground**: Do NOT use on language pages. It's designed for 7-section word pages and causes flickering on pages with different section counts.
- **D3 selection types**: Use explicit generics like `svg.select<SVGDefsElement>("defs")` to avoid TypeScript errors.
- **Coordinate order**: Always `[longitude, latitude]`, not `[lat, lng]`.

---

## Language Family Tree Feature

### File Structure

```
data/
  language-types.ts              # LanguageFamilyNode interface (nested tree)
  language-families/
    index.ts                     # Central export, allFamilies array, getFamilyBySlug()
    indo-european.ts             # Full IE tree (10 branches, sub-branches, languages)
    afro-asiatic.ts              # Semitic branch (Arabic)

components/
  language/
    LanguageFamilyTree.tsx       # D3 collapsible dendrogram

app/
  families/
    page.tsx                     # Server component for /families index
    FamiliesPage.tsx             # Client component with family cards
  family/[slug]/
    page.tsx                     # Server component (SEO, generateStaticParams)
    FamilyPageClient.tsx         # Client component (hero, narrative, tree)
```

### Key Design Decisions (from research)

1. **4-level depth**: Family → Branch → Sub-branch → Language. No deeper.
2. **Collapsible dendrogram first** (D3 tree layout), sunburst hero second
3. **Breadcrumbs**: All Families → Indo-European → Indo-Iranian → Sanskrit → Word
4. **Sort by content richness**: Families with more words appear first
5. **Cross-family arcs**: Show loanword paths jumping between trees (future)
6. **Node styling**: Living (solid), extinct (dimmed), reconstructed (dashed), disputed (dashed border)
7. **Word count badges**: Each node shows how many words trace through it

### Research

See `/docs/research/LANGUAGE_FAMILY_TREE_RESEARCH.md` for full findings on visualization approaches, data model, UX patterns, and loanword handling.

---

## App Design Principles

The app follows a "museum curator" voice. Key anti-patterns to avoid:
- No streaks, badges, leaderboards, XP, or gamification
- No urgency or FOMO tactics
- Content IS the reward — never build meta-games around it
- Frame everything as invitation, not obligation
- See `/docs/BACKLOG.md` for full anti-patterns list
