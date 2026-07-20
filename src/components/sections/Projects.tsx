import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { projects, projectsSectionContent } from "@/content/portfolio";

const projectsHeadingId = "projects-heading";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby={projectsHeadingId}
      className="scroll-mt-24 border-y border-border bg-transparent px-page-gutter py-section"
    >
      <div className="mx-auto w-full max-w-content">
        <header className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-accent-warm" />
            <h2
              id={projectsHeadingId}
              className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-none font-semibold tracking-tight text-ink"
            >
              {projectsSectionContent.heading}
            </h2>
          </div>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {projectsSectionContent.intro}
          </p>
        </header>

        <div className="mt-12 space-y-12 md:mt-16 md:space-y-16 lg:space-y-20">
          {projects.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
