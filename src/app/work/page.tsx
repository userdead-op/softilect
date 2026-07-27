import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Digital Realm | Softilect Case Studies",
  description:
    "Explore Softilect case studies across Web3 fintech, healthcare software, marketplaces, ecommerce ops, AI SaaS, and enterprise platforms.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Digital Realm | Softilect Case Studies",
    description:
      "Explore Softilect case studies across Web3, healthcare, marketplaces, ecommerce, AI SaaS, and enterprise platforms.",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Realm"
        title="Selected premieres from the Softilect studio."
        description="Real products delivered across healthcare, Web3, SaaS, marketplaces, and ecommerce operations. Built with Softilect delivery discipline."
      />

      <section className="bg-bg px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={i < 2}
            />
          ))}
        </div>
      </section>
    </>
  );
}
