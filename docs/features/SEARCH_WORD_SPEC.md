# Search Word: "The Summoning" — Feature Spec

> You call out into the dark. Words that recognize something in your call rise to meet you.

---

## Decisions

| Question | Decision |
|----------|----------|
| Where does it live? | Inside the Discovery Drawer — text input above the curated journeys |
| How do results appear? | Matching bubbles glow on the globe; the word gets highlighted |
| Who can use it? | Signed-in users only |
| Feature flag | `search_summoning`, admin-only first |

---

## Philosophy

Search in The Journey is not a utility. It's a **summoning**.

The Discovery Drawer already embodies "choose a path to walk." Search adds a second mode: "call a word by name." Both live in the same drawer because discovery and search are two sides of the same desire — the desire to find something wondrous.

The globe remains the hero. Search results manifest *on the globe*, not in a list. The drawer provides the input; the globe provides the answer.

---

## Experience Flow

### 1. Invocation

User opens the Discovery Drawer (swipe up or tap handle). At the top of the drawer — above "Curated journeys" — sits a minimal text input:

```
┌─────────────────────────────────────────┐
│         ─── (handle) ───                │
│                                         │
│  Explore paths                          │
│  302 journeys to discover    Clear all  │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  Call a word...            ○    │    │
│  └─────────────────────────────────┘    │
│                                         │
│  CURATED JOURNEYS                       │
│  [Spice Road] [Words of War] [Sacred..] │
│                                         │
│  ─── or filter by ───                   │
│                                         │
│  ORIGIN                                 │
│  [Arabic] [Latin] [Germanic] ...        │
│                                         │
│  THEME                                  │
│  [Trade] [Food & Drink] [Religion] ...  │
│                                         │
└─────────────────────────────────────────┘
```

**Input styling:**
- Font: Cormorant Garamond italic, `text-sm` (matches the scholarly voice)
- Placeholder: *"Call a word..."* in `--theme-text-tertiary`, 50% opacity
- Background: `--theme-bg-tertiary` (subtle surface differentiation)
- Border: 1px `--theme-border`, `rounded-xl`
- No search icon on the left (too transactional). A subtle clear `×` appears on the right only when text is entered
- Focus state: amber/gold-leaf glow border (`--theme-accent-muted`), no browser default outline
- Height: compact, 40px — should not dominate the drawer

### 2. The Call (Typing)

As the user types:

**Globe behavior (above the drawer):**
- Matching word bubbles **glow brighter** — opacity 100%, subtle pulse animation, border brightens with language tint color
- Non-matching word bubbles **fade** — opacity 15%, scale 0.95 (reuses exact same logic as existing chip filter behavior via `filteredSlugs` + `hasActiveFilters` props on BubbleNav)
- Globe rotation slows to `IDLE_SPEED * 0.3` (a near-pause, not a full stop — the globe breathes, not freezes)
- If only 1-3 matches remain, globe auto-rotates to center them in view

**Drawer behavior:**
- Curated journeys and filter chips remain visible (don't hide them)
- A soft match count appears below the input: *"3 words answer your call"* in `--theme-text-tertiary`, `text-[10px]`
- If the user has text in the search AND chip filters active, text search takes precedence (chips get temporarily dimmed but not cleared — clearing the text restores chip filters)

**Typing feel:**
- Debounced at 150ms for smooth performance
- Results update on the globe in real-time via existing `onFiltersChange(matchingSlugs, hasActiveFilters)` callback

### 3. Rising (Matches on the Globe)

When search finds matches, the **globe is the result display**:

| Bubble State | Opacity | Scale | Border | Animation |
|-------------|---------|-------|--------|-----------|
| Exact match (slug/word) | 100% | 1.05 | 2px `--theme-accent` | Gentle pulse (breathe animation, 3s cycle) |
| Partial match (hook/story) | 80% | 1.0 | Normal language tint | Subtle glow |
| Non-matching | 15% | 0.9 | None | None |

**"Highlighted word" behavior:**
- The single best match (highest relevance score) gets a special treatment: a soft amber ring / outer glow around its bubble, making it unmistakable
- This word's bubble also shows its **hook text** as a small floating label beneath it (2 lines max, `text-[9px]`, fades in over 600ms)
- The hook label uses the existing whisper concept: *"A word that kept Sufi monks awake..."*
- If the user typed an exact slug ("coffee", "qahwa"), the hook appears immediately
- If fuzzy match, the hook appears after a 400ms settle delay

### 4. Selection

User taps a glowing bubble on the globe → standard word entry transition (word grows, others fade, navigate to `/word/[slug]`).

The drawer auto-closes on navigation. Search state is **not persisted** — returning to home resets the drawer to its default state.

### 5. Empty State

When no words match:

```
┌─────────────────────────────────────┐
│  ┌─────────────────────────────┐    │
│  │  "xylophon"            ×   │    │
│  └─────────────────────────────┘    │
│                                     │
│     No word has answered            │
│     your call... yet.               │
│                                     │
│     Perhaps:                        │
│     ░ "xylophone" — did you mean?   │  ← fuzzy suggestion if close match
│                                     │
│     While you're here...            │
│     ░ قهوة (qahwa)                  │  ← random word with hook
│       "A word that kept Sufi        │
│        monks awake..."              │
│                                     │
└─────────────────────────────────────┘
```

**Empty state details:**
- Primary text: *"No word has answered your call... yet."* — Cormorant Garamond italic, `--theme-text-secondary`
- "Perhaps:" section only shows if there's a fuzzy near-match (Levenshtein distance ≤ 3)
- "While you're here..." surfaces a random word from the collection — invites serendipity, never a dead end
- Both suggestions are tappable → navigate to that word

### 6. Interaction with Existing Filters

The search field and the chip/journey filters coexist but don't stack:

| State | Behavior |
|-------|----------|
| User types text | Search takes precedence. Chip filters visually dim (opacity 0.4). Journey count updates to match search. |
| User clears text | Chip filters reactivate if they were set. Globe returns to chip-filtered state. |
| User selects a chip while text is active | Text clears. Chip filter takes over. |
| User selects a curated journey while text is active | Text clears. Journey takes over. |
| Clear all button | Clears text AND chips AND journey selection. |

This ensures the modes don't conflict. The input field acts as an override — the moment you start typing, you've shifted from "browsing paths" to "calling a specific word."

---

## Match Logic

### Search Index

Built once on component mount. For each word, concatenate into a normalized lowercase search string:

```typescript
interface SearchEntry {
  slug: string;
  // Pre-built searchable text segments with weights
  primary: string;    // slug + word + romanizedWord + originalWord
  secondary: string;  // hook + language
  tertiary: string;   // story paragraphs + journey locations + meaningNow
}
```

### Matching Algorithm

Client-side (302 words is trivial). No external library needed.

```
1. Normalize query: lowercase, trim
2. If query.length < 2: don't search (show all)
3. For each word, score by first match found:
   - Exact slug match:           100 points
   - slug.startsWith(query):      80 points
   - primary.includes(query):     60 points
   - secondary.includes(query):   40 points
   - tertiary.includes(query):    20 points
   - Fuzzy match (distance ≤ 2):  10 points
4. Return words with score > 0, sorted by score descending
5. Top result = "highlighted word" (gets the glow ring + hook label)
```

**Fuzzy matching:** Simple Levenshtein distance check on the `slug` field only (checking story text fuzzily would be too noisy). This handles typos like "cofee" → "coffee", "qhawa" → "qahwa".

### What Gets Searched

| Field | Weight | Why |
|-------|--------|-----|
| `slug` | Highest | User likely knows the English word |
| `word` (display name) | Highest | Same as slug in most cases |
| `romanizedWord` | High | Users may know transliteration ("qahwa") |
| `originalWord` | High | Users may paste/type original script |
| `hook` | Medium | "monks" finds qahwa, "Sufi" finds qahwa |
| `language` | Medium | "Arabic" shows all Arabic-origin words |
| `story[]` | Lower | Deep content match, broad recall |
| `journey[].location` | Lower | "Venice" finds words that passed through Venice |
| `meaningNow` | Lower | Modern usage context |
| Theme/family labels | Lowest | "food" finds Food & Drink themed words |

---

## Component Architecture

### New Components

```
components/
  home/
    SearchField.tsx          # The input field + empty state
    useWordSearch.ts         # Hook: builds index, returns search function
```

### Modified Components

```
components/
  home/
    DiscoveryDrawer.tsx      # Add SearchField above curated journeys
                             # Add searchQuery state
                             # Wire search results into onFiltersChange
    BubbleNav.tsx            # Add highlightedSlug prop (for the glow ring)
                             # Add hook label rendering for highlighted bubble
```

### New in lib

```
lib/
  word-search.ts             # Search index builder + search function
                             # Fuzzy match utility (Levenshtein)
```

---

## Visual Design

### Night Sky (Dark)

| Element | Style |
|---------|-------|
| Input background | `#1a1a24` (`--bg-tertiary`) |
| Input text | `#f0ede6` (`--text-primary`), Cormorant Garamond italic |
| Placeholder | `#6b6866` (`--text-tertiary`), 50% opacity |
| Focus border | `rgba(212, 165, 116, 0.4)` (amber glow) |
| Match count text | `#6b6866`, 10px |
| Empty state heading | `#a8b0b8`, Cormorant Garamond italic |
| Highlighted bubble ring | `0 0 20px rgba(212, 165, 116, 0.4)` box-shadow |
| Hook label | `#a8b0b8` on `rgba(18, 18, 26, 0.85)` backdrop |

### Parchment (Light)

| Element | Style |
|---------|-------|
| Input background | `#f0ebe0` (`--bg-tertiary`) |
| Input text | `#2a2520` (`--text-primary`), Cormorant Garamond italic |
| Placeholder | `#8a8378` (`--text-tertiary`), 50% opacity |
| Focus border | `rgba(184, 134, 11, 0.4)` (gold leaf glow) |
| Match count text | `#8a8378`, 10px |
| Empty state heading | `#5c554a`, Cormorant Garamond italic |
| Highlighted bubble ring | `0 0 20px rgba(184, 134, 11, 0.3)` box-shadow |
| Hook label | `#5c554a` on `rgba(255, 254, 250, 0.9)` backdrop |

---

## Motion

| Moment | Animation | Duration | Easing |
|--------|-----------|----------|--------|
| Input focus glow | Border color transition | 300ms | ease |
| Globe dims on search | Opacity of non-matches fades | 400ms | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| Highlighted bubble pulse | Scale 1.0 ↔ 1.03, glow intensity oscillates | 3s loop | ease-in-out |
| Hook label appears | Fade in + translateY(8px → 0) | 600ms | ease-out |
| Empty state text | Fade in | 400ms | ease |
| Match count update | Fade transition (crossfade) | 200ms | ease |

All animations respect `prefers-reduced-motion` → replace with instant transitions.

---

## Accessibility

- Input has `role="searchbox"`, `aria-label="Search words"`
- Live region (`aria-live="polite"`) announces match count: "3 words found" / "No words found"
- Escape key in input: clears text (first press), closes drawer (second press if empty)
- Tab from input moves focus to first curated journey card
- Screen reader: hook labels on globe bubbles are announced via `aria-label`
- Globe bubble focus order: matching words come first in tab order when search is active

---

## Auth Gating

The search field renders **only for signed-in users** (`user` from `useExploration()`):

```tsx
{user && searchEnabled && (
  <SearchField ... />
)}
```

Anonymous users see the drawer exactly as it exists today — curated journeys + filter chips. No indication that search exists (no disabled state, no "sign in to search" prompt). Search is a quiet reward for signing in.

---

## Feature Flag

| Key | `search_summoning` |
|-----|-------------------|
| Phase 1 | `admin_only: true` — admin testing |
| Phase 2 | `admin_only: false, is_enabled: true` — all signed-in users |

Uses existing `useFeatureFlag('search_summoning')` hook.

---

## Success Metrics

| Metric | What it tells us |
|--------|-----------------|
| Search invocation rate | Do signed-in users discover and use search? |
| Queries per session | How often do users search vs. browse? |
| Query → word navigation rate | Does search lead to exploration? |
| Empty state encounter rate | Is our 302-word catalog sufficient? |
| Top queries with no results | What words should we add next? |
| Search vs. filter usage ratio | Are users preferring search over discovery? (If yes, that's a signal to add more words, not to make search more prominent) |

### PostHog Events

```
search_invoked:     { query_length }
search_completed:   { query, result_count, top_result_slug }
search_word_tapped: { query, slug, result_rank }
search_empty_state: { query, suggestion_shown, suggestion_tapped }
search_cleared:     { had_results: boolean }
```

---

## What This is NOT

Staying true to the anti-patterns:

- **Not a command palette** — no slash commands, no structured syntax
- **Not autocomplete** — no dropdown list of suggestions as you type. Results appear on the globe.
- **Not a replacement for discovery** — the curated journeys and filter chips remain the primary path. Search is for when you half-know what you want.
- **Not prominent** — the input sits quietly at the top of the drawer. The globe is still the hero.
- **Not a standalone page** — no `/search` route. Search lives inside the drawer, integrated with the home experience.

---

## Future Evolution (Not in scope)

- **Phase 3: Smart queries** — "words from the Silk Road" maps to curated journey. "words that changed meaning" becomes a filter. Natural language → structured filter.
- **Keyboard invocation** — type anywhere on the home page to open drawer with focus on search field.
- **Browse page search** — replicate the search field on `/browse` for filtering the grid.
- **Search history** — surface recently searched words in the drawer (gentle, not a list — "You recently called for *qahwa*...")

---

*Created: February 2026*
*Status: Ready for implementation*
*Feature flag: `search_summoning`*
*Prerequisite: Signed-in user, feature flag enabled*
