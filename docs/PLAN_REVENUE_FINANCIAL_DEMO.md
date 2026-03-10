# CodeAcademy review: Revenue / Financial Control & Governance demo

This doc captures the **Financial demo–specific** updates from CodeAcademy. Text content and grids for the Financial project page are covered by the **all-project** work in [PLAN_TYPOGRAPHY_AND_GRIDS.md](PLAN_TYPOGRAPHY_AND_GRIDS.md).

---

## Scope

- **RevenueFinancialDemo** (`RevenueFinancialDemo.tsx`) – single component with multiple sections
- **Styles:** `revenue-financial-demo.module.scss`
- **No global style.css:** Use **local variables** in the demo module aligned with design system and Sales/Vendor demos (`$blue`, `$green`, `$red`, `$yellow`, `$border`, `$bg`, `$card-bg`, `$text`, `$text-muted`, plus `$space-*`, `$font-size-*`). Do not `@import` a global style.css.

---

## 1. App shell (same pattern as Sales & Vendor)

Wrap the entire demo in a shell so it reads as a single product UI.

**RevenueFinancialDemo.tsx**
- Root: `<div className={styles.shell}>`
- Inside: `<div className={styles.shellTopBar}>` with:
  - `<div className={styles.windowDots}>` with three `<span />` (red / yellow / green)
  - `<span className={styles.shellTitle}>Financial Control & Governance</span>`
- Then: `<div className={styles.demoContent}>` wrapping all existing sections (project overview, financial summary, vendor table, budget chain, pricing guardrails, revenue attribution).

**revenue-financial-demo.module.scss**
- **.shell:** border-radius 1rem, border, background (e.g. radial gradient + base), box-shadow, overflow hidden, width 100%.
- **.shellTopBar:** flex, align center, gap, padding (~0.5rem 0.9rem), border-bottom, background gradient.
- **.windowDots:** same as Sales/Vendor (three dots: red, yellow, green).
- **.shellTitle:** small font (e.g. $font-size-sm), muted color, flex-grow 1, text-align center.
- **.demoContent:** flex column, gap $space-md, padding $space-lg, background; contains all section cards.

---

## 2. Move inline styles into SCSS (no inline style={{}})

CodeAcademy: replace inline `style={{...}}` with SCSS classes and local variables so the demo is maintainable and consistent with Projects 1 and 2.

- **Project header** → **.projectOverviewPanel** (distinct “project overview” card).
- **Panel title/meta/buttons:** use classes (e.g. `.panelHeaderTitle`, `.panelHeaderMeta`, `.projectTypeBadge`, `.relatedButtons`, `.relatedBtn`) instead of inline styles.
- **Each major block** → **.sectionCard** with **.sectionCardTitle** for the h3.
- **Metric cards:** use `.metricGrid`, `.metricCard`, and **variant classes** (e.g. `.revenue`, `.cost`, `.green`, `.margin`, `.marginPct`, `.red`) applied via `${styles[card.variant]}` instead of `stylesByVariant` in JSX.
- **Tables:** use `.table`, `.tableHeaderRow`, `.tableHeader`, `.tableRow`, `.tableCell`; variance column uses `.varianceCell`, `.varianceGreen`, `.varianceRed`; status column uses `.statusPill`, `.statusGreen`, `.statusBlue`.
- **Budget flow:** `.budgetFlow`, `.budgetCard`, `.budgetPipeline`, `.budgetQuoted`, `.budgetActual`, `.budgetMeta`, `.flowArrow`, `.marginCapturedPill`.
- **Pricing guardrails:** `.pricingGuardrailPanel`, `.pricingDetail`, `.pricingHeading`, `.pricingValues`, `.pricingLabel`, `.pricingValue`, `.pricingSeparator`, `.pricingStatusBadge`.
- **Table footer note:** `.tableFooterNote`.

---

## 3. Local variables (no global import)

In `revenue-financial-demo.module.scss` define local variables aligned with Sales/Vendor and design system:

- **Colors:** `$blue`, `$green`, `$red`, `$yellow`, `$border`, `$bg`, `$card-bg`, `$text`, `$text-muted` (match existing demo tokens / custom.css).
- **Spacing:** `$space-xs`, `$space-sm`, `$space-md`, `$space-lg`, `$space-xl` (e.g. 0.5rem, 1rem, 1.5rem, 2rem, 3rem).
- **Type:** `$font-size-xs`, `$font-size-sm`, `$font-size-h3`, `$font-size-h4` (e.g. 0.75rem, 0.875rem, 1.25rem, 1.125rem).

Use these everywhere instead of hex literals or `@import` of a global file.

---

## 4. Section and component styling (concrete classes)

Apply consistent padding, type scale, and hierarchy.

- **.projectOverviewPanel:** background $card-bg, border, border-radius $space-sm, padding $space-md, box-shadow.
- **.panelHeaderTitle:** font-size $font-size-h4, font-weight 600, color $text, margin 0 0 $space-xs 0.
- **.panelHeaderMeta:** font-size $font-size-sm, color $text-muted.
- **.projectTypeBadge:** padding, border-radius, background rgba($blue, 0.15), color $blue, font-size $font-size-xs, border.
- **.relatedButtons:** flex wrap, gap $space-xs, margin-top $space-md.
- **.relatedBtn:** padding, font-size $font-size-sm, color $blue, background/border, border-radius, hover state.

- **.sectionCard:** background $card-bg, border, border-radius $space-sm, padding $space-md, box-shadow.
- **.sectionCardTitle:** font-size $font-size-h4, font-weight 600, color $text, margin 0 0 $space-sm 0, padding-bottom $space-xs, border-bottom.

- **.metricGrid:** grid, repeat(auto-fit, minmax(130px, 1fr)), gap $space-sm.
- **.metricCard:** padding $space-sm, border-radius $space-xs, font-size $font-size-sm, background/border base; variant classes override background, border, and .metricValue color (revenue=cyan, cost=yellow, green/margin/marginPct=green, red=red).
- **.metricLabel:** font-size $font-size-xs, color $text-muted, margin-bottom.
- **.metricValue:** font-size $font-size-h4, font-weight 700, color (from variant).

- **.table:** width 100%, border-collapse, font-size $font-size-sm; .tableHeaderRow, .tableHeader (padding $space-xs $space-sm, $font-size-xs, uppercase, muted, header bg); .tableRow (border-bottom, hover bg); .tableCell (padding $space-sm).
- **.varianceCell,** **.varianceGreen,** **.varianceRed:** font-weight and color for variance column.
- **.statusPill,** **.statusGreen,** **.statusBlue:** padding, border-radius, font-size $font-size-xs; green/blue variants for Completed / In Progress.

- **.budgetFlow:** flex, align center, flex-wrap, gap $space-sm, margin-bottom $space-md.
- **.budgetCard:** padding $space-sm $space-md, border-radius $space-sm, font-weight 700, font-size $font-size-sm, min-width 150px, text-align center.
- **.budgetPipeline,** **.budgetQuoted,** **.budgetActual:** distinct background/border/color (blue, yellow, green).
- **.budgetMeta:** font-size $font-size-xs, margin-top; color inherits per card type.
- **.flowArrow:** font-size $font-size-h3, color $text-muted, font-weight 700.
- **.marginCapturedPill:** font-size $font-size-sm, font-weight 700, color $green, padding, background/border green tint, border-radius $space-xs, display inline-block, margin-top $space-xs.

- **.pricingGuardrailPanel:** flex column (row on min-width 768px), gap $space-sm, padding $space-md, background, border, border-radius $space-sm, font-size $font-size-sm.
- **.pricingDetail:** flex 1; optional border-right (dashed) between details; on small screens border-bottom instead.
- **.pricingHeading:** font-weight 600, color $green, margin-bottom, font-size $font-size-h4.
- **.pricingValues:** flex, align center, gap; color $text-muted.
- **.pricingLabel,** **.pricingValue,** **.pricingSeparator,** **.pricingStatusBadge:** sizes and colors per CodeAcademy snippet.

- **.tableFooterNote:** font-size $font-size-xs, color $text-muted, margin-top $space-sm.

---

## 5. Implementation order

1. Add local variables to `revenue-financial-demo.module.scss` (no @import).
2. In `RevenueFinancialDemo.tsx`, add shell → shellTopBar (dots + title) → demoContent wrapper.
3. Add .shell, .shellTopBar, .windowDots, .shellTitle, .demoContent in SCSS.
4. Replace the first “section” (project header) with .projectOverviewPanel and class-based panel title, meta, badge, relatedButtons/relatedBtn (remove inline styles).
5. Wrap each of the five content blocks in .sectionCard; use .sectionCardTitle for each h3.
6. Financial Summary: replace inline grid and stylesByVariant with .metricGrid, .metricCard, and variant class `${styles[card.variant]}`; add .metricLabel, .metricValue; define variant classes in SCSS (revenue, cost, green, margin, marginPct, red).
7. Vendor table: use .table, .tableHeaderRow, .tableHeader, .tableRow, .tableCell, .varianceCell + .varianceGreen/.varianceRed, .statusPill + .statusGreen/.statusBlue (remove all inline styles).
8. Budget chain: use .budgetFlow, .budgetCard + .budgetPipeline/.budgetQuoted/.budgetActual, .budgetMeta, .flowArrow, .marginCapturedPill.
9. Pricing guardrails: use .pricingGuardrailPanel, .pricingDetail, .pricingHeading, .pricingValues, .pricingLabel, .pricingValue, .pricingSeparator, .pricingStatusBadge.
10. Revenue attribution table: same .table classes; add .tableFooterNote for the referral tier paragraph.

After this, the Financial demo will match the app-shell pattern and design language of Sales and Vendor, and all three demos will align with the shared “mockup below text” + mockup section on project pages.
