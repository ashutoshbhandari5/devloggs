import { motion } from "framer-motion";
import { Check, Github, Code2, FileText, MessageSquare } from "lucide-react";

const platforms = [
  { name: "GitHub", icon: Github, stat: "2.8k commits", color: "bg-gray-900" },
  { name: "LeetCode", icon: Code2, stat: "312 solved", color: "bg-amber-500" },
  { name: "Dev.to", icon: FileText, stat: "24 articles", color: "bg-foreground" },
  { name: "Stack Overflow", icon: MessageSquare, stat: "5.2k rep", color: "bg-orange-500" },
];

const skills = ["React", "TypeScript", "Node.js", "Python", "PostgreSQL"];

export const SolutionSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Check className="w-4 h-4" />
            The Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            One link. Always current.{" "}
            <span className="gradient-text">Actually you.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            DevLog aggregates your real contributions from multiple platforms into a dynamic profile that speaks louder than any resume.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Platform integrations */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 card-shadow border border-border hover:card-shadow-hover transition-shadow"
              >
                <div className={`w-10 h-10 rounded-lg ${platform.color} flex items-center justify-center mb-4`}>
                  <platform.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="font-medium text-foreground">{platform.name}</p>
                <p className="text-sm text-primary font-semibold">{platform.stat}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Profile preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-3xl p-8 card-shadow border border-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-2xl font-bold">
                AK
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Alex Kim</h3>
                <p className="text-muted-foreground">Full-Stack Developer</p>
                <p className="text-sm text-primary">devlogg.co/alexkim</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">2.8k</p>
                <p className="text-xs text-muted-foreground">Commits</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">312</p>
                <p className="text-xs text-muted-foreground">Problems</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">24</p>
                <p className="text-xs text-muted-foreground">Articles</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">5.2k</p>
                <p className="text-xs text-muted-foreground">Rep</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
