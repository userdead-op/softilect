"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TextReveal } from "@/components/ui/TextReveal";
import { serviceCategories, getServicesByCategory } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

export function CapabilityOrbit() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cap-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
      });

      gsap.to(".cap-ring", {
        rotate: 180,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-bg-mist py-24 md:py-32">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full border border-ink/10 cap-ring" />
      <div className="pointer-events-none absolute -right-10 top-28 h-52 w-52 rounded-full border border-signal/25 cap-ring" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <p className="mono text-[11px] text-signal">What we offer</p>
        <TextReveal className="display mt-4 max-w-3xl text-4xl md:text-6xl">
          Capabilities across strategy, product, Web3, and AI.
        </TextReveal>
        <p className="mt-5 max-w-xl text-muted">
          Explore the full catalog on our What we offer page.
        </p>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((category, i) => {
            const items = getServicesByCategory(category.id);
            return (
              <div key={category.id} className="cap-item border-t border-ink/10 pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="display text-2xl tracking-[-0.03em]">
                    {category.label}
                  </h3>
                  <span className="mono text-[10px] text-muted">0{i + 1}</span>
                </div>
                <p className="mt-3 text-sm text-muted">{category.description}</p>
                <ul className="mt-5 space-y-2">
                  {items.slice(0, 4).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-sm text-ink-soft transition-colors hover:text-signal"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <Link
            href="/services"
            className="mono text-[11px] text-signal transition-colors hover:text-ink"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
