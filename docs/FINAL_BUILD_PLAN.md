# Final build plan — validated and ready to execute

This plan contains **only** suggestions that were reviewed against your actual codebase. Each item was compared to your real files (page structure, ProjectPage.module.scss, HeroStats/OutcomeStats/HowItWorksCard, and each demo’s TSX/SCSS). Nothing here is a blind copy of CodeAcademy.

---

## What we validated (and what we rejected)

**Checked against your code:**
- **page.tsx:** Demo block is currently before the article (lines 139–148); article is 203–204. Moving the demo block after the article is correct and safe.
- **ProjectPage.module.scss:** You have `.articleProse` with `:global(h2)`, `:global(h3)`, `.mdx-paragraph`; `.demoSection` with `::before` chrome bar; no global type scale. We add a **local** type/spacing scale in this file only (no new global stylesheet).
- **HeroStats / OutcomeStats / HowItWorksCard:** Current SCSS matches what we read (grids, no gap/card style on stats; HowItWorks has border, no radius). Card styling and flexible columns are valid improvements.
- **VendorLifecycleDemo:** Uses `sectionDivider` and `sectionDividerPortal` (not a view toggle). Replacing with a single view-toggle header is valid and matches CodeAcademy’s intent.
- **RevenueFinancialDemo:** Heavy inline `style={{}}` and `styles.section`; we move styles to SCSS and add shell. Matches your current structure.
- **OperationalIntelligenceDemo:** Top bar, KPI grid, chart grid, table with pagination all exist with inline styles. Shell + controls bar + SCSS classes are valid.

**Rejected (not in this build):**
- **Global style.css / globals.scss:** CodeAcademy suggested a site-wide stylesheet. We do **not** add it. Your design system (custom.css, Once UI) and per-page/demo SCSS stay the source of truth. All “global” variables are **local** to ProjectPage.module.scss or each demo’s module.
- **@import "../../style.css"** in any demo: We do **not** add this. Demos use local SCSS variables only.

**Optional (your call):**
- **Hero tech stack pills:** Unhiding `.heroTech` and styling as pills. Improves UX; skip if you prefer to keep tech hidden.

---

## Build order (execute in this order when you click Build)

1. **Typography and grids (all project pages)**  
   **Files:** `src/app/work/[slug]/ProjectPage.module.scss`, `src/components/work/HeroStats.module.scss`, `src/components/work/OutcomeStats.module.scss`, `src/components/work/HowItWorksCard.module.scss`  
   **Scope:** Add local type and spacing variables in ProjectPage; apply to `.articleProse` (paragraphs, h2, h3, lists) and hero. In HeroStats/OutcomeStats: card styling (background, border, border-radius 0.75rem, padding), gap 1.5rem, flexible columns. In HowItWorksCard: auto-fit minmax(280px, 1fr), card background and border-radius 0.75rem.  
   **Detail:** [docs/PLAN_TYPOGRAPHY_AND_GRIDS.md](PLAN_TYPOGRAPHY_AND_GRIDS.md)

2. **Move demo below article + mockup section**  
   **Files:** `src/app/work/[slug]/page.tsx`, `src/app/work/[slug]/ProjectPage.module.scss`  
   **Scope:** In page.tsx, move the `{post.metadata.demo && (...)}` block to **after** the `<Column as="article" ...><CustomMDX /></Column>`. Wrap the demo in a section with an h3 (e.g. “Live Demo”) and a short caption `<p>`, then the existing `.demoSection`/`.demoSectionInner`. In ProjectPage.module.scss, add styles for the mockup section (margin-top, padding-top, optional border-top, title/caption centered and muted). Remove or simplify `.demoSection::before` once demos have their own shell (step 4).

3. **Sales demo: app shell + internal polish**  
   **Files:** `src/components/demos/sales-to-delivery/SalesToDeliveryDemo.tsx`, `src/components/demos/sales-to-delivery/sales-to-delivery-demo.module.scss`  
   **Scope:** Wrap content in `.shell` → `.shellTopBar` (window dots + “Sales Order → Project”) → inner content. Add .shell, .shellTopBar, .windowDots, .shellTitle in SCSS. Tighten internal spacing (header, panels, table, kanban, flow connector) per plan.  
   **Detail:** Main plan section 10 and 11; sales-to-delivery-demo.module.scss.

4. **Vendor demo: app shell + view toggle + panel styling**  
   **Files:** `src/components/demos/vendor-lifecycle/VendorLifecycleDemo.tsx`, `src/components/demos/vendor-lifecycle/vendor-lifecycle-demo.module.scss`  
   **Scope:** Wrap in .shell → .shellTopBar (dots + “Vendor Management & Portal”) → .demoContent. Replace sectionDivider/sectionDividerPortal with one .viewToggleHeader (e.g. “Internal Vendor Record” | “Vendor Portal View” with active highlight). Add panel/component classes (internalPanel, portalPanel, panelTitle, sectionHeading, table, etc.) using local SCSS variables.  
   **Detail:** [docs/PLAN_VENDOR_LIFECYCLE_DEMO.md](PLAN_VENDOR_LIFECYCLE_DEMO.md)

5. **Financial demo: app shell + inline→SCSS + section cards**  
   **Files:** `src/components/demos/revenue-financial/RevenueFinancialDemo.tsx`, `src/components/demos/revenue-financial/revenue-financial-demo.module.scss`  
   **Scope:** Wrap in .shell → .shellTopBar (dots + “Financial Control & Governance”) → .demoContent. Replace first section with .projectOverviewPanel (panelHeaderTitle, panelHeaderMeta, projectTypeBadge, relatedButtons, relatedBtn). Wrap each content block in .sectionCard with .sectionCardTitle. Move all inline styles to SCSS (metricGrid, metricCard + variants, table, budgetFlow, budgetCard, pricingGuardrailPanel, tableFooterNote).  
   **Detail:** [docs/PLAN_REVENUE_FINANCIAL_DEMO.md](PLAN_REVENUE_FINANCIAL_DEMO.md)

6. **Operational demo: app shell + controls bar + dashboard SCSS**  
   **Files:** `src/components/demos/operational-intelligence/OperationalIntelligenceDemo.tsx`, `src/components/demos/operational-intelligence/operational-intelligence-demo.module.scss`  
   **Scope:** Wrap in .shell → .shellTopBar (dots + “Operational Intelligence Dashboard”) → .demoContent. Replace top-bar inline styles with .controlsBar, .controlsBarTitle, .tabsContainer, .tabBtn, .tabActive, .filterExportGroup, .selectFilter, .iconBtn, .exportBtn, .autoEmailBadge. Add .dashboardGrid, .kpiGrid, .kpiCard, .chartGrid, .chartPanel, .tablePanel; move TasksDoughnut and EngagementCalendar inline styles to SCSS classes; table and .tablePagination with .statusPill and status-green/blue/yellow.  
   **Detail:** [docs/PLAN_OPERATIONAL_INTELLIGENCE_DEMO.md](PLAN_OPERATIONAL_INTELLIGENCE_DEMO.md)

7. **Page-level mockup section styling**  
   **Files:** `src/app/work/[slug]/ProjectPage.module.scss`  
   **Scope:** Ensure mockup section (from step 2) has consistent margin/padding and caption styling. If you removed .demoSection::before in step 2, keep .demoSection and .demoSectionInner for the scroll container and outer wrapper.

8. **Optional — Hero tech stack pills**  
   **Files:** `src/app/work/[slug]/ProjectPage.module.scss`  
   **Scope:** Unhide .heroTech (remove or override display: none). Style as flex wrap, “Tech Stack:” label, pills with small uppercase text, subtle background/border. Skip this step if you want to keep tech hidden.

---

## Summary

- **Steps 1–7** are the validated build. Execute in order.
- **Step 8** is optional (hero tech pills).
- No global style.css; no @import of style.css in demos. All variables are local to the file they’re used in.
- Supporting detail lives in PLAN_TYPOGRAPHY_AND_GRIDS.md and the four demo-specific plan docs; this file is the single checklist for “click Build.”
