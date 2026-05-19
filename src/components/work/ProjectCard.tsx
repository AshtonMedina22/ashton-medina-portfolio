"use client";

import {
  AvatarGroup,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { ProjectCardTechStack } from "./ProjectCardTechStack";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  demoHref?: string;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  techStack?: Array<{ name: string; icon: string | null }>;
}

function ProjectThumbnail({ href, title }: { href: string; title: string }) {
  const slug = href.split("/").filter(Boolean).pop() ?? "";

  if (slug === "sales-to-delivery-automation-platform") {
    return (
      <div className={`${styles.thumbnail} ${styles.thumbnailSales}`} aria-label={`${title} preview`}>
        <div className={styles.thumbHero}>
          <div className={styles.thumbModule}>
            <span className={styles.thumbEyebrow}>Confirmed order</span>
            <strong>SO-0842</strong>
            <span>Meridian Group</span>
          </div>
          <div className={styles.thumbConnector}>→</div>
          <div className={styles.thumbModuleStrong}>
            <span className={styles.thumbEyebrow}>Generated project</span>
            <strong>Delivery ready</strong>
            <span>Tasks + client data synced</span>
          </div>
        </div>
        <div className={styles.thumbSignals}>
          <span>3 services</span>
          <span>$12.4K</span>
          <span>0 re-entry</span>
        </div>
      </div>
    );
  }

  if (slug === "revenue-financial-control-engine") {
    return (
      <div className={`${styles.thumbnail} ${styles.thumbnailRevenue}`} aria-label={`${title} preview`}>
        <div className={styles.thumbHero}>
          <div className={styles.thumbMetricHero}>
            <span className={styles.thumbEyebrow}>Margin protected</span>
            <strong>53.2%</strong>
            <span>$6,600 live margin</span>
          </div>
        </div>
        <div className={styles.thumbSignals}>
          <span>Paid</span>
          <span>-$400 variance</span>
          <span>Payout eligible</span>
        </div>
      </div>
    );
  }

  if (slug === "vendor-lifecycle-compliance-platform") {
    return (
      <div className={`${styles.thumbnail} ${styles.thumbnailVendor}`} aria-label={`${title} preview`}>
        <div className={styles.thumbSplit}>
          <div className={styles.thumbModuleStrong}>
            <span className={styles.thumbEyebrow}>Internal control</span>
            <strong>Active vendor</strong>
            <span>Compliant · Portal enabled</span>
          </div>
          <div className={styles.thumbModule}>
            <span className={styles.thumbEyebrow}>Vendor portal</span>
            <strong>Assignment #0842</strong>
            <span>Accept & sign</span>
          </div>
        </div>
        <div className={styles.thumbSignals}>
          <span>3 docs</span>
          <span>1 assignment</span>
          <span>Secure access</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.thumbnail} ${styles.thumbnailOps}`} aria-label={`${title} preview`}>
      <div className={styles.thumbHero}>
        <div className={styles.thumbChart}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={styles.thumbMetricHero}>
          <span className={styles.thumbEyebrow}>Live operations</span>
          <strong>$84.2K</strong>
          <span>Expected revenue</span>
        </div>
      </div>
      <div className={styles.thumbSignals}>
        <span>8 this week</span>
        <span>14 active</span>
        <span>Auto-report</span>
      </div>
    </div>
  );
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  demoHref,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  techStack,
}) => {
  return (
    <Column fillWidth gap="m" className={styles.cardContainer}>
      <SmartLink
        href={demoHref ?? href}
        {...(demoHref ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={styles.imageLink}
      >
        <Column fillWidth className={styles.imageContainer}>
          <ProjectThumbnail href={href} title={title} />
        </Column>
      </SmartLink>
      <Column
        fillWidth
        paddingX="m"
        paddingTop="m"
        paddingBottom="m"
        gap="l"
        className={styles.cardContent}
      >
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-xl">
            {title}
          </Heading>
        )}
        <Column gap="m" fillWidth style={{ flex: 1, alignItems: "center" }}>
          {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
          {description?.trim() && (
            <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
              {description}
            </Text>
          )}
          {techStack && techStack.length > 0 && (
            <ProjectCardTechStack technologies={techStack} />
          )}
          <Flex gap="m" wrap className={styles.ctaContainer}>
            <SmartLink className={styles.ctaLink} href={href}>
              <Text variant="body-default-s">View Project</Text>
            </SmartLink>
          </Flex>
        </Column>
      </Column>
    </Column>
  );
};
