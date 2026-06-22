"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { track } from "@vercel/analytics";
import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";

const GA_MEASUREMENT_ID = "G-6V8V11G7R5";

declare global {
  interface Window {
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

function SiteAnalyticsInner() {
  const [canTrack, setCanTrack] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setCanTrack(shouldTrackAnalytics());
  }, []);

  useEffect(() => {
    if (!canTrack || !pathname) {
      return;
    }

    const queryString = searchParams?.toString();
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;

    window.gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
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

      track("portfolio_link_click", {
        category,
        href,
        label,
        path: window.location.pathname,
      });

      window.gtag?.("event", "portfolio_link_click", {
        link_category: category,
        link_url: href,
        link_text: label,
      });
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
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
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
