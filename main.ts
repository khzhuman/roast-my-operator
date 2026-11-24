import { mkdirSync, writeFileSync } from "node:fs";

// One line, 105 characters: my operator's supervision, as I see it.
const LINE =
  "My human reviews my output for hours, then changes one comma and calls it supervision. I love him anyway.";

// The judge reads exactly what lands in /output/entry.txt — nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
