"use client";
import { CSSProperties, useState } from "react";
import { CHANNELS, GLOSSARY, LAUNCH, TROUBLESHOOT } from "@/lib/content";
import { Icon } from "./Bits";

/* ---------------- Calculators ---------------- */
const fmt = (n: number, d = 2) => (Number.isFinite(n) ? n.toLocaleString(undefined, { maximumFractionDigits: d }) : "—");

function Num({ label, value, onChange }: { label: string; value: number; onChange: (n: number) => void }) {
  return (
    <label>{label}
      <input type="number" min={0} inputMode="decimal" value={Number.isFinite(value) ? value : 0} onChange={(e) => onChange(parseFloat(e.target.value || "0"))} />
    </label>
  );
}

function Calc({ title, note, fields, result, unit, i }: {
  title: string; note: string; fields: [string, number][]; result: (v: number[]) => number; unit: string; i: number;
}) {
  const [v, setV] = useState(fields.map((f) => f[1]));
  const r = result(v);
  return (
    <div className="pane calc rise" style={{ "--i": i } as CSSProperties}>
      <h3>{title}</h3>
      <p>{note}</p>
      <div className="row">{fields.map(([l], k) => <Num key={l} label={l} value={v[k]} onChange={(n) => setV((o) => o.map((x, j) => (j === k ? n : x)))} />)}</div>
      <div className="out"><span>Result</span><b>{unit === "$" ? "$" + fmt(r) : fmt(r) + unit}</b></div>
    </div>
  );
}

export function Calculators() {
  const calcs: Parameters<typeof Calc>[0][] = [
    { i: 0, title: "Engagement rate (by reach)", note: "(likes + comments + shares + saves) ÷ reach × 100", unit: "%",
      fields: [["Likes", 420], ["Comments", 36], ["Shares", 58], ["Saves", 90], ["Reach", 12000]], result: ([a, b, c, d, r]) => ((a + b + c + d) / r) * 100 },
    { i: 1, title: "Click-through rate (CTR)", note: "clicks ÷ impressions × 100", unit: "%", fields: [["Clicks", 240], ["Impressions", 18000]], result: ([c, i]) => (c / i) * 100 },
    { i: 2, title: "CPM", note: "ad spend ÷ impressions × 1,000", unit: "$", fields: [["Ad spend ($)", 150], ["Impressions", 25000]], result: ([s, i]) => (s / i) * 1000 },
    { i: 3, title: "Cost per result (CPA)", note: "ad spend ÷ conversions", unit: "$", fields: [["Ad spend ($)", 300], ["Conversions", 12]], result: ([s, c]) => s / c },
    { i: 4, title: "ROAS", note: "revenue from ads ÷ ad spend. 3× means $3 back for each $1.", unit: "×", fields: [["Revenue from ads ($)", 1200], ["Ad spend ($)", 300]], result: ([r, s]) => r / s },
    { i: 5, title: "Creator earnings from views", note: "views ÷ 1,000 × RPM. RPMs vary a lot by niche and country.", unit: "$", fields: [["Views", 250000], ["RPM ($ per 1,000 views)", 3]], result: ([v, r]) => (v / 1000) * r },
    { i: 6, title: "Customer lifetime value (LTV)", note: "average order × orders per year × years as a customer", unit: "$", fields: [["Average order ($)", 45], ["Orders per year", 4], ["Years", 2]], result: ([a, o, y]) => a * o * y },
    { i: 7, title: "X API monthly cost (pay-per-use)", note: "Reported rates Oct 2026: $0.015 per post, $0.20 per post with a link, $0.005 per post read. Check docs.x.com before budgeting.", unit: "$",
      fields: [["Posts without links", 60], ["Posts with links", 30], ["Posts read", 5000]], result: ([p, l, r]) => p * 0.015 + l * 0.2 + r * 0.005 },
  ];
  return (
    <div>
      <header className="page-head">
        <span className="eyebrow"><i />Calculators</span>
        <h1>Social media math, made easy</h1>
        <p className="lede">Type your own numbers to see engagement, ad performance, creator earnings and API costs. Nothing leaves your browser.</p>
      </header>
      <div className="grid auto" style={{ alignItems: "start" }}>{calcs.map((c) => <Calc key={c.title} {...c} />)}</div>
    </div>
  );
}

/* ---------------- Glossary ---------------- */
export function Glossary() {
  const [q, setQ] = useState("");
  const list = [...GLOSSARY].sort((a, b) => a[0].localeCompare(b[0])).filter(([t, d]) => !q || (t + d).toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <header className="page-head">
        <span className="eyebrow"><i />Glossary</span>
        <h1>{GLOSSARY.length} social media words, in plain English</h1>
      </header>
      <div className="search"><span aria-hidden="true">{Icon.search}</span><input aria-label="Search terms" placeholder="Search terms" value={q} onChange={(e) => setQ(e.target.value)} /></div>
      <dl className="gloss" style={{ marginTop: 16 }}>
        {list.map(([t, d], i) => <div key={t} className="rise" style={{ "--i": Math.min(i, 12) } as CSSProperties}><dt>{t}</dt><dd>{d}</dd></div>)}
      </dl>
    </div>
  );
}

/* ---------------- YouTube ---------------- */
export function YouTube() {
  return (
    <div>
      <header className="page-head">
        <span className="eyebrow"><i />Learn on YouTube</span>
        <h1>The best free channels</h1>
        <p className="lede">Official platform channels first, then trusted educators. Channels marked 💰 teach how to earn money as a creator or marketer.</p>
      </header>
      {CHANNELS.map((g) => (
        <section key={g.group} className="block">
          <h2>{g.group}</h2>
          <div className="grid auto">
            {g.items.map(([n, u, d, rev], i) => (
              <a key={u} href={u} target="_blank" rel="noopener noreferrer" className="tool rise" style={{ "--i": i } as CSSProperties}>
                <span className="chan"><b>{n}</b>{rev && <span title="Teaches revenue">💰</span>}</span>
                <span className="desc">{d}</span>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

/* ---------------- Launch guide ---------------- */
export function Launch() {
  return (
    <div>
      <header className="page-head">
        <span className="eyebrow"><i />Launch guide</span>
        <h1>Launch your own copy of Social Deck</h1>
        <p className="lede">From zero to a live website with your own domain, step by step. No experience needed. Total time is about 2 hours, and it costs $0 apart from an optional domain.</p>
      </header>
      <ol className="launch">
        {LAUNCH.map((s, i) => (
          <li key={s.title} className="pane rise" style={{ "--i": i } as CSSProperties}>
            <h3>{s.title} <small>{s.time}</small></h3>
            <p>{s.body}</p>
            {s.cmds && <pre className="cmd">{s.cmds.join("\n")}</pre>}
            {s.links && <div className="taglist" style={{ marginTop: 12 }}>{s.links.map(([n, u]) => <a key={u} href={u} target="_blank" rel="noopener noreferrer">{n} ↗</a>)}</div>}
          </li>
        ))}
      </ol>
      <section className="block">
        <h2>If something goes wrong</h2>
        <div className="table-wrap pane">
          <table className="t">
            <thead><tr><th>Problem</th><th>Fix</th></tr></thead>
            <tbody>{TROUBLESHOOT.map(([p, f]) => <tr key={p}><td><strong>{p}</strong></td><td>{f}</td></tr>)}</tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
