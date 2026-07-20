"use client";

import { useId, useState } from "react";

import styles from "@/components/sections/Experience.module.css";

export function ExperienceDescription({
  description,
}: {
  description: readonly string[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const additionalFactsId = useId();
  const [firstFact, ...additionalFacts] = description;

  if (!firstFact) {
    return null;
  }

  return (
    <div className={styles.description}>
      <p>{firstFact}</p>

      {additionalFacts.length > 0 ? (
        <>
          <div
            id={additionalFactsId}
            className={`${styles.additionalFacts} ${
              isExpanded ? styles.additionalFactsExpanded : ""
            }`}
          >
            <div className={styles.additionalFactsInner}>
              {additionalFacts.map((fact) => (
                <p key={fact}>{fact}</p>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={styles.moreButton}
            aria-expanded={isExpanded}
            aria-controls={additionalFactsId}
            onClick={() => setIsExpanded((isOpen) => !isOpen)}
          >
            {isExpanded ? "Show less" : "Show more"}
            <span
              aria-hidden="true"
              className={`${styles.moreButtonIcon} ${
                isExpanded ? styles.moreButtonIconExpanded : ""
              }`}
            />
          </button>
        </>
      ) : null}
    </div>
  );
}
