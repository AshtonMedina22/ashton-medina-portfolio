import { about, home, person, social, work } from "./content";
import { baseURL } from "./once-ui.config";

export const seoKeywords = [
  "business operations",
  "business operations manager",
  "operations management",
  "process improvement",
  "business process improvement",
  "management analyst",
  "business analyst",
  "business systems analyst",
  "business systems implementation",
  "systems implementation manager",
  "ERP implementation",
  "CRM administration",
  "workflow automation",
  "workflow design",
  "requirements gathering",
  "stakeholder management",
  "user acceptance testing",
  "UAT",
  "software rollout",
  "change management",
  "SOP development",
  "standard operating procedures",
  "KPI dashboards",
  "executive reporting",
  "operational reporting",
  "vendor management",
  "compliance tracking",
  "financial controls",
  "Dallas-Fort Worth operations",
];

export const primaryServices = [
  "Operations and process improvement",
  "Business systems implementation",
  "Workflow automation and task routing",
  "ERP and CRM rollout support",
  "Requirements gathering and UAT planning",
  "KPI dashboards and executive reporting",
  "SOP development and operational documentation",
  "Vendor lifecycle and compliance workflows",
  "Financial controls and approval workflows",
  "Change management and user adoption",
];

const linkedIn = social.find((item) => item.icon === "linkedin")?.link;

export function buildSiteJsonLd() {
  const personId = `${baseURL}/#person`;
  const websiteId = `${baseURL}/#website`;
  const serviceId = `${baseURL}/#professional-service`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: `${person.name} Portfolio`,
        url: baseURL,
        inLanguage: "en-US",
        description: home.description,
        publisher: { "@id": personId },
        about: { "@id": serviceId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: person.name,
        givenName: person.firstName,
        familyName: person.lastName,
        url: baseURL,
        image: `${baseURL}${person.avatar}`,
        email: person.email,
        jobTitle: person.role,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dallas-Fort Worth",
          addressRegion: "TX",
          addressCountry: "US",
        },
        sameAs: linkedIn ? [linkedIn] : [],
        knowsAbout: seoKeywords,
        hasOccupation: {
          "@type": "Occupation",
          name: "Business Operations and Systems Implementation Manager",
          skills: seoKeywords,
          occupationLocation: {
            "@type": "City",
            name: "Dallas-Fort Worth, TX",
          },
        },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: `${person.name} - Business Operations, Workflow Automation and Systems Implementation`,
        url: baseURL,
        description: about.description,
        provider: { "@id": personId },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "City", name: "Dallas-Fort Worth, TX" },
        ],
        serviceType: primaryServices,
        knowsAbout: seoKeywords,
      },
      {
        "@type": "ItemList",
        "@id": `${baseURL}/#services`,
        name: "Business operations and systems implementation services",
        itemListElement: primaryServices.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service,
        })),
      },
    ],
  };
}

export function buildProjectJsonLd({
  slug,
  title,
  description,
  image,
  publishedAt,
  keywords = [],
  techStack = [],
}: {
  slug: string;
  title: string;
  description: string;
  image?: string;
  publishedAt?: string;
  keywords?: string[];
  techStack?: Array<{ name: string; icon: string | null }>;
}) {
  const url = `${baseURL}${work.path}/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#case-study`,
    name: title,
    headline: title,
    description,
    url,
    image: image ? `${baseURL}${image}` : `${baseURL}/api/og/generate?title=${encodeURIComponent(title)}`,
    datePublished: publishedAt,
    dateModified: publishedAt,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      "@id": `${baseURL}/#person`,
      name: person.name,
      url: `${baseURL}${about.path}`,
    },
    about: keywords,
    keywords: keywords.join(", "),
    programmingLanguage: techStack.map((tech) => tech.name),
  };
}
