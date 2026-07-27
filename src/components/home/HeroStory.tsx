"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function HeroStory() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.from(".hero-brand", {
          yPercent: 120,
          duration: 1.25,
          delay: 0.15,
        })
          .from(
            ".hero-line",
            { yPercent: 110, duration: 1.1, stagger: 0.08 },
            "-=0.75",
          )
          .from(".hero-sub", { y: 28, opacity: 0, duration: 0.9 }, "-=0.55")
          .from(
            ".hero-cta",
            { y: 20, opacity: 0, duration: 0.8, stagger: 0.08 },
            "-=0.5",
          )
          .from(
            ".hero-visual",
            { scale: 1.12, opacity: 0, duration: 1.4, ease: "power3.out" },
            "-=1.1",
          )
          .from(
            ".hero-orb",
            { scale: 0.6, opacity: 0, duration: 1.2, stagger: 0.1 },
            "-=1",
          );
      }, root);

      return () => ctx.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden mesh-hero pb-16 pt-28 md:pb-24 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade" />

      <div className="hero-orb absolute left-[8%] top-[22%] h-40 w-40 rounded-full bg-signal-bright/25 blur-3xl animate-float" />
      <div
        className="hero-orb absolute right-[12%] top-[30%] h-56 w-56 rounded-full bg-ember/20 blur-3xl animate-float"
        style={{ animationDelay: "1.4s" }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 md:grid-cols-[1.15fr_0.85fr] md:items-end md:px-8">
        <div>
          <div className="overflow-hidden">
            <p className="hero-brand display text-[clamp(3.4rem,12vw,8.5rem)] text-ink">
              Softilect
            </p>
          </div>

          <h1 className="mt-4 max-w-3xl">
            <span className="block overflow-hidden">
              <span className="hero-line display block text-[clamp(1.7rem,4.6vw,3.4rem)] text-ink-soft">
                Code with a pulse.
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line display block text-[clamp(1.7rem,4.6vw,3.4rem)] text-ink">
                Products with a premiere.
              </span>
            </span>
          </h1>

          <p className="hero-sub mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Powering your growth with Softilect, an end-to-end Development partner pioneered in AI, Web3, Web, and Mobile applications. We handle everything from YOUR raw ideations till final commit, enabling successful launches for your Products.
          </p>

          <div className="hero-cta mt-9 flex flex-wrap gap-3">
            <MagneticButton href="/contact">Begin the story</MagneticButton>
            <MagneticButton href="/work" variant="ghost">
              Hop in Techseum
            </MagneticButton>
          </div>
        </div>

        <div className="hero-visual relative aspect-[4/5] w-full max-w-md justify-self-end overflow-hidden md:max-w-none">
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-[#163049] to-signal" />
          <div className="absolute inset-0 opacity-40 mix-blend-screen">
            <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-signal-bright blur-2xl animate-float" />
            <div className="absolute bottom-8 right-0 h-56 w-56 rounded-full bg-ember blur-3xl" />
          </div>
          <div className="absolute inset-6 border border-white/15" />
          <div className="absolute inset-0 flex flex-col justify-between p-8 text-bg-mist">
            <div>
              <p className="mono text-[10px] text-signal-bright">Scene 01</p>
              <p className="display mt-3 text-3xl tracking-[-0.04em] md:text-4xl">
                From brief
                <br />
                to product
                <br />
                premiere.
              </p>
            </div>
            <div className="flex items-end justify-between">
              <p className="max-w-[12rem] text-sm text-bg-mist/70">
                Scroll to enter how we build.
              </p>
              <div className="relative flex h-12 w-12 items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-signal-bright/40 animate-pulse-ring" />
                <span className="h-2 w-2 rounded-full bg-signal-bright" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
