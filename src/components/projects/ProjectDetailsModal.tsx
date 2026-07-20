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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
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

  const closeDialog = () => {
    dialogRef.current?.close();
  };

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

    setActiveProjectId(null);
    unlockPageScroll();

    requestAnimationFrame(() => {
      trigger?.focus({ preventScroll: true });
      triggerRef.current = null;
    });
  };

  return (
    <div onClick={handlePreviewClick}>
      {children}

      <dialog
        ref={dialogRef}
        id="project-details-dialog"
        aria-labelledby="project-details-title"
        aria-describedby="project-details-description"
        onClick={handleDialogClick}
        onClose={handleDialogClose}
        onKeyDown={handleDialogKeyDown}
        className={`${styles.dialog} m-auto max-h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] max-w-[68rem] overflow-hidden rounded-[1.25rem] border border-border bg-surface p-0 text-ink shadow-card-hover sm:max-h-[90dvh] sm:w-[calc(100%-2rem)] sm:rounded-[1.75rem]`}
      >
        {activeProject ? (
          <div className="max-h-[calc(100dvh-1rem)] overflow-y-auto overscroll-contain sm:max-h-[90dvh]">
            <div className="sticky top-0 z-20 flex justify-end border-b border-border/70 bg-surface/95 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-3 sm:px-6 sm:pt-5">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeDialog}
                className="inline-flex min-h-11 items-center justify-center rounded-button border border-border bg-surface px-4 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {projectsSectionContent.modal.closeLabel}
              </button>
            </div>

            <ProjectDetails project={activeProject} />

            <div
              aria-hidden="true"
              className="h-[max(0.5rem,env(safe-area-inset-bottom))]"
            />
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
