"use client";

import { cn } from "@/lib/utils";
import * as Icons from "./icons";

type IconName = keyof typeof Icons;

interface IconWrapperProps {
  icon: IconName;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "blue";
}

export function IconWrapper({
  icon,
  className,
  size = "md",
  variant = "blue",
}: IconWrapperProps) {
  const Icon = Icons[icon];
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  const variantClasses = {
    gold: "text-amber-400",
    blue: "text-blue-400",
  };

  return (
    <Icon
      className={cn(
        sizeClasses[size],
        variantClasses[variant],
        "transition-colors duration-300",
        className
      )}
    />
  );
} 