import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { serviceCategories, services } from "@/data/services";

export const metadata: Metadata = {
  title: "What We Offer | Software Development Services",
  description:
    "Softilect software development services: digital transformation, web and app development, blockchain, Gen AI, QA, DevOps, ecommerce, healthcare, CRM and CMS.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "What We Offer | Softilect Software Development Services",
    description:
      "Explore Softilect services across engineering, design, blockchain, Gen AI, ecommerce, healthcare, and reliability.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Services built for products that need to premiere."
        description="From digital transformation and UX to engineering, blockchain, Gen AI, QA, and long-term support. Softilect covers the full delivery surface with specialist depth in commerce, healthcare, CRM/CMS, and Web3."
      />

      <section className="bg-bg-mist px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl space-y-20">
          {serviceCategories.map((category) => {
            const items = services.filter((s) => s.category === category.id);
            if (!items.length) return null;

            return (
              <div key={category.id}>
                <div className="max-w-2xl border-t border-ink/10 pt-8">
                  <p className="mono text-[11px] text-signal">{category.label}</p>
                  <h2 className="display mt-3 text-3xl md:text-4xl">
                    {category.description}
                  </h2>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group overflow-hidden border border-ink/10 bg-bg transition-colors hover:border-signal/40"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/50 to-transparent" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="display text-2xl tracking-[-0.03em]">
                            {service.name}
                          </h3>
                          <span className="mono text-[10px] text-signal transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {service.short}
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {service.niches.slice(0, 3).map((niche) => (
                            <li
                              key={niche}
                              className="mono text-[9px] text-ink-soft"
                            >
                              {niche}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-bg-deep px-5 py-24 text-bg-mist md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mono text-[11px] text-signal-bright">Engagement</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">
              Not sure which service fits? Start with discovery.
            </h2>
          </div>
          <MagneticButton href="/contact" variant="deep">
            Book a Discovery Call
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
