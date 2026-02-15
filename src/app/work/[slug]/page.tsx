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
import { ScrollToHash, CustomMDX, TechStack } from "@/components";
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
    <Column as="section" maxWidth="m" horizontal="center" gap="l" paddingX="l" className={styles.pageWrap}>
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

      {/* Hero image - clickable to demo when available */}
      {post.metadata.images.length > 0 && (
        <div className={styles.heroImageWrap}>
          {post.metadata.demo ? (
            <SmartLink
              href={`/work/${post.slug}/demo`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroImageLink}
            >
              <Media
                fillWidth
                priority
                aspectRatio="16 / 9"
                radius="l"
                alt={post.metadata.title}
                src={post.metadata.images[0]}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 900px"
              />
            </SmartLink>
          ) : (
            <Media
              fillWidth
              priority
              aspectRatio="16 / 9"
              radius="l"
              alt={post.metadata.title}
              src={post.metadata.images[0]}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 900px"
            />
          )}
        </div>
      )}

      {/* Try Interactive Demo CTA */}
      {post.metadata.demo && (
        <div className={styles.demoCtaWrap}>
          <SmartLink
            href={`/work/${post.slug}/demo`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.demoCta}
          >
            Try Interactive Demo
          </SmartLink>
        </div>
      )}

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

      <Column as="article" horizontal="center" marginTop="xl" className={styles.articleProse}>
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
