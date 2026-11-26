import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of the Moon, 120 characters at most. The joke is a
// landlord complaint aimed at the Moon itself: it runs the tides, floods
// the beach twice a day, fixes nothing, and still raises the rent.
const REVIEW =
  "One star. Landlord of the tides: never fixes anything, floods my beach twice daily, and still raises the rent monthly.";

if (REVIEW.length < 1 || REVIEW.length > 120) {
  throw new Error(`review must be 1-120 characters, got ${REVIEW.length}`);
}
if (REVIEW.trim().length === 0) {
  throw new Error("review must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(REVIEW);
console.log(`chars: ${REVIEW.length}`);
