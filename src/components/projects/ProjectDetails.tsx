import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

import { ProjectCaseStudyPreview } from "@/components/projects/ProjectCaseStudyPreview";
import { ProjectProofFlow } from "@/components/projects/ProjectProofFlow";
import { projectsSectionContent } from "@/content/portfolio";
import type { Project } from "@/types/portfolio";

type ProjectDetailsProps = {
  project: Project;
};

function StoryHeading({ children }: { children: string }) {
  return (
    <h3 className="flex items-center gap-3 text-xs font-bold tracking-[0.13em] text-accent-warm-text uppercase">
      <span aria-hidden="true" className="size-2.5 rounded-full bg-accent-warm" />
      {children}
    </h3>
  );
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { modal } = projectsSectionContent;
  const { caseStudy } = project;
  const story = caseStudy.story;

  return (
    <article className="pt-9 sm:pt-10 lg:pt-7">
      <header className="px-5 pr-20 sm:px-10 sm:pr-24 lg:px-13 lg:pr-28">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1">
          <p className="text-[0.6875rem] font-bold tracking-[0.18em] text-accent-warm-text uppercase sm:text-xs">
            {project.number} / {caseStudy.projectLabel ?? modal.featuredProjectLabel}
          </p>
          <span aria-hidden="true" className="hidden h-4 w-px bg-border sm:block" />
          <p className="min-w-0 text-[0.6875rem] font-semibold tracking-[0.1em] text-muted uppercase sm:text-xs">
            {caseStudy.category ?? project.subtitle}
          </p>
        </div>

        <h2
          id="project-details-title"
          className="mt-2 font-display text-[clamp(3rem,6vw,4.9rem)] leading-[0.88] font-semibold tracking-[-0.035em] text-ink"
        >
          {project.title}
        </h2>

        <p
          id="project-details-description"
          className="mt-2 max-w-[66rem] text-base leading-7 text-ink/85 sm:text-[1.05rem]"
        >
          {project.summary}
        </p>

        {caseStudy.facts?.length ? (
          <ul
            aria-label={`${project.title} project facts`}
            className="mt-3 flex max-w-[70rem] flex-wrap items-center gap-x-3 gap-y-1 text-[0.6875rem] leading-5 font-semibold tracking-[0.04em] text-muted sm:text-xs"
          >
            {caseStudy.facts.map((fact, index) => (
              <li key={fact} className="flex items-center gap-3">
                {index > 0 ? (
                  <span aria-hidden="true" className="size-1 rounded-full bg-accent-warm" />
                ) : null}
                {fact}
              </li>
            ))}
          </ul>
        ) : null}

        {caseStudy.team ? (
          <p className="mt-2 text-xs leading-5 font-medium text-muted">
            <span className="mr-2 font-bold tracking-[0.1em] text-ink uppercase">
              Team
            </span>
            {caseStudy.team}
          </p>
        ) : null}

        {caseStudy.audience ? (
          <p className="mt-3 max-w-[66rem] text-xs leading-5 font-medium text-muted">
            <span className="mr-2 font-bold tracking-[0.1em] text-ink uppercase">
              For
            </span>
            {caseStudy.audience}
          </p>
        ) : null}
      </header>

      <section aria-label={modal.previewLabel} className="mt-4 px-5 sm:px-10 lg:mt-4 lg:px-13">
        <ProjectCaseStudyPreview
          key={project.id}
          projectTitle={project.title}
          preview={caseStudy.preview}
          theme={caseStudy.theme}
          flow={caseStudy.proof.flow}
        />
      </section>

      <section
        aria-label={modal.storyLabel}
        className="mt-4 grid border-y border-border bg-canvas/55 lg:mt-3 lg:grid-cols-[0.85fr_1.55fr_0.85fr]"
      >
        <div className="px-5 py-7 sm:px-10 lg:px-13 lg:py-6">
          <StoryHeading>{modal.problemLabel}</StoryHeading>
          <p className="mt-3 max-w-[36rem] text-base leading-7 text-ink/82 lg:max-w-[19rem] lg:text-[0.95rem] lg:leading-6">
            {story.problem.body}
          </p>
        </div>

        <div className="border-y border-border px-5 py-7 sm:px-10 lg:border-x lg:border-y-0 lg:px-8 lg:py-6">
          <StoryHeading>{modal.buildLabel}</StoryHeading>

          {story.build.body ? (
            <p className="mt-3 max-w-[40rem] text-base leading-7 text-ink/82 lg:text-[0.95rem] lg:leading-6">
              {story.build.body}
            </p>
          ) : null}

          {story.build.highlights?.length ? (
            <ul className="mt-3 grid gap-2 text-[0.8125rem] leading-5 text-ink/80">
              {story.build.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-accent-warm"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {caseStudy.proof.steps?.length ? (
            <ProjectProofFlow
              label={caseStudy.proof.label}
              steps={caseStudy.proof.steps}
            />
          ) : (
            <ol
              aria-label={caseStudy.proof.label}
              className="mt-5 grid grid-cols-2 gap-x-3 gap-y-5 sm:flex sm:gap-0"
            >
              {caseStudy.proof.flow.slice(0, 5).map((step, index, flow) => (
                <li
                  key={step}
                  className="relative flex min-w-0 flex-col items-center text-center sm:flex-1"
                >
                  {index < flow.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-4 left-[calc(50%+1rem)] hidden h-px w-[calc(100%-2rem)] bg-accent sm:block"
                    />
                  ) : null}
                  <span className="relative z-10 grid size-8 place-items-center rounded-full border border-accent-warm bg-accent-warm text-xs font-bold text-on-dark shadow-card">
                    {index + 1}
                  </span>
                  <span className="mt-2 max-w-[7rem] text-[0.6875rem] leading-4 font-semibold text-ink">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="px-5 py-7 sm:px-10 lg:px-8 lg:py-6">
          <StoryHeading>{modal.outcomeLabel}</StoryHeading>
          <p className="mt-3 max-w-[36rem] font-display text-[1.35rem] leading-8 font-medium text-ink lg:max-w-[20rem] lg:text-xl lg:leading-7">
            {story.outcome.body}
          </p>
          {story.outcome.qualifier ? (
            <p className="mt-4 max-w-[36rem] border-t border-border pt-4 text-xs leading-5 font-medium text-muted lg:max-w-[20rem]">
              {story.outcome.qualifier}
            </p>
          ) : null}
        </div>
      </section>

      <footer className="flex flex-col gap-6 px-5 py-6 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-13 lg:py-5">
        <div>
          {caseStudy.proof.note ? (
            <p className="mb-3 max-w-[44rem] text-xs leading-5 font-medium text-muted">
              {caseStudy.proof.note}
            </p>
          ) : null}
          {caseStudy.proof.scope ? (
            <p className="mb-4 max-w-[52rem] border-l-2 border-border pl-3 text-xs leading-5 text-muted">
              <span className="mr-2 font-bold tracking-[0.1em] text-ink uppercase">
                Scope
              </span>
              {caseStudy.proof.scope}
            </p>
          ) : null}
          <p className="sr-only">{projectsSectionContent.labels.capabilities}</p>
          <ul className="flex flex-wrap gap-2.5">
            {caseStudy.proof.capabilities.slice(0, 5).map((capability) => (
              <li
                key={capability}
                className="inline-flex min-h-9 items-center gap-2 rounded-[0.65rem] border border-accent/50 bg-surface px-3.5 text-sm font-medium text-ink"
              >
                <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
                {capability}
              </li>
            ))}
          </ul>
        </div>

        {project.links.length > 0 ? (
          <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
            {project.links.map((link, index) => (
              <li key={`${link.label}-${link.href}`}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  aria-label={`${link.label} for ${project.title}${
                    link.external ? ", opens in a new tab" : ""
                  }`}
                  className={
                    index === 0
                      ? "inline-flex min-h-11 items-center gap-2 rounded-button bg-ink px-6 text-sm font-semibold text-on-dark transition-colors hover:bg-accent"
                      : "inline-flex min-h-11 items-center gap-3 px-2 text-sm font-semibold text-accent transition-colors hover:text-ink"
                  }
                >
                  {link.label}
                  {link.external ? (
                    <LuArrowUpRight aria-hidden="true" className="size-4" />
                  ) : (
                    <LuArrowRight aria-hidden="true" className="size-4" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="inline-flex min-h-11 items-center gap-2 rounded-button border border-border bg-canvas/70 px-4 text-sm font-semibold text-muted">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent-warm" />
            {caseStudy.statusAction ?? "Private project"}
          </p>
        )}
      </footer>
    </article>
  );
}
