import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { getProject, projects } from "@/data/projects";
import { services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.seoTitle,
    description: project.seoDescription,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      url: `/work/${project.slug}`,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const relatedServices = services.filter((service) =>
    project.services.includes(service.slug),
  );

  return (
    <>
      <section className="relative overflow-hidden bg-bg-deep text-bg-mist">
        <div className="relative min-h-[58vh] md:min-h-[68vh]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/55 to-bg-deep/20" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-12 pt-32 md:px-8 md:pb-16">
            <p className="mono text-[11px] text-signal-bright">{project.sector}</p>
            <h1 className="display mt-4 max-w-4xl text-4xl md:text-7xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-bg-mist/75 md:text-lg">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg-mist px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3 md:gap-16">
          <article>
            <p className="mono text-[11px] text-signal">Challenge</p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
              {project.challenge}
            </p>
          </article>
          <article>
            <p className="mono text-[11px] text-signal">Approach</p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
              {project.approach}
            </p>
          </article>
          <article>
            <p className="mono text-[11px] text-signal">Outcome</p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
              {project.outcome}
            </p>
          </article>
        </div>

        <div className="mx-auto mt-16 max-w-7xl border-t border-ink/10 pt-10">
          <p className="mono text-[11px] text-signal">Stack & capabilities</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <li
                key={item}
                className="border border-ink/10 bg-bg px-4 py-2 text-sm text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {relatedServices.length > 0 && (
          <div className="mx-auto mt-14 max-w-7xl">
            <p className="mono text-[11px] text-signal">Related services</p>
            <div className="mt-5 flex flex-wrap gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="mono text-[11px] text-ink-soft transition-colors hover:text-signal"
                >
                  {service.name} →
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mx-auto mt-16 max-w-7xl">
          <MagneticButton href="/contact">Start a similar project</MagneticButton>
        </div>
      </section>
    </>
  );
}
