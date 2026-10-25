---

name: lighthouse
description: "Run Google Lighthouse audits (Mobile and Desktop) against https://nasustim.com or a local preview server, parse Core Web Vitals and category scores, and surface non-passing audits with actionable details. Use this skill whenever the user asks to check, audit, or benchmark the website with Lighthouse."

---

# Lighthouse Audit Skill

Run headless Chrome Lighthouse audits for both **Mobile** and **Desktop** presets and summarize category scores, Core Web Vitals, and failing/non-passing audits.

## Usage

### 1. Audit Production (`https://nasustim.com`)

Run the bundled helper script with no arguments (defaults to `https://nasustim.com`):

```bash
bash .claude/skills/lighthouse/scripts/run-lighthouse.sh https://nasustim.com
```

### 2. Audit Local Build (`out/`)

When verifying local changes before deployment:

1. Build the static export:

   ```bash
   bun run build
   ```
2. Start the static server in the background (e.g., on port `3000`) and run the audit against it:

   ```bash
   bunx serve@latest out -l 3000 &
   SERVER_PID=$!
   sleep 2
   bash .claude/skills/lighthouse/scripts/run-lighthouse.sh http://localhost:3000
   kill $SERVER_PID
   ```

## What the Script Outputs

- **Category Scores (0–100)** for both Mobile and Desktop:
  - Performance
  - Accessibility
  - Best Practices
  - SEO
  - Agentic Browsing
- **Core Web Vitals & Key Metrics**:
  - First Contentful Paint (FCP)
  - Largest Contentful Paint (LCP)
  - Total Blocking Time (TBT)
  - Cumulative Layout Shift (CLS)
  - Speed Index (SI)
  - Time to Interactive (TTI)
- **Non-Passing Audits (`score < 1`)**:
  - Audit ID, score, weight, display value, and top offending DOM nodes or network resources.
- Raw JSON reports are saved to `/tmp/lh-mobile.json` and `/tmp/lh-desktop.json` (or `LH_OUT_DIR` if set) for deeper follow-up inspection.
