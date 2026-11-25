"use client";

import { useEffect, useRef, useState } from "react";

type Step = { title: string; text: string; out: string };

/** Vertical process line that fills as you scroll, lighting each diamond when the line reaches it. */
export function Timeline({ title, steps }: { title: string; steps: Step[] }) {
  const olRef = useRef<HTMLOListElement>(null);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [reached, setReached] = useState(0);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const tick = () => {
      const ol = olRef.current;
      if (!ol) return;
      const r = ol.getBoundingClientRect();
      const mark = window.innerHeight * 0.55;
      const f = Math.max(0, Math.min(1, (mark - r.top) / r.height));
      setFill(f);
      let n = 0;
      liRefs.current.forEach((li) => {
        if (li && li.getBoundingClientRect().top + 14 < mark) n += 1;
      });
      setReached(n);
    };
    tick();
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    return () => { window.removeEventListener("scroll", tick); window.removeEventListener("resize", tick); };
  }, []);

  const total = steps.length;
  const now = Math.max(1, reached);
  return (
    <section className="sec flowdk" data-tone="dark">
      <div className="glow" aria-hidden="true" />
      <div className="wrap tlw">
        <div className="tlh">
          <span className="eyebrow">Our flow</span>
          <h2 className="h2">{title}</h2>
          <p className="tlp">Every step ends with something you can see, approve or test. You are never waiting in the dark.</p>
          <div className="tlc" aria-hidden="true">
            <span className="big">{String(now).padStart(2, "0")}</span>
            <span className="of">/ {String(total).padStart(2, "0")}</span>
            <span className="nm">{steps[now - 1]?.title}</span>
            <div className="bar"><i style={{ width: `${(now / total) * 100}%` }} /></div>
          </div>
        </div>
        <ol className="tl" ref={olRef} style={{ ["--fill" as string]: `${(fill * 100).toFixed(1)}%` }}>
          {steps.map((s, i) => (
            <li key={s.title} ref={(el) => { liRefs.current[i] = el; }} className={i < reached ? "on" : undefined}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="fo">You get: {s.out}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
