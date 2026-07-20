import { CoreToolkit } from "@/components/projects/CoreToolkit";
import { ProjectDetailsModal } from "@/components/projects/ProjectDetailsModal";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import { projects, projectsSectionContent } from "@/content/portfolio";

const projectsHeadingId = "projects-heading";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby={projectsHeadingId}
      className="scroll-mt-16 border-y border-border bg-transparent px-page-gutter py-section"
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

        <ProjectDetailsModal projects={projects}>
          <div className="mt-8 md:mt-10 lg:mt-6">
            {projects.map((project, index) => (
              <ProjectPreview
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </ProjectDetailsModal>

        <CoreToolkit />
      </div>
    </section>
  );
}
