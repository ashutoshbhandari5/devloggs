import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BrutalBadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "accent" | "muted";
  icon?: ReactNode;
}

export const BrutalBadge = ({
  children,
  className,
  variant = "default",
  icon,
}: BrutalBadgeProps) => {
  const variantClasses = {
    default: "bg-card text-foreground",
    primary: "bg-primary text-primary-foreground",
    accent: "bg-accent text-accent-foreground",
    muted: "bg-secondary text-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase tracking-wider font-bold brutal-border-2 brutal-shadow-sm",
        variantClasses[variant],
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
};
