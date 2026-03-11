# Component map — sidebar = folder = page

**Your sidebar is now organized by folder.** No need to open this file to navigate — the folder names tell you what each file is for.

---

## Folder = what it’s for

| Folder | Used on |
|--------|--------|
| **layout/** | Every page (Header, Footer, nav, theme, route guard) |
| **shared/** | Project pages + blog posts (MDX renderer, anchor scroll, breakpoints) |
| **home/** | Homepage only |
| **about/** | About page only |
| **work/** | Work list (/work) + project page content (cards, hero stats, tech stack, etc.) |
| **blog/** | Blog list + single post (Posts, Mailchimp, ShareSection) |
| **gallery/** | Gallery page only |
| **demos/** | One subfolder per project’s “Live Demo” block (sales-to-delivery, vendor-lifecycle, etc.) |
| **archive/** | Unused components (ContactSection, HeadingLink, TableOfContents) — safe to delete |

---

## Quick lookup (if you’re in a file and forget)

| If you’re in… | It’s for… |
|----------------|-----------|
| layout/ | **Every page (global)** |
| shared/ | **Project + blog** (MDX, ScrollToHash) |
| home/ | **Home** |
| about/ | **About** |
| work/ | **Work list + project pages** |
| blog/ | **Blog** |
| gallery/ | **Gallery** |
| demos/* | **That project’s Live Demo** |
| archive/ | **Nothing (unused)** |

---

**Routes and page files:** See **LIVE_SITE_MAP.md** for URL → page file.  
**“Where do I edit X?”:** See **WHERE_TO_EDIT.md**.
