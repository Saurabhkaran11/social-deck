"use client";
/* Progress, notes, checklist and track choice, saved in this browser only (localStorage). */
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";

function usePersisted<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const v = window.localStorage.getItem(key);
      if (v) setValue(JSON.parse(v));
    } catch { /* storage unavailable */ }
    setReady(true);
  }, [key]);
  useEffect(() => {
    if (!ready) return;
    try { window.localStorage.setItem(key, JSON.stringify(value)); } catch { /* keep in memory */ }
  }, [key, value, ready]);
  return [value, setValue, ready] as const;
}

export type TrackId = "all" | "creator" | "business" | "agency";

type Store = {
  ready: boolean;
  done: Record<string, boolean>;
  toggleDone: (id: string) => void;
  notes: Record<string, string>;
  setNote: (id: string, text: string) => void;
  checks: Record<string, boolean>;
  toggleCheck: (id: string) => void;
  track: TrackId;
  setTrack: (t: TrackId) => void;
  toast: (msg: string) => void;
};

const Ctx = createContext<Store | null>(null);
export const useStore = () => {
  const s = useContext(Ctx);
  if (!s) throw new Error("useStore must be used inside StoreProvider");
  return s;
};

export function StoreProvider({ children }: { children: ReactNode }) {
  const [done, setDone, r1] = usePersisted<Record<string, boolean>>("sd.done", {});
  const [notes, setNotes] = usePersisted<Record<string, string>>("sd.notes", {});
  const [checks, setChecks] = usePersisted<Record<string, boolean>>("sd.checks", {});
  const [track, setTrack] = usePersisted<TrackId>("sd.track", "all");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!msg) return;
    const t = setTimeout(() => setMsg(""), 2200);
    return () => clearTimeout(t);
  }, [msg]);

  const toggleDone = useCallback((id: string) => setDone((d) => ({ ...d, [id]: !d[id] })), [setDone]);
  const toggleCheck = useCallback((id: string) => setChecks((c) => ({ ...c, [id]: !c[id] })), [setChecks]);
  const setNote = useCallback((id: string, text: string) => setNotes((n) => ({ ...n, [id]: text })), [setNotes]);

  return (
    <Ctx.Provider value={{ ready: r1, done, toggleDone, notes, setNote, checks, toggleCheck, track, setTrack, toast: setMsg }}>
      {children}
      {msg && <div className="toast" role="status">{msg}</div>}
    </Ctx.Provider>
  );
}
