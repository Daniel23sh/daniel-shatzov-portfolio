import type { Project } from "@/types/portfolio";

type ProjectPreviewVisualProps = {
  placeholderLabel: string;
  project: Project;
};

export function ProjectPreviewVisual({
  placeholderLabel,
  project,
}: ProjectPreviewVisualProps) {
  return (
    <div
      role="img"
      aria-label={`${project.title}: ${placeholderLabel}`}
      className="relative mx-auto aspect-[4/3] w-[62%] min-w-[10rem] max-w-[15rem] overflow-hidden rounded-[0.25rem] border border-ink/65 bg-surface/65 shadow-card sm:w-[52%] lg:w-[48%]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="flex h-7 items-center gap-1.5 border-b border-ink/55 px-3">
          <span className="size-1.5 rounded-full bg-ink/80" />
          <span className="size-1.5 rounded-full bg-ink/80" />
          <span className="size-1.5 rounded-full bg-ink/80" />
        </div>

        <div className="absolute top-[31%] left-1/2 aspect-[1.25/1] w-[43%] -translate-x-1/2 rounded-[0.375rem] border border-dashed border-ink/55">
          <span className="absolute top-[18%] left-[62%] size-2.5 rounded-full border border-ink/65" />
          <span className="absolute bottom-[24%] left-[20%] h-px w-[36%] origin-left -rotate-45 bg-ink/70" />
          <span className="absolute right-[20%] bottom-[24%] h-px w-[36%] origin-right rotate-45 bg-ink/70" />
          <span className="absolute right-[17%] bottom-[24%] h-px w-[32%] origin-right -rotate-45 bg-ink/70" />
        </div>
      </div>

      <p className="absolute inset-x-3 bottom-[9%] text-center text-[0.6875rem] font-medium text-ink sm:text-xs">
        {placeholderLabel}
      </p>
    </div>
  );
}
