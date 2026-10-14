"use client";
import Link from "next/link";
import { CSSProperties } from "react";
import { CERTS, CHANNELS, IDEAS, LEVELS, PATH_IDS, PLATFORMS, SCAM_STATS, TOOL_GROUPS, TRACKS, topicById } from "@/lib/content";
import { useStore } from "@/lib/store";
import { Icon } from "./Bits";

const POSTS = [
  { c: "var(--accent)", who: "Hook test #3", text: "A question hook kept 64% watching past 3s.", pct: 64, m: ["Retention", "+18% vs last week"] },
  { c: "var(--violet)", who: "Brand deal check", text: "Sender domain doesn't match the brand. Don't open the file.", pct: 100, m: ["Scam risk", "High"] },
  { c: "var(--teal)", who: "Weekly report", text: "Carousels drove 3× more saves than single images.", pct: 72, m: ["Saves", "312"] },
  { c: "var(--orange)", who: "Income streams", text: "Brand deals, affiliate and a template shop this month.", pct: 58, m: ["Streams", "3 of 3"] },
  { c: "var(--green)", who: "Automation", text: "New blog post → draft posts for 3 platforms, waiting for approval.", pct: 90, m: ["Hours saved", "4.5 / week"] },
];

export default function Home() {
  const { done, ready, track, setTrack } = useStore();
  const doneCount = PATH_IDS.filter((id) => done[id]).length;
  const nextId = (track === "all" ? PATH_IDS : TRACKS.find((t) => t.id === track)!.topics).find((id) => !done[id]);
  const next = nextId ? topicById(nextId) : undefined;
  const toolCount = TOOL_GROUPS.reduce((n, g) => n + g.tools.length, 0);

  return (
    <div>
      <section className="hero">
        <div>
          <span className="eyebrow"><i />Free · plain English · creators, businesses &amp; agencies</span>
          <h1>Grow on social media, <em>safely and profitably.</em></h1>
          <p className="lede">
            Learn how platforms and the creator business really work, make content people share, automate the busywork and earn
            from several sources. Every path starts by protecting your accounts and following the rules.
          </p>
          <div className="cta-row">
            {ready && doneCount > 0 && next ? (
              <Link href={`/learn/${next.id}`} className="btn accent lg">Continue: {next.title} {Icon.arrow}</Link>
            ) : (
              <Link href="/learn/account-security" className="btn accent lg">Start with Level 0 {Icon.arrow}</Link>
            )}
            <Link href="/learn" className="btn lg">See all {LEVELS.length} levels</Link>
          </div>
          {ready && doneCount > 0 && (
            <div style={{ marginTop: 18, maxWidth: 420 }}>
              <div className="bar"><span style={{ width: `${(doneCount / PATH_IDS.length) * 100}%` }} /></div>
              <p className="tiny" style={{ marginTop: 6 }}>{doneCount} of {PATH_IDS.length} topics complete</p>
            </div>
          )}
        </div>
        <div className="phone" aria-hidden="true">
          {POSTS.map((p, i) => (
            <div key={p.who} className="post" style={{ "--c": p.c, "--i": i } as CSSProperties}>
              <span className="who"><i />{p.who}</span>
              <p>{p.text}</p>
              <span className="bar"><span style={{ width: `${p.pct}%` }} /></span>
              <span className="meta"><span>{p.m[0]}</span><span>{p.m[1]}</span></span>
            </div>
          ))}
        </div>
      </section>

      <section className="stats" aria-label="What's inside">
        <div><b>{PATH_IDS.length}</b><span>lessons in {LEVELS.length} levels</span></div>
        <div><b>{PLATFORMS.length}</b><span>platforms compared</span></div>
        <div><b>{toolCount}</b><span>tools, free first</span></div>
        <div><b>{CERTS.filter((c) => c.free).length}</b><span>free certificates</span></div>
        <div><b>{IDEAS.length}</b><span>business ideas</span></div>
      </section>

      <section className="block">
        <h2>Pick your track</h2>
        <div className="tracks">
          {TRACKS.map((t, i) => (
            <button key={t.id} type="button" className={`track rise${track === t.id ? " on" : ""}`} style={{ "--c": t.color, "--i": i } as CSSProperties}
              onClick={() => setTrack(t.id)} aria-pressed={track === t.id}>
              <b>{t.name}</b>
              <p>{t.who}</p>
              <p><strong>You'll get:</strong> {t.outcome}</p>
              <span className="go">{track === t.id ? "Your track ✓" : "Choose this track"} {Icon.arrow}</span>
            </button>
          ))}
        </div>
        {track !== "all" && (
          <p className="tiny" style={{ marginTop: 10 }}>
            The Learn page now highlights your {TRACKS.find((t) => t.id === track)!.topics.length} lessons. <Link href="/learn" className="textlink">Open your path {Icon.arrow}</Link>
          </p>
        )}
      </section>

      <section className="block">
        <div className="protect">
          <span className="num">{SCAM_STATS[0][0]}</span>
          <p><strong>{SCAM_STATS[0][1]}</strong>. That's why every track starts with Level 0: passkeys, scam spotting, ad disclosures and AI labels.</p>
          <Link href="/safety" className="btn solid">Take the scam quiz</Link>
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>The path, level by level</h2><Link href="/learn" className="textlink">Open the path {Icon.arrow}</Link></div>
        <div className="grid auto">
          {LEVELS.map((l, i) => (
            <Link key={l.n} href={`/learn#level-${l.n}`} className="tool rise" style={{ "--i": i, borderLeft: `4px solid ${l.color}` } as CSSProperties}>
              <span className="tiny">Level {l.n} · {l.tag}</span>
              <b>{l.name}</b>
              <span className="desc">{l.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>Turn it into a business</h2><Link href="/ideas" className="textlink">All {IDEAS.length} ideas {Icon.arrow}</Link></div>
        <div className="grid c3">
          {["niche-agency", "ugc-service", "security-audit"].map((id, i) => {
            const it = IDEAS.find((x) => x.id === id)!;
            return (
              <Link key={id} href={`/ideas#${id}`} className="tool rise" style={{ "--i": i } as CSSProperties}>
                <span className="tiny">{it.cat} · {it.level}</span>
                <b>{it.title}</b>
                <span className="desc">{it.revenue}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>Learn free on YouTube</h2><Link href="/youtube" className="textlink">All channels {Icon.arrow}</Link></div>
        <div className="grid auto">
          {CHANNELS.flatMap((g) => g.items).filter((c) => c[3]).slice(0, 4).map(([n, u, d], i) => (
            <a key={u} href={u} target="_blank" rel="noopener noreferrer" className="tool rise" style={{ "--i": i } as CSSProperties}>
              <b>{n}</b><span className="desc">{d}</span><span className="tiny">Teaches revenue</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
