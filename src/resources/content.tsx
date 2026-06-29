import type {
  About,
  Blog,
  Contact,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Column, Line, Row, Tag, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ashton",
  lastName: "Medina",
  name: "Ashton Medina",
  role: "Operations & Business Systems Leader",
  avatar: "/images/avatar.png",
  email: "ashtonmedina22@gmail.com",
  location: "America/Chicago",
  locationLabel: "Dallas-Fort Worth, TX",
  languages: ["English", "Bahasa"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ashton-medina",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const techStackLanguages: Array<{ name: string; icon: string | null }> = [
  { name: "Python", icon: "python" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "SQL", icon: "sql" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "SCSS", icon: "scss" },
  { name: "REST APIs", icon: "restapi" },
  { name: "Webhooks", icon: "api" },
  { name: "Google Apps Script", icon: null },
];

const techStackPlatforms: Array<{ name: string; icon: string | null }> = [
  { name: "Odoo ERP/CRM", icon: null },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Supabase", icon: "supabase" },
  { name: "GitHub", icon: "github" },
  { name: "Vercel", icon: "vercel" },
  { name: "ClickUp", icon: null },
  { name: "Intercom", icon: null },
  { name: "Zapier", icon: null },
  { name: "Make", icon: null },
  { name: "Google Workspace", icon: null },
  { name: "Microsoft 365", icon: null },
];

const techStack: Array<{ name: string; icon: string | null }> = [
  ...techStackLanguages,
  ...techStackPlatforms,
];

const home: Home = {
  path: "/",
  image:
    "/api/og/generate?title=Ashton%20Medina%20Portfolio&subtitle=Business%20operations%2C%20systems%20implementation%2C%20workflow%20automation%2C%20and%20operational%20reporting",
  label: "Home",
  title:
    "Ashton Medina | Business Operations, Workflow Automation & Systems Implementation",
  description:
    "Dallas-Fort Worth business operations and systems implementation portfolio focused on process improvement, workflow automation, ERP and CRM rollout support, KPI dashboards, reporting, SOP development, and operational controls.",
  headline: (
    <>
      Turning messy
      {" "}
      <br />
      operations into
      {" "}
      <br />
      <span className="headingAccent">systems teams can run.</span>
    </>
  ),
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <Text onBackground="brand-medium">Featured work</Text>
      </Row>
    ),
    href: "/work/sales-to-delivery-automation-platform",
  },
  subline:
    "I help teams turn scattered requests, manual handoffs, disconnected tools, and weak reporting into repeatable workflows, usable systems, and clearer operating controls.",
};

const about: About = {
  path: "/about",
  label: "About",
  title: `${person.name} | Business Operations, Process Improvement & Systems Implementation`,
  description: `${person.name} is a Dallas-Fort Worth business operations and systems implementation manager focused on process improvement, workflow automation, ERP and CRM rollout support, KPI reporting, SOP development, UAT, and user adoption.`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Approach",
    description: (
      <>
        I approach systems work from the operating reality first: how teams communicate, where work
        gets delayed, what needs to be documented, and which tools or reports can make execution
        more consistent.
      </>
    ),
  },
  work: {
    display: false,
    title: "Experience",
    experiences: [],
  },
  focusAreas: {
    display: true,
    areas: [
      {
        title: "Operations & Process Improvement",
        description:
          "Experience improving how work moves across departments, handoffs, documentation, and recurring operating routines.",
        bullets: [
          "Workflow analysis and process mapping",
          "SOP and documentation frameworks",
          "Cross-functional handoff improvement",
        ],
      },
      {
        title: "Business Systems Implementation",
        description:
          "Platform implementation work grounded in requirements, testing, rollout, and adoption.",
        bullets: [
          "Requirements gathering and configuration support",
          "UAT, phased rollout, and training",
          "CRM, ERP, reporting, and workflow platforms",
        ],
      },
      {
        title: "Systems Integration",
        description:
          "Connecting business tools so information moves with less duplicate entry and fewer gaps.",
        bullets: [
          "API, webhook, and platform automation",
          "CRM, ERP, payments, telematics",
          "Data sync and partner system coordination",
        ],
      },
      {
        title: "Reporting & Operational Controls",
        description:
          "Reporting and governance structures that improve accountability, visibility, and decision-making.",
        bullets: [
          "KPI development and dashboarding",
          "Approval paths and compliance controls",
          "Finance, vendor, and operations reporting",
        ],
      },
      {
        title: "Operations Leadership",
        description:
          "Hands-on leadership across multi-site operations, executive coordination, staffing, compliance, and customer readiness.",
        bullets: [
          "Multi-site operational management",
          "Executive stakeholder coordination",
          "Onboarding, readiness, and training programs",
        ],
      },
      {
        title: "Technical Execution",
        description:
          "Ability to bridge business requirements with practical technical implementation.",
        bullets: [
          "Software development and automation",
          "Dashboard and data model design",
          "Maintainable, user-aware system workflows",
        ],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Principles & Patterns",
    skills: [
      {
        title: "Engineering Principles",
        bullets: [
          "Repeatable execution, not person-dependent",
          "Automation enforces standards",
          "Access control enables safe scale",
          "Capture data once, propagate forward",
          "Explainable and auditable systems",
        ],
        tags: [],
        images: [],
      },
      {
        title: "Architecture Patterns",
        bullets: [
          "Template-driven workflow generation",
          "State-machine lifecycle modeling",
          "Token-scoped external access",
          "Computed metric aggregation",
          "Modular extension architecture",
        ],
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Operations, Workflow Automation & Systems Implementation Notes - ${person.name}`,
  description: `Articles and notes from ${person.name} on business operations, process improvement, workflow automation, systems implementation, reporting, documentation, and adoption.`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Business Systems & Workflow Automation Portfolio - ${person.name}`,
  description: `Case studies by ${person.name} covering workflow automation, business systems implementation, ERP and CRM operations, financial controls, vendor lifecycle management, KPI dashboards, integrations, and operational reporting.`,
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact ${person.name} | Business Operations & Systems Implementation`,
  description: `Contact ${person.name} for business operations, workflow automation, process improvement, systems implementation, reporting, documentation, and operational controls work.`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery - ${person.name}`,
  description: `Visual collection and portfolio media from ${person.name}.`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  contact,
  gallery,
  techStack,
  techStackLanguages,
  techStackPlatforms,
};
