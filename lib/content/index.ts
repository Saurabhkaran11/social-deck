/* Single entry point for all content. Import from here in the web app (and later the iOS app). */
import { LEVELS, TRACKS } from "./levels";
import { TOPICS_A } from "./topics-a";
import { TOPICS_B } from "./topics-b";
import type { Topic } from "./types";

export * from "./types";
export { LEVELS, TRACKS } from "./levels";
export { PLATFORMS } from "./platforms";
export { TOOL_GROUPS, KIND_LABEL } from "./tools";
export { CERTS } from "./certs";
export { ROLES } from "./careers";
export { IDEAS, IDEA_CATS } from "./ideas";
export { SCAMS, SCAM_STATS, CHECKLIST, QUIZ, TRAINING, REPORT_LINKS } from "./safety";
export { CHANNELS, GLOSSARY, LAUNCH, TROUBLESHOOT } from "./extras";

export const TOPICS: Topic[] = [...TOPICS_A, ...TOPICS_B];
export const PATH_IDS: string[] = LEVELS.flatMap((l) => l.topics);
export const topicById = (id: string) => TOPICS.find((t) => t.id === id);
export const levelOf = (id: string) => LEVELS.find((l) => l.topics.includes(id));

/* Integrity check: every level/track topic exists. Runs at build time. */
for (const id of [...PATH_IDS, ...TRACKS.flatMap((t) => t.topics)]) {
  if (!topicById(id)) throw new Error(`Unknown topic id in levels/tracks: ${id}`);
}
