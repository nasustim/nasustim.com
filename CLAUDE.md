# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
npm run lint:check    # Check for issues
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

### Architecture Patterns

- **Static Site Generation**: All pages are pre-rendered at build time
- **Component-based architecture**: Organized by feature and reusability
- **TypeScript-first**: Strict type checking enabled
- **Centralized configuration**: Site constants in `src/config.ts`
- **Path aliases**: `@/*` maps to `src/*`, `@public/*` maps to `public/*`

### Key Configuration Details

- **Next.js Config**: Static export with unoptimized images for GitHub Pages
- **TypeScript**: ES2020 target with strict mode, CSS modules plugin
- **Biome**: 2-space indentation, LF line endings, recommended rules
- **Tailwind**: PostCSS integration with responsive breakpoints
- **SEO**: OpenGraph, Twitter cards, and canonical URLs configured

### Works Section

The `/works/[slug]` pages are currently under construction but have predefined slugs for portfolio items. The static params include projects like "aster-as-code", "dj", "morning-square", etc.

### Development Notes

- Uses `"use client"` directive for client-side components
- Google Analytics integration via `@next/third-parties`
- Custom font loading system in `src/fonts/`
- Responsive design with mobile-first approach
- Static assets served from `/public/static/`