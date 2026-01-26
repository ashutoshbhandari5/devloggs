import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <Code2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">DevLog</span>
        </div>
        <Button variant="default" size="sm" className="gradient-bg button-shadow border-0">
          Login
        </Button>
      </div>
    </motion.nav>
  );
};
