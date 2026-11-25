import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { WorkCard } from "@/components/ui/WorkCard";
import { Arrow } from "@/components/ui/Icons";
import { BreadcrumbJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { Approach, BuildRows, ToolStack } from "@/components/services/ServiceDeep";
import { Faq } from "@/components/services/Faq";
import { Timeline } from "@/components/services/Timeline";
import { Ribbon } from "@/components/ui/Ribbon";
import { ServiceVisual, hasServiceVisual } from "@/components/services/ServiceVisual";
import { serviceDeep } from "@/data/serviceDeep";
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
  const deep = serviceDeep[slug];
  const title = deep ? { absolute: deep.metaTitle } : service.seoTitle.replace(/\s*\|\s*Softilect$/, "");
  const description = deep?.metaDescription ?? service.seoDescription;
  return {
    title,
    description,
    keywords: deep?.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: deep?.metaTitle ?? service.seoTitle, description, url: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const deep = serviceDeep[slug];
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
        title={deep?.h1 ?? service.name}
        lead={deep?.lead ?? service.hero}
        aside={hasServiceVisual(service.slug) ? <ServiceVisual slug={service.slug} /> : undefined}
      >
        <PrimaryButton href="/contact">Book a discovery call</PrimaryButton>
        <SecondaryButton href="/work">See our work</SecondaryButton>
      </PageHero>

      {deep && (
        <section className="rib" data-tone="light" aria-label="Highlights">
          <Ribbon items={deep.ribbon} />
          <Ribbon items={[...deep.ribbon].reverse()} outline />
        </section>
      )}

      <section className="sec ovs pure" data-tone="light">
        <div className="wrap ovw">
          <div className="ovh">
            <span className="eyebrow">Overview</span>
            <h2 className="h2">How Softilect approaches {service.name.toLowerCase()}.</h2>
          </div>
          <div className="prose ovp">
            {(deep?.story ?? [service.intro]).map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
        <div className="wrap who">
          <span className="eyebrow">Who it is for</span>
          <ul>
            {service.whoFor.map((w, i) => (
              <li key={w}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {deep ? (
        <>
          <BuildRows title={deep.buildTitle} rows={deep.build} />
          <Approach title={deep.approachTitle} items={deep.approach} />
          <Timeline title={deep.flowTitle} steps={deep.flow} />
          <ToolStack stack={deep.stack} name={service.name} />
        </>
      ) : (
        <>
          <BuildRows
            title={`What we do on a ${service.name.toLowerCase()} project.`}
            rows={service.howWeHelp.map((b) => ({ title: b.title, text: b.body, items: [] }))}
          />
          <section className="sec pure" data-tone="light">
            <div className="wrap split">
              <div>
                <span className="eyebrow">What you receive</span>
                <ul className="checks" style={{ marginTop: 22 }}>
                  {service.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="eyebrow">Where we have applied it</span>
                <ul className="checks" style={{ marginTop: 22 }}>
                  {service.niches.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      )}

      {caseStudies.length > 0 && (
        <section className="sec tint" data-tone="light">
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

      {deep && <Faq faq={deep.faq} />}

      <section className="sec pure relsec" data-tone="light">
        <div className="wrap">
          <span className="eyebrow">Keep exploring</span>
          <h2 className="h2">Services that pair well with {service.name.toLowerCase()}.</h2>
          <div className="relg">
            {related.map((r, i) => (
              <Link className="rl" key={r.slug} href={`/services/${r.slug}`}>
                <span className="rn" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3>{r.name}</h3>
                <p>{r.short}</p>
                <span className="go">
                  Explore <Arrow />
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
