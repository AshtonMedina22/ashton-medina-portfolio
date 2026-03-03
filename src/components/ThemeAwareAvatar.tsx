"use client";

import { Avatar } from "@once-ui-system/core";

interface ThemeAwareAvatarProps {
  size?: "s" | "m" | "l" | "xl";
  [key: string]: any;
}

export function ThemeAwareAvatar({ size, ...props }: ThemeAwareAvatarProps) {

  const avatarSrc = "/images/avatar.png";

  return <Avatar src={avatarSrc} size={size} {...props} />;
}
