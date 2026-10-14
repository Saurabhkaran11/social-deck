"use client";
import { CSSProperties, ReactNode, useState } from "react";
import { YT, type Res } from "@/lib/content";

export const host = (u: string) => {
  try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return u; }
};

export function LinkList({ items, video = false }: { items: Res[]; video?: boolean }) {
  return (
    <ul className="links">
      {items.map(([name, u, note], i) => {
        const isSearch = video && !/^https?:/.test(u);
        const href = isSearch ? YT(u) : u;
        return (
          <li key={name + u} className="rise" style={{ "--i": i } as CSSProperties}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <b>{name}</b>
              <span>{note ? `${note} · ` : ""}{isSearch ? "YouTube search" : host(href)}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Accordion({ kicker, title, sub, color, children, id, open: controlled, onToggle }: {
  kicker: string; title: string; sub?: string; color?: string; children: ReactNode; id?: string; open?: boolean; onToggle?: () => void;
}) {
  const [own, setOwn] = useState(false);
  const open = controlled ?? own;
  const toggle = onToggle ?? (() => setOwn((o) => !o));
  return (
    <article id={id} className={`acc${open ? " open" : ""}`} style={{ "--c": color } as CSSProperties}>
      <button type="button" className="acc-head" aria-expanded={open} onClick={toggle}>
        <span><span className="kicker">{kicker}</span><b>{title}</b>{sub && <small>{sub}</small>}</span>
        <span className="chev" aria-hidden="true">{Icon.chev}</span>
      </button>
      <div className="acc-body"><div><div className="acc-inner">{children}</div></div></div>
    </article>
  );
}

const P = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
export const Icon = {
  learn: <svg width="20" height="20" viewBox="0 0 24 24" {...P} aria-hidden="true"><path d="M3 7l9-4 9 4-9 4z" /><path d="M7 9.5V15c0 1.5 2.2 3 5 3s5-1.5 5-3V9.5" /></svg>,
  platforms: <svg width="20" height="20" viewBox="0 0 24 24" {...P} aria-hidden="true"><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M10.5 18.5h3" /></svg>,
  safety: <svg width="20" height="20" viewBox="0 0 24 24" {...P} aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /><path d="m9 12 2 2 4-4" /></svg>,
  tools: <svg width="20" height="20" viewBox="0 0 24 24" {...P} aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>,
  ideas: <svg width="20" height="20" viewBox="0 0 24 24" {...P} aria-hidden="true"><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" /></svg>,
  arrow: <svg width="16" height="16" viewBox="0 0 24 24" {...P} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>,
  back: <svg width="16" height="16" viewBox="0 0 24 24" {...P} aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>,
  chev: <svg width="16" height="16" viewBox="0 0 24 24" {...P} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>,
  check: <svg width="13" height="13" viewBox="0 0 24 24" {...P} strokeWidth={3.2} aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>,
  search: <svg width="18" height="18" viewBox="0 0 24 24" {...P} aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>,
  clock: <svg width="14" height="14" viewBox="0 0 24 24" {...P} aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
};
