import { motion } from "framer-motion";
import { ExternalLink, Sparkles, ChevronDown } from "lucide-react";

export const HeroDemoSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-16"
    >
      {/* Interactive Demo Label */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider font-bold">
          <Sparkles className="w-4 h-4 text-brutal-purple" />
          <span>Interactive Demo</span>
        </div>
        <p className="mt-2 text-muted-foreground font-mono text-sm">
          www.devlogg.co/ashutoshbhandari5 • <span className="text-primary font-bold">Try it! People love exploring</span>
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-3"
        >
          <ChevronDown className="w-5 h-5 mx-auto text-muted-foreground" />
        </motion.div>
      </div>

      {/* Browser Frame with iframe */}
      <div className="max-w-5xl mx-auto">
        <div className="brutal-border brutal-shadow-lg overflow-hidden bg-card">
          {/* Browser header */}
          <div className="bg-foreground px-4 py-3 flex items-center gap-3 border-b-3 border-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-brutal-red border-2 border-card" />
              <div className="w-3 h-3 rounded-full bg-brutal-yellow border-2 border-card" />
              <div className="w-3 h-3 rounded-full bg-brutal-green border-2 border-card" />
            </div>
            <div className="flex-1 flex items-center gap-2 bg-card/10 rounded px-3 py-1">
              <span className="font-mono text-xs text-card/70">www.devlogg.co/</span>
              <span className="font-mono text-xs text-card font-bold">ashutoshbhandari5</span>
            </div>
            <a 
              href="https://www.devlogg.co/ashutoshbhandari5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-card/70 hover:text-card transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          {/* iframe container */}
          <div className="relative bg-background">
            <iframe
              src="https://www.devlogg.co/ashutoshbhandari5"
              title="DevLogg Portfolio Demo"
              className="w-full h-[500px] md:h-[600px] border-0"
              loading="lazy"
            />
            {/* Scroll indicator overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent pointer-events-none flex items-end justify-center pb-2">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground bg-card/80 px-3 py-1 brutal-border-2">
                Scroll to explore ↓
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
