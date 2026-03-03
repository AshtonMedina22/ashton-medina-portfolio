# Builder.io Design Prompts — Work Page Project Mockups

**Reference-first:** Use your **existing mockups** (e.g. the Sales-to-Delivery dashboard at `/work/sales-to-delivery-automation-platform/demo`) as the visual reference. These prompts describe that reference in exact detail so Builder.io **matches and refines** what you already have — not invents a new style.

**Demo pages (use as reference when composing prompts):**
- Sales-to-Delivery: `/work/sales-to-delivery-automation-platform/demo`
- Revenue / Financial Control: `/work/revenue-financial-control-engine/demo`
- Vendor Lifecycle & Compliance: `/work/vendor-lifecycle-compliance-platform/demo`
- Operational Intelligence: `/work/operational-intelligence-platform/demo`

**1–2 high-quality mockups per project.** Quality over quantity. **16:9.** Industry-agnostic, real exec-view, high-end full-stack aesthetic.

---

## REFERENCE: Your current Sales-to-Delivery mockup (match this style)

Your existing mockup has this structure. Prompts below must **reproduce this layout and style**, then refine (typography, spacing, clarity). Do not replace with a different layout (e.g. dark theme or three simple panels).

- **Background:** Light (white or very light gray). Dark text. Blue and green accents for status/highlights.
- **Layout:** Two equal-width panels side by side. Between them: a clear **"CREATES"** arrow (or equivalent) showing automation flow.
- **Left panel — Confirmed Sales Order:**
  - Title: "Sales Order – Project" (or similar). Subtitle: e.g. "Confirmed sales order with auto-generated execution project."
  - **Horizontal sales stage bar:** Intake → Qualification → Approval → Proposal Sent → Contract Sent → **Booked** (final stage highlighted in green).
  - Client/order block: Client name (e.g. TechCorp), Order #SO-2024-0842, Engagement ENG-2024-0842, Type (e.g. Type A pill), Delivery date, Rep name.
  - **Service line items table:** Columns SERVICE NAME | TIER | QTY | HOURS | UNIT PRICE | SUBTOTAL. Rows: Service A–Premier, Service B–Classic, Service C–Essentials, Service D–Standard (generic tiers: Premier, Classic, Essentials, Standard). Total row: e.g. $12,400.
  - Bottom: Green banner with checkmark: "✔ Project auto-generated on confirmation."
- **Right panel — Auto-Generated Project:**
  - Title: "AUTO-GENERATED PROJECT". Subtitle: same engagement ID and client (e.g. ENG-2024-0842 – TechCorp).
  - **Tabs:** Sales Order (active), Pipeline Opportunity, 3 Vendors (or similar).
  - **Five financial metric cards in a row:** CLIENT REVENUE ($12,400), ESTIMATED COST, ACTUAL COST, MARGIN, MARGIN %. Margin values in green.
  - **Kanban task board:** Four columns — TO DO | IN PROGRESS | WAITING | DONE. Task cards show: task name, assignee initials (JM, SK, AB, SM), subtask progress (e.g. 3/4), due date. Example tasks: Service A Setup, Service B Configuration, Service C Coordination, Contract Confirmation & Payment Receipt, Pre-delivery Checklist.

Use this as the **reference structure** for Sales-to-Delivery. For other projects, use their demo mockups the same way once you have reference images.

---

## Project 1: Sales-to-Delivery Automation Platform

**What the page says:** Sales closes a deal; ops used to rebuild everything by hand. Now: order confirmation validates structure, creates CRM linkage, generates scoped project and task tree, consolidates into one project, syncs 65+ fields, stage progression with audit trail. Outcome: confirm a sale → scoped project and tasks appear; full traceability.

---

### Mockup 1 — Primary (hero): Match reference, then refine

```
REFERENCE: Use the existing Sales-to-Delivery mockup as the base. Do not change to a dark theme or a different layout. Reproduce the following structure exactly, then improve only typography, spacing, and clarity.

EXACT VISUAL SPEC — 16:9 only.

CANVAS
- 16:9. Background: light (white #FFFFFF or very light gray #F8FAFC). Dark text. No dark theme.

LAYOUT
- Two equal-width vertical panels (~45% each). Between them: a vertical strip (~10%) with a single arrow or the word "CREATES" (blue, e.g. #2563EB or #0EA5E9), indicating the left panel creates the right panel.

LEFT PANEL — CONFIRMED SALES ORDER
- Panel: light background (#FFFFFF or #F8FAFC), subtle border or shadow so it reads as a card. Padding ~24px.
- Header: "Sales Order – Project" (16–18px, bold, dark #0F172A or #1E293B). Subtitle: "Confirmed sales order with auto-generated execution project" (12–13px, #64748B).
- Sales stage bar: One horizontal row of 6 stages. Exact labels: "Intake" | "Qualification" | "Approval" | "Proposal Sent" | "Contract Sent" | "Booked". Each stage: pill or small box, connected by thin line or chevron. "Booked" highlighted in green (#059669 or #10B981). Other stages neutral gray. Font 12–13px.
- Order details block (below stage bar): "TechCorp" (client name, 14px bold). Then: "Order #SO-2024-0842", "Engagement ENG-2024-0842", "Type A" (pill/tag, light blue), "Delivery: Dec 10, 2024", "Rep: Sarah M." 12px, #475569.
- Service line items table: Table with headers SERVICE NAME | TIER | QTY | HOURS | UNIT PRICE | SUBTOTAL. 4 data rows: "Service A – Premier" (Premier, 1, 8, $3,200, $3,200); "Service B – Classic" (Classic, 1, 6, $2,800, $2,800); "Service C – Essentials" (Essentials, 1, 4, $3,200, $3,200); "Service D – Standard" (Standard, 1, 2, $3,200, $3,200). Optional: "TRIGGER" tag on one row. Total row: "Total $12,400". Table font 11–12px, clean borders.
- Bottom of left panel: Green horizontal banner (#D1FAE5 or similar). Text: "✔ Project auto-generated on confirmation." 12–13px.

CENTER — CREATES
- Single arrow pointing right, or text "CREATES", in blue. Connects left and right panels visually.

RIGHT PANEL — AUTO-GENERATED PROJECT
- Panel: same light card style as left.
- Header: "AUTO-GENERATED PROJECT" (14–16px, uppercase or title case). Subtitle: "ENG-2024-0842 – TechCorp" (12px).
- Tabs: "Sales Order" (active), "Pipeline Opportunity", "3 Vendors". Underline or background for active tab.
- Financial row: Five cards in one row. Labels: CLIENT REVENUE | ESTIMATED COST | ACTUAL COST | MARGIN | MARGIN %. Values: $12,400 | $6,200 | $5,800 | $6,600 | 53.2%. Margin and Margin % in green. Card style: light bg, thin border or shadow.
- Kanban board: Four columns — TO DO | IN PROGRESS | WAITING | DONE. Task cards in each column. Each card: task name (e.g. "Service A Setup", "Service B Configuration"), assignee initials (JM, SK, AB, SM), "X/Y subtasks", due date (e.g. Due Dec 8, 2024). 2 cards in TO DO, 1 in IN PROGRESS, 1 in WAITING, 1 in DONE. Font 11–12px. Minimal card design.

IMPROVE (optional refinements)
- Consistent sans-serif (e.g. Inter). Slightly tighter spacing if needed for 16:9. Ensure "CREATES" and the $12,400 match between left and right to show data sync.

FORBIDDEN
- Do not switch to dark theme. Do not reduce to three simple text panels. Do not remove the table, stage bar, financial cards, or Kanban. Industry-agnostic labels only (TechCorp, Service A–D, generic dates).
```

### Mockup 2 — Optional: Same style, different angle

```
Same reference as Mockup 1: light background, two-panel layout, professional exec dashboard. This variant: focus on the stage progression and audit trail. Left: same sales stage bar (Intake → Booked) with one stage highlighted; add a short "Activity" list below with 2–3 timestamped lines (e.g. "Dec 2, 10:14 — Order confirmed · Project created"). Right: same financial cards + one Kanban column (e.g. TO DO only) with 3–4 tasks. Center: "CREATES" or arrow. 16:9. Match the existing mockup's light theme and typography.
```

---

## Project 2: Vendor Procurement & Portal Platform

*Self-service vendor portal, tokenized access, work orders, RFQ workflows, record-level isolation.*

**Reference:** Use your demo mockup at `/work/vendor-lifecycle-compliance-platform/demo` when available. Until then, match the **same light-theme, two-panel or clear-section style** as the Sales-to-Delivery reference (light bg, dark text, blue/green accents, real UI structure).

### Mockup 1 — Primary (hero)

```
Match the style of the Sales-to-Delivery reference mockup: light background, dark text, professional exec dashboard. Layout: left section = portal sidebar (Work orders, RFQs, Documents); main section = work order list: 3–4 cards with status (Pending, Confirmed), order title, date. Optional center or top: "Secure link" or token hint. Same typography and card treatment as reference. 16:9. Industry-agnostic.
```

### Mockup 2 — Optional (RFQ)

```
Same style as reference. One main view: one RFQ card (title, deadline) and 2–3 vendor quote cards with "Select" or amount. Light theme, clean cards, 16:9.
```

---

## Project 3: Operational Intelligence Platform (Executive BI)

*Configurable analytics, drag-and-drop widgets, real-time KPIs, drill-down, PDF/Excel/PNG export.*

**Reference:** Use your demo mockup at `/work/operational-intelligence-platform/demo` when available. Until then, match the **same light-theme, high-end dashboard style** as the Sales-to-Delivery reference.

### Mockup 1 — Primary (hero)

```
Match the style of the Sales-to-Delivery reference mockup: light background, dark text, executive dashboard. Layout: top row = 3 KPI cards (e.g. Revenue, Projects, Vendors) with values; below = 2 chart widgets (bar chart, line or doughnut). Blue/green accents on key numbers. Optional: "Export" or date range in corner. 16:9. Industry-agnostic.
```

### Mockup 2 — Optional (builder)

```
Same light-theme reference style. Grid of 4–5 widget placeholders, one with a subtle drag handle. Conveys configurable layout. 16:9.
```

---

## Project 4: Revenue / Financial Control Engine

**Reference:** Use your demo mockup at `/work/revenue-financial-control-engine/demo` when available. Until then, use the same light-theme, two-panel or dashboard style as the other project references.

### Mockup 1 — Primary (hero)

```
Match the Sales-to-Delivery reference: light background, dark text, exec dashboard. Layout and content to align with the Revenue/Financial Control demo page once reference image is provided. 16:9. Industry-agnostic.
```

---

## Style rules (from your reference)

- **Background:** Light (white or #F8FAFC). Dark text (#0F172A, #1E293B, #475569).
- **Accents:** Blue (#2563EB, #0EA5E9) for links/arrows; green (#059669, #10B981) for success/margin/status.
- **Layout:** Clear sections (two panels, or dashboard grid). "CREATES" or arrow where automation is shown.
- **Tone:** Real business owner/exec view; high-end full-stack; industry-agnostic.

Use the **Primary** prompt for the main image per project. Add **Optional** only if you want a second angle. Always **reference your existing demo mockups** and improve on them rather than inventing a new look.
