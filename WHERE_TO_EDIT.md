# Where to Edit What — Portfolio File Map

Use this when you want to change something on the site. **Ctrl+P** (or Cmd+P) and paste the path to open the file.

---

## Sidebar quick map (main pages → main file)

| Page | Primary file to open |
|------|----------------------|
| **Home** (first page you see at `/`) | **`src/app/page.tsx`** ← route/layout for homepage |
| **Home — the words (headline, subline, title)** | **`src/resources/content.tsx`** ← look for the `home` object (around line 83) |
| **Home — styles** | `src/app/page.module.scss` |
| **About** (`/about`) | `src/app/about/page.tsx` |
| **Work list** (`/work`) | `src/app/work/page.tsx` |
| **One project** (e.g. Sales-to-Delivery) | `src/app/work/[slug]/page.tsx` + `src/app/work/projects/*.mdx` |
| **Blog list** (`/blog`) | `src/app/blog/page.tsx` |
| **Gallery** (`/gallery`) | `src/app/gallery/page.tsx` |
| **Site shell** (nav, footer) | `src/app/layout.tsx` |

---

## 🏠 Home page (`/`) — the first page visitors see

**Two places control it:**

| What you want to change | File to open |
|------------------------|--------------|
| **Layout, sections, structure** (how the page is built) | **`src/app/page.tsx`** |
| **Words on the home page** (headline, subline, title, description, “featured” badge) | **`src/resources/content.tsx`** — find the `home` object (starts around line 83) |
| Home page styles | `src/app/page.module.scss` |
| Tech stack marquee (the scrolling tech strip) | `src/components/TechStackMarquee.tsx` |

---

## 👤 About page (`/about`)

| What you want to change | File to open |
|------------------------|--------------|
| Page layout & content | `src/app/about/page.tsx` |
| Skills section (the skills list) | `src/components/work/SkillsSection.tsx` |
| Your name, avatar, links (site-wide) | `src/resources/content.tsx` |

---

## 📂 Work landing page (`/work` — list of all projects)

| What you want to change | File to open |
|------------------------|--------------|
| Page layout & title | `src/app/work/page.tsx` |
| How the project cards look (grid, layout) | `src/components/work/Projects.tsx` |
| Styles for that grid | `src/components/work/Projects.module.scss` |
| Single project card (image, title, tagline, link) | `src/components/ProjectCard.tsx` |

---

## 📄 One project page (e.g. Sales-to-Delivery, `/work/sales-to-delivery-automation-platform`)

### Text content (title, summary, Problem, How It Works, Outcome)

| Project | File to open |
|---------|--------------|
| **Sales-to-Delivery Automation Platform** | `src/app/work/projects/sales-to-delivery-automation-platform.mdx` |
| **Vendor Lifecycle & Compliance Platform** | `src/app/work/projects/vendor-lifecycle-compliance-platform.mdx` |
| **Revenue & Financial Control Engine** | `src/app/work/projects/revenue-financial-control-engine.mdx` |
| **Operational Intelligence Platform** | `src/app/work/projects/operational-intelligence-platform.mdx` |

### Page layout (hero, demo box, article width, spacing)

| What you want to change | File to open |
|-------------------------|--------------|
| Structure (hero, demo, article, team) | `src/app/work/[slug]/page.tsx` |
| Styles for that page (hero, demo section, prose) | `src/app/work/[slug]/ProjectPage.module.scss` |

### Interactive mockup (the app preview)

| Project | Files to open |
|---------|----------------|
| **Sales-to-Delivery** | `src/components/demos/sales-to-delivery/SalesToDeliveryDemo.tsx`<br>`src/components/demos/sales-to-delivery/SalesOrderPanel.tsx`<br>`src/components/demos/sales-to-delivery/ProjectPanel.tsx`<br>`src/components/demos/sales-to-delivery/sales-to-delivery-demo.module.scss` |
| **Vendor Lifecycle** | `src/components/demos/vendor-lifecycle/VendorLifecycleDemo.tsx`<br>`src/components/demos/vendor-lifecycle/InternalVendorRecord.tsx`<br>`src/components/demos/vendor-lifecycle/VendorPortalView.tsx`<br>`src/components/demos/vendor-lifecycle/vendor-lifecycle-demo.module.scss` |
| **Revenue & Financial** | `src/components/demos/revenue-financial/RevenueFinancialDemo.tsx`<br>`src/components/demos/revenue-financial/revenue-financial-demo.module.scss` |
| **Operational Intelligence** | `src/components/demos/operational-intelligence/OperationalIntelligenceDemo.tsx`<br>`src/components/demos/operational-intelligence/operational-intelligence-demo.module.scss` |

### MDX building blocks (used inside the .mdx files above)

When you write the MDX, you use these by name. To change how they look:

| Component (used in MDX) | File to open |
|-------------------------|--------------|
| `<ProjectSection>`, `<HowItWorksCard>`, `<HowItWorksGrid>`, `<HeroStats>`, `<OutcomeStats>`, `<ProjectTechStack>`, SectionCard, StepCard, MetricCard, etc. | `src/components/work/ProjectCardComponents.tsx`<br>`src/components/work/HowItWorksCard.tsx`<br>`src/components/work/HeroStats.tsx`<br>`src/components/work/OutcomeStats.tsx`<br>`src/components/work/ProjectSection.tsx`<br>`src/components/work/ProjectTechStack.tsx` |
| Tech pills in project hero | `src/components/work/TechStack.tsx` |

---

## 📝 Blog (`/blog` and `/blog/[slug]`)

| What you want to change | File to open |
|-------------------------|--------------|
| Blog list page | `src/app/blog/page.tsx` |
| Single post layout | `src/app/blog/[slug]/page.tsx` |
| Post content (text) | `src/app/blog/posts/*.mdx` (one file per post) |

---

## 🖼 Gallery (`/gallery`)

| What you want to change | File to open |
|-------------------------|--------------|
| Gallery page | `src/app/gallery/page.tsx` |

---

## 🔧 Site-wide

| What you want to change | File to open |
|-------------------------|--------------|
| Nav, footer, layout shell | `src/app/layout.tsx` |
| Your name, avatar, social links, nav labels | `src/resources/content.tsx` |

---

## Quick reference: `src/components/work/` — what each file is for

| File | Used on |
|------|--------|
| `Projects.tsx` | **Work landing** (`/work`) — grid of project cards |
| `ProjectCardComponents.tsx` | **Project MDX** — SectionCard, StepCard, MetricCard, ProcessGrid, etc. |
| `HowItWorksCard.tsx` | **Project MDX** — How It Works blocks |
| `ProjectSection.tsx` | **Project MDX** — section wrapper |
| `ProjectTechStack.tsx` | **Project MDX** — tech stack block |
| `HeroStats.tsx` | **Project MDX** — hero stats |
| `OutcomeStats.tsx` | **Project MDX** — outcome stats |
| `TechStack.tsx` | **Project page hero** — tech pills (and elsewhere) |
| `SkillsSection.tsx` | **About page** — skills list |
| `ProjectDetails.module.scss` | Shared by `ProjectCardComponents` |

So: **work/** is used for the Work landing page, for project page MDX building blocks, and for the About page (SkillsSection). The name is a bit broad, but the table above shows exactly where each file is used.
