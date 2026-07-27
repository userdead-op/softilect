"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MagneticButton } from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export function FinaleCTA() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".finale-copy > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
      });

      gsap.to(".finale-glow", {
        scale: 1.25,
        opacity: 0.9,
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
    <section
      ref={root}
      className="relative overflow-hidden bg-bg-deep px-5 py-28 text-bg-mist md:px-8 md:py-36"
    >
      <div className="finale-glow pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/30 blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center finale-copy">
        <p className="mono text-[11px] text-signal-bright">Next scene</p>
        <h2 className="display mt-5 text-4xl md:text-7xl">
          Ready for a product that feels like a film premiere?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-bg-mist/65 md:text-lg">
          Tell us about your roadmap. We&apos;ll respond with a clear path from
          discovery to launch.
        </p>
        <div className="mt-10 flex justify-center">
          <MagneticButton href="/contact" variant="deep">
            Book a Discovery Call
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
