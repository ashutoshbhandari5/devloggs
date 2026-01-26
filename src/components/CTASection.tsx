import { motion } from "framer-motion";
import { BrutalButton } from "./brutal/BrutalButton";
import { PhaseLabel } from "./brutal/PhaseLabel";
import { ArrowRight, CreditCard, Clock, Trash2, CheckCircle2 } from "lucide-react";

const benefits = [
  { icon: CreditCard, text: "No credit card required" },
  { icon: Clock, text: "Setup in 2 minutes" },
  { icon: Trash2, text: "Delete anytime" },
];

export const CTASection = () => {
  return (
    <section className="py-24 bg-foreground text-card grid-pattern relative overflow-hidden">
      {/* Animated background squares */}
      <motion.div
        animate={{ 
          rotate: [0, 90],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-64 h-64 border-4 border-card/10"
      />
      <motion.div
        animate={{ 
          rotate: [0, -90],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-96 h-96 border-4 border-card/10"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <PhaseLabel 
            phase="FINAL" 
            title="YOUR MOVE" 
            accentColor="accent"
            className="justify-center mb-8 text-card [&>div]:bg-accent [&>span]:text-card"
          />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold uppercase leading-tight">
            Your Next Opportunity Is{" "}
            <span className="text-accent">One Portfolio Away</span>
          </h2>

          <p className="mt-6 text-lg text-card/80 max-w-xl mx-auto">
            Every day you wait is a recruiter who doesn't see your work. Create your DevLogg profile now.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 text-sm text-card/70"
              >
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <BrutalButton variant="accent" size="lg" className="border-card">
              Create Your Portfolio Free
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </BrutalButton>
            <BrutalButton variant="outline" size="lg" className="bg-transparent text-card border-card hover:bg-card/10">
              See Example Profiles
            </BrutalButton>
          </motion.div>

          <p className="mt-8 text-sm text-card/60 font-mono">
            Free forever. No hidden fees. Just your work, showcased.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
