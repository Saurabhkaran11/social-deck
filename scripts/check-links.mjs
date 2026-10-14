#!/usr/bin/env node
/* Checks every https link in lib/content. Usage: npm run check-links
   OK = page loads. BLOCKED = the site blocks automated checks (usually fine). BROKEN = fix or replace. */
import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "lib", "content");
const urls = new Map();
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
  const text = fs.readFileSync(path.join(dir, f), "utf8");
  for (const m of text.matchAll(/https:\/\/[^\s"'`<>)\]]+/g)) {
    const u = m[0].replace(/[.,;]+$/, "");
    if (u.includes("<your-username>") || u.endsWith("search_query=")) continue;
    if (!urls.has(u)) urls.set(u, f);
  }
}

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Safari/537.36";
const BLOCKED = new Set([310, 400, 401, 403, 405, 429, 451, 503, 999]);
/* Sites that answer automated requests with 404 even for their homepage (checked by hand in a browser). */
const BOT_PROTECTED = ["ftc.gov"];

async function probe(url) {
  for (const method of ["HEAD", "GET"]) {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 15000);
    try {
      const r = await fetch(url, { method, redirect: "follow", signal: ctl.signal, headers: { "user-agent": UA, accept: "text/html,*/*" } });
      if (method === "GET") r.body?.cancel().catch(() => {});
      if (method === "HEAD" && r.status >= 400) continue;
      return r.status;
    } catch (e) {
      const code = e?.cause?.code ?? "";
      if (/redirect/i.test(String(e?.cause?.message ?? e?.message))) return 310;
      if (code === "UND_ERR_HEADERS_OVERFLOW") return 299;
      if (method === "GET") return 0;
    } finally {
      clearTimeout(t);
    }
  }
  return 0;
}

const list = [...urls.keys()];
const results = [];
let i = 0;
await Promise.all(Array.from({ length: 8 }, async () => {
  while (i < list.length) {
    const u = list[i++];
    let s = await probe(u);
    if (s === 0) s = await probe(u); // retry network errors once
    const prot = BOT_PROTECTED.some((h) => new URL(u).hostname.endsWith(h));
    const state = BLOCKED.has(s) || (prot && s === 404) ? "BLOCKED" : s >= 200 && s < 400 ? "OK" : "BROKEN";
    results.push({ u, s, state, file: urls.get(u) });
    process.stdout.write(state === "OK" ? "." : state === "BLOCKED" ? "b" : "x");
  }
}));
const broken = results.filter((r) => r.state === "BROKEN");
console.log(`\n\n${results.length} links · ${results.filter((r) => r.state === "OK").length} OK · ${results.filter((r) => r.state === "BLOCKED").length} blocked by bot protection · ${broken.length} broken`);
for (const r of broken) console.log(`  BROKEN ${r.s}  ${r.u}  (${r.file})`);
process.exit(broken.length ? 1 : 0);
