# Portfolio repository instructions

## Project identity

- Build a one-page professional portfolio for Daniel Shatzov, positioned as a Full-Stack Developer.
- The initial version uses no backend, database, CMS, contact-form service, or custom API.

## Source-of-truth documents

- Before making a material design, content, architecture, or interaction decision, read these three documents completely:
  - `docs/private/Daniel_Shatzov_Portfolio_Content_Blueprint.md`
  - `docs/private/Daniel_Shatzov_Portfolio_Wireframe_Specification.md`
  - `docs/private/Daniel_Shatzov_Portfolio_Visual_Direction.md`
- Content facts and approved public copy come from the Content Blueprint.
- Page structure, behavior, and responsive requirements come from the Wireframe Specification.
- The visual system, mobile visual rules, accessibility requirements, and motion rules come from the Visual Direction.
- If the documents conflict or required information is missing, stop and report the issue instead of inventing details.

## Technical architecture

- This project uses Next.js 16 App Router, TypeScript, Tailwind CSS 4, and `next/image`.
- Keep route files in `src/app`, reusable UI in `src/components`, portfolio copy and data in `src/content`, and shared types in `src/types`.
- Prefer Server Components. Add `"use client"` only to the smallest component that needs browser state, events, or browser APIs.
- This Next.js version contains APIs, conventions, and file structures that may differ from older versions. Before writing or changing Next.js code, read the relevant local Next.js 16 documentation under `node_modules/next/dist/docs/` and follow current APIs and deprecation notices.

## Product, design, and safety

- Follow the approved warm, clean Personal Product Hybrid direction.
- Use EB Garamond for editorial headings and Inter for functional and body text when fonts are implemented.
- Preserve mobile-first behavior, keyboard access, visible focus, reduced-motion support, and semantic HTML.
- Do not expose private CheckIT details, unreleased mechanics, internal links, datasets, or confidential screenshots.
- Do not invent professional claims, metrics, product behavior, URLs, screenshots, or personal contact links.

## Quality and Git workflow

- Run `npm run lint` and `npm run build` after implementation when applicable.
- Do not add packages unless the task explicitly requires them.
- Do not run `git add`, `commit`, `push`, `pull`, `reset`, `checkout`, `clean`, `merge`, or destructive commands unless explicitly requested.
- Do not add `docs/private/` to Git.
