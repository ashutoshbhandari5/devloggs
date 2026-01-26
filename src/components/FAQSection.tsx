import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PhaseLabel } from "./brutal/PhaseLabel";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does DevLogg pull my data?",
    answer: "We securely connect to your GitHub, LeetCode, Stack Overflow, and Dev.to accounts via their official APIs. Your credentials are never stored - we use OAuth tokens that you can revoke anytime.",
  },
  {
    question: "Is my data private?",
    answer: "Absolutely. You control what's visible on your profile. By default, only public repository data is shown. You can hide specific repos, contributions, or stats at any time.",
  },
  {
    question: "Can I use a custom domain?",
    answer: "Yes! Pro and Team plans include custom domain support. Simply add a CNAME record pointing to our servers, and we'll handle the SSL certificate automatically.",
  },
  {
    question: "How often is my data updated?",
    answer: "Your profile syncs automatically every 6 hours. Pro users can trigger manual syncs anytime and get real-time webhook updates for GitHub activity.",
  },
  {
    question: "What if I cancel my subscription?",
    answer: "Your profile stays active on the free plan with basic features. All your data is preserved - you just lose access to Pro features until you resubscribe.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with Pro or Team, contact us within 14 days for a full refund, no questions asked.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <PhaseLabel
            phase="FAQ"
            title="QUESTIONS ANSWERED"
            accentColor="accent"
            className="justify-center mb-8"
          />

          <h2 className="text-4xl md:text-5xl font-mono font-bold uppercase text-foreground">
            Got <span className="brutal-highlight">Questions?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about DevLogg.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
            >
              <div
                className={`bg-card brutal-border-2 overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "brutal-shadow-lg" : "brutal-shadow-sm hover:brutal-shadow"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span className="font-mono font-bold text-lg pr-4 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-8 h-8 bg-accent brutal-border-2 flex items-center justify-center flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 border-t-2 border-foreground/20 pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
