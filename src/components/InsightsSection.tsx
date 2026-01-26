import { motion } from "framer-motion";
import { TrendingUp, Flame, Brain, Code } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    stat: "+127%",
    label: "YoY Growth",
    title: "Growth Trajectory",
    description: "Track how your skills evolve through real usage, not self-assessments.",
  },
  {
    icon: Flame,
    stat: "342",
    label: "Day Streak",
    title: "Consistency Patterns",
    description: "Your commit streaks and activity rhythm tell a compelling story.",
  },
  {
    icon: Brain,
    stat: "312",
    label: "Problems",
    title: "Problem-Solving",
    description: "LeetCode patterns show how you approach and conquer challenges.",
  },
  {
    icon: Code,
    stat: "8",
    label: "Languages",
    title: "Tech Stack Evidence",
    description: "Real language usage from your repos, verified by actual code.",
  },
];

const languages = [
  { name: "TypeScript", percent: 45, color: "bg-blue-500" },
  { name: "Python", percent: 28, color: "bg-yellow-500" },
  { name: "Rust", percent: 15, color: "bg-orange-500" },
  { name: "Go", percent: 12, color: "bg-cyan-500" },
];

const achievements = ["100 Day Streak", "Open Source", "Top 5%", "Prolific"];

export const InsightsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium mb-4 block">Rich Insights</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Show patterns,{" "}
            <span className="gradient-text">not bullet points.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            DevLog extracts meaningful signals from your activity—insights that make recruiters actually understand who you are as a developer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Insights grid */}
          <div className="grid grid-cols-2 gap-4">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 card-shadow border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">{insight.stat}</span>
                  <span className="text-xs text-muted-foreground">{insight.label}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{insight.title}</h3>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Visualization cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Activity chart */}
            <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">Contribution Activity</h4>
                <span className="text-sm text-muted-foreground">Last 20 weeks</span>
              </div>
              <div className="h-24 flex items-end gap-1">
                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary rounded-t transition-all hover:bg-primary/80"
                    style={{ height: `${20 + Math.random() * 80}%`, opacity: 0.3 + Math.random() * 0.7 }}
                  />
                ))}
              </div>
            </div>

            {/* Language usage */}
            <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
              <h4 className="font-semibold text-foreground mb-4">Language Usage</h4>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-3">
                    <span className="text-sm text-foreground w-24">{lang.name}</span>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`h-full ${lang.color} rounded-full`}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-12">{lang.percent}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-card rounded-2xl p-6 card-shadow border border-border">
              <h4 className="font-semibold text-foreground mb-4">Achievements</h4>
              <div className="flex flex-wrap gap-2">
                {achievements.map((achievement) => (
                  <span
                    key={achievement}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
