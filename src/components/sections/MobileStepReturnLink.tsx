"use client";

import type { MouseEvent } from "react";
import { LuRotateCcw } from "react-icons/lu";

import styles from "@/components/sections/WayIBuild.module.css";

type MobileStepReturnLinkProps = {
  targetId: string;
};

export function MobileStepReturnLink({ targetId }: MobileStepReturnLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    const url = new URL(window.location.href);
    url.hash = "way-i-build";
    window.history.replaceState(
      window.history.state,
      "",
      `${url.pathname}${url.search}${url.hash}`,
    );
  }

  return (
    <a
      href="#way-i-build"
      aria-label="Back to step 1: Understand"
      className={styles.mobileReturnLink}
      onClick={handleClick}
    >
      <LuRotateCcw aria-hidden="true" focusable="false" />
      <span>Back to 01 · Understand</span>
    </a>
  );
}
