#!/usr/bin/env bash
set -euo pipefail

# Resolve the known theme-refresh merge conflicts by keeping the PR branch
# version ("ours") for the visual cleanup files. This is intended for the
# flow: git checkout your-feature-branch && git merge origin/main

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  echo "This script must be run inside the repository." >&2
  exit 1
fi

if [ ! -f "$(git rev-parse --git-dir)/MERGE_HEAD" ]; then
  echo "No merge is currently in progress." >&2
  echo "Run: git merge origin/main" >&2
  echo "Then rerun this script after Git reports conflicts." >&2
  exit 1
fi

files=(
  "src/app/work/WorkPage.module.scss"
  "src/app/work/[slug]/ProjectPage.module.scss"
  "src/components/about/about.module.scss"
  "src/components/demos/admin-operations/admin-operations-demo.module.scss"
  "src/components/demos/business-access/business-access-demo.module.scss"
  "src/components/demos/calendar-document/calendar-document-demo.module.scss"
  "src/components/demos/inventory-purchasing/inventory-purchasing-demo.module.scss"
  "src/components/demos/operational-intelligence/operational-intelligence-demo.module.scss"
  "src/components/demos/revenue-financial/revenue-financial-demo.module.scss"
  "src/components/demos/sales-to-delivery/sales-to-delivery-demo.module.scss"
  "src/components/demos/secure-review-gateway/secure-review-gateway-demo.module.scss"
  "src/components/demos/vendor-lifecycle/vendor-lifecycle-demo.module.scss"
  "src/components/work/OutcomeStats.module.scss"
  "src/components/work/ProjectCard.module.scss"
  "src/components/work/ProjectCardTechStack.module.scss"
  "src/components/work/ProjectDemoPreview.module.scss"
  "src/components/work/ProjectDemoPreview.tsx"
  "src/components/work/ProjectDetails.module.scss"
  "src/components/work/ProjectMockupViewport.module.scss"
  "src/components/work/ProjectMockupViewport.tsx"
  "src/resources/custom.css"
)

echo "Keeping PR branch versions for known theme-refresh conflict files..."
git checkout --ours -- "${files[@]}"
git add "${files[@]}"

unresolved="$(git diff --name-only --diff-filter=U)"
if [ -n "$unresolved" ]; then
  echo "Some conflicts are still unresolved:" >&2
  echo "$unresolved" >&2
  exit 1
fi

git diff --check

echo "Known theme-refresh conflicts are staged and resolved."
echo "Next run: git commit -m 'Resolve theme refresh merge conflicts'"
