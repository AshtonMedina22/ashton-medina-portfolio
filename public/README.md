# What's in `public/`

Static assets served at the site root. All requestable by URL.

---

## Assets

| Path | Purpose |
|------|---------|
| `images/avatar.png` (and variants) | Profile photo — nav, about, OG. |
| `images/projects/project-01/` … `project-04/` | Project hero/carousel images (see MDX `images` in each project). |

Update MDX `image` fields if you change or remove project image paths.

---

## Referenced but optional

- `images/og/home.jpg` — homepage OG image (content.tsx). Can use `/api/og/generate?title=...` instead.
- `images/gallery/*.jpg` — gallery and some blog posts.
