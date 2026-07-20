import Image from "next/image";

import { siteConfig } from "@/content/portfolio";

const circleTextureDots = Array.from({ length: 80 }, (_, index) => index);
const upperRightDots = Array.from({ length: 30 }, (_, index) => index);
const lowerLeftDots = Array.from({ length: 12 }, (_, index) => index);
const mobilePortraitDots = Array.from({ length: 12 }, (_, index) => index);

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-[calc(100dvh-4.5rem)] items-center overflow-hidden px-page-gutter py-section"
    >
      <div className="mx-auto grid w-full max-w-content items-center gap-14 xl:grid-cols-[minmax(0,1.08fr)_minmax(28rem,0.92fr)] xl:gap-20">
        <div className="max-w-[44rem]">
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent-warm">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-accent-warm"
            />
            {siteConfig.role}
          </p>

          <h1
            id="hero-heading"
            className="max-w-4xl font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.98] font-medium tracking-[-0.035em] text-ink"
          >
            {siteConfig.headline}
          </h1>

          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-8 text-muted sm:text-lg lg:text-xl lg:leading-9">
            {siteConfig.supportingText}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={siteConfig.primaryCta.href}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-button bg-accent px-6 py-3 text-base font-semibold text-on-dark transition-colors hover:bg-ink sm:w-auto"
            >
              {siteConfig.primaryCta.label}
            </a>
            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex min-h-12 w-full items-center justify-center rounded-button border border-border bg-surface px-6 py-3 text-base font-semibold text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
            >
              {siteConfig.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="relative isolate mx-auto w-full max-w-[36rem] px-2 pt-8 sm:px-6 sm:pt-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
          >
            <div className="absolute bottom-[2%] left-1/2 aspect-square w-[88%] -translate-x-1/2 overflow-hidden rounded-full bg-surface-warm">
              <div className="absolute inset-[10%] hidden grid-cols-10 grid-rows-[repeat(8,minmax(0,1fr))] place-items-center xl:grid">
                {circleTextureDots.map((dot) => (
                  <span
                    key={dot}
                    className="size-px rounded-full bg-surface/60"
                  />
                ))}
              </div>
            </div>

            <div className="absolute top-[5%] right-[1%] grid grid-cols-4 gap-1.5 xl:hidden">
              {mobilePortraitDots.map((dot) => (
                <span
                  key={dot}
                  className="size-0.5 rounded-full bg-accent-warm/15"
                />
              ))}
            </div>
            <span className="absolute top-[5%] left-[3%] h-px w-[18%] bg-border/50 xl:hidden" />
            <span className="absolute right-[3%] bottom-[7%] h-[16%] w-px bg-border/50 xl:hidden" />

            <span className="absolute top-[14%] left-[2%] hidden h-px w-[28%] bg-border/40 xl:block" />
            <span className="absolute top-[2%] left-[18%] hidden h-[31%] w-px bg-border/40 xl:block" />
            <span className="absolute top-[52%] left-0 hidden h-px w-[23%] bg-border/40 xl:block" />
            <span className="absolute top-[45%] left-[7%] hidden h-[32%] w-px bg-border/40 xl:block" />
            <span className="absolute bottom-[13%] left-[1%] hidden h-px w-[18%] bg-border/40 xl:block" />
            <span className="absolute top-[7%] right-[2%] hidden h-[48%] w-px bg-border/40 xl:block" />
            <span className="absolute top-[25%] right-0 hidden h-px w-[17%] bg-border/40 xl:block" />
            <span className="absolute right-0 bottom-[22%] hidden h-px w-[14%] bg-border/40 xl:block" />

            <div className="absolute top-[4%] right-[1%] hidden grid-cols-6 gap-2 xl:grid">
              {upperRightDots.map((dot) => (
                <span
                  key={dot}
                  className={
                    dot % 2 === 0
                      ? "size-1 rounded-full bg-accent-warm/30"
                      : "size-1 rounded-full bg-accent-warm/20"
                  }
                />
              ))}
            </div>

            <div className="absolute bottom-[20%] left-[2%] hidden grid-cols-3 gap-2 xl:grid">
              {lowerLeftDots.map((dot) => (
                <span
                  key={dot}
                  className="size-1 rounded-full bg-accent-warm/15"
                />
              ))}
            </div>

            <span className="absolute bottom-[13%] left-[19%] hidden size-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent-warm/80 xl:block" />
          </div>

          <Image
            src={siteConfig.heroImage.src}
            alt={siteConfig.heroImage.alt}
            width={1254}
            height={1254}
            preload
            sizes="(min-width: 1280px) 520px, (min-width: 640px) 500px, 86vw"
            className="relative z-10 h-auto w-full object-contain mb-10"
          />
        </div>
      </div>
    </section>
  );
}
