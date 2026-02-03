import { BrutalCard } from "@/components/brutal/BrutalCard";
import { BrutalBadge } from "@/components/brutal/BrutalBadge";
import { PhaseLabel } from "@/components/brutal/PhaseLabel";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

interface TechSkill {
  name: string;
  icon: string;
  proficiency: number;
  frameworks?: string[];
  projects?: number;
}

const techSkills: TechSkill[] = [
  { name: "TypeScript", icon: "TS", proficiency: 45, frameworks: ["React", "Next.js", "Node.js"], projects: 12 },
  { name: "Python", icon: "PY", proficiency: 30, frameworks: ["FastAPI", "Django"], projects: 8 },
  { name: "JavaScript", icon: "JS", proficiency: 15, frameworks: ["Vue", "Express"], projects: 5 },
  { name: "Go", icon: "GO", proficiency: 10, frameworks: ["Gin", "Echo"], projects: 3 },
];

// Option 1: Compact Inline Bars Layout
const CompactInlineBars = () => {
  return (
    <div className="space-y-3">
      {techSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <div className="flex items-center gap-4">
            {/* Tech Icon */}
            <div className="w-10 h-10 bg-primary text-primary-foreground brutal-border-2 brutal-shadow-sm flex items-center justify-center font-mono font-bold text-sm shrink-0">
              {skill.icon}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono font-bold text-sm">{skill.name}</span>
                <span className="font-mono text-xs text-muted-foreground">{skill.proficiency}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="h-2 bg-secondary brutal-border-2 overflow-hidden">
                <motion.div
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
              
              {/* Frameworks Tree */}
              {skill.frameworks && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {skill.frameworks.map((fw, i) => (
                    <span
                      key={fw}
                      className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground"
                    >
                      <span className="text-border">{i === skill.frameworks!.length - 1 ? '└─' : '├─'}</span>
                      {fw}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            {/* Project Count */}
            <div className="text-right shrink-0">
              <span className="font-mono text-xs text-muted-foreground">{skill.projects} repos</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Option 2: Grid Cards Layout
const GridCardsLayout = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {techSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <BrutalCard className="p-4" hover shadowSize="sm" borderWidth={2}>
            <div className="flex items-start gap-3">
              {/* Tech Icon */}
              <div className="w-12 h-12 bg-primary text-primary-foreground brutal-border-2 flex items-center justify-center font-mono font-bold shrink-0">
                {skill.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono font-bold">{skill.name}</span>
                  <span className="font-mono text-sm font-bold text-primary">{skill.proficiency}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-3 bg-secondary brutal-border-2 overflow-hidden mb-3">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
                
                {/* Framework Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.frameworks?.map((fw) => (
                    <span
                      key={fw}
                      className="px-2 py-0.5 bg-secondary font-mono text-xs brutal-border-2"
                    >
                      {fw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Project Count Footer */}
            <div className="mt-3 pt-3 border-t-2 border-border flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">Used in {skill.projects} repositories</span>
              <CheckCircle2 className="w-4 h-4 text-brutal-green" />
            </div>
          </BrutalCard>
        </motion.div>
      ))}
    </div>
  );
};

export const TechnicalExpertiseShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <PhaseLabel phase="Redesign" title="Technical Expertise" />
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Clean. Visual. <span className="brutal-highlight">Scannable.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two approaches to replace the cluttered tabbed interface with unified, high-density views.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Option 1: Compact Inline */}
          <div>
            <BrutalCard className="p-6" shadowSize="lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <h3 className="font-mono font-bold text-lg">Option 1: Compact List</h3>
                </div>
                <BrutalBadge variant="accent" icon={<Sparkles className="w-3 h-3" />}>
                  AI Verified
                </BrutalBadge>
              </div>
              <CompactInlineBars />
            </BrutalCard>
            <p className="mt-3 text-sm text-muted-foreground font-mono text-center">
              ↳ Tree-style framework grouping • Minimal vertical space
            </p>
          </div>

          {/* Option 2: Grid Cards */}
          <div>
            <BrutalCard className="p-6" shadowSize="lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <h3 className="font-mono font-bold text-lg">Option 2: Grid Cards</h3>
                </div>
                <BrutalBadge variant="accent" icon={<Sparkles className="w-3 h-3" />}>
                  AI Verified
                </BrutalBadge>
              </div>
              <GridCardsLayout />
            </BrutalCard>
            <p className="mt-3 text-sm text-muted-foreground font-mono text-center">
              ↳ Individual cards per tech • Framework tags inline
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
