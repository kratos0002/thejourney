/**
 * Validates all word entries for duplicates and structural issues.
 *
 * This script checks:
 * 1. Duplicate slugs (ERROR - will fail build)
 * 2. Story paragraph count (WARN if not 4)
 * 3. Journey stop count (WARN if less than 4)
 * 4. Sound entry count (WARN if less than 2)
 * 5. Relative word count (WARN if less than 3)
 * 6. Missing required fields (ERROR)
 * 7. Invalid coordinates (ERROR)
 *
 * Usage: npx tsx scripts/validate-words.ts
 *
 * Exit codes:
 *   0 = All validations passed
 *   1 = Errors found (duplicates or missing fields)
 */

import { allWords } from "../data/words";
import type { Word } from "../data/word-types";

interface ValidationResult {
  errors: string[];
  warnings: string[];
}

function validateWord(word: Word): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Required fields check
  if (!word.slug) errors.push("Missing slug");
  if (!word.word) errors.push("Missing word");
  if (!word.romanization) errors.push("Missing romanization");
  if (!word.language) errors.push("Missing language");
  if (!word.hook) errors.push("Missing hook");
  if (!word.meaningNow) errors.push("Missing meaningNow");

  // Story validation
  if (!word.story || !Array.isArray(word.story)) {
    errors.push("Missing or invalid story array");
  } else if (word.story.length !== 4) {
    warnings.push(`Story has ${word.story.length} paragraphs (expected 4)`);
  }

  // Journey validation
  if (!word.journey || !Array.isArray(word.journey)) {
    errors.push("Missing or invalid journey array");
  } else {
    if (word.journey.length < 4) {
      warnings.push(`Journey has ${word.journey.length} stops (expected 4+)`);
    }
    // Validate coordinates
    word.journey.forEach((stop, i) => {
      if (!stop.coordinates || stop.coordinates.length !== 2) {
        errors.push(`Journey stop ${i + 1}: Missing or invalid coordinates`);
      } else {
        const [lng, lat] = stop.coordinates;
        if (typeof lng !== "number" || typeof lat !== "number") {
          errors.push(`Journey stop ${i + 1}: Coordinates must be numbers`);
        } else if (lng < -180 || lng > 180 || lat < -90 || lat > 90) {
          errors.push(`Journey stop ${i + 1}: Coordinates out of range [${lng}, ${lat}]`);
        }
      }
      if (!stop.location) errors.push(`Journey stop ${i + 1}: Missing location`);
      if (!stop.period) errors.push(`Journey stop ${i + 1}: Missing period`);
      if (!stop.form) errors.push(`Journey stop ${i + 1}: Missing form`);
      if (!stop.context) errors.push(`Journey stop ${i + 1}: Missing context`);
    });
  }

  // Sounds validation
  if (!word.sounds || !Array.isArray(word.sounds)) {
    errors.push("Missing or invalid sounds array");
  } else if (word.sounds.length < 2) {
    warnings.push(`Sounds has ${word.sounds.length} entries (expected 2+)`);
  }

  // Relatives validation
  if (!word.relatives || !Array.isArray(word.relatives)) {
    errors.push("Missing or invalid relatives array");
  } else if (word.relatives.length < 3) {
    warnings.push(`Relatives has ${word.relatives.length} entries (expected 3+)`);
  }

  return { errors, warnings };
}

function checkDuplicates(words: Word[]): Map<string, number> {
  const slugCounts = new Map<string, number>();
  for (const word of words) {
    slugCounts.set(word.slug, (slugCounts.get(word.slug) || 0) + 1);
  }
  return new Map([...slugCounts.entries()].filter(([_, count]) => count > 1));
}

// Main execution
console.log("🔍 Validating word entries...\n");

let hasErrors = false;
let totalWarnings = 0;

// Check for duplicates first
const duplicates = checkDuplicates(allWords);
if (duplicates.size > 0) {
  hasErrors = true;
  console.log("❌ DUPLICATE SLUGS FOUND:");
  for (const [slug, count] of duplicates) {
    console.log(`   - "${slug}" appears ${count} times`);
  }
  console.log("");
}

// Validate each word
const wordIssues: { slug: string; errors: string[]; warnings: string[] }[] = [];

for (const word of allWords) {
  const { errors, warnings } = validateWord(word);
  if (errors.length > 0 || warnings.length > 0) {
    wordIssues.push({ slug: word.slug, errors, warnings });
  }
  if (errors.length > 0) hasErrors = true;
  totalWarnings += warnings.length;
}

// Report errors
const wordsWithErrors = wordIssues.filter(w => w.errors.length > 0);
if (wordsWithErrors.length > 0) {
  console.log("❌ VALIDATION ERRORS:");
  for (const { slug, errors } of wordsWithErrors) {
    console.log(`   ${slug}:`);
    for (const error of errors) {
      console.log(`      - ${error}`);
    }
  }
  console.log("");
}

// Report warnings (only if no errors, to keep output clean)
if (!hasErrors && totalWarnings > 0) {
  console.log("⚠️  WARNINGS:");
  for (const { slug, warnings } of wordIssues.filter(w => w.warnings.length > 0)) {
    console.log(`   ${slug}:`);
    for (const warning of warnings) {
      console.log(`      - ${warning}`);
    }
  }
  console.log("");
}

// Summary
console.log("─".repeat(50));
console.log(`📊 Summary: ${allWords.length} words checked`);
console.log(`   Errors: ${wordsWithErrors.length > 0 || duplicates.size > 0 ? "❌" : "✅"} ${wordsWithErrors.reduce((sum, w) => sum + w.errors.length, 0) + duplicates.size}`);
console.log(`   Warnings: ${totalWarnings}`);

if (hasErrors) {
  console.log("\n❌ Validation FAILED. Fix errors before proceeding.");
  process.exit(1);
} else {
  console.log("\n✅ Validation PASSED.");
  process.exit(0);
}
