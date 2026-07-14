export const projectCategories: Record<string, string> = {
  "event-driven-automation-secure-review-gateway": "AgentOps review desk",
  "sales-to-delivery-automation-platform": "MLOps data pipeline",
  "vendor-lifecycle-compliance-platform": "Automated governance platform",
  "operational-intelligence-platform": "AI observability dashboard",
  "calendar-document-follow-up-automation-system": "Agentic workflow automation",
  "inventory-purchasing-allocation-system": "Optimization engine",
  "multi-tenant-enterprise-operations-hub": "Secure multi-tenant AI data hub",
  "revenue-financial-control-engine": "Automated financial guardrails",
  "business-access-software-cost-control-dashboard": "RBAC and cloud governance",
};

export const projectEyebrows: Record<string, string> = {
  "event-driven-automation-secure-review-gateway": "AgentOps + Human Review",
  "sales-to-delivery-automation-platform": "MLOps Data Pipeline",
  "vendor-lifecycle-compliance-platform": "Automated Governance",
  "operational-intelligence-platform": "AI Observability",
  "calendar-document-follow-up-automation-system": "Agentic Workflow",
  "inventory-purchasing-allocation-system": "Optimization Engine",
  "multi-tenant-enterprise-operations-hub": "Secure AI Data Platform",
  "revenue-financial-control-engine": "Financial AI Guardrails",
  "business-access-software-cost-control-dashboard": "RBAC + Cloud Governance",
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
