// import a pre-defined template for config and content options
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
} from "./content";

export {
  projectCategories,
  projectEyebrows,
  projectAccents,
  getProjectCategory,
  getProjectEyebrow,
  getProjectAccent,
} from "./projects";
export type { ProjectAccent } from "./projects";

export { seoKeywords, primaryServices, buildSiteJsonLd, buildProjectJsonLd } from "./seo";

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
} from "./once-ui.config";
