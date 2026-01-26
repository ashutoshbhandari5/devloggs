import { motion } from "framer-motion";
import { Users, Star } from "lucide-react";
import { BrutalBadge } from "./brutal/BrutalBadge";

export const SocialProof = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="flex flex-wrap items-center justify-center gap-4"
    >
      <BrutalBadge variant="accent" icon={<Users className="w-3 h-3" />}>
        500+ Developers
      </BrutalBadge>
      <BrutalBadge variant="primary" icon={<Star className="w-3 h-3" />}>
        4.9/5 Rating
      </BrutalBadge>
    </motion.div>
  );
};
