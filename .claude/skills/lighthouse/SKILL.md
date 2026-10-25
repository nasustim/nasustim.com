---
name: lighthouse
description: "Run Google Lighthouse audits (Mobile and Desktop) against a target URL or local preview server, parse Core Web Vitals and category scores, and surface non-passing audits with actionable details. Use this skill whenever the user asks to check, audit, or benchmark a website with Lighthouse."
---

# Lighthouse Audit Skill

Run headless Chrome Lighthouse audits for both **Mobile** and **Desktop** presets and summarize category scores, Core Web Vitals, and failing/non-passing audits.

## Usage

Run the bundled helper script [`scripts/run-lighthouse.sh`](scripts/run-lighthouse.sh) (located inside this skill directory, e.g. `.agents/skills/lighthouse/scripts/run-lighthouse.sh` or `.claude/skills/lighthouse/scripts/run-lighthouse.sh`) with the target URL:

### 1. Audit a Live or Running URL

```bash
bash <skill-dir>/scripts/run-lighthouse.sh https://example.com
```

### 2. Audit a Local Build / Preview Server

When verifying local changes before deployment:

1. Build and start the project's production preview or static server in the background (inspect `package.json` or project docs for the appropriate build/serve commands and port, e.g., `http://localhost:3000`).
2. Wait until the server is listening, then run the audit against the local URL:

   ```bash
   bash <skill-dir>/scripts/run-lighthouse.sh http://localhost:3000
   ```

3. Stop the background server process once the audit finishes.

## Environment Variables

- `LH_OUT_DIR`: Directory where raw JSON reports (`lh-mobile.json` and `lh-desktop.json`) are saved. Defaults to `/tmp`.

## What the Script Outputs

- **Category Scores (0–100)** for both Mobile and Desktop:
  - Performance
  - Accessibility
  - Best Practices
  - SEO
- **Core Web Vitals & Key Metrics**:
  - First Contentful Paint (FCP)
  - Largest Contentful Paint (LCP)
  - Total Blocking Time (TBT)
  - Cumulative Layout Shift (CLS)
  - Speed Index (SI)
  - Time to Interactive (TTI)
- **Non-Passing Audits (`score < 1`)**:
  - Audit ID, score, weight, display value, and top offending DOM nodes or network resources.
- Raw JSON reports are saved to `${LH_OUT_DIR:-/tmp}/lh-mobile.json` and `${LH_OUT_DIR:-/tmp}/lh-desktop.json` for deeper follow-up inspection.

