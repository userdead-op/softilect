import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "About Softilect | Software Development Agency",
  description:
    "Learn about Softilect, a software development agency helping startups and enterprises design, build, and launch AI, SaaS, Web3, healthcare, and ecommerce products.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Discovery before code",
    copy: "BRDs, SRS, journeys, and risk logs come first, so every sprint starts with signal, not guesswork.",
  },
  {
    title: "Secure architecture",
    copy: "We choose foundations that survive year-two growth: access control, integrations, and threat-minded design.",
  },
  {
    title: "Visible delivery",
    copy: "Standups, velocity, QA gates, retros, and change control keep accountability tight from kickoff through maintenance.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A software studio built for end-to-end ownership."
        description="Softilect partners with founders and product teams across AI, SaaS, Web2, Web3, healthcare, fintech, and ecommerce to turn ideas into scalable shipped products."
      />

      <section className="bg-bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <p className="mono text-[11px] text-signal">Studio note</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">
              Strategy, design, engineering, and launch in one continuous
              production.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Softilect exists for teams who need more than a vendor queue.
              We run product delivery the way serious operators expect:
              documented requirements, secure architecture decisions, visible
              sprints, quality gates, and post-launch care.
            </p>
            <p>
              Our portfolio spans blockchain fintech, healthcare platforms,
              marketplaces, ecommerce ops systems, AI SaaS, and enterprise CRM
              tooling, with clients across the UAE, USA, and UK.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mono text-[11px] text-signal">Principles</p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {principles.map((item, i) => (
              <article key={item.title} className="border-t border-ink/10 pt-6">
                <span className="mono text-[10px] text-muted">0{i + 1}</span>
                <h3 className="display mt-3 text-2xl tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-muted">{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-16">
            <MagneticButton href="/contact">Work with Softilect</MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
