import { motion } from "framer-motion";
import { ExternalLink, Github, Code, FileText, MessageSquare, TrendingUp } from "lucide-react";

const mockStats = [
  { label: "Total Stars", value: "1", icon: "⭐" },
  { label: "Total Commits", value: "345", icon: "📝" },
  { label: "Total PRs", value: "56", icon: "🔀" },
  { label: "Total Issues", value: "0", icon: "🎯" },
  { label: "PR Reviews", value: "0", icon: "👀" },
  { label: "Contributed to", value: "2", icon: "🤝" },
  { label: "Total Repos", value: "45", icon: "📁" },
];

const leetCodeDays = Array.from({ length: 35 }, (_, i) => ({
  active: Math.random() > 0.6,
  intensity: Math.floor(Math.random() * 4),
}));

export const DemoSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Interactive demo</span>
          </div>
          <p className="text-muted-foreground">
            www.devlogg.co/ashutoshbhandari5 •{" "}
            <span className="text-primary">Try it! People love exploring</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="browser-frame max-w-5xl mx-auto overflow-hidden"
        >
          {/* Browser header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-secondary text-sm text-muted-foreground">
                <span>www.devlogg.co/</span>
                <span className="text-foreground font-medium">ashutoshbhandari5</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </div>

          {/* Portfolio content */}
          <div className="p-6 bg-card">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Profile card */}
              <div className="bg-secondary/50 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    AB
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Ashutosh Bhandari</h3>
                    <p className="text-muted-foreground text-sm">Developer</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  📍 Columbus, Ohio
                </p>
                <p className="text-sm text-muted-foreground">
                  Aspiring data scientist with a strong foundation in machine learning and software development.
                </p>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-2">Education</h4>
                  <p className="text-sm font-medium text-foreground">Wright State University</p>
                  <p className="text-xs text-muted-foreground">Masters in Data Science</p>
                  <p className="text-xs text-muted-foreground">Jan 2023 - Jan 2026</p>
                </div>
              </div>

              {/* GitHub stats */}
              <div className="bg-secondary/50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Github className="w-5 h-5 text-foreground" />
                  <h4 className="font-semibold text-foreground">GitHub Contributions</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {mockStats.slice(0, 6).map((stat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-xs">{stat.icon}</span>
                      <div>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                        <p className="font-semibold text-foreground">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* LeetCode & Dev.to */}
              <div className="space-y-4">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-5 h-5 text-amber-500" />
                    <h4 className="font-semibold text-foreground">LeetCode Stats</h4>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {leetCodeDays.map((day, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-sm ${
                          day.active
                            ? day.intensity > 2
                              ? "bg-green-500"
                              : day.intensity > 1
                              ? "bg-green-400"
                              : "bg-green-300"
                            : "bg-secondary"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-foreground">8 Problems Solved</p>
                </div>

                <div className="bg-secondary/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-foreground" />
                    <h4 className="font-semibold text-foreground">Dev.to Stats</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Articles</p>
                      <p className="font-semibold text-foreground">2</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Avg Reactions</p>
                      <p className="font-semibold text-foreground">1.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth chart placeholder */}
            <div className="mt-6 bg-secondary/50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">Developer Growth</h4>
                <span className="ml-auto text-sm text-muted-foreground">433 Contributions in last 12 months</span>
              </div>
              <div className="h-24 flex items-end gap-1">
                {Array.from({ length: 52 }, (_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/20 rounded-t"
                    style={{ height: `${20 + Math.random() * 80}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Sparkles = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" fill="currentColor"/>
  </svg>
);
