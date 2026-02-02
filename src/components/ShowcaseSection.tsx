import { motion } from "framer-motion";
import { BrutalCard } from "./brutal/BrutalCard";
import { ExternalLink, Github, Code2, Sparkles } from "lucide-react";

interface Developer {
  id: string;
  name: string;
  username: string;
  tagline: string;
  avatar: string;
  stats: {
    projects: number;
    commits?: number;
    languages?: string[];
  };
  profileUrl: string;
}

const developers: Developer[] = [
  {
    id: "1",
    name: "Ashutosh Bhandari",
    username: "ashutoshbhandari5",
    tagline: "Full-stack developer building cool stuff",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ashutosh&backgroundColor=b6e3f4",
    stats: {
      projects: 12,
      commits: 847,
      languages: ["TypeScript", "Python", "Go"],
    },
    profileUrl: "https://www.devlogg.co/ashutoshbhandari5",
  },
  {
    id: "2",
    name: "Sarah Chen",
    username: "sarahcodes",
    tagline: "Frontend wizard & UI enthusiast",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=ffd5dc",
    stats: {
      projects: 8,
      commits: 562,
      languages: ["React", "Vue", "CSS"],
    },
    profileUrl: "https://www.devlogg.co/sarahcodes",
  },
  {
    id: "3",
    name: "Marcus Johnson",
    username: "marcusj",
    tagline: "Backend engineer & API architect",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus&backgroundColor=c0aede",
    stats: {
      projects: 15,
      commits: 1203,
      languages: ["Node.js", "Rust", "PostgreSQL"],
    },
    profileUrl: "https://www.devlogg.co/marcusj",
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    username: "elenadev",
    tagline: "Mobile developer & open source contributor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=elena&backgroundColor=d1f4d1",
    stats: {
      projects: 6,
      commits: 421,
      languages: ["Swift", "Kotlin", "Flutter"],
    },
    profileUrl: "https://www.devlogg.co/elenadev",
  },
  {
    id: "5",
    name: "Alex Kim",
    username: "alexkimdev",
    tagline: "DevOps specialist & cloud architect",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex&backgroundColor=ffdfba",
    stats: {
      projects: 9,
      commits: 678,
      languages: ["Terraform", "Docker", "AWS"],
    },
    profileUrl: "https://www.devlogg.co/alexkimdev",
  },
];

// Shuffle array to show random developers
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const DeveloperCard = ({ developer, index }: { developer: Developer; index: number }) => {
  return (
    <motion.a
      href={developer.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="block group"
    >
      <BrutalCard 
        tiltOnHover 
        shadowSize="md" 
        className="p-0 overflow-hidden h-full"
      >
        {/* Header with accent color */}
        <div className="h-3 bg-primary" />
        
        <div className="p-5">
          {/* Avatar and basic info */}
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="w-16 h-16 brutal-border-2 brutal-shadow-sm overflow-hidden bg-secondary">
                <img
                  src={developer.avatar}
                  alt={developer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-brutal-green brutal-border-2 rounded-full flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-foreground" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-mono font-bold text-foreground text-lg truncate group-hover:text-primary transition-colors">
                {developer.name}
              </h3>
              <p className="font-mono text-xs text-muted-foreground">
                @{developer.username}
              </p>
              <p className="text-sm text-foreground/70 mt-1 line-clamp-2">
                {developer.tagline}
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-secondary px-2 py-1 brutal-border-2">
              <Code2 className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-xs font-bold">{developer.stats.projects} projects</span>
            </div>
            {developer.stats.commits && (
              <div className="flex items-center gap-1.5 bg-secondary px-2 py-1 brutal-border-2">
                <Github className="w-3.5 h-3.5 text-foreground" />
                <span className="font-mono text-xs font-bold">{developer.stats.commits}</span>
              </div>
            )}
          </div>

          {/* Languages/Skills */}
          {developer.stats.languages && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {developer.stats.languages.slice(0, 3).map((lang) => (
                <span
                  key={lang}
                  className="px-2 py-0.5 bg-accent/20 text-xs font-mono font-bold text-foreground brutal-border-2"
                >
                  {lang}
                </span>
              ))}
            </div>
          )}

          {/* View profile link */}
          <div className="mt-4 pt-3 border-t-2 border-border flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              View Profile
            </span>
            <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </BrutalCard>
    </motion.a>
  );
};

export const ShowcaseSection = () => {
  // Get shuffled developers (will be different on each render/visit)
  const shuffledDevelopers = shuffleArray(developers);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="phase-label text-primary mb-4 inline-flex">
            Developer Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-mono font-bold uppercase text-foreground">
            Meet Our <span className="brutal-highlight">Builders</span>
          </h2>
          <p className="mt-4 text-lg text-foreground/70 font-medium max-w-2xl mx-auto">
            Discover talented developers showcasing their work with verified GitHub stats
          </p>
        </motion.div>

        {/* Developer cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {shuffledDevelopers.map((developer, index) => (
            <DeveloperCard key={developer.id} developer={developer} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.devlogg.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors group"
          >
            <span>Join the community</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
