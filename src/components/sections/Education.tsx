import { PiBookOpenThin } from "react-icons/pi";

import styles from "@/components/sections/Education.module.css";
import { educationSectionContent } from "@/content/portfolio";

const educationHeadingId = "education-heading";

export function Education() {
  const {
    eyebrow,
    degree,
    institution,
    startDate,
    endDate,
    startYear,
    endYear,
    expectedGraduation,
    focusLabel,
    focusItems,
  } = educationSectionContent;

  return (
    <section
      id="education"
      aria-labelledby={educationHeadingId}
      className="scroll-mt-18 bg-transparent px-page-gutter"
    >
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.degreeBlock}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" className={styles.eyebrowRule} />
              {eyebrow}
            </p>

            <div className={styles.degreeDetails}>
              <PiBookOpenThin
                aria-hidden="true"
                focusable="false"
                className={styles.bookIcon}
              />
              <div>
                <h2 id={educationHeadingId} className={styles.degree}>
                  {degree}
                </h2>
                <p className={styles.institution}>{institution}</p>
              </div>
            </div>
          </div>

          <div className={styles.timelineBlock}>
            <p className="sr-only">
              {startDate} <span aria-hidden="true">—</span> {endDate}
            </p>
            <div className={styles.datePath} aria-hidden="true">
              <span className={styles.year}>{startYear}</span>
              <span className={styles.path} />
              <span className={styles.year}>{endYear}</span>
            </div>
            <p className={styles.expected}>{expectedGraduation}</p>
          </div>

          <div className={styles.focusBlock}>
            <p className={styles.focusLabel}>{focusLabel}</p>
            <ul className={styles.focusList}>
              {focusItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
