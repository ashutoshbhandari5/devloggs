import { motion } from "framer-motion";
import { BrutalCard } from "./brutal/BrutalCard";
import { Github, Link, Sparkles, Share2, ArrowRight } from "lucide-react";

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[12%] right-[12%] h-0.5 bg-foreground/20">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-full bg-foreground origin-left"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <BrutalCard tiltOnHover className="h-full p-6">
                {/* Step number with pulse animation on hover */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className={`w-14 h-14 ${step.accent} brutal-border flex items-center justify-center mb-6 relative z-10`}
                >
                  <span className="font-mono font-bold text-xl">{step.number}</span>
                </motion.div>
                
                <div className="w-12 h-12 bg-secondary brutal-border-2 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="font-mono font-bold text-lg uppercase mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </BrutalCard>

              {/* Arrow between steps - desktop only */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="hidden lg:flex absolute -right-3 top-[4rem] z-20 w-6 h-6 bg-accent brutal-border-2 items-center justify-center"
                >
                  <ArrowRight className="w-3 h-3" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
