"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/** Fades and lifts its children in the first time they scroll into view. */
export function Reveal({ children, className = "", index = 0, as: Tag = "div" }: { children: ReactNode; className?: string; index?: number; as?: "div" | "article" | "li" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { el.classList.add("in"); return; }
    const io = new IntersectionObserver(([en]) => { if (en.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Any = Tag as "div";
  return (
    <Any ref={ref as React.RefObject<HTMLDivElement>} className={`rv ${className}`} style={{ "--i": index } as CSSProperties}>
      {children}
    </Any>
  );
}
