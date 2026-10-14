"use client";
import { CSSProperties, useState } from "react";
import { LAST_VERIFIED, PLATFORMS } from "@/lib/content";

export default function Platforms() {
  const [q, setQ] = useState("");
  const list = PLATFORMS.filter((p) => !q || (p.name + p.bestFor + p.formats.join(" ")).toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <header className="page-head">
        <span className="eyebrow"><i />Platform guide</span>
        <h1>Every platform, compared</h1>
        <p className="lede">Who uses it, what the feed rewards, what to post and how creators get paid. Payout rules change often, so each card shows its source and when it was last checked.</p>
      </header>
      <div className="notice"><b>Heads up</b><span>Rules last checked {LAST_VERIFIED}. YouTube raises its Partner Program bar on Feb 1, 2027, and X replaced its payout program in Sept 2026. Always confirm on the official page before you plan around a threshold.</span></div>
      <div className="search" style={{ marginTop: 18 }}>
        <span aria-hidden="true">🔎</span>
        <input aria-label="Search platforms" placeholder="Search, e.g. video, B2B, shop" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="grid c2" style={{ marginTop: 18 }}>
        {list.map((p, i) => (
          <article key={p.id} className="pane plat rise" style={{ "--c": p.color, "--i": i } as CSSProperties}>
            <div className="plat-head"><b>{p.name}</b><span>US adults: {p.reachUS}</span></div>
            <p>{p.bestFor}</p>
            <div className="grid c2" style={{ gap: 12 }}>
              <div><h4>What the feed rewards</h4><ul>{p.ranking.map((x) => <li key={x}>{x}</li>)}</ul></div>
              <div><h4>Formats</h4><ul>{p.formats.map((x) => <li key={x}>{x}</li>)}</ul></div>
            </div>
            <div><h4>Starting cadence</h4><p>{p.cadence}</p></div>
            <div className="money"><h4>How creators get paid</h4>{p.money.map(([n, r]) => <div key={n}><b>{n}</b>{r}</div>)}</div>
            {p.change && <div className="change"><strong>Changed / changing:</strong> {p.change}</div>}
            <div className="plat-foot">
              <a href={p.hub[1]} target="_blank" rel="noopener noreferrer">{p.hub[0]} ↗</a>
              <span>Checked {p.verified} · <a href={p.source} target="_blank" rel="noopener noreferrer">source</a></span>
            </div>
          </article>
        ))}
      </div>
      <p className="tiny" style={{ marginTop: 16 }}>US usage from Pew Research Center, "Americans' Social Media Use 2025".</p>
    </div>
  );
}
