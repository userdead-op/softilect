import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { WorkCard } from "@/components/ui/WorkCard";
import { Arrow } from "@/components/ui/Icons";
import { BreadcrumbJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { getProject } from "@/data/projects";
import { getService, services, serviceCategories } from "@/data/services";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const title = service.seoTitle.replace(/\s*\|\s*Softilect$/, "");
  return {
    title,
    description: service.seoDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.seoTitle, description: service.seoDescription, url: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const category = serviceCategories.find((c) => c.id === service.category);
  const caseStudies = service.relatedProjects.map(getProject).filter((p) => p !== undefined).slice(0, 2);
  const related = [
    ...services.filter((s) => s.category === service.category && s.slug !== service.slug),
    ...services.filter((s) => s.category !== service.category),
  ].slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.name, path: `/services/${service.slug}` }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          description: service.seoDescription,
          url: `${SITE_URL}/services/${service.slug}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: ["GB", "AE", "US"],
        }}
      />
      <PageHero
        eyebrow={category?.label ?? "Service"}
        title={service.name}
        lead={service.hero}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]}
      >
        <PrimaryButton href="/contact">Book a discovery call</PrimaryButton>
        <SecondaryButton href="/work">See our work</SecondaryButton>
      </PageHero>

      <section className="sec" data-tone="light">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Overview</span>
            <h2 className="h2">How Softilect approaches {service.name.toLowerCase()}.</h2>
            <div className="prose" style={{ marginTop: 22 }}>
              <p>{service.intro}</p>
            </div>
          </div>
          <div>
            <span className="eyebrow">Who it is for</span>
            <ul className="checks" style={{ marginTop: 22 }}>
              {service.whoFor.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--white)" }} data-tone="light">
        <div className="wrap">
          <span className="eyebrow">How we help</span>
          <h2 className="h2">What we do on a {service.name.toLowerCase()} project.</h2>
          <div className="cards3">
            {service.howWeHelp.map((b, i) => (
              <article className="card" key={b.title}>
                <span className="num">0{i + 1}</span>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
          <div className="split" style={{ marginTop: 40 }}>
            <div className="panel">
              <h3>What you receive</h3>
              <div className="tags">
                {service.deliverables.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>
            <div className="panel">
              <h3>Where we have applied it</h3>
              <div className="tags">
                {service.niches.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {caseStudies.length > 0 && (
        <section className="sec" data-tone="light">
          <div className="wrap">
            <div className="cathead" style={{ borderBottom: 0, paddingBottom: 0 }}>
              <div>
                <span className="eyebrow">Related work</span>
                <h2 className="h2">Case studies</h2>
              </div>
              <SecondaryButton href="/work">All case studies</SecondaryButton>
            </div>
            <div className="wgrid">
              {caseStudies.map((p, i) => (
                <WorkCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="sec" style={{ background: caseStudies.length ? "var(--white)" : undefined }} data-tone="light">
        <div className="wrap">
          <span className="eyebrow">Related services</span>
          <h2 className="h2">You may also need</h2>
          <div className="svgrid">
            {related.map((s) => (
              <Link className="sv" key={s.slug} href={`/services/${s.slug}`}>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="more">
                  View service <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title={`Planning a ${service.name.toLowerCase()} project?`} />
    </>
  );
}
