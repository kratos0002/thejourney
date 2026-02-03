# Journey Project - Claude Instructions

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

## Quality Standards

Reference `data/words-batch26.ts` for quality examples. Each entry should:
- Tell a compelling etymological story across cultures/centuries
- Include accurate historical dates and locations
- Have precise geographic coordinates for the journey map
- Cross-reference other words in the collection where appropriate
