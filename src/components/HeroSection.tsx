import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SocialProof } from "./SocialProof";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [username, setUsername] = useState("");

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center">
        <SocialProof />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground"
        >
          Turn Your Code Into{" "}
          <span className="gradient-text">Career Opportunities</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Stop sending boring PDFs. Create a stunning developer portfolio that
          automatically showcases your GitHub, LeetCode, Stack Overflow & more
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span>2-minute setup</span>
          </div>
          <span className="text-border">|</span>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" />
            <span>No credit card needed</span>
          </div>
          <span className="text-border">|</span>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Start instantly</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <Button
            size="lg"
            className="gradient-bg button-shadow border-0 text-primary-foreground px-8 py-6 text-lg font-semibold"
          >
            Create Your Portfolio Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-border" />
            <span className="text-sm text-muted-foreground">or preview first</span>
            <div className="h-px w-16 bg-border" />
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <Sparkles className="w-4 h-4 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="Enter your GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-10 h-12 bg-card border-border"
              />
            </div>
            <Button variant="outline" className="h-12 px-6">
              Preview
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <p className="mt-3 text-sm text-muted-foreground">
            See how your portfolio will look before signing up
          </p>
        </motion.div>
      </div>
    </section>
  );
};
