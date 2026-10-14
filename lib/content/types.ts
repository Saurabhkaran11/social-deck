/* Shared content types. Everything in lib/content is plain data (no React), so the same
   files can power the web app now and an iOS app (React Native / Expo) later. */

/** [name, url, note] */
export type Res = [string, string, string?];
/** A video: [name, url or YouTube search phrase, note] */
export type Vid = [string, string, string?];

export type Topic = {
  id: string;
  level: number;
  title: string;
  /** One or two plain-English sentences. */
  simple: string;
  why: string;
  time: string;
  steps: string[];
  free: Res[];
  paid?: Res[];
  videos?: Vid[];
  tips?: string[];
  /** Important caveat, policy change or legal note. */
  watch?: string;
  /** Pages in the app that go deeper, e.g. "/platforms". */
  see?: [string, string][];
};

export type Level = { n: number; name: string; tag: string; desc: string; color: string; topics: string[] };

export type Track = {
  id: "creator" | "business" | "agency";
  name: string;
  who: string;
  outcome: string;
  color: string;
  topics: string[];
  firstWeek: string[];
};

export const YT = (q: string) => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);

/** Date the facts in this release were last checked. Re-verify thresholds and prices every quarter. */
export const LAST_VERIFIED = "Oct 14, 2026";
