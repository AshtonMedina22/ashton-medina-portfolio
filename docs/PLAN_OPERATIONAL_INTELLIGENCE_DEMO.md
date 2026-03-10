# CodeAcademy review: Operational Intelligence Platform demo

This doc captures the **Operational Intelligence demo–specific** updates from CodeAcademy. Text content and grids for the Operational Intelligence project page are covered by the **all-project** work in [PLAN_TYPOGRAPHY_AND_GRIDS.md](PLAN_TYPOGRAPHY_AND_GRIDS.md).

---

## Scope

- **OperationalIntelligenceDemo** (`OperationalIntelligenceDemo.tsx`) – dashboard with controls, KPI cards, **TasksDoughnut**, **EngagementCalendar**, and engagements table
- **Styles:** `operational-intelligence-demo.module.scss`
- **No global style.css:** Use **local variables** in the demo module aligned with design system and other demos (`$blue`, `$green`, `$red`, `$yellow`, `$cyan`, `$border`, `$bg`, `$card-bg`, `$text`, `$text-muted`, plus `$space-*`, `$font-size-*`). Do not `@import` a global style.css.

---

## 1. App shell (same pattern as Sales, Vendor, Financial)

Wrap the entire dashboard in a shell so it reads as a single product UI.

**OperationalIntelligenceDemo.tsx**
- Root: `<div className={styles.shell}>`
- Inside: `<div className={styles.shellTopBar}>` with:
  - `<div className={styles.windowDots}>` with three `<span />` (red / yellow / green)
  - `<span className={styles.shellTitle}>Operational Intelligence Dashboard</span>`
- Then: `<div className={styles.demoContent}>` wrapping:
  - Controls bar (title, tabs, filters, export, auto-email badge)
  - Dashboard grid (KPI row, chart row, table panel)

**operational-intelligence-demo.module.scss**
- **.shell,** **.shellTopBar,** **.windowDots,** **.shellTitle,** **.demoContent:** same pattern as other demos (border-radius 1rem, gradients, dots, padding $space-lg, gap $space-md).

---

## 2. Controls bar (top section)

Clearly separate tabs, filters, and export from the main dashboard content.

- **.controlsBar:** flex, align center, flex-wrap, gap $space-sm, padding-bottom $space-md, border-bottom.
- **.controlsBarTitle:** font-size $font-size-h4, font-weight 700, color $text, margin 0 (e.g. "Operations Dashboard").
- **.tabsContainer:** flex wrap, gap (e.g. $space-xs * 0.75).
- **.tabBtn:** padding, font-size $font-size-sm, font-weight 600, muted color, background/border, border-radius; hover state.
- **.tabActive:** background $blue, color $bg, border $blue (for active tab e.g. "Engagements").
- **.filterExportGroup:** margin-left auto, flex, align center, flex-wrap, gap $space-xs.
- **.selectFilter:** padding, font-size $font-size-sm, border, border-radius, background, color; custom dropdown arrow if desired.
- **.iconBtn:** icon-only button (e.g. refresh); padding, border, border-radius, hover.
- **.exportBtn:** padding, font-size $font-size-sm, border, border-radius, flex with icon + "Export" text, hover.
- **.autoEmailBadge:** padding, font-size $font-size-xs, font-weight 600, color $green, background/border green tint, border-radius.

---

## 3. Dashboard grid and KPI cards

- **.dashboardGrid:** flex column, gap $space-md (rows: KPI, charts, table).
- **.kpiGrid:** grid, repeat(auto-fit, minmax(200px, 1fr)), gap $space-md.
- **.kpiCard:** padding $space-md, border-radius $space-sm, box-shadow; hover: translateY(-2px), stronger shadow, border highlight. **Dynamic colors:** KPI cards use per-card colors (blue, red, green, cyan); keep minimal inline for bg/border (e.g. `backgroundColor: kpi.color + "15"`) or add variant classes (e.g. .kpiBlue, .kpiRed, .kpiGreen, .kpiCyan) and map in JSX.
- **.kpiCardContent:** flex, align flex-start, justify space-between.
- **.kpiLabel:** font-size $font-size-sm, color $text-muted, margin-bottom.
- **.kpiValue:** font-size $font-size-h3, font-weight 700 (color can stay inline per KPI or use variant).
- **.kpiIcon:** size $space-lg, flex-shrink 0, opacity (color per KPI or variant).

---

## 4. Chart panels (Calendar + Doughnut)

- **.chartGrid:** grid, e.g. 1.5fr 1fr, gap $space-md.
- **.chartPanel,** **.tablePanel:** padding $space-md, background $card-bg, border, border-radius $space-sm, box-shadow.
- **.chartPanelTitle,** **.tablePanelTitle:** font-size $font-size-h4, font-weight 600, color $text, margin 0 0 $space-md 0, padding-bottom $space-xs, border-bottom.

**TasksDoughnut (move inline to SCSS):**
- **.tasksDoughnutContainer:** flex column, align center.
- **.doughnutChart:** width/height 140px, border-radius 50%, position relative, margin-bottom $space-md; inner circle via ::after (inset 50%, transform translate -50% -50%, width/height 70px, background $card-bg, border). Conic gradient remains in JS (dynamic segments).
- **.doughnutCenterText:** position absolute, center, font-size $font-size-sm, font-weight 700, color $text, z-index 1.
- **.doughnutLegend:** flex column, gap $space-xs; **.legendItem:** flex, align center, gap $space-xs, font-size $font-size-sm; **.colorDot:** 0.75rem, border-radius 3px; **.label** font-weight 500; **.value** muted, margin-left auto.

**EngagementCalendar (move inline to SCSS):**
- **.calendarHeader:** font-size $font-size-sm, font-weight 600, color $text, margin-bottom $space-sm (e.g. "December 2024").
- **.calendarGrid:** grid, repeat(7, 1fr), gap 2px, font-size $font-size-sm.
- **.weekday:** padding, font-weight 600, color $text-muted, text-align center.
- **.dayCell:** padding, min-height 48px, background, border, border-radius 4px.
- **.dayNumber:** font-weight 500, color $text, margin-bottom.
- **.eventIndicator:** flex column, gap; **.eventDot** 6px circle (color per type); **.eventLabel** font-size $font-size-xs, color $text-muted. Variants: **.eventDotPipeline** (blue), **.eventDotConfirmed** (green).
- **.calendarLegend:** flex, gap $space-md, margin-top $space-sm, font-size $font-size-xs, color $text-muted; **.legendItem** flex, gap; **.legendDot** 8px circle.

---

## 5. Table and pagination

- **.table:** width 100%, border-collapse, font-size $font-size-sm; consistent with other demos.
- **.tableHeaderRow,** **.tableHeader:** padding $space-xs $space-sm, font-weight 600, $font-size-xs, uppercase, muted, header background.
- **.tableHeaderRight:** text-align right (e.g. Revenue column).
- **.tableRow:** border-bottom; hover background.
- **.tableCell,** **.tableCellRight:** padding $space-sm; tableCellRight text-align right, font-weight 500.
- **.statusPill:** padding, border-radius, font-size $font-size-xs, font-weight 500; default muted. **.status-green,** **.status-blue,** **.status-yellow:** background and color per status (map row.statusColor to class).
- **.tablePagination:** flex, justify space-between, margin-top $space-md, padding-top $space-sm, border-top, font-size $font-size-sm, color $text-muted.
- **.paginationControls:** flex, gap.
- **.paginationBtn:** padding, border, border-radius, background, cursor, hover border/color $blue.

---

## 6. Move inline styles to SCSS

Replace inline `style={{...}}` in OperationalIntelligenceDemo, TasksDoughnut, and EngagementCalendar with the classes above. Keep only dynamic values that cannot be class-based (e.g. conic-gradient segments, or KPI card bg/border if not using variant classes) as minimal inline or data attributes. Use local SCSS variables for all colors and spacing; no global style.css import.

---

## 7. Implementation order

1. Add local variables to `operational-intelligence-demo.module.scss` (no @import).
2. In `OperationalIntelligenceDemo.tsx`, add shell → shellTopBar (dots + title) → demoContent wrapper.
3. Add .shell, .shellTopBar, .windowDots, .shellTitle, .demoContent in SCSS.
4. Build controls bar: .controlsBar, .controlsBarTitle, .tabsContainer, .tabBtn, .tabActive, .filterExportGroup, .selectFilter, .iconBtn, .exportBtn, .autoEmailBadge; replace inline styles.
5. Build dashboard grid: .dashboardGrid, .kpiGrid, .kpiCard, .kpiCardContent, .kpiLabel, .kpiValue, .kpiIcon (variant classes or minimal inline for per-card colors).
6. Chart row: .chartGrid, .chartPanel, .chartPanelTitle; wrap EngagementCalendar and TasksDoughnut in panels.
7. In TasksDoughnut: use .tasksDoughnutContainer, .doughnutChart, .doughnutCenterText, .doughnutLegend, .legendItem, .colorDot, .label, .value; move all inline styles to SCSS (conic gradient can stay in JS).
8. In EngagementCalendar: use .calendarHeader, .calendarGrid, .weekday, .dayCell, .dayNumber, .eventIndicator, .eventDot, .eventLabel, .calendarLegend; move inline styles to SCSS.
9. Table panel: .tablePanel, .tablePanelTitle, .table, .tableHeaderRow, .tableHeader, .tableHeaderRight, .tableRow, .tableCell, .tableCellRight, .statusPill, .status-green/.status-blue/.status-yellow.
10. Pagination: .tablePagination, .paginationControls, .paginationBtn.

After this, the Operational Intelligence demo will match the app-shell pattern and design language of the other three demos and align with the shared "mockup below text" + mockup section on project pages.
