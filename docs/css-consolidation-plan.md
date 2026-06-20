# CSS consolidation plan

## Scope audited

This audit covers SCSS/CSS under `src/app`, `src/components`, and `src/resources`.

Current measured local state:

- 34 SCSS/CSS files.
- 14,356 source lines.
- Largest files:
  - `src/app/work/[slug]/ProjectPage.module.scss` — 1,670 lines.
  - `src/components/demos/sales-to-delivery/sales-to-delivery-demo.module.scss` — 1,632 lines.
  - `src/components/demos/vendor-lifecycle/vendor-lifecycle-demo.module.scss` — 1,492 lines.
  - `src/components/demos/revenue-financial/revenue-financial-demo.module.scss` — 1,458 lines.
  - `src/components/work/ProjectCard.module.scss` — 1,417 lines.
  - `src/components/demos/operational-intelligence/operational-intelligence-demo.module.scss` — 1,014 lines.

## ProjectCard.module.scss findings

`ProjectCard.module.scss` is not only a card stylesheet. It contains multiple independent thumbnail systems:

1. Card shell/content/CTA styles.
2. Generic thumbnail chrome, pane grids, KPIs, flows, and tables.
3. Sales-specific preview styles.
4. Revenue-specific preview styles.
5. Vendor-specific preview styles.
6. Operations/admin preview styles.
7. Additional graphic/preview variants.
8. Local mobile breakpoint overrides.

Only the card shell/content/CTA styles are truly unique to `ProjectCard`. Most thumbnail internals overlap with demo/project-page panel patterns: dark panel borders, uppercase labels, pill badges, metric cards, glow bars, grid panels, and mobile collapse behavior.

Recommended split:

- Keep in `ProjectCard.module.scss`:
  - `.cardContainer`
  - `.imageContainer`
  - `.cardContent`
  - `.cardBody`
  - `.ctaContainer`
  - `.ctaLink`
- Move thumbnail preview primitives to `src/components/work/ProjectThumbnail.module.scss`.
- Move shared miniature UI patterns to shared mixins/utilities:
  - chrome bars
  - KPI cards
  - dark panels
  - uppercase labels
  - status pills
  - chart bars
  - row lists

Expected ProjectCard source reduction: 1,417 lines to roughly 350–500 lines.

## Repeated declarations found

Most repeated declarations are layout primitives, not component-specific design:

- `display: grid` — 231 occurrences.
- `display: flex` — 131 occurrences.
- `min-width: 0` — 117 occurrences.
- `grid-template-columns: 1fr` — 75 occurrences.
- `width: 100%` — 51 occurrences.
- `text-transform: uppercase` — 44 occurrences.
- `display: inline-flex` — 41 occurrences.
- `overflow: hidden` — 31 occurrences.
- `border-radius: 999px` — 19 occurrences.

These are now represented by the initial shared mixin layer in `src/components/shared/style-utils.scss`.

## Breakpoint consolidation

Current repeated breakpoints:

- `max-width: 760px` — 15 uses.
- `max-width: 520px` — 10 uses.
- `max-width: 480px` — 10 uses.
- `max-width: 1024px` — 9 uses.
- `max-width: 1100px` — 7 uses.
- `max-width: 900px` — 5 uses.
- `max-width: 1180px` — 5 uses.
- `max-width: 768px` — 5 uses.
- `max-width: 640px` — 5 uses.

`src/components/shared/breakpoints.scss` has been expanded to standardize common names:

- `xs: 430px`
- `sm: 520px`
- `md: 760px`
- `md-plus: 860px`
- `lg: 1024px`
- `xl: 1100px`
- `xxl: 1180px`
- `wide: 1440px`

Existing `s`, `m`, and `l` mixins remain backward compatible.

## Shared utilities created

`src/components/shared/style-utils.scss` now provides reusable primitives:

- `fill-width`
- `absolute-fill`
- `center-flex`
- `center-grid`
- `panel-border`
- `dark-panel`
- `glass-panel`
- `truncate-line`
- `clamp-lines`
- `uppercase-label`
- `lift-hover`
- `reduced-motion`

These should be adopted incrementally to avoid visual regressions.

## Once UI overhead audit

The repo uses Once UI components for layout, metadata, MDX rendering, tags, media, links, buttons, and text. Current direct usage includes:

- Layout primitives: `Column`, `Row`, `Flex`, `Grid`.
- Text/display: `Text`, `Heading`, `Tag`, `InlineCode`, `CodeBlock`.
- Navigation/content: `SmartLink`, `ToggleButton`, `Button`, `Card`, `Media`.
- Metadata/schema: `Meta`, `Schema`.
- Miscellaneous: `Icon`, `Avatar`, `AvatarGroup`, `Accordion`, `AccordionGroup`, `Table`, `Feedback`.

Do not remove Once UI globally yet. The bigger immediate win is to stop overriding Once UI output with component-level `!important` rules and duplicate selectors.

Recommended Once UI cleanup sequence:

1. Inventory component imports by route and identify unused archive/blog/gallery usage.
2. Remove disabled route styling from production bundles where possible.
3. Replace repeated Once UI overrides in card modules with local wrapper classes or design tokens.
4. Keep `Meta`, `Schema`, `SmartLink`, and core layout primitives until routes are stable.

## Files that can be merged or split

### Merge/archive candidates

- `src/components/archive/ContactSection.module.scss`
- `src/components/archive/HeadingLink.module.scss`
- `src/app/work/[slug]/demo/demo.module.scss`

These are small or archive/demo-only files and should not drive the active styling system.

### Split candidates

- `src/components/work/ProjectCard.module.scss`
  - Split card shell from thumbnail preview systems.
- `src/app/work/[slug]/ProjectPage.module.scss`
  - Split page shell/article styles from slug-specific preview styles.
- Large demo stylesheets:
  - Extract shared demo shell, sidebar, topbar, KPI cards, rows, tables, and status pills.

### Shared demo utilities target

Create later:

- `src/components/demos/shared/demo-shell.module.scss`
- `src/components/demos/shared/demo-patterns.scss`

## Refactoring roadmap

### Phase 1 — Safe foundation

- Add shared breakpoint names and utility mixins.
- Add CSS audit/plan documentation.
- Do not alter visuals.

Expected reduction: minimal immediately, but enables safe mechanical refactors.

### Phase 2 — ProjectCard reduction

- Move thumbnail-specific styles out of `ProjectCard.module.scss`.
- Replace repeated panel/label/truncate/hover patterns with utilities.
- Normalize local `520px`, `640px`, `820px`, and `980px` media queries to shared breakpoint mixins.

Expected reduction: 900–1,000 source lines from `ProjectCard.module.scss`.

### Phase 3 — Project page shell cleanup

- Split `ProjectPage.module.scss` into:
  - `ProjectPage.module.scss` for page/hero/article/demo frame.
  - `ProjectHeroPreview.module.scss` or remove old preview-only styles if unused.
- Consolidate hero chips, article cards, section headings, and demo wrappers.

Expected reduction: 600–900 source lines.

### Phase 4 — Demo stylesheet consolidation

- Create shared demo shell/pattern modules.
- Refactor sales/vendor/revenue/ops demos to use the shared shell and only keep unique visual details locally.

Expected reduction: 2,500–4,000 source lines.

### Phase 5 — Remove disabled-route CSS and Once UI overrides

- Confirm disabled routes are not needed in production.
- Remove/archive unused Blog/Gallery styles if the routes stay disabled.
- Reduce `!important` selectors overriding Once UI generated styles.

Expected reduction: 300–800 source lines plus less generated CSS conflict.

## Expected target outcome

After all phases:

- Source CSS/SCSS: 14,356 lines → 4,500–5,500 lines.
- Rule count: expected to fall below ~800 after demo and project-card split.
- Compressed CSS: realistic target under 50kb if disabled route CSS and repeated demo patterns are removed from active route bundles.
- Visual appearance: maintain identical appearance by refactoring one component family at a time and checking desktop/tablet/mobile after each phase.
