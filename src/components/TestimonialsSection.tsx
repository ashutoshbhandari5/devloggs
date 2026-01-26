import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I was struggling to stand out in applications. After creating my DevLogg profile, recruiters actually started reaching out to me. The GitHub integration showing my real contributions made all the difference.",
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Ex-Google, now at startup",
    initials: "SC",
    color: "bg-violet-500",
  },
  {
    quote: "As a student with no work experience, I needed something better than a blank resume. DevLogg let me showcase my open source contributions and side projects. Got my first internship within 2 weeks!",
    name: "Marcus Rodriguez",
    role: "CS Student",
    company: "Stanford University",
    initials: "MR",
    color: "bg-blue-500",
  },
  {
    quote: "My clients love seeing my actual code contributions instead of just a list of skills. The LeetCode stats integration shows I can actually solve problems. Worth every minute of setup time.",
    name: "Priya Patel",
    role: "Full-Stack Developer",
    company: "Freelancer",
    initials: "PP",
    color: "bg-emerald-500",
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
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium mb-4 block">Real Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Developers who got noticed
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join hundreds of developers who transformed their job search with DevLogg
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 card-shadow border border-border relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <p className="text-muted-foreground mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-primary-foreground font-semibold`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
