import { motion } from "framer-motion";
import { BrutalCard } from "./brutal/BrutalCard";
import { Github, Link, Sparkles, Share2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Github,
    title: "Connect GitHub",
    description: "Link your GitHub in one click. We fetch your repos, commits, and contribution data.",
    accent: "bg-foreground text-card",
  },
  {
    number: "02",
    icon: Link,
    title: "Add Platforms",
    description: "Connect LeetCode, StackOverflow, Dev.to and other platforms you use.",
    accent: "bg-primary text-primary-foreground",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "AI Analysis",
    description: "Our AI analyzes your work and generates insights about your coding patterns.",
    accent: "bg-accent text-accent-foreground",
  },
  {
    number: "04",
    icon: Share2,
    title: "Share & Win",
    description: "Get your unique URL. Share it with recruiters. Stand out from the crowd.",
    accent: "bg-brutal-green text-card",
  },
];

export const HowItWorksSection = () => {
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
            How It <span className="brutal-highlight">Works</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Four steps to stand out. Two minutes to set up.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <BrutalCard hover className="h-full p-6">
                <div className={`w-14 h-14 ${step.accent} brutal-border flex items-center justify-center mb-6`}>
                  <span className="font-mono font-bold text-xl">{step.number}</span>
                </div>
                <div className="w-12 h-12 bg-secondary brutal-border-2 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="font-mono font-bold text-lg uppercase mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </BrutalCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
