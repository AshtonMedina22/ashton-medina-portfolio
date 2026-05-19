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
        <div className={styles.thumbChrome}>
          <span>Financial control</span>
          <strong>SO-0842</strong>
        </div>
        <div className={styles.thumbKpis}>
          <div><span>Revenue</span><strong>$12.4K</strong></div>
          <div><span>Margin</span><strong>53.2%</strong></div>
          <div><span>Status</span><strong>Paid</strong></div>
        </div>
        <div className={styles.thumbFlowLine}>
          <span>Quoted</span>
          <i />
          <span>Actual</span>
          <i />
          <span>Protected</span>
        </div>
        <div className={styles.thumbTable}>
          <div><span>Vendor A</span><strong>-$200</strong></div>
          <div><span>Vendor B</span><strong>+$100</strong></div>
          <div><span>Eligibility</span><strong>Cleared</strong></div>
        </div>
      </div>
    );
  }

  if (variant === "vendor") {
    return (
      <div className={`${styles.thumbnail} ${styles.thumbnailVendor}`} aria-label={`${title} thumbnail`}>
        <div className={styles.thumbChrome}>
          <span>Vendor lifecycle</span>
          <strong>Portal enabled</strong>
        </div>
        <div className={styles.thumbPaneGrid}>
          <div>
            <span>Internal control</span>
            <strong>Elite Sound</strong>
            <small>Active - compliant</small>
          </div>
          <div>
            <span>Vendor portal</span>
            <strong>#0842</strong>
            <small>Accept & sign</small>
          </div>
        </div>
        <div className={styles.thumbTable}>
          <div><span>COI document</span><strong>Valid</strong></div>
          <div><span>Assignment</span><strong>Sent</strong></div>
          <div><span>Portal token</span><strong>Secure</strong></div>
        </div>
      </div>
    );
  }

  if (variant === "ops") {
    return (
      <div className={`${styles.thumbnail} ${styles.thumbnailOps}`} aria-label={`${title} thumbnail`}>
        <div className={styles.thumbChrome}>
          <span>Operations dashboard</span>
          <strong>This month</strong>
        </div>
        <div className={styles.thumbKpis}>
          <div><span>Engagements</span><strong>8</strong></div>
          <div><span>Active</span><strong>14</strong></div>
          <div><span>Revenue</span><strong>$84K</strong></div>
        </div>
        <div className={styles.thumbChart}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={styles.thumbTable}>
          <div><span>Upcoming</span><strong>3 rows</strong></div>
          <div><span>Auto-report</span><strong>Ready</strong></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.thumbnail} ${styles.thumbnailSales}`} aria-label={`${title} thumbnail`}>
      <div className={styles.thumbChrome}>
          <span>Sales order to project</span>
        <strong>Confirmed</strong>
      </div>
      <div className={styles.thumbPaneGrid}>
        <div>
          <span>Sales order</span>
          <strong>SO-0842</strong>
          <small>3 services - $12.4K</small>
        </div>
        <div>
          <span>Generated project</span>
          <strong>Project ready</strong>
          <small>Tasks synced</small>
        </div>
      </div>
      <div className={styles.thumbTable}>
        <div><span>Implementation</span><strong>12 tasks</strong></div>
        <div><span>Data migration</span><strong>8 tasks</strong></div>
        <div><span>Training</span><strong>7 tasks</strong></div>
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
