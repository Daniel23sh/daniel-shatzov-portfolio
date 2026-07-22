import type { Project } from "@/types/portfolio";
import { ProjectPosterPreview } from "@/components/projects/ProjectPosterPreview";

type ProjectPreviewVisualProps = {
  project: Project;
};

export function ProjectPreviewVisual({
  project,
}: ProjectPreviewVisualProps) {
  return (
    <ProjectPosterPreview
      projectName={project.poster.projectName}
      posterSrc={project.poster.src}
      posterAlt={project.poster.alt}
      posterWidth={project.poster.width}
      posterHeight={project.poster.height}
    />
  );
}
