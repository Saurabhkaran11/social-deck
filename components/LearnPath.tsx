"use client";
import Link from "next/link";
import { CSSProperties } from "react";
import { LEVELS, PATH_IDS, TRACKS, topicById } from "@/lib/content";
import { TrackId, useStore } from "@/lib/store";
import { Icon } from "./Bits";

export default function LearnPath() {
  const { done, ready, track, setTrack } = useStore();
  const inTrack = (id: string) => track === "all" || TRACKS.find((t) => t.id === track)!.topics.includes(id);
  const ids = track === "all" ? PATH_IDS : TRACKS.find((t) => t.id === track)!.topics;
  const doneCount = ids.filter((id) => done[id]).length;
  const tr = TRACKS.find((t) => t.id === track);

  return (
    <div>
      <header className="page-head">
        <span className="eyebrow"><i />The learning path</span>
        <h1>{LEVELS.length} levels, {PATH_IDS.length} lessons</h1>
        <p className="lede">Work top to bottom, or pick a track to highlight just the lessons you need. Progress is saved in this browser.</p>
      </header>

      <div className="pane" style={{ padding: 16, display: "grid", gap: 12 }}>
        <div className="chips" role="group" aria-label="Track">
          {(["all", "creator", "business", "agency"] as TrackId[]).map((t) => (
            <button key={t} type="button" className={track === t ? "on" : ""} aria-pressed={track === t} onClick={() => setTrack(t)}>
              {t === "all" ? "Everything" : TRACKS.find((x) => x.id === t)!.name}
              <span className="count">{t === "all" ? PATH_IDS.length : TRACKS.find((x) => x.id === t)!.topics.length}</span>
            </button>
          ))}
        </div>
        <div>
          <div className="bar"><span style={{ width: ready ? `${(doneCount / ids.length) * 100}%` : 0 }} /></div>
          <p className="tiny" style={{ marginTop: 6 }}>{ready ? doneCount : 0} of {ids.length} complete{tr ? ` · ${tr.name} track` : ""}</p>
        </div>
      </div>

      {tr && (
        <section className="block" style={{ marginTop: 22 }}>
          <div className="pane card">
            <h2>Your first week as a {tr.name.toLowerCase()}</h2>
            <ol className="steps">{tr.firstWeek.map((s) => <li key={s}><span>{s}</span></li>)}</ol>
          </div>
        </section>
      )}

      <div className="levels" style={{ marginTop: 22 }}>
        {LEVELS.map((l, li) => {
          const n = l.topics.filter((id) => done[id]).length;
          return (
            <section key={l.n} id={`level-${l.n}`} className="pane level rise" style={{ "--c": l.color, "--i": li } as CSSProperties}>
              <div className="level-head">
                <span className="n">{l.n}</span>
                <div><span className="tag">{l.tag}</span><h2>{l.name}</h2></div>
                <span className="prog">{ready ? n : 0}/{l.topics.length}</span>
              </div>
              <p>{l.desc}</p>
              <div className="stations">
                {l.topics.map((id) => {
                  const t = topicById(id)!;
                  const isDone = ready && !!done[id];
                  return (
                    <Link key={id} href={`/learn/${id}`} className={`station${isDone ? " done" : ""}${inTrack(id) ? "" : " dim"}`}>
                      <span className="dot">{isDone && Icon.check}</span>
                      <span><b>{t.title}</b><small>{t.time}{isDone ? " · done" : ""}</small></span>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
