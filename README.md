# nasustim.com ![Test](https://github.com/nasustim/nasustim.com/actions/workflows/test-app.yml/badge.svg?branch=main) ![CodeQL Analysis](https://github.com/nasustim/nasustim.com/actions/workflows/codeql-analysis.yml/badge.svg?branch=main) ![Deploy](https://github.com/nasustim/nasustim.com/actions/workflows/deploy.yml/badge.svg?branch=main)

[nasustim](https://github.com/nasustim/)'s portfolio website built with Next.js 15 and static export, deployed to GitHub Pages.

website: https://nasustim.com

## Development

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
```