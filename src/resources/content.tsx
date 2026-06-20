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
  role: "Business Operations & Implementation Manager",
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
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "Go", icon: "go" },
  { name: "Java", icon: "java" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "SCSS", icon: "scss" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "SQL", icon: "sql" },
  { name: "GraphQL", icon: "graphql" },
  { name: "JSON", icon: "json" },
];

const techStackPlatforms: Array<{ name: string; icon: string | null }> = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "Terraform", icon: "terraform" },
  { name: "Vercel", icon: "vercel" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Supabase", icon: "supabase" },
  { name: "Redis", icon: "redis" },
  { name: "AWS", icon: "aws" },
  { name: "Auth0", icon: "auth0" },
  { name: "Keycloak", icon: "keycloak" },
  { name: "Okta", icon: "okta" },
  { name: "Clerk", icon: "clerk" },
  { name: "REST API", icon: "restapi" },
  { name: "Middleware", icon: "middleware" },
  { name: "Docker", icon: "docker" },
  { name: "Nginx", icon: "nginx" },
  { name: "Jest", icon: "jest" },
  { name: "Git", icon: "git" },
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
  title: "Ashton Medina - Business Operations & Implementation Manager | Portfolio",
  description:
    "Business operations and implementation manager with experience across operations leadership, process improvement, software implementation, workflow automation, reporting, and organizational execution.",
  headline: (
    <>
      Building operational frameworks
      <br />
      that help
      <br />
      <span className="headingAccent">organizations scale.</span>
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
    "My work spans operations leadership, business analysis, process improvement, platform implementation, workflow automation, reporting, integrations, training, and change management across growing organizations.",
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About | ${person.name}`,
  description: `${person.name} - Business operations and implementation manager with experience in operations, process improvement, implementation, reporting, and organizational execution.`,
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
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Work - ${person.name}`,
  description: `Operational systems portfolio - workflow automation, enterprise platforms, financial controls, vendor lifecycle, integrations, and reporting by ${person.name}`,
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact - ${person.name}`,
  description: `Get in touch with ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery - ${person.name}`,
  description: `A photo collection by ${person.name}`,
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
