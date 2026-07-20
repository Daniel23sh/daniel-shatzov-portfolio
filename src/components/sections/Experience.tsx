import styles from "@/components/sections/Experience.module.css";
import { ExperienceDescription } from "@/components/sections/ExperienceDescription";
import {
  experiences,
  experienceSectionContent,
} from "@/content/portfolio";

const experienceHeadingId = "experience-heading";

function DateRange({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  return (
    <>
      {startDate} <span aria-hidden="true">—</span> {endDate}
    </>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby={experienceHeadingId}
      className="scroll-mt-18 border-b border-border bg-transparent px-page-gutter py-section"
    >
      <div className="mx-auto w-full max-w-content">
        <header className={styles.header}>
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 shrink-0 bg-accent-warm" />
            <h2
              id={experienceHeadingId}
              className="font-display text-[clamp(2.75rem,7vw,4.25rem)] leading-[0.96] font-semibold tracking-[-0.025em] text-ink"
            >
              {experienceSectionContent.heading}
            </h2>
          </div>
          <p className={styles.supportingText}>
            {experienceSectionContent.supportingText}
          </p>
        </header>

        <ol className={styles.timeline}>
          {experiences.map((experience) => (
            <li key={experience.id} className={styles.item}>
              <p className={styles.date}>
                <DateRange
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                />
              </p>

              <div className={styles.marker} aria-hidden="true">
                <span>{experience.number}</span>
              </div>

              <article className={styles.content}>
                <p className={styles.mobileDate}>
                  <DateRange
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                  />
                </p>

                <h3 className={styles.role}>{experience.role}</h3>

                <p className={styles.metadata}>
                  <span className={styles.organization}>
                    {experience.organization}
                    {"division" in experience && experience.division ? (
                      <>
                        <span aria-hidden="true"> · </span>
                        {experience.division}
                      </>
                    ) : null}
                  </span>
                  <span className={styles.location}>{experience.location}</span>
                </p>

                <ExperienceDescription description={experience.description} />

                <ul
                  className={styles.tags}
                  aria-label={`${experience.role} highlights`}
                >
                  {experience.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
