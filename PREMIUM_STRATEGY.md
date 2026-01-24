# Premium Strategy: The Journey

## Positioning

The Journey is a **knowledge-as-luxury** product. Not a dictionary, not a language course — a curated, cinematic exploration of how words traveled the world. The premium experience should feel like buying a beautiful art book, not subscribing to a utility.

Key principles:
- **No ads, ever.** Ads destroy the immersive aesthetic.
- **Curated, not comprehensive.** 100 deeply researched words > 10,000 shallow definitions.
- **One-time purchase over subscription.** Subscription fatigue is real (50%+ users actively avoid). A finite, beautiful product earns a one-time price.

---

## Personas

### 1. The Curious Explorer
**Who:** 25-45, educated, reads longform content (Aeon, The Atlantic, Brain Pickings). Enjoys rabbit holes. The type who reads Wikipedia for fun.

**Motivation:** Discovery, serendipity, "I didn't know that" moments. Wants to feel smarter and more connected to the world.

**Willingness to pay:** Moderate. Will pay for something beautiful and unique, but needs to feel the depth. Won't pay for something they can Google.

**What they want:**
- All word journeys unlocked
- New words added regularly
- Deep-dive content (extended stories, historical context)
- The feeling of being part of something curated and exclusive

---

### 2. The Language Lover
**Who:** 20-40, multilingual or aspiring. Studies languages on Duolingo/Anki but craves the *why* behind words. Linguists, translators, polyglots.

**Motivation:** Understanding linguistic connections, seeing patterns across language families, hearing authentic pronunciation.

**Willingness to pay:** High for specialized linguistic content. Already pays for language tools.

**What they want:**
- Etymology trees (visual word family connections)
- Audio from native speakers (beyond TTS)
- Comparative linguistics features (how the same root evolved in 5 languages)
- Export/save features for study

---

### 3. The Collector / Completionist
**Who:** 25-35, grew up with Pokemon/games. Enjoys progress bars, achievements, completion. Uses apps like Forest, Duolingo streaks, Goodreads reading challenges.

**Motivation:** "Explore them all." Wants to see the map fill up, the counter increase, unlock everything.

**Willingness to pay:** Will pay for exclusive collectibles, limited editions, expansion packs. Responds to FOMO and completionism.

**What they want:**
- Visual progress (language map, world coverage)
- Achievement system (milestones, streak tracking)
- Exclusive/seasonal words
- Shareable achievement cards
- Personal stats and year-in-review

---

### 4. The Gift Giver / Cultural Appreciator
**Who:** 30-55, buys thoughtful gifts. Values culture, education, aesthetics. The person who buys Monocle magazine or a beautiful globe.

**Motivation:** Wants to give (or own) something intellectually beautiful. Values craftsmanship and curation.

**Willingness to pay:** High for the right presentation. Will pay $30-80 for a "digital art book" experience.

**What they want:**
- Gift-able purchase (send to a friend)
- Beautiful offline experience
- Print-quality shareable cards
- Coffee-table-book energy in digital form

---

## Tier Structure (Decided)

### Free (anonymous)
- Explore **5 words** fully (story, map, sound, everything)
- Full 3D sphere navigation (see all words on sphere)
- After 5 words → **sign-in gate** (free email OTP account)

### Signed In (free account)
- Explore up to **20 words** total
- Cross-device sync of exploration progress
- Access to feedback/suggestions
- After 20 words → **premium gate**

### Premium — $9.99 one-time (lifetime)
- **All words unlocked forever** (including any words added in the future)
- No subscription, no recurring charges
- One purchase, permanent access

**Why $9.99 works:**
- Impulse-buy price point (less than lunch)
- Zero marginal cost per user (no API calls, static content)
- "Forever" access creates goodwill and word-of-mouth
- Low enough that conversion rate can be high (target 5-10% of signed-in users)

### Future (not now)
- Subscription model with additional features (stats, etymology trees, native audio, etc.) — only when the feature set justifies recurring payment
- Word packs, themed collections, etc.

---

## Implementation Plan

### Phase 1: Premium Gate (MVP)
1. **Premium gate UI** — modal at 20 words explored, similar design to sign-in gate
2. **Stripe Checkout** — one-time $9.99 payment, redirect flow (simplest integration)
3. **`user_purchases` table** — track who has paid (user_id, purchased_at, stripe_session_id)
4. **Premium check in ExplorationProvider** — if exploredCount >= 20 && !isPremium → show gate
5. **Stripe webhook** — confirm payment, mark user as premium in DB
6. **Restore purchases** — on login, check DB for existing purchase (works across devices)

### Phase 2: Polish & Growth (after launch + revenue)
7. **Collection view** — grid of all words, explored/locked/premium status
8. **Personal stats** — languages discovered, regions covered
9. **Share cards** — beautiful per-word images for social sharing
10. **Gift purchases** — buy for a friend via email

### Phase 3: Subscription Features (future)
11. Etymology trees, native audio, extended stories, word-of-the-day
12. Only when feature depth justifies a recurring price

---

## Revenue Model

**Price:** $9.99 one-time (lifetime access)

**Funnel:**
```
Visitors → 5 words free → Sign up (free) → 20 words → Premium gate → $9.99
```

**Projections (conservative, 5% conversion of signed-in users):**
- 1,000 signed-in users × 5% = 50 purchases = $500
- 5,000 signed-in users × 5% = 250 purchases = $2,500
- 10,000 signed-in users × 5% = 500 purchases = $5,000

**Why one-time works:**
- Zero marginal cost (static content, no API calls)
- "Forever" creates goodwill → word-of-mouth growth
- No churn to manage
- Simple implementation (one Stripe Checkout, one DB flag)
- Future subscription is additive, not a migration

---

## Competitive White Space

No one is doing **etymology as luxury experience**:
- Etymonline: free, ad-supported, ugly, text-only
- Merriam-Webster: utility, not experience
- Vocabulary.com: gamified quizzing, B2B focused
- Duolingo: language learning, not etymology
- Blinkist/MasterClass: video/audio summaries, not words

The Journey sits alone at the intersection of: **beautiful UX + deep etymology + interactive maps + curated storytelling**. This is the white space.

---

## Open Questions

1. **Premium gate UX:** Same full-screen overlay as sign-in gate? Or a softer "upgrade" prompt?
2. **Locked word experience:** When premium user hasn't paid, do locked words (21+) show the hook/hero as a teaser, or stay fully hidden?
3. **Content pipeline:** Can we sustain adding new words regularly? What's the editorial effort per word?
4. **Stripe setup:** Use Stripe Checkout (redirect) or embedded payment form?
5. **B2B angle (future):** Teachers/schools as secondary market?

---

## Technical Requirements (for Phase 1)

### Database
```sql
CREATE TABLE user_purchases (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  stripe_session_id TEXT,
  amount_cents INTEGER DEFAULT 999,
  purchased_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE user_purchases ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read own purchases" ON user_purchases
  FOR SELECT USING (auth.uid() = user_id);
```

### Stripe
- One-time Checkout Session ($9.99)
- Success URL → `/purchase/success` (marks user as premium)
- Webhook → `POST /api/stripe/webhook` (confirms payment in DB)

### ExplorationProvider Changes
- New state: `isPremium` (boolean)
- On auth, check `user_purchases` table
- New gate: `shouldShowPremiumGate` (exploredCount >= 20 && !isPremium)

### New Components
- `PremiumGate.tsx` — modal similar to ExplorationGate, with Stripe checkout button
- `app/api/stripe/checkout/route.ts` — creates Checkout Session
- `app/api/stripe/webhook/route.ts` — handles payment confirmation
- `app/purchase/success/page.tsx` — post-purchase confirmation page

---

## Next Steps

1. Share the free app, gather initial users and analytics data
2. Monitor PostHog: which words engage most, where users drop off, how many hit 20 words
3. When ready: build Phase 1 (Stripe + premium gate)
4. Announce premium on social/Product Hunt once live
