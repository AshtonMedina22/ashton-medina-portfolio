import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";

import {
  Background,
  Column,
  Flex,
  Meta,
  opacity,
  RevealFx,
  SpacingToken,
} from "@once-ui-system/core";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RouteGuard } from "@/components/layout/RouteGuard";
import { Providers } from "@/components/layout/Providers";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import { baseURL, buildSiteJsonLd, effects, fonts, seoKeywords, style, dataStyle, home } from "@/resources";

export async function generateMetadata() {
  const base = Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
  return {
    ...base,
    metadataBase: new URL(baseURL),
    title: {
      default: base?.title && typeof base.title === "string" ? base.title : home.title,
      template: "%s | Ashton Medina",
    },
    description: home.description,
    keywords: seoKeywords,
    creator: "Ashton Medina",
    publisher: "Ashton Medina",
    authors: [{ name: "Ashton Medina", url: baseURL }],
    alternates: {
      canonical: baseURL,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <script
          id="site-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildSiteJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const defaultTheme = ${JSON.stringify(style.theme)};
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    "solid-style": style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    "viz-style": dataStyle.variant,
                  })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  // Resolve theme
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return defaultTheme;
                    }
                    return themeValue;
                  };
                  
                  // Force the refreshed site to start from the configured light theme.
                  // Older visitors may still have a stale dark preference saved from the
                  // previous dark-first build; clear that once so the site no longer boots dark.
                  const themeMigrationKey = 'ashton-theme-default-light-v1';
                  const savedTheme = localStorage.getItem('data-theme');
                  if (localStorage.getItem(themeMigrationKey) !== 'true') {
                    localStorage.setItem('data-theme', defaultTheme);
                    localStorage.setItem(themeMigrationKey, 'true');
                  }
                  const migratedTheme = localStorage.getItem('data-theme') || savedTheme;
                  const resolvedTheme = resolveTheme(migratedTheme || defaultTheme);
                  root.setAttribute('data-theme', resolvedTheme);
                  
                  // Apply any saved style overrides
                  const styleKeys = Object.keys(config);
                  styleKeys.forEach(key => {
                    const value = localStorage.getItem('data-' + key);
                    if (value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', ${JSON.stringify(style.theme)});
                }
              })();
            `,
          }}
        />
      </head>
      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          <RevealFx fill position="absolute">
            <Background
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
          </RevealFx>
          <Flex fillWidth minHeight="16" s={{ hide: true }} />
          <Header />
          <Flex zIndex={0} fillWidth padding="0" horizontal="center" flex={1} style={{ minHeight: 0 }}>
            <Flex horizontal="center" fillWidth minHeight="0" flex={1} style={{ minHeight: 0 }}>
              <RouteGuard>{children}</RouteGuard>
            </Flex>
          </Flex>
          <Footer />
          <SiteAnalytics />
        </Column>
      </Providers>
    </Flex>
  );
}
