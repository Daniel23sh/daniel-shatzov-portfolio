import type {
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
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const projectsSectionContent = {
  heading: "Selected Work",
  intro:
    "A selection of products I've built across web, mobile, data, automation, and external integrations.",
  placeholderLabel: "Screenshot coming soon",
  actionLabel: "View Project",
  modal: {
    closeLabel: "Close",
    overviewLabel: "Overview",
    linksLabel: "Project Links",
  },
  labels: {
    role: "Role",
    duration: "Duration",
    status: "Status",
    visibility: "Visibility",
    technologies: "Technologies",
    architectureTrace: "Architecture Trace",
    builtAround: "Built Around",
  },
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

export const projects = [
  {
    id: "queryops",
    number: "01",
    title: "QueryOps AI",
    subtitle: "Data & Operations Platform",
    role: "Founder, Product Lead & Full-Stack Developer",
    duration: "May 2026 – Present",
    status: "Active Development",
    visibility: "Public",
    summary:
      "A governed data workspace that turns natural-language questions into validated SQL insights, reusable dashboards, and controlled operational actions.",
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
    links: [
      {
        label: "GitHub",
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
    role: "Full-Stack Developer",
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
    links: [],
  },
  {
    id: "whatsapp-calendar",
    number: "03",
    title: "WhatsApp Google Calendar Bot",
    subtitle: "Secure Bilingual Calendar Assistant",
    role: "Full-Stack Developer",
    duration: "February 2026 – July 2026",
    status: "Secure, Tested MVP",
    visibility: "Public",
    summary:
      "A secure bilingual WhatsApp assistant that converts Hebrew, English, and mixed-language text or voice messages into validated Google Calendar events.",
    technologies: [
      "Node.js",
      "Fastify",
      "Supabase",
      "Twilio",
      "Google OAuth 2.0",
      "OpenAI API",
    ],
    architectureTrace: [
      "WhatsApp",
      "Extraction",
      "Deterministic Validation",
      "Google Calendar",
    ],
    builtAround:
      "Low-friction scheduling without sacrificing validation and safety.",
    image: {
      src: "/images/projects/whatsapp-bot/cover.png",
      alt: "WhatsApp calendar assistant conversation preview",
    },
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Daniel23sh/whatsapp-google-calendar-bot",
        external: true,
      },
    ],
  },
] as const satisfies readonly Project[];
