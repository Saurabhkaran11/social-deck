"use client";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { CERTS, IDEAS, IDEA_CATS, KIND_LABEL, ROLES, TOOL_GROUPS, TRACKS } from "@/lib/content";
import { Accordion, Icon } from "./Bits";

/* ---------------- Tools ---------------- */
export function Tools() {
  const [q, setQ] = useState("");
  const [kind, setKind] = useState<"all" | "free">("all");
  const match = (t: (typeof TOOL_GROUPS)[number]["tools"][number]) =>
    (kind === "all" || t[3] !== "paid") && (!q || (t[0] + t[4] + t[2]).toLowerCase().includes(q.toLowerCase()));
  const total = TOOL_GROUPS.reduce((n, g) => n + g.tools.length, 0);
  return (
    <div>
      <header className="page-head">
        <span className="eyebrow"><i />Tools</span>
        <h1>{total} tools for social media</h1>
        <p className="lede">Scheduling, automation, editing, design, AI, analytics and selling. Free and free-to-start options are listed first in each group.</p>
      </header>
      <div className="pane" style={{ padding: 16, display: "grid", gap: 12 }}>
        <div className="search"><span aria-hidden="true">{Icon.search}</span><input aria-label="Search tools" placeholder="Search tools" value={q} onChange={(e) => setQ(e.target.value)} /></div>
        <div className="chips">
          <button type="button" className={kind === "all" ? "on" : ""} onClick={() => setKind("all")}>All</button>
          <button type="button" className={kind === "free" ? "on" : ""} onClick={() => setKind("free")}>Free or free to start</button>
        </div>
      </div>
      {TOOL_GROUPS.map((g) => {
        const tools = g.tools.filter(match).sort((a, b) => Number(a[3] === "paid") - Number(b[3] === "paid"));
        if (!tools.length) return null;
        return (
          <section key={g.id} className="block">
            <div className="block-head"><h2>{g.name}</h2><span className="tiny">{g.desc}</span></div>
            <div className="grid auto">
              {tools.map(([n, u, price, k, d, ok], i) => (
                <a key={n} href={u} target="_blank" rel="noopener noreferrer" className="tool rise" style={{ "--i": i } as CSSProperties}>
                  <b>{n}</b>
                  <span className="desc">{d}</span>
                  <span className="pr"><span className={`price ${k}`}>{KIND_LABEL[k]}</span>{price}{ok && <span className="ok">✓ vendor page</span>}</span>
                </a>
              ))}
            </div>
          </section>
        );
      })}
      <p className="tiny" style={{ marginTop: 20 }}>Prices change often. Items marked ✓ were checked on the vendor's pricing page in Oct 2026; others come from recent reviews, so confirm before buying.</p>
    </div>
  );
}

/* ---------------- Certificates ---------------- */
export function Certificates() {
  const [track, setTrack] = useState("all");
  const list = CERTS.filter((c) => track === "all" || c.track.includes(track));
  const Section = ({ free }: { free: boolean }) => (
    <div className="table-wrap pane">
      <table className="t">
        <thead><tr><th>Certificate</th><th>By</th><th>Cost</th><th>Good for</th></tr></thead>
        <tbody>
          {list.filter((c) => c.free === free).map((c) => (
            <tr key={c.name + c.cost}>
              <td><a href={c.url} target="_blank" rel="noopener noreferrer">{c.name}</a><div className="tiny">{c.note}</div></td>
              <td>{c.by}</td>
              <td><span className={`price ${free ? "free" : "paid"}`}>{c.cost}</span></td>
              <td>{c.track.map((t) => TRACKS.find((x) => x.id === t)?.name).join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  return (
    <div>
      <header className="page-head">
        <span className="eyebrow"><i />Certificates</span>
        <h1>Free certificates first</h1>
        <p className="lede">Start with free certificates from HubSpot, Meta, Google, TikTok, LinkedIn and Pinterest. Add one paid credential once you know your direction.</p>
      </header>
      <div className="chips">
        {["all", "creator", "business", "agency"].map((t) => (
          <button key={t} type="button" className={track === t ? "on" : ""} onClick={() => setTrack(t)}>{t === "all" ? "All tracks" : TRACKS.find((x) => x.id === t)!.name}</button>
        ))}
      </div>
      <section className="block"><h2>Free</h2><Section free /></section>
      <section className="block"><h2>Best paid options</h2><Section free={false} /></section>
      <p className="tiny" style={{ marginTop: 14 }}>Fees marked "verify" come from third-party guides; check the official page before paying.</p>
    </div>
  );
}

/* ---------------- Careers ---------------- */
export function Careers() {
  return (
    <div>
      <header className="page-head">
        <span className="eyebrow"><i />Careers</span>
        <h1>{ROLES.length} social media job tracks</h1>
        <p className="lede">What each role does day to day, the skills it needs, an ordered free-first course path and a starter project that proves you can do it.</p>
      </header>
      {ROLES.map((r) => (
        <Accordion key={r.id} id={r.id} kicker="Job track" title={r.role} sub={r.skills.join(" · ")}>
          <div><h4>A typical day</h4><ul>{r.day.map((d) => <li key={d}>{d}</li>)}</ul></div>
          <div><h4>Pay benchmark</h4><p>{r.pay}. <a href={r.payUrl} target="_blank" rel="noopener noreferrer" className="textlink">See figures ↗</a></p></div>
          <div className="full"><h4>Course path (free first)</h4>
            <ol>{r.path.map(([n, u, c]) => <li key={n}><a href={u} target="_blank" rel="noopener noreferrer" className="textlink">{n}</a> · {c}</li>)}</ol>
          </div>
          <div className="full"><h4>Starter project</h4><p>{r.starter}</p></div>
        </Accordion>
      ))}
      <p className="tiny" style={{ marginTop: 14 }}>Pay benchmarks link to the US Bureau of Labor Statistics page for the closest occupation. Job-board salaries for social media titles vary widely by company and seniority.</p>
    </div>
  );
}

/* ---------------- Ideas ---------------- */
export function Ideas() {
  const [cat, setCat] = useState<string>("All");
  const [open, setOpen] = useState<Set<string>>(new Set());
  useEffect(() => {
    const id = decodeURIComponent(location.hash.replace(/^#\/?ideas#?/, "").replace(/^#/, ""));
    if (IDEAS.some((x) => x.id === id)) {
      setOpen(new Set([id]));
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
    }
  }, []);
  const list = useMemo(() => IDEAS.filter((x) => cat === "All" || x.cat === cat), [cat]);
  const toggle = (id: string) => setOpen((o) => { const n = new Set(o); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  const allOpen = list.every((x) => open.has(x.id));
  return (
    <div>
      <header className="page-head">
        <span className="eyebrow"><i />Business ideas</span>
        <h1>{IDEAS.length} ways to earn with social media</h1>
        <p className="lede">Services, creator businesses, software, security and commerce ideas. Each one lists the problem, offer, revenue model, starting cost, tools, launch channels and first steps.</p>
      </header>
      <div className="pane" style={{ padding: 16, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <div className="chips">
          {["All", ...IDEA_CATS].map((c) => (
            <button key={c} type="button" className={cat === c ? "on" : ""} onClick={() => setCat(c)}>
              {c}<span className="count">{c === "All" ? IDEAS.length : IDEAS.filter((x) => x.cat === c).length}</span>
            </button>
          ))}
        </div>
        <button type="button" className="btn sm" style={{ marginLeft: "auto" }} onClick={() => setOpen(allOpen ? new Set() : new Set(list.map((x) => x.id)))}>{allOpen ? "Collapse all" : "Expand all"}</button>
      </div>
      <div style={{ marginTop: 16 }}>
        {list.map((it) => (
          <Accordion key={it.id} id={it.id} kicker={`${it.cat} · ${it.level}`} title={it.title} sub={it.revenue} open={open.has(it.id)} onToggle={() => toggle(it.id)}
            color={{ Services: "var(--teal)", Creator: "var(--orange)", Software: "var(--blue)", Security: "var(--red)", Commerce: "var(--violet)" }[it.cat]}>
            <div><h4>Problem</h4><p>{it.problem}</p></div>
            <div><h4>What you sell</h4><p>{it.offer}</p></div>
            <div><h4>Revenue</h4><p>{it.revenue}</p></div>
            <div><h4>Starting cost</h4><p>{it.cost}</p></div>
            <div className="full"><h4>First steps</h4><ol>{it.steps.map((s) => <li key={s}>{s}</li>)}</ol></div>
            <div><h4>Tools</h4><div className="taglist">{it.tools.map((t) => <span key={t}>{t}</span>)}</div></div>
            <div><h4>Where to launch</h4><div className="taglist">{it.launch.map(([n, u]) => <a key={u + n} href={u} target="_blank" rel="noopener noreferrer">{n} ↗</a>)}</div></div>
            {it.watch && <div className="full notice" style={{ marginTop: 0 }}><b>Watch out</b><span>{it.watch}</span></div>}
          </Accordion>
        ))}
      </div>
    </div>
  );
}

