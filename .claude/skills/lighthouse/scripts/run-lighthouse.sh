#!/usr/bin/env bash
set -euo pipefail

TARGET_URL="${1:-https://nasustim.com}"
OUT_DIR="${LH_OUT_DIR:-/tmp}"
MOBILE_JSON="${OUT_DIR}/lh-mobile.json"
DESKTOP_JSON="${OUT_DIR}/lh-desktop.json"

echo "Running Lighthouse (Mobile) on ${TARGET_URL}..."
npx --yes lighthouse "${TARGET_URL}" \
  --output=json \
  --output-path="${MOBILE_JSON}" \
  --chrome-flags="--headless=new --no-sandbox" \
  --no-enable-error-reporting \
  --quiet

echo "Running Lighthouse (Desktop) on ${TARGET_URL}..."
npx --yes lighthouse "${TARGET_URL}" \
  --preset=desktop \
  --output=json \
  --output-path="${DESKTOP_JSON}" \
  --chrome-flags="--headless=new --no-sandbox" \
  --no-enable-error-reporting \
  --quiet

bun -e '
const [mobilePath, desktopPath] = process.argv.slice(1);
const mobile = await Bun.file(mobilePath).json();
const desktop = await Bun.file(desktopPath).json();

const printReport = (label, report) => {
  console.log(`\n========================================`);
  console.log(`  ${label} (${report.finalDisplayedUrl})`);
  console.log(`========================================`);

  console.log("\n[Category Scores]");
  for (const cat of Object.values(report.categories)) {
    console.log(`  - ${cat.title}: ${Math.round((cat.score ?? 0) * 100)}`);
  }

  console.log("\n[Key Metrics]");
  const metrics = [
    "first-contentful-paint",
    "largest-contentful-paint",
    "total-blocking-time",
    "cumulative-layout-shift",
    "speed-index",
    "interactive",
  ];
  for (const id of metrics) {
    const a = report.audits[id];
    if (a) {
      console.log(`  - ${a.title}: ${a.displayValue} (score: ${a.score})`);
    }
  }

  console.log("\n[Non-Passing Audits (score < 1)]");
  for (const cat of Object.values(report.categories)) {
    const failing = cat.auditRefs
      .map((ref) => ({ ref, audit: report.audits[ref.id] }))
      .filter(({ audit }) => audit && audit.score !== null && audit.score < 1);
    if (failing.length === 0) continue;

    console.log(`\n  --- ${cat.title} ---`);
    for (const { ref, audit } of failing) {
      const val = audit.displayValue ? ` — ${audit.displayValue}` : "";
      console.log(`  * [${audit.id}] (score: ${audit.score}, weight: ${ref.weight}) ${audit.title}${val}`);
      const items = audit.details?.items ?? [];
      for (const item of items.slice(0, 3)) {
        const summary =
          item.url ||
          item.node?.selector ||
          item.node?.snippet ||
          item.subpart ||
          JSON.stringify(item).slice(0, 120);
        console.log(`      -> ${summary}`);
        if (item.node?.explanation) {
          console.log(`         ${item.node.explanation.replace(/\n/g, " ")}`);
        }
      }
    }
  }
};

printReport("MOBILE", mobile);
printReport("DESKTOP", desktop);
' "${MOBILE_JSON}" "${DESKTOP_JSON}"

