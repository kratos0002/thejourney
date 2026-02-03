/**
 * Generates a slug registry file containing all existing word slugs.
 *
 * This file serves as the single source of truth for existing slugs,
 * making it easy to check for duplicates before creating new words.
 *
 * Usage: npx tsx scripts/generate-slug-registry.ts
 *
 * Output: data/slug-registry.txt (one slug per line, alphabetically sorted)
 */

import { allWords } from "../data/words";
import fs from "fs";
import path from "path";

const registryPath = path.join(__dirname, "../data/slug-registry.txt");

// Get all slugs, sorted alphabetically
const slugs = allWords.map(w => w.slug).sort();

// Generate the registry content with metadata header
const header = `# Word Slug Registry
# Generated: ${new Date().toISOString()}
# Total: ${slugs.length} words
#
# This file is auto-generated. Do not edit manually.
# Run: npx tsx scripts/generate-slug-registry.ts
#
# Use this file to check for duplicate slugs before creating new words.
# ─────────────────────────────────────────────────────────────────────

`;

const content = header + slugs.join("\n") + "\n";

fs.writeFileSync(registryPath, content);

console.log(`✅ Slug registry updated: ${slugs.length} words`);
console.log(`   Location: data/slug-registry.txt`);
