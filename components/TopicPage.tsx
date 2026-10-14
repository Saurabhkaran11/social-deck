"use client";
import Link from "next/link";
import { CSSProperties } from "react";
import { LEVELS, PATH_IDS, topicById } from "@/lib/content";
import { useStore } from "@/lib/store";
import { Icon, LinkList } from "./Bits";

export default function TopicPage({ id }: { id: string }) {
  const t = topicById(id);
  const { done, toggleDone, notes, setNote, ready, toast } = useStore();
  if (!t) return <p>Topic not found. <Link href="/learn" className="textlink">Back to the path</Link></p>;
  const level = LEVELS.find((l) => l.n === t.level)!;
  const i = PATH_IDS.indexOf(id);
  const prev = i > 0 ? topicById(PATH_IDS[i - 1]) : undefined;
  const next = i < PATH_IDS.length - 1 ? topicById(PATH_IDS[i + 1]) : undefined;
  const isDone = ready && !!done[id];

  return (
    <article style={{ "--c": level.color } as CSSProperties}>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/learn">Learn</Link><span>/</span><Link href={`/learn#level-${level.n}`}>Level {level.n}: {level.name}</Link>
      </nav>
      <header className="page-head" style={{ marginBottom: 0 }}>
        <span className="eyebrow"><i style={{ background: level.color }} />Level {level.n} · {level.tag}</span>
        <h1>{t.title}</h1>
        <div className="meta-row">
          <span className="pill">{Icon.clock} {t.time}</span>
          <span className="pill">{t.free.length} free resources</span>
          <button type="button" className={`btn sm done-btn${isDone ? " is-done" : ""}`} onClick={() => { toggleDone(id); toast(isDone ? "Marked as not done" : "Nice work! Lesson complete"); }}>
            {isDone ? <>{Icon.check} Completed</> : "Mark as complete"}
          </button>
        </div>
      </header>

      {t.watch && <div className="notice"><b>Good to know</b><span>{t.watch}</span></div>}

      <div className="topic-grid">
        <div>
          <section className="pane card rise">
            <h2>In simple words</h2>
            <p className="simple">{t.simple}</p>
            <p className="why"><strong>Why it matters:</strong> {t.why}</p>
          </section>
          <section className="pane card rise" style={{ "--i": 1 } as CSSProperties}>
            <h2>Step by step</h2>
            <ol className="steps">{t.steps.map((s) => <li key={s}><span>{s}</span></li>)}</ol>
            {t.tips && <><h2 style={{ marginTop: 18 }}>Tips</h2><ul className="tips">{t.tips.map((x) => <li key={x}>{x}</li>)}</ul></>}
          </section>
          <section className="pane card rise" style={{ "--i": 2 } as CSSProperties}>
            <h2>Free resources</h2>
            <LinkList items={t.free} />
            {t.paid && t.paid.length > 0 && <><h2 style={{ marginTop: 18 }}>Best paid option</h2><LinkList items={t.paid} /></>}
          </section>
          {t.videos && t.videos.length > 0 && (
            <section className="pane card rise" style={{ "--i": 3 } as CSSProperties}>
              <h2>Watch</h2>
              <LinkList items={t.videos} video />
            </section>
          )}
        </div>
        <aside className="side">
          {t.see && (
            <div className="pane card">
              <h2>Go deeper</h2>
              <div style={{ display: "grid", gap: 8 }}>
                {t.see.map(([href, label]) => <Link key={href} href={href} className="textlink">{label} {Icon.arrow}</Link>)}
              </div>
            </div>
          )}
          <div className="pane card">
            <h2>My notes</h2>
            <label htmlFor="note" className="tiny">Saved automatically in this browser.</label>
            <textarea id="note" value={notes[id] ?? ""} onChange={(e) => setNote(id, e.target.value)} placeholder="What will you try this week?" />
          </div>
        </aside>
      </div>

      <nav className="pn" aria-label="Lesson navigation">
        {prev ? <Link href={`/learn/${prev.id}`} className="btn">{Icon.back} {prev.title}</Link> : <span />}
        {next && <Link href={`/learn/${next.id}`} className="btn solid">{next.title} {Icon.arrow}</Link>}
      </nav>
    </article>
  );
}
