import { motion } from "framer-motion";
import { PhaseLabel } from "./brutal/PhaseLabel";
import { Github, Code2, MessageSquare, FileText, ExternalLink, HelpCircle } from "lucide-react";

const scatteredLinks = [
  { icon: Github, label: "GitHub", url: "github.com/johndoe", color: "bg-foreground text-card" },
  { icon: Code2, label: "LeetCode", url: "leetcode.com/johndoe", color: "bg-brutal-yellow text-foreground" },
  { icon: MessageSquare, label: "StackOverflow", url: "stackoverflow.com/users/123", color: "bg-brutal-orange text-card" },
  { icon: FileText, label: "Dev.to", url: "dev.to/johndoe", color: "bg-brutal-blue text-card" },
  { icon: ExternalLink, label: "Portfolio", url: "johndoe.dev", color: "bg-brutal-purple text-card" },
  { icon: ExternalLink, label: "Projects", url: "projects.johndoe.dev", color: "bg-brutal-green text-card" },
];

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-secondary/50 dot-pattern">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <PhaseLabel 
            phase="THE PROBLEM" 
            title="SCATTERED & UNVERIFIED" 
            accentColor="destructive"
            className="justify-center mb-8"
          />

          <h2 className="text-4xl md:text-5xl font-mono font-bold uppercase text-foreground">
            Links Everywhere.{" "}
            <span className="brutal-highlight">Zero Validation.</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 font-medium max-w-2xl mx-auto">
            Typical dev portfolios: 6 different links, no proof it's actually your work. 
            How can hiring managers trust what they're seeing?
          </p>
        </motion.div>

        {/* Scattered links visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {scatteredLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? 1 : -1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-card brutal-border-2 brutal-shadow-sm p-4 relative"
              >
                <div className={`w-10 h-10 ${link.color} brutal-border-2 flex items-center justify-center mb-3`}>
                  <link.icon className="w-5 h-5" />
                </div>
                <p className="font-mono text-sm font-bold">{link.label}</p>
                <p className="font-mono text-xs text-muted-foreground truncate">{link.url}</p>
                
                {/* Question mark - unverified indicator */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-destructive brutal-border-2 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-3 h-3 text-destructive-foreground" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block bg-card brutal-border brutal-shadow p-6 max-w-xl">
            <p className="font-mono text-lg text-foreground mb-2">
              🤔 <span className="font-bold">"Is this really their code?"</span>
            </p>
            <p className="text-muted-foreground">
              Anyone can link to a GitHub repo. How do hiring managers know you actually contributed? 
              That you solved those LeetCode problems? That those StackOverflow answers are yours?
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-8 font-mono text-lg text-foreground"
        >
          Scattered links + no verification = <span className="text-destructive font-bold">Zero trust.</span>
        </motion.p>
      </div>
    </section>
  );
};
