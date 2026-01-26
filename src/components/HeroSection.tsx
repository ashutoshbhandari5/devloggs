import { motion } from "framer-motion";
import { BrutalButton } from "./brutal/BrutalButton";
import { BrutalBadge } from "./brutal/BrutalBadge";
import { PhaseLabel } from "./brutal/PhaseLabel";
import { SocialProof } from "./SocialProof";
import { ArrowRight, Clock, Brain, FileX } from "lucide-react";

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
          <PhaseLabel 
            phase="PHASE 01" 
            title="THE NOISE" 
            accentColor="destructive"
            className="justify-center mb-8"
          />

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-mono font-bold uppercase tracking-tight text-foreground leading-tight">
            This Is The{" "}
            <span className="brutal-highlight">Reality</span>
            <br />
            Of Your Resume
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Recruiters spend <span className="brutal-underline">7 seconds</span> on your resume.
            Your PDF gets lost in ATS black holes. Your best work? <span className="font-bold text-foreground">Invisible.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <BrutalBadge variant="muted" icon={<Clock className="w-4 h-4" />}>
            7s Attention Span
          </BrutalBadge>
          <BrutalBadge variant="muted" icon={<Brain className="w-4 h-4" />}>
            ATS Black Hole
          </BrutalBadge>
          <BrutalBadge variant="muted" icon={<FileX className="w-4 h-4" />}>
            PDF Graveyard
          </BrutalBadge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <BrutalButton variant="primary" size="lg">
            Break Free Now
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </BrutalButton>
          <BrutalButton variant="outline" size="lg">
            See Demo
          </BrutalButton>
        </motion.div>
      </div>
    </section>
  );
};
