import type {
  EducationSectionContent,
  ExperienceItem,
  ProcessStep,
  Project,
  ToolkitItem,
} from "@/types/portfolio";

export const siteConfig = {
  name: "Daniel Shatzov",
  role: "Full-Stack Developer",
  headline:
    "I turn useful ideas into practical products that make people's work easier.",
  supportingText:
    "Turning complex ideas into clear, practical, and well-crafted products through a thoughtful, end-to-end approach.",
  primaryCta: {
    label: "View My Work",
    href: "#projects",
  },
  secondaryCta: {
    label: "Download Resume",
    href: "#contact",
  },
  contactCta: {
    label: "Get in Touch",
    href: "#contact",
  },
  githubUrl: "https://github.com/Daniel23sh",
  linkedinUrl: "https://www.linkedin.com/in/daniel-shatzov/",
  resumeUrl: "/documents/daniel-shatzov-resume.pdf",
  heroImage: {
    src: "/images/portrait/daniel-hero.png",
    alt: "Portrait of Daniel Shatzov",
  },
} as const;

export const navigationItems = [
  { label: "Projects", href: "#projects" },
  { label: "The Way I Build", href: "#way-i-build" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const projectsSectionContent = {
  heading: "Selected Work",
  intro:
    "A selection of products I've built across web, mobile, data, automation, and external integrations.",
  placeholderLabel: "Screenshot coming soon",
  actionLabel: "View Project",
  modal: {
    closeLabel: "Close project details",
    featuredProjectLabel: "Featured project",
    temporaryLabel: "Temporary content",
    previewLabel: "Product preview",
    storyLabel: "Project story",
    problemLabel: "Problem",
    buildLabel: "Build",
    outcomeLabel: "Outcome",
    proofLabel: "Technical proof",
    linksLabel: "Project Links",
  },
  labels: {
    role: "Role",
    duration: "Duration",
    status: "Status",
    visibility: "Visibility",
    technologies: "Technologies",
    capabilities: "Capabilities",
    architectureTrace: "Project Flow",
    builtAround: "Built Around",
  },
} as const;

const queryOpsProductPoster = {
  projectName: "QueryOps AI",
  src: "/images/project-posters/queryops-product-poster.png",
  alt: "QueryOps AI product poster",
  width: 864,
  height: 1821,
} as const;

const checkItProductPoster = {
  projectName: "CheckIT",
  src: "/images/project-posters/checkit-product-poster.png",
  alt: "CheckIT product poster",
  width: 941,
  height: 1672,
} as const;

const whatsappBotProductPoster = {
  projectName: "WhatsApp Google Calendar Bot",
  src: "/images/project-posters/whatsapp-bot-product-poster.png",
  alt: "WhatsApp Google Calendar Bot product poster",
  width: 1024,
  height: 1535,
} as const;

export const coreToolkitContent = {
  heading: "Core Toolkit",
  supportingText: "A focused stack I use across products.",
  items: [
    { label: "React", icon: "react" },
    { label: "TypeScript", icon: "typescript" },
    { label: "JavaScript", icon: "javascript" },
    { label: "Python", icon: "python" },
    { label: "Node.js", icon: "nodejs" },
    { label: "FastAPI", icon: "fastapi" },
    { label: "Fastify", icon: "fastify" },
    { label: "PostgreSQL", icon: "postgresql" },
    { label: "Supabase", icon: "supabase" },
    { label: "Tailwind CSS", icon: "tailwind" },
    { label: "Docker", icon: "docker" },
    { label: "Git", icon: "git" },
    { label: "GitHub", icon: "github" },
    { label: "OpenAI API", icon: "openai" },
  ] as const satisfies readonly ToolkitItem[],
} as const;

export const wayIBuildContent = {
  heading: "The Way I Build",
  supportingText: "From a real problem to a well-crafted product.",
  introduction:
    "I start by understanding the user problem and the purpose behind it. From there, I shape a clear technical approach, break the work into meaningful stages, build with care, validate the details, and improve through feedback and real use.",
  steps: [
    {
      number: "1",
      title: "Understand",
      description:
        "Clarify the user problem, product goal, and requirements.",
      icon: "understand",
    },
    {
      number: "2",
      title: "Architect",
      description:
        "Define the technical structure, responsibilities, and integrations.",
      icon: "architect",
    },
    {
      number: "3",
      title: "Plan",
      description: "Break the work into clear stages, milestones, and tasks.",
      icon: "plan",
    },
    {
      number: "4",
      title: "Build",
      description:
        "Implement the solution across frontend, backend, and data layers.",
      icon: "build",
    },
    {
      number: "5",
      title: "Validate",
      description:
        "Test behavior, edge cases, reliability, and usability.",
      icon: "validate",
    },
    {
      number: "6",
      title: "Improve",
      description:
        "Refine the product based on feedback, findings, and real usage.",
      icon: "improve",
    },
  ] as const satisfies readonly ProcessStep[],
} as const;

export const experienceSectionContent = {
  heading: "Experience",
  supportingText:
    "Where responsibility, systems, and problem-solving came together.",
} as const;

export const experiences = [
  {
    id: "elbit-systems",
    number: "01",
    startDate: "Sep 2021",
    endDate: "Oct 2023",
    role: "SCCM Administrator",
    organization: "Elbit Systems",
    division: "Elisra Division",
    location: "Holon, Israel",
    description: [
      "Promoted from technical support to SCCM administration and joined the team responsible for managing, maintaining, and supporting thousands of enterprise computers across Elbit Systems and its subsidiaries.",
      "Developed PowerShell, SCCM, and SQL automation for software deployment, system monitoring, reporting, and internal IT workflows, improving operational efficiency and reliability.",
      "Built a cloud-migration readiness tool that consolidated employee and device data, gave managers scoped visibility into migration status, and enabled them to initiate and track migration workflows.",
    ],
    tags: ["PowerShell", "SCCM", "SQL", "Automation"],
  },
  {
    id: "military-intelligence",
    number: "02",
    startDate: "Aug 2018",
    endDate: "Apr 2021",
    role: "Network Administrator & Shift Lead",
    organization: "Israeli Military Intelligence",
    location: "Israel",
    description: [
      "Coordinated a five-person shift providing Tier 1–2 network and helpdesk support to more than 500 users across a primary base and multiple additional sites.",
      "Prioritized incidents, assigned tasks, and maintained service continuity during high-pressure periods, night shifts, and operationally intensive days.",
      "Diagnosed and resolved network, endpoint, hardware, software, permissions, printer, Active Directory, Microsoft 365, imaging, SCCM, and internal IT system issues in a high-security environment.",
    ],
    tags: ["Team Leadership", "Networking", "500+ Users", "Tier 1 – 2"],
  },
] as const satisfies readonly ExperienceItem[];

export const educationSectionContent = {
  eyebrow: "ACADEMIC FOUNDATION",
  degree: "B.Sc. in Computer Science",
  institution: "Holon Institute of Technology · HIT",
  startDate: "OCT 2023",
  endDate: "AUG 2026",
  startYear: "2023",
  endYear: "2026",
  expectedGraduation: "Expected August 2026",
  focusLabel: "FOCUS",
  focusItems: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Systems",
    "Computability & Complexity",
  ],
} as const satisfies EducationSectionContent;

export const contactSectionContent = {
  eyebrow: "Contact",
  heading: "Let’s start with a hello.",
  supportingText:
    "Have an opportunity, project, or idea in mind? I’d be glad to hear about it.",
  conversationLabel: "Start a conversation",
  email: "shatzovdani@gmail.com",
  availability: "Open to new opportunities",
  resumeCallout: {
    eyebrow: "Take a copy",
    title: "Download my resume",
    metadata: "PDF · Updated 2026",
    accessibleLabel: "Download Daniel Shatzov’s resume as a PDF",
  },
  links: [
    {
      label: "LinkedIn",
      href: siteConfig.linkedinUrl,
      kind: "external",
    },
    {
      label: "GitHub",
      href: siteConfig.githubUrl,
      kind: "external",
    },
    {
      label: "Download Resume",
      href: siteConfig.resumeUrl,
      kind: "download",
    },
  ],
} as const;

export const projects = [
  {
    id: "queryops",
    number: "01",
    title: "QueryOps AI",
    subtitle: "IT Operations · Data Governance",
    role: "Founder, Product Lead & Full-Stack Developer",
    duration: "May 2026 – Present",
    status: "Active Development",
    visibility: "Public",
    summary:
      "A governed conversational data workspace for exploring IT operations data, saving reusable views, and routing sensitive actions through approvals and audit trails.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Docker",
    ],
    architectureTrace: [
      "Natural Language",
      "Validation",
      "SQL",
      "Dashboard",
      "Controlled Action",
    ],
    builtAround:
      "Controlled access, reliable data exploration, and safe operational actions.",
    image: {
      src: "/images/projects/queryops/cover.png",
      alt: "QueryOps AI dashboard preview",
    },
    poster: queryOpsProductPoster,
    caseStudy: {
      projectLabel: "Full-Stack Project",
      facts: [
        "Personal full-stack project",
        "IT Operations / data governance",
        "React, TypeScript, FastAPI, PostgreSQL",
      ],
      theme: "blue",
      preview: {
        type: "queryops",
      },
      story: {
        problem: {
          body: "Operational teams need answers from structured data, but direct database access can be unsafe, too technical, or too broad. A simple natural-language query interface is not enough when results must respect scope, permissions, and operational controls.",
        },
        build: {
          body: "QueryOps AI brings the governed workflow into one clear path: ask a scoped question, review a safe result, save a useful view, and route sensitive follow-up actions through approval and audit. The experience keeps controls visible without letting them overpower the task.",
        },
        outcome: {
          body: "QueryOps AI demonstrates an end-to-end governed data workflow: investigate a scoped operational question, review a safe result, then request and track a controlled action with approval and auditability.",
          qualifier:
            "Locally runnable demo using deterministic synthetic IT Operations data and a mock LLM provider — not a production deployment.",
        },
      },
      proof: {
        label: "Architecture flow",
        flow: [
          "Ask Data",
          "Policy Guardrails",
          "Query Engine",
          "Saved Views",
          "Governed Actions",
        ],
        steps: [
          {
            label: "Ask Data",
            detail: "Scoped question",
            icon: "ask-data",
          },
          {
            label: "Policy Guardrails",
            detail: "Role + RLS scope",
            icon: "guardrails",
          },
          {
            label: "Query Engine",
            detail: "Validate + execute",
            icon: "query-engine",
          },
          {
            label: "Saved Views",
            detail: "Dashboards + cards",
            icon: "saved-views",
          },
          {
            label: "Governed Actions",
            detail: "Approval + audit",
            icon: "governed-actions",
          },
        ],
        capabilities: [
          "Validated SQL",
          "Role-aware access",
          "Saved views",
          "Approvals",
          "Audit trail",
        ],
        note: "Scoped read-only queries and controlled operational actions are enforced server-side.",
      },
    },
    links: [
      {
        label: "View source on GitHub",
        href: "https://github.com/Daniel23sh/queryops-ai",
        external: true,
      },
    ],
  },
  {
    id: "checkit",
    number: "02",
    title: "CheckIT",
    subtitle: "Early-Stage EdTech Product",
    role: "Lead Full-Stack Developer",
    duration: "January 2026 – Present",
    status: "Active Development",
    visibility: "Private",
    summary:
      "An early-stage EdTech product focused on adaptive practice and performance improvement.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Supabase",
    ],
    architectureTrace: [
      "Mobile Experience",
      "Backend Services",
      "Data",
      "Analysis",
      "Learning Flow",
    ],
    builtAround: "Adaptive practice and clearer learning workflows.",
    image: {
      src: "/images/projects/checkit/cover.png",
      alt: "CheckIT mobile product preview",
    },
    poster: checkItProductPoster,
    caseStudy: {
      projectLabel: "Product & Technical Leadership",
      category: "EdTech · Adaptive Practice",
      facts: [
        "Lead Full-Stack Developer",
        "Early-stage EdTech startup",
        "Jan 2026 – Present",
      ],
      team: "2 developers + UX/UI designer",
      statusAction: "Project in active development",
      theme: "warm",
      preview: {
        type: "concept",
        editorial: {
          variant: "confidential",
          eyebrow: "Early-stage product",
          headline: "CHECKIT",
          description: "",
          flow: [],
          status: "Confidential work",
        },
      },
      story: {
        problem: {
          body: "Building an adaptive practice experience requires more than an interface. Product decisions, user flows, technical constraints, and delivery priorities need to stay aligned while the product is still evolving.",
        },
        build: {
          body: "The work centers on turning an evolving product idea into a structured, shared delivery process across product, design, and engineering.",
          highlights: [
            "Helped define the product direction, initial scope, and staged execution plan.",
            "Translated product concepts into clear user flows, requirements, and development tasks.",
            "Structured the backlog, milestones, dependencies, and implementation priorities.",
            "Coordinated delivery between two developers and a UX/UI designer.",
            "Maintained alignment across product, design, and technical decisions as the scope evolved.",
            "Supported research, documentation, planning, and delivery through AI-assisted workflows.",
          ],
        },
        outcome: {
          body: "Established a structured product and delivery process for a private EdTech platform in active development, giving the team a clearer foundation for coordinated implementation and iteration.",
          qualifier:
            "The product remains private and under active development; this case study focuses on product definition, planning, and cross-functional delivery.",
        },
      },
      proof: {
        label: "Product delivery framework",
        flow: [
          "Product direction",
          "User flows",
          "Delivery planning",
          "Cross-functional iteration",
        ],
        steps: [
          {
            label: "Product direction",
            detail: "Scope + priorities",
            icon: "product-direction",
          },
          {
            label: "User flows",
            detail: "Requirements + experience",
            icon: "user-flows",
          },
          {
            label: "Delivery planning",
            detail: "Backlog + milestones",
            icon: "delivery-planning",
          },
          {
            label: "Cross-functional iteration",
            detail: "Product + design + engineering",
            icon: "cross-functional-iteration",
          },
        ],
        capabilities: [
          "Product strategy",
          "Technical planning",
          "Delivery management",
          "AI-assisted workflow",
        ],
        note:
          "A structured operating model for keeping product intent, design decisions, and implementation priorities aligned.",
      },
    },
    links: [],
  },
  {
    id: "whatsapp-calendar",
    number: "03",
    title: "WhatsApp Google Calendar Bot",
    subtitle: "Conversational Productivity · Calendar Automation",
    role: "Solo Full-Stack Developer",
    duration: "February 2026 – July 2026",
    status: "Functional prototype",
    visibility: "Public",
    summary:
      "A WhatsApp-based calendar assistant designed to make scheduling meetings feel as simple as sending a message, while safely clarifying incomplete or ambiguous details.",
    technologies: [
      "Node.js 22",
      "Fastify",
      "Twilio WhatsApp",
      "Google Calendar",
      "Supabase",
      "OAuth",
    ],
    architectureTrace: [
      "WhatsApp",
      "Extraction",
      "Deterministic Validation",
      "Google Calendar",
    ],
    builtAround:
      "Low-friction scheduling without silently guessing when important details are unclear.",
    image: {
      src: "/images/projects/whatsapp-bot/calendar-bot-hero.webp",
      alt: "Offline WhatsApp calendar bot demo interface",
    },
    poster: whatsappBotProductPoster,
    caseStudy: {
      projectLabel: "Prototype",
      facts: [
        "Prototype",
        "Conversational productivity / calendar automation",
        "Node.js 22, Fastify, Twilio WhatsApp, Google Calendar, Supabase, OAuth",
      ],
      audience:
        "People who commonly receive or describe appointment details through WhatsApp and want a faster way to turn those details into Calendar events, particularly Hebrew- and English-speaking users.",
      theme: "warm",
      preview: {
        type: "whatsapp-calendar",
      },
      story: {
        problem: {
          body: "I built this project because scheduling meetings is a task I often postpone—it feels inconvenient, and it is easy to forget to add an appointment to my calendar. Since WhatsApp is already where many meeting details are discussed, I wanted creating a Calendar event to feel as simple as sending a message. The challenge was to keep that experience convenient while safely handling incomplete or ambiguous details.",
        },
        build: {
          highlights: [
            "Accepts Hebrew, English, and mixed-language Calendar requests.",
            "Supports text messages and voice-transcript inputs.",
            "Extracts structured event details and applies deterministic validation for time, duration, confidence, timezone, DST, and ambiguity.",
            "Uses focused follow-up questions when a date, time, or morning/evening distinction is missing.",
            "Creates one Google Calendar event after successful validation; the offline demo replaces external providers with deterministic local fixtures.",
          ],
        },
        outcome: {
          body: "The project demonstrates a complete conversation-to-calendar architecture with a deliberate safety boundary between probabilistic extraction and deterministic execution. Its offline demo makes the interaction, state transitions, and validation pipeline reviewable without credentials or external services.",
          qualifier:
            "Functional prototype with a local deterministic demo and production-oriented integration architecture.",
        },
      },
      proof: {
        label: "Calendar request flow",
        flow: [
          "WhatsApp / Twilio",
          "Fastify application",
          "Deterministic validation",
          "Google Calendar",
        ],
        steps: [
          {
            label: "Message request",
            detail: "Text or voice transcript",
            icon: "calendar-request",
          },
          {
            label: "Event proposal",
            detail: "Structured extraction",
            icon: "event-extraction",
          },
          {
            label: "Validation boundary",
            detail: "Time, DST + ambiguity",
            icon: "event-validation",
          },
          {
            label: "Calendar event",
            detail: "Production integration path",
            icon: "calendar-create",
          },
        ],
        capabilities: [
          "Deterministic validation",
          "Guided clarification",
          "Bilingual behavior",
          "Shared pipeline",
          "Offline demo",
        ],
        note:
          "Production-oriented provider integrations and the credential-free demo share the event-processing pipeline; this portfolio preview remains entirely local.",
        scope:
          "The current scope is event creation only. It does not edit or delete events, detect conflicts, ask for confirmation before creation, cancel requests, retrieve upcoming meetings, or support multiple calendars.",
      },
    },
    links: [
      {
        label: "View source on GitHub",
        href: "https://github.com/Daniel23sh/whatsapp-google-calendar-bot",
        external: true,
      },
    ],
  },
] as const satisfies readonly Project[];
