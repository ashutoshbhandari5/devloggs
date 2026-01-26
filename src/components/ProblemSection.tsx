import { motion } from "framer-motion";
import { X, AlertTriangle, Clock, FileX } from "lucide-react";

const problems = [
  {
    icon: FileX,
    title: "PDFs don't show what you can do",
    description: "Static resumes can't capture your real coding ability or growth trajectory.",
  },
  {
    icon: Clock,
    title: "Keeping profiles updated is exhausting",
    description: "LinkedIn, GitHub, portfolio site... they're always outdated by the time you need them.",
  },
  {
    icon: AlertTriangle,
    title: "Recruiters can't verify your skills",
    description: "Self-reported skills on a resume mean nothing without proof.",
  },
];

export const ProblemSection = () => {
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            <X className="w-4 h-4" />
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Your best work is{" "}
            <span className="gradient-text">invisible to recruiters</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Make recruiters actually see your work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 card-shadow border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
