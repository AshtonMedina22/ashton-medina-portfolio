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
    <Column maxWidth="m">
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
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Column fillWidth horizontal="center" maxWidth="s">
        {about.avatar.display && (
          <Card
            id={about.intro.title}
            fillWidth
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            marginBottom="32"
          >
            <Column fillWidth gap="m" align="center">
              <Avatar src={person.avatar} size="xl" />
              <Heading variant="display-strong-xl" align="center">
                {person.name}
              </Heading>
              <Text
                variant="display-default-xs"
                onBackground="neutral-weak"
                align="center"
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
          </Card>
        )}
        <Column className={styles.blockAlign} fillWidth>

          {about.intro.display && (
            <Card
              fillWidth
              padding="l"
              radius="l"
              border="neutral-alpha-weak"
              background="surface"
              marginBottom="40"
            >
              <Column fillWidth gap="l">
                <Heading as="h2" id={about.intro.title} variant="display-strong-s" marginBottom="s">
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
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
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
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
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
            <Column fillWidth gap="l" marginTop="40">
              {about.technical.skills.map((skill, index) => (
                <Card
                  key={`${skill}-${index}`}
                  fillWidth
                  padding="l"
                  radius="l"
                  border="neutral-alpha-weak"
                  background="surface"
                  gap="m"
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
      </Column>
    </Column>
  );
}