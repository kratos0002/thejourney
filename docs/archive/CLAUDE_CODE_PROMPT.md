# The Journey — Build Prompt for Claude Code

## Overview

Build "The Journey" — a concept website/app showcasing 10 words and their etymological journeys. Each word is a complete universe to explore. The experience should be **flowing, smooth, immersive, and beautiful** — more like a museum exhibition than a dictionary.

## Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS + custom CSS for animations
- **Animations:** Framer Motion
- **Fonts:** Google Fonts (Cormorant Garamond, Source Serif 4, Noto Sans for various scripts)
- **Deployment-ready:** Works on both web and mobile, fully responsive

## Core Philosophy

**The user is a traveler, not a reader.**

- Everything should **flow** like water
- Transitions should be **smooth and liquid**, never snappy
- The experience should create **wonder**, not just inform
- Less is more — 10 words done perfectly beats 1000 done adequately

## Design Requirements

### Visual Language
- **Dark, deep aesthetic** — like bioluminescence in dark water
- **Color palette:**
  - Background: `#0a0a0f` (deep abyss)
  - Surfaces: `#12121a` to `#1a1a24`
  - Primary text: `#f0ede6` (moonlight)
  - Secondary text: `#a8a4a0` (mist)
  - Accent: `#d4a574` (amber glow), `#b87a4b` (copper)
- **Typography:**
  - Display: Cormorant Garamond (the main words)
  - Body: Source Serif 4 (stories, descriptions)
  - Scripts: Noto Sans Arabic, Noto Sans Devanagari, etc. for non-Latin
- **Generous whitespace** — nothing should feel cramped
- **Subtle grain texture** overlay for organic feel

### Animation Requirements
- All transitions: 600ms-1200ms, smooth easing
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Elements should **emerge** (fade in + slight upward drift)
- Elements should **dissolve** (fade out + slight scale + blur)
- Resting elements should **breathe** (subtle scale pulse)
- Respect `prefers-reduced-motion`

## Page Structure

### 1. Home Page (`/`)

**Layout:**
- Dark background, full viewport
- Title "The Journey" centered at top, subtle
- Subtitle: "Ten words. Ten worlds." (optional)
- 10 words floating in space, organic positioning (not a grid)
- Words gently drift with ambient animation

**Each word shows:**
- Original script (large)
- Romanization (smaller, below)
- Language name (smallest, subtle)

**Interactions:**
- Hover (desktop): word brightens, glow intensifies
- Click/tap: smooth transition into that word's world
- Visited words have subtle indicator (inner glow)

**Entry animation:**
- Words fade in staggered (100ms delay each)
- Total reveal: ~2 seconds

### 2. Word Page (`/word/[slug]`)

A single continuous scroll experience with distinct layers. Each layer is roughly viewport height with scroll-snap behavior (soft snap, not jarring).

**Progress indicator:** Subtle dots on right edge showing current layer

#### Layer 1: The Word
- Word in original script, very large, centered
- Romanization below
- Language indicator below that
- Subtle breathing animation
- Faint glow

#### Layer 2: The Hook
- One intriguing sentence in italics
- Emerges as user scrolls into view
- Example: *"A word that kept Sufi monks awake for midnight prayers."*

#### Layer 3: The Story
- 2-4 paragraphs of atmospheric history
- Paragraphs fade in sequentially
- Source Serif 4, comfortable reading size
- Max-width 600px, centered

#### Layer 4: The Journey (Map)
**This is the centerpiece feature.**

A visual, interactive representation of the word's geographical/temporal journey:
- Horizontal flow: origin on left → present on right
- Connected nodes for each stop (city/culture/time)
- Each node shows:
  - Location name
  - Time period
  - Word form at that stage
- Animated path that draws itself on first view
- Background color subtly shifts by region/culture
- **Tappable nodes:** tap to expand details about that stop

Visual style:
- Abstract, not literal map imagery
- Flowing curved lines connecting nodes
- Nodes are soft glowing circles
- Colors shift: Ethiopian ochres → Arabian purples → Mediterranean olives, etc.

#### Layer 5: The Sound
- Section showing pronunciations
- Original pronunciation with IPA
- Modern pronunciation with IPA  
- Play buttons (can be placeholder for now)
- Visual waveform/ripple animation on "play"

#### Layer 6: The Relatives
- Grid/cluster of related words
- Each is a card showing: word, language, brief connection
- Tappable — if word exists in collection, navigates to it
- If not in collection, shows dimmed with "Coming soon"

#### Layer 7: The Meaning Now
- Poetic closing paragraph
- Connects the ancient journey to present day
- "Save this word" button (can be decorative for now)
- "Return" link back to home

**Navigation:**
- Progress dots on right (tappable to jump)
- Swipe right or back button to return home
- Word name always subtly visible at top

### Transitions

**Home → Word:**
- Selected word grows and centers
- Other words fade and drift away
- Background deepens
- 800ms duration

**Word → Home:**
- Word shrinks and returns to position
- Other words drift back in
- 600ms duration

**Layer → Layer:**
- Smooth scroll with parallax (background moves slower)
- Content fades/transforms with scroll position

## Content Data

The content for all 10 words is provided in `docs/WORD_CONTENT.md`. Structure your data as:

```typescript
interface Word {
  slug: string;
  word: string;           // Original script
  romanization: string;
  language: string;
  hook: string;
  story: string[];        // Array of paragraphs
  journey: JourneyStop[];
  sounds: Sound[];
  relatives: RelativeWord[];
  meaningNow: string;
}

interface JourneyStop {
  location: string;
  period: string;
  form: string;
  script?: string;
  context: string;
  color?: string;         // Cultural color hint
}

interface Sound {
  label: string;
  ipa: string;
  audioUrl?: string;
}

interface RelativeWord {
  word: string;
  language: string;
  connection: string;
  available: boolean;     // Is it in our collection?
  slug?: string;
}
```

## The 10 Words

1. **قهوة (qahwa)** — coffee (Arabic)
2. **साँस (saans)** — breath (Hindi)
3. **津波 (tsunami)** — harbor wave (Japanese)
4. **saudade** — untranslatable longing (Portuguese)
5. **Wanderlust** — desire to roam (German)
6. **algorithm** — from al-Khwārizmī (Arabic/Persian → English)
7. **दान (daan)** — gift/charity (Hindi/Sanskrit)
8. **assassin** — from hashīshīn (Arabic → English)
9. **typhoon** — three-origin storm (Greek/Arabic/Chinese → English)
10. **ubuntu** — I am because we are (Zulu)

## Responsive Design

### Mobile (< 768px)
- Full-screen immersive
- Touch-optimized (48px min tap targets)
- Journey map scrolls horizontally
- Progress dots at bottom
- Larger, more readable type

### Tablet (768px - 1024px)  
- Same as mobile with more whitespace
- Side progress indicator

### Desktop (> 1024px)
- Centered content, max-width 900px
- Hover states active
- Keyboard navigation: ↑↓ for layers, Esc for exit
- Larger type, more generous spacing

## Accessibility

- Full keyboard navigation
- Screen reader support (meaningful alt text, ARIA labels)
- Respect `prefers-reduced-motion` (reduce/remove animations)
- High contrast mode support
- Focus indicators (glow style, not harsh outlines)

## File Structure

```
/app
  /page.tsx                 # Home page
  /word/[slug]/page.tsx     # Word detail page
  /layout.tsx               # Root layout with fonts, metadata
/components
  /home
    /WordCloud.tsx          # Floating words on home
    /WordCard.tsx           # Individual word in cloud
  /word
    /WordHero.tsx           # Layer 1: The word display
    /WordHook.tsx           # Layer 2: The hook line
    /WordStory.tsx          # Layer 3: The story
    /JourneyMap.tsx         # Layer 4: Interactive journey
    /JourneyNode.tsx        # Individual node on journey
    /WordSound.tsx          # Layer 5: Pronunciation
    /WordRelatives.tsx      # Layer 6: Related words
    /WordMeaning.tsx        # Layer 7: Present meaning
    /ProgressIndicator.tsx  # Scroll progress dots
  /ui
    /GrainOverlay.tsx       # Subtle texture
    /Glow.tsx               # Reusable glow effect
/data
  /words.ts                 # All word content
/lib
  /animations.ts            # Framer Motion variants
  /utils.ts                 # Helper functions
/styles
  /globals.css              # Base styles, CSS variables
```

## Implementation Priority

1. **First:** Home page with word cloud, basic transitions
2. **Second:** Word page structure, all 7 layers static
3. **Third:** Scroll animations, layer reveals
4. **Fourth:** Journey map (the hero feature)
5. **Fifth:** Responsive refinement
6. **Sixth:** Polish — breathing animations, grain texture, hover states

## Quality Bar

This should feel like a **portfolio piece** — something you'd show to demonstrate exceptional frontend craft. Every transition should be intentional. Every detail should feel considered. The experience should make people want to share it.

**References for quality:**
- Stripe's marketing pages (smooth, polished)
- Linear's website (attention to motion)
- Readymag templates (editorial beauty)
- Awwwards winners (pushing boundaries)

## Getting Started

1. Initialize Next.js project with TypeScript, Tailwind, App Router
2. Install Framer Motion
3. Set up fonts (Cormorant Garamond, Source Serif 4, Noto Sans families)
4. Create color palette in Tailwind config
5. Build home page first, then word page
6. Test on mobile throughout

---

## Additional Documents

Read these for full context:
- `docs/DESIGN_LANGUAGE.md` — Complete visual design system
- `docs/PRODUCT_VISION.md` — Why this exists, what it should feel like
- `docs/CORE_UX.md` — Detailed UX specification
- `docs/WORD_CONTENT.md` — All content for 10 words

Build something beautiful. ✨
