import { WEBSITE_INFO, TEAM_MEMBERS, BLOG_POSTS, CATEGORIES, type BlogPost } from "./knowledgeBase";
import { supabase } from "@/integrations/supabase/client";

// Local knowledge-based chat engine with AI fallback for science questions

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, "");
}

function findRelevantBlogs(query: string): BlogPost[] {
  const q = normalize(query);
  return BLOG_POSTS.filter((b) => {
    const haystack = normalize(`${b.title} ${b.summary} ${b.categories.join(" ")}`);
    const words = q.split(/\s+/).filter((w) => w.length > 2);
    return words.some((w) => haystack.includes(w));
  });
}

const SCIENCE_KEYWORDS = [
  "science", "physics", "chemistry", "biology", "math", "atom", "molecule",
  "cell", "dna", "gene", "evolution", "gravity", "energy", "force", "element",
  "compound", "reaction", "equation", "formula", "experiment", "hypothesis",
  "theory", "quantum", "electron", "proton", "neutron", "planet", "star",
  "galaxy", "universe", "space", "light", "wave", "frequency", "magnet",
  "electric", "current", "voltage", "circuit", "acid", "base", "ph",
  "photosynthesis", "ecosystem", "climate", "weather", "temperature",
  "speed", "velocity", "acceleration", "mass", "weight", "density",
  "pressure", "volume", "area", "calculate", "solve", "explain", "how does",
  "what is", "why does", "how do", "computer", "programming", "algorithm",
  "code", "software", "technology", "robot", "ai", "artificial", "machine",
  "neural", "data", "network", "internet", "virus", "bacteria", "protein",
  "organ", "body", "human", "animal", "plant", "water", "oxygen", "carbon",
  "nitrogen", "hydrogen", "periodic", "table", "newton", "einstein",
];

function isScienceQuestion(query: string): boolean {
  const q = normalize(query);
  return SCIENCE_KEYWORDS.some((kw) => q.includes(kw));
}

export function generateLocalResponse(userMessage: string): string | null {
  const q = normalize(userMessage);

  // Contact
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("whatsapp") || q.includes("phone")) {
    return `📧 You can reach the Bubloo Scientist team at:\n\n- **Email:** ${WEBSITE_INFO.email}\n- **WhatsApp Channel:** [Join here](${WEBSITE_INFO.whatsappChannel})\n\nFeel free to message them about anything related to science or the website!`;
  }

  // Team
  if (q.includes("team") || q.includes("member") || q.includes("who") && (q.includes("work") || q.includes("behind"))) {
    const list = TEAM_MEMBERS.map((m) => `- **${m.name}** — ${m.role}`).join("\n");
    return `👥 Here's the amazing Bubloo Scientist team:\n\n${list}\n\nThey work together on everything from design to content creation! 🔬`;
  }

  // Specific team member
  for (const member of TEAM_MEMBERS) {
    if (q.includes(normalize(member.name)) || q.includes(normalize(member.name.split(" ").pop()!))) {
      return `**${member.name}** serves as the **${member.role}** at Bubloo Scientist. The team works together to deliver great science content! 🧪`;
    }
  }

  // CEO
  if (q.includes("ceo") || q.includes("founder") || q.includes("leader")) {
    return `The CEO of Bubloo Scientist is **Abdur Rehman Siddiqui**. Under his leadership, the team delivers quality science content to curious minds worldwide! 🌍`;
  }

  // All blogs
  if (q.includes("blog") || q.includes("article") || q.includes("post") || q.includes("read")) {
    const list = BLOG_POSTS.map(
      (b) => `- [${b.title}](${b.url}) (${b.date}) — ${b.summary}`
    ).join("\n");
    return `📚 Here are the blog posts on Bubloo Scientist:\n\n${list}\n\nWould you like me to tell you more about any of these?`;
  }

  // Categories
  if (q.includes("categor") || q.includes("topic") || q.includes("subject") || q.includes("cover")) {
    return `🔬 Bubloo Scientist covers these topics:\n\n${CATEGORIES.map((c) => `- ${c}`).join("\n")}\n\nFrom chemistry to coding, there's something for every curious mind! Would you like to explore a specific topic?`;
  }

  // About / mission
  if (q.includes("about") || q.includes("mission") || q.includes("purpose") || q.includes("what is bubloo")) {
    return `🌌 **${WEBSITE_INFO.name}** — ${WEBSITE_INFO.tagline}\n\n${WEBSITE_INFO.description}\n\n**Mission:** ${WEBSITE_INFO.mission}\n\nVisit the website: [bublooscientist.com](${WEBSITE_INFO.website})`;
  }

  // Website navigation
  if (q.includes("navigate") || q.includes("section") || q.includes("page") || q.includes("find") || q.includes("where")) {
    return `🗺️ The Bubloo Scientist website has these sections:\n\n${WEBSITE_INFO.sections.map((s) => `- ${s}`).join("\n")}\n\nYou can explore them at [bublooscientist.com](${WEBSITE_INFO.website})!`;
  }

  // Search for relevant blogs by keywords
  const relevant = findRelevantBlogs(userMessage);
  if (relevant.length > 0) {
    const list = relevant.map(
      (b) => `- [${b.title}](${b.url}) — ${b.summary}`
    ).join("\n");
    return `💡 I found some related content on Bubloo Scientist:\n\n${list}\n\nWant to know more about any of these topics?`;
  }

  // Chemistry specifically
  if (q.includes("chemistry") || q.includes("chemical")) {
    return `🧪 Great question about chemistry! Check out this blog post: [What is Chemistry](https://www.bublooscientist.com/2025/12/18/what-is-chemistry/) — it's a personal exploration of the subject by one of our team members.\n\nFor more science content, visit [bublooscientist.com](${WEBSITE_INFO.website})!`;
  }

  // Biology
  if (q.includes("biology") || q.includes("living") || q.includes("organism")) {
    return `🧬 For biology content, check out [Characteristics of Living Things](https://www.bublooscientist.com/2024/12/12/characteristics-of-living-things/) — it covers the 7 characteristics of living things and mutations!\n\nYou can also explore [Digestion and Absorption](https://www.bublooscientist.com/2023/12/21/digestion-and-absorbption/) for nutrition science.`;
  }

  // Coding
  if (q.includes("coding") || q.includes("programming") || q.includes("python") || q.includes("computer")) {
    return `💻 Check out [Creating New with Coding](https://www.bublooscientist.com/2024/07/20/creating-new-with-coding/) — it covers programming adventures with Python!\n\nBubloo Scientist also has a "Tech Talk" section about computers and web technologies.`;
  }

  // Greeting
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("help")) {
    return `👋 Hello! I'm **Bubloo**, your science assistant! 🔬\n\nI can help you with:\n- 📚 Finding blog posts and articles\n- 👥 Learning about the team\n- 📧 Getting contact information\n- 🧪 Exploring science topics\n- 🌌 Answering science questions using AI!\n\nWhat would you like to know?`;
  }

  // Thanks
  if (q.includes("thank") || q.includes("thanks")) {
    return `You're welcome! 😊 Science is always more fun when shared. Feel free to ask me anything else about Bubloo Scientist! 🔬`;
  }

  return null; // No local match
}

export async function generateResponse(userMessage: string): Promise<string> {
  // Try local knowledge base first
  const localResponse = generateLocalResponse(userMessage);
  if (localResponse) return localResponse;

  // If it's a science question, use AI
  if (isScienceQuestion(userMessage)) {
    try {
      const { data, error } = await supabase.functions.invoke("science-chat", {
        body: { question: userMessage },
      });

      if (error) throw error;
      if (data?.answer) return data.answer;
      if (data?.error) throw new Error(data.error);
    } catch (e) {
      console.error("AI fallback error:", e);
      return `🔬 I tried to look that up but ran into an issue. In the meantime, you can explore science topics at [bublooscientist.com](${WEBSITE_INFO.website})!\n\nOr try asking me about our blog posts, team, or contact info.`;
    }
  }

  // Default — not a science question and not in knowledge base
  return `🤔 That's an interesting question! I can help with:\n\n- 📚 Blog posts and articles on the website\n- 👥 Team member information\n- 📧 Contact details\n- 🔬 **Science questions** (I'll use AI to find the answer!)\n\nTry asking me a science question or something about the website!`;
}
