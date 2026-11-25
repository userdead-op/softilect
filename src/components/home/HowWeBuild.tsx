"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { buildStages } from "@/data/process";
import { phaseArt } from "@/components/home/phaseArt";

const STEP = 150;

/** Pinned "How we build" chapter: each short scroll moves to the next phase, and its drawing builds itself. */
export function HowWeBuild() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const vizRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cur, setCur] = useState(0);
  const N = buildStages.length;

  const top = () => (trackRef.current ? trackRef.current.getBoundingClientRect().top + window.scrollY : 0);

  useEffect(() => {
    const onScroll = () => {
      const tr = trackRef.current, st = stageRef.current;
      if (!tr || !st) return;
      tr.style.height = `${st.offsetHeight + STEP * (N - 1)}px`;
      const i = Math.max(0, Math.min(N - 1, Math.floor((window.scrollY - top()) / STEP + 0.6)));
      setCur(i);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [N]);

  const replay = useCallback((v: HTMLDivElement | null) => {
    if (!v || !v.classList.contains("play")) return;
    v.classList.add("reset"); v.classList.remove("play"); void v.offsetWidth; v.classList.remove("reset");
    requestAnimationFrame(() => v.classList.add("play"));
  }, []);

  const jump = (i: number) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: top() + i * STEP, behavior: reduce ? "auto" : "smooth" });
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="build dk" id="process" data-tone="dark" aria-labelledby="process-title">
      <div className="glow" aria-hidden="true" />
      <div className="wrap">
        <div className="btrack" ref={trackRef}>
          <div className="bstage" ref={stageRef}>
            <div className="bhead">
              <div>
                <span className="eyebrow">Delivery cycle</span>
                <h2 className="h2" id="process-title">How we build</h2>
              </div>
              <div className="cnt" aria-live="polite">{pad(cur + 1)} / {pad(N)}</div>
            </div>
            <div className="bbody">
              <ul className="bidx">
                {buildStages.map((s, i) => (
                  <li key={s.id}>
                    <button type="button" className={i === cur ? "on" : undefined} aria-current={i === cur ? "step" : undefined} onClick={() => jump(i)}>
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="bview">
                <div className="bpan" style={{ transform: `translateX(-${cur * 100}%)` }}>
                  {buildStages.map((s, i) => (
                    <article className={`bp${i === cur ? " on" : ""}`} key={s.id} aria-hidden={i !== cur}>
                      <div>
                        <span className="no">Phase {s.id}</span>
                        <h3>{s.title}</h3>
                        <p className="ln">{s.line}</p>
                        <p className="dt">{s.detail}</p>
                      </div>
                      <div
                        className={`viz${i === cur ? " play" : ""}`}
                        ref={(el) => { vizRefs.current[i] = el; }}
                        onMouseEnter={() => replay(vizRefs.current[i])}
                        dangerouslySetInnerHTML={{ __html: phaseArt[i] ?? "" }}
                      />
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div className="bbar" aria-hidden="true">
              <i style={{ width: `${((cur + 1) / N) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
