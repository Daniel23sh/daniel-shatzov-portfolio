import assert from "node:assert/strict";
import test from "node:test";

import {
  PERSONALITY_NOTE_IDS,
  PROFESSIONAL_NOTE_IDS,
} from "../noteConfig.ts";
import {
  createRandomNoteSelection,
  createStableNoteSelection,
  resolveNoteSelection,
  validateNoteSelection,
} from "../noteSelection.ts";

function assertValidRandomSelection(selection) {
  assert.equal(selection.professional.length, 2);
  assert.equal(selection.personality.length, 2);
  assert.equal(new Set(selection.professional).size, 2);
  assert.equal(new Set(selection.personality).size, 2);

  for (const id of selection.professional) {
    assert.ok(PROFESSIONAL_NOTE_IDS.includes(id));
  }

  for (const id of selection.personality) {
    assert.ok(PERSONALITY_NOTE_IDS.includes(id));
  }
}

test("production selection always returns two unique IDs from each group", () => {
  for (let run = 0; run < 100; run += 1) {
    assertValidRandomSelection(createRandomNoteSelection());
  }
});

test("development uses the exact configured override", () => {
  const override = {
    professional: ["merge-sort", "coin-change"],
    personality: ["ideas-impact", "development-philosophy"],
  };

  assert.deepEqual(
    resolveNoteSelection({ environment: "development", override }),
    override,
  );
});

test("production ignores the development override", () => {
  const selection = resolveNoteSelection({
    environment: "production",
    override: {
      professional: ["invalid", "invalid"],
      personality: ["invalid", "invalid"],
    },
    random: () => 0.999,
  });

  assertValidRandomSelection(selection);
});

test("a null development override enables random selection", () => {
  const selection = resolveNoteSelection({
    environment: "development",
    override: null,
    random: () => 0.999,
  });

  assertValidRandomSelection(selection);
});

test("development validation rejects duplicates", () => {
  assert.throws(
    () =>
      validateNoteSelection({
        professional: ["merge-sort", "merge-sort"],
        personality: ["git-deployment", "release-notes"],
      }),
    /cannot contain duplicate note IDs/,
  );
});

test("development validation rejects invalid IDs", () => {
  assert.throws(
    () =>
      validateNoteSelection({
        professional: ["merge-sort", "not-a-note"],
        personality: ["git-deployment", "release-notes"],
      }),
    /invalid note ID "not-a-note"/,
  );
});

test("development validation rejects IDs placed in the wrong group", () => {
  assert.throws(
    () =>
      validateNoteSelection({
        professional: ["merge-sort", "release-notes"],
        personality: ["git-deployment", "ideas-impact"],
      }),
    /belongs to the other note group/,
  );
});

test("development validation rejects an incorrect note count", () => {
  assert.throws(
    () =>
      validateNoteSelection({
        professional: ["merge-sort"],
        personality: ["git-deployment", "release-notes"],
      }),
    /must contain exactly two note IDs/,
  );
});

test("a selection remains stable across repeated reads in one page load", () => {
  let calls = 0;
  const getSelection = createStableNoteSelection(() => {
    calls += 1;
    return createRandomNoteSelection(() => 0.999);
  });

  const first = getSelection();
  assert.strictEqual(getSelection(), first);
  assert.strictEqual(getSelection(), first);
  assert.equal(calls, 1);
});

test("a new page-load cache can create a new selection", () => {
  const firstLoad = createStableNoteSelection(() =>
    createRandomNoteSelection(() => 0.999),
  );
  const secondLoad = createStableNoteSelection(() =>
    createRandomNoteSelection(() => 0),
  );

  assert.notDeepEqual(firstLoad(), secondLoad());
});
