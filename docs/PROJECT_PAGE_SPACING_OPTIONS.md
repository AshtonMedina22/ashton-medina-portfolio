# Project page spacing — options

Your sales project page had **large gaps** between sections (Outcome, Tech Stack, Live Demo) and between the hero tech pills and “Problem,” plus **inconsistent width** (narrow paragraph column vs wider cards). Below are four presets you can choose from. **Option A is applied by default** for a clean, professional look.

---

## Option A — **Tighter & consistent** (current / recommended)

- **Section headings (h2):** 2rem top, 1rem bottom (was 4rem / 1.5rem).
- **Article start:** 1.5rem top margin (was 3rem).
- **Hero:** Less top padding so nav → title feels closer.
- **Live Demo block:** 2.5rem above title, 1.5rem between title and caption (was 4rem + 3rem).
- **HeroStats / OutcomeStats / HowItWorks:** Smaller top/bottom margins and padding so blocks don’t feel disconnected.
- **One content width:** Prose and section content use the same max-width (e.g. 720px) so the “Problem” paragraph and the rest of the page feel like one column.

**Best for:** Clean, professional, high-end feel without looking cramped.

---

## Option B — **Editorial (generous but even)**

- Keep **one spacing step** between all sections (e.g. 2.5rem everywhere).
- Don’t reduce hero or Live Demo spacing as much; just make every section gap the same.
- Same unified content width as A (720px) so the narrow column is clearly intentional.

**Best for:** A more “magazine” feel with consistent rhythm.

---

## Option C — **Minimal / dense**

- **h2:** 1.25rem top, 0.75rem bottom.
- **Article:** 1rem top margin.
- **Hero:** 1rem top padding.
- **Component blocks:** 1rem margins.
- **Live Demo:** 1.5rem above, 1rem below title.

**Best for:** Content-heavy pages where you want less scrolling.

---

## Option D — **Width only (minimal change)**

- **No (or very small) changes to vertical spacing.**
- Only fix the “weird width”: make the main prose and section content share one max-width (e.g. 720px or 65ch) so the Problem paragraph and the cards don’t feel like they’re on different layouts.

**Best for:** You like the current gaps and only want the column width fixed.

---

## Where the values live

- **Project page layout:** `src/app/work/[slug]/ProjectPage.module.scss`  
  - `.hero`, `.articleProse`, `:global(h2)`, `:global(h3)`, `.mockupSection`, spacing variables at top.
- **Section blocks:**  
  - `src/components/work/HeroStats.module.scss`  
  - `src/components/work/OutcomeStats.module.scss`  
  - `src/components/work/HowItWorksCard.module.scss`  
  - `src/components/work/ProjectSection.module.scss`  

To switch to B, C, or D: adjust the same variables/classes using the numbers in the option descriptions above.
