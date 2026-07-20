import {
  PERSONALITY_NOTE_IDS,
  PROFESSIONAL_NOTE_IDS,
  type NoteSelection,
  type PersonalityNoteId,
  type ProfessionalNoteId,
} from "./noteConfig";

type RuntimeEnvironment = "development" | "production" | "test";

function selectTwo<T>(values: readonly T[], random: () => number): [T, T] {
  const shuffled = [...values];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ];
  }

  return [shuffled[0], shuffled[1]];
}

function validateGroup(
  groupName: "professional" | "personality",
  values: unknown,
  allowedIds: readonly string[],
  oppositeIds: readonly string[],
) {
  if (!Array.isArray(values) || values.length !== 2) {
    throw new Error(
      `DEV_NOTE_SELECTION.${groupName} must contain exactly two note IDs.`,
    );
  }

  for (const value of values) {
    if (typeof value !== "string" || !allowedIds.includes(value)) {
      if (typeof value === "string" && oppositeIds.includes(value)) {
        throw new Error(
          `DEV_NOTE_SELECTION.${groupName} contains "${value}", which belongs to the other note group.`,
        );
      }

      throw new Error(
        `DEV_NOTE_SELECTION.${groupName} contains the invalid note ID "${String(value)}".`,
      );
    }
  }

  if (new Set(values).size !== values.length) {
    throw new Error(
      `DEV_NOTE_SELECTION.${groupName} cannot contain duplicate note IDs.`,
    );
  }
}

export function validateNoteSelection(selection: unknown): NoteSelection {
  if (!selection || typeof selection !== "object") {
    throw new Error("DEV_NOTE_SELECTION must be an object or null.");
  }

  const candidate = selection as {
    professional?: unknown;
    personality?: unknown;
  };

  validateGroup(
    "professional",
    candidate.professional,
    PROFESSIONAL_NOTE_IDS,
    PERSONALITY_NOTE_IDS,
  );
  validateGroup(
    "personality",
    candidate.personality,
    PERSONALITY_NOTE_IDS,
    PROFESSIONAL_NOTE_IDS,
  );

  return selection as NoteSelection;
}

export function createRandomNoteSelection(
  random: () => number = Math.random,
): NoteSelection {
  return {
    professional: selectTwo<ProfessionalNoteId>(
      PROFESSIONAL_NOTE_IDS,
      random,
    ),
    personality: selectTwo<PersonalityNoteId>(PERSONALITY_NOTE_IDS, random),
  };
}

export function resolveNoteSelection({
  environment,
  override,
  random = Math.random,
}: {
  environment: RuntimeEnvironment;
  override: NoteSelection | null | unknown;
  random?: () => number;
}): NoteSelection {
  if (environment === "development" && override !== null) {
    return validateNoteSelection(override);
  }

  return createRandomNoteSelection(random);
}

export function createStableNoteSelection(
  createSelection: () => NoteSelection,
): () => NoteSelection {
  let cachedSelection: NoteSelection | null = null;

  return () => {
    if (!cachedSelection) {
      cachedSelection = createSelection();
    }

    return cachedSelection;
  };
}
