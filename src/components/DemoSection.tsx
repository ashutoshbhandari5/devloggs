import { motion } from "framer-motion";
import { TerminalWindow } from "./brutal/TerminalWindow";
import { BrutalBadge } from "./brutal/BrutalBadge";
import { Github, Code2, Trophy, MessageSquare } from "lucide-react";

const stats = [
  { label: "Commits", value: "1,247", trend: "+12%" },
  { label: "PRs Merged", value: "89", trend: "+8%" },
  { label: "Stars", value: "156", trend: "+23%" },
  { label: "Languages", value: "7", trend: "" },
];

const languages = [
  { name: "TypeScript", percentage: 45, color: "bg-brutal-blue" },
  { name: "Python", percentage: 25, color: "bg-brutal-yellow" },
  { name: "Rust", percentage: 15, color: "bg-brutal-orange" },
  { name: "Go", percentage: 15, color: "bg-brutal-green" },
];

const achievements = [
  "100 Day Streak 🔥",
  "Open Source Hero",
  "Bug Crusher",
  "Code Reviewer",
];

export const DemoSection = () => {
  return (
    <section id="demo" className="py-24 bg-secondary/30 grid-pattern scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold uppercase text-foreground">
            Your <span className="brutal-highlight">Living</span> Portfolio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real data. Real proof. Real impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <TerminalWindow title="devlogg.profile">
            <div className="p-6">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b-3 border-foreground">
                <div className="w-16 h-16 bg-primary brutal-border flex items-center justify-center">
                  <span className="text-2xl font-mono font-bold text-primary-foreground">JD</span>
                </div>
                <div>
                  <h3 className="text-2xl font-mono font-bold uppercase">John Developer</h3>
                  <p className="text-muted-foreground font-mono">Full-Stack Engineer • 3 YOE</p>
                </div>
                <div className="flex flex-wrap gap-2 ml-auto">
                  <BrutalBadge variant="default" icon={<Github className="w-3 h-3" />}>GitHub</BrutalBadge>
                  <BrutalBadge variant="default" icon={<Code2 className="w-3 h-3" />}>LeetCode</BrutalBadge>
                  <BrutalBadge variant="default" icon={<MessageSquare className="w-3 h-3" />}>StackOverflow</BrutalBadge>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="bg-secondary brutal-border-2 brutal-shadow-sm p-4 text-center"
                  >
                    <p className="text-3xl font-mono font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
                    {stat.trend && (
                      <p className="text-xs font-mono text-brutal-green font-bold mt-1">{stat.trend}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Languages */}
              <div className="mb-6">
                <h4 className="font-mono text-sm uppercase tracking-wider font-bold mb-4">Languages</h4>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="w-24 font-mono text-sm">{lang.name}</span>
                      <div className="flex-1 h-6 bg-secondary brutal-border-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          className={`h-full ${lang.color}`}
                        />
                      </div>
                      <span className="font-mono text-sm font-bold w-12 text-right">{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-mono text-sm uppercase tracking-wider font-bold mb-4 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-brutal-yellow" />
                  Achievements
                </h4>
                <div className="flex flex-wrap gap-2">
                  {achievements.map((achievement, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="px-3 py-2 bg-accent brutal-border-2 brutal-shadow-sm font-mono text-sm font-bold"
                    >
                      {achievement}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
};
