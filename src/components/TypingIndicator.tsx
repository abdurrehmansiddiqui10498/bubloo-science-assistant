import { motion } from "framer-motion";
import { Atom } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="flex gap-2.5">
      <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-primary/20">
        <Atom className="w-3.5 h-3.5 text-primary animate-spin" style={{ animationDuration: "3s" }} />
      </div>
      <div className="bg-chat-bot rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5 items-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary/60"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}
