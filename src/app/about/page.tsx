import {
  Avatar,
  Button,
  Card,
  Column,
  Heading,
  Line,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { ThemeAwareAvatar } from "@/components";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Row 
      fillWidth 
      gap="xl" 
      paddingX="l" 
      style={{ position: "relative", alignItems: "flex-start", paddingLeft: "200px" }}
      s={{ direction: "column", gap: "m", paddingX: "m" }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <TableOfContents structure={structure} about={about} />
      )}
      
      {/* Sticky Left Sidebar with Avatar, Name, Role, Email */}
      {about.avatar.display && (
        <Column
          minWidth={16}
          maxWidth={16}
          paddingRight="l"
          fitHeight
          position="sticky"
          top="80"
          gap="16"
          style={{ alignSelf: "flex-start", flexShrink: 0, zIndex: 10 }}
          s={{ hide: true }}
        >
          <Column fillWidth gap="m" align="start">
            <ThemeAwareAvatar size="xl" />
            <Heading variant="display-strong-l">
              {person.name}
            </Heading>
            <Text
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            <Line maxWidth="s" marginTop="s" marginBottom="s" />
            <Button
              href={`mailto:${person.email}`}
              prefixIcon="email"
              label={person.email}
              size="s"
              weight="default"
              variant="secondary"
            />
          </Column>
        </Column>
      )}

      {/* Scrollable Content Area */}
      <Column fillWidth maxWidth="m" style={{ flex: "1 1 auto", minWidth: 0, marginLeft: "var(--static-space-24)" }} className={styles.blockAlign}>

          {about.intro.display && (
            <Card
              fillWidth
              padding="l"
              radius="l"
              border="neutral-alpha-weak"
              background="surface"
              marginBottom="l"
            >
              <Column fillWidth gap="m">
                <Heading as="h2" id={about.intro.title} variant="display-strong-s">
                  {about.intro.title}
                </Heading>
                <Text variant="body-default-l" onBackground="neutral-weak" style={{ lineHeight: "1.75" }}>
                  {about.intro.description}
                </Text>
              </Column>
            </Card>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="l">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="l">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="l">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="l">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <Column fillWidth gap="l" marginTop="l">
              <Heading as="h2" id={about.technical.title} variant="display-strong-s" marginBottom="m">
                {about.technical.title}
              </Heading>
              {about.technical.skills.map((skill, index) => (
                <Card
                  key={`${skill}-${index}`}
                  fillWidth
                  padding="l"
                  radius="l"
                  border="neutral-alpha-weak"
                  background="surface"
                  gap="m"
                  className={styles.skillCard}
                >
                  <Text 
                    id={skill.title} 
                    variant="heading-strong-l"
                    marginBottom="s"
                  >
                    {skill.title}
                  </Text>
                  <Column fillWidth gap="m">
                    {skill.description}
                  </Column>
                  {skill.tags && skill.tags.length > 0 && (
                    <Row wrap gap="m" paddingTop="s">
                      {skill.tags.map((tag, tagIndex) => (
                        <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Row>
                  )}
                  {skill.images && skill.images.length > 0 && (
                    <Row fillWidth paddingTop="m" gap="12" wrap>
                      {skill.images.map((image, index) => (
                        <Row
                          key={index}
                          border="neutral-medium"
                          radius="m"
                          minWidth={image.width}
                          height={image.height}
                        >
                          <Media
                            enlarge
                            radius="m"
                            sizes={image.width.toString()}
                            alt={image.alt}
                            src={image.src}
                          />
                        </Row>
                      ))}
                    </Row>
                  )}
                </Card>
              ))}
            </Column>
          )}
      </Column>
    </Row>
  );
}