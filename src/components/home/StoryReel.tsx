"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { buildStages } from "@/data/process";
import { PhaseVisual } from "@/components/home/PhaseVisual";

gsap.registerPlugin(ScrollTrigger);

export function StoryReel() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const panels = gsap.utils.toArray<HTMLElement>(".story-panel");

        const horizontal = gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            pin: true,
            scrub: 1,
            end: () => `+=${window.innerWidth * (panels.length - 0.35)}`,
            anticipatePin: 1,
          },
        });

        panels.forEach((panel) => {
          const bits = panel.querySelectorAll(
            ".panel-title, .panel-line, .panel-detail, .panel-visual",
          );
          gsap.from(bits, {
            y: 36,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontal,
              start: "left 70%",
              toggleActions: "play none none reverse",
            },
          });
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray<HTMLElement>(".story-panel").forEach((panel) => {
          gsap.from(
            panel.querySelectorAll(
              ".panel-title, .panel-line, .panel-detail, .panel-visual",
            ),
            {
              y: 36,
              opacity: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 80%",
              },
            },
          );
        });
      });
    },
    { scope: section },
  );

  return (
    <section
      ref={section}
      className="relative overflow-hidden bg-bg-deep text-bg-mist"
    >
      <div className="pointer-events-none absolute inset-0 mesh-deep opacity-90" />
      <div className="pointer-events-none absolute inset-0 grid-fade-deep" />

      <div className="relative px-5 pt-20 md:px-8 md:pt-28">
        <p className="mono text-[11px] text-signal-bright">Delivery cycle</p>
        <h2 className="display mt-3 max-w-3xl text-4xl md:text-6xl">
          How we build
        </h2>
        <p className="mt-4 max-w-2xl text-base text-bg-mist/60 md:text-lg">
          A complete development cycle from discovery through maintenance, so
          YOU always know what happens next.
        </p>
      </div>

      <div className="relative flex w-full flex-col md:flex-row md:items-stretch">
        {buildStages.map((scene, index) => (
          <article
            key={scene.id}
            className="story-panel relative flex min-h-[58vh] w-full flex-shrink-0 flex-col justify-between px-5 py-12 md:min-h-[64vh] md:w-screen md:px-8 md:py-16"
          >
            <div className="flex items-start justify-between gap-6">
              <p className="mono text-[11px] text-bg-mist/50">Phase {scene.id}</p>
              <p className="mono text-[11px] text-bg-mist/40">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(buildStages.length).padStart(2, "0")}
              </p>
            </div>

            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
              <div className="max-w-2xl flex-1">
                <h3 className="panel-title display text-4xl text-signal-bright md:text-6xl">
                  {scene.title}
                </h3>
                <p className="panel-line display mt-5 text-xl leading-tight tracking-[-0.03em] md:text-3xl">
                  {scene.line}
                </p>
                <p className="panel-detail mt-5 max-w-lg text-sm leading-relaxed text-bg-mist/65 md:text-base">
                  {scene.detail}
                </p>
              </div>
              <div className="hidden w-full max-w-[224px] shrink-0 md:block">
                <PhaseVisual title={scene.title} />
              </div>
            </div>

            <div className="mt-10 h-px w-full origin-left bg-gradient-to-r from-signal-bright via-ember/70 to-transparent" />
          </article>
        ))}
      </div>
    </section>
  );
}
