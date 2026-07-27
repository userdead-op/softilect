import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Link href={`/work/${project.slug}`} className="group block overflow-hidden">
      <div className="relative aspect-[16/11] overflow-hidden bg-ink/5">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-bg-deep/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-bg-mist md:p-8">
          <p className="mono text-[10px] text-signal-bright">{project.sector}</p>
          <h2 className="display mt-2 text-3xl tracking-[-0.03em] md:text-4xl">
            {project.name}
          </h2>
          <p className="mt-3 max-w-md text-sm text-bg-mist/75 line-clamp-2">
            {project.summary}
          </p>
        </div>
      </div>
    </Link>
  );
}
