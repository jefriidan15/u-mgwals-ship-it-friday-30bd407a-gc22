import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "fix: ship it before the weekend — if it breaks, Monday-me gets to enjoy the mystery of what Friday-me deployed"; // one line, 1-159 chars

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
