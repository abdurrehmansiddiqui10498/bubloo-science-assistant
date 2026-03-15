import { motion } from "framer-motion";
import { Atom } from "lucide-react";

interface Props {
  onClick: () => void;
}

export function ChatButton({ onClick }: Props) {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-5 right-4 sm:right-6 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg animate-pulse-glow z-50 cursor-pointer"
      aria-label="Open chat assistant"
    >
      <Atom className="w-6 h-6 text-primary-foreground" />
    </motion.button>
  );
}
