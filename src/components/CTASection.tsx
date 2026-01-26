import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Clock, Trash2 } from "lucide-react";

const benefits = [
  { icon: CreditCard, text: "No credit card required" },
  { icon: Clock, text: "Setup in 2 minutes" },
  { icon: Trash2, text: "Delete anytime" },
];

export const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <span className="text-primary text-sm font-medium mb-4 block">
            Join 500+ developers today
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your next opportunity is{" "}
            <span className="gradient-text">one portfolio away.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Every day you wait is a recruiter who doesn't see your work. Create your DevLogg profile now and start getting noticed.
          </p>

          <div className="flex items-center justify-center gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <benefit.icon className="w-4 h-4 text-primary" />
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="gradient-bg button-shadow border-0 text-primary-foreground px-8 py-6 text-lg font-semibold"
            >
              Create Your Portfolio Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              See example profiles
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Free forever. No hidden fees. Just your work, showcased beautifully.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
