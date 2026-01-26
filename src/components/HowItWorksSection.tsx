import { motion } from "framer-motion";
import { Github, Code2, FileText, MessageSquare, Loader2, Palette, Link, Check, Copy } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect your platforms",
    description: "Link GitHub, LeetCode, Dev.to, and more. We only read public data—no write access ever.",
    content: (
      <div className="flex flex-wrap gap-3">
        {[
          { name: "GitHub", icon: Github, connected: true },
          { name: "LeetCode", icon: Code2, connected: true },
          { name: "Dev.to", icon: FileText, connected: false },
          { name: "Stack Overflow", icon: MessageSquare, connected: false },
        ].map((platform) => (
          <div
            key={platform.name}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
              platform.connected
                ? "bg-primary/10 border-primary text-primary"
                : "bg-secondary border-border text-muted-foreground"
            }`}
          >
            <platform.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{platform.name}</span>
            {platform.connected && <Check className="w-3 h-3" />}
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "02",
    title: "We analyze & build",
    description: "Our AI processes your contributions and creates a living profile that updates automatically.",
    content: (
      <div className="space-y-3">
        {[
          { text: "Analyzing commits...", done: true },
          { text: "Processing problems...", done: true },
          { text: "Building profile...", done: false },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            {item.done ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Loader2 className="w-4 h-4 text-primary animate-spin" />
            )}
            <span className={item.done ? "text-muted-foreground" : "text-foreground"}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "03",
    title: "Customize your look",
    description: "Choose themes, highlight your best work, and add personal touches to your profile.",
    content: (
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          {["bg-violet-500", "bg-blue-500", "bg-emerald-500", "bg-amber-500"].map((color, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-lg ${color} ${i === 0 ? "ring-2 ring-offset-2 ring-primary" : ""}`}
            />
          ))}
        </div>
        <span className="text-sm text-primary font-medium flex items-center gap-1">
          <Palette className="w-4 h-4" /> Theme applied
        </span>
      </div>
    ),
  },
  {
    number: "04",
    title: "Share one link",
    description: "Replace your resume with a DevLog profile. Let your actual work speak for itself.",
    content: (
      <div className="flex items-center gap-3">
        <div className="flex-1 px-4 py-2 bg-secondary rounded-lg text-sm">
          <span className="text-muted-foreground">devlogg.co/</span>
          <span className="text-foreground font-medium">you</span>
        </div>
        <div className="flex items-center gap-1 text-green-500 text-sm font-medium">
          <Copy className="w-4 h-4" />
          Copied!
        </div>
      </div>
    ),
  },
];

export const HowItWorksSection = () => {
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
          <span className="text-primary text-sm font-medium mb-4 block">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            From scattered profiles to{" "}
            <span className="gradient-text">unified proof.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get your DevLog profile ready in under 2 minutes. No complex setup required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 card-shadow border border-border"
            >
              <span className="text-5xl font-bold text-primary/20">{step.number}</span>
              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground mb-6">{step.description}</p>
              <div className="p-4 bg-secondary/50 rounded-xl">{step.content}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
