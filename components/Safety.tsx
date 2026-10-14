"use client";
import { CSSProperties, useMemo, useState } from "react";
import { CHECKLIST, QUIZ, REPORT_LINKS, SCAMS, SCAM_STATS, TRAINING } from "@/lib/content";
import { useStore } from "@/lib/store";
import { LinkList } from "./Bits";

function Quiz() {
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const q = QUIZ[i];
  const finished = i >= QUIZ.length;
  const answer = (v: boolean) => {
    if (pick !== null) return;
    setPick(v);
    if (v === q.scam) setScore((s) => s + 1);
  };
  if (finished) {
    return (
      <div className="pane quiz">
        <h2>You scored {score} / {QUIZ.length}</h2>
        <p className="lede" style={{ fontSize: 16 }}>{score === QUIZ.length ? "Perfect. You'd spot these in the wild." : "Review the scam patterns below, then try again."}</p>
        <div className="cta-row"><button type="button" className="btn solid" onClick={() => { setI(0); setPick(null); setScore(0); }}>Try again</button></div>
      </div>
    );
  }
  return (
    <div className="pane quiz">
      <div className="block-head" style={{ marginBottom: 0 }}><h2 style={{ margin: 0 }}>Scam or safe?</h2><span className="tiny">Question {i + 1} of {QUIZ.length} · Score {score}</span></div>
      <div className="msg"><div className="from">From: {q.from}</div><p>{q.msg}</p></div>
      <div className="answers">
        <button type="button" className="btn" disabled={pick !== null} onClick={() => answer(true)}>🚩 Scam</button>
        <button type="button" className="btn" disabled={pick !== null} onClick={() => answer(false)}>✅ Looks safe</button>
      </div>
      {pick !== null && (
        <div className={`verdict ${pick === q.scam ? "right" : "wrong"}`} role="status">
          <b>{pick === q.scam ? "Correct." : "Not quite."} This is {q.scam ? "a scam" : "safe"}.</b>
          {q.why}
          <div style={{ marginTop: 10 }}><button type="button" className="btn solid sm" onClick={() => { setI(i + 1); setPick(null); }}>{i + 1 < QUIZ.length ? "Next" : "See score"}</button></div>
        </div>
      )}
      <p className="tiny" style={{ marginTop: 12 }}>Practice examples are made up. Real platforms never ask for your password or 2FA code.</p>
    </div>
  );
}

export default function Safety() {
  const { checks, toggleCheck, ready } = useStore();
  const groups = useMemo(() => [...new Set(CHECKLIST.map((c) => c.group))], []);
  const n = CHECKLIST.filter((c) => checks[c.id]).length;
  return (
    <div>
      <header className="page-head">
        <span className="eyebrow"><i style={{ background: "var(--red)" }} />Level 0 · Protect &amp; comply</span>
        <h1>Stay safe on social media</h1>
        <p className="lede">Scammers target creators and businesses with fake brand deals, fake support messages and impersonation. Secure your accounts, learn the patterns and practise spotting them.</p>
      </header>

      <div className="stat-row">
        {SCAM_STATS.map(([v, l, u], i) => (
          <a key={l} href={u} target="_blank" rel="noopener noreferrer" className="rise" style={{ "--i": i } as CSSProperties}><b>{v}</b><span>{l}</span></a>
        ))}
      </div>
      <p className="tiny" style={{ marginTop: 8 }}>Sources: FTC Data Spotlight (April 2026) and FBI IC3 2025 Internet Crime Report.</p>

      <section className="block grid c2" style={{ alignItems: "start" }}>
        <div className="pane card">
          <div className="block-head" style={{ marginBottom: 6 }}><h2 style={{ margin: 0 }}>Security checklist</h2><span className="tiny">{ready ? n : 0}/{CHECKLIST.length} done</span></div>
          <div className="bar"><span style={{ width: ready ? `${(n / CHECKLIST.length) * 100}%` : 0 }} /></div>
          {groups.map((g) => (
            <div key={g} className="check-group">
              <h3>{g}</h3>
              {CHECKLIST.filter((c) => c.group === g).map((c) => {
                const on = ready && !!checks[c.id];
                return (
                  <label key={c.id} className={`check${on ? " is-on" : ""}`}>
                    <input type="checkbox" checked={on} onChange={() => toggleCheck(c.id)} />
                    <span>{c.text}{c.link && <a href={c.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>How ↗</a>}</span>
                  </label>
                );
              })}
            </div>
          ))}
        </div>
        <Quiz />
      </section>

      <section className="block">
        <h2>Scam patterns to know</h2>
        <div className="grid c2">
          {SCAMS.map((s, i) => (
            <div key={s.name} className="pane scam rise" style={{ "--i": i } as CSSProperties}>
              <b>{s.name}</b>
              <p>{s.how}</p>
              <ul>{s.signs.map((x) => <li key={x}>{x}</li>)}</ul>
              <div className="do"><strong>Do this:</strong> {s.doThis}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="block grid c2" style={{ alignItems: "start" }}>
        <div className="pane card"><h2>Free training</h2><LinkList items={TRAINING} /></div>
        <div className="pane card">
          <h2>Got scammed or hacked?</h2>
          <ol className="steps">
            <li><span>Use the platform's official recovery flow from the app or help center</span></li>
            <li><span>Change passwords and sign out of all sessions</span></li>
            <li><span>Tell your audience not to trust messages from the account until it's recovered</span></li>
            <li><span>Contact your bank if money or cards were involved</span></li>
            <li><span>Report it so it can be tracked</span></li>
          </ol>
          <div style={{ marginTop: 14 }}><LinkList items={REPORT_LINKS.map(([n, u]) => [n, u])} /></div>
        </div>
      </section>
    </div>
  );
}
