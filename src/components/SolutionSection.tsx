import { motion } from "framer-motion";
import { BrutalButton } from "./brutal/BrutalButton";
import { PhaseLabel } from "./brutal/PhaseLabel";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Auto-sync your GitHub contributions",
  "Showcase LeetCode problem-solving",
  "Display real coding metrics",
  "Stand out from 242 identical PDFs",
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
            phase="PHASE 02" 
            title="THE SIGNAL" 
            accentColor="primary"
            className="justify-center mb-8"
          />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold uppercase text-foreground leading-tight max-w-4xl mx-auto">
            What If You Could Show{" "}
            <span className="brutal-underline">Proof</span>
            <br />
            Instead Of Claims?
          </h2>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop telling recruiters you're skilled. <span className="font-bold text-foreground">Show them.</span>{" "}
            DevLogg creates a living portfolio that updates automatically with your real work.
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
                <CheckCircle2 className="w-5 h-5 text-brutal-green flex-shrink-0" />
                <span className="font-medium text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <BrutalButton variant="accent" size="lg">
              Create Your Signal
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </BrutalButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
