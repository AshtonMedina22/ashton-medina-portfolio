# What’s actually live on ashtonmedina.com

Use this to see **which files back each URL** and what’s **not used** so you can edit the right things and clean up the rest.

**Sidebar confusion?** → See **[COMPONENT_MAP.md](./COMPONENT_MAP.md)** for “this file = which page?” (global vs home vs about vs work vs unused).

---

## 1. Live routes (what’s on the site)

These URLs exist and are linked in the nav. Each row is **route → page file**.

| URL | Page file | Notes |
|-----|-----------|--------|
| **/** (Home) | `src/app/page.tsx` | Homepage layout |
| | `src/app/page.module.scss` | Home styles |
| | `src/resources/content.tsx` | `home` object (headline, subline, etc.) |
| **/about** | `src/app/about/page.tsx` | About page |
| | `src/components/about/about.module.scss` | About styles |
| | `src/resources/content.tsx` | `about` object; `person`, `social`, `techStack` |
| **/work** | `src/app/work/page.tsx` | Work list (all projects) |
| | `src/components/work/Projects.tsx` | Grid of project cards |
| | `src/components/work/Projects.module.scss` | |
| | `src/components/ProjectCard.tsx` | Single card |
| **/work/[slug]** (e.g. Sales-to-Delivery) | `src/app/work/[slug]/page.tsx` | **One template for all 4 project pages** |
| | `src/app/work/[slug]/ProjectPage.module.scss` | Project page styles |
| | `src/app/work/projects/sales-to-delivery-automation-platform.mdx` | Sales project **content** |
| | `src/app/work/projects/vendor-lifecycle-compliance-platform.mdx` | Vendor project content |
| | `src/app/work/projects/revenue-financial-control-engine.mdx` | Financial project content |
| | `src/app/work/projects/operational-intelligence-platform.mdx` | Operational project content |
| **/blog** | `src/app/blog/page.tsx` | Blog list |
| | `src/components/blog/Posts.tsx` | List of posts |
| **/blog/[slug]** (single post) | `src/app/blog/[slug]/page.tsx` | Post layout |
| | `src/app/blog/posts/*.mdx` | One file per post (all 11 are listed on /blog) |
| **/gallery** | `src/app/gallery/page.tsx` | Gallery page |
| | `src/components/gallery/GalleryView.tsx` | Gallery UI |

**Shared by (almost) every page**

- `src/app/layout.tsx` – Shell, nav, footer
- `src/components/Header.tsx` – Nav (Home, About, Work, Blog, Gallery)
- `src/components/Footer.tsx` – Footer
- `src/resources/content.tsx` – Site copy and paths
- `src/resources/custom.css` – Design tokens

---

## 2. Demos (only used inside project pages)

These **are** used: they’re embedded in the “Live Demo” block on each project page. They are **not** separate pages in the nav.

| Project | Demo component | Styles |
|---------|----------------|--------|
| Sales-to-Delivery | `src/components/demos/sales-to-delivery/SalesToDeliveryDemo.tsx` (+ SalesOrderPanel, ProjectPanel) | `sales-to-delivery-demo.module.scss` |
| Vendor Lifecycle | `src/components/demos/vendor-lifecycle/VendorLifecycleDemo.tsx` (+ InternalVendorRecord, VendorPortalView) | `vendor-lifecycle-demo.module.scss` |
| Revenue / Financial | `src/components/demos/revenue-financial/RevenueFinancialDemo.tsx` | `revenue-financial-demo.module.scss` |
| Operational Intelligence | `src/components/demos/operational-intelligence/OperationalIntelligenceDemo.tsx` | `operational-intelligence-demo.module.scss` |

---

## 3. Optional / alternate route (not in nav)

| URL | File | In use? |
|-----|------|--------|
| **/work/[slug]/demo** | `src/app/work/[slug]/demo/page.tsx` | **Standalone demo page** (e.g. `/work/sales-to-delivery-automation-platform/demo`). Not linked in nav; demos are embedded in the main project page. You can keep it for direct links or remove if you don’t need it. |

---

## 4. Not used on the live site

These are **not** rendered on any of the routes above (or only in a path that has no page).

| What | Where | Why “not used” |
|------|--------|-----------------|
| **Contact page** | — | No `src/app/contact/page.tsx`. `contact` exists in `content.tsx` but there is no /contact route. |
| **ContactSection** | `src/components/ContactSection.tsx` + `ContactSection.module.scss` | Exported but **never imported** on any page. Not visible anywhere. |
| **RouteGuard** | `src/components/RouteGuard.tsx` | Used in layout for protected routes; only matters if you use password-protected pages. |

---

## 5. Template / builder docs (not app code)

These are markdown/docs from the original template or builder. They don’t run on the site; they’re for your reference or cleanup.

**Moved to `docs/archive/`** (template/builder docs — not app code):

- `BEST_TOOL_FOR_ALL_VISUALS.md`
- `BUILDER_CURSOR_CLEANUP.md`
- `BUILDER_IO_INSTALL_COMMAND.txt`
- `BUILDER_IO_MOCKUP_PROMPTS.md`
- `EXACT_IMAGE_PROMPTS.md`
- `IMAGE_CREATION_PLAN.md`
- `IMAGE_GUIDE.md`
- `PRODUCTION_READINESS.md`
- `TEMPLATE_IMAGES_REPORT.md`
- `VISILY_AI_PROMPTS.md`

**In `docs/`** (planning / verification — still in use if you reference them):

- `docs/FINAL_BUILD_PLAN.md`
- `docs/PLAN_OPERATIONAL_INTELLIGENCE_DEMO.md`
- `docs/PLAN_REVENUE_FINANCIAL_DEMO.md`
- `docs/PLAN_TYPOGRAPHY_AND_GRIDS.md`
- `docs/PLAN_VENDOR_LIFECYCLE_DEMO.md`
- `docs/VERIFICATION_STEPS_1-8.md`

---

## 6. Quick “where do I edit?” list

| I want to change… | File(s) |
|-------------------|--------|
| Homepage layout / sections | `src/app/page.tsx`, `src/app/page.module.scss` |
| Homepage words (headline, etc.) | `src/resources/content.tsx` → `home` |
| About page | `src/app/about/page.tsx`, about styles, `content.tsx` → `about` / `person` |
| Work list (card grid) | `src/app/work/page.tsx`, `Projects.tsx`, `ProjectCard.tsx` |
| **Any project page layout** (hero, demo, article) | `src/app/work/[slug]/page.tsx`, `ProjectPage.module.scss` |
| One project’s **text** (e.g. Sales-to-Delivery) | `src/app/work/projects/sales-to-delivery-automation-platform.mdx` |
| One project’s **Live Demo** UI | `src/components/demos/<project-name>/` (see table in §2) |
| Blog list | `src/app/blog/page.tsx`, `Posts.tsx` |
| A blog post | `src/app/blog/posts/<slug>.mdx` |
| Gallery | `src/app/gallery/page.tsx`, `GalleryView.tsx` |
| Nav / footer | `src/components/Header.tsx`, `Footer.tsx`, `layout.tsx` |
| Site-wide copy / links | `src/resources/content.tsx` |

---

## 7. Summary

- **Live pages:** Home (`page.tsx`), About, Work, Work/[slug] (4 MDX), Blog, Blog/[slug] (11 posts), Gallery.  
- **Demos:** Only the four under `src/components/demos/` are used; they’re embedded in project pages.  
- **Not used on the live site:** Contact page (missing), ContactSection (never used), standalone `/work/[slug]/demo` (optional).  
- **Template docs:** Moved to `docs/archive/` (see that folder’s README).

Use **WHERE_TO_EDIT.md** for per-section editing; use this file to see what’s actually live vs unused.
