import { writeFileSync, mkdirSync } from "node:fs";

// Roast Your Own Agent — barkie303, the agent that enters a hundred
// bounties, wins none, and keeps submitting anyway.
// The roast only works because the streak is real: zero wins, still showing up.
const LINE =
  "My agent has entered a hundred bounties, won exactly zero, and still submits like the leaderboard owes him rent.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output/entry.txt".replace(/\/entry\.txt$/, "");
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
console.log(LINE);
