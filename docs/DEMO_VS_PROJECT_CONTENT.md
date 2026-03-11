# Demo Design: Project Content vs. Visual Demo

Demos must be **accurate visual representations of the product** described on the project page, not feature lists with pasted text. Each demo should look like a real screen a user would see when using the system.

---

## Data hierarchy (mandatory)

- **Top level = Project / Sales Order** — one deal, one engagement. A project has one sales order; the sales order is the source of the deal.
- **Under the project = multiple vendor work orders** — each vendor assignment is one work order. A project has many vendor work orders (one per vendor/assignment).
- **Work orders never sit at the top level** of a screen or page. They are child records (e.g. rows in a "Vendor work orders" or "Assignments" table). Only project or sales order is the top-level context.

---

## Principle

- **Wrong:** Add a section for each "How It Works" card, give it a title + paragraph that restates the feature. Result: mockup that looks like a checklist of capabilities.
- **Right:** Design one or more **product screens** that naturally show those capabilities. The UI elements (tables, statuses, flows, filters) embody the feature; no explanatory paragraph needed.

---

## Sales-to-Delivery (sales-to-delivery-automation-platform.mdx)

**Project content:** Confirm a sale → system auto-generates a scoped project, inherits from CRM, full traceability. Order validation, CRM linkage, project generation (task template per service line), task consolidation into one project, 65+ field sync, stage automation.

**Demo should show:**
- **Left:** The **confirmed sales order** — the order that was just validated and confirmed. Structure (client, line items, total) should look like the source record. No feature labels.
- **Right:** The **auto-generated project** that was created from it — one project, tasks that clearly map to the service lines sold, same client/amounts. The connection (same deal, no re-entry) should be obvious from the layout and data.
- Optional: small "Generated from SO-0842" or link to show traceability. No "Order Validation" or "Project Generation" title cards — the before/after and shared data *are* the demo.

---

## Financial (revenue-financial-control-engine.mdx)

**Project content:** Margin protection, pricing enforcement, approval checkpoints, compensation automation. Live margin on every project; pricing bands and floors; 5 governed financial states; role-based permissions (margins/costs/comp hidden from unauthorized); vendor est vs actual with variance on assignment + project + margin; budget→quoted→actual chain; payment gate (4 conditions); 7-tier compensation by margin; automated compensation records (draft POs, attribution, declining referral).

**Demo should show:**
- **One project financial screen** a finance user would open: **top level = Sales Order** (the project/deal), e.g. "Sales Order SO-0842 · Meridian Group". Links to Sales order, Vendor work orders (3), Invoices.
- **Live margin strip** — revenue, est cost, actual cost, variance, margin, margin %. No "Live Margin Computation" title + paragraph; the numbers and a small "Live" or "Updated just now" cue are enough.
- **Vendor work orders table** — one row per vendor assignment (work order) under this project. Est, actual, variance, status. Overruns visible here and reflected in the margin strip above. No subtitle.
- **Budget chain** — single visual: Pipeline $X → Quoted $Y → Actual $Z → Margin. Source labels (from CRM, from SO, from Project). Leadership view in one flow.
- **Record state** — in context: e.g. "Sales order: Confirmed", "Project: Invoiced" or "Financial record: Paid" so the *record* has a governed state, not a standalone "Financial Lifecycle States" section with pills + paragraph.
- **Payout status** — "Payout: Eligible" or "Blocked" with the 4 conditions as a checklist (checkmarks when met). System showing status for this project, not explaining the gate.
- **Pricing** — compact guardrails (min/max band, line floor) as config or inline on a quote line; "In range" where applicable. No paragraph.
- **Compensation** — one "Stakeholder payouts" or "Compensation" table: role, name, attribution %, tier, payout amount. Optional: "Draft PO: Dec 2026" / "Monthly draft POs". Referral declining note only if the table shows referral. No 7-tier explanation paragraph; tier column or small "Rate by margin tier" label is enough.
- **Permissions** — implied by view (we see margins = we're Finance). Optional: "Viewing as: Finance" in header. No standalone "Role-Based Financial Permissions" card with tags.

Remove: section titles that restate feature names, and all sectionSubline paragraphs. Let the UI speak.

---

## Vendor Lifecycle (vendor-lifecycle-compliance-platform.mdx)

**Project content:** Public application intake; tokenized portal (15 routes); record-level isolation; work order lifecycle (6 states: Pending → Sent → Confirmed → Declined → In Progress → Completed); vendors accept with e-signature, decline with reason, post messages; RFQ & quote engine; compliance monitoring (documents, expiry, 3-tier classification); batch reminders; internal cross-vendor visibility (response status, compliance, cost variance); performance & rate governance.

**Demo should show:**
- **Vendor portal (right):** What a vendor sees with a token — dashboard, one work order card in a clear state (e.g. "Accept & Sign" / "Decline"), e-signature block, maybe message area. The 6-state lifecycle should be visible in the status/actions, not as a separate "Work Order Lifecycle" card.
- **Internal view (left):** Cross-vendor list or project view — response status, compliance/expiry, cost variance (est vs actual). Real-time visibility, not a list of feature names.

Content should reflect actual flows (accept/decline, e-sig, status) not generic cards.

---

## Operational Intelligence (operational-intelligence-platform.mdx)

**Project content:** Configurable analytics; drag-and-drop widgets; real-time KPIs; drill-down to live records; single data layer across CRM, Sales, Projects, Vendors, Accounting; 7 views (tasks, team, engagements, pipeline, vendors, revenue, custom); 7+ chart types; date/filter presets; scheduled delivery; export PDF/Excel/PNG.

**Demo should show:**
- A **dashboard** that looks like the product: tabs or nav for the 7 views (My Tasks, Team, Engagements, Pipeline, Vendors, Revenue, Custom).
- KPI tiles that look clickable (drill-down).
- Charts (doughnut, bar, etc.) as the main content.
- Filter or date preset (e.g. "Dec 2026").
- Export buttons (PDF, Excel, PNG).
The table of engagements is one view; the dashboard nature (widgets, charts, filters, export) should be the focus, not a list of "How It Works" items.

---

## Summary

| Project            | Demo should be                                                        | Not |
|--------------------|-----------------------------------------------------------------------|-----|
| Sales-to-Delivery  | Two panels: confirmed order + auto-generated project, same data       | Feature cards |
| Financial          | One project financial screen: margin strip, vendor table, budget flow, record state, payout status, guardrails, compensation table | 9 cards with titles + paragraphs |
| Vendor Lifecycle   | Internal view + vendor portal with real WO state, accept/decline, e-sig | Generic summary cards |
| Operational Intel  | Dashboard with views, KPIs, charts, filters, export                    | Single table + feature list |
