import { motion } from "framer-motion";

const avatars = [
  { initial: "A", color: "bg-violet-500" },
  { initial: "K", color: "bg-purple-500" },
  { initial: "M", color: "bg-fuchsia-500" },
  { initial: "J", color: "bg-pink-500" },
];

export const SocialProof = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center gap-3 px-4 py-2 rounded-full bg-card card-shadow border border-border"
    >
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full ${avatar.color} flex items-center justify-center text-primary-foreground text-sm font-medium border-2 border-card`}
          >
            {avatar.initial}
          </div>
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">500+</span> developers joined
      </span>
    </motion.div>
  );
};
