import { motion } from "framer-motion";
import { BrutalCard } from "./brutal/BrutalCard";
import { TrendingUp, GitCommit, Calendar, Zap } from "lucide-react";

const weeklyData = [
  { day: "Mon", commits: 12, height: 48 },
  { day: "Tue", commits: 8, height: 32 },
  { day: "Wed", commits: 15, height: 60 },
  { day: "Thu", commits: 22, height: 88 },
  { day: "Fri", commits: 18, height: 72 },
  { day: "Sat", commits: 5, height: 20 },
  { day: "Sun", commits: 10, height: 40 },
];

const insights = [
  {
    icon: TrendingUp,
    title: "Peak Productivity",
    value: "Thursday @ 2PM",
    description: "You code best in early afternoon",
    color: "bg-brutal-green",
  },
  {
    icon: GitCommit,
    title: "Commit Style",
    value: "Atomic",
    description: "Small, focused commits (avg 42 LOC)",
    color: "bg-brutal-blue",
  },
  {
    icon: Calendar,
    title: "Consistency",
    value: "87%",
    description: "Days active in the last 90 days",
    color: "bg-brutal-purple",
  },
  {
    icon: Zap,
    title: "Top Language",
    value: "TypeScript",
    description: "45% of your contributions",
    color: "bg-brutal-yellow",
  },
];

export const InsightsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold uppercase text-foreground">
            AI-Powered <span className="brutal-highlight">Insights</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We analyze your code to reveal patterns recruiters love
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Weekly Activity Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <BrutalCard className="p-6 h-full">
              <h3 className="font-mono font-bold uppercase text-lg mb-6">Weekly Activity</h3>
              <div className="flex items-end justify-between gap-3 h-48">
                {weeklyData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: data.height }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-full bg-primary brutal-border-2"
                      style={{ minHeight: 8 }}
                    />
                    <span className="font-mono text-xs font-bold">{data.commits}</span>
                    <span className="font-mono text-xs text-muted-foreground">{data.day}</span>
                  </div>
                ))}
              </div>
            </BrutalCard>
          </motion.div>

          {/* Insights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <BrutalCard hover className="p-4 h-full">
                  <div className={`w-10 h-10 ${insight.color} brutal-border-2 flex items-center justify-center mb-3`}>
                    <insight.icon className="w-5 h-5" />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{insight.title}</p>
                  <p className="font-mono font-bold text-xl mt-1">{insight.value}</p>
                  <p className="text-sm text-muted-foreground mt-2">{insight.description}</p>
                </BrutalCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
