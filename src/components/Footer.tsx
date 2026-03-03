import { Row, SmartLink, Text, Icon } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          © {currentYear} {person.name}
        </Text>
        <Row gap="16" vertical="center">
          {social
            .filter((item) => (item.name === "LinkedIn" || item.name === "Email") && item.link)
            .map((item) => (
              <SmartLink
                key={item.name}
                href={item.link}
                aria-label={item.name}
                target={item.icon === "linkedin" ? "_blank" : undefined}
                rel={item.icon === "linkedin" ? "noopener noreferrer" : undefined}
              >
                <Icon name={item.icon as "linkedin" | "email"} size="s" onBackground="neutral-medium" />
              </SmartLink>
            ))}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
