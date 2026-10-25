---
name: nasustim-com-lighthouse
description: "Repo-specific wrapper for the shared `lighthouse` skill: audit https://nasustim.com or the local static build (out/) of this repo. Use whenever the user asks to run Lighthouse on this website."
---

# nasustim.com Lighthouse Audit

Uses the shared `lighthouse` skill (from `nasustim/skills`, installed via `apm install`) and its `scripts/run-lighthouse.sh`.
Below, `<lighthouse-dir>` is `.claude/skills/lighthouse` (also reachable as `.agents/skills/lighthouse`).

## Production

```bash
bash <lighthouse-dir>/scripts/run-lighthouse.sh https://nasustim.com
```

## Local build

```bash
bun run build
bunx serve@latest out -l 3000 &
SERVER_PID=$!
sleep 2
bash <lighthouse-dir>/scripts/run-lighthouse.sh http://localhost:3000
kill $SERVER_PID
```
