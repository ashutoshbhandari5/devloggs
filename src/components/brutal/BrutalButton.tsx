import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface BrutalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
}

export const BrutalButton = forwardRef<HTMLButtonElement, BrutalButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variantClasses = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-foreground text-background hover:bg-foreground/90",
      accent: "bg-accent text-accent-foreground hover:bg-accent/90",
      outline: "bg-card text-foreground hover:bg-secondary",
    };

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "font-mono font-bold uppercase tracking-wider brutal-border brutal-shadow transition-all duration-150",
          "hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5",
          "active:shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

BrutalButton.displayName = "BrutalButton";
