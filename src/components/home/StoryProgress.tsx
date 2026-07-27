"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function StoryProgress() {
  const bar = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bar.current;
    const tip = glow.current;
    if (!el || !tip) return;

    const tween = gsap.to(el, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.35,
        onUpdate: (self) => {
          const p = self.progress;
          tip.style.left = `${p * 100}%`;
          tip.style.opacity = p > 0.01 && p < 0.995 ? "1" : "0";
          el.style.filter = `saturate(${1 + p * 0.45}) brightness(${1 + p * 0.12})`;
        },
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div className="story-progress-track" aria-hidden>
      <div ref={bar} className="story-progress-bar" />
      <div ref={glow} className="story-progress-tip" />
    </div>
  );
}
