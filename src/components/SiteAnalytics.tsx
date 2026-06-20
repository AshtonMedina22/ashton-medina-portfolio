"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";

const GA_MEASUREMENT_ID = "G-6V8V11G7R5";

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

export function SiteAnalytics() {
  const [canTrack, setCanTrack] = useState(false);

  useEffect(() => {
    setCanTrack(shouldTrackAnalytics());
  }, []);

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
