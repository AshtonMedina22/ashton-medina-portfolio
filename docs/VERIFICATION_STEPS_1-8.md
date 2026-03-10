# Plan steps 1–8: verification report

Verified against the BUILD EXECUTION CHECKLIST and current repo files. **Do not assume “done” — this report reflects what is actually in the code.**

---

## Step 1a — ProjectPage.module.scss (type scale, spacing, article, hero)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| Local type scale (1rem body, 1.75rem h2, 1.25rem h3) | ✅ | `$font-size-base: 1rem`, `$font-size-h2: 1.75rem`, `$font-size-h3: 1.25rem` |
| Spacing scale | ✅ | `$space-sm` through `$space-xxl` (1rem–4rem) |
| Article prose: line-height 1.6, max-width 720px, paragraph margin | ✅ | `.mdx-paragraph`: `line-height: $line-height-body`, `max-width: 720px`, `margin-bottom: $space-md` |
| H2/H3 sizes and margins (4rem top except first h2, 1.5rem bottom) | ✅ | `:global(h2)`: `margin-top: $space-xxl`, `margin-bottom: $space-md`; `&:first-of-type { margin-top: 0 }`; `:global(h3)`: `margin-top: $space-xl`, `margin-bottom: $space-sm` |
| Hero: title clamp 2rem–2.5rem, tagline 1.125rem | ✅ | `.heroTitle`: `clamp(2rem, 5vw, 2.5rem)`; `.heroTagline`: `1.125rem` |
| List max-width and spacing | ✅ | `.mdx-list` / `.mdx-list-item`: `max-width: 720px`, `margin-bottom: $space-sm` |

**Step 1a: IMPLEMENTED**

---

## Step 1b — HeroStats.module.scss + OutcomeStats.module.scss (card look, grid)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| Card look: background, border, border-radius 0.75rem, padding 1.5rem | ✅ | Both: `.statBlock` has `background: var(--neutral-background-medium)`, `border: 1px solid var(--neutral-alpha-weak)`, `border-radius: 0.75rem`, `padding: 1.5rem` |
| Gap 1.5rem between cards | ✅ | Both: `.statsContainer` `gap: 1.5rem` |
| Flexible grid auto-fit minmax(160px, 1fr) | ✅ | Both: `grid-template-columns: repeat(auto-fit, minmax(160px, 1fr))` |
| Theme vars for light/dark | ✅ | `var(--neutral-background-medium)`, `var(--neutral-alpha-weak)` |

**Step 1b: IMPLEMENTED**

---

## Step 1c — HowItWorksCard.module.scss (card look, grid)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| Card look: background, border-radius 0.75rem, padding 1.5rem | ✅ | `.card`: `background: var(--neutral-background-medium)`, `border: 1px solid var(--neutral-alpha-weak)`, `border-radius: 0.75rem`, `padding: 1.5rem` |
| Grid auto-fit minmax(280px, 1fr), gap 1.5rem | ✅ | `.grid`: `repeat(auto-fit, minmax(280px, 1fr))`, `gap: 1.5rem` |

**Step 1c: IMPLEMENTED**

---

## Step 2a — page.tsx (demo after article, section + h3 + caption)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| Demo block **after** article | ✅ | `<Column as="article" ... CustomMDX />` at 189–191; demo section at 193–210 |
| Section with h3 (e.g. "Live Demo") | ✅ | `<section className={styles.mockupSection}>`, `<h3 className={styles.mockupSectionTitle}>Live Demo</h3>` |
| Caption paragraph | ✅ | `<p className={styles.mockupSectionCaption}>Explore the interactive flow below.</p>` |
| .demoSection / .demoSectionInner | ✅ | Present around demo components |

**Step 2a: IMPLEMENTED**

---

## Step 2b — ProjectPage.module.scss (mockup section styles)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| Mockup section: margin-top, padding-top, title/caption centered, caption muted | ✅ | `.mockupSection`: `margin-top: $space-xxl`, `padding-top: $space-xl`, `text-align: center`; `.mockupSectionCaption`: `max-width: 720px`, `color: var(--neutral-on-background-medium)` |
| .demoSection::before removed/simplified | ✅ | `.demoSection::before { display: none }` |

**Step 2b: IMPLEMENTED**

---

## Step 3a — SalesToDeliveryDemo (app shell)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| .shell, .shellTopBar, .windowDots, .shellTitle | ✅ | SalesToDeliveryDemo.tsx: wrapper `styles.shell`, `shellTopBar`, `windowDots` (3 spans), `shellTitle` "Sales Order → Project" |
| sales-to-delivery-demo.module.scss shell styles | ✅ | .shell, .shellTopBar, .windowDots (red/yellow/green), .shellTitle defined |

**Step 3a: IMPLEMENTED**

---

## Step 3b — sales-to-delivery-demo.module.scss (tighten internal spacing)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| Smaller fonts/padding in header, panels, table, kanban, flow connector | ✅ | SCSS has .header, .headerTitle, .headerMeta, .flowConnector, .panel, .stagePill, table, .kanbanColumn, etc. with compact sizing |

**Step 3b: IMPLEMENTED**

---

## Step 4a — VendorLifecycleDemo (app shell)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| App shell with dots + "Vendor Management & Portal" title | ✅ | VendorLifecycleDemo.tsx: .shell, .shellTopBar, .windowDots, .shellTitle with that text |
| vendor-lifecycle-demo.module.scss shell | ✅ | .shell, .shellTopBar, .windowDots, .shellTitle present |

**Step 4a: IMPLEMENTED**

---

## Step 4b — vendor-lifecycle-demo (panels, no tab/toggle)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| sectionDivider / sectionDividerPortal as simple headers | ✅ | .sectionDivider, .sectionDividerPortal styled as headers; no tab bar |
| Card-style panels for Internal + Portal | ✅ | SCSS has .internalPanel, .portalPanel / card-style panels; tables, badges, work order cards styled |

**Step 4b: IMPLEMENTED**

---

## Step 5a — RevenueFinancialDemo (app shell + section cards)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| App shell dots + "Financial Control & Governance" | ✅ | TSX: .shell, .shellTopBar, .windowDots, .shellTitle |
| Project overview card (title, meta, type badge, related buttons) | ✅ | .projectOverviewPanel, .panelHeaderWrap, .projectTypeBadge, .relatedButtons |
| Section cards for each block | ✅ | .sectionCard, .sectionCardTitle for Financial Summary, Vendor Cost, Budget, Pricing, Revenue |

**Step 5a: IMPLEMENTED**

---

## Step 5b — revenue-financial-demo (no inline styles)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| All inline style={{}} moved to SCSS | ✅ | Grep: no `style={{` in RevenueFinancialDemo.tsx. Metric grid/cards, tables, budget flow, pricing, footer note use classes |

**Step 5b: IMPLEMENTED**

---

## Step 6a — OperationalIntelligenceDemo (app shell + controls bar)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| App shell dots + "Operational Intelligence Dashboard" | ✅ | TSX: .shell, .shellTopBar, .shellTitle with that text |
| Controls bar as classes (title, tabs, filters, refresh, export, auto-email badge) | ✅ | .controlsBar, .controlsBarTitle, .tabsContainer, .tabBtn, .filterExportGroup, .selectFilter, .iconBtn, .exportBtn, .autoEmailBadge |

**Step 6a: IMPLEMENTED**

---

## Step 6b — operational-intelligence-demo (KPI/chart/table; no inline in TasksDoughnut/EngagementCalendar)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| KPI cards as classes with gap | ✅ | .kpiGrid, .kpiCard, .kpiCardContent, .kpiLabel, .kpiValue, .kpiIcon |
| Chart row (calendar + doughnut) in panels | ✅ | .chartGrid, .chartPanel, .chartPanelTitle; EngagementCalendar and TasksDoughnut use SCSS classes |
| Engagements table + pagination | ✅ | .tablePanel, .table, .tablePagination, .paginationControls, .statusPill variants |
| **Move ALL inline styles in TasksDoughnut and EngagementCalendar to SCSS** | ✅ FIXED | KPI cards use SCSS variant classes (.kpiCardPurple, .kpiCardRed, .kpiCardGreen, .kpiCardCyan). Legend colorDot uses SCSS classes (.colorDotToDo, .colorDotInProgress, .colorDotWaiting, .colorDotDone). Only remaining inline: `style={{ background: conic-gradient(...) }}` on the doughnut chart — dynamic and must stay in JS. |

**Step 6b: IMPLEMENTED (after fix).**

---

## Step 7 — ProjectPage (consistent Live Demo section)

| Requirement | Status | Evidence |
|-------------|--------|----------|
| Same margin, padding, caption max-width, muted color on all project pages | ✅ | .mockupSection, .mockupSectionTitle, .mockupSectionCaption use vars; one template for all project pages |

**Step 7: IMPLEMENTED**

---

## Step 8 — .heroTech pills

| Requirement | Status | Evidence |
|-------------|--------|----------|
| Unhide .heroTech (no display: none) | ✅ | .heroTech has `display: flex`, `flex-wrap: wrap`, etc. |
| "Tech Stack:" label, pills with small uppercase, theme vars | ✅ | `&::before { content: "Tech Stack:" }`; `> * > *` pill style with `var(--neutral-background-medium)`, `var(--neutral-alpha-weak)` |

**Step 8: IMPLEMENTED**

---

## Summary

| Step | Status | Notes |
|------|--------|------|
| 1a | ✅ | ProjectPage type/spacing/article/hero |
| 1b | ✅ | HeroStats + OutcomeStats cards + grid |
| 1c | ✅ | HowItWorksCard cards + grid |
| 2a | ✅ | Demo after article, section + h3 + caption |
| 2b | ✅ | Mockup section styles, ::before off |
| 3a | ✅ | Sales shell |
| 3b | ✅ | Sales internal spacing |
| 4a | ✅ | Vendor shell |
| 4b | ✅ | Vendor panels, no tab/toggle |
| 5a | ✅ | Financial shell + section cards |
| 5b | ✅ | Financial no inline |
| 6a | ✅ | Operational shell + controls bar |
| 6b | ✅ | Operational: KPI and doughnut legend use SCSS; only conic-gradient remains in JS (dynamic). |
| 7 | ✅ | Live Demo section consistent |
| 8 | ✅ | Hero tech pills |

**Status:** All steps 1–8 verified and Step 6b gap fixed. Codebase is consistent and ready to push.
