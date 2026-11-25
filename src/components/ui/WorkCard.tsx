import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";
import { DiagArrow } from "@/components/ui/Icons";

type Piece = { s: CSSProperties; f?: boolean };
const px = (n: number) => `${n}px`;

/* Four corner patterns. Each one is loose at rest and falls into order on hover. */
const DECO: Piece[][] = [
  [
    { s: { width: 220, height: 220, right: -60, top: -60, "--t": "rotate(45deg)", "--h": "rotate(90deg)" } as CSSProperties },
    { s: { width: 120, height: 120, right: -10, top: -10, "--t": "rotate(45deg)", "--h": "rotate(0deg)", "--d": ".06s" } as CSSProperties },
    { s: { width: 40, height: 40, right: 30, top: 30, "--t": "rotate(45deg) scale(.6)", "--h": "rotate(0deg) scale(1)", "--d": ".12s" } as CSSProperties, f: true },
  ],
  [
    { s: { width: 200, height: 200, right: -50, top: -50, borderRadius: "50%", "--t": "translate(-34px,24px)" } as CSSProperties },
    { s: { width: 130, height: 130, right: -15, top: -15, borderRadius: "50%", "--t": "translate(26px,-18px)", "--d": ".06s" } as CSSProperties },
    { s: { width: 60, height: 60, right: 20, top: 20, borderRadius: "50%", "--t": "translate(-20px,34px)", "--d": ".12s" } as CSSProperties, f: true },
  ],
  [[-18, 22], [8, 0], [-7, -16], [17, 12]].map(([r, x], k) => ({
    s: { width: 160, height: 24, borderRadius: 7, right: -24, top: px(26 + k * 34), "--t": `rotate(${r}deg) translateX(${x}px)`, "--d": `${k * 0.05}s` } as CSSProperties,
    f: k === 1,
  })),
  [[-24, 12, -8], [18, -30, 10], [-10, 26, 14], [30, 8, -22], [0, -18, 6], [-28, -8, 18], [14, 30, -12], [-6, -26, -16], [24, 16, 20]].map(([x, y, r], k) => ({
    s: { width: 24, height: 24, borderRadius: 5, right: px(30 + (k % 3) * 36), top: px(30 + Math.floor(k / 3) * 36), "--t": `translate(${x}px,${y}px) rotate(${r * 3}deg)`, "--d": `${k * 0.03}s` } as CSSProperties,
    f: k === 4,
  })),
];

export function WorkCard({ project, index, headingLevel = 3 }: { project: Project; index: number; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <Link className="wc" href={`/work/${project.slug}`}>
      <span className="deco" aria-hidden="true">
        {DECO[index % DECO.length].map((p, i) => (
          <i key={i} className={p.f ? "f" : undefined} style={p.s} />
        ))}
      </span>
      <span className="sc">{project.sector}</span>
      <H>{project.name}</H>
      <p>{project.summary}</p>
      <div className="ft2">
        <div className="stk">
          {project.stack.slice(0, 3).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <span className="go" aria-hidden="true">
          <DiagArrow />
        </span>
      </div>
    </Link>
  );
}
