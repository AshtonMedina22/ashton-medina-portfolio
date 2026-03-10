# `work/` — What each file is for

**Quick map:** See **`WHERE_TO_EDIT.md`** in the project root for “I want to change X on the site → open this file.”

| File | Used on |
|------|--------|
| **Projects** | `/work` landing page (grid of project cards) |
| **ProjectCardComponents** | Project MDX (SectionCard, StepCard, MetricCard, ProcessGrid, etc.) |
| **HowItWorksCard** | Project MDX (How It Works blocks) |
| **ProjectSection** | Project MDX (section wrapper) |
| **ProjectTechStack** | Project MDX (tech stack block) |
| **HeroStats** | Project MDX (hero stats) |
| **OutcomeStats** | Project MDX (outcome stats) |
| **TechStack** | Project page hero (tech pills) |
| **SkillsSection** | **About** page (skills list) |
| **ProjectDetails.module.scss** | Styles for ProjectCardComponents |

Project **text content** lives in **`src/app/work/projects/*.mdx`**, not here.  
Project **mockups** live in **`src/components/demos/`**.
