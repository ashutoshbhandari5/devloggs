import { motion } from "framer-motion";

const avatarLetters = ["A", "K", "M", "J", "S"];

export const SocialProof = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="flex items-center justify-center gap-3"
    >
      {/* Stacked avatars with stagger animation */}
      <div className="flex -space-x-3">
        {avatarLetters.map((letter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: 0.1 + index * 0.05,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ 
              y: -4, 
              zIndex: 10,
              transition: { duration: 0.15 } 
            }}
            className="w-10 h-10 rounded-full bg-primary brutal-border-2 flex items-center justify-center text-primary-foreground font-mono font-bold text-sm cursor-pointer relative"
            style={{ zIndex: avatarLetters.length - index }}
          >
            {letter}
          </motion.div>
        ))}
      </div>
      
      {/* Count badge */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="bg-card brutal-border-2 brutal-shadow-sm px-4 py-2"
      >
        <span className="font-mono text-sm font-bold">
          <span className="text-primary">500+</span> developers joined
        </span>
      </motion.div>
    </motion.div>
  );
};
