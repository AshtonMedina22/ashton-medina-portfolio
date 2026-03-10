# CodeAcademy review: Typography, text layout & project grids (detailed)

This addendum to the Sales-to-Delivery plan spells out **exact typography and spacing** and **concrete grid fixes** so text and project grids look professional and high-end.

---

## A. Typography & text content layout (professional / high-end)

### CodeAcademy vs your current values

| Element | CodeAcademy | Your current | Issue |
|--------|-------------|--------------|--------|
| **Body / paragraph** | 16px base, line-height 1.6, max-width 720px | 1.0625rem (17px), line-height 1.8, max-width 65ch (~520px) | Paragraphs slightly large and narrow; 65ch can feel tight. |
| **H1 (project title)** | 2.25rem (36px), line-height 1.1 | Hero: clamp(2.5rem, 6vw, 3.75rem) | Hero is very large; 2.25–2.5rem reads more “high-end”. |
| **H2 (Problem, How It Works, Outcome)** | 1.75rem (28px), line-height 1.25, margin-top 4rem (except first), margin-bottom 1.5rem | clamp(2rem, 5vw, 2.75rem) → up to 44px; margin-top 4rem, margin-bottom 2rem | H2 dominates; scale down and tighten margin-bottom. |
| **H3** | 1.25rem (20px) | clamp(1.25rem, 2.5vw, 1.5rem) | Close; keep or cap at 1.25rem. |
| **Section spacing** | margin-bottom 1.5rem under headings; 4rem between major sections | Mixed: h2 margin-bottom 2rem; grids 2.5–3rem top, 4rem bottom | Inconsistent; align to one spacing scale. |

### Concrete changes – [`ProjectPage.module.scss`](src/app/work/[slug]/ProjectPage.module.scss)

1. **Add at the top** (after existing `$radius-*` / `$shadow-*`):
   - **Font sizes:** `$font-size-base: 1rem`, `$font-size-h2: 1.75rem`, `$font-size-h3: 1.25rem`, `$font-size-h4: 1.125rem`
   - **Spacing:** `$space-sm: 1rem`, `$space-md: 1.5rem`, `$space-lg: 2rem`, `$space-xl: 3rem`, `$space-xxl: 4rem`
   - **Line heights:** `$line-height-body: 1.6`, `$line-height-heading: 1.25`

2. **Article prose (`.articleProse`)** – make this file the single source of truth for project page type:
   - **Paragraphs** (`.mdx-paragraph`): `font-size: $font-size-base`, `line-height: $line-height-body`, `max-width: 720px` (or `70ch`). `margin-bottom: $space-md`.
   - **H2** (`:global(h2)`): `font-size: $font-size-h2`, `line-height: $line-height-heading`, `margin-top: $space-xxl`, `margin-bottom: $space-md`. Keep `&:first-of-type { margin-top: 0 }`.
   - **H3** (`:global(h3)`): `font-size: $font-size-h3`, `margin-top: $space-xl`, `margin-bottom: $space-sm`.
   - **Lists** (`.mdx-list` / `.mdx-list-item`): `max-width: 720px` (or 70ch); `margin-bottom: $space-sm` between items.

3. **Hero:**
   - **.heroTitle:** `font-size: clamp(2rem, 5vw, 2.5rem)`, `line-height: 1.15`
   - **.heroTagline:** `font-size: 1.125rem`, `line-height: 1.6`, keep `max-width: 600px`

4. **Responsive:** In `@media (max-width: 768px)` and `480px`, use the same variables (e.g. slightly smaller `$font-size-h2`) so the scale stays consistent.

---

## B. Project grids – sizing and spacing (fixing “all fucked up”)

All three grids live inside the article (max-width 680px). CodeAcademy: **card styling, consistent gap, flexible columns**.

### HeroStats – [`HeroStats.module.scss`](src/components/work/HeroStats.module.scss)

| Aspect | Current | Target |
|--------|---------|--------|
| Layout | `repeat(4, 1fr)`, no gap; border-right/border-bottom only | Grid with **gap**; each cell is a **card** |
| Sizing | 4 columns in 680px → ~170px/cell | `repeat(auto-fit, minmax(160px, 1fr))` or keep 4 with gap |
| Card style | None | Background, border, border-radius 0.75rem, padding 1.5rem |
| Spacing | margin-top 3rem, margin-bottom 4rem | margin-top 2rem, margin-bottom 2.5rem; optional border-top |

**Changes:**
- **.statsContainer:** `gap: 1.5rem`; `grid-template-columns: repeat(auto-fit, minmax(160px, 1fr))`; remove `border-bottom`; optional `border-top: 1px solid var(--neutral-alpha-weak)` and `padding-top: 2rem`; `margin-top: 2rem`, `margin-bottom: 2.5rem`.
- **.statBlock:** Remove `border-right`. Add:
  - `background: var(--neutral-background-medium)` (or `var(--neutral-background-strong)` for dark theme)
  - `border: 1px solid var(--neutral-alpha-weak)`
  - `border-radius: 0.75rem`
  - `padding: 1.5rem`
- **.statValue:** `font-size: 1.75rem` (or `clamp(1.5rem, 3vw, 1.75rem)`), `margin-bottom: 0.5rem`.
- **.statLabel:** `font-size: 0.875rem`, optional `text-transform: uppercase`, `letter-spacing: 0.05em`.
- **Responsive (480px):** Keep single column; ensure padding and gap stay consistent (e.g. `padding: 1.25rem`, `gap: 1rem`).

### OutcomeStats – [`OutcomeStats.module.scss`](src/components/work/OutcomeStats.module.scss)

| Aspect | Current | Target |
|--------|---------|--------|
| Card style | `.statBlock` has `padding: 0` | Same card treatment as HeroStats |
| Spacing | margin-top 3rem | Align with HeroStats; optional border-top |

**Changes:**
- **.statsContainer:** `gap: 1.5rem`; optionally `grid-template-columns: repeat(auto-fit, minmax(160px, 1fr))`; optional `padding-top: 2rem` and `border-top: 1px solid var(--neutral-alpha-weak)`; `margin-top: 2rem`, `margin-bottom: 2.5rem`.
- **.statBlock:** Same as HeroStats: `background`, `border`, `border-radius: 0.75rem`, `padding: 1.5rem`. Keep `text-align: center` and brand-colored `.statValue`.
- **.statValue / .statLabel:** Match HeroStats sizes (e.g. 1.75rem / 0.875rem) for consistency.

### HowItWorksGrid / HowItWorksCard – [`HowItWorksCard.module.scss`](src/components/work/HowItWorksCard.module.scss)

| Aspect | Current | Target |
|--------|---------|--------|
| Grid | `repeat(3, 1fr)`, gap 1.75rem → 3 narrow columns at 680px | `repeat(auto-fit, minmax(280px, 1fr))`, gap 1.5rem, margin-top 2rem |
| Card | Transparent bg, **border-radius 0** | Background, border-radius 0.75rem, padding 1.5rem |

**Changes:**
- **.grid:** `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`; `gap: 1.5rem`; `margin-top: 2rem`. Keep `width: 100%`, `max-width: 100%`.
- **.card:** Add `background: var(--neutral-background-medium)` (or equivalent); `border-radius: 0.75rem`; set `padding: 1.5rem`. Keep existing border and hover.
- **.cardTitle:** Keep 1.125rem; `margin-bottom: 1rem`.
- **.cardContent:** `font-size: 0.875rem`, `line-height: 1.65`, `margin: 0`.
- **Responsive:** Keep single column at 640px; consistent padding/gap.

### One spacing scale for all grids

- **Gap between cards:** 1.5rem
- **Card padding:** 1.5rem
- **Grid margin-top:** 2rem
- **Grid margin-bottom:** 2.5rem (or match section rhythm)

Use the same values across HeroStats, OutcomeStats, and HowItWorksGrid so the whole project page feels consistent and high-end.
