import { motion } from "framer-motion";
import { BrutalButton } from "./brutal/BrutalButton";
import { BrutalBadge } from "./brutal/BrutalBadge";
import { SocialProof } from "./SocialProof";
import { HeroDemoSection } from "./HeroDemoSection";
import { ArrowRight, Link2, ShieldCheck, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-50" />

      <div className="container mx-auto px-6">
        <SocialProof />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-mono font-bold uppercase tracking-tight text-foreground leading-tight">
            One Place.{" "}
            <span className="brutal-highlight">Verified.</span>
            <br />
            Your Developer Identity.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Stop scattering links across your portfolio. DevLogg <span className="brutal-underline">consolidates</span> your GitHub, LeetCode, StackOverflow & Dev.to — with <span className="font-bold text-foreground">AI-powered validation</span> that proves it's really your work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <BrutalBadge variant="primary" icon={<Link2 className="w-4 h-4" />}>
            All Platforms, One Link
          </BrutalBadge>
          <BrutalBadge variant="accent" icon={<ShieldCheck className="w-4 h-4" />}>
            AI-Verified Contributions
          </BrutalBadge>
          <BrutalBadge variant="muted" icon={<Sparkles className="w-4 h-4" />}>
            Auto-Updated Profile
          </BrutalBadge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <BrutalButton variant="primary" size="lg">
            Create Your Verified Profile
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </BrutalButton>
          <BrutalButton variant="outline" size="lg">
            See How It Works
          </BrutalButton>
        </motion.div>

        {/* Interactive Demo Section */}
        <HeroDemoSection />
      </div>
    </section>
  );
};
