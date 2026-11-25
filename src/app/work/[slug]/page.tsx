import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { WorkCard } from "@/components/ui/WorkCard";
import { BreadcrumbJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { getProject, projects } from "@/data/projects";
import { getService } from "@/data/services";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.seoTitle.replace(/\s*\|\s*Softilect.*$/, ""),
    description: project.seoDescription,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.seoTitle, description: project.seoDescription, url: `/work/${project.slug}`, type: "article" },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = [projects[(idx + 1) % projects.length], projects[(idx + 2) % projects.length]];
  const usedServices = project.services.map(getService).filter((s) => s !== undefined);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Work", path: "/work" }, { name: project.name, path: `/work/${project.slug}` }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.name,
          headline: project.seoTitle,
          description: project.seoDescription,
          url: `${SITE_URL}/work/${project.slug}`,
          creator: { "@id": `${SITE_URL}/#organization` },
          genre: project.sector,
        }}
      />
      <PageHero
        eyebrow={project.sector}
        title={project.name}
        lead={project.summary}
      >
        <PrimaryButton href="/contact">Start a similar project</PrimaryButton>
        <SecondaryButton href="/work">All case studies</SecondaryButton>
      </PageHero>

      <section className="sec pure" data-tone="light">
        <div className="wrap stor">
          {[
            { k: "01", t: "The challenge", p: project.challenge },
            { k: "02", t: "Our approach", p: project.approach },
            { k: "03", t: "The outcome", p: project.outcome },
          ].map((r, i) => (
            <Reveal key={r.k} index={i}>
              <h2><span>{r.k}</span>{r.t}</h2>
              <p>{r.p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sec tint" data-tone="light">
        <div className="wrap tools">
          <div className="tg">
            <h3>Services involved</h3>
            <ul>
              {usedServices.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="tg">
            <h3>Scope and stack</h3>
            <ul>
              {project.stack.map((t) => (
                <li key={t}><i aria-hidden="true"><b>{t.charAt(0)}</b></i><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec pure" data-tone="light">
        <div className="wrap">
          <span className="eyebrow">More work</span>
          <h2 className="h2">Keep exploring</h2>
          <div className="wgrid">
            {next.map((p, i) => (
              <WorkCard key={p.slug} project={p} index={idx + i + 1} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
