# Daniel Shatzov — Portfolio

This repository contains Daniel Shatzov’s Full-Stack Developer portfolio. It presents selected work, professional experience, product thinking, and technical execution in a single responsive website.

## Preview

A permanent full-site screenshot will be added when a stable public capture is available.

## Live site

Deployment URL will be added after the production domain is finalized.

## About the project

The site uses a warm, handmade editorial visual direction while keeping the work easy to scan. Project cards open into focused case studies, and compact poster presentations offer an additional way to introduce each project. The layout is responsive and includes accessible keyboard, dialog, focus, and reduced-motion behavior.

## Featured work

- **QueryOps AI** — governed data exploration and controlled operational workflows.
- **CheckIT** — a private early-stage EdTech product case study.
- **WhatsApp Google Calendar Bot** — a conversational calendar-event creation prototype with a deterministic local demo.

## Technology stack

- Next.js
- React
- TypeScript
- Tailwind CSS and CSS Modules
- Node.js built-in test runner
- GitHub Actions

## Local development

Use Node.js 22 (see `.nvmrc`) and npm for local development.

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm ci
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run lint` | Run ESLint. |
| `npm run typecheck` | Run TypeScript without emitting files. |
| `npm test` | Run the Node.js test suite once. |
| `npm run build` | Create a production build. |
| `npm run start` | Start the production server after a successful build. |

The test command uses Node’s built-in test runner with a small repository-owned resolver. It lets the test runner load the existing extensionless TypeScript source imports in ESM without a global tool or machine-specific path.

## Accessibility

- Keyboard-accessible skip link targeting the existing semantic main landmark.
- Semantic page landmarks and visible keyboard focus states.
- Accessible project dialogs with Escape handling and focus restoration.
- Reduced-motion support.
- High-contrast résumé-card text and an unclipped keyboard focus treatment.

## Metadata and SEO

The app includes Open Graph metadata, Twitter metadata, Person JSON-LD, and a robots configuration. Set a confirmed production origin during deployment to enable absolute social URLs:

```bash
SITE_URL=https://your-final-domain.example
```

This is an example, not a live URL. A confirmed deployment origin is still required before canonical URLs and a sitemap should be added.

## Repository checks

GitHub Actions runs on pull requests and pushes to `main`. It installs dependencies with `npm ci`, then runs linting, type-checking, tests, and the production build.
