import {
  Button,
  Column,
  Heading,
  Line,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social, techStack } from "@/resources";
import { ThemeAwareAvatar, SkillsSection } from "@/components";
import styles from "@/components/about/about.module.scss";

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
  return (
    <Column 
      fillWidth 
      paddingY="104"
      paddingX="l" 
      gap="48"
      horizontal="center"
      s={{ paddingX: "m", paddingY: "64" }}
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
      
      {/* Hero */}
      {about.avatar.display && (
        <div className="sectionHue" style={{ width: "100%", maxWidth: "var(--responsive-width-m)" }}>
        <Row
          fillWidth
          maxWidth="m"
          gap="48"
          vertical="center"
          style={{ flexDirection: "row" }}
          s={{ gap: "32" }}
        >
          <ThemeAwareAvatar size="xl" style={{ width: "160px", height: "160px", flexShrink: 0 }} />
          <Column className={styles.heroInfo}>
            <Heading as="h1" className={styles.heroName}>
              {person.name}
            </Heading>
            <Text as="p" className={styles.heroRole} onBackground="neutral-weak">
              {person.role}
            </Text>
            {person.locationLabel && (
              <Text as="p" className={styles.heroLocation} onBackground="neutral-weak">
                {person.locationLabel}
              </Text>
            )}
            <div className={styles.heroActions}>
              <Button
                href={`mailto:${person.email}`}
                label={person.email}
                size="m"
                variant="secondary"
                prefixIcon="email"
              />
              {social.find((s) => s.icon === "linkedin") && (
                <Button
                  href={social.find((s) => s.icon === "linkedin")!.link}
                  label="LinkedIn"
                  size="m"
                  variant="secondary"
                  prefixIcon="linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              )}
            </div>
          </Column>
        </Row>
        </div>
      )}

      <Line fillWidth maxWidth="m" />

      {/* Main content: skills, approach, focus areas */}
      <Column fillWidth maxWidth="m" gap="48" style={{ marginLeft: "auto", marginRight: "auto" }}>
          {techStack.length > 0 && (
            <div className="sectionHue" style={{ width: "100%" }}>
              <SkillsSection
                title="Skills & Technologies"
                technologies={techStack}
                tagSize="m"
                titleLevel="section"
                titleClassName={styles.sectionTitle}
                align="left"
              />
            </div>
          )}

          {about.intro.display && about.intro.title && (
            <div className={`${styles.introBlock} sectionHue`}>
              <h2 id={(about.intro.title || "").replace(/\s+/g, "-").toLowerCase()} className={styles.introTitle}>
                {about.intro.title}
              </h2>
              <div className={styles.introDescription}>
                {about.intro.description}
              </div>
            </div>
          )}

          {about.focusAreas?.display && about.focusAreas.areas.length > 0 && (
            <div className="sectionHue" style={{ width: "100%" }}>
            <Column fillWidth gap="16">
              <h2 className={styles.sectionTitle}>Focus Areas</h2>
              <div className={styles.focusAreaGrid}>
                {about.focusAreas.areas.map((area, index) => (
                  <article
                    key={`${area.title}-${index}`}
                    id={area.title.replace(/\s+/g, "-").toLowerCase()}
                    className={styles.focusAreaCard}
                  >
                    <h3 className={styles.focusAreaTitle}>{area.title}</h3>
                    <p className={styles.focusAreaDescription}>{area.description}</p>
                    <ul className={styles.focusAreaList}>
                      {area.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Column>
            </div>
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

          {about.technical.display && about.technical.skills.length > 0 && (
            <div className="sectionHue" style={{ width: "100%" }}>
            <Column fillWidth gap="16">
              <h2 id={about.technical.title.replace(/\s+/g, "-").toLowerCase()} className={styles.sectionTitle}>
                {about.technical.title}
              </h2>
              <div className={styles.technicalGrid}>
                {about.technical.skills.map((skill, index) => (
                  <div key={`${skill.title}-${index}`} className={styles.technicalCard}>
                    <h3 id={skill.title.replace(/\s+/g, "-").toLowerCase()} className={styles.technicalCardTitle}>
                      {skill.title}
                    </h3>
                    <div className={styles.technicalCardContent}>
                      {skill.bullets?.length ? (
                        <ul className={styles.technicalList}>
                          {skill.bullets.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        skill.description
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Column>
            </div>
          )}
      </Column>
    </Column>
  );
}