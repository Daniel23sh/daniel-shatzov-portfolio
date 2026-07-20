# Portfolio background — Next.js integration

This is a decorative, responsive background. The branch map remains a Server
Component, the paper texture and torn tape are CSS, and all note artwork is
inline SVG. A small `RandomNotes` Client Component selects two professional and
two personality notes after hydration.

## Add the files

The implementation lives together in:

```text
src/components/portfolio-background/PortfolioBackground.tsx
src/components/portfolio-background/PortfolioBackground.module.css
src/components/portfolio-background/NoteFrame.tsx
src/components/portfolio-background/RandomNotes.tsx
src/components/portfolio-background/noteConfig.ts
src/components/portfolio-background/noteRegistry.ts
src/components/portfolio-background/noteSelection.ts
src/components/portfolio-background/notes/
```

## Render it once

Place the component in the root layout, before the content. The `main` wrapper
keeps every page above the decorative artwork.

```tsx
import { PortfolioBackground } from '@/components/portfolio-background/PortfolioBackground';
import './globals.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PortfolioBackground />
        <main className="site-content">{children}</main>
      </body>
    </html>
  );
}
```

## Add the global stacking rule

Append this to `app/globals.css` (or your existing global stylesheet):

```css
html,
body {
  min-height: 100%;
  background: #f4efe8;
}

.site-content {
  position: relative;
  z-index: 1;
}
```

## Tuning the subtlety

The current version intentionally keeps the background quiet while preserving
the separate paper, tape, shadow, and ink layers:

- Change `.gitMap` opacity for the branches and commit nodes.
- Change `.sketch` and `.handwriting` opacity for the note ink.
- Change `.note svg` background color for the paper surface.
- Change `.note::before` opacity for the masking tape.
- Change `.currentCommit` opacity for the single orange accent.

The CSS automatically reduces the artwork on tablet and hides notes on small
phones, leaving only the faint Git paths.

## Preview a specific combination

Edit `DEV_NOTE_SELECTION` in `noteConfig.ts`. Supply exactly two IDs from each
typed group, or set it to `null` to use random selection in development.
Production always ignores the override and selects randomly on each full page
load. The selected combination is cached for the lifetime of the loaded page,
so React re-renders and client-side navigation do not reroll it.
