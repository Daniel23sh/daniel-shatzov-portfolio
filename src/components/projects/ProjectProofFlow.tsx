import type { IconType } from "react-icons";
import {
  LuCalendarPlus,
  LuCompass,
  LuDatabaseZap,
  LuFileCheck2,
  LuLayoutDashboard,
  LuListTodo,
  LuMessageCircle,
  LuMessageSquareText,
  LuRoute,
  LuRefreshCw,
  LuShieldCheck,
  LuSparkles,
} from "react-icons/lu";

import styles from "@/components/projects/ProjectProofFlow.module.css";
import type {
  ProjectProofIcon,
  ProjectProofStep,
} from "@/types/portfolio";

type ProjectProofFlowProps = {
  label: string;
  steps: readonly ProjectProofStep[];
};

const proofIcons = {
  "ask-data": LuMessageSquareText,
  guardrails: LuShieldCheck,
  "query-engine": LuDatabaseZap,
  "saved-views": LuLayoutDashboard,
  "governed-actions": LuFileCheck2,
  "calendar-request": LuMessageCircle,
  "event-extraction": LuSparkles,
  "event-validation": LuShieldCheck,
  "calendar-create": LuCalendarPlus,
  "product-direction": LuCompass,
  "user-flows": LuRoute,
  "delivery-planning": LuListTodo,
  "cross-functional-iteration": LuRefreshCw,
} satisfies Record<ProjectProofIcon, IconType>;

export function ProjectProofFlow({ label, steps }: ProjectProofFlowProps) {
  return (
    <div className={styles.flow}>
      <span aria-hidden="true" className={styles.track} />
      <svg aria-hidden="true" className={styles.arrow} viewBox="0 0 20 20">
        <path d="M4 2L16 10L4 18" />
      </svg>
      <ol
        aria-label={label}
        className={`${styles.list} ${steps.length === 4 ? styles.fourSteps : ""}`}
      >
        {steps.slice(0, 5).map((step) => {
          const Icon = proofIcons[step.icon];

          return (
            <li key={step.label} className={styles.step}>
              <span aria-hidden="true" className={styles.iconShell}>
                <Icon className={styles.icon} />
              </span>
              <span className={styles.copy}>
                <strong className={styles.label}>{step.label}</strong>
                <span className={styles.detail}>{step.detail}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
