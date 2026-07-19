"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealDirection = "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  direction: RevealDirection;
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  direction,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isEnhanced, setIsEnhanced] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = elementRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!element || prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const bounds = element.getBoundingClientRect();
    const visibleHeight = Math.max(
      0,
      Math.min(bounds.bottom, window.innerHeight) - Math.max(bounds.top, 0),
    );
    const visibleRatio = bounds.height > 0 ? visibleHeight / bounds.height : 1;

    setIsEnhanced(true);

    if (visibleRatio >= 0.2) {
      return;
    }

    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hiddenDirection =
    direction === "left"
      ? "transform-[translate3d(0,1rem,0)] lg:transform-[translate3d(-2rem,0,0)]"
      : "transform-[translate3d(0,1rem,0)] lg:transform-[translate3d(2rem,0,0)]";
  const isHidden = isEnhanced && !isVisible;

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: isEnhanced && isVisible ? `${delayMs}ms` : "0ms" }}
      className={`${className} transition-[transform,opacity] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:duration-[600ms] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
        isHidden
          ? `${hiddenDirection} opacity-0`
          : "transform-[translate3d(0,0,0)] opacity-100"
      }`}
    >
      {children}
    </div>
  );
}
