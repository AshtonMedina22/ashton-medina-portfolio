#!/usr/bin/env node

const appHost = process.env.POSTHOG_APP_HOST || "https://us.posthog.com";
const projectId = process.env.POSTHOG_PROJECT_ID || "481442";
const personalApiKey = process.env.POSTHOG_PERSONAL_API_KEY;

const tags = ["portfolio", "recruiter-intent", "codex-managed"];

const actions = [
  {
    name: "showed_recruiter_intent",
    description:
      "High-intent portfolio behavior: project views, demo views, contact intent, lead clicks, or 30 second engagement.",
    steps: [
      { event: "view_project" },
      { event: "view_project_demo" },
      { event: "contact_intent" },
      { event: "generate_lead" },
      { event: "portfolio_engaged_session" },
    ],
  },
  {
    name: "viewed_work_sample",
    description: "Viewed a project detail page or project demo.",
    steps: [{ event: "view_project" }, { event: "view_project_demo" }],
  },
  {
    name: "contact_attempt",
    description: "Clicked an email or LinkedIn contact path.",
    steps: [{ event: "contact_intent" }, { event: "generate_lead" }],
  },
  {
    name: "internal_traffic",
    description: "Owner/internal traffic, used for filtering dashboards and analysis.",
    steps: [
      {
        event: "$pageview",
        properties: [{ key: "traffic_type", type: "event", value: "internal", operator: "exact" }],
      },
      {
        event: "portfolio_page_view",
        properties: [{ key: "traffic_type", type: "event", value: "internal", operator: "exact" }],
      },
    ],
  },
];

const dashboardName = "Portfolio Recruiter Intent";

function requireConfig() {
  if (!personalApiKey) {
    throw new Error(
      [
        "POSTHOG_PERSONAL_API_KEY is not set.",
        "",
        "Create a PostHog personal API key with these scopes:",
        "- action:read",
        "- action:write",
        "- dashboard:read",
        "- dashboard:write",
        "- insight:write",
        "",
        "Then run:",
        '$env:POSTHOG_PERSONAL_API_KEY="phx_..."',
        "node scripts/setup-posthog-portfolio.js",
      ].join("\n"),
    );
  }
}

async function api(path, options = {}) {
  const response = await fetch(`${appHost}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${personalApiKey}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const text = await response.text();
  let body = null;
  if (text) {
    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }
  }

  if (!response.ok) {
    const details = typeof body === "string" ? body : JSON.stringify(body, null, 2);
    throw new Error(`${options.method || "GET"} ${path} failed (${response.status}): ${details}`);
  }

  return body;
}

async function getActions() {
  const response = await api(`/api/projects/${projectId}/actions/?limit=200`);
  return response?.results || [];
}

async function upsertAction(existingActions, action) {
  const existing = existingActions.find((item) => item.name === action.name);
  const payload = {
    name: action.name,
    description: action.description,
    tags,
    steps: action.steps,
    deleted: false,
  };

  if (existing) {
    const updated = await api(`/api/projects/${projectId}/actions/${existing.id}/`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
    return { action: updated, created: false };
  }

  const created = await api(`/api/projects/${projectId}/actions/`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return { action: created, created: true };
}

async function getDashboards() {
  const endpoints = [
    `/api/environments/${projectId}/dashboards/?limit=200`,
    `/api/projects/${projectId}/dashboards/?limit=200`,
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await api(endpoint);
      return { endpointBase: endpoint.split("?")[0].replace(/\/$/, ""), dashboards: response?.results || [] };
    } catch {
      // Try the next endpoint shape. PostHog has moved dashboards from projects to environments.
    }
  }

  throw new Error("Could not list dashboards through the environments or projects dashboard endpoints.");
}

async function createDashboard(endpointBase, existingDashboards) {
  const existing = existingDashboards.find((item) => item.name === dashboardName);
  if (existing) {
    return { dashboard: existing, created: false };
  }

  const dashboard = await api(`${endpointBase}/`, {
    method: "POST",
    body: JSON.stringify({
      name: dashboardName,
      description:
        "Recruiter-focused portfolio dashboard. Exclude traffic_type=internal when analyzing external recruiter behavior.",
      tags,
      pinned: true,
    }),
  });

  return { dashboard, created: true };
}

async function addTextTile(endpointBase, dashboardId) {
  const body = [
    "## Portfolio Recruiter Intent",
    "",
    "Use this dashboard to judge recruiter engagement by outcomes, not bounce rate.",
    "",
    "Default analysis rule: filter out `traffic_type = internal` or `distinct_id = ashton-medina-internal`.",
    "",
    "Core actions created by this setup:",
    "- `showed_recruiter_intent`",
    "- `viewed_work_sample`",
    "- `contact_attempt`",
    "- `internal_traffic`",
    "",
    "Useful breakdowns: `utm_source`, `utm_medium`, `utm_campaign`, `portfolio_section`, `route_label`, `project_slug`, `link_category`.",
  ].join("\n");

  return api(`${endpointBase}/${dashboardId}/create_text_tile/`, {
    method: "POST",
    body: JSON.stringify({ body }),
  });
}

function externalOnlyProperties(extra = []) {
  return [
    { key: "traffic_type", type: "event", value: "internal", operator: "is_not" },
    ...extra,
  ];
}

function trendsInsight(name, series, breakdownFilter) {
  return {
    name,
    description: "Created by scripts/setup-posthog-portfolio.js",
    tags,
    dashboards: [],
    query: {
      kind: "InsightVizNode",
      source: {
        kind: "TrendsQuery",
        interval: "day",
        dateRange: { date_from: "-14d" },
        properties: externalOnlyProperties(),
        series,
        ...(breakdownFilter ? { breakdownFilter } : {}),
      },
    },
  };
}

function eventSeries(event, customName, math = "dau") {
  return {
    kind: "EventsNode",
    event,
    custom_name: customName,
    math,
  };
}

async function createInsight(payload, dashboardId) {
  const body = { ...payload, dashboards: [dashboardId] };
  return api(`/api/projects/${projectId}/insights/`, {
    method: "POST",
    body: JSON.stringify(body),
  });
}

async function createInsights(dashboardId) {
  const insights = [
    trendsInsight("External visitors", [eventSeries("$pageview", "External visitors")]),
    trendsInsight("Recruiter intent actions", [
      eventSeries("view_project", "Viewed project"),
      eventSeries("view_project_demo", "Viewed demo"),
      eventSeries("contact_intent", "Contact intent"),
      eventSeries("generate_lead", "Lead/contact click"),
      eventSeries("portfolio_engaged_session", "30s engaged session"),
    ]),
    trendsInsight("Top portfolio sections", [eventSeries("$pageview", "Pageviews", "total")], {
      breakdown: "portfolio_section",
      breakdown_type: "event",
    }),
    trendsInsight("Top project pages", [eventSeries("view_project", "Project detail views", "total")], {
      breakdown: "project_slug",
      breakdown_type: "event",
    }),
    trendsInsight("Contact clicks by method", [eventSeries("contact_intent", "Contact attempts", "total")], {
      breakdown: "contact_method",
      breakdown_type: "event",
    }),
  ];

  const results = [];
  for (const insight of insights) {
    try {
      const created = await createInsight(insight, dashboardId);
      results.push({ name: insight.name, ok: true, id: created?.id || created?.short_id });
    } catch (error) {
      results.push({ name: insight.name, ok: false, error: error.message });
    }
  }
  return results;
}

async function main() {
  requireConfig();

  console.log(`Using PostHog app host: ${appHost}`);
  console.log(`Using PostHog project/environment ID: ${projectId}`);

  const existingActions = await getActions();
  for (const action of actions) {
    const result = await upsertAction(existingActions, action);
    console.log(`${result.created ? "Created" : "Updated"} action: ${result.action.name}`);
  }

  const { endpointBase, dashboards } = await getDashboards();
  const dashboardResult = await createDashboard(endpointBase, dashboards);
  const dashboard = dashboardResult.dashboard;
  console.log(`${dashboardResult.created ? "Created" : "Found"} dashboard: ${dashboard.name} (${dashboard.id})`);

  await addTextTile(endpointBase, dashboard.id);
  console.log("Added dashboard explainer text tile.");

  const insightResults = await createInsights(dashboard.id);
  for (const result of insightResults) {
    if (result.ok) {
      console.log(`Created insight: ${result.name} (${result.id})`);
    } else {
      console.warn(`Could not create insight "${result.name}": ${result.error}`);
    }
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
