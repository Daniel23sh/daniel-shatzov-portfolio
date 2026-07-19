import type { Project } from "@/types/portfolio";

type ProjectVisualProps = {
  placeholderLabel: string;
  project: Project;
};

const visualSurface: Record<Project["id"], string> = {
  queryops: "bg-surface-blue",
  checkit: "bg-surface-warm",
  "whatsapp-calendar": "bg-canvas",
};

function AbstractProductFrame({ projectId }: { projectId: Project["id"] }) {
  if (projectId === "queryops") {
    return (
      <div className="absolute inset-x-[8%] top-[24%] bottom-[18%] rounded-frame border border-ink/10 bg-surface/65 shadow-card">
        <div className="flex h-8 items-center gap-1.5 border-b border-ink/10 px-3">
          <span className="size-1.5 rounded-full bg-accent-warm/45" />
          <span className="size-1.5 rounded-full bg-accent/25" />
          <span className="size-1.5 rounded-full bg-ink/15" />
        </div>
        <div className="grid h-[calc(100%-2rem)] grid-cols-[0.32fr_1fr] gap-3 p-3">
          <span className="rounded-lg border border-ink/8 bg-surface/55" />
          <span className="rounded-lg border border-ink/8 bg-surface/75" />
        </div>
      </div>
    );
  }

  if (projectId === "checkit") {
    return (
      <div className="absolute inset-x-[12%] top-[17%] bottom-[14%] flex items-center justify-center gap-3 sm:gap-5">
        <span className="h-[78%] w-[24%] -rotate-3 rounded-[1.25rem] border border-ink/10 bg-surface/45" />
        <span className="h-full w-[30%] rounded-[1.5rem] border border-ink/15 bg-surface/75 shadow-card" />
        <span className="h-[78%] w-[24%] rotate-3 rounded-[1.25rem] border border-ink/10 bg-surface/45" />
      </div>
    );
  }

  return (
    <div className="absolute inset-x-[8%] top-[23%] bottom-[17%] rounded-frame border border-ink/10 bg-surface/70 shadow-card">
      <div className="grid h-full grid-cols-[0.38fr_1fr] gap-3 p-3 sm:p-4">
        <span className="rounded-lg border border-ink/8 bg-surface-blue/55" />
        <span className="grid content-center gap-2 rounded-lg border border-ink/8 bg-surface/70 p-3">
          <span className="h-3 w-[66%] rounded-full bg-accent/10" />
          <span className="ml-auto h-3 w-[52%] rounded-full bg-accent-warm/12" />
          <span className="h-3 w-[72%] rounded-full bg-accent/10" />
        </span>
      </div>
    </div>
  );
}

export function ProjectVisual({
  placeholderLabel,
  project,
}: ProjectVisualProps) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-frame border border-border ${visualSurface[project.id]}`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute top-[14%] left-[5%] h-px w-[25%] bg-ink/10" />
        <span className="absolute top-[8%] right-[9%] h-[22%] w-px bg-ink/10" />
        <AbstractProductFrame projectId={project.id} />
      </div>

      <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between gap-3 sm:inset-x-6 sm:top-5">
        <span className="font-display text-2xl font-semibold text-accent-warm sm:text-3xl">
          {project.number}
        </span>
        <span className="rounded-full border border-ink/10 bg-surface/80 px-3 py-1 text-[0.6875rem] font-semibold tracking-[0.08em] text-muted uppercase sm:text-xs">
          {placeholderLabel}
        </span>
      </div>

      <div className="absolute inset-x-4 bottom-4 z-10 sm:inset-x-6 sm:bottom-5">
        <p className="font-display text-[clamp(1.5rem,4vw,2.25rem)] leading-none font-semibold tracking-tight text-ink">
          {project.title}
        </p>
        <ol className="mt-3 hidden flex-wrap items-center gap-x-2 gap-y-1 text-[0.6875rem] font-semibold tracking-[0.05em] text-muted uppercase sm:flex">
          {project.architectureTrace.map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-accent-warm/70">
                  /
                </span>
              ) : null}
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
