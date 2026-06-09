export const projectCategories: Record<string, string> = {
  "sales-to-delivery-automation-platform": "Workflow automation platform",
  "revenue-financial-control-engine": "Financial control system",
  "vendor-lifecycle-compliance-platform": "Vendor lifecycle platform",
  "operational-intelligence-platform": "Operational reporting platform",
};

export const projectEyebrows: Record<string, string> = {
  "sales-to-delivery-automation-platform": "Sales-to-Delivery System",
  "revenue-financial-control-engine": "Financial Governance System",
  "vendor-lifecycle-compliance-platform": "Vendor Lifecycle System",
  "operational-intelligence-platform": "Operational Intelligence System",
};

export type ProjectAccent = "sales" | "cyan" | "teal" | "indigo";

export const projectAccents: Record<string, ProjectAccent> = {
  "sales-to-delivery-automation-platform": "sales",
  "revenue-financial-control-engine": "cyan",
  "vendor-lifecycle-compliance-platform": "teal",
  "operational-intelligence-platform": "indigo",
};

export function getProjectCategory(slug: string): string {
  return projectCategories[slug] ?? "Enterprise platform";
}

export function getProjectEyebrow(slug: string): string {
  return projectEyebrows[slug] ?? "Enterprise System";
}

export function getProjectAccent(slug: string): ProjectAccent {
  return projectAccents[slug] ?? "sales";
}
