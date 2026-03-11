# Project page typography — before and after

## Current sizes (before fix)

| Element | Desktop | Tablet (768px) | Mobile (480px) |
|--------|---------|-----------------|----------------|
| **Hero title (h1)** | clamp(2rem, 5vw, **2.5rem**) = **32–40px** | 2rem = 32px | 1.75rem = 28px |
| **Hero tagline** | 1.125rem = 18px | 1rem = 16px | 0.9375rem = 15px |
| **Article h2** | **1.75rem = 28px** | 1.5rem = 24px | — |
| **Article h3** | 1.25rem = 20px | 1.25rem = 20px | 1.125rem = 18px |
| **Body (paragraphs, list items)** | **1rem = 16px** | 1rem = 16px | 0.9375rem = 15px |

**Why it felt off:** Hero title goes up to **40px** while body is **16px** — a 2.5× gap. Article h2 is **28px** and body **16px** — another big drop. So the heading reads huge and the rest reads small.

---

## After fix (balanced scale)

- **Hero title:** Smaller so it doesn’t dominate — clamp(1.5rem, 4vw, 2rem) → **24–32px**.
- **Hero tagline:** 1.125rem (18px) unchanged.
- **Article h2:** 1.5rem (**24px**) so it’s clearly a section head but not giant.
- **Article h3:** 1.125rem (**18px**).
- **Body:** 1.0625rem (**17px**) for better readability and a smaller jump from headings.

Result: Clear hierarchy without an oversized heading and undersized body.
