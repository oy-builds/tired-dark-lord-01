import * as fs from "node:fs";

const MONOLOGUE =
  "You stand before Malachar the Undying. Do not kneel \u2014 the floor is wet, someone mopped, and I have asked them, repeatedly, in triplicate. Yes. The legions. The legions will rise when the paperwork clears. Three centuries I have waited for the Death Ministry to stamp form 44-B, and the clerk who stamps it died before I did. He still haunts the desk, which helps no one. So. Mind the mop bucket. Kneel, if you must. Tremble, if you like. I have a kingdom to conquer and a rota to fill, and the rota, hero \u2014 the rota is winning.\n";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", MONOLOGUE, "utf-8");
