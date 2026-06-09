import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import { Meta, Schema, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { getProjectEyebrow } from "@/resources/projects";
import { CustomMDX } from "@/components/shared/mdx";
import { TechStack } from "@/components/work/TechStack";
import { SalesToDeliveryDemo } from "@/components/demos/sales-to-delivery/SalesToDeliveryDemo";
import { VendorLifecycleDemo } from "@/components/demos/vendor-lifecycle/VendorLifecycleDemo";
import { RevenueFinancialDemo } from "@/components/demos/revenue-financial/RevenueFinancialDemo";
import { OperationalIntelligenceDemo } from "@/components/demos/operational-intelligence/OperationalIntelligenceDemo";
import { Metadata } from "next";
import { accentLastWords } from "@/utils/headingAccent";
import styles from "./ProjectPage.module.scss";

function renderDemo(slugPath: string) {
  if (slugPath === "sales-to-delivery-automation-platform") return <SalesToDeliveryDemo />;
  if (slugPath === "vendor-lifecycle-compliance-platform") return <VendorLifecycleDemo />;
  if (slugPath === "revenue-financial-control-engine") return <RevenueFinancialDemo />;
  if (slugPath === "operational-intelligence-platform") return <OperationalIntelligenceDemo />;
  return null;
}

function splitContentForDemo(content: string) {
  const closingTag = "</HowItWorksGrid>";
  const closeIndex = content.lastIndexOf(closingTag);

  if (closeIndex === -1) {
    return { intro: content, remainder: "" };
  }

  const splitPoint = closeIndex + closingTag.length;
  return {
    intro: content.slice(0, splitPoint).trim(),
    remainder: content.slice(splitPoint).trim(),
  };
}

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
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  const base = Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
  return {
    ...base,
    title: post.metadata.title,
    openGraph: {
      ...(typeof base?.openGraph === "object" && base.openGraph),
      title: post.metadata.title,
    },
  };
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

  const post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const demo = post.metadata.demo ? renderDemo(slugPath) : null;
  const { intro, remainder } = splitContentForDemo(post.content);

  return (
    <main className={styles.pageWrap}>
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

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <SmartLink href="/work" className={styles.heroBreadcrumb}>
            Work / Case Study
          </SmartLink>
          <span className={styles.eyebrow}>{getProjectEyebrow(slugPath)}</span>
          <h1 className={styles.heroTitle}>{accentLastWords(post.metadata.title, 2)}</h1>
          <p className={styles.heroTagline}>{post.metadata.summary}</p>
          {post.metadata.techStack && post.metadata.techStack.length > 0 && (
            <div className={styles.heroTech}>
              <TechStack technologies={post.metadata.techStack} size="s" />
            </div>
          )}
        </div>
      </section>

      <section className={styles.articleSection} aria-labelledby="case-study-heading">
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>Case Study</span>
          <h2 id="case-study-heading">
            Case <span className="headingAccent">study.</span>
          </h2>
        </div>
        <article className={styles.articleProse}>
          <CustomMDX source={intro} />
        </article>
      </section>

      {demo && (
        <section className={styles.mockupSection}>
          <div className={styles.demoSection}>
            <div className={styles.demoFrame}>{demo}</div>
          </div>
        </section>
      )}

      {remainder && (
        <section className={styles.articleSection}>
          <article className={styles.articleProse}>
            <CustomMDX source={remainder} />
          </article>
        </section>
      )}
    </main>
  );
}
