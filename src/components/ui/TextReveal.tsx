"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
};

export function TextReveal({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const words = children.split(" ");
      el.innerHTML = words
        .map(
          (word) =>
            `<span class="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em]"><span class="word-inner inline-block translate-y-[110%]">${word}&nbsp;</span></span>`,
        )
        .join("");

      gsap.to(el.querySelectorAll(".word-inner"), {
        y: "0%",
        duration: 1.05,
        ease: "power4.out",
        stagger: 0.045,
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
        },
      });
    },
    { dependencies: [children, delay] },
  );

  return (
    <Tag ref={ref as never} className={cn(className)}>
      {children}
    </Tag>
  );
}
