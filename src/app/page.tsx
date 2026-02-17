import {
  Text,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, about, person, baseURL, techStack } from "@/resources";
import { TechStackMarquee } from "@/components";
import styles from "./page.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column
      as="main"
      fillWidth
      horizontal="center"
      vertical="center"
      style={{ height: "100%", minHeight: 0 }}
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <div className={styles.viewportFill}>
        <div className={styles.contentBlock}>
          <div className="sectionHue" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Column maxWidth="s" horizontal="center" align="center" gap="s">
              {home.featured.display && (
                <RevealFx fillWidth horizontal="center" paddingBottom="4">
                  <Badge
                    background="brand-alpha-weak"
                    paddingX="12"
                    paddingY="4"
                    onBackground="neutral-strong"
                    textVariant="label-default-s"
                    arrow={false}
                    href={home.featured.href}
                  >
                    <Row paddingY="2">{home.featured.title}</Row>
                  </Badge>
                </RevealFx>
              )}
              <RevealFx translateY="2" fillWidth horizontal="center" paddingBottom="4">
                <Text as="h1" wrap="balance" onBackground="neutral-strong" className={styles.headline}>
                  {home.headline}
                </Text>
              </RevealFx>
              <RevealFx translateY="4" delay={0.15} fillWidth horizontal="center" paddingBottom="4">
                <Text wrap="balance" onBackground="neutral-weak" className={styles.subline}>
                  {home.subline}
                </Text>
              </RevealFx>
            </Column>
          </div>
        </div>
        {techStack.length > 0 && (
          <div className={styles.techSection}>
            <RevealFx delay={0.3} fillWidth>
              <div className="sectionHue" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Text variant="label-strong-m" align="center" onBackground="neutral-weak" className={styles.techLabel}>
                  Technologies I Work With
                </Text>
                <TechStackMarquee />
              </div>
            </RevealFx>
          </div>
        )}
      </div>
    </Column>
  );
}
