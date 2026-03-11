# Accent and typography fix — professional, site-wide

## What was wrong

1. **Bright purple + light blue** only on Work page "View Project" buttons (and Contact/404 if they had the class). Felt unprofessional and inconsistent.
2. **No single accent** applied site-wide — gradient was isolated to a few CTAs.
3. **Project page sizing** still felt off: big heading vs small body.

---

## What we changed

### 1. One accent, site-wide (no bright gradient)

- **Removed** the violet→cyan gradient from all primary CTAs.
- **Defined** a single token in `custom.css`:
  - `--button-primary`: `var(--scheme-brand-500)` (#7c3aed — solid violet, not neon)
  - `--button-primary-hover`: `var(--scheme-brand-600)` (#a78bfa)
- **Applied** to:
  - **custom.css:** `[data-variant="primary"]` and `.ctaGradient` (so any primary Button or element with that class gets the same style).
  - **ProjectCard.module.scss:** `.ctaLink` (View Project) uses `--button-primary` and `--button-primary-hover`.
- **Result:** Every primary CTA (Work cards, Contact Email, 404 Back to home, and any future primary buttons) uses the **same solid violet**. No cyan, no gradient, one professional accent everywhere.

### 2. Links and focus

- Content links in `custom.css` already use `--brand-solid-medium` (violet).
- Focus outline for primary buttons now uses `--button-primary` so it matches.

### 3. Project page typography (tighter hierarchy)

- **Hero title:** `clamp(1.375rem, 3.5vw, 1.75rem)` → max **28px** (was 32px). Slightly smaller so it doesn’t dominate.
- **Hero tagline:** Uses `$font-size-base` (18px) so it matches body size.
- **Body:** `$font-size-base` = **1.125rem (18px)** so body isn’t tiny.
- **Article h2:** **1.375rem (22px)**.
- **Article h3:** **1.125rem (18px)**.
- **Responsive:** At 768px and 480px, hero and article sizes scale down in proportion.

Heading and body are closer in size so the hierarchy feels balanced instead of “huge title, tiny text.”

---

## Summary

- **Color:** One violet (`--button-primary` / `--button-primary-hover`) for all primary actions site-wide. No bright purple/blue gradient.
- **Typography:** Project page uses a tighter scale (18px body, 22px h2, hero max 28px) so sizing doesn’t look weird.
