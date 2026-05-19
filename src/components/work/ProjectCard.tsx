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

function ProjectThumbnail({ title, href }: { title: string; href: string }) {
  const variant = href.includes("revenue")
    ? "revenue"
    : href.includes("vendor")
      ? "vendor"
      : href.includes("operational")
        ? "ops"
        : "sales";

  if (variant === "revenue") {
    return (
      <div className={`${styles.thumbnail} ${styles.thumbnailRevenue}`} aria-label={`${title} thumbnail`}>
        <div className={styles.thumbHeader}>
          <span>Financial control</span>
          <strong>SO-0842</strong>
        </div>
        <div className={styles.thumbPrimary}>
          <span>Protected margin</span>
          <strong>53.2%</strong>
          <small>$6,600 live margin</small>
        </div>
        <div className={styles.thumbChain}>
          <span>Quoted</span>
          <span>Actual</span>
          <span>Paid</span>
        </div>
        <div className={styles.thumbMiniRows}>
          <span>Vendor A variance</span>
          <strong>-$200</strong>
        </div>
      </div>
    );
  }

  if (variant === "vendor") {
    return (
      <div className={`${styles.thumbnail} ${styles.thumbnailVendor}`} aria-label={`${title} thumbnail`}>
        <div className={styles.thumbSplit}>
          <div>
            <span>Internal control</span>
            <strong>Active vendor</strong>
            <small>Compliant</small>
          </div>
          <div>
            <span>Vendor portal</span>
            <strong>Assignment #0842</strong>
            <small>Accept & sign</small>
          </div>
        </div>
        <div className={styles.thumbChain}>
          <span>3 docs</span>
          <span>1 assignment</span>
          <span>Secure access</span>
        </div>
      </div>
    );
  }

  if (variant === "ops") {
    return (
      <div className={`${styles.thumbnail} ${styles.thumbnailOps}`} aria-label={`${title} thumbnail`}>
        <div className={styles.thumbChart}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={styles.thumbPrimary}>
          <span>Live operations</span>
          <strong>$84.2K</strong>
          <small>Expected revenue</small>
        </div>
        <div className={styles.thumbChain}>
          <span>8 this week</span>
          <span>14 active</span>
          <span>Auto-report</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.thumbnail} ${styles.thumbnailSales}`} aria-label={`${title} thumbnail`}>
      <div className={styles.thumbFlow}>
        <div>
          <span>Confirmed order</span>
          <strong>SO-0842</strong>
          <small>Meridian Group</small>
        </div>
        <em aria-hidden>-&gt;</em>
        <div>
          <span>Generated project</span>
          <strong>Delivery ready</strong>
          <small>Tasks + client data synced</small>
        </div>
      </div>
      <div className={styles.thumbChain}>
        <span>3 services</span>
        <span>$12.4K</span>
        <span>0 re-entry</span>
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
          <ProjectThumbnail title={title} href={href} />
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
        <Column gap="m" fillWidth className={styles.cardBody}>
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
