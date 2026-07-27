"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".page-hero-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden mesh-hero px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div className="relative mx-auto max-w-7xl">
        <p className="page-hero-item mono text-[11px] text-signal">{eyebrow}</p>
        <h1 className="page-hero-item display mt-4 max-w-4xl text-4xl md:text-7xl">
          {title}
        </h1>
        <p className="page-hero-item mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
