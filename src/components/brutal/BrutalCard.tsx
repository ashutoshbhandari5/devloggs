import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BrutalCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  shadowSize?: "sm" | "md" | "lg" | "xl";
  borderWidth?: 2 | 3;
  tiltOnHover?: boolean;
}

export const BrutalCard = ({
  children,
  className,
  hover = false,
  shadowSize = "md",
  borderWidth = 3,
  tiltOnHover = false,
}: BrutalCardProps) => {
  const shadowClasses = {
    sm: "brutal-shadow-sm",
    md: "brutal-shadow",
    lg: "brutal-shadow-lg",
    xl: "brutal-shadow-xl",
  };

  const borderClasses = {
    2: "brutal-border-2",
    3: "brutal-border",
  };

  if (tiltOnHover) {
    return (
      <motion.div
        whileHover={{ 
          x: -2, 
          y: -2,
          transition: { duration: 0.15 }
        }}
        whileTap={{ 
          x: 1, 
          y: 1,
          transition: { duration: 0.1 }
        }}
        className={cn(
          "bg-card",
          borderClasses[borderWidth],
          shadowClasses[shadowSize],
          "transition-shadow duration-150 hover:shadow-brutal-lg",
          className
        )}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={cn(
        "bg-card",
        borderClasses[borderWidth],
        shadowClasses[shadowSize],
        hover && "transition-all duration-150 hover:shadow-brutal-lg hover:-translate-x-0.5 hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  );
};
