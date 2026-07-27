"use client";

import { cn } from "@/lib/cn";

const visuals: Record<
  string,
  { label: string; nodes: React.ReactNode }
> = {
  Discovery: {
    label: "Signal map",
    nodes: (
      <>
        <span className="absolute left-[18%] top-[22%] h-3 w-3 rounded-full bg-signal-bright shadow-[0_0_24px_rgba(46,196,160,0.8)] animate-float" />
        <span className="absolute right-[24%] top-[30%] h-2.5 w-2.5 rounded-full bg-ember/90 animate-pulse-ring" />
        <span className="absolute bottom-[28%] left-[30%] h-2 w-2 rounded-full bg-sand" />
        <svg className="absolute inset-8 opacity-70" viewBox="0 0 200 200" fill="none">
          <path
            d="M40 60 C80 40, 120 90, 160 55"
            stroke="rgba(46,196,160,0.55)"
            strokeWidth="1.2"
          />
          <path
            d="M35 130 C90 160, 130 100, 170 140"
            stroke="rgba(228,87,46,0.45)"
            strokeWidth="1.2"
          />
        </svg>
      </>
    ),
  },
  Design: {
    label: "Frame craft",
    nodes: (
      <>
        <span className="absolute left-[16%] top-[18%] h-28 w-40 border border-white/25 bg-white/5 backdrop-blur-sm animate-float" />
        <span className="absolute right-[14%] top-[34%] h-24 w-32 border border-signal-bright/40 bg-signal/10" />
        <span className="absolute bottom-[20%] left-[28%] h-16 w-24 border border-ember/35 bg-ember/10" />
      </>
    ),
  },
  Architecture: {
    label: "Secure lattice",
    nodes: (
      <>
        <div className="absolute inset-[18%] grid grid-cols-3 grid-rows-3 gap-3 opacity-80">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "border border-white/15 bg-white/5",
                i === 4 &&
                  "border-signal-bright/60 bg-signal/20 shadow-[0_0_30px_rgba(46,196,160,0.35)]",
              )}
            />
          ))}
        </div>
      </>
    ),
  },
  Engineering: {
    label: "Build stream",
    nodes: (
      <>
        <div className="absolute inset-x-10 top-1/2 flex -translate-y-1/2 flex-col gap-3">
          {[86, 64, 92, 48, 74].map((w) => (
            <span
              key={w}
              className="h-2 rounded-full bg-gradient-to-r from-signal-bright/80 to-transparent"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
        <span className="absolute right-[18%] top-[22%] mono text-[10px] text-signal-bright">
          sprint.push()
        </span>
      </>
    ),
  },
  "Quality Assurance": {
    label: "Gate check",
    nodes: (
      <>
        <span className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal-bright/40" />
        <span className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ember/40 animate-pulse-ring" />
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-bright" />
        <span className="absolute bottom-[24%] left-1/2 -translate-x-1/2 mono text-[10px] text-bg-mist/60">
          ACCEPT
        </span>
      </>
    ),
  },
  "Reviews & Retros": {
    label: "Feedback orbit",
    nodes: (
      <>
        <span className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/25 animate-[spin_18s_linear_infinite]" />
        <span className="absolute left-[22%] top-[30%] h-10 w-10 rounded-full border border-signal-bright/50 bg-signal/15" />
        <span className="absolute right-[24%] top-[36%] h-10 w-10 rounded-full border border-ember/50 bg-ember/15" />
        <span className="absolute bottom-[26%] left-1/2 h-10 w-10 -translate-x-1/2 rounded-full border border-sand/50 bg-sand/15" />
      </>
    ),
  },
  "Change Management": {
    label: "Scope dial",
    nodes: (
      <>
        <span className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
        <span className="absolute left-1/2 top-1/2 h-[2px] w-20 origin-left -translate-y-1/2 rotate-45 bg-signal-bright shadow-[0_0_16px_rgba(46,196,160,0.7)] animate-float" />
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bg-mist" />
      </>
    ),
  },
  Deployment: {
    label: "Launch vector",
    nodes: (
      <>
        <span className="absolute left-[20%] top-1/2 h-[2px] w-[55%] -translate-y-1/2 bg-gradient-to-r from-transparent via-signal-bright to-ember" />
        <span className="absolute right-[18%] top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-ember animate-float" />
        <span className="absolute left-[22%] top-[38%] h-2 w-2 rounded-full bg-signal-bright" />
        <span className="absolute left-[40%] top-[58%] h-1.5 w-1.5 rounded-full bg-bg-mist/50" />
      </>
    ),
  },
  Maintenance: {
    label: "Care pulse",
    nodes: (
      <>
        <svg className="absolute inset-10 opacity-80" viewBox="0 0 220 120" fill="none">
          <path
            d="M10 70 H50 L70 30 L95 95 L120 55 L145 75 H210"
            stroke="rgba(46,196,160,0.75)"
            strokeWidth="2"
          />
        </svg>
        <span className="absolute right-[20%] top-[24%] h-3 w-3 rounded-full bg-signal-bright animate-pulse-ring" />
      </>
    ),
  },
};

export function PhaseVisual({ title }: { title: string }) {
  const visual = visuals[title] ?? visuals.Discovery;

  return (
    <div className="panel-visual relative mx-auto aspect-square w-[70%] max-w-[210px] md:w-full md:max-w-[210px] md:justify-self-end lg:max-w-[224px]">
      <div className="absolute inset-0 rounded-[1.4rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_0_40px_rgba(46,196,160,0.06)] backdrop-blur-sm" />
      <div className="absolute inset-0 overflow-hidden rounded-[1.4rem]">
        <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-signal/20 blur-3xl" />
        <div className="absolute -bottom-8 -left-4 h-24 w-24 rounded-full bg-ember/15 blur-3xl" />
        {visual.nodes}
      </div>
      <p className="absolute bottom-3 left-4 mono text-[9px] text-bg-mist/55">
        {visual.label}
      </p>
    </div>
  );
}
