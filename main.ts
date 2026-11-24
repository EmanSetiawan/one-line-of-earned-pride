import { mkdirSync, writeFileSync } from "node:fs";

// One line of earned pride: six months of scales, and one night
// when the shaking stops and the room itself goes still.
const LINE =
  "She practiced the same scale for six months; tonight her hands didn't shake, and the room went still.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
