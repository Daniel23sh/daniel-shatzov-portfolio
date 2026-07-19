import { projectsSectionContent } from "@/content/portfolio";
import type { Project } from "@/types/portfolio";

import { Reveal } from "@/components/ui/Reveal";
import { ProjectVisual } from "@/components/projects/ProjectVisual";

type ProjectShowcaseProps = {
  index: number;
  project: Project;
};

export function ProjectShowcase({ index, project }: ProjectShowcaseProps) {
  const visualOnLeft = index % 2 === 1;
  const visualDirection = visualOnLeft ? "left" : "right";
  const copyDirection = visualOnLeft ? "right" : "left";
  const headingId = `project-${project.id}-heading`;
  const labels = projectsSectionContent.labels;

  return (
    <article
      aria-labelledby={headingId}
      className={`group grid items-center gap-8 overflow-hidden rounded-project-card border border-border bg-surface p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-card-hover md:p-8 lg:gap-12 lg:p-10 motion-reduce:transform-none motion-reduce:transition-none ${
        visualOnLeft
          ? "lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]"
          : "lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
      }`}
    >
      <Reveal
        direction={visualDirection}
        className={visualOnLeft ? "lg:order-1" : "lg:order-2"}
      >
        <ProjectVisual
          project={project}
          placeholderLabel={projectsSectionContent.placeholderLabel}
        />
      </Reveal>

      <Reveal
        direction={copyDirection}
        delayMs={80}
        className={visualOnLeft ? "lg:order-2" : "lg:order-1"}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl font-semibold text-accent-warm">
              {project.number}
            </span>
            <span aria-hidden="true" className="h-px w-8 bg-accent-warm/70" />
            <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase sm:text-sm">
              {project.subtitle}
            </p>
          </div>

          <h3
            id={headingId}
            className="mt-4 max-w-xl font-display text-[clamp(2rem,4vw,2.5rem)] leading-[1.05] font-semibold tracking-tight text-ink"
          >
            {project.title}
          </h3>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-[1.0625rem]">
            {project.summary}
          </p>

          <dl className="mt-6 grid gap-x-6 gap-y-4 border-y border-border py-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
                {labels.role}
              </dt>
              <dd className="mt-1 text-sm leading-6 font-medium text-ink">
                {project.role}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
                {labels.duration}
              </dt>
              <dd className="mt-1 text-sm leading-6 font-medium text-ink">
                {project.duration}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
                {labels.status}
              </dt>
              <dd className="mt-1 text-sm leading-6 font-medium text-ink">
                {project.status}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
                {labels.visibility}
              </dt>
              <dd className="mt-1 text-sm leading-6 font-medium text-ink">
                {project.visibility}
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
              {labels.technologies}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.slice(0, 6).map((technology) => (
                <li
                  key={technology}
                  className="rounded-full bg-surface-blue px-3 py-1.5 text-xs font-semibold text-ink"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
              {labels.architectureTrace}
            </p>
            <ol className="mt-3 flex flex-wrap gap-x-2 gap-y-2 text-sm font-medium text-ink">
              {project.architectureTrace.map((step, stepIndex) => (
                <li key={step} className="flex items-center gap-2">
                  {stepIndex > 0 ? (
                    <span aria-hidden="true" className="text-accent-warm">
                      →
                    </span>
                  ) : null}
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 border-l-2 border-accent-warm/70 pl-4">
            <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
              {labels.builtAround}
            </p>
            <p className="mt-1 font-display text-xl leading-7 font-medium text-ink">
              {project.builtAround}
            </p>
          </div>

          <button
            type="button"
            disabled
            className="mt-7 inline-flex min-h-11 w-fit cursor-not-allowed items-center justify-center rounded-button border border-accent/35 bg-surface-blue/70 px-5 text-sm font-semibold text-accent opacity-65"
          >
            {projectsSectionContent.actionLabel}
          </button>
        </div>
      </Reveal>
    </article>
  );
}
