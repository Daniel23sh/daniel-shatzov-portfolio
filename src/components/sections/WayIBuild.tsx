import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { LuFileText, LuSearch } from "react-icons/lu";

import { MobileStepReturnLink } from "@/components/sections/MobileStepReturnLink";
import styles from "@/components/sections/WayIBuild.module.css";
import { wayIBuildContent } from "@/content/portfolio";
import type { ProcessIcon } from "@/types/portfolio";

const wayIBuildHeadingId = "way-i-build-heading";
const wayIBuildFirstStepId = "way-i-build-step-1";

const libraryProcessIcons = {
  understand: LuSearch,
  plan: LuFileText,
} satisfies Partial<Record<ProcessIcon, IconType>>;

const processIcons: Partial<Record<ProcessIcon, ReactNode>> = {
  architect: (
    <>
      <path d="M8 5.25h16a3.5 3.5 0 1 1 0 7H8a3.5 3.5 0 1 1 0-7Z" />
      <circle cx="8" cy="8.75" r="1.25" />
      <circle cx="24" cy="8.75" r="1.25" />
      <path d="M10.5 12.25h11" />
      <path d="M10.5 13.75v11.5M13.25 13.75v11.5M16 13.75v11.5M18.75 13.75v11.5M21.5 13.75v11.5" />
      <path d="M8.5 25.25h15v2.5h-15" />
      <path d="M6 27.75h20v2.5H6v-2.5Z" />
    </>
  ),
  build: (
    <>
      <path d="m11 8-7 8 7 8" />
      <path d="m21 8 7 8-7 8" />
      <path d="m18.5 4-5 24" />
    </>
  ),
  validate: (
    <>
      <path d="M16 3.5 26 8v7.25c0 6.6-4.2 10.6-10 13.25C10.2 25.85 6 21.85 6 15.25V8l10-4.5Z" />
      <path d="m11.5 16 3 3 6-7" />
    </>
  ),
  improve: (
    <>
      <path d="m3 24 8-8 5.5 5.5L28 9" />
      <path d="M21 9h7v7" />
    </>
  ),
};

function ProcessStepIcon({ icon }: { icon: ProcessIcon }) {
  const LibraryIcon = libraryProcessIcons[icon as keyof typeof libraryProcessIcons];

  if (LibraryIcon) {
    return (
      <LibraryIcon
        aria-hidden="true"
        focusable="false"
        strokeWidth={0.75}
        className={styles.iconGraphic}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={styles.iconGraphic}
    >
      {processIcons[icon]}
    </svg>
  );
}

export function WayIBuild() {
  return (
    <section
      id="way-i-build"
      aria-labelledby={wayIBuildHeadingId}
      className="scroll-mt-18 border-b border-border bg-transparent px-page-gutter py-section"
    >
      <div className="mx-auto w-full max-w-content">
        <header className="max-w-[49rem]">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 shrink-0 bg-accent-warm" />
            <h2
              id={wayIBuildHeadingId}
              className="font-display text-[clamp(2.75rem,7vw,4.25rem)] leading-[0.96] font-semibold tracking-[-0.025em] text-ink"
            >
              {wayIBuildContent.heading}
            </h2>
          </div>
          <p className="mt-4 text-base leading-7 font-medium text-accent-warm sm:text-lg">
            {wayIBuildContent.supportingText}
          </p>
          <p className="mt-5 max-w-[46rem] text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {wayIBuildContent.introduction}
          </p>
        </header>

        <div className={styles.timelineFrame}>
          <svg
            viewBox="0 0 1200 48"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
            focusable="false"
            className={styles.feedbackLoop}
          >
            <defs>
              <marker
                id="feedback-loop-arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                markerUnits="strokeWidth"
                orient="auto"
                overflow="visible"
              >
                <path
                  d="M1 1L8 5L1 9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
            </defs>

            <path
              d="M1045.53 48C882.86 9 317.14 9 154.47 48"
              strokeDasharray="2 5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              markerEnd="url(#feedback-loop-arrow)"
            />
          </svg>

          <svg
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
            focusable="false"
            className={styles.smallTabletFeedbackLoop}
          >
            <defs>
              <marker
                id="small-tablet-feedback-loop-arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                markerUnits="strokeWidth"
                orient="auto"
                overflow="visible"
              >
                <path
                  d="M1 1L8 5L1 9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
            </defs>

            <path
              d="M115 236C5 236 5 22 115 22"
              strokeDasharray="2 5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              markerEnd="url(#small-tablet-feedback-loop-arrow)"
            />
          </svg>

          <ol className={styles.timeline}>
            {wayIBuildContent.steps.map((step) => {
              return (
                <li
                  key={step.number}
                  id={step.number === "1" ? wayIBuildFirstStepId : undefined}
                  className={styles.step}
                >
                  <div className={styles.marker} aria-hidden="true">
                    <span>{step.number}</span>
                  </div>
                  <div className={styles.body}>
                    <span className={styles.icon} aria-hidden="true">
                      <ProcessStepIcon icon={step.icon} />
                    </span>
                    <h3
                      className={`mt-2 font-display leading-tight text-ink ${styles.stepTitle}`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mt-2 max-w-[34rem] text-muted ${styles.stepDescription}`}
                    >
                      {step.description}
                    </p>
                    {step.number === "6" ? (
                      <div className={styles.mobileReturn}>
                        <MobileStepReturnLink targetId={wayIBuildFirstStepId} />
                        <svg
                          viewBox="0 0 260 64"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          aria-hidden="true"
                          focusable="false"
                          className={styles.mobileReturnArrow}
                        >
                          <defs>
                            <marker
                              id="mobile-return-arrowhead"
                              viewBox="0 0 10 10"
                              refX="8"
                              refY="5"
                              markerWidth="8"
                              markerHeight="8"
                              markerUnits="strokeWidth"
                              orient="auto"
                              overflow="visible"
                            >
                              <path
                                d="M1 1L8 5L1 9"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </marker>
                          </defs>
                          <circle cx="8" cy="52" r="4" />
                          <path
                            d="M16 52H104C132 52 144 38 144 12"
                            strokeDasharray="2 5"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                            markerEnd="url(#mobile-return-arrowhead)"
                          />
                        </svg>
                      </div>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
