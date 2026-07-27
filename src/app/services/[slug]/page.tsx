import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getProject } from "@/data/projects";
import { getService, services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/services/${service.slug}`,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const caseStudies = service.relatedProjects
    .map((projectSlug) => getProject(projectSlug))
    .filter(Boolean)
    .slice(0, 2);

  const otherServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-bg-deep text-bg-mist">
        <div className="relative min-h-[56vh] md:min-h-[64vh]">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/70 to-bg-deep/30" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-12 pt-32 md:px-8 md:pb-16">
            <p className="mono text-[11px] text-signal-bright">What we offer</p>
            <h1 className="display mt-4 max-w-4xl text-4xl md:text-7xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-bg-mist/75 md:text-lg">
              {service.hero}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <p className="mono text-[11px] text-signal">Overview</p>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft md:text-xl">
              {service.intro}
            </p>
          </div>
          <div>
            <p className="mono text-[11px] text-signal">Who it is for</p>
            <ul className="mt-5 space-y-4">
              {service.whoFor.map((item) => (
                <li
                  key={item}
                  className="border-t border-ink/10 pt-4 text-base text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-bg px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mono text-[11px] text-signal">How Softilect helps</p>
          <h2 className="display mt-3 max-w-3xl text-3xl md:text-5xl">
            How we build this for your niche.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {service.howWeHelp.map((block, i) => (
              <article key={block.title} className="border-t border-ink/10 pt-6">
                <span className="mono text-[10px] text-muted">0{i + 1}</span>
                <h3 className="display mt-3 text-2xl tracking-[-0.03em]">
                  {block.title}
                </h3>
                <p className="mt-4 text-muted">{block.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-2">
            <div>
              <p className="mono text-[11px] text-signal">Deliverables</p>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="text-ink-soft">
                    <span className="mr-2 text-signal">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mono text-[11px] text-signal">Niche focus</p>
              <ul className="mt-5 flex flex-wrap gap-3">
                {service.niches.map((niche) => (
                  <li
                    key={niche}
                    className="border border-ink/10 px-4 py-2 text-sm text-ink-soft"
                  >
                    {niche}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {caseStudies.length > 0 && (
        <section className="bg-bg-mist px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="mono text-[11px] text-signal">Proof</p>
            <h2 className="display mt-3 text-3xl md:text-5xl">
              Related case studies
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {caseStudies.map(
                (project) =>
                  project && (
                    <ProjectCard key={project.slug} project={project} />
                  ),
              )}
            </div>
          </div>
        </section>
      )}

      <section className="bg-bg-deep px-5 py-20 text-bg-mist md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mono text-[11px] text-signal-bright">Next step</p>
              <h2 className="display mt-3 text-3xl md:text-5xl">
                Let’s scope your {service.name.toLowerCase()} engagement.
              </h2>
            </div>
            <MagneticButton href="/contact" variant="deep">
              Start a project
            </MagneticButton>
          </div>

          <div className="mt-16 border-t border-white/10 pt-10">
            <p className="mono text-[11px] text-bg-mist/50">Explore more</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {otherServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="mono text-[11px] text-bg-mist/70 transition-colors hover:text-signal-bright"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/services"
                className="mono text-[11px] text-signal-bright"
              >
                All services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
