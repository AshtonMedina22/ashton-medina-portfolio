# Image Guide for Portfolio Projects

## 📍 CURRENT IMAGE SETUP

### Where Images Are Located
```
public/images/projects/
  └── project-01/          ← EXISTING (template placeholder images)
      ├── cover-01.jpg     ← Currently used by all 3 projects
      ├── cover-02.jpg     ← Currently used by all 3 projects
      ├── cover-03.jpg     ← Currently used by all 3 projects
      ├── cover-04.jpg     ← Currently used by all 3 projects
      ├── image-01.jpg
      ├── image-02.jpg
      ├── image-03.jpg
      ├── avatar-01.jpg
      └── video-01.mp4
```

### Current Configuration

**All 3 projects are currently using the SAME placeholder images from `project-01` folder:**

1. **Sales-to-Delivery Automation Platform** → Uses: `cover-01.jpg, cover-02.jpg, cover-03.jpg, cover-04.jpg`
2. **Vendor Lifecycle & Compliance Platform** → Uses: `cover-02.jpg, cover-03.jpg, cover-04.jpg, cover-01.jpg`
3. **Operational Intelligence Platform** → Uses: `cover-03.jpg, cover-04.jpg, cover-01.jpg, cover-02.jpg`

**These are TEMPLATE PLACEHOLDER images** - not your actual project images.

---

## 🎯 WHAT IMAGES YOU NEED

### Recommended Image Structure

Create 3 new folders with project-specific images:

```
public/images/projects/
  ├── project-01/                    ← Keep existing (template)
  ├── sales-to-delivery/              ← CREATE THIS
  │   ├── cover-01.jpg               ← Main hero image
  │   ├── cover-02.jpg               ← Workflow diagram/screenshot
  │   ├── cover-03.jpg               ← Technical architecture view
  │   └── cover-04.jpg               ← Dashboard/UI view
  ├── vendor-lifecycle/               ← CREATE THIS
  │   ├── cover-01.jpg               ← Main hero image
  │   ├── cover-02.jpg               ← Portal/security view
  │   ├── cover-03.jpg               ← Compliance tracking UI
  │   └── cover-04.jpg               ← RFQ comparison interface
  └── operational-intelligence/       ← CREATE THIS
      ├── cover-01.jpg               ← Main hero image
      ├── cover-02.jpg               ← Dashboard view
      ├── cover-03.jpg               ← KPI/metrics visualization
      └── cover-04.jpg               ← Analytics/data pipeline view
```

---

## 📸 WHAT KIND OF IMAGES TO GET/CREATE

### For Each Project, Get 4 Images:

### 1. Sales-to-Delivery Automation Platform

**Image 1 (cover-01.jpg)**: Hero/Overview
- Workflow diagram showing: Lead → Quote → Order → Automation → Project
- Or: Platform dashboard showing automation in action
- Style: Clean, professional, shows the automation flow

**Image 2 (cover-02.jpg)**: Technical Architecture
- System architecture diagram
- Or: Code/configuration showing automation triggers
- Style: Technical but readable, shows engineering depth

**Image 3 (cover-03.jpg)**: Workflow/Process
- Task generation interface
- Or: Project creation workflow
- Style: UI screenshot or process diagram

**Image 4 (cover-04.jpg)**: Results/Impact
- Dashboard showing consistency metrics
- Or: Before/after comparison
- Style: Data visualization, metrics, results

---

### 2. Vendor Lifecycle & Compliance Platform

**Image 1 (cover-01.jpg)**: Hero/Overview
- Vendor portal interface
- Or: Security/compliance workflow diagram
- Style: Professional, security-focused

**Image 2 (cover-02.jpg)**: Security/Portal
- Vendor portal login/access view
- Or: Token-based access diagram
- Style: Security-focused, clean interface

**Image 3 (cover-03.jpg)**: Compliance Tracking
- Compliance document tracking interface
- Or: Work order lifecycle view
- Style: Compliance-focused, organized

**Image 4 (cover-04.jpg)**: RFQ/Comparison
- RFQ comparison interface
- Or: Multi-vendor quote evaluation
- Style: Comparison view, decision-making interface

---

### 3. Operational Intelligence Platform

**Image 1 (cover-01.jpg)**: Hero/Overview
- Executive dashboard overview
- Or: KPI aggregation pipeline diagram
- Style: Data-rich, executive-level view

**Image 2 (cover-02.jpg)**: Dashboard View
- Role-filtered dashboard
- Or: Real-time metrics display
- Style: Clean dashboard, professional

**Image 3 (cover-03.jpg)**: Analytics/Visualization
- KPI visualization
- Or: Margin/readiness indicators
- Style: Charts, graphs, data visualization

**Image 4 (cover-04.jpg)**: Technical/Data Pipeline
- Data aggregation architecture
- Or: Analytics engine diagram
- Style: Technical, shows data engineering

---

## 🛠️ HOW TO ADD YOUR IMAGES

### Option 1: Use Actual Screenshots/Mockups
If you have access to the platforms:
1. Take screenshots of key interfaces
2. Create architecture diagrams
3. Export workflow visualizations
4. Save as JPG/PNG (1920x1080 recommended)

### Option 2: Create Professional Diagrams
Use tools like:
- **Figma** - Create professional diagrams
- **Draw.io** - Architecture/workflow diagrams
- **Excalidraw** - Quick technical sketches
- **Canva** - Professional graphics

### Option 3: Use AI-Generated Images
Use AI tools to create conceptual images:
- **Midjourney/DALL-E** - Generate platform concepts
- **ChatGPT/DALL-E** - Create technical diagrams
- Prompt: "Professional software platform dashboard, modern UI, clean design"

### Option 4: Keep Placeholders (Temporary)
- Current setup works for now
- Can launch with placeholders
- Replace later with actual images

---

## 📝 HOW TO UPDATE IMAGE PATHS

Once you have your images, update the frontmatter in each MDX file:

### Sales-to-Delivery Automation Platform
```yaml
images:
  - "/images/projects/sales-to-delivery/cover-01.jpg"
  - "/images/projects/sales-to-delivery/cover-02.jpg"
  - "/images/projects/sales-to-delivery/cover-03.jpg"
  - "/images/projects/sales-to-delivery/cover-04.jpg"
```

### Vendor Lifecycle & Compliance Platform
```yaml
images:
  - "/images/projects/vendor-lifecycle/cover-01.jpg"
  - "/images/projects/vendor-lifecycle/cover-02.jpg"
  - "/images/projects/vendor-lifecycle/cover-03.jpg"
  - "/images/projects/vendor-lifecycle/cover-04.jpg"
```

### Operational Intelligence Platform
```yaml
images:
  - "/images/projects/operational-intelligence/cover-01.jpg"
  - "/images/projects/operational-intelligence/cover-02.jpg"
  - "/images/projects/operational-intelligence/cover-03.jpg"
  - "/images/projects/operational-intelligence/cover-04.jpg"
```

---

## ✅ IMAGE SPECIFICATIONS

- **Format**: JPG or PNG
- **Dimensions**: 1920x1080 (16:9 aspect ratio) recommended
- **File Size**: Optimize for web (under 500KB per image)
- **Naming**: Use `cover-01.jpg`, `cover-02.jpg`, etc.
- **Quality**: High quality but web-optimized

---

## 🚀 CURRENT STATUS

**Right Now**: All 3 projects use placeholder images from `project-01` folder
**What You Need**: Create 3 new folders with 4 images each (12 images total)
**Priority**: Can launch with placeholders, replace with real images when ready
