import { ProjectBackdrop } from "@/components/projects/ProjectBackdrop";
import { ProjectPreviewVisual } from "@/components/projects/ProjectPreviewVisual";
import { Reveal } from "@/components/ui/Reveal";
import { projectsSectionContent } from "@/content/portfolio";
import type { Project } from "@/types/portfolio";

type ProjectPreviewProps = {
  index: number;
  project: Project;
};

export function ProjectPreview({ index, project }: ProjectPreviewProps) {
  const visualOnLeft = index % 2 === 1;
  const visualDirection = visualOnLeft ? "left" : "right";
  const copyDirection = visualOnLeft ? "right" : "left";
  const headingId = `project-${project.id}-heading`;

  return (
    <article
      aria-labelledby={headingId}
      data-project-preview={project.id}
      className={`grid items-center gap-4 py-8 md:gap-6 md:py-10 lg:min-h-[17rem] lg:gap-8 lg:py-2 xl:gap-12 ${
        visualOnLeft
          ? "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
          : "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
      }`}
    >
      <div
        className={`relative isolate min-h-[15rem] min-w-0 sm:min-h-[17rem] lg:min-h-[16.5rem] ${
          visualOnLeft ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <ProjectBackdrop
          projectId={project.id}
          projectNumber={project.number}
          visualOnLeft={visualOnLeft}
        />

        <Reveal direction={visualDirection} className="relative z-10">
          <div className="flex min-h-[15rem] items-center justify-center sm:min-h-[17rem] lg:min-h-[16.5rem]">
            <ProjectPreviewVisual
              project={project}
              placeholderLabel={projectsSectionContent.placeholderLabel}
            />
          </div>
        </Reveal>
      </div>

      <Reveal
        direction={copyDirection}
        delayMs={80}
        className={visualOnLeft ? "lg:order-2" : "lg:order-1"}
      >
        <div className="relative z-10 mx-auto flex w-full max-w-[31rem] flex-col lg:mx-0">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-semibold text-accent-warm sm:text-2xl">
              {project.number}
            </span>
            <span aria-hidden="true" className="h-px w-7 bg-accent-warm/70" />
            <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase sm:text-sm">
              {project.subtitle}
            </p>
          </div>

          <h3
            id={headingId}
            className="mt-3 font-display text-[clamp(2rem,4vw,2.25rem)] leading-[1.02] font-semibold tracking-tight text-ink"
          >
            {project.title}
          </h3>

          <p className="mt-3 max-w-[34rem] text-base leading-7 text-muted">
            {project.summary}
          </p>

          <button
            type="button"
            aria-haspopup="dialog"
            aria-controls="project-details-dialog"
            data-project-trigger={project.id}
            className="mt-4 inline-flex min-h-11 w-fit items-center gap-3 text-xs font-semibold tracking-[0.1em] text-accent uppercase transition-colors hover:text-ink sm:text-sm"
          >
            {projectsSectionContent.actionLabel}
            <span aria-hidden="true" className="text-lg leading-none">
              →
            </span>
          </button>
        </div>
      </Reveal>
    </article>
  );
}
