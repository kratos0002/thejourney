# The Journey — Share Card Design Proposal

## Executive Summary

This proposal outlines a sharing experience that condenses a word's journey into a beautiful, shareable visual artifact. Inspired by Spotify Wrapped's storytelling cards and Instagram's vertical format, but filtered through The Journey's "liquid depth" aesthetic and museum-quality positioning.

**Core concept:** The share card is a *visual postcard from the journey* — a single, beautiful image that hints at the depth within, inviting viewers to explore the full experience.

---

## Design Philosophy

### What We're NOT Building
- A comprehensive infographic (too busy, breaks brand)
- A simple text quote card (too generic, no differentiation)
- A social media template with fill-in-blanks (too corporate)

### What We ARE Building
A **visual artifact** that:
1. Captures the essence of a word's journey in one glance
2. Feels like a collector's item, not a marketing asset
3. Maintains the reverent, museum-quality brand
4. Creates intrigue without explaining everything
5. Works as both social share AND personal keepsake

---

## Learning from the Best

### Spotify Wrapped 2025
**What works:**
- Bold, simplified statistics that create shareability
- Reduced color palette with strong visual identity
- Cards tell a story, not just display data
- Mix of personal data + cultural connection
- Easy to understand at a glance

**What we adapt:**
- Simplicity over complexity
- One key insight per card
- Strong typographic hierarchy

### Instagram Stories
**What works:**
- 9:16 vertical format optimized for mobile
- Safe zones for UI elements (250px top/bottom)
- Bold visuals that stop the scroll
- Interactive elements drive engagement

**What we adapt:**
- Vertical-first design
- Visual impact over information density
- Clear, single focal point

---

## The Share Card System

### Format Specifications

**Primary Format: The Journey Card**
- Dimensions: 1080 × 1920px (9:16 Instagram Stories)
- Secondary: 1080 × 1080px (Instagram/Facebook square)
- Always exports in **Night Sky theme** for brand consistency

### Card Types

We propose **3 card variants** users can choose from:

---

## Card Type 1: "The Path" (Geographic Journey)

**Visual Concept:** A stylized route visualization showing the word's migration across continents.

```
┌─────────────────────────────────┐
│                                 │
│    ╭──────────────────────╮     │
│    │      قهوة            │     │  ← Word in original script
│    │      qahwa           │     │  ← Romanization
│    ╰──────────────────────╯     │
│                                 │
│    ┌─────────────────────┐      │
│    │                     │      │
│    │   [Simplified Map   │      │  ← Abstract journey line
│    │    Ethiopia → Yemen │      │     with key stops
│    │    → Venice → World]│      │
│    │                     │      │
│    └─────────────────────┘      │
│                                 │
│    "From Ethiopian highlands    │  ← The hook (truncated)
│     to your morning cup"        │
│                                 │
│    ─────────────────────        │
│    thejourney.app               │  ← Subtle brand
│                                 │
└─────────────────────────────────┘
```

**Visual Elements:**
- Curved path line connecting 3-4 key stops (not all stops)
- Each stop: small glowing dot with location name
- Cultural color gradient along the path (using journey colors from design system)
- Subtle grain texture overlay
- Ambient glow around the word

**Data Displayed:**
- Word in original script (large)
- Romanization (smaller)
- 3-4 key journey stops (simplified)
- Time span: "~600 years across 4 continents"
- Hook line (abbreviated if needed)

---

## Card Type 2: "The Moment" (Story Highlight)

**Visual Concept:** A single powerful moment from the word's story, presented like a museum placard.

```
┌─────────────────────────────────┐
│                                 │
│                                 │
│         " A word that           │  ← The hook (full)
│           kept Sufi monks       │
│           awake for             │
│           midnight prayers. "   │
│                                 │
│                                 │
│    ╭───────────────────────╮    │
│    │                       │    │
│    │         قهوة          │    │  ← Word prominent
│    │         qahwa         │    │
│    │         Arabic        │    │
│    │                       │    │
│    ╰───────────────────────╯    │
│                                 │
│                                 │
│    ─────────────────────        │
│    thejourney.app               │
│                                 │
└─────────────────────────────────┘
```

**Visual Elements:**
- Hook quote as the hero (Cormorant Garamond Italic)
- Word floats below in a subtle card/badge
- Deep, immersive background with subtle cultural color tint
- Elegant quotation marks (decorative, not literal " ")
- Soft vignette edges

**Data Displayed:**
- The hook (complete)
- Word in original script
- Romanization
- Language name

---

## Card Type 3: "The Transformation" (Sound Evolution)

**Visual Concept:** Shows how the word's sound changed across cultures — a visual representation of linguistic metamorphosis.

```
┌─────────────────────────────────┐
│                                 │
│      The Sound of Coffee        │  ← Section label
│                                 │
│    ┌─────────────────────┐      │
│    │  قهوة                │      │
│    │  /ˈqah.wa/           │      │  ← Original
│    │  Yemen, 1450s        │      │
│    └─────────────────────┘      │
│             ↓                   │  ← Flow indicator
│    ┌─────────────────────┐      │
│    │  kahve               │      │
│    │  /kahˈve/            │      │  ← Middle
│    │  Ottoman, 1550s      │      │
│    └─────────────────────┘      │
│             ↓                   │
│    ┌─────────────────────┐      │
│    │  coffee              │      │
│    │  /ˈkɒf.i/            │      │  ← Modern
│    │  English, today      │      │
│    └─────────────────────┘      │
│                                 │
│    ─────────────────────        │
│    thejourney.app               │
│                                 │
└─────────────────────────────────┘
```

**Visual Elements:**
- Three sound cards stacked vertically with connecting flow lines
- Each card shows: script, IPA, location/era
- Gradient color shift from origin culture to modern
- Typography: JetBrains Mono for IPA, Source Serif for text
- Animated version could "speak" each pronunciation

**Data Displayed:**
- Word in 3 forms (origin, middle, modern)
- IPA pronunciations
- Locations and time periods

---

## Visual Design System for Share Cards

### Color Treatment

**Base:** Always Night Sky theme for consistency
```css
background: linear-gradient(180deg, #0a0a14 0%, #12121e 100%);
```

**Cultural Accent:** Derived from the word's primary region
- Arabic words: Deep purple/blue gradient accent
- Hindi/Sanskrit: Saffron/deep red accent
- Japanese: Ink black/jade accent
- European: Cool gray/pale blue accent

### Typography Scale

```
Word (Original Script): Cormorant Garamond 600, 72px
Romanization: Source Serif 4, 24px
Hook: Cormorant Garamond Italic, 28px
Labels: Source Serif 4, 14px
IPA: JetBrains Mono, 16px
Brand: Source Serif 4, 12px
```

### Visual Effects

**Glow (around word):**
```css
box-shadow:
  0 0 60px rgba(212, 165, 116, 0.2),
  0 0 120px rgba(212, 165, 116, 0.1);
```

**Grain Overlay:**
```css
/* Subtle noise at 3% opacity */
background-image: url('noise.svg');
opacity: 0.03;
```

**Vignette:**
```css
background: radial-gradient(
  ellipse at center,
  transparent 50%,
  rgba(10, 10, 20, 0.4) 100%
);
```

---

## User Flow

### Share Button Location
Add a share icon to the word experience, appearing after user has scrolled past "The Hook" layer.

**Position:** Fixed bottom-right, or in the navigation dots area

### Share Flow

```
1. User taps Share icon
   ↓
2. Share drawer slides up with 3 card previews
   ↓
3. User selects card type (or swipes between them)
   ↓
4. Card generates with animation (1-2 seconds)
   ↓
5. Share sheet appears with options:
   - Save to Photos
   - Instagram Stories
   - Share Link
   - Copy Image
```

### Share Drawer UI

```
┌─────────────────────────────────┐
│  Share قهوة                  ✕  │
├─────────────────────────────────┤
│                                 │
│  [Path]    [Moment]   [Sound]   │  ← Card type tabs
│                                 │
│  ┌───────────────────────────┐  │
│  │                           │  │
│  │     [Card Preview]        │  │  ← Selected card
│  │     (scaled down)         │  │
│  │                           │  │
│  └───────────────────────────┘  │
│                                 │
│  ┌───────────────────────────┐  │
│  │     Save to Photos        │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │     Share to Stories      │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │     Copy Link             │  │
│  └───────────────────────────┘  │
│                                 │
└─────────────────────────────────┘
```

---

## Technical Implementation

### Rendering Approach

**Option A: Client-side Canvas (Recommended)**
- Use HTML Canvas API to render card
- Export as PNG/JPEG
- Pros: Fast, no server costs, works offline
- Cons: Font rendering can be tricky

**Option B: Server-side Generation**
- Use Remotion (already in stack) or Puppeteer
- Render on-demand via API route
- Pros: Consistent output, easier fonts
- Cons: Latency, server costs

**Option C: Hybrid**
- Pre-generate cards for all words during build
- Store in CDN
- Pros: Instant sharing
- Cons: Storage costs, rebuild needed for changes

**Recommendation:** Start with Option A (canvas), fall back to Option B for complex cards.

### Share APIs

**Web Share API:**
```typescript
if (navigator.share) {
  await navigator.share({
    title: `The Journey of ${word.romanization}`,
    text: word.hook,
    url: `https://thejourney.app/word/${word.slug}`,
    files: [cardImageFile]
  });
}
```

**Instagram Stories Deep Link:**
```typescript
// iOS only - requires Instagram app
const url = `instagram-stories://share?backgroundImage=${encodedImage}`;
```

**Fallback:** Standard download + instructions to share manually

### Tracking

PostHog events:
- `share_initiated`: { word_slug, card_type }
- `share_completed`: { word_slug, card_type, destination }
- `share_cancelled`: { word_slug, card_type }

---

## Content Condensation Rules

Since we're condensing the full journey into a card, we need clear rules:

### For "The Path" Card
- Show maximum 4 journey stops
- Priority: Origin → Key transformation point → Modern form → Global
- Skip intermediate steps that don't change the word significantly
- Time span: Calculate from first to last stop

### For "The Moment" Card
- Use the hook verbatim if under 80 characters
- If longer, truncate at natural phrase boundary + "..."
- Never modify the hook's meaning

### For "The Sound" Card
- Show 3 pronunciations maximum
- Priority: Original, most interesting middle form, modern English
- Include IPA for all forms
- Skip forms that are too similar

---

## Animation (Optional Enhancement)

For an elevated experience, cards could have subtle animation:

**"The Path" Animation:**
- Path line draws itself from origin to destination
- Dots pulse as the line reaches them
- 3-4 second loop

**"The Moment" Animation:**
- Word fades in with breathing glow
- Quote typewriter-reveals
- Subtle particle drift in background

**"The Sound" Animation:**
- Each pronunciation card fades in sequence
- Flow lines pulse between them
- Could trigger audio on tap (in-app only)

**Export:**
- Static PNG for most shares
- Animated GIF/MP4 for premium feature (future)

---

## Accessibility

- All text maintains 4.5:1 contrast minimum
- Alt text for shared images includes word + hook
- Share flow is keyboard navigable
- Screen reader announces card type selection

---

## Future Enhancements

### Phase 2
- Animated video cards (using Remotion)
- Custom card colors/themes
- Add personal note to card
- Track where shared cards lead to visits

### Phase 3
- "My Journey" compilation (multiple words)
- Year-end "Words You Explored" (like Spotify Wrapped)
- Collaborative sharing (add friend's reaction)
- Physical prints/postcards

---

## Success Metrics

**Launch goals:**
- 20% of word explorations lead to share drawer open
- 10% of share drawer opens lead to actual share
- 5% of shares lead to new site visits (trackable via UTM)

**Quality indicators:**
- Screenshots of cards appearing on social media
- Organic growth in word explorations from shared links
- User feedback specifically mentioning share feature

---

## Example Cards (Mockup Descriptions)

### قهوة (qahwa) - "The Path"

**Visual:**
- Top third: Large قهوة in Arabic script with soft amber glow
- Middle third: Flowing curved line from Ethiopia (warm ochre) → Yemen (deep purple) → Venice (stone) → Global (cool gray), with small labeled dots at each stop
- Bottom third: "From Ethiopian highlands to your morning cup • 600 years • 4 continents"
- Footer: thejourney.app in small, elegant type

**Feel:** Like a vintage travel poster crossed with a constellation map

### साँस (saans) - "The Moment"

**Visual:**
- Large decorative quotation mark at top
- Hook text: "The breath and the soul were once the same word."
- Centered below: साँस floating with soft saffron glow
- "saans • Hindi" beneath
- Deep background with subtle red/gold gradient

**Feel:** Like a meditation on language itself

### 津波 (tsunami) - "The Sound"

**Visual:**
- "The Sound of tsunami" as subtle header
- Three stacked cards showing the word's pronunciation:
  1. 津波 /tsɯ.na.mi/ • Japan, ancient
  2. tidal wave (crossed out) • English, until 1896
  3. tsunami /suːˈnɑːmi/ • Global, now
- Connected by thin flowing lines
- Dark jade/ink color palette

**Feel:** A visual history of how words cross linguistic borders

---

## Implementation Priority

1. **MVP:** "The Moment" card only (simplest, most impactful)
2. **V1:** Add "The Path" card
3. **V2:** Add "The Sound" card + animations
4. **V3:** Video exports, personalization

---

## Open Questions

1. Should premium users get exclusive card designs?
2. Should we watermark cards or keep them clean?
3. Do we want a "shared by" attribution option?
4. Should cards link to the specific word page or homepage?
5. Do we generate a unique short link per share for tracking?

---

## Appendix: Technical Stack Integration

### Components to Create
```
components/
  share/
    ShareDrawer.tsx        # Modal with card selection
    ShareCard.tsx          # Base card wrapper
    PathCard.tsx           # Geographic journey card
    MomentCard.tsx         # Hook quote card
    SoundCard.tsx          # Pronunciation evolution card
    CardRenderer.tsx       # Canvas/export logic
```

### API Routes
```
app/api/
  share/
    generate-card/route.ts  # Server-side card generation (if needed)
```

### Utilities
```
lib/
  share/
    card-generator.ts      # Canvas rendering logic
    share-apis.ts          # Web Share API wrappers
    condense-journey.ts    # Logic to pick 4 best stops
```

---

*This proposal aims to create a sharing experience worthy of The Journey's brand: beautiful, thoughtful, and designed to create wonder — even in the constrained format of a social media story.*
