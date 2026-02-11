"use client";

import { useEffect, useState } from "react";
import { Avatar } from "@once-ui-system/core";

interface ThemeAwareAvatarProps {
  size?: "s" | "m" | "l" | "xl";
  [key: string]: any;
}

export function ThemeAwareAvatar({ size, ...props }: ThemeAwareAvatarProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      setTheme(currentTheme === "dark" ? "dark" : "light");
    };

    updateTheme();

    // Watch for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // Use different images based on theme
  const avatarSrc = mounted && theme === "light" 
    ? "/images/avatar-light.png" 
    : "/images/avatar-dark.jpg";

  return <Avatar src={avatarSrc} size={size} {...props} />;
}
