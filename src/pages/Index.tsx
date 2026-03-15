import { Chatbot } from "@/components/Chatbot";
import { Atom, FlaskConical, BookOpen, Users, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-grid-pattern relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-border/30">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
            <Atom className="w-5 h-5 text-primary" />
          </div>
          <span className="font-semibold text-foreground tracking-tight">Bubloo Scientist</span>
        </div>
        <a
          href="https://www.bublooscientist.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-primary hover:underline"
        >
          Visit Website →
        </a>
      </header>

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-20 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
            <FlaskConical className="w-3 h-3" />
            AI Science Assistant
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
        >
          <span className="text-gradient-primary">Bubloo</span>{" "}
          <span className="text-foreground">Scientist</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-md text-base sm:text-lg mb-10"
        >
          A Hub for Knowledge of Science — explore blogs, meet the team, and discover science with our AI assistant.
        </motion.p>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg sm:max-w-2xl w-full"
        >
          {[
            { icon: BookOpen, label: "Blog Posts", desc: "Explore science articles" },
            { icon: Users, label: "Our Team", desc: "Meet the creators" },
            { icon: Mail, label: "Contact Us", desc: "Get in touch" },
          ].map((item, i) => (
            <div
              key={i}
              className="glass rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/30 transition-colors cursor-default"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
              <span className="text-xs text-muted-foreground">{item.desc}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-xs text-muted-foreground font-mono"
        >
          Click the <span className="text-primary">⚛</span> button to start chatting →
        </motion.p>
      </main>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
