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

// Frameworks & Platforms
const techStackPlatforms: Array<{ name: string; icon: string | null }> = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Supabase", icon: "supabase" },
  { name: "Redis", icon: "redis" },
  { name: "AWS", icon: "aws" },
  { name: "REST API", icon: "restapi" },
  { name: "Middleware", icon: "middleware" },
  { name: "Docker", icon: "docker" },
  { name: "Nginx", icon: "nginx" },
  { name: "Jest", icon: "jest" },
  { name: "Git", icon: "git" },
  { name: "AI", icon: "ai" },
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
  title: `How I Approach Platform and Systems Engineering - ${person.name}`,
  description: `Learn about ${person.name}'s approach to building scalable, governed platforms and systems`,
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
          <Column as="ul" gap="4" style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
            <Text as="li" variant="body-default-s" onBackground="neutral-weak">- Repeatable execution, not person-dependent</Text>
            <Text as="li" variant="body-default-s" onBackground="neutral-weak">- Automation enforces standards</Text>
            <Text as="li" variant="body-default-s" onBackground="neutral-weak">- Access control enables safe scale</Text>
            <Text as="li" variant="body-default-s" onBackground="neutral-weak">- Capture data once, propagate forward</Text>
            <Text as="li" variant="body-default-s" onBackground="neutral-weak">- Explainable and auditable systems</Text>
          </Column>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Architecture Patterns",
        description: (
          <Column as="ul" gap="4" style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
            <Text as="li" variant="body-default-s" onBackground="neutral-weak">- Template-driven workflow generation</Text>
            <Text as="li" variant="body-default-s" onBackground="neutral-weak">- State-machine lifecycle modeling</Text>
            <Text as="li" variant="body-default-s" onBackground="neutral-weak">- Token-scoped external access</Text>
            <Text as="li" variant="body-default-s" onBackground="neutral-weak">- Computed metric aggregation</Text>
            <Text as="li" variant="body-default-s" onBackground="neutral-weak">- Modular extension architecture</Text>
          </Column>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Areas of Expertise",
        description: (
          <Row wrap gap="8">
            <Tag size="m" background="brand-alpha-weak" onBackground="neutral-strong">Platform architecture</Tag>
            <Tag size="m" background="brand-alpha-weak" onBackground="neutral-strong">Systems integration</Tag>
            <Tag size="m" background="brand-alpha-weak" onBackground="neutral-strong">Backend automation</Tag>
            <Tag size="m" background="brand-alpha-weak" onBackground="neutral-strong">Operational analytics</Tag>
            <Tag size="m" background="brand-alpha-weak" onBackground="neutral-strong">Access control</Tag>
            <Tag size="m" background="brand-alpha-weak" onBackground="neutral-strong">Full-stack delivery</Tag>
          </Row>
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
  title: `Projects - ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery - ${person.name}`,
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
