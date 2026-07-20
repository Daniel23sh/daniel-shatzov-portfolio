import type { Project } from "@/types/portfolio";

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
    label: "Let's Connect",
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
  { label: "About", href: "#about" },
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
    role: "Solo Full-Stack Developer",
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
    links: [],
  },
] as const satisfies readonly Project[];
