"use client";

import Image from "next/image";

const visuals: Record<string, { label: string; src: string; alt: string }> = {
  Discovery: {
    label: "Signal map",
    src: "/hero/phases/discovery.png",
    alt: "Discovery desk with research mind map and sticky notes",
  },
  Design: {
    label: "Frame craft",
    src: "/hero/phases/design.png",
    alt: "Design desk with UI wireframes and graphics tablet",
  },
  Architecture: {
    label: "Secure lattice",
    src: "/hero/phases/architecture.png",
    alt: "Architecture desk with system diagram on screen",
  },
  Engineering: {
    label: "Build stream",
    src: "/hero/phases/engineering.png",
    alt: "Engineering desk with code blocks on dual monitors",
  },
  "Quality Assurance": {
    label: "Gate check",
    src: "/hero/phases/qa.png",
    alt: "QA desk with test dashboard and devices",
  },
  "Reviews & Retros": {
    label: "Feedback orbit",
    src: "/hero/phases/review.png",
    alt: "Review desk with team video call and collaborative document",
  },
  "Change Management": {
    label: "Scope dial",
    src: "/hero/phases/change.png",
    alt: "Change management desk with scrum board and planner",
  },
  Deployment: {
    label: "Launch vector",
    src: "/hero/phases/maintenance.png",
    alt: "Deployment desk with cloud pipeline dashboard",
  },
  Maintenance: {
    label: "Care pulse",
    src: "/hero/phases/maintenance.png",
    alt: "Maintenance desk with cloud monitoring and server lights",
  },
};

export function PhaseVisual({ title }: { title: string }) {
  const visual = visuals[title] ?? visuals.Discovery;

  return (
    <div className="panel-visual relative mx-auto aspect-square w-[70%] max-w-[210px] md:w-full md:max-w-[210px] md:justify-self-end lg:max-w-[224px]">
      <div className="absolute inset-0 overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_0_40px_rgba(46,196,160,0.06)]">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes="224px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/70 via-transparent to-bg-deep/15" />
      </div>
      <p className="absolute bottom-3 left-4 z-10 mono text-[9px] text-bg-mist/80">
        {visual.label}
      </p>
    </div>
  );
}
