# Color scheme consistency audit (CodeAcademy-style update)

## Summary

The CodeAcademy-style update was **partially applied**. Tokens and section hues exist in `custom.css`, but only **About** and **Work project cards** use the new shadow/transition tokens. **sectionHue** (violet + cyan dual radial) is only on **Home** and **About**; Work list, Work project detail, Blog, and Gallery do not use it.

---

## 1. What’s in custom.css (correct)

- **Tokens:** `--accent-cyan`, `--accent-soft`, `--accent-soft-strong`, `--cyan-soft`, `--shadow-soft`, `--shadow-subtle`, `--transition-fast`, `--transition-med`.
- **Section hue:** `.sectionHue::before` with dual violet (top-left) + cyan (top-right) radials for dark/light.

---

## 2. sectionHue usage

| Page/area              | sectionHue used? |
|------------------------|-------------------|
| Home (`app/page.tsx`)  | Yes (2 wrappers)  |
| About (`app/about/page.tsx`) | Yes (5 wrappers) |
| Work list (`app/work/page.tsx`) | **No**  |
| Work project (`app/work/[slug]/page.tsx`) | **No**  |
| Blog (`app/blog/page.tsx`)     | **No**  |
| Gallery (`app/gallery/page.tsx`) | **No**  |

---

## 3. New token usage (shadows + transitions)

| Component / file                 | --shadow-subtle/--shadow-soft | --transition-fast/--transition-med |
|---------------------------------|-------------------------------|------------------------------------|
| About focus cards (`about.module.scss`) | Yes | No (uses 0.2s ease) |
| Work ProjectCard (`ProjectCard.module.scss`) | Yes | Yes (--transition-med) |
| Work ProjectPage (`ProjectPage.module.scss`) | **No** (uses $shadow-lg, hardcoded) | **No** ($transition) |
| ProjectDetails (`ProjectDetails.module.scss`) | **No** ($shadow-sm/md/hover) | **No** ($transition) |
| HowItWorksCard                   | **No**                         | **No** (0.3s cubic-bezier) |
| HeroStats / OutcomeStats         | **No** (no shadows on stat blocks) | N/A |
| ContactSection .infoBox         | **No**                         | N/A |
| custom.css content links        | N/A                            | **No** (0.15s ease) |

---

## 4. Fixes applied (this pass)

1. **sectionHue:** Wrapped main content sections on Work list, Blog, and Gallery with `sectionHue` where appropriate.
2. **ProjectPage.module.scss:** Hero image and demo section use `var(--shadow-subtle)` / `var(--shadow-soft)` and `var(--transition-med)`.
3. **ProjectDetails.module.scss:** Section/step cards use `var(--shadow-subtle)` / `var(--shadow-soft)` and `var(--transition-med)` (replacing local $shadow-* and $transition where it fits).
4. **HowItWorksCard, HeroStats, OutcomeStats:** Cards/stat blocks use `--shadow-subtle`, `--shadow-soft` on hover, and `--transition-med` for transitions.
5. **ContactSection:** `.infoBox` uses `--shadow-subtle` for consistency.
6. **custom.css:** Content link transition set to `var(--transition-fast)`.

Result: Same violet + cyan section feel and card/panel treatment across Home, About, Work (list + detail), Blog, and Gallery.

---

## 5. Buttons & cards — gradients and glows (second pass)

**Previously:** Buttons and cards used solid violet (`--brand-solid-medium`) only; no CodeAcademy-style violet→cyan gradients or accent-soft/cyan-soft tints.

**Now:**

- **Primary CTAs / buttons**
  - `custom.css`: `[data-variant="primary"]` and `.ctaGradient` use `linear-gradient(135deg, var(--color-accent), var(--accent-cyan))`, violet/cyan glow on hover, and transition tokens.
  - **ProjectCard** `.ctaLink`: same gradient and glow (replaced solid violet and blue hover shadow).
  - **ContactSection** primary Button and **not-found** Button: `className="ctaGradient"` so they get the gradient when the design system forwards `className`.

- **Cards / panels — subtle tints**
  - **About** focus area cards: `background` = `linear-gradient(135deg, var(--accent-soft) 0%, var(--surface-background) 35%)` (violet tint).
  - **About** technical cards: `linear-gradient(160deg, var(--cyan-soft) 0%, var(--surface-background) 50%)` (cyan tint).
  - **ProjectCard** container: `linear-gradient(160deg, var(--cyan-soft) 0%, var(--surface-background) 40%)`.
  - **HowItWorksCard**: `linear-gradient(135deg, var(--accent-soft) 0%, var(--neutral-background-medium) 45%)`.
  - **ContactSection** `.infoBox`: `linear-gradient(160deg, var(--cyan-soft) 0%, var(--neutral-background-medium) 50%)` (and same for light theme).
  - **ProjectDetails** `.sectionCard`: `linear-gradient(135deg, var(--accent-soft-strong) 0%, var(--brand-alpha-weak) 40%)`.
