export const PROFESSIONAL_NOTE_IDS = [
  "merge-sort",
  "binary-search",
  "bfs",
  "coin-change",
] as const;

export const PERSONALITY_NOTE_IDS = [
  "git-deployment",
  "ideas-impact",
  "development-philosophy",
  "release-notes",
] as const;

export type ProfessionalNoteId = (typeof PROFESSIONAL_NOTE_IDS)[number];
export type PersonalityNoteId = (typeof PERSONALITY_NOTE_IDS)[number];

export type NoteSelection = {
  professional: [ProfessionalNoteId, ProfessionalNoteId];
  personality: [PersonalityNoteId, PersonalityNoteId];
};

/**
 * Development-only preview override. Replace the two IDs in each tuple to
 * inspect a specific combination, or set this to null to restore random
 * selection in development. Production always ignores this value.
 */
// export const DEV_NOTE_SELECTION: NoteSelection | null = {
//   professional: ["merge-sort", "binary-search"],
//   personality: ["git-deployment", "release-notes"],
// };

export const DEV_NOTE_SELECTION: NoteSelection | null = null;