"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { navigationItems, siteConfig } from "@/content/portfolio";

const mobileMenuId = "mobile-navigation";
const headerNavigationItems = navigationItems.filter(
  (item) => item.href !== siteConfig.contactCta.href,
);

type NavigationHref = (typeof navigationItems)[number]["href"];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedHref, setSelectedHref] = useState<NavigationHref | null>(
    null,
  );
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopNavigation = window.matchMedia("(min-width: 80rem)");
    let animationFrame: number | null = null;
    let lastSelectedHref: NavigationHref | null = null;

    function getSections() {
      return headerNavigationItems.flatMap((item) => {
        const section = document.querySelector<HTMLElement>(item.href);

        return section ? [{ href: item.href, section }] : [];
      });
    }

    function selectHref(href: NavigationHref | null) {
      if (lastSelectedHref === href) {
        return;
      }

      lastSelectedHref = href;
      setSelectedHref(href);
    }

    function updateSelectedSection() {
      animationFrame = null;

      if (!desktopNavigation.matches) {
        selectHref(null);
        return;
      }

      const sections = getSections();
      const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 0;
      const activationY = Math.min(
        window.innerHeight - 1,
        Math.max(headerBottom + 1, window.innerHeight * 0.28),
      );
      const activeSection = sections.find(({ section }) => {
        const bounds = section.getBoundingClientRect();

        return bounds.top <= activationY && bounds.bottom > activationY;
      });
      const lastSection = sections[sections.length - 1];
      const lastSectionBounds = lastSection?.section.getBoundingClientRect();
      const isAtPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 1;
      const isLastSectionVisible =
        lastSectionBounds !== undefined &&
        lastSectionBounds.top < window.innerHeight &&
        lastSectionBounds.bottom > headerBottom;
      const activeHref =
        isAtPageEnd && isLastSectionVisible
          ? (lastSection?.href ?? null)
          : (activeSection?.href ?? null);

      selectHref(activeHref);
    }

    function scheduleUpdate() {
      if (animationFrame !== null) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateSelectedSection);
    }

    const resizeObserver = new ResizeObserver(scheduleUpdate);

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }
    getSections().forEach(({ section }) => resizeObserver.observe(section));

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    desktopNavigation.addEventListener("change", scheduleUpdate);

    return () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
      desktopNavigation.removeEventListener("change", scheduleUpdate);
      resizeObserver.disconnect();
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 isolate border-b border-border bg-canvas"
    >
      <div className="mx-auto flex h-18 w-full max-w-content items-center justify-between gap-3 px-page-gutter xl:grid xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:gap-4">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="group relative z-10 inline-flex min-h-11 w-fit min-w-0 shrink select-none items-center gap-3 text-ink [-webkit-touch-callout:none]"
        >
          <span className="pointer-events-none relative size-9 shrink-0 overflow-hidden rounded-[0.625rem]">
            <Image
              src="/images/brand/ds-monogram.png"
              alt=""
              fill
              draggable={false}
              sizes="100px"
              className="scale-[2.75] object-contain"
            />
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none h-9 w-px shrink-0 bg-border"
          />
          <span className="pointer-events-none flex min-w-0 flex-col">
            <span className="truncate font-display text-lg leading-5 font-semibold tracking-tight transition-colors group-hover:text-accent">
              {siteConfig.name}
            </span>
            <span className="mt-0.5 hidden text-[0.6875rem] leading-4 font-semibold tracking-[0.12em] text-muted uppercase min-[340px]:block">
              {siteConfig.role}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {headerNavigationItems.map((item) => {
              const isSelected = selectedHref === item.href;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isSelected ? "location" : undefined}
                    className="relative inline-flex min-h-11 items-center px-1 pb-2 pt-2 text-sm font-medium text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-1 bottom-1 h-1.5 ${
                        isSelected ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="absolute top-1/2 left-1/2 z-10 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-warm" />
                      <span
                        className={`absolute top-1/2 right-1/2 h-px w-1/2 -translate-y-1/2 origin-right bg-accent-warm transition-transform duration-[375ms] ease-out motion-reduce:transition-none ${
                          isSelected ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                      <span
                        className={`absolute top-1/2 left-1/2 h-px w-1/2 -translate-y-1/2 origin-left bg-accent-warm transition-transform duration-[375ms] ease-out motion-reduce:transition-none ${
                          isSelected ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center justify-self-end gap-2 xl:flex">

          <a
            href={siteConfig.contactCta.href}
            className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-button bg-accent px-4 text-sm font-semibold text-on-dark transition-colors hover:bg-ink"
          >
            {siteConfig.contactCta.label}
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="relative z-20 inline-flex size-11 shrink-0 touch-manipulation select-none items-center justify-center rounded-[0.625rem] border border-border bg-surface-warm text-ink transition-colors duration-200 [-webkit-touch-callout:none] hover:border-accent-warm hover:text-accent-warm xl:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls={mobileMenuId}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none relative block h-4 w-5 select-none"
          >
            <span
              className={`absolute top-[2px] left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ease-out motion-reduce:transition-none ${
                isMenuOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute top-[7px] left-0 h-0.5 w-5 rounded-full bg-current transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none ${
                isMenuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-[2px] left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ease-out motion-reduce:transition-none ${
                isMenuOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id={mobileMenuId}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`absolute inset-x-0 top-full z-10 overflow-hidden xl:hidden ${
          isMenuOpen ? "" : "pointer-events-none"
        }`}
      >
        <div
          className={`border-b border-border bg-canvas transition-transform will-change-transform motion-reduce:transition-none ${
            isMenuOpen
              ? "transform-[translate3d(0,0,0)] duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              : "transform-[translate3d(0,-100%,0)] duration-[260ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-h-[calc(100dvh-4.5rem)] w-full max-w-content overflow-y-auto px-page-gutter py-5"
          >
            <ul className="flex flex-col">
              {headerNavigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="flex min-h-12 items-center border-b border-border text-base font-medium text-ink transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href={siteConfig.resumeUrl}
                download
                onClick={closeMenu}
                className="inline-flex min-h-12 items-center justify-center rounded-button border border-border bg-surface px-4 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {siteConfig.secondaryCta.label}
              </a>
              <a
                href={siteConfig.contactCta.href}
                onClick={closeMenu}
                className="inline-flex min-h-12 items-center justify-center rounded-button bg-accent px-4 text-sm font-semibold text-on-dark transition-colors hover:bg-ink"
              >
                {siteConfig.contactCta.label}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
