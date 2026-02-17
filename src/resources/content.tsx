import { About, Blog, Contact, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Column, Line, Row, Tag, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ashton",
  lastName: "Medina",
  name: "Ashton Medina",
  role: "Systems & Platform Engineer",
  avatar: "/images/avatar.png",
  email: "ashtonmedina22@gmail.com",
  location: "America/Chicago",
  locationLabel: "Dallas–Fort Worth, TX",
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
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Ashton Medina - Systems & Platform Engineer | Portfolio`,
  description: `Full-stack platform engineer specializing in systems architecture, automation logic, and secure access controls. Building scalable platforms that transform complex operations into governed, efficient systems.`,
  headline: <>Building platforms that power operations</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Ashton, a full-stack platform engineer. I build systems with structured data models, automation logic, and secure access controls, turning complex operations into governed, scalable platforms.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About — ${person.name}`,
  description: `${person.name} — Systems & platform engineer. Approach to scalable, governed platforms and delivery.`,
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
        I treat technology as an operational system: platforms that standardize execution, reduce process risk, and stay maintainable as teams and requirements change. Built for real users, governed workflows, and long-term durability.
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
        title: "Systems Architecture",
        description: "Operational backbones that unify revenue, finance, vendor, and delivery into one enforceable platform.",
        bullets: [
          "Multi-domain data modeling",
          "Cross-module workflow orchestration",
          "State-driven process enforcement",
        ],
      },
      {
        title: "Backend & Workflow Engineering",
        description: "Backend systems that govern execution, not just store data.",
        bullets: [
          "Lifecycle state machines",
          "Approval and milestone structures",
          "Revenue-to-execution automation",
        ],
      },
      {
        title: "Systems Integration",
        description: "Connecting distributed tools into one operational ecosystem.",
        bullets: [
          "API and webhook automation",
          "CRM, ERP, payments, telematics",
          "Data sync and partner coordination",
        ],
      },
      {
        title: "Financial & Operational Controls",
        description: "Governance embedded in application logic.",
        bullets: [
          "Pricing authority and approval chains",
          "Vendor lifecycle management",
          "Audit-aware design",
        ],
      },
      {
        title: "Technical Leadership & Delivery",
        description: "Ownership from architecture through rollout.",
        bullets: [
          "Platform replacement and multi-location rollout",
          "Cross-functional technical leadership",
          "Documentation and onboarding",
        ],
      },
      {
        title: "UX-Informed Engineering",
        description: "Systems built for real adoption.",
        bullets: [
          "Workflow usability and dashboarding",
          "Enablement and performance reporting",
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
  title: `Projects - ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
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

export { person, social, newsletter, home, about, blog, work, contact, gallery, techStack, techStackLanguages, techStackPlatforms };
