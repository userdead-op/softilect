"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getFeaturedProjects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const projects = getFeaturedProjects();

export function WorkPreview() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".work-card").forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });

        gsap.to(card.querySelector(".work-media"), {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono text-[11px] text-signal">Digital Realm</p>
            <h2 className="display mt-3 max-w-2xl text-4xl md:text-6xl">
              Products delivered end-to-end.
            </h2>
          </div>
          <Link
            href="/work"
            className="mono text-[11px] text-ink-soft transition-colors hover:text-signal"
          >
            Enter the realm →
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="work-card group block overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-[16/11]">
                <div className="work-media absolute inset-[-12%]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-bg-mist md:p-7">
                  <p className="mono text-[10px] text-signal-bright">
                    {project.sector}
                  </p>
                  <h3 className="display mt-2 text-2xl tracking-[-0.03em] md:text-3xl">
                    {project.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
