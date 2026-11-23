// Dad Joke Showdown — entry for make.fun bounty
// u-mfnakmal-dad-joke-showdown-1d2ce3e5
// Writes exactly one original dad joke (<= 200 chars) to /output/entry.txt
// using only the Node.js standard library.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My son asked why I keep a ladder in the kitchen. I said, 'The steaks are high, and someone has to raise the bar.'";

// The gate requires 1 to 200 characters of UTF-8 text, not only whitespace.
const length = [...JOKE].length;
if (length < 1 || length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
