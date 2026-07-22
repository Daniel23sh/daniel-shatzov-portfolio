import type { IconType } from "react-icons";
import {
  SiDocker,
  SiFastapi,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import styles from "@/components/projects/CoreToolkit.module.css";
import { coreToolkitContent } from "@/content/portfolio";
import type { ToolkitIcon, ToolkitItem } from "@/types/portfolio";

const toolkitHeadingId = "core-toolkit-heading";
const toolkitDescriptionId = "core-toolkit-description";

const toolkitIcons = {
  react: SiReact,
  javascript: SiJavascript,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  python: SiPython,
  nodejs: SiNodedotjs,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  docker: SiDocker,
  github: SiGithub,
} satisfies Record<ToolkitIcon, IconType>;

type ToolkitListProps = {
  items: readonly ToolkitItem[];
  duplicate?: boolean;
};

function ToolkitList({ items, duplicate = false }: ToolkitListProps) {
  return (
    <ul className={styles.group} aria-hidden={duplicate || undefined}>
      {items.map((item) => {
        const Icon = toolkitIcons[item.icon];

        return (
          <li key={item.label} className={styles.item}>
            <Icon
              aria-hidden="true"
              focusable="false"
              className="size-6 shrink-0 text-ink"
            />
            <span className="text-center text-[0.6875rem] leading-4 font-medium text-muted">
              {item.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function CoreToolkit() {
  return (
    <aside
      aria-labelledby={toolkitHeadingId}
      aria-describedby={toolkitDescriptionId}
      className="mt-10 border-t border-border pt-8 md:mt-14 md:pt-10"
    >
      <div className="mx-auto w-full max-w-[68rem]">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-7 bg-accent-warm" />
            <h3
              id={toolkitHeadingId}
              className="text-xs font-semibold tracking-[0.18em] text-accent-warm uppercase sm:text-sm"
            >
              {coreToolkitContent.heading}
            </h3>
          </div>
          <p
            id={toolkitDescriptionId}
            className="text-sm leading-6 text-muted"
          >
            {coreToolkitContent.supportingText}
          </p>
        </header>

        <div
          className={`${styles.viewport} mt-5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-accent sm:mt-6`}
          role="region"
          aria-label="Core Toolkit technologies"
          tabIndex={0}
        >
          <div className={styles.track}>
            <ToolkitList items={coreToolkitContent.items} />
            <ToolkitList items={coreToolkitContent.items} duplicate />
          </div>
        </div>
      </div>
    </aside>
  );
}
