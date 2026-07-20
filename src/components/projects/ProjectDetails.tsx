import { ProjectDetailsVisual } from "@/components/projects/ProjectDetailsVisual";
import { projectsSectionContent } from "@/content/portfolio";
import type { Project } from "@/types/portfolio";

type ProjectDetailsProps = {
  project: Project;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const labels = projectsSectionContent.labels;

  return (
    <div className="grid gap-8 px-5 pt-6 pb-6 sm:px-8 sm:pt-8 sm:pb-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 lg:px-12 lg:pt-10 lg:pb-12">
      <div className="min-w-0">
        <ProjectDetailsVisual
          project={project}
          placeholderLabel={projectsSectionContent.placeholderLabel}
        />

        <div className="mt-6 border-l-2 border-accent-warm/70 pl-4">
          <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
            {labels.builtAround}
          </p>
          <p className="mt-1 font-display text-xl leading-7 font-medium text-ink sm:text-2xl sm:leading-8">
            {project.builtAround}
          </p>
        </div>
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl font-semibold text-accent-warm">
            {project.number}
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-accent-warm/70" />
          <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase sm:text-sm">
            {project.subtitle}
          </p>
        </div>

        <h2
          id="project-details-title"
          className="mt-3 font-display text-[clamp(2.5rem,6vw,4rem)] leading-[0.95] font-semibold tracking-tight text-ink"
        >
          {project.title}
        </h2>

        <div className="mt-6">
          <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
            {projectsSectionContent.modal.overviewLabel}
          </p>
          <p
            id="project-details-description"
            className="mt-2 text-base leading-7 text-muted sm:text-[1.0625rem]"
          >
            {project.summary}
          </p>
        </div>

        <dl className="mt-7 grid gap-x-6 gap-y-4 border-y border-border py-5 sm:grid-cols-2">
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

        <div className="mt-7">
          <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
            {labels.technologies}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full bg-surface-blue px-3 py-1.5 text-xs font-semibold text-ink"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7">
          <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
            {labels.architectureTrace}
          </p>
          <ol className="mt-3 flex flex-wrap gap-x-2 gap-y-2 text-sm font-medium text-ink">
            {project.architectureTrace.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-accent-warm">
                    →
                  </span>
                ) : null}
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {project.links.length > 0 ? (
          <div className="mt-8">
            <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
              {projectsSectionContent.modal.linksLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    aria-label={`${link.label} for ${project.title}${
                      link.external ? ", opens in a new tab" : ""
                    }`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-button bg-accent px-5 text-sm font-semibold text-on-dark transition-colors hover:bg-ink"
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
