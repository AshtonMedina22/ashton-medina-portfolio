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
        <div className={styles.graphicHero}>
          <div className={styles.profitOrb}>
            <span>53.2%</span>
          </div>
          <div className={styles.financeLedgerMark} aria-hidden>
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className={styles.graphicSignals}>
          <span>Margin protected</span>
          <strong>SO-0842</strong>
          <small>Paid · -$400 variance · payout eligible</small>
        </div>
      </div>
    );
  }

  if (variant === "vendor") {
    return (
      <div className={`${styles.thumbnail} ${styles.thumbnailVendor}`} aria-label={`${title} thumbnail`}>
        <div className={styles.graphicHero}>
          <div className={styles.portalSplitMark} aria-hidden>
            <i />
            <i />
          </div>
          <div className={styles.complianceSeal}>✓</div>
        </div>
        <div className={styles.graphicSignals}>
          <span>Vendor portal</span>
          <strong>Elite Sound</strong>
          <small>Compliant · 7 docs valid · portal enabled</small>
        </div>
      </div>
    );
  }

  if (variant === "ops") {
    return (
      <div className={`${styles.thumbnail} ${styles.thumbnailOps}`} aria-label={`${title} thumbnail`}>
        <div className={styles.graphicHero}>
          <div className={styles.opsPulseMark} aria-hidden>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className={styles.opsScore}>86%</div>
        </div>
        <div className={styles.graphicSignals}>
          <span>Live operations</span>
          <strong>Executive view</strong>
          <small>8 engagements · $84.2K · report ready</small>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.thumbnail} ${styles.thumbnailSales}`} aria-label={`${title} thumbnail`}>
      <div className={styles.graphicHero}>
        <div className={styles.orderFlowMark} aria-hidden>
          <i />
          <em>→</em>
          <i />
        </div>
        <div className={styles.flowNodeCluster} aria-hidden>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={styles.graphicSignals}>
        <span>Order → project</span>
        <strong>SO-0842</strong>
        <small>3 services · $12.4K · zero re-entry</small>
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
