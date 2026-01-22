# The Journey — Design Language

## Core Aesthetic: Liquid Depth

The visual language is **flowing, deep, and luminous**—like bioluminescence in dark water. Every element should feel like it's suspended in a liquid medium, gently drifting, breathing.

---

## Color Palette

### Primary (The Deep)
- **Abyss**: `#0a0a0f` — The deepest background, almost black but with warmth
- **Deep Water**: `#12121a` — Primary surface color
- **Ink**: `#1a1a24` — Elevated surfaces, cards

### Secondary (The Glow)
- **Moonlight**: `#f0ede6` — Primary text, soft off-white
- **Mist**: `#a8a4a0` — Secondary text
- **Fog**: `#6b6866` — Tertiary text, disabled states

### Accent (The Luminescence)
- **Amber Glow**: `#d4a574` — Warm accent, for emphasis
- **Copper**: `#b87a4b` — Interactive elements, links
- **Teal Depth**: `#4a7c7c` — Secondary accent, for variety
- **Soft Gold**: `#c9b896` — Highlights, saved states

### Journey Colors (Cultural Atmospheres)
Each region/culture in a word's journey has a subtle color atmosphere:
- **Ethiopia/Africa**: Warm ochres, terracotta `#8b5a2b`
- **Arabia/Middle East**: Deep purples, rich blues `#4a3b6b`
- **Ottoman/Turkey**: Burgundy, ornate gold `#6b2d3d`
- **Mediterranean/Italy**: Warm stone, olive `#5c5a4a`
- **Northern Europe**: Cool grays, pale blues `#4a5568`
- **India/Sanskrit**: Saffron, deep red `#9b4a2c`
- **East Asia**: Ink black, jade green `#2d4a3b`

---

## Typography

### Display Font
**Cormorant Garamond** — Elegant, literary, with beautiful italics
- Word display: 600 weight, large sizes
- Used for: The main word, section titles

### Body Font
**Source Serif 4** — Readable, warm, refined
- Stories and descriptions: 400 weight
- Used for: All body text, revelations, stories

### Script/Original Languages
**Noto Sans [Language]** family for non-Latin scripts
- Arabic: Noto Sans Arabic
- Devanagari: Noto Sans Devanagari  
- Japanese: Noto Sans JP
- Maintain the beauty of each script

### Monospace (for phonetics)
**JetBrains Mono** — Clean, readable
- Used for: IPA pronunciations, linguistic notation

---

## Spacing & Rhythm

### Base Unit
8px grid system. All spacing derives from this.

### Generous Whitespace
- Screen padding: 48px (mobile), 80px (desktop)
- Between major sections: 64px+
- Text line-height: 1.7 for body, 1.2 for display

### The Breath
Nothing should feel cramped. Every element needs room to float.

---

## Motion Principles

### The Flow
All motion should feel **liquid**—smooth, slightly weighted, never snappy.

### Timing
- **Reveal**: 800ms - 1200ms (slow, deliberate)
- **Transition between states**: 400ms - 600ms
- **Micro-interactions**: 200ms - 300ms
- **Easing**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — smooth, slightly decelerating

### Motion Types

**Emergence**
Elements fade in and drift upward slightly (transform + opacity)
```css
@keyframes emerge {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Dissolution**
Elements fade out and drift, like ink dispersing
```css
@keyframes dissolve {
  to {
    opacity: 0;
    transform: scale(1.02);
    filter: blur(4px);
  }
}
```

**Breathing**
Subtle scale animation for resting elements
```css
@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.01); }
}
```

**Drift**
Slow, continuous movement for ambient elements
```css
@keyframes drift {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(5px, -5px); }
}
```

---

## Visual Effects

### Glow
Soft, diffused light around focal elements
```css
.glow {
  box-shadow: 
    0 0 40px rgba(212, 165, 116, 0.15),
    0 0 80px rgba(212, 165, 116, 0.08);
}
```

### Depth Layers
Use subtle gradients and shadows to create depth
```css
.depth-layer {
  background: linear-gradient(
    180deg,
    rgba(18, 18, 26, 0.8) 0%,
    rgba(10, 10, 15, 1) 100%
  );
}
```

### Grain Texture
Subtle noise overlay for organic feel
```css
.grain::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url('data:image/svg+xml,...'); /* noise pattern */
  opacity: 0.03;
  pointer-events: none;
}
```

### Edge Fade
Content fades at viewport edges rather than hard cutoff
```css
.edge-fade {
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}
```

---

## Component Patterns

### Cards/Containers
- No hard borders
- Subtle background differentiation
- Generous padding (24px - 40px)
- Soft corners (12px - 16px radius)

### Buttons/Interactive Elements
- Minimal chrome
- State changes through glow and color, not borders
- Touch targets: minimum 44px
- Hover: subtle glow + slight lift

### Progress/Navigation Indicators
- Dots or dashes, not numbers
- Soft, not aggressive
- Current state: glowing
- Completed: softly lit
- Upcoming: dim but visible

---

## Responsive Principles

### Mobile First
- Full-screen immersive experience
- Tap as primary interaction
- Swipe for progression
- Bottom navigation if needed

### Desktop
- Centered content, max-width 800px for reading
- Keyboard navigation support
- Hover states for exploration
- Larger type, more whitespace

### Transitions Between Breakpoints
- Fluid typography: `clamp()`
- Spacing scales proportionally
- Same visual language, adapted density

---

## Accessibility

### Color Contrast
- Primary text on background: 7:1 minimum
- Secondary text: 4.5:1 minimum
- Interactive elements: clearly distinguishable

### Motion
- Respect `prefers-reduced-motion`
- Provide static alternatives
- No essential content hidden by animation

### Focus States
- Clear, visible focus indicators
- Glow-style rather than outline
- Keyboard navigable throughout

---

## The Feel

When someone uses The Journey, they should feel:
- **Wonder** — like discovering a secret
- **Calm** — unhurried, meditative
- **Immersed** — lost in the depth
- **Moved** — by the beauty of language

The design serves this feeling. Every choice should ask: does this create wonder?
