# Issues identified + how we fix them

## ISSUES (what’s wrong)

1. **Section gradient overlay on top of your background**  
   Every section with the class `sectionHue` has a **::before** pseudo-element that draws a **violet (top-left) + cyan (top-right) radial gradient** over the section. That overlay sits **on top of** your existing dark page background. So you get:
   - Your original dark background
   - Plus a hazy violet/cyan layer on top  
   Result: muddy, “updated colors on top of original background,” not a single clean surface.

2. **Card/panel backgrounds are tinted gradients**  
   Several components use gradients that mix `--accent-soft` or `--cyan-soft` with the base color:
   - About: focus area cards, technical cards
   - Work: project card container
   - HowItWorksCard, ContactSection infoBox, ProjectDetails section cards  
   On dark theme these read as **tinted overlays on dark**, which adds to the muddy, inconsistent look instead of clean panels.

3. **Inconsistent treatment**  
   Some areas get the haze/tints, others (e.g. nav, some buttons) stay flat. The mix of “new” overlays and “original” surfaces makes the site feel half-finished and clashing.

4. **Alignment**  
   Tech pills and some content were left-aligned in places; we’ve addressed centering in code, but the main visual complaint is the **background and card treatment**, not alignment alone.

---

## HOW WE FIX IT (clean, smooth, professional)

1. **Remove the section hue overlay**  
   - **Disable** the `.sectionHue::before` background (set to `none` or remove the pseudo-element).  
   - Sections will use **only** your original page/section background — no violet/cyan layer on top.  
   - We keep the `sectionHue` wrapper where it’s used for layout; it just no longer paints anything.

2. **Revert card/panel backgrounds to solid**  
   - **About:** focus area cards and technical cards → solid `var(--surface-background)`.  
   - **Work:** project card container → solid `var(--surface-background)` or `var(--neutral-alpha-weak)`.  
   - **HowItWorksCard** → solid `var(--neutral-background-medium)`.  
   - **ContactSection** .infoBox → solid `var(--neutral-background-medium)` (dark and light).  
   - **ProjectDetails** .sectionCard → solid `var(--brand-alpha-weak)`.  
   No gradient tints on cards; depth comes from **shadow and border** only.

3. **Keep (do not remove)**  
   - **CTA gradient buttons** (View Project, primary with `.ctaGradient`) — these are intentional and not the cause of the mud.  
   - **Shadow tokens** (`--shadow-subtle`, `--shadow-soft`) and **transitions** for polish.  
   - **Centered tech pills** and any layout/alignment improvements already made.

4. **Result**  
   - One **clean background** (your original dark/light).  
   - **Solid cards** with subtle shadow/border.  
   - **Accent only** where it belongs: links, primary buttons, maybe a thin accent line on a card — not as a haze over the whole page.
