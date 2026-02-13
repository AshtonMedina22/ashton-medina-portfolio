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
  Icon,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
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
    <Column 
      fillWidth 
      paddingY="xl"
      paddingX="l" 
      gap="xl"
      horizontal="center"
      s={{ paddingX: "m", paddingY: "l" }}
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
      
      {/* Hero Section - Avatar + Name + Role */}
      {about.avatar.display && (
        <Column
          fillWidth
          maxWidth="m"
          horizontal="center"
          align="center"
          gap="l"
          paddingBottom="l"
        >
          <ThemeAwareAvatar size="xl" style={{ width: "140px", height: "140px" }} />
          <Column horizontal="center" align="center" gap="s">
            <Heading variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              variant="heading-default-l"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
          </Column>
          <Row gap="m" wrap horizontal="center">
            <Button
              href={`mailto:${person.email}`}
              prefixIcon="email"
              label="Email"
              size="m"
              variant="secondary"
            />
            {social.filter(s => s.link).slice(0, 3).map((item) => (
              <Button
                key={item.name}
                href={item.link}
                prefixIcon={item.icon}
                label={item.name}
                size="m"
                variant="tertiary"
              />
            ))}
          </Row>
          <Line fillWidth maxWidth={24} />
        </Column>
      )}

      {/* Main Content Area */}
      <Column fillWidth maxWidth="m" gap="xl">

          {about.intro.display && (
            <Card
              fillWidth
              padding="xl"
              radius="l"
              border="neutral-alpha-weak"
              background="surface"
            >
              <Column fillWidth gap="l">
                <Heading as="h2" id={about.intro.title} variant="display-strong-m">
                  {about.intro.title}
                </Heading>
                <Text variant="body-default-l" onBackground="neutral-weak" style={{ lineHeight: "1.8" }}>
                  {about.intro.description}
                </Text>
              </Column>
            </Card>
          )}

          {about.work.display && (
            <Column fillWidth gap="l">
              <Heading as="h2" id={about.work.title} variant="display-strong-m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l">
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
            </Column>
          )}

          {about.studies.display && (
            <Column fillWidth gap="l">
              <Heading as="h2" id={about.studies.title} variant="display-strong-m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l">
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
            </Column>
          )}

          {about.technical.display && (
            <Column fillWidth gap="l">
              <Heading as="h2" id={about.technical.title} variant="display-strong-m">
                {about.technical.title}
              </Heading>
              {about.technical.skills.map((skill, index) => (
                <Card
                  key={`${skill}-${index}`}
                  fillWidth
                  padding="xl"
                  radius="l"
                  border="neutral-alpha-weak"
                  background="surface"
                  gap="l"
                  className={styles.skillCard}
                >
                  <Text 
                    id={skill.title} 
                    variant="heading-strong-l"
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
    </Column>
  );
}