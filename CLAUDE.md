# nasustim.com

[nasustim](https://github.com/nasustim/)'s portfolio website built with Next.js 15 and static export, deployed to GitHub Pages.
The artifacts are deployed to https://nasustim.com/ .

## Development Commands

```bash
# Setup dependencies (requires mise)
mise install
bun install

# Development server
bun run dev

# Build for production
bun run build

# Generate sitemap after build
bun run build:sitemap

# Serve built site locally
bun run serve

# Linting and formatting (using Biome)
bun run lint:fix      # Fix issues automatically
bun run lint:ci       # CI-specific linting

# Bundle analysis
bun run analyze

# Tests
bun run test
```

## Architecture Overview

This is a **Next.js 15** personal portfolio website with **static export** configuration, deployed to GitHub Pages.

### Key Technologies

- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **Biome** for linting and formatting
- **Static export** (`output: "export"`) for GitHub Pages deployment

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── llms.txt/          # LLM-friendly Markdown route handler (route.ts)
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx           # Homepage (ProfileSection)
├── feature/               # Feature-based modules
│   └── profile/           # Profile section functionality (index.tsx, content.md, content.ts)
├── ui/                    # Shared UI components (see docs/ui-layers.md)
│   ├── basic/             # Thin wrappers around plain HTML elements
│   │   ├── h1-text.tsx, image.tsx, link-text.tsx, plain-text.tsx
│   │   └── product-icon.tsx
│   └── composite/         # Composed from basic components (distorted-image.tsx)
├── layout/                # Layout components (DefaultLayout)
├── style/                 # Fonts (fonts.ts) and animation hooks
└── config.ts              # Site-wide configuration constants
```

### Naming Conventions

- **File names**: kebab-case (e.g., `product-icon.tsx`, `h1-text.tsx`)
- **No subdirectories** inside `ui/basic/` or `ui/composite/` — all component files live flat in the layer directory

### Development Notes

- Check whether this document needs to be updated, and update it with each request.
- Agent skills are managed with [APM](https://github.com/microsoft/apm): shared skills come from `nasustim/skills` (declared in `apm.yml`), repo-specific skills live in `.apm/skills/`. Run `apm install` to deploy both into `.claude/skills/` (`.agents/skills` symlinks there).
- Responsive design with mobile-first approach
- When updating source code, run `bun run build` and `bun run serve`, then perform a browser test to verify the changes visually before committing.
- See [docs/](docs/) for detailed documentation on architecture, rules, and conventions
