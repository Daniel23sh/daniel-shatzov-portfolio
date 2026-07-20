export type ProjectId = "queryops" | "checkit" | "whatsapp-calendar";

export type ProjectLink = {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
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
  readonly image: {
    readonly src: string;
    readonly alt: string;
  };
  readonly links: readonly ProjectLink[];
};

export type ToolkitIcon =
  | "react"
  | "typescript"
  | "javascript"
  | "python"
  | "nodejs"
  | "fastapi"
  | "fastify"
  | "postgresql"
  | "supabase"
  | "tailwind"
  | "docker"
  | "git"
  | "openai"
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
