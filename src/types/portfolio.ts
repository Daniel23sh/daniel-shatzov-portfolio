export type ProjectId = "queryops" | "checkit" | "whatsapp-calendar";

export type ProjectLink = {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
};

export type ProjectPoster = {
  readonly projectName: string;
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
};

export type ProjectPreviewType =
  | "browser"
  | "mobile"
  | "flow"
  | "concept"
  | "queryops"
  | "whatsapp-calendar";

export type ProjectPreviewTab = {
  readonly id: string;
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly image?: {
    readonly src: string;
    readonly alt: string;
  };
};

export type ProjectEditorialPreview = {
  readonly variant?: "delivery" | "confidential";
  readonly eyebrow: string;
  readonly headline: string;
  readonly description: string;
  readonly flow: readonly string[];
  readonly status: string;
};

export type ProjectProofIcon =
  | "ask-data"
  | "guardrails"
  | "query-engine"
  | "saved-views"
  | "governed-actions"
  | "calendar-request"
  | "event-extraction"
  | "event-validation"
  | "calendar-create"
  | "product-direction"
  | "user-flows"
  | "delivery-planning"
  | "cross-functional-iteration";

export type ProjectProofStep = {
  readonly label: string;
  readonly detail: string;
  readonly icon: ProjectProofIcon;
};

export type ProjectCaseStudy = {
  readonly projectLabel?: string;
  readonly category?: string;
  readonly facts?: readonly string[];
  readonly team?: string;
  readonly audience?: string;
  readonly statusAction?: string;
  readonly theme: "blue" | "warm" | "neutral";
  readonly preview: {
    readonly type: ProjectPreviewType;
    readonly tabs?: readonly ProjectPreviewTab[];
    readonly editorial?: ProjectEditorialPreview;
  };
  readonly story: {
    readonly problem: {
      readonly body: string;
    };
    readonly build: {
      readonly body?: string;
      readonly highlights?: readonly string[];
    };
    readonly outcome: {
      readonly body: string;
      readonly qualifier?: string;
    };
  };
  readonly proof: {
    readonly label: string;
    readonly flow: readonly string[];
    readonly steps?: readonly ProjectProofStep[];
    readonly capabilities: readonly string[];
    readonly note?: string;
    readonly scope?: string;
  };
};

export type Project = {
  readonly id: ProjectId;
  readonly number: "01" | "02" | "03";
  readonly title: string;
  readonly subtitle: string;
  readonly summary: string;
  readonly role: string;
  readonly duration: string;
  readonly status: string;
  readonly visibility: "Public" | "Private";
  readonly technologies: readonly string[];
  readonly architectureTrace: readonly string[];
  readonly builtAround: string;
  readonly poster: ProjectPoster;
  readonly caseStudy: ProjectCaseStudy;
  readonly links: readonly ProjectLink[];
};

export type ToolkitIcon =
  | "react"
  | "javascript"
  | "typescript"
  | "nextjs"
  | "python"
  | "nodejs"
  | "fastapi"
  | "postgresql"
  | "docker"
  | "github";

export type ToolkitItem = {
  readonly label: string;
  readonly icon: ToolkitIcon;
};

export type ProcessIcon =
  | "understand"
  | "architect"
  | "plan"
  | "build"
  | "validate"
  | "improve";

export type ProcessStep = {
  readonly number: `${1 | 2 | 3 | 4 | 5 | 6}`;
  readonly title: string;
  readonly description: string;
  readonly icon: ProcessIcon;
};

export type ExperienceItem = {
  readonly id: string;
  readonly number: `${number}`;
  readonly startDate: string;
  readonly endDate: string;
  readonly role: string;
  readonly organization: string;
  readonly division?: string;
  readonly location: string;
  readonly description: readonly string[];
  readonly tags: readonly string[];
};

export type EducationSectionContent = {
  readonly eyebrow: string;
  readonly degree: string;
  readonly institution: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly startYear: `${number}`;
  readonly endYear: `${number}`;
  readonly expectedGraduation: string;
  readonly focusLabel: string;
  readonly focusItems: readonly string[];
};
