import type { ComponentType } from "react";

import type {
  PersonalityNoteId,
  ProfessionalNoteId,
} from "./noteConfig";
import { BfsNote } from "./notes/BfsNote";
import { BinarySearchNote } from "./notes/BinarySearchNote";
import { CoinChangeNote } from "./notes/CoinChangeNote";
import { DevelopmentPhilosophyNote } from "./notes/DevelopmentPhilosophyNote";
import { GitDeploymentNote } from "./notes/GitDeploymentNote";
import { IdeasImpactNote } from "./notes/IdeasImpactNote";
import { MergeSortNote } from "./notes/MergeSortNote";
import { ReleaseNotesNote } from "./notes/ReleaseNotesNote";

export const professionalNoteRegistry: Record<
  ProfessionalNoteId,
  ComponentType
> = {
  "merge-sort": MergeSortNote,
  "binary-search": BinarySearchNote,
  bfs: BfsNote,
  "coin-change": CoinChangeNote,
};

export const personalityNoteRegistry: Record<
  PersonalityNoteId,
  ComponentType
> = {
  "git-deployment": GitDeploymentNote,
  "ideas-impact": IdeasImpactNote,
  "development-philosophy": DevelopmentPhilosophyNote,
  "release-notes": ReleaseNotesNote,
};
