import { motion } from "framer-motion";
import { BrutalButton } from "./brutal/BrutalButton";
import { PhaseLabel } from "./brutal/PhaseLabel";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for getting started",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "GitHub integration",
      "Basic portfolio page",
      "Public profile URL",
      "Activity timeline",
      "Community support",
    ],
    cta: "Get Started",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For serious developers",
    icon: <Crown className="w-6 h-6" />,
    features: [
      "Everything in Starter",
      "LeetCode & StackOverflow",
      "Dev.to integration",
      "AI-powered insights",
      "Custom domain",
      "Priority support",
      "Analytics dashboard",
    ],
    cta: "Start Pro Trial",
    variant: "primary" as const,
    popular: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "/month",
    description: "For teams & companies",
    icon: <Rocket className="w-6 h-6" />,
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team analytics",
      "API access",
      "White-label options",
      "Dedicated support",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <PhaseLabel
            phase="PRICING"
            title="SIMPLE & TRANSPARENT"
            accentColor="primary"
            className="justify-center mb-8"
          />

          <h2 className="text-4xl md:text-5xl font-mono font-bold uppercase text-foreground">
            Choose Your <span className="brutal-highlight">Plan</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you need more power.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className={`relative bg-card brutal-border brutal-shadow p-6 flex flex-col ${
                plan.popular ? "md:-translate-y-4" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider font-bold px-4 py-2 brutal-border-2">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-accent brutal-border-2 flex items-center justify-center mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-mono font-bold uppercase">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b-3 border-foreground">
                <span className="text-5xl font-mono font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground font-mono">
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-brutal-green brutal-border-2 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-foreground" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <BrutalButton
                variant={plan.variant}
                size="lg"
                className="w-full justify-center"
              >
                {plan.cta}
              </BrutalButton>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-muted-foreground font-mono text-sm"
        >
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-brutal-green" />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-brutal-green" />
            Cancel anytime
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-brutal-green" />
            Try free, upgrade anytime
          </span>
        </motion.div>
      </div>
    </section>
  );
};
