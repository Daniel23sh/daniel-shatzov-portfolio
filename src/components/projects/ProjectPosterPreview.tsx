"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import Image from "next/image";
import { LuArrowUpRight, LuX } from "react-icons/lu";

import styles from "@/components/projects/ProjectPosterPreview.module.css";

type ProjectPosterPreviewProps = {
  projectName: string;
  posterSrc: string;
  posterAlt: string;
  posterWidth: number;
  posterHeight: number;
};

type BodyStyleSnapshot = {
  overflow: string;
  paddingRight: string;
  position: string;
  top: string;
  width: string;
};

function PosterPlaceholder({ projectName }: { projectName: string }) {
  return (
    <div
      className={styles.posterPlaceholder}
      role="img"
      aria-label={`${projectName} product poster placeholder`}
    >
      <span>Project poster</span>
      <strong>{projectName}</strong>
    </div>
  );
}

export function ProjectPosterPreview({
  projectName,
  posterSrc,
  posterAlt,
  posterWidth,
  posterHeight,
}: ProjectPosterPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [posterUnavailable, setPosterUnavailable] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openedWithKeyboardRef = useRef(false);
  const closeTimerRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);
  const bodyStyleSnapshotRef = useRef<BodyStyleSnapshot | null>(null);
  const dialogId = useId();
  const dialogTitleId = useId();
  const dialogDescriptionId = useId();
  const style = {
    "--poster-ratio": `${posterWidth} / ${posterHeight}`,
  } as CSSProperties;

  const lockPageScroll = useCallback(() => {
    if (bodyStyleSnapshotRef.current) {
      return;
    }

    const body = document.body;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

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

  const openPoster = (event: MouseEvent<HTMLButtonElement>) => {
    if (isOpen) {
      return;
    }

    openedWithKeyboardRef.current = event.detail === 0;
    lockPageScroll();
    setIsOpen(true);
  };

  const closePoster = useCallback(() => {
    const dialog = dialogRef.current;

    if (!dialog?.open || isClosing) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialog.close();
      return;
    }

    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      dialog.close();
      closeTimerRef.current = null;
    }, 160);
  }, [isClosing]);

  const handleDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closePoster();
    }
  };

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closePoster();
    }
  };

  const handleDialogClose = () => {
    setIsOpen(false);
    setIsClosing(false);
    unlockPageScroll();

    requestAnimationFrame(() => {
      if (openedWithKeyboardRef.current) {
        triggerRef.current?.focus({ preventScroll: true });
      } else {
        triggerRef.current?.blur();
      }
    });
  };

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!isOpen) {
      return;
    }

    if (!dialog?.open) {
      dialog?.showModal();
    }

    closeButtonRef.current?.focus();
  }, [isOpen]);

  useEffect(
    () => () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }

      unlockPageScroll();
    },
    [unlockPageScroll],
  );

  return (
    <div className={styles.posterPreview} style={style}>
      <button
        ref={triggerRef}
        type="button"
        aria-label={`Open ${projectName} product poster`}
        aria-haspopup="dialog"
        aria-controls={dialogId}
        aria-expanded={isOpen}
        className={styles.trigger}
        onClick={openPoster}
      >
        <span className={styles.thumbnailFrame} aria-hidden="true">
          {posterUnavailable ? (
            <PosterPlaceholder projectName={projectName} />
          ) : (
            <Image
              src={posterSrc}
              alt=""
              width={posterWidth}
              height={posterHeight}
              sizes="(max-width: 640px) 34vw, 10rem"
              className={styles.posterThumbnail}
              onError={() => setPosterUnavailable(true)}
            />
          )}
        </span>
        <span className={styles.posterCaption} style={{ marginTop: "10px" }}>
          <span >Product poster</span>
          <LuArrowUpRight aria-hidden="true" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        id={dialogId}
        aria-labelledby={dialogTitleId}
        aria-describedby={dialogDescriptionId}
        onClick={handleDialogClick}
        onClose={handleDialogClose}
        onKeyDown={handleDialogKeyDown}
        onCancel={(event) => {
          event.preventDefault();
          closePoster();
        }}
        className={`${styles.posterDialog} ${isClosing ? styles.closing : ""}`}
      >
        <div className={styles.posterLightbox}>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closePoster}
            aria-label={`Close ${projectName} product poster`}
            className={styles.closeButton}
          >
            <LuX aria-hidden="true" />
          </button>

          <div className={styles.posterModalCopy}>
            <p>Project poster</p>
            <h2 id={dialogTitleId}>{projectName}</h2>
            <span id={dialogDescriptionId}>Full product poster preview.</span>
          </div>

          <div className={styles.posterFrame}>
            {posterUnavailable ? (
              <PosterPlaceholder projectName={projectName} />
            ) : (
              <Image
                src={posterSrc}
                alt={posterAlt}
                width={posterWidth}
                height={posterHeight}
                className={styles.posterImage}
                onError={() => setPosterUnavailable(true)}
              />
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
}
