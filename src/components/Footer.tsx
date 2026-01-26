import { Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t-4 border-foreground bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary brutal-border flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-mono font-bold uppercase tracking-wider">DevLogg</span>
          </div>
          
          <div className="flex items-center gap-8 font-mono text-sm uppercase tracking-wider">
            <a href="#" className="hover:text-primary transition-colors brutal-underline">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors brutal-underline">Terms</a>
            <a href="#" className="hover:text-primary transition-colors brutal-underline">Contact</a>
          </div>

          <p className="text-sm text-muted-foreground font-mono">
            © 2024 DevLogg
          </p>
        </div>
      </div>
    </footer>
  );
};
