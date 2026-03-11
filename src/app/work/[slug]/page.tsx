import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  AvatarGroup,
  Column,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { CustomMDX } from "@/components/shared/mdx";
import { ScrollToHash } from "@/components/shared/ScrollToHash";
import { TechStack } from "@/components/work/TechStack";
import { ProjectTechStack } from "@/components/work/ProjectTechStack";
import { SalesToDeliveryDemo } from "@/components/demos/sales-to-delivery/SalesToDeliveryDemo";
import { VendorLifecycleDemo } from "@/components/demos/vendor-lifecycle/VendorLifecycleDemo";
import { RevenueFinancialDemo } from "@/components/demos/revenue-financial/RevenueFinancialDemo";
import { OperationalIntelligenceDemo } from "@/components/demos/operational-intelligence/OperationalIntelligenceDemo";
import { Metadata } from "next";
import styles from "./ProjectPage.module.scss";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  let post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((p) => ({
      src: p.avatar,
    })) || [];

  const highlights = post.metadata.highlights ?? [];
  const hasLighthouse =
    typeof post.metadata.performance === "number" &&
    typeof post.metadata.accessibility === "number" &&
    typeof post.metadata.seo === "number";
  const keyResults = post.metadata.keyResults ?? [];
  const hasKeyResults = keyResults.length > 0;
  const showMetricsBlock = hasLighthouse || hasKeyResults;
  const metricsItems = hasLighthouse
    ? [
        { label: "performance", value: String(post.metadata.performance) },
        { label: "accessibility", value: String(post.metadata.accessibility) },
        { label: "seo", value: String(post.metadata.seo) },
      ]
    : hasKeyResults
      ? keyResults
      : [];
  const technicalImplementation = post.metadata.technicalImplementation ?? [];
  const showTechnicalImplementation = technicalImplementation.length > 0;

  return (
    <Column as="section" horizontal="center" gap="l" className={`${styles.pageWrap} sectionHue`}>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {/* Hero */}
      <Column className={styles.hero} gap="m" horizontal="center" align="center">
        <SmartLink href="/work" className={styles.heroBreadcrumb}>
          <Text variant="label-strong-m">Projects</Text>
        </SmartLink>
        <Heading as="h1" variant="display-strong-xl" wrap="balance" className={styles.heroTitle}>
          {post.metadata.title}
        </Heading>
        <Text
          variant="body-default-l"
          onBackground="neutral-medium"
          className={styles.heroTagline}
        >
          {post.metadata.summary}
        </Text>
        <Row gap="m" vertical="center" horizontal="center" wrap>
          {post.metadata.techStack && post.metadata.techStack.length > 0 && (
            <div className={styles.heroTech}>
              <TechStack technologies={post.metadata.techStack} size="s" />
            </div>
          )}
        </Row>
      </Column>

      {/* Metrics / key results */}
      {(showMetricsBlock && metricsItems.length > 0) || (!showMetricsBlock && highlights.length > 0) ? (
        <section className={styles.metricsSection} aria-labelledby="metrics-heading">
          <h2 id="metrics-heading" className={styles.metricsSectionTitle}>
            {showMetricsBlock ? "Performance metrics" : "Key results"}
          </h2>
          <div className={styles.metricsGrid}>
            {(showMetricsBlock ? metricsItems : highlights).map((h, idx) => (
              <div key={idx} className={styles.metricCard}>
                <span className={styles.metricValue}>{h.value}</span>
                <span className={styles.metricLabel}>{h.label}</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Technical implementation */}
      {showTechnicalImplementation && (
        <section className={styles.techImplSection} aria-labelledby="tech-impl-heading">
          <h2 id="tech-impl-heading" className={styles.techImplTitle}>
            Technical Implementation
          </h2>
          <ul className={styles.techImplList}>
            {technicalImplementation.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {post.metadata.team && post.metadata.team.length > 0 && (
        <Row marginBottom="l" horizontal="center">
          <Row gap="m" vertical="center">
            <AvatarGroup reverse avatars={avatars} size="s" />
            <Text variant="label-default-m" onBackground="brand-weak">
              {post.metadata.team.map((member, idx) => (
                <span key={idx}>
                  {idx > 0 && (
                    <Text as="span" onBackground="neutral-weak">
                      ,{" "}
                    </Text>
                  )}
                  <SmartLink href={member.linkedIn}>{member.name}</SmartLink>
                </span>
              ))}
            </Text>
          </Row>
        </Row>
      )}

      <Column as="article" horizontal="center" marginTop="l" className={styles.articleProse}>
        <CustomMDX source={post.content} />
      </Column>

      {/* Live Demo section - after article so reader sees narrative first */}
      {post.metadata.demo && (
        <section className={styles.mockupSection} aria-labelledby="live-demo-heading">
          <h3 id="live-demo-heading" className={styles.mockupSectionTitle}>
            Live Demo
          </h3>
          <p className={styles.mockupSectionCaption}>
            Explore the interactive flow below.
          </p>
          <div className={styles.demoSection}>
            <div className={styles.demoSectionInner}>
              {slugPath === "sales-to-delivery-automation-platform" && <SalesToDeliveryDemo />}
              {slugPath === "vendor-lifecycle-compliance-platform" && <VendorLifecycleDemo />}
              {slugPath === "revenue-financial-control-engine" && <RevenueFinancialDemo />}
              {slugPath === "operational-intelligence-platform" && <OperationalIntelligenceDemo />}
            </div>
          </div>
        </section>
      )}

      <ScrollToHash />
    </Column>
  );
}
