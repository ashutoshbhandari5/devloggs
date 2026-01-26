import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TerminalWindowProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export const TerminalWindow = ({
  children,
  title = "terminal",
  className,
}: TerminalWindowProps) => {
  return (
    <div className={cn("brutal-border brutal-shadow-lg overflow-hidden", className)}>
      {/* Terminal header */}
      <div className="bg-foreground px-4 py-3 flex items-center gap-3 border-b-3 border-foreground">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brutal-red border-2 border-card" />
          <div className="w-3 h-3 rounded-full bg-brutal-yellow border-2 border-card" />
          <div className="w-3 h-3 rounded-full bg-brutal-green border-2 border-card" />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-card font-bold">
          {title}
        </span>
      </div>
      {/* Terminal content */}
      <div className="bg-card">
        {children}
      </div>
    </div>
  );
};
