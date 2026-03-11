# Image Creation Prompts (For Figma or AI Tools)

**⚠️ IMPORTANT:** These prompts are complex. For best results, use **SIMPLE_IMAGE_PROMPTS.md** instead - those are clearer and work better with AI tools.

For manual creation in Figma, see **BEST_TOOL_FOR_ALL_VISUALS.md**.

## 🎯 HOW TO USE THESE PROMPTS

### **Option 1: Visily.ai (if you have access)**
1. Go to https://app.visily.ai/projects?type=team
2. Create a new project for each image
3. Use the exact prompt below in Visily's AI prompt field
4. Export as 1920x1080 (16:9) image
5. Save with the filename specified

### **Option 2: Figma (FREE) - RECOMMENDED**
- **Best choice:** Can create ALL images (covers, diagrams, everything)
- **Free tier:** Unlimited files, unlimited exports, no watermarks
- **How to use:** Use prompts below as design/layout guide, build manually in Figma
- **See:** `BEST_TOOL_FOR_ALL_VISUALS.md` for complete Figma guide

### **Option 3: Other FREE Tools**
- **Canva (FREE):** For cover images only
- **Draw.io (FREE):** For architecture diagrams only
- **See:** `FREE_IMAGE_CREATION_OPTIONS.md` for detailed guides

### **Option 3: Use Placeholders (Temporary)**
- Your site already works with placeholder images
- Can launch now, update images later
- See `PRODUCTION_READINESS.md` for current status

**Note:** These prompts are optimized for **high-end professional developer portfolios** - showcasing technical architecture, system design, and implementation depth that recruiters and hiring managers look for. Use them as design guides for any tool (free or paid).

## 🎯 WHAT MAKES THESE PROMPTS OPTIMIZED FOR DEVELOPER PORTFOLIOS

### **Technical Depth Shown:**
- ✅ **System Architecture** - Multi-layer architecture diagrams
- ✅ **API Design** - REST endpoints, request/response flows
- ✅ **Database Design** - ORM patterns, query optimization, data models
- ✅ **Security Implementation** - RBAC, JWT/OAuth, data isolation
- ✅ **Design Patterns** - Observer, State, Factory, Strategy patterns
- ✅ **Performance Optimization** - Caching, query optimization, aggregation
- ✅ **Code Structure** - File organization, function signatures, patterns
- ✅ **State Machines** - Workflow management, lifecycle transitions

### **What Recruiters & Hiring Managers See:**
- **Full-Stack Capabilities** - Backend (Python/ORM), Frontend (JavaScript), Database (PostgreSQL)
- **System Design Skills** - Architecture, scalability, integration patterns
- **Security Expertise** - RBAC, token-based auth, data isolation
- **Performance Awareness** - Caching, optimization, real-time systems
- **Modern Practices** - REST APIs, event-driven architecture, computed fields
- **Problem-Solving** - Complex workflows, data aggregation, automation

### **Why This Works:**
These visuals demonstrate **technical competency** that goes beyond "I built a website" - they show you understand:
- System architecture and design
- Database optimization and query performance
- Security best practices
- API design and integration
- Scalability considerations
- Modern development patterns

This is what separates **senior developers** from junior developers in portfolio reviews.

---

## 📦 PROJECT 1: Sales-to-Delivery Automation Platform

### **COVER IMAGE - Project Card Hero (Work Page)**
**Filename:** `sales-to-delivery-cover-01.jpg`  
**Purpose:** This is the FIRST image that appears on project cards on the `/work` page - needs to be visually striking and professional.

**Visily.ai Prompt:**
```
Create a professional hero cover image for a developer portfolio project card. Design a modern, visually striking composition: Left side (40%): Abstract technical visualization showing connected nodes and data flow lines in blue/green gradient, with subtle code-like patterns. Right side (60%): Clean white/light gray area with large bold text "AUTOMATED WORKFLOW" in dark blue, subtitle "Confirmed Transaction → Project Created → Tasks Generated → Ownership Assigned → Execution Ready" in smaller gray text. Include subtle geometric shapes, gradient overlays, and professional developer aesthetic. Use modern color scheme: Deep blue (#1E40AF), Green accent (#10B981), White (#FFFFFF), Light gray (#F3F4F6). Style: Professional, technical but approachable, portfolio-quality. 16:9 landscape layout, high contrast for visibility on cards.
```

---

### **IMAGE A - System Architecture Diagram**
**Filename:** `sales-to-delivery-cover-02.jpg` (moved to 2nd position)

**Visily.ai Prompt:**
```
Create a professional layered system architecture diagram mockup (NOT a flowchart). Design as horizontal stacked layers: Top horizontal layer (full width): "Event Layer" box spanning the top with "Transaction Confirmed" event trigger icon inside. Middle horizontal layer (full width): "Automation Engine" section with three side-by-side boxes: "Server-side Triggers", "State Machine", "Template Engine" connected horizontally with arrows between them. Bottom horizontal layer (full width): "Data Layer" section showing "PostgreSQL Database" as main box with "ORM Models", "Computed Fields", "Related Fields" shown as connected sub-components or labels. Right side (vertical column): "REST API Gateway" box positioned vertically on the right, with "External Systems" box below it, connected with arrows. Show vertical data flow arrows between layers: from Event Layer down to Automation Engine, from Automation Engine down to Data Layer. Show horizontal arrows within Automation Engine between components. Use modern layered architecture style with clean rectangular boxes, professional colors (blue, gray, green accents), technical labels, connection lines, and clear horizontal layer separation. 16:9 landscape layout.
```

---

### **IMAGE B - Data Flow & State Machine Diagram**
**Filename:** `sales-to-delivery-cover-03.jpg`

**Visily.ai Prompt:**
```
Create a professional data flow and state machine diagram mockup. Left side: "Data Flow" showing horizontal flow with boxes: "Transaction Model" → "Automation Trigger" → "Project Model" → "Task Template" → "Task Model" → "Owner Assignment". Show data propagation with labeled arrows: "Client Data", "Quote Data", "Project Config", "Task Structure". Right side: "State Machine" showing circular state diagram: "Draft" → "Confirmed" → "Project Created" → "Tasks Generated" → "Assigned" → "Ready" with state transition arrows labeled with conditions. Include technical details: "Event: on_confirm", "Validation: enforce_one_project", "Template: project_template_id", "Computed: readiness_score". Use professional technical diagram style with clean boxes, state circles, labeled connections, monospace font for code/IDs, professional colors (blue, gray, green for states), and clear technical annotations. 16:9 landscape layout.
```

---

### **IMAGE C - API & Integration Architecture**
**Filename:** `sales-to-delivery-cover-04.jpg`

**Visily.ai Prompt:**
```
Create a professional API and integration architecture mockup. Center: "REST API Gateway" with endpoints listed: "POST /api/transactions/{id}/confirm", "GET /api/projects/{id}", "POST /api/projects/{id}/tasks/generate". Left side: "External Systems" showing boxes: "Sales Module", "CRM System", "Project Management" with API connection arrows pointing to gateway. Right side: "Internal Services" showing boxes: "Automation Service", "Template Engine", "State Machine Engine" with internal API calls. Bottom: "Database Layer" showing "PostgreSQL" with "ORM Models", "Computed Fields", "Related Fields" connected. Include technical details: "Authentication: JWT", "Format: JSON", "Method: POST/GET", "Response: 200 OK". Show request/response flow with labeled arrows. Use modern API architecture style with clean boxes, REST endpoint notation, connection lines, professional colors (blue, gray, green accents), and technical annotations. 16:9 landscape layout.
```

---

### **IMAGE D - Implementation Code Structure & Patterns**
**Filename:** `sales-to-delivery-cover-05.jpg` (optional - for detail page carousel)

**Visily.ai Prompt:**
```
Create a professional code structure and design patterns mockup. Left side: "Code Structure" showing file tree: "models/transaction.py", "models/project.py", "models/task.py", "automation/triggers.py", "automation/templates.py", "api/endpoints.py". Middle section: "Design Patterns" showing boxes: "Observer Pattern (Event Triggers)", "Template Method (Task Generation)", "State Pattern (Workflow States)", "Factory Pattern (Project Creation)" with brief descriptions. Right side: "Key Functions" showing code-like snippets (pseudo-code style): "@on_confirm_trigger", "def create_project_from_transaction()", "def generate_tasks_from_template()", "computed_field('readiness_score')" with syntax highlighting colors. Include technical annotations: "ORM: SQLAlchemy-style", "Patterns: Design Patterns", "Architecture: Event-Driven". Use professional developer-focused style with monospace font for code, clean boxes, pattern labels, professional colors (dark background with syntax highlighting colors: blue, green, yellow), and clear technical presentation. 16:9 landscape layout.
```

---

## 📦 PROJECT 2: External Partner Lifecycle & Compliance Platform

### **COVER IMAGE - Project Card Hero (Work Page)**
**Filename:** `vendor-lifecycle-cover-01.jpg`  
**Purpose:** This is the FIRST image that appears on project cards on the `/work` page - needs to be visually striking and professional.

**Visily.ai Prompt:**
```
Create a professional hero cover image for a developer portfolio project card. Design a modern, visually striking composition: Left side (40%): Abstract security visualization showing shield icons, lock symbols, and secure connection lines in blue/purple gradient with security-focused aesthetic. Right side (60%): Clean white/light gray area with large bold text "SECURE PARTNER PORTAL" in dark blue, subtitle "Partner Approved → Assignment Created → Work Order Issued → Portal Access → Accept/Decline → Execution Complete" in smaller gray text. Include subtle security-themed geometric patterns, gradient overlays, and professional developer aesthetic. Use modern color scheme: Deep blue (#1E40AF), Purple accent (#7C3AED) for security, White (#FFFFFF), Light gray (#F3F4F6). Style: Professional, security-focused, portfolio-quality. 16:9 landscape layout, high contrast for visibility on cards.
```

---

### **IMAGE A - Security Architecture & RBAC Diagram**
**Filename:** `vendor-lifecycle-cover-02.jpg` (moved to 2nd position)

**Visily.ai Prompt:**
```
Create a professional layered security architecture diagram mockup (NOT a flowchart). Design as horizontal stacked layers: Top horizontal layer (full width): "Authentication Layer" box spanning the top with "JWT/OAuth Token", "Token-scoped Access", "Time-limited Sessions" shown inside. Middle horizontal layer (full width): "Authorization Layer" section with "RBAC Engine" box on left, showing three role boxes side-by-side: "Role: Partner", "Role: Internal", "Role: Admin", connected to "Permission Matrix" box on right showing "Read: Own Records", "Write: Work Orders", "Access: Portal Only". Bottom horizontal layer (full width): "Data Isolation Layer" showing "Internal System" box on left (with lock icon), "Security Boundary" as dashed vertical line in center (with shield icon), "External Portal" box on right (unlocked). Show "Data Filtering" as labels: "Partner sees: Own work orders only" and "Internal sees: All data". Show vertical flow arrows between layers: Authentication → Authorization → Data Isolation. Use professional layered architecture style with clean rectangular boxes, security boundaries, lock icons, professional colors (blue, gray, red for security, green for valid), and clear horizontal layer separation. 16:9 landscape layout.
```

---

### **IMAGE B - Portal Architecture & API Design**
**Filename:** `vendor-lifecycle-cover-03.jpg`

**Visily.ai Prompt:**
```
Create a professional portal architecture and API design mockup. Left side: "External Portal" showing "Partner Portal UI" with "Work Order List", "Document Upload", "Accept/Decline Actions" connected via "REST API" to center. Center: "API Gateway" showing endpoints: "GET /api/portal/work-orders", "POST /api/portal/work-orders/{id}/accept", "GET /api/portal/compliance/documents", "POST /api/portal/documents/upload" with authentication headers. Right side: "Internal System" showing "Work Order Service", "Compliance Service", "Document Management" with internal APIs. Bottom: "Database" showing "PostgreSQL" with "Security Rules", "Field Permissions", "Data Isolation" connected. Include technical details: "Auth: Bearer Token", "Format: JSON", "CORS: Enabled", "Rate Limiting: 100 req/min". Show request/response flow with labeled arrows. Use modern API architecture style with clean boxes, REST endpoints, security indicators, professional colors (blue, gray, green for secure, red for restricted), and technical annotations. Include badges: REST API, JWT, PostgreSQL, RBAC. 16:9 landscape layout.
```

---

### **IMAGE C - State Machine & Lifecycle Management**
**Filename:** `vendor-lifecycle-cover-04.jpg`

**Visily.ai Prompt:**
```
Create a professional state machine and lifecycle management diagram mockup. Center: "Work Order State Machine" showing circular state diagram: "Draft" → "Issued" → "Pending Acceptance" → "Accepted" → "In Progress" → "Completed" with state transition arrows labeled: "on_issue()", "on_accept()", "on_start()", "on_complete()". Left side: "Lifecycle Events" showing boxes: "Partner Approved", "Assignment Created", "Work Order Issued", "Portal Access Granted", "Accept/Decline Captured", "Execution Started", "Completion Recorded" with timestamps. Right side: "Automated Actions" showing boxes: "Scheduled Jobs: Reminder Emails", "Deadline Monitoring", "Compliance Alerts", "Document Expiry Checks" with cron-like notation "0 */6 * * *". Include technical details: "State: Enforced Transitions", "Events: Audit Logged", "Automation: Scheduled Jobs", "Validation: State Rules". Use professional state machine style with state circles, transition arrows, event labels, professional colors (blue for states, green for transitions, yellow for automation), and clear technical annotations. Include badges: State Machine, Scheduled Jobs, Event-Driven. 16:9 landscape layout.
```

---

### **IMAGE D - Security Implementation & Code Patterns**
**Filename:** `vendor-lifecycle-cover-05.jpg` (optional - for detail page carousel)

**Visily.ai Prompt:**
```
Create a professional security implementation and code patterns mockup. Left side: "Security Rules" showing code-like snippets (pseudo-code): "@security_rule('partner_access')", "def check_partner_permission()", "if user.role == 'partner':", "    return filter_by_partner_id()", "RBAC: role-based filtering" with syntax highlighting. Middle section: "Token Validation" showing: "@jwt_required", "def validate_token()", "claims = decode_jwt(token)", "check_expiry(claims)", "return user_context" with authentication flow. Right side: "Data Isolation" showing: "def get_work_orders()", "if is_partner(user):", "    return WorkOrder.filter(partner_id=user.partner_id)", "else:", "    return WorkOrder.all()" with isolation logic. Include technical annotations: "Pattern: Strategy Pattern (RBAC)", "Pattern: Decorator Pattern (Security)", "Architecture: Token-based Auth", "Isolation: Query-level Filtering". Use professional developer-focused style with monospace font for code, security-focused colors (dark background with syntax highlighting: blue, green, yellow, red for security), clean boxes, and clear technical presentation. Include badges: JWT, RBAC, Security Patterns. 16:9 landscape layout.
```

---

## 📦 PROJECT 3: Operational Intelligence Platform

### **COVER IMAGE - Project Card Hero (Work Page)**
**Filename:** `operational-intelligence-cover-01.jpg`  
**Purpose:** This is the FIRST image that appears on project cards on the `/work` page - needs to be visually striking and professional.

**Visily.ai Prompt:**
```
Create a professional hero cover image for a developer portfolio project card. Design a modern, visually striking composition: Left side (40%): Abstract data visualization showing connected data nodes, chart lines, and analytics patterns in blue/purple gradient with intelligence-focused aesthetic. Right side (60%): Clean white/light gray area with large bold text "REAL-TIME INTELLIGENCE" in dark blue, subtitle "Operational Records → Aggregation Queries → Computed KPIs → Derived Metrics → Role-Filtered Views → Dashboard Cards" in smaller gray text. Include subtle data-themed geometric patterns, gradient overlays, and professional developer aesthetic. Use modern color scheme: Deep blue (#1E40AF), Purple accent (#7C3AED) for intelligence, White (#FFFFFF), Light gray (#F3F4F6). Style: Professional, data-focused, portfolio-quality. 16:9 landscape layout, high contrast for visibility on cards.
```

---

### **IMAGE A - Data Aggregation Architecture**
**Filename:** `operational-intelligence-cover-02.jpg` (moved to 2nd position)

**Visily.ai Prompt:**
```
Create a professional layered data aggregation architecture diagram mockup (NOT a flowchart). Design as horizontal stacked layers: Top horizontal layer (full width): "Data Sources" section with four side-by-side boxes: "Sales Module", "Project Module", "Financial Module", "HR Module" with data flow arrows pointing down. Middle horizontal layer (full width): "Aggregation Engine" section showing "ETL Pipeline" as main box with five components shown inside or connected: "Data Extraction", "Join Operations", "Computed Fields", "Metric Calculation", "Caching Layer (Redis)" arranged horizontally or as sub-components. Bottom horizontal layer (full width): "Analytics Layer" section with four side-by-side boxes: "KPI Computation", "Role-based Filtering", "Dashboard Engine", "Real-time Updates". Show vertical data flow arrows between layers: Data Sources down to Aggregation Engine, Aggregation Engine down to Analytics Layer. Include technical details as labels: "Queries: Optimized JOINs", "Caching: Redis", "Computation: Computed Fields", "Updates: Sub-minute refresh". Use modern layered architecture style with clean rectangular boxes, vertical flow arrows, technical labels, professional colors (blue, gray, green for processing, yellow for cache), and clear horizontal layer separation. 16:9 landscape layout.
```

---

### **IMAGE B - KPI Computation & Query Optimization**
**Filename:** `operational-intelligence-cover-03.jpg`

**Visily.ai Prompt:**
```
Create a professional KPI computation and query optimization diagram mockup. Left side: "Data Models" showing database schema representation: "Transaction Model", "Project Model", "Task Model", "User Model" with relationships (foreign keys) shown as connecting lines. Center: "Computed Fields" showing boxes: "@computed_field('readiness_score')", "@computed_field('profitability')", "@computed_field('workload')" with calculation formulas: "SUM(projects.ready) / COUNT(projects)", "SUM(revenue - cost)", "COUNT(tasks) / capacity". Right side: "Optimized Queries" showing SQL-like queries (pseudo-code): "SELECT ... FROM projects", "JOIN transactions ON ...", "WHERE role_filter(user)", "GROUP BY ...", "CACHE: 5min" with optimization notes: "Index: project_status", "Join: Optimized", "Filter: Role-based". Include technical details: "Aggregation: Multi-table JOINs", "Performance: Indexed Queries", "Caching: Redis", "Refresh: Real-time". Use professional database/query style with schema boxes, query notation, optimization indicators, professional colors (blue, gray, green for optimized, yellow for cache), and clear technical annotations. Include badges: SQL, PostgreSQL, Redis, ORM. 16:9 landscape layout.
```

---

### **IMAGE C - Dashboard Engine & Role-Based Views**
**Filename:** `operational-intelligence-cover-04.jpg`

**Visily.ai Prompt:**
```
Create a professional dashboard engine and role-based views architecture mockup. Top: "Role Filter" showing dropdown: "Executive", "Manager", "Operator" with "Current: Executive" selected. Middle left: "Data Aggregation" showing "All Systems Data" flowing into "Role Filter Engine" with filter rules: "Executive: All metrics", "Manager: Team metrics", "Operator: Own metrics". Middle right: "Dashboard Components" showing boxes: "KPI Cards", "Charts", "Drill-down Views", "Alerts" with connections showing "Filtered Data → Components → Render". Bottom: "Rendering Layer" showing "Dashboard UI" with "KPI: Readiness 95%", "Chart: Revenue Trend", "Alert: High Priority" with role-specific data displayed. Include technical details: "Filtering: Query-level", "Caching: Per-role", "Updates: Real-time", "Performance: <200ms render". Show data flow with labeled arrows: "Raw Data → Role Filter → Aggregation → Computation → Cache → Dashboard Render". Use modern dashboard architecture style with clean boxes, filter logic, component structure, professional colors (blue, gray, green for filtered, purple for roles), and clear technical annotations. Include badges: Role-Based Access, Dashboard Engine, Real-time. 16:9 landscape layout.
```

---

### **IMAGE D - Implementation: Computed Fields & Aggregation Code**
**Filename:** `operational-intelligence-cover-05.jpg` (optional - for detail page carousel)

**Visily.ai Prompt:**
```
Create a professional implementation code structure showing computed fields and aggregation patterns. Left side: "Computed Fields" showing code-like snippets (pseudo-code): "@computed_field('readiness_score')", "def compute_readiness()", "    ready = Project.filter(status='ready').count()", "    total = Project.count()", "    return (ready / total) * 100", "Cached: 5min" with syntax highlighting. Middle section: "Aggregation Queries" showing: "def get_kpi_metrics(role):", "    query = Project.select()", "    .join(Transaction)", "    .filter(role=role)", "    .aggregate('SUM', 'revenue')", "    return cache_or_compute(query)" with query optimization. Right side: "Dashboard API" showing: "@api.route('/dashboard/kpis')", "@role_required('executive')", "def get_dashboard_data()", "    metrics = compute_kpis(user.role)", "    return jsonify(metrics)" with API structure. Include technical annotations: "Pattern: Decorator Pattern (Computed)", "Pattern: Strategy Pattern (Role Filter)", "Architecture: Cached Aggregation", "Performance: Query Optimization". Use professional developer-focused style with monospace font for code, data-focused colors (dark background with syntax highlighting: blue, green, yellow, purple for data), clean boxes, and clear technical presentation. Include badges: Python, PostgreSQL, Redis, Aggregation Patterns. 16:9 landscape layout.
```

---

## 📋 IMAGE USAGE SUMMARY

### **Project Card Cover Images (Work Page)**
These are the **FIRST images** that appear on project cards on `/work` page:
- `sales-to-delivery-cover-01.jpg` - Hero cover for Sales-to-Delivery
- `vendor-lifecycle-cover-01.jpg` - Hero cover for Partner Platform
- `operational-intelligence-cover-01.jpg` - Hero cover for Intelligence Platform

**Purpose:** Visually striking, professional, catches attention when browsing work page.

### **Detail Page Carousel Images**
These appear in the carousel on individual project detail pages:
- `cover-02.jpg` - System Architecture / Technical Diagram
- `cover-03.jpg` - Data Flow / Implementation Diagram
- `cover-04.jpg` - API / Code Structure Diagram
- `cover-05.jpg` (optional) - Additional technical detail

**Purpose:** Show technical depth and implementation details for recruiters reviewing full project.

---

## 🎨 VISILY.AI SETTINGS FOR ALL IMAGES

### **Export Settings:**

#### **Dimensions (REQUIRED):**
- **Export from Visily.ai:** 1920x1080 pixels (16:9 aspect ratio)
- **Why:** This is 2x the display size for retina/high-DPI screens
- **Aspect Ratio:** Must be 16:9 (width:height)

#### **Display Sizes (How they appear on site):**
- **Project Cards (Work Page):** Max 640px wide × 360px tall (16:9)
- **Detail Page Carousel:** Full width (up to 960px) × auto height (16:9)
- **Mobile:** Full width of screen × auto height (16:9)

#### **File Format:**
- **Format:** JPG (recommended) or PNG
- **JPG Quality:** 85-90% (high quality, web-optimized)
- **PNG:** Only if you need transparency (not needed for these)

#### **File Size (IMPORTANT for web performance):**
- **Target:** 200-400 KB per image
- **Maximum:** 500 KB per image
- **Why:** Faster page loads, better user experience
- **How to optimize:** Use image compression tools after export (TinyPNG, Squoosh, ImageOptim)

#### **Resolution:**
- **DPI:** 72 DPI (standard for web)
- **Color Mode:** RGB (not CMYK)

### **Design Style Settings:**
- **Theme:** Modern Technical / Developer Portfolio
- **Color Palette:** 
  - Primary: Blue (#2563EB) for architecture/system elements
  - Secondary: Gray (#6B7280) for structure/containers
  - Accent: Green (#10B981) for success/optimization
  - Code: Dark background (#1F2937) with syntax highlighting colors
  - Security: Red (#EF4444) for security boundaries
- **Typography:** 
  - Headers: Clean sans-serif (Inter, Roboto)
  - Code: Monospace (Fira Code, JetBrains Mono style)
- **UI Style:** Technical, architecture-focused, developer portfolio quality
- **Icons:** Technical symbols (databases, APIs, code, architecture)

### **Layout Guidelines:**
- Use card-based layouts
- Generous white space
- Clear visual hierarchy
- Professional color scheme
- Minimal text (let visuals tell the story)
- High contrast for readability

---

## ✅ QUALITY CHECKLIST

Before exporting each image, verify:
- [ ] 16:9 aspect ratio (1920x1080)
- [ ] Professional, technical design
- [ ] Developer-focused (shows technical depth)
- [ ] Clear architecture/system design
- [ ] Consistent color scheme
- [ ] Readable code/technical annotations
- [ ] High contrast
- [ ] Technical accuracy (matches project content)
- [ ] Focuses on implementation and architecture
- [ ] Shows modern development practices
- [ ] Demonstrates system design skills
- [ ] NO tech stack icons/badges (they're displayed separately on project pages)

---

## 📁 FILE ORGANIZATION

After creating all images, organize them like this:

```
public/images/projects/
  ├── sales-to-delivery-automation/
  │   ├── cover-01.jpg (Problem Visual)
  │   ├── cover-02.jpg (Solution Interface)
  │   ├── cover-03.jpg (Impact Metrics)
  │   └── cover-04.jpg (Business Workflow)
  ├── vendor-lifecycle-compliance/
  │   ├── cover-01.jpg (Problem Visual)
  │   ├── cover-02.jpg (Solution Interface)
  │   ├── cover-03.jpg (Impact Metrics)
  │   └── cover-04.jpg (Business Workflow)
  └── operational-intelligence/
      ├── cover-01.jpg (Problem Visual)
      ├── cover-02.jpg (Solution Interface)
      ├── cover-03.jpg (Impact Metrics)
      └── cover-04.jpg (Business Workflow)
```

---

## 📏 EXACT IMAGE SPECIFICATIONS SUMMARY

### **For Visily.ai Export:**
```
Dimensions: 1920 × 1080 pixels
Aspect Ratio: 16:9 (required)
Format: JPG (85-90% quality)
File Size: 200-400 KB (optimize after export)
Resolution: 72 DPI
Color Mode: RGB
```

### **Why 1920×1080?**
- **2x resolution** for retina/high-DPI displays
- **Scalable down** to 640px (project cards) and 960px (detail pages)
- **Standard 16:9** matches your site's aspect ratio requirements
- **Future-proof** for larger displays

### **After Export - Optimization Steps:**
1. Export from Visily.ai at 1920×1080
2. Compress using TinyPNG.com or Squoosh.app
3. Target 200-400 KB file size
4. Verify 16:9 aspect ratio maintained
5. Save with correct filename

---

## 🚀 NEXT STEPS AFTER CREATING IMAGES

1. Export all 15 images from Visily.ai at **1920×1080** (16:9)
2. **Compress images** to 200-400 KB each (TinyPNG.com)
3. Save them in the folder structure above
4. Update the MDX files with new image paths:
   - `src/app/work/projects/sales-to-delivery-automation-platform.mdx`
   - `src/app/work/projects/vendor-lifecycle-compliance-platform.mdx`
   - `src/app/work/projects/operational-intelligence-platform.mdx`
4. Test the carousel on project pages
5. Verify images load correctly

---

## 💡 TIPS FOR USING VISILY.AI

1. **Start with the prompt** - Paste the exact prompt into Visily's AI generator
2. **Refine if needed** - Adjust colors, spacing, or elements using Visily's editor
3. **Keep it business-focused** - Remove any technical elements that appear
4. **Export high quality** - Use the highest quality export settings
5. **Consistency matters** - Use similar color schemes and styles across all 12 images
6. **Test readability** - Make sure text (if any) is readable at full size
7. **Optimize later** - You can compress images for web after export if needed
