"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { serviceIcons } from "@/components/ui/Icons";

export type GlobeService = { slug: string; label: string; short: string };

/** A turning network globe. Service labels ride on it; hover pauses it, drag turns it. */
export function ServiceGlobe({ items }: { items: GlobeService[] }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const cvRef = useRef<HTMLCanvasElement>(null);
  const plateRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const box = boxRef.current, cv = cvRef.current, ctx = cv?.getContext("2d");
    if (!box || !cv || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fib = (n: number) => {
      const out: number[][] = [], g = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < n; i++) { const y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(1 - y * y), t = g * i; out.push([Math.cos(t) * r, y, Math.sin(t) * r]); }
      return out;
    };
    const pts = fib(220), edges: [number, number][] = [], seen = new Set<string>();
    pts.forEach((p, i) => {
      const ds = pts.map((q, j) => [j === i ? Infinity : (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2 + (p[2] - q[2]) ** 2, j]).sort((a, b) => a[0] - b[0]);
      for (let k = 0; k < 3; k++) { const j = ds[k][1], key = i < j ? `${i}-${j}` : `${j}-${i}`; if (!seen.has(key)) { seen.add(key); edges.push([i, j]); } }
    });
    const anchors = fib(items.length).map((p) => p.map((v) => v * 1.1));
    let W = 0, H = 0, R = 0, rotY = 0.6, rotX = -0.32, speed = 0.0026, target = 0.0026, vY = 0.0026, vX = 0.0009, lastX = 0, lastY = 0, vis = true, raf = 0;
    let drag: { x: number; y: number; ry: number; rx: number } | null = null;

    const size = () => { const d = Math.min(window.devicePixelRatio || 1, 2); W = box.clientWidth; H = box.clientHeight; R = Math.min(W, H) * 0.36; cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0); };
    const proj = (p: number[]) => {
      const cy = Math.cos(rotY), sy = Math.sin(rotY), cx = Math.cos(rotX), sx = Math.sin(rotX);
      const x = p[0] * cy - p[2] * sy; let z = p[0] * sy + p[2] * cy;
      const y = p[1] * cx - z * sx; z = p[1] * sx + z * cx;
      const f = 3.2 / (3.2 - z);
      return [W / 2 + x * R * f, H / 2 + y * R * f, z];
    };
    const frame = () => {
      speed += (target - speed) * 0.06;
      if (!drag && !reduce) {
        // Free spin: momentum from the last drag eases into a slow drift that keeps its direction.
        const sp = Math.hypot(vY, vX), base = 0.0026;
        if (sp > base) { vY *= 0.97; vX *= 0.97; } else if (sp > 0) { const k = base / sp; vY += (vY * k - vY) * 0.02; vX += (vX * k - vX) * 0.02; }
        const f = base ? speed / base : 1;
        rotY += vY * f; rotX += vX * f;
      }
      ctx.clearRect(0, 0, W, H);
      const P = pts.map(proj);
      ctx.lineWidth = 1;
      for (const [a0, b0] of edges) {
        const a = P[a0], pa = pts[a0], pb = pts[b0], al = ((a[2] + P[b0][2]) / 2 + 1) / 2;
        ctx.strokeStyle = `rgba(31,138,112,${(0.05 + al * al * 0.32).toFixed(3)})`;
        ctx.beginPath(); ctx.moveTo(a[0], a[1]);
        for (let s = 1; s <= 5; s++) {
          const t = s / 5, ix = pa[0] + (pb[0] - pa[0]) * t, iy = pa[1] + (pb[1] - pa[1]) * t, iz = pa[2] + (pb[2] - pa[2]) * t, l = Math.hypot(ix, iy, iz), c = proj([ix / l, iy / l, iz / l]);
          ctx.lineTo(c[0], c[1]);
        }
        ctx.stroke();
      }
      for (const a of P) {
        const al = (a[2] + 1) / 2;
        ctx.fillStyle = al > 0.55 ? `rgba(31,138,112,${(0.35 + al * 0.6).toFixed(3)})` : `rgba(31,138,112,${(0.08 + al * 0.3).toFixed(3)})`;
        ctx.beginPath(); ctx.arc(a[0], a[1], 0.8 + al * 1.8, 0, 6.2832); ctx.fill();
      }
      anchors.forEach((an, q) => {
        const el = plateRefs.current[q]; if (!el) return;
        const a = proj(an), front = (a[2] + 1) / 2;
        el.style.transform = `translate(${a[0].toFixed(1)}px,${a[1].toFixed(1)}px) translate(-50%,-50%)`;
        el.style.opacity = (front < 0.42 ? 0.18 + front * 0.6 : 1).toFixed(2);
        el.style.zIndex = String(Math.round(front * 100));
        el.classList.toggle("back", front < 0.42);
      });
      if (vis && !reduce) raf = requestAnimationFrame(frame);
    };
    const pause = () => { target = 0; }, resume = () => { target = 0.0026; };
    const plates = plateRefs.current.filter(Boolean) as HTMLDivElement[];
    plates.forEach((el) => { el.addEventListener("mouseenter", pause); el.addEventListener("mouseleave", resume); el.addEventListener("focusin", pause); el.addEventListener("focusout", resume); });
    const down = (e: PointerEvent) => { drag = { x: e.clientX, y: e.clientY, ry: rotY, rx: rotX }; lastX = e.clientX; lastY = e.clientY; vY = vX = 0; cv.classList.add("drag"); cv.setPointerCapture(e.pointerId); };
    const move = (e: PointerEvent) => { if (!drag) return; vY = (e.clientX - lastX) * 0.004; vX = (e.clientY - lastY) * 0.003; lastX = e.clientX; lastY = e.clientY; rotY = drag.ry + (e.clientX - drag.x) * 0.008; rotX = drag.rx + (e.clientY - drag.y) * 0.006; if (reduce) frame(); };
    const up = () => { if (!vY && !vX) { vY = 0.0026; vX = 0.0009; } drag = null; cv.classList.remove("drag"); };
    cv.addEventListener("pointerdown", down); cv.addEventListener("pointermove", move); cv.addEventListener("pointerup", up); cv.addEventListener("pointercancel", up);
    const onResize = () => { size(); if (reduce) frame(); };
    window.addEventListener("resize", onResize);
    const io = new IntersectionObserver(([en]) => { const was = vis; vis = en.isIntersecting; if (vis && !was && !reduce) raf = requestAnimationFrame(frame); });
    io.observe(box);
    size(); frame();
    return () => {
      cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener("resize", onResize);
      plates.forEach((el) => { el.removeEventListener("mouseenter", pause); el.removeEventListener("mouseleave", resume); el.removeEventListener("focusin", pause); el.removeEventListener("focusout", resume); });
      cv.removeEventListener("pointerdown", down); cv.removeEventListener("pointermove", move); cv.removeEventListener("pointerup", up); cv.removeEventListener("pointercancel", up);
    };
  }, [items.length]);

  return (
    <div className="globe" ref={boxRef}>
      <div className="halo" aria-hidden="true" />
      <canvas ref={cvRef} aria-hidden="true" />
      {items.map((s, i) => (
        <div className="plate" key={s.slug} ref={(el) => { plateRefs.current[i] = el; }}>
          <Link href={`/services/${s.slug}`}>
            <span className="ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d={serviceIcons[s.slug] ?? ""} />
              </svg>
            </span>
            {s.label}
            <svg className="go" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </Link>
          <span className="tip" aria-hidden="true">
            <b>{s.label}</b>
            {s.short}
            <em>Explore service</em>
          </span>
        </div>
      ))}
    </div>
  );
}
