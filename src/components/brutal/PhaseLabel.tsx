import { cn } from "@/lib/utils";

interface PhaseLabelProps {
  phase: string;
  title: string;
  className?: string;
  accentColor?: "primary" | "accent" | "destructive";
}

export const PhaseLabel = ({
  phase,
  title,
  className,
  accentColor = "primary",
}: PhaseLabelProps) => {
  const colorClasses = {
    primary: "bg-primary",
    accent: "bg-accent",
    destructive: "bg-destructive",
  };

  return (
    <div className={cn("inline-flex items-center gap-4", className)}>
      <div className={cn("w-10 h-1.5", colorClasses[accentColor])} />
      <span className="font-mono text-sm uppercase tracking-widest font-bold text-foreground">
        {phase}: {title}
      </span>
    </div>
  );
};
