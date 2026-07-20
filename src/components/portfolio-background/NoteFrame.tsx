import type { ReactNode } from "react";

import styles from "./PortfolioBackground.module.css";
import type {
  PersonalityNoteId,
  ProfessionalNoteId,
} from "./noteConfig";

export type NoteSlot =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

type NoteFrameProps = {
  children: ReactNode;
  group: "professional" | "personality";
  id: ProfessionalNoteId | PersonalityNoteId;
  slot: NoteSlot;
};

const slotClasses: Record<NoteSlot, string> = {
  "top-left": styles.noteTopLeft,
  "top-right": styles.noteTopRight,
  "bottom-left": styles.noteBottomLeft,
  "bottom-right": styles.noteBottomRight,
};

const tapeClasses: Record<NoteSlot, string> = {
  "top-left": styles.tapeOne,
  "top-right": styles.tapeTwo,
  "bottom-left": styles.tapeThree,
  "bottom-right": styles.tapeTwo,
};

export function NoteFrame({ children, group, id, slot }: NoteFrameProps) {
  return (
    <div
      className={`${styles.note} ${slotClasses[slot]} ${tapeClasses[slot]}`}
      data-note-group={group}
      data-note-id={id}
      data-note-slot={slot}
    >
      {children}
    </div>
  );
}
