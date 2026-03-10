# CodeAcademy review: Vendor Lifecycle (Vendor Management & Portal) demo

This doc captures the **Vendor Lifecycle demo–specific** updates from CodeAcademy. Text content and grids for the Vendor project page are covered by the **all-project** work in [PLAN_TYPOGRAPHY_AND_GRIDS.md](PLAN_TYPOGRAPHY_AND_GRIDS.md).

---

## Scope

- **VendorLifecycleDemo** (`VendorLifecycleDemo.tsx`) and its children: **InternalVendorRecord**, **VendorPortalView**
- **Styles:** `vendor-lifecycle-demo.module.scss`
- **No global style.css:** Use local variables in the demo module aligned with design system and Sales demo (`$blue`, `$green`, `$border`, `$bg`, `$card-bg`, `$text`, `$text-muted`, plus spacing). Do not `@import` a global style.css.

---

## 1. App shell (same pattern as Sales)

Wrap the entire demo in a shell so it reads as a single product UI.

**VendorLifecycleDemo.tsx**
- Root: `<div className={styles.shell}>`
- Inside: `<div className={styles.shellTopBar}>` with:
  - `<div className={styles.windowDots}>` with three `<span />` (red / yellow / green)
  - `<span className={styles.shellTitle}>Vendor Management & Portal</span>`
- Then: `<div className={styles.demoContent}>` wrapping:
  - `<InternalVendorRecord />`
  - `<VendorPortalView />`
  - (Optionally keep existing section labels; do not add a tab bar or view toggle — live site does not use it.)

**vendor-lifecycle-demo.module.scss**
- **.shell:** border-radius 1rem, border, background (e.g. radial gradient + base), box-shadow, overflow hidden, width 100%.
- **.shellTopBar:** flex, align center, gap, padding (~0.5rem 0.9rem), border-bottom, background gradient.
- **.windowDots:** flex, gap; each span 0.45rem circle; nth-child(1) red, (2) yellow, (3) green (same as Sales).
- **.shellTitle:** small font (e.g. 0.75rem), muted color, flex-grow 1, text-align center.
- **.demoContent:** flex column, background; contains both panels.

---

## 2. Section labels (no tab bar or view toggle)

**Live site verified:** The Vendor page at ashtonmedina.com shows "INTERNAL VIEW" as a static label; there is no interactive toggle or tab bar. Do not add a view toggle or replace the existing section labels with a single tab bar.

- If the repo keeps `sectionDivider` / `sectionDividerPortal`, style them as **simple section headers** (small font, muted color, minimal padding) rather than heavy divider bars.
- Do not add .viewToggleHeader or tab-style UI.


---

## 3. Variables (local, no global import)

In `vendor-lifecycle-demo.module.scss` define or keep local variables aligned with Sales and design system:

- Colors: `$blue`, `$green`, `$border`, `$bg`, `$card-bg`, `$text`, `$text-muted` (match Sales demo / custom.css).
- Spacing: `$space-xs`, `$space-sm`, `$space-md`, `$space-lg`, `$space-xl` (e.g. 0.5rem, 1rem, 1.5rem, 2rem, 3rem).
- Type: `$font-size-xs`, `$font-size-sm`, `$font-size-h3`, `$font-size-h4` (e.g. 0.75rem, 0.875rem, 1.25rem, 1.125rem).

Use these for all panel and component styles below instead of hard-coded values or importing a global file.

---

## 4. Panel and component styling

Apply consistent padding, type scale, and hierarchy using the local variables.

- **.internalPanel, .portalPanel:** padding `$space-lg` `$space-xl`, background `$card-bg`, border, margin-bottom `$space-lg` (last child 0). Border-radius 0 at panel level (shell has the radius).
- **.panelTitle:** font-size `$font-size-h3` (1.25rem), font-weight 600, color `$text`, margin 0 0 `$space-xs` 0.
- **.panelSubtitle:** font-size `$font-size-sm`, color `$text-muted`, margin 0.
- **.sectionHeading:** font-size `$font-size-h4`, font-weight 600, color `$text`, margin `$space-md` 0 `$space-sm` 0, padding-bottom `$space-xs`, border-bottom.
- **.detailLabel, .detailValue:** color `$text-muted` / `$text`, font-size `$font-size-sm`.
- **.badgeSuccess:** background/border/color with green; font-size `$font-size-xs`.
- **.pillBtn:** blue tint background/border/color; font-size `$font-size-sm`.
- **.tag, .tagPrimary:** background, border, color; font-size `$font-size-xs`; tagPrimary uses blue.
- **.table:** font-size `$font-size-sm`; th padding `$space-xs` `$space-sm`, font-size `$font-size-xs`, muted color, header background; td padding `$space-sm`; optional striping and hover.
- **.statusPill:** font-size `$font-size-xs`.
- **.summaryCard:** padding `$space-md`, border, background, box-shadow; inner text `$font-size-sm`; icon size e.g. 1.25rem.
- **.workOrderCard:** padding `$space-lg`, border, background, border-radius `$space-sm`; h3 `$font-size-h4`, margin 0 0 `$space-md` 0; buttons padding `$space-sm` `$space-md`, font-size `$font-size-sm`; signatureLine border-top dashed, padding-top `$space-sm`, font-size `$font-size-sm`, muted color.

---

## 5. Implementation order

1. Add local variables to `vendor-lifecycle-demo.module.scss` (no @import).
2. In `VendorLifecycleDemo.tsx`, add shell → shellTopBar (dots + title) → demoContent.
3. Add `.shell`, `.shellTopBar`, `.windowDots`, `.shellTitle`, `.demoContent` in SCSS.
4. Optionally restyle existing section labels (sectionDivider/sectionDividerPortal) as simple headers; do not add a tab bar or view toggle.
5. Apply panel and component classes (internalPanel, portalPanel, panelTitle, sectionHeading, table, summaryCard, workOrderCard, badgeSuccess, pillBtn, tag, etc.) using the spacing and type variables.

After this, the Vendor demo will match the Sales demo in structure (app shell, consistent type/spacing) and be ready for the shared “mockup below text” + mockup section on the project page.
