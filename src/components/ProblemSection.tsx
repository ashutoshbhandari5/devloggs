import { motion } from "framer-motion";
import { TerminalWindow } from "./brutal/TerminalWindow";
import { User } from "lucide-react";

const applicants = [
  { name: "candidate_4821.pdf", skills: "React, Node.js, Python", match: "87%" },
  { name: "candidate_4822.pdf", skills: "React, Node.js, Python", match: "85%" },
  { name: "candidate_4823.pdf", skills: "React, TypeScript, AWS", match: "84%" },
  { name: "YOU", skills: "React, Node.js, Python", match: "86%", highlight: true },
  { name: "candidate_4825.pdf", skills: "React, Node.js, MongoDB", match: "83%" },
  { name: "candidate_4826.pdf", skills: "Vue, Node.js, Python", match: "82%" },
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
          <h2 className="text-4xl md:text-5xl font-mono font-bold uppercase text-foreground">
            Spot Yourself In The{" "}
            <span className="brutal-highlight">Noise</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            This is what recruiters see. Can you find yourself?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <TerminalWindow title="applicants.exe">
            <div className="p-4">
              {/* Table header */}
              <div className="grid grid-cols-12 gap-4 px-4 py-2 bg-foreground text-card font-mono text-xs uppercase tracking-wider border-b-2 border-foreground">
                <div className="col-span-5">File Name</div>
                <div className="col-span-5">Skills Detected</div>
                <div className="col-span-2 text-right">Match %</div>
              </div>

              {/* Applicant rows */}
              {applicants.map((applicant, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className={`grid grid-cols-12 gap-4 px-4 py-3 font-mono text-sm border-b-2 border-secondary ${
                    applicant.highlight
                      ? "bg-primary/10 border-l-4 border-l-primary"
                      : ""
                  }`}
                >
                  <div className="col-span-5 flex items-center gap-2">
                    {applicant.highlight ? (
                      <>
                        <User className="w-4 h-4 text-primary" />
                        <span className="font-bold text-primary">{applicant.name}</span>
                      </>
                    ) : (
                      <span className="text-muted-foreground">{applicant.name}</span>
                    )}
                  </div>
                  <div className={`col-span-5 ${applicant.highlight ? "text-foreground" : "text-muted-foreground"}`}>
                    {applicant.skills}
                  </div>
                  <div className={`col-span-2 text-right font-bold ${applicant.highlight ? "text-primary" : "text-muted-foreground"}`}>
                    {applicant.match}
                  </div>
                </motion.div>
              ))}

              {/* Footer */}
              <div className="px-4 py-4 bg-secondary/50 font-mono text-sm text-muted-foreground flex items-center justify-between">
                <span>+ 242 identical profiles pending review...</span>
                <span className="text-destructive font-bold">▌ SCANNING...</span>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-8 font-mono text-lg text-foreground"
        >
          Hard to find yourself, right? <span className="text-primary font-bold">That's the problem.</span>
        </motion.p>
      </div>
    </section>
  );
};
