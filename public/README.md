# What’s in `public/`

Static assets served at the site root. Nothing here is “secret” — it’s all requestable by URL.

---

## ✅ Yours (keep)

| Path | Purpose |
|------|---------|
| `images/avatar.png` (and avatar variants) | Your photo — used in nav, about, OG. |

---

## 🗑 Template leftovers (removed)

~~**`trademarks/wordmark-light.svg`** and **`trademarks/wordmark-dark.svg`**~~ — Unused template wordmark files. **Already deleted.** The `trademarks/` folder was removed.

---

## 📁 Template placeholders (in use — replace when you can)

| Path | Used by | Note |
|------|--------|------|
| `images/projects/project-01/cover-01.svg` … `cover-04.svg` | Sales-to-Delivery project MDX | Generic template SVGs. Replace with your own project art when ready. |
| `images/projects/project-02/` … `project-04/` (same) | Other 3 project MDX files | Same — template cover art. |

If you delete these without updating the MDX `image` fields, project hero images will 404. Either keep them or replace the files and/or paths.

---

## ❌ Referenced but missing (see TEMPLATE_IMAGES_REPORT.md)

- `images/og/home.jpg` — homepage OG image (content.tsx)
- `images/gallery/*.jpg` — gallery + some blog posts

Either add real files at those paths or change the references (e.g. to `/api/og/generate?title=...` or your own images).
