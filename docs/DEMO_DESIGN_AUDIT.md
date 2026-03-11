# Project Demo Design Audit

Structured audit of all four project demos (Sales-to-Delivery, Revenue Financial, Vendor Lifecycle, Operational Intelligence) using: **spacing**, **alignment**, **hierarchy**, **clutter**, **consistency**, **readability**.

---

## Checklist Applied

| Area | Standard |
|------|----------|
| **Spacing** | Section gap 1rem–1.25rem; panel padding 1rem–1.25rem; card internal padding 0.875rem–1rem. |
| **Alignment** | Section titles left; table headers/cells consistent (numbers right, text left); cards content aligned. |
| **Hierarchy** | Section titles 0.875rem–1rem, font-weight 700; labels smaller than values; primary data emphasized. |
| **Clutter** | Single border between sections; min-width: 0 on flex/grid children to prevent overflow. |
| **Consistency** | Section card radius 0.5rem–0.625rem; table th/td padding 0.5rem 0.6rem–0.65rem; status pills min-width + center text. |
| **Readability** | line-height 1.35–1.4 on body; word-break where needed; font-size ≥ 0.65rem for labels. |

---

## Changes Made (This Pass)

### Sales-to-Delivery
- Header: padding 1rem 1.25rem; title 1.0625rem/700; meta 0.8125rem, margin-top 0.35rem.
- Split layout: gap 1rem, padding 1rem 1.25rem; responsive gap 1.25rem.
- Panel: padding 1rem 1.25rem, min-width: 0.
- Table: th/td padding 0.5rem 0.6rem, line-height 1.3/1.35.
- Order header: padding 1rem 1.125rem, background tint; orderClient 1.0625rem, orderMeta line-height 1.35.

### Revenue Financial
- demoContent gap 1.25rem; mainGrid gap 1.25rem, align-items: start.
- sectionCard min-width: 0; sectionCardTitle 0.9375rem/700, margin 0 0 0.875rem.
- projectOverviewPanel padding 1.25rem 1.5rem, min-width: 0.
- Table th/td padding 0.5rem 0.65rem, line-height 1.35.

### Vendor Lifecycle
- mainGrid gap 1.25rem, align-items: start.
- internalGrid gap 1.25rem, align-items: start.
- internalPanel/portalPanel padding 1.125rem 1.25rem.
- portalSummaryGrid minmax(140px, 1fr), gap 0.875rem, margin-bottom 1.25rem.
- (Previous pass: workOrderDetails overflow, table word-break, status pills.)

### Operational Intelligence
- demoContent padding 1rem 1.25rem.
- kpiGrid minmax(0, 1fr) for equal columns; kpiCard padding 0.875rem 1rem, min-width: 0.
- chartGrid minmax(0, …), gap 1rem, align-items: start; chartPanel/tablePanel min-width: 0, padding 1rem 1.125rem / 1rem 1.25rem.
- chartPanelTitle/tablePanelTitle 0.875rem/700, margin 0 0 0.75rem.
- dayCell min-height 40px, padding 0.3rem; eventLabel 0.6875rem, word-break.
- Table: th/td padding 0.5rem 0.65rem, font-size 0.8125rem, line-height 1.35; th font-weight 600.
- statusPill padding 0.25rem 0.5rem, min-width: 4rem, text-align: center.

---

## Cross-Demo Conventions

- **Section cards:** padding 1rem–1.25rem, border-radius 0.5rem–0.625rem, min-width: 0.
- **Section titles:** font-weight 700, margin-bottom 0.75rem–0.875rem, border-bottom 1px.
- **Tables:** th/td padding 0.5rem 0.6rem–0.65rem, line-height 1.35.
- **Status pills:** min-width 4–4.5rem, text-align: center where applicable.
- **Grids:** gap 1rem–1.25rem, align-items: start to avoid stretch quirks.

---

## Optional Next Steps

- Extract shared demo variables (e.g. `$demo-section-padding`, `$demo-table-cell-padding`) into a single SCSS partial if demos are updated often.
- Add reduced-motion or high-contrast overrides if accessibility is a priority.
- Run a quick pass on very narrow viewports (320px) for each demo.
