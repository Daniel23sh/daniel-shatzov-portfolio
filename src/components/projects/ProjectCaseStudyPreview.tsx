"use client";

import Image from "next/image";
import {
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

import styles from "@/components/projects/ProjectCaseStudyPreview.module.css";
import { QueryOpsProductPreview } from "@/components/projects/QueryOpsProjectPreview";
import { WhatsAppCalendarPreview } from "@/components/projects/WhatsAppCalendarPreview";
import type {
  ProjectCaseStudy,
  ProjectEditorialPreview,
  ProjectPreviewType,
} from "@/types/portfolio";

type ProjectCaseStudyPreviewProps = {
  projectTitle: string;
  preview: ProjectCaseStudy["preview"];
  theme: ProjectCaseStudy["theme"];
  flow: readonly string[];
};

const themeClass: Record<ProjectCaseStudy["theme"], string> = {
  blue: styles.themeBlue,
  warm: styles.themeWarm,
  neutral: styles.themeNeutral,
};

function PreviewGraphic({
  flow,
  type,
}: {
  flow: readonly string[];
  type: ProjectPreviewType;
}) {
  if (type === "queryops" || type === "whatsapp-calendar") {
    return null;
  }

  if (type === "mobile") {
    return (
      <div className={styles.mobileGraphic} aria-hidden="true">
        <span className={styles.mobileSide} />
        <span className={styles.mobileMain}>
          <span className={styles.mobileSpeaker} />
          <span className={styles.mobileBlock} />
          <span className={styles.mobileLine} />
          <span className={styles.mobileLineShort} />
        </span>
        <span className={styles.mobileSide} />
      </div>
    );
  }

  if (type === "flow") {
    return (
      <ol className={styles.flowGraphic} aria-hidden="true">
        {flow.slice(0, 4).map((step, index) => (
          <li key={step} className={styles.flowStep}>
            <span className={styles.flowIndex}>{index + 1}</span>
            <span className={styles.flowLabel}>{step}</span>
            {index < Math.min(flow.length, 4) - 1 ? (
              <span className={styles.flowConnector}>→</span>
            ) : null}
          </li>
        ))}
      </ol>
    );
  }

  if (type === "concept") {
    return (
      <div className={styles.conceptGraphic} aria-hidden="true">
        <span className={styles.conceptFrame} />
        <span className={styles.conceptOrbit} />
        <span className={styles.conceptMarker} />
      </div>
    );
  }

  return (
    <div className={styles.browserGraphic} aria-hidden="true">
      <div className={styles.browserBar}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.browserBody}>
        <div className={styles.browserRail}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.browserCanvas}>
          <span className={styles.browserHeading} />
          <span className={styles.browserPanel} />
          <span className={styles.browserPanel} />
        </div>
      </div>
    </div>
  );
}

function EditorialProjectPreview({
  editorial,
}: {
  editorial: ProjectEditorialPreview;
}) {
  if (editorial.variant === "confidential") {
    return (
      <div
        role="img"
        aria-label={`${editorial.headline}: ${editorial.status}`}
        className={styles.confidentialPreview}
      >
        <div aria-hidden="true" className={styles.confidentialGrid}>
          <span className={styles.gridVerticalOne} />
          <span className={styles.gridVerticalTwo} />
          <span className={styles.gridVerticalThree} />
          <span className={styles.gridHorizontalOne} />
          <span className={styles.gridHorizontalTwo} />
          <span className={styles.gridDiagonalOne} />
          <span className={styles.gridDiagonalTwo} />
          <span className={styles.gridDiagonalThree} />
        </div>

        <div className={styles.confidentialCopy}>
          <p>{editorial.headline}</p>
          <span>{editorial.status}</span>
        </div>

        <svg
          aria-hidden="true"
          className={styles.confidentialCheck}
          viewBox="0 0 420 396"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <line
            className={styles.confidentialCheckGuide}
            x1="128"
            y1="370"
            x2="424"
            y2="60"
          />
          <line
            className={styles.confidentialCheckGuide}
            x1="34"
            y1="138"
            x2="200"
            y2="304"
          />
          <line
            className={styles.confidentialCheckGuide}
            x1="55"
            y1="370"
            x2="351"
            y2="60"
          />
          <line
            className={styles.confidentialCheckGuide}
            x1="32"
            y1="212"
            x2="198"
            y2="378"
          />
          
          
          
          <path d="M 72 214 L 158 300 L 346 104" />
        </svg>
      </div>
    );
  }

  return (
    <div className={styles.editorialPreview}>
      <div className={styles.editorialEyebrow}>{editorial.eyebrow}</div>
      <div className={styles.editorialContent}>
        <p className={styles.editorialHeadline}>{editorial.headline}</p>
        <p className={styles.editorialDescription}>{editorial.description}</p>

        <ol className={styles.editorialFlow} aria-label="Product delivery approach">
          {editorial.flow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>

        <p className={styles.editorialStatus}>
          <span aria-hidden="true" />
          {editorial.status}
        </p>
      </div>
    </div>
  );
}

export function ProjectCaseStudyPreview({
  projectTitle,
  preview,
  theme,
  flow,
}: ProjectCaseStudyPreviewProps) {
  const tabs = preview.tabs ?? [];
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const idPrefix = useId();
  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];
  const isQueryOpsPreview = preview.type === "queryops";
  const isWhatsAppPreview = preview.type === "whatsapp-calendar";
  const isEditorialPreview = Boolean(preview.editorial);
  const isProjectSpecificPreview =
    isQueryOpsPreview || isWhatsAppPreview || isEditorialPreview;

  const selectAdjacentTab = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    if (tabs.length < 2) {
      return;
    }

    const keyDirection =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;

    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      const nextIndex = event.key === "Home" ? 0 : tabs.length - 1;

      setActiveTabId(tabs[nextIndex].id);
      tabRefs.current[nextIndex]?.focus();
      return;
    }

    if (keyDirection === 0) {
      return;
    }

    event.preventDefault();
    const nextIndex = (currentIndex + keyDirection + tabs.length) % tabs.length;
    const nextTab = tabs[nextIndex];

    setActiveTabId(nextTab.id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={`${styles.preview} ${themeClass[theme]}`}>
      {!isProjectSpecificPreview && tabs.length > 0 ? (
        <div className={styles.toolbar}>
          <div
            role="tablist"
            aria-label={`${projectTitle} preview views`}
            className={styles.tabs}
          >
            {tabs.map((tab, index) => {
              const isActive = tab.id === activeTab?.id;

              return (
                <button
                  key={tab.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  type="button"
                  role="tab"
                  id={`${idPrefix}-${tab.id}-tab`}
                  aria-controls={`${idPrefix}-${tab.id}-panel`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTabId(tab.id)}
                  onKeyDown={(event) => selectAdjacentTab(event, index)}
                  className={styles.tab}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          {activeTab ? (
            <p className={styles.previewStatus}>{activeTab.title}</p>
          ) : null}
        </div>
      ) : null}

      <div
        role={isProjectSpecificPreview ? undefined : activeTab ? "tabpanel" : "img"}
        id={!isProjectSpecificPreview && activeTab ? `${idPrefix}-${activeTab.id}-panel` : undefined}
        aria-labelledby={
          !isProjectSpecificPreview && activeTab ? `${idPrefix}-${activeTab.id}-tab` : undefined
        }
        aria-label={
          isProjectSpecificPreview || activeTab ? undefined : `${projectTitle} product preview`
        }
        tabIndex={!isProjectSpecificPreview && activeTab ? 0 : undefined}
        className={`${styles.stage} ${isQueryOpsPreview ? styles.queryOpsStage : ""} ${
          isWhatsAppPreview ? styles.whatsAppStage : ""
        } ${isEditorialPreview ? styles.editorialStage : ""}`}
      >
        {activeTab?.image ? (
          <div className={styles.screenshotFrame}>
            <Image
              fill
              src={activeTab.image.src}
              alt={activeTab.image.alt}
              sizes="(max-width: 768px) 100vw, 80rem"
              className={styles.screenshot}
            />
          </div>
        ) : isEditorialPreview && preview.editorial ? (
          <EditorialProjectPreview editorial={preview.editorial} />
        ) : isQueryOpsPreview ? (
          <QueryOpsProductPreview />
        ) : isWhatsAppPreview ? (
          <WhatsAppCalendarPreview />
        ) : (
          <PreviewGraphic type={preview.type} flow={flow} />
        )}

        {!isProjectSpecificPreview && activeTab ? (
          <div className="sr-only">
            <p>{activeTab.title}</p>
            <p>{activeTab.description}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
