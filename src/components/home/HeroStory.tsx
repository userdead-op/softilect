"use client";

import { useRef } from "react";
import Image from "next/image";
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
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden mesh-hero pb-14 pt-24 md:pb-16 md:pt-28 xl:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade" />

      <div className="hero-orb absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-signal-bright/25 blur-3xl animate-float xl:h-56 xl:w-56 2xl:h-72 2xl:w-72" />
      <div
        className="hero-orb absolute right-[10%] top-[28%] h-56 w-56 rounded-full bg-ember/20 blur-3xl animate-float xl:h-72 xl:w-72 2xl:h-96 2xl:w-96"
        style={{ animationDelay: "1.4s" }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:px-8 xl:max-w-[90rem] xl:gap-16 2xl:max-w-[100rem] 2xl:gap-20">
        <div className="min-w-0">
          <div className="overflow-hidden">
            <p className="hero-brand display text-[clamp(3.4rem,8.5vw,11rem)] text-ink">
              Softilect
            </p>
          </div>

          <h1 className="mt-4 max-w-4xl 2xl:mt-6">
            <span className="block overflow-hidden">
              <span className="hero-line display block text-[clamp(1.7rem,3.4vw,4.5rem)] text-ink-soft">
                Code with a pulse.
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line display block text-[clamp(1.7rem,3.4vw,4.5rem)] text-ink">
                Products with a premiere.
              </span>
            </span>
          </h1>

          <p className="hero-sub mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg 2xl:mt-8 2xl:max-w-xl 2xl:text-xl">
            Powering your growth with Softilect, an end-to-end Development
            partner pioneered in AI, Web3, Web, and Mobile applications. We
            handle everything from YOUR raw ideations till final commit,
            enabling successful launches for your Products.
          </p>

          <div className="hero-cta mt-9 flex flex-wrap gap-3 2xl:mt-11">
            <MagneticButton href="/contact">Begin the story</MagneticButton>
            <MagneticButton href="/work" variant="ghost">
              Hop in Techseum
            </MagneticButton>
          </div>
        </div>

        <div className="hero-visual relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden md:mx-0 md:h-[min(68vh,40rem)] md:w-auto md:max-w-full md:justify-self-end xl:h-[min(70vh,48rem)] 2xl:h-[min(72vh,56rem)]">
          <Image
            src="/hero/hero-desk-code.png"
            alt="Engineering workstation with code on screen and a computer system on the desk"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1536px) 40vw, 32vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/25" />
          <div className="absolute inset-5 border border-white/15 xl:inset-6" />
          <div className="absolute inset-0 flex flex-col justify-between p-7 text-bg-mist xl:p-9 2xl:p-10">
            <div>
              <p className="mono text-[10px] text-signal-bright 2xl:text-[11px]">
                Scene 01
              </p>
              <p className="display mt-3 text-3xl tracking-[-0.04em] md:text-4xl xl:text-5xl 2xl:text-6xl">
                From brief
                <br />
                to product
                <br />
                premiere.
              </p>
            </div>
            <div className="flex items-end justify-between gap-4">
              <p className="max-w-[12rem] text-sm text-bg-mist/70 2xl:max-w-[14rem] 2xl:text-base">
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
