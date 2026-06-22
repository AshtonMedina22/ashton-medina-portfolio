"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import posthog from "posthog-js";
import { track } from "@vercel/analytics";
import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";

const GA_MEASUREMENT_ID = "G-6V8V11G7R5";
const INTERNAL_TRAFFIC_STORAGE_KEY = "portfolio_traffic_type";
const DEBUG_STORAGE_KEY = "portfolio_ga_debug";
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

let postHogInitialized = false;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function isBuilderPreviewUrl(url: URL) {
  if (url.pathname.includes("__builder_editing__")) {
    return true;
  }

  const builderParamNames = [
    "__builder_editing__",
    "builder.editing",
    "builder.frameEditing",
    "builder.preview",
    "builder.space",
    "builder.cachebust",
    "builder.overrides",
  ];

  return builderParamNames.some((param) => url.searchParams.has(param));
}

function isBuilderContext() {
  if (typeof window === "undefined") {
    return false;
  }

  const currentUrl = new URL(window.location.href);

  if (isBuilderPreviewUrl(currentUrl)) {
    return true;
  }

  if (document.referrer) {
    try {
      const referrerUrl = new URL(document.referrer);
      if (referrerUrl.hostname === "builder.io" || referrerUrl.hostname.endsWith(".builder.io")) {
        return true;
      }
    } catch {
      // Ignore malformed referrers.
    }
  }

  const ancestorOrigins = window.location.ancestorOrigins;
  if (ancestorOrigins) {
    for (let index = 0; index < ancestorOrigins.length; index += 1) {
      try {
        const ancestorUrl = new URL(ancestorOrigins[index]);
        if (ancestorUrl.hostname === "builder.io" || ancestorUrl.hostname.endsWith(".builder.io")) {
          return true;
        }
      } catch {
        // Ignore non-URL ancestor values.
      }
    }
  }

  return false;
}

function shouldTrackAnalytics() {
  return process.env.NODE_ENV === "production" && !isBuilderContext();
}

function beforeSend(event: BeforeSendEvent) {
  if (!shouldTrackAnalytics()) {
    return null;
  }

  try {
    const eventUrl = new URL(event.url);
    if (isBuilderPreviewUrl(eventUrl)) {
      return null;
    }
  } catch {
    // Keep the event if Vercel changes the URL shape unexpectedly.
  }

  return event;
}

function getLinkCategory(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href") || "";

  if (href.startsWith("mailto:")) return "email";
  if (href.includes("linkedin.com")) return "linkedin";
  if (href.startsWith("/work/") && href.endsWith("/demo")) return "project_demo";
  if (href.startsWith("/work/")) return "project";
  if (href.startsWith("/")) return "internal";
  if (href.startsWith("http")) return "external";

  return "other";
}

function getTrackedHref(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href") || "";

  if (href.startsWith("mailto:")) return "mailto";

  try {
    const url = new URL(href, window.location.origin);
    return url.origin === window.location.origin ? url.pathname : url.hostname;
  } catch {
    return href.slice(0, 80);
  }
}

function getPortfolioSection(pathname: string) {
  if (pathname === "/") return "home";
  if (pathname === "/about") return "about";
  if (pathname === "/work") return "work_index";
  if (pathname.startsWith("/work/") && pathname.endsWith("/demo")) return "project_demo";
  if (pathname.startsWith("/work/")) return "project_detail";
  if (pathname === "/blog") return "blog_index";
  if (pathname.startsWith("/blog/")) return "blog_post";
  if (pathname === "/gallery") return "gallery";
  if (pathname === "/contact") return "contact";

  return "other";
}

function getProjectSlug(pathname: string) {
  const match = pathname.match(/^\/work\/([^/]+)/);
  return match?.[1] || undefined;
}

function getBlogSlug(pathname: string) {
  const match = pathname.match(/^\/blog\/([^/]+)/);
  return match?.[1] || undefined;
}

function getRouteLabel(pathname: string) {
  const portfolioSection = getPortfolioSection(pathname);

  if (portfolioSection === "project_detail" || portfolioSection === "project_demo") {
    return getProjectSlug(pathname) || portfolioSection;
  }

  if (portfolioSection === "blog_post") {
    return getBlogSlug(pathname) || portfolioSection;
  }

  return portfolioSection;
}

function getAnalyticsFlags(searchParams: URLSearchParams | null | undefined) {
  if (typeof window === "undefined") {
    return { debugMode: false, trafficType: "external" };
  }

  const trafficParam = searchParams?.get("traffic_type");
  const debugParam = searchParams?.get("ga_debug");

  if (trafficParam === "internal" || trafficParam === "external") {
    localStorage.setItem(INTERNAL_TRAFFIC_STORAGE_KEY, trafficParam);
  }

  if (debugParam === "1" || debugParam === "true") {
    localStorage.setItem(DEBUG_STORAGE_KEY, "true");
  } else if (debugParam === "0" || debugParam === "false") {
    localStorage.removeItem(DEBUG_STORAGE_KEY);
  }

  return {
    debugMode: localStorage.getItem(DEBUG_STORAGE_KEY) === "true",
    trafficType:
      localStorage.getItem(INTERNAL_TRAFFIC_STORAGE_KEY) === "internal" ? "internal" : "external",
  };
}

function ensureGtagQueue() {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
}

function sendGaEvent(name: string, params: Record<string, string | number | boolean | undefined>) {
  ensureGtagQueue();

  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  );

  window.gtag?.("event", name, cleanParams);
}

function initPostHog() {
  if (typeof window === "undefined" || postHogInitialized || !POSTHOG_KEY) {
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    defaults: "2026-01-30",
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: true,
    persistence: "localStorage+cookie",
    person_profiles: "identified_only",
    loaded: (client) => {
      if (localStorage.getItem(DEBUG_STORAGE_KEY) === "true") {
        client.debug();
      }
    },
  });

  postHogInitialized = true;
}

function sendPostHogEvent(
  name: string,
  params: Record<string, string | number | boolean | null | undefined>,
) {
  if (!POSTHOG_KEY) {
    return;
  }

  initPostHog();

  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  );

  posthog.capture(name, cleanParams);
}

function SiteAnalyticsInner() {
  const [canTrack, setCanTrack] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setCanTrack(shouldTrackAnalytics());
  }, []);

  useEffect(() => {
    if (!canTrack) {
      return;
    }

    initPostHog();
  }, [canTrack]);

  useEffect(() => {
    if (!canTrack || !pathname) {
      return;
    }

    ensureGtagQueue();

    const queryString = searchParams?.toString();
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;
    const { debugMode, trafficType } = getAnalyticsFlags(searchParams);
    const portfolioSection = getPortfolioSection(pathname);
    const projectSlug = getProjectSlug(pathname);
    const blogSlug = getBlogSlug(pathname);
    const routeLabel = getRouteLabel(pathname);

    if (debugMode) {
      console.info("[Portfolio Analytics] GA debug mode is enabled for this browser.");
    }

    posthog.register({
      traffic_type: trafficType,
      portfolio_section: portfolioSection,
      route_label: routeLabel,
    });

    sendGaEvent("page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
      portfolio_section: portfolioSection,
      project_slug: projectSlug,
      blog_slug: blogSlug,
      route_label: routeLabel,
      traffic_type: trafficType,
      debug_mode: debugMode,
    });

    sendPostHogEvent("$pageview", {
      $current_url: window.location.href,
      page_path: pagePath,
      page_title: document.title,
      portfolio_section: portfolioSection,
      project_slug: projectSlug,
      blog_slug: blogSlug,
      route_label: routeLabel,
      traffic_type: trafficType,
      debug_mode: debugMode,
    });

    if (portfolioSection === "project_detail") {
      sendGaEvent("view_project", {
        project_slug: projectSlug,
        route_label: routeLabel,
        traffic_type: trafficType,
        debug_mode: debugMode,
      });

      sendPostHogEvent("view_project", {
        project_slug: projectSlug,
        route_label: routeLabel,
        traffic_type: trafficType,
        debug_mode: debugMode,
      });
    }

    if (portfolioSection === "project_demo") {
      sendGaEvent("view_project_demo", {
        project_slug: projectSlug,
        route_label: routeLabel,
        traffic_type: trafficType,
        debug_mode: debugMode,
      });

      sendPostHogEvent("view_project_demo", {
        project_slug: projectSlug,
        route_label: routeLabel,
        traffic_type: trafficType,
        debug_mode: debugMode,
      });
    }

    if (portfolioSection === "blog_post") {
      sendGaEvent("view_blog_post", {
        blog_slug: blogSlug,
        route_label: routeLabel,
        traffic_type: trafficType,
        debug_mode: debugMode,
      });

      sendPostHogEvent("view_blog_post", {
        blog_slug: blogSlug,
        route_label: routeLabel,
        traffic_type: trafficType,
        debug_mode: debugMode,
      });
    }
  }, [canTrack, pathname, searchParams]);

  useEffect(() => {
    if (!canTrack || !pathname) {
      return;
    }

    const sentDepths = new Set<number>();
    const depthThresholds = [25, 50, 75, 90];
    const { debugMode, trafficType } = getAnalyticsFlags(searchParams);

    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) {
        return;
      }

      const scrollDepth = Math.round((window.scrollY / scrollableHeight) * 100);
      const threshold = depthThresholds.find(
        (depth) => scrollDepth >= depth && !sentDepths.has(depth),
      );

      if (!threshold) {
        return;
      }

      sentDepths.add(threshold);

      sendGaEvent("portfolio_scroll_depth", {
        scroll_depth: threshold,
        page_path: window.location.pathname,
        portfolio_section: getPortfolioSection(window.location.pathname),
        project_slug: getProjectSlug(window.location.pathname),
        blog_slug: getBlogSlug(window.location.pathname),
        route_label: getRouteLabel(window.location.pathname),
        traffic_type: trafficType,
        debug_mode: debugMode,
      });

      sendPostHogEvent("portfolio_scroll_depth", {
        scroll_depth: threshold,
        page_path: window.location.pathname,
        portfolio_section: getPortfolioSection(window.location.pathname),
        project_slug: getProjectSlug(window.location.pathname),
        blog_slug: getBlogSlug(window.location.pathname),
        route_label: getRouteLabel(window.location.pathname),
        traffic_type: trafficType,
        debug_mode: debugMode,
      });
    };

    const engagementTimer = window.setTimeout(() => {
      sendGaEvent("portfolio_engaged_session", {
        engagement_seconds: 30,
        page_path: window.location.pathname,
        portfolio_section: getPortfolioSection(window.location.pathname),
        project_slug: getProjectSlug(window.location.pathname),
        blog_slug: getBlogSlug(window.location.pathname),
        route_label: getRouteLabel(window.location.pathname),
        traffic_type: trafficType,
        debug_mode: debugMode,
      });

      sendPostHogEvent("portfolio_engaged_session", {
        engagement_seconds: 30,
        page_path: window.location.pathname,
        portfolio_section: getPortfolioSection(window.location.pathname),
        project_slug: getProjectSlug(window.location.pathname),
        blog_slug: getBlogSlug(window.location.pathname),
        route_label: getRouteLabel(window.location.pathname),
        traffic_type: trafficType,
        debug_mode: debugMode,
      });
    }, 30000);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(engagementTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [canTrack, pathname, searchParams]);

  useEffect(() => {
    if (!canTrack || !pathname) {
      return;
    }

    const { debugMode, trafficType } = getAnalyticsFlags(searchParams);

    window.gtag?.("set", "user_properties", {
      traffic_type: trafficType,
    });

    track("portfolio_page_view", {
      path: pathname,
      section: getPortfolioSection(pathname),
      projectSlug: getProjectSlug(pathname) || null,
      trafficType,
    });

    sendPostHogEvent("portfolio_page_view", {
      path: pathname,
      section: getPortfolioSection(pathname),
      project_slug: getProjectSlug(pathname),
      blog_slug: getBlogSlug(pathname),
      route_label: getRouteLabel(pathname),
      traffic_type: trafficType,
      debug_mode: debugMode,
    });

    window.gtag?.("set", {
      traffic_type: trafficType,
      debug_mode: debugMode,
    });
  }, [canTrack, pathname, searchParams]);

  useEffect(() => {
    if (!canTrack) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      const category = getLinkCategory(anchor);
      const href = getTrackedHref(anchor);
      const label = anchor.innerText.trim().replace(/\s+/g, " ").slice(0, 80) || href;
      const { debugMode, trafficType } = getAnalyticsFlags(new URLSearchParams(window.location.search));
      const projectSlug = getProjectSlug(window.location.pathname);
      const blogSlug = getBlogSlug(window.location.pathname);
      const routeLabel = getRouteLabel(window.location.pathname);

      track("portfolio_link_click", {
        category,
        href,
        label,
        path: window.location.pathname,
        projectSlug: projectSlug || null,
        blogSlug: blogSlug || null,
        routeLabel,
        trafficType,
      });

      sendGaEvent("portfolio_link_click", {
        link_category: category,
        link_url: href,
        link_text: label,
        page_path: window.location.pathname,
        portfolio_section: getPortfolioSection(window.location.pathname),
        project_slug: projectSlug,
        blog_slug: blogSlug,
        route_label: routeLabel,
        traffic_type: trafficType,
        debug_mode: debugMode,
      });

      sendPostHogEvent("portfolio_link_click", {
        link_category: category,
        link_url: href,
        link_text: label,
        page_path: window.location.pathname,
        portfolio_section: getPortfolioSection(window.location.pathname),
        project_slug: projectSlug,
        blog_slug: blogSlug,
        route_label: routeLabel,
        traffic_type: trafficType,
        debug_mode: debugMode,
      });

      sendGaEvent("select_content", {
        content_type: category,
        item_id: href,
        item_name: label,
        portfolio_section: getPortfolioSection(window.location.pathname),
        route_label: routeLabel,
        traffic_type: trafficType,
        debug_mode: debugMode,
      });

      sendPostHogEvent("select_content", {
        content_type: category,
        item_id: href,
        item_name: label,
        portfolio_section: getPortfolioSection(window.location.pathname),
        route_label: routeLabel,
        traffic_type: trafficType,
        debug_mode: debugMode,
      });

      if (category === "email" || category === "linkedin") {
        sendGaEvent("generate_lead", {
          method: category,
          link_url: href,
          traffic_type: trafficType,
          debug_mode: debugMode,
        });

        sendPostHogEvent("generate_lead", {
          method: category,
          link_url: href,
          traffic_type: trafficType,
          debug_mode: debugMode,
        });

        sendGaEvent("contact_intent", {
          contact_method: category,
          link_url: href,
          page_path: window.location.pathname,
          traffic_type: trafficType,
          route_label: routeLabel,
          debug_mode: debugMode,
        });

        sendPostHogEvent("contact_intent", {
          contact_method: category,
          link_url: href,
          page_path: window.location.pathname,
          traffic_type: trafficType,
          route_label: routeLabel,
          debug_mode: debugMode,
        });
      }
    };

    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, [canTrack]);

  if (!canTrack) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
      <Analytics beforeSend={beforeSend} />
    </>
  );
}

export function SiteAnalytics() {
  return (
    <Suspense fallback={null}>
      <SiteAnalyticsInner />
    </Suspense>
  );
}
