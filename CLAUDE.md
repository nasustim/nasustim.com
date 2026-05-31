# nasustim.com

Personal portfolio website built with Next.js 15 and static export, deployed to GitHub Pages.

## Development Commands

```bash
# Setup dependencies (requires asdf and corepack)
asdf install
corepack enable
npm install

# Development server
npm run dev

# Build for production
npm run build

# Generate sitemap after build
npm run build:sitemap

# Serve built site locally
npm run serve

# Linting and formatting (using Biome)
npm run lint:fix      # Fix issues automatically
npm run lint:ci       # CI-specific linting

# Bundle analysis
npm run analyze

# Tests
npm test  # Note: Currently placeholder - tests need to be written
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
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Homepage (ProfileSection)
│   └── works/[slug]/      # Individual work pages (under construction)
├── components/            # Reusable UI components
│   ├── icons/             # Icon components
│   └── texts/             # Typography components (H1, H2, Link, Plain)
├── feature/               # Feature-specific components
│   └── profile/           # Profile section functionality
├── layout/                # Layout components (DefaultLayout)
├── i18n/                  # Internationalization
│   ├── contents/en.ts     # English content
│   ├── index.ts           # i18n utilities
│   └── renderer.tsx       # i18n rendering logic
├── fonts/                 # Font configuration
├── config.ts              # Site-wide configuration constants
└── meta-info/             # SEO and metadata utilities
```

### Development Notes

- Check whether this document needs to be updated, and update it with each request.
- Responsive design with mobile-first approach