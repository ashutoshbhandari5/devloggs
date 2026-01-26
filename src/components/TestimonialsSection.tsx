import { motion } from "framer-motion";
import { BrutalCard } from "./brutal/BrutalCard";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I was struggling to stand out in applications. After creating my DevLogg profile, recruiters actually started reaching out to me.",
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Ex-Google → Startup",
    initials: "SC",
    color: "bg-brutal-purple",
  },
  {
    quote: "As a student with no work experience, I needed something better than a blank resume. Got my first internship within 2 weeks!",
    name: "Marcus Rodriguez",
    role: "CS Student",
    company: "Stanford University",
    initials: "MR",
    color: "bg-brutal-blue",
  },
  {
    quote: "My clients love seeing my actual code contributions instead of just a list of skills. Worth every minute of setup time.",
    name: "Priya Patel",
    role: "Full-Stack Developer",
    company: "Freelancer",
    initials: "PP",
    color: "bg-brutal-green",
  },
];

const stats = [
  { value: "500+", label: "Developers" },
  { value: "10K+", label: "Portfolio Views" },
  { value: "50+", label: "Countries" },
  { value: "4.9/5", label: "Rating" },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/30 dot-pattern">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold uppercase text-foreground">
            Real <span className="brutal-highlight">Stories</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Developers who escaped the PDF graveyard
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <BrutalCard className="h-full p-6 relative">
                <Quote className="w-10 h-10 text-accent absolute top-4 right-4" />
                <p className="text-foreground font-medium mb-6 pr-12">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t-2 border-foreground">
                  <div className={`w-12 h-12 ${testimonial.color} brutal-border-2 flex items-center justify-center text-card font-mono font-bold`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-mono font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm font-mono text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </BrutalCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-card brutal-border-2 brutal-shadow-sm p-6">
              <p className="text-4xl font-mono font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground font-mono text-sm uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
