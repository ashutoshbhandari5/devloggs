import { motion } from "framer-motion";
import { BrutalButton } from "./brutal/BrutalButton";
import { PhaseLabel } from "./brutal/PhaseLabel";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe } from "lucide-react";

const benefits = [
  { icon: Zap, text: "All platforms consolidated in one link" },
  { icon: ShieldCheck, text: "AI verifies your contributions are genuine" },
  { icon: Globe, text: "Auto-updates as you code — always current" },
  { icon: CheckCircle2, text: "Showcase your verified developer identity online" },
];

export const SolutionSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <PhaseLabel 
            phase="THE SOLUTION" 
            title="CONSOLIDATED & VERIFIED" 
            accentColor="primary"
            className="justify-center mb-8"
          />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold uppercase text-foreground leading-tight max-w-4xl mx-auto">
            One Link.{" "}
            <span className="brutal-underline">AI-Verified.</span>
            <br />
            Undeniable Proof.
          </h2>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            DevLogg analyzes your GitHub commits, LeetCode solutions, StackOverflow answers & Dev.to articles. 
            Our AI validates it's <span className="font-bold text-foreground">genuinely your work</span> — not just links anyone could copy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-center gap-3 bg-card brutal-border-2 brutal-shadow-sm px-4 py-3"
              >
                <div className="w-8 h-8 bg-brutal-green brutal-border-2 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-4 h-4 text-foreground" />
                </div>
                <span className="font-medium text-foreground">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <BrutalButton variant="accent" size="lg">
              Get Your Verified Profile
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </BrutalButton>
            <p className="mt-4 font-mono text-sm text-muted-foreground">
              Not just another portfolio. Your <span className="text-primary font-bold">verified developer identity</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
