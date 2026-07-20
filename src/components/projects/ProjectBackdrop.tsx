import type { Project } from "@/types/portfolio";

type ProjectBackdropProps = {
  projectId: Project["id"];
  projectNumber: Project["number"];
  visualOnLeft: boolean;
};

const backdropDots = Array.from({ length: 12 }, (_, index) => index);

const toneClass: Record<Project["id"], string> = {
  queryops: "bg-[#E1E8EE]/85",
  checkit: "bg-[#F3E2D6]/85",
  "whatsapp-calendar": "bg-[#E3E8DC]/85",
};

const detailColor: Record<Project["id"], string> = {
  queryops: "bg-accent/25",
  checkit: "bg-accent-warm/35",
  "whatsapp-calendar": "bg-[#7F9073]/30",
};

const ovalPlacement: Record<Project["id"], string> = {
  queryops: "top-[6%] right-[15%] rotate-[-5deg]",
  checkit: "top-[6%] left-[15%] rotate-[5deg]",
  "whatsapp-calendar": "top-[6%] right-[15%] rotate-[-5deg]",
};

export function ProjectBackdrop({
  projectId,
  projectNumber,
  visualOnLeft,
}: ProjectBackdropProps) {
  const outerSide = visualOnLeft ? "left" : "right";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    >
      <span
        className={`absolute aspect-[2/1] w-[78%] rounded-[50%] blur-xl md:w-[74%] lg:w-[72%] ${toneClass[projectId]} ${ovalPlacement[projectId]}`}
      />

      <span
        className={`absolute top-[13%] hidden h-[42%] w-px lg:block ${detailColor[projectId]} ${
          visualOnLeft ? "right-[8%]" : "left-[8%]"
        }`}
      />
      <span
        className={`absolute top-[17%] hidden h-px w-6 lg:block ${detailColor[projectId]} ${
          visualOnLeft
            ? "right-[calc(8%_-_0.75rem)]"
            : "left-[calc(8%_-_0.75rem)]"
        }`}
      />
      <span
        className={`absolute bottom-[18%] hidden h-px w-[30%] lg:block ${detailColor[projectId]} ${
          visualOnLeft ? "left-[4%]" : "right-[4%]"
        }`}
      />
      <span
        className={`absolute top-[62%] hidden h-[17%] w-px md:block ${detailColor[projectId]} ${
          visualOnLeft ? "right-[5%]" : "left-[5%]"
        }`}
      />

      <span
        className={`absolute bottom-[calc(18%_-_0.1875rem)] hidden size-1.5 rounded-full bg-accent-warm/80 lg:block ${
          visualOnLeft ? "left-[4%]" : "right-[4%]"
        }`}
      />

      <span
        className={`absolute top-[2%] hidden font-display text-[clamp(7rem,12vw,10rem)] leading-none font-medium text-accent-warm opacity-[0.06] lg:block ${
          outerSide === "left" ? "left-[2%]" : "right-[2%]"
        }`}
      >
        {projectNumber}
      </span>

      <div
        className={`absolute bottom-[8%] grid grid-cols-4 gap-1.5 md:gap-2 ${
          visualOnLeft ? "right-[8%]" : "left-[8%]"
        }`}
      >
        {backdropDots.map((dot) => (
          <span
            key={dot}
            className={`size-0.5 rounded-full lg:size-1 ${detailColor[projectId]}`}
          />
        ))}
      </div>
    </div>
  );
}
