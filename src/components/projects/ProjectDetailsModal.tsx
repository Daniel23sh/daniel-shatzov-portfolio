"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import { LuX } from "react-icons/lu";

import { ProjectDetails } from "@/components/projects/ProjectDetails";
import styles from "@/components/projects/ProjectDetailsModal.module.css";
import { projectsSectionContent } from "@/content/portfolio";
import type { Project, ProjectId } from "@/types/portfolio";

type ProjectDetailsModalProps = {
  children: ReactNode;
  projects: readonly Project[];
};

type BodyStyleSnapshot = {
  overflow: string;
  paddingRight: string;
  position: string;
  top: string;
  width: string;
};

export function ProjectDetailsModal({
  children,
  projects,
}: ProjectDetailsModalProps) {
  const [activeProjectId, setActiveProjectId] = useState<ProjectId | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollPositionRef = useRef(0);
  const bodyStyleSnapshotRef = useRef<BodyStyleSnapshot | null>(null);
  const activeProject = activeProjectId
    ? projects.find((project) => project.id === activeProjectId)
    : undefined;

  const lockPageScroll = useCallback(() => {
    if (bodyStyleSnapshotRef.current) {
      return;
    }

    const body = document.body;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    scrollPositionRef.current = window.scrollY;
    bodyStyleSnapshotRef.current = {
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollPositionRef.current}px`;
    body.style.width = "100%";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }, []);

  const unlockPageScroll = useCallback(() => {
    const previousStyles = bodyStyleSnapshotRef.current;

    if (!previousStyles) {
      return;
    }

    const body = document.body;
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    body.style.overflow = previousStyles.overflow;
    body.style.paddingRight = previousStyles.paddingRight;
    body.style.position = previousStyles.position;
    body.style.top = previousStyles.top;
    body.style.width = previousStyles.width;
    bodyStyleSnapshotRef.current = null;

    root.style.scrollBehavior = "auto";
    window.scrollTo(0, scrollPositionRef.current);
    root.style.scrollBehavior = previousScrollBehavior;
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!activeProject) {
      if (dialog?.open) {
        dialog.close();
      }
      return;
    }

    if (!dialog?.open) {
      dialog?.showModal();
    }

    closeButtonRef.current?.focus();
  }, [activeProject]);

  useEffect(
    () => () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      unlockPageScroll();
    },
    [unlockPageScroll],
  );

  const openProject = (projectId: string, trigger: HTMLButtonElement) => {
    const project = projects.find((candidate) => candidate.id === projectId);

    if (!project) {
      return;
    }

    triggerRef.current = trigger;
    lockPageScroll();
    setIsClosing(false);
    setActiveProjectId(project.id);
  };

  const handlePreviewClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const trigger = event.target.closest<HTMLButtonElement>(
      "button[data-project-trigger]",
    );
    const projectId = trigger?.dataset.projectTrigger;

    if (trigger && projectId) {
      openProject(projectId, trigger);
    }
  };

  const closeDialog = useCallback(() => {
    const dialog = dialogRef.current;

    if (!dialog?.open || isClosing) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      dialog.close();
      return;
    }

    setIsClosing(true);
    closeTimerRef.current = setTimeout(() => {
      dialog.close();
      closeTimerRef.current = null;
    }, 150);
  }, [isClosing]);

  const handleDialogClick = (event: ReactMouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeDialog();
    }
  };

  const handleDialogKeyDown = (
    event: ReactKeyboardEvent<HTMLDialogElement>,
  ) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeDialog();
    }
  };

  const handleDialogClose = () => {
    const trigger = triggerRef.current;

    setIsClosing(false);
    setActiveProjectId(null);
    unlockPageScroll();

    requestAnimationFrame(() => {
      trigger?.focus({ preventScroll: true });
      triggerRef.current = null;
    });
  };

  return (
    <div onClickCapture={handlePreviewClick}>
      {children}

      <dialog
        ref={dialogRef}
        id="project-details-dialog"
        aria-labelledby="project-details-title"
        aria-describedby="project-details-description"
        onClick={handleDialogClick}
        onClose={handleDialogClose}
        onKeyDown={handleDialogKeyDown}
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        className={`${styles.dialog} ${isClosing ? styles.closing : ""}`}
      >
        {activeProject ? (
          <div className={styles.scroller}>
            <div className={styles.closeLayer}>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeDialog}
                aria-label={projectsSectionContent.modal.closeLabel}
                className="pointer-events-auto inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-ink/25 bg-surface/92 text-ink shadow-card transition-colors hover:border-accent hover:text-accent"
              >
                <LuX aria-hidden="true" className="size-6" />
              </button>
            </div>

            <ProjectDetails project={activeProject} />

            <div
              aria-hidden="true"
              className="h-[max(1rem,env(safe-area-inset-bottom))]"
            />
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
