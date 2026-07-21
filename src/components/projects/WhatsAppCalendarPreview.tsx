"use client";

import { useEffect, useState } from "react";
import {
  LuCalendarCheck2,
  LuCheck,
  LuRefreshCw,
  LuShieldCheck,
} from "react-icons/lu";

import styles from "@/components/projects/WhatsAppCalendarPreview.module.css";

type PreviewState = "initial" | "clarification" | "validating" | "completed";
type TimeChoice = "morning" | "evening";

const processSteps = [
  "Normalize",
  "Extract",
  "Validate",
  "Simulated Calendar",
] as const;

export function WhatsAppCalendarPreview() {
  const [state, setState] = useState<PreviewState>("initial");
  const [timeChoice, setTimeChoice] = useState<TimeChoice>("evening");

  useEffect(() => {
    if (state !== "validating") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = window.setTimeout(
      () => setState("completed"),
      prefersReducedMotion ? 0 : 420,
    );

    return () => window.clearTimeout(timer);
  }, [state]);

  const startRequest = () => setState("clarification");

  const chooseTime = (choice: TimeChoice) => {
    setTimeChoice(choice);
    setState("validating");
  };

  const replay = () => {
    setTimeChoice("evening");
    setState("initial");
  };

  const isEvening = timeChoice === "evening";
  const time = isEvening ? "20:00–21:00" : "08:00–09:00";
  const selectedReply = isEvening ? "ערב" : "בוקר";
  const stateDescription =
    state === "initial"
      ? "A simulated request is ready to process."
      : state === "clarification"
        ? "A deterministic clarification is waiting for a choice."
        : state === "validating"
          ? "The simulated request is being validated."
          : "The simulated Calendar preview is complete.";

  return (
    <section className={styles.preview} aria-labelledby="calendar-preview-title">
      <header className={styles.previewHeader}>
        <div>
          <p className={styles.eyebrow}>Portfolio preview</p>
          <h3 id="calendar-preview-title">Resolve a Calendar Request</h3>
        </div>
        <span className={styles.simulatedLabel}>Interactive portfolio preview · simulated locally</span>
      </header>

      <div className={styles.demoGrid}>
        <section className={styles.conversationCard} aria-label="Simulated message conversation">
          <div className={styles.conversationHeader}>
            <span aria-hidden="true" className={styles.presenceDot} />
            <div>
              <strong>Calendar request</strong>
              <span>Conversation-inspired interface</span>
            </div>
          </div>

          <div className={styles.conversation}>
            <div className={`${styles.turn} ${styles.userTurn}`}>
              <div className={`${styles.bubble} ${styles.userBubble}`} dir="rtl" lang="he">
                מחר ב8 פגישה
                <small>WhatsApp message · simulated</small>
              </div>
            </div>

            {state === "initial" ? (
              <button type="button" onClick={startRequest} className={styles.processButton}>
                Process request
              </button>
            ) : null}

            {state !== "initial" ? (
              <div className={`${styles.turn} ${styles.assistantTurn}`}>
                <div className={`${styles.bubble} ${styles.assistantBubble}`} dir="rtl" lang="he">
                  לא בטוח — התכוונת ל־08:00 בבוקר או ל־20:00 בערב?
                  <small>Focused clarification · simulated</small>
                </div>
              </div>
            ) : null}

            {state === "clarification" ? (
              <div className={styles.followUps} dir="rtl" aria-label="Clarification choices">
                <button type="button" onClick={() => chooseTime("morning")}>
                  בוקר
                </button>
                <button type="button" onClick={() => chooseTime("evening")} className={styles.primaryChoice}>
                  ערב
                </button>
              </div>
            ) : null}

            {state === "validating" || state === "completed" ? (
              <div className={`${styles.turn} ${styles.userTurn}`}>
                <div className={`${styles.bubble} ${styles.userBubble}`} dir="rtl" lang="he">
                  {selectedReply}
                  <small>Selected clarification · simulated</small>
                </div>
              </div>
            ) : null}

            {state === "validating" ? (
              <p className={styles.validationStatus} role="status">
                <LuShieldCheck aria-hidden="true" />
                Validating date, local time, and event structure…
              </p>
            ) : null}

            {state === "completed" ? (
              <div className={`${styles.turn} ${styles.assistantTurn}`}>
                <div className={`${styles.bubble} ${styles.assistantBubble}`} dir="rtl" lang="he">
                  האירוע עבר אימות ונוסף לתצוגה המקדימה של היומן.
                  <small>Completion message · simulated</small>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <aside className={styles.eventPanel} aria-live="polite">
          <p className={styles.eventEyebrow}>Simulated result</p>
          {state === "completed" ? (
            <>
              <div className={styles.eventTitle} dir="rtl" lang="he">
                <LuCalendarCheck2 aria-hidden="true" />
                <span>פגישה</span>
              </div>
              <dl className={styles.eventDetails}>
                <div><dt>Date</dt><dd>2026-07-18</dd></div>
                <div><dt>Time</dt><dd>{time}</dd></div>
                <div><dt>Timezone</dt><dd>Asia/Jerusalem</dd></div>
                <div><dt>Source</dt><dd>Text</dd></div>
              </dl>
              <p className={styles.completedStatus}><LuCheck aria-hidden="true" /> Completed · simulated</p>
            </>
          ) : (
            <div className={styles.eventPlaceholder}>
              <LuCalendarCheck2 aria-hidden="true" />
              <p>A compact Calendar preview appears after the local simulated validation path.</p>
            </div>
          )}
        </aside>
      </div>

      {state === "completed" ? (
        <div className={styles.completedFooter}>
          <ol className={styles.processStrip} aria-label="Simulated request process">
            {processSteps.map((step, index) => (
              <li key={step}>
                <span>{step}</span>
                {index < processSteps.length - 1 ? <b aria-hidden="true">→</b> : null}
              </li>
            ))}
          </ol>
          <button type="button" onClick={replay} className={styles.replayButton}>
            <LuRefreshCw aria-hidden="true" /> Replay
          </button>
        </div>
      ) : null}

      <p className="sr-only" aria-live="polite">{stateDescription}</p>
    </section>
  );
}
