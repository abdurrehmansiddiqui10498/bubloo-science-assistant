import { motion } from "framer-motion";

const SUGGESTIONS = [
  { label: "📚 Show me blog posts", query: "What blog posts are available on the website?" },
  { label: "👥 Who's on the team?", query: "Tell me about the team members" },
  { label: "📧 Contact info", query: "How can I contact the Bubloo Scientist team?" },
  { label: "🧪 What is Chemistry?", query: "Tell me about the Chemistry blog post" },
  { label: "🔬 Science topics", query: "What science topics does the website cover?" },
];

interface Props {
  onSelect: (query: string) => void;
}

export function SuggestedQuestions({ onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-1.5 px-1">
      {SUGGESTIONS.map((s, i) => (
        <motion.button
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.06, duration: 0.2 }}
          onClick={() => onSelect(s.query)}
          className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors border border-border"
        >
          {s.label}
        </motion.button>
      ))}
    </div>
  );
}
