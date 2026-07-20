"use client";

import { useEffect, useState } from "react";

import styles from "./PortfolioBackground.module.css";
import { NoteFrame, type NoteSlot } from "./NoteFrame";
import { DEV_NOTE_SELECTION, type NoteSelection } from "./noteConfig";
import {
  personalityNoteRegistry,
  professionalNoteRegistry,
} from "./noteRegistry";
import {
  createStableNoteSelection,
  resolveNoteSelection,
  validateNoteSelection,
} from "./noteSelection";

if (process.env.NODE_ENV === "development" && DEV_NOTE_SELECTION !== null) {
  validateNoteSelection(DEV_NOTE_SELECTION);
}

const getPageLoadSelection = createStableNoteSelection(() =>
  resolveNoteSelection({
      environment: process.env.NODE_ENV,
      override: DEV_NOTE_SELECTION,
  }),
);

export function RandomNotes() {
  const [selection, setSelection] = useState<NoteSelection | null>(null);

  useEffect(() => {
    const notesQuery = window.matchMedia("(min-width: 481px)");

    const syncNotesWithViewport = () => {
      setSelection(notesQuery.matches ? getPageLoadSelection() : null);
    };

    syncNotesWithViewport();
    notesQuery.addEventListener("change", syncNotesWithViewport);

    return () => {
      notesQuery.removeEventListener("change", syncNotesWithViewport);
    };
  }, []);

  if (!selection) {
    return null;
  }

  const notes: Array<{
    group: "professional" | "personality";
    id: (typeof selection.professional)[number] | (typeof selection.personality)[number];
    slot: NoteSlot;
  }> = [
    { group: "professional", id: selection.professional[0], slot: "top-left" },
    { group: "personality", id: selection.personality[0], slot: "top-right" },
    { group: "professional", id: selection.professional[1], slot: "bottom-left" },
    { group: "personality", id: selection.personality[1], slot: "bottom-right" },
  ];

  return (
    <div className={styles.randomNotes} data-random-notes="ready">
      {notes.map(({ group, id, slot }) => {
        const Note =
          group === "professional"
            ? professionalNoteRegistry[id as keyof typeof professionalNoteRegistry]
            : personalityNoteRegistry[id as keyof typeof personalityNoteRegistry];

        return (
          <NoteFrame key={`${group}-${slot}`} group={group} id={id} slot={slot}>
            <Note />
          </NoteFrame>
        );
      })}
    </div>
  );
}
