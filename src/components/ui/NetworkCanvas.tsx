"use client";

import { useEffect, useRef } from "react";

/** Drifting mint dots that link to their neighbours and gently move away from the pointer. */
export function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    const host = cv?.parentElement;
    const ctx = cv?.getContext("2d");
    if (!cv || !host || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    type P = { x: number; y: number; bx: number; by: number; vx: number; vy: number; r: number };
    let W = 0, H = 0, pts: P[] = [], mouse: { x: number; y: number } | null = null, vis = false, raf = 0;

    const size = () => {
      const d = Math.min(window.devicePixelRatio || 1, 2);
      W = host.clientWidth; H = host.clientHeight;
      cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0);
      const n = Math.max(40, Math.min(100, Math.round((W * H) / 13000)));
      pts = Array.from({ length: n }, () => {
        const a = Math.random() * 6.283, s = 0.08 + Math.random() * 0.22;
        return { x: Math.random() * W, y: Math.random() * H, bx: Math.cos(a) * s, by: Math.sin(a) * s, vx: 0, vy: 0, r: 1.2 + Math.random() * 1.4 };
      });
    };
    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        if (mouse && !reduce) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
          if (d < 150 && d > 0.1) { const f = Math.pow(1 - d / 150, 2) * 0.32; p.vx += (dx / d) * f; p.vy += (dy / d) * f; }
        }
        p.vx += (p.bx - p.vx) * 0.05; p.vy += (p.by - p.vy) * 0.05;
        const sp = Math.hypot(p.vx, p.vy); if (sp > 1.4) { p.vx *= 1.4 / sp; p.vy *= 1.4 / sp; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10; if (p.y < -10) p.y = H + 10; if (p.y > H + 10) p.y = -10;
      }
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dd = (p.x - q.x) ** 2 + (p.y - q.y) ** 2;
          if (dd < 19600) { ctx.strokeStyle = `rgba(46,196,160,${((1 - Math.sqrt(dd) / 140) * 0.2).toFixed(3)})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
        ctx.fillStyle = "rgba(46,196,160,.8)"; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fill();
      }
      if (vis && !reduce) raf = requestAnimationFrame(frame);
    };
    const onMove = (e: PointerEvent) => { const r = cv.getBoundingClientRect(); mouse = { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const onLeave = () => { mouse = null; };
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", size);
    const io = new IntersectionObserver(([en]) => { const was = vis; vis = en.isIntersecting; if (vis && !was) raf = requestAnimationFrame(frame); });
    io.observe(cv);
    size(); frame();
    return () => { cancelAnimationFrame(raf); io.disconnect(); host.removeEventListener("pointermove", onMove); host.removeEventListener("pointerleave", onLeave); window.removeEventListener("resize", size); };
  }, []);

  return <canvas ref={ref} aria-hidden="true" />;
}
