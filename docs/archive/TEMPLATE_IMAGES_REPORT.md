# Template images still appearing — audit

Where the **original site template** image paths are still used. Replace these with your own assets or remove references.

---

## 1. Missing files (template paths, no file in `public/`)

These paths are referenced in code but **the files do not exist** in your repo. They are template placeholders.

| Path | Where it's used |
|------|------------------|
| `/images/og/home.jpg` | **src/resources/content.tsx** — `home.image` (homepage OG/social image) |
| `/images/gallery/horizontal-1.jpg` | **src/resources/content.tsx** (gallery), **src/app/blog/posts/quick-start.mdx** (post image) |
| `/images/gallery/horizontal-2.jpg` | **src/resources/content.tsx** (gallery), **src/app/blog/posts/pages.mdx** |
| `/images/gallery/horizontal-3.jpg` | **src/resources/content.tsx** (gallery), **src/app/blog/posts/styling.mdx** |
| `/images/gallery/horizontal-4.jpg` | **src/resources/content.tsx** (gallery) |
| `/images/gallery/vertical-1.jpg` through `vertical-4.jpg` | **src/resources/content.tsx** (gallery) |
| `/images/gallery/img-02.jpg` | **src/app/blog/posts/blog.mdx** |
| `/images/avatar.jpg` | **src/app/blog/posts/content.mdx**, **src/app/blog/posts/work.mdx**, **src/app/api/rss/route.ts** (fallback) |

**Note:** There is no `public/images/gallery/` or `public/images/og/` folder. The **Gallery page** (`/gallery`) and **homepage image** therefore use template paths that 404 or fall back to something else unless you add files or change the config.

---

## 2. Template images that exist but are still template assets

These files **exist** in `public/images/` but are the **original template** assets (generic placeholders). Replace the files or the references with your own.

| Path | Where it's used | File exists? |
|------|------------------|--------------|
| `/images/avatar.png` | **src/resources/content.tsx** (`person.avatar`), **src/components/ThemeAwareAvatar.tsx** | Yes — replace file for your photo |
| `/images/projects/project-01/cover-01.svg` … `cover-04.svg` | **src/app/work/projects/sales-to-delivery-automation-platform.mdx** (Work project images) | Yes — template SVGs |
| `/images/projects/project-02/cover-01.svg` … `cover-04.svg` | **src/app/work/projects/vendor-lifecycle-compliance-platform.mdx** | Yes — template SVGs |
| `/images/projects/project-04/cover-01.svg` … `cover-04.svg` | **src/app/work/projects/operational-intelligence-platform.mdx** | Yes — template SVGs |

---

## 3. Wrong extension (template expects .jpg, repo has .svg)

Code expects **.jpg** but the file in the repo is **.svg**. Either add the .jpg files or change the references.

| Reference (in code) | Actual file in public |
|---------------------|------------------------|
| `/images/projects/project-01/cover-01.jpg` | `project-01/cover-01.svg` (and same for cover-02, -03, -04) |

**Where:** **src/app/blog/posts/components.mdx** (Card and Media examples) — 4 occurrences of `cover-01.jpg`.  
**Where:** **src/app/blog/posts/work.mdx** — `cover-02.jpg`, `image-03.jpg` (those .jpg files don’t exist).

---

## 4. Summary by file

- **src/resources/content.tsx** — Home image (`/images/og/home.jpg`), gallery (all 8 `/images/gallery/*.jpg`), person avatar (`/images/avatar.png`). Fix: add `og/home.jpg` or switch to OG API; add or replace gallery images; keep or replace `avatar.png`.
- **src/components/ThemeAwareAvatar.tsx** — `/images/avatar.png`. Replace the file or the path.
- **src/app/api/rss/route.ts** — Fallback `/images/avatar.jpg`. Change to `/images/avatar.png` to match your asset.
- **src/app/work/projects/*.mdx** (all 3 work projects) — Each lists 4 `project-0X/cover-0X.svg` images. Replace with your own mockup images (paths or files).
- **src/app/blog/posts/*.mdx** — Template doc posts (quick-start, pages, styling, blog, work, content) use gallery images, project-01 .jpg, and avatar.jpg. Update if you care about those posts; otherwise they’re just docs.

---

## 5. What to do

1. **Homepage / OG:** Add `public/images/og/home.jpg` or change `home.image` in **content.tsx** to a path that exists (e.g. a shared OG image or `/api/og/generate`).
2. **Gallery:** Add images under `public/images/gallery/` and keep the same names, or change **content.tsx** `gallery.images` to point to your own paths.
3. **Avatar:** Keep using `avatar.png` and replace `public/images/avatar.png` with your photo; in **src/app/api/rss/route.ts** change fallback from `avatar.jpg` to `avatar.png`.
4. **Work project images:** Replace the 4 cover SVGs per project with your real mockups (or new paths) and update the `images:` array in each **src/app/work/projects/*.mdx**.
5. **Blog doc posts:** In **components.mdx** and **work.mdx**, either point to existing assets (e.g. `.svg` or your images) or leave as-is if those posts are only internal docs.
