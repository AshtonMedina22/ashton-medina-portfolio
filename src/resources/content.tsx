import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Column, Line, Row, Tag, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ashton",
  lastName: "Medina",
  name: `Ashton Medina`,
  role: "Full-Stack Platform Engineer",
  avatar: "/images/avatar.jpg",
  email: "ashtonmedina22@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Only LinkedIn and Email for professional portfolio
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

// Comprehensive tech stack for full-stack platform engineer
// Languages & Core
const techStackLanguages: Array<{ name: string; icon: string | null }> = [
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Python", icon: "python" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "SCSS", icon: "scss" },
  { name: "SQL", icon: "sql" },
  { name: "JSON", icon: "json" },
];

// Frameworks & Platforms
const techStackPlatforms: Array<{ name: string; icon: string | null }> = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Supabase", icon: "supabase" },
  { name: "Redis", icon: "redis" },
  { name: "REST API", icon: "restapi" },
  { name: "Middleware", icon: "middleware" },
  { name: "Docker", icon: "docker" },
  { name: "Nginx", icon: "nginx" },
  { name: "Git", icon: "git" },
];

// Combined for backwards compatibility
const techStack: Array<{ name: string; icon: string | null }> = [
  ...techStackLanguages,
  ...techStackPlatforms,
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Ashton Medina - Full-Stack Platform Engineer | Portfolio`,
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
  title: `How I Approach Platform and Systems Engineering – ${person.name}`,
  description: `Learn about ${person.name}'s approach to building scalable, governed platforms and systems`,
  tableOfContent: {
    display: true,
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
    title: "How I Approach Platform and Systems Engineering",
    description: (
      <>
        I approach technology as an operational system, not just an application. My work focuses on building platforms that standardize execution, reduce process risk, and remain maintainable as teams and requirements evolve. Systems are designed for non-technical users, governed workflows, and long-term survivability.
      </>
    ),
  },
  work: {
    display: false,
    title: "Engineering Principles",
    experiences: [],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Engineering Principles",
        description: (
          <>
            <Column as="ul" gap="m" style={{ listStyle: "none", paddingLeft: 0 }}>
              <Row as="li" gap="m" vertical="start">
                <Text variant="body-default-m" style={{ color: "var(--brand-on-background-strong)", marginTop: "0.25rem" }}>•</Text>
                <Text variant="body-default-m" onBackground="neutral-weak" style={{ flex: 1 }}>
                  Systems should make execution repeatable, not person-dependent.
                </Text>
              </Row>
              <Row as="li" gap="m" vertical="start">
                <Text variant="body-default-m" style={{ color: "var(--brand-on-background-strong)", marginTop: "0.25rem" }}>•</Text>
                <Text variant="body-default-m" onBackground="neutral-weak" style={{ flex: 1 }}>
                  Automation should enforce standards, not bypass them.
                </Text>
              </Row>
              <Row as="li" gap="m" vertical="start">
                <Text variant="body-default-m" style={{ color: "var(--brand-on-background-strong)", marginTop: "0.25rem" }}>•</Text>
                <Text variant="body-default-m" onBackground="neutral-weak" style={{ flex: 1 }}>
                  Access control and approvals enable safe scale.
                </Text>
              </Row>
              <Row as="li" gap="m" vertical="start">
                <Text variant="body-default-m" style={{ color: "var(--brand-on-background-strong)", marginTop: "0.25rem" }}>•</Text>
                <Text variant="body-default-m" onBackground="neutral-weak" style={{ flex: 1 }}>
                  Data should be captured once and propagated forward.
                </Text>
              </Row>
              <Row as="li" gap="m" vertical="start">
                <Text variant="body-default-m" style={{ color: "var(--brand-on-background-strong)", marginTop: "0.25rem" }}>•</Text>
                <Text variant="body-default-m" onBackground="neutral-weak" style={{ flex: 1 }}>
                  System behavior must be explainable and auditable.
                </Text>
              </Row>
            </Column>
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Architecture Patterns",
        description: (
          <>
            <Column as="ul" gap="m" style={{ listStyle: "none", paddingLeft: 0 }}>
              <Row as="li" gap="m" vertical="start">
                <Text variant="body-default-m" style={{ color: "var(--brand-on-background-strong)", marginTop: "0.25rem" }}>•</Text>
                <Text variant="body-default-m" onBackground="neutral-weak" style={{ flex: 1 }}>
                  Template-driven workflow generation for standardized execution structures.
                </Text>
              </Row>
              <Row as="li" gap="m" vertical="start">
                <Text variant="body-default-m" style={{ color: "var(--brand-on-background-strong)", marginTop: "0.25rem" }}>•</Text>
                <Text variant="body-default-m" onBackground="neutral-weak" style={{ flex: 1 }}>
                  State-machine lifecycle modeling for controlled stage progression.
                </Text>
              </Row>
              <Row as="li" gap="m" vertical="start">
                <Text variant="body-default-m" style={{ color: "var(--brand-on-background-strong)", marginTop: "0.25rem" }}>•</Text>
                <Text variant="body-default-m" onBackground="neutral-weak" style={{ flex: 1 }}>
                  Token-scoped external access for secure third-party interaction.
                </Text>
              </Row>
              <Row as="li" gap="m" vertical="start">
                <Text variant="body-default-m" style={{ color: "var(--brand-on-background-strong)", marginTop: "0.25rem" }}>•</Text>
                <Text variant="body-default-m" onBackground="neutral-weak" style={{ flex: 1 }}>
                  Computed metric aggregation for operational analytics.
                </Text>
              </Row>
              <Row as="li" gap="m" vertical="start">
                <Text variant="body-default-m" style={{ color: "var(--brand-on-background-strong)", marginTop: "0.25rem" }}>•</Text>
                <Text variant="body-default-m" onBackground="neutral-weak" style={{ flex: 1 }}>
                  Modular extension architecture for upgrade-safe platform growth.
                </Text>
              </Row>
            </Column>
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Areas of Expertise",
        description: (
          <>
            <Row wrap gap="m" paddingTop="s">
              <Tag size="l" background="brand-alpha-weak" onBackground="neutral-strong">
                Platform architecture and domain modeling
              </Tag>
              <Tag size="l" background="brand-alpha-weak" onBackground="neutral-strong">
                Systems integration and cross-module workflows
              </Tag>
              <Tag size="l" background="brand-alpha-weak" onBackground="neutral-strong">
                Backend automation and computed logic
              </Tag>
              <Tag size="l" background="brand-alpha-weak" onBackground="neutral-strong">
                Operational analytics and KPI modeling
              </Tag>
              <Tag size="l" background="brand-alpha-weak" onBackground="neutral-strong">
                Access control and permission design
              </Tag>
              <Tag size="l" background="brand-alpha-weak" onBackground="neutral-strong">
                Full software lifecycle delivery
              </Tag>
            </Row>
          </>
        ),
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
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
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

export { person, social, newsletter, home, about, blog, work, gallery, techStack, techStackLanguages, techStackPlatforms };
