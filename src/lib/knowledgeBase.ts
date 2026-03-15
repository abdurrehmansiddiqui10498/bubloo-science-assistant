// Bubloo Scientist Knowledge Base
// All website data embedded for the chatbot

export const WEBSITE_INFO = {
  name: "Bubloo Scientist",
  tagline: "A Hub for Knowledge of Science",
  description:
    "Bubloo Scientist is a science hub that delivers knowledge and facts about Science. Covering physics, chemistry, biology, maths, and computer science. The team shares daily discoveries and fun science content.",
  mission:
    "To spread knowledge about science worldwide. We want everyone to understand science and use it in daily life.",
  email: "bublooscientist2023@gmail.com",
  whatsappChannel: "https://whatsapp.com/channel/0029VbCF7Kx4Spk7XHI0sU1e",
  website: "https://www.bublooscientist.com",
  sections: [
    "Creative",
    "The Observation Deck – Scientist Home",
    "Skills",
    "About Us",
    "Explore",
    "Learning",
    "Blogs",
    "Blog Quizzes",
    "Contact",
    "My Projects",
  ],
};

export const TEAM_MEMBERS = [
  { name: "Abdur Rehman Siddiqui", role: "CEO" },
  { name: "Muhammad Mustafa Khan", role: "Lead Designer" },
  { name: "Muhammad Huzaifa Khan", role: "Web Designer" },
  { name: "Saim Ahmed", role: "Social Media Manager" },
  { name: "Ayaan Hassan Khan", role: "Web Developer" },
  { name: "Sadaat Furqan", role: "Marketer" },
];

export interface BlogPost {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  url: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Book Review: The Boy Who Spoke Dog",
    date: "April 11, 2025",
    categories: ["Book Reviews"],
    summary:
      "A review of 'The Boy Who Spoke Dog' — an adventurous and fantasy book about a boy stranded on an island who learns to communicate with dogs.",
    url: "https://www.bublooscientist.com/2025/04/11/book-review-the-boy-who-spoke-dog/",
  },
  {
    title: "Characteristics of Living Things",
    date: "December 12, 2024",
    categories: ["All Categories", "Biology"],
    summary:
      "Explores the 7 characteristics of living things and mutations in living organisms, including rare species like ligers.",
    url: "https://www.bublooscientist.com/2024/12/12/characteristics-of-living-things/",
  },
  {
    title: "Digestion and Absorption",
    date: "December 21, 2023",
    categories: ["Food and Nutrition"],
    summary:
      "Explains the process of digestion — how large, complex, insoluble food molecules are converted into smaller, simpler, soluble ones.",
    url: "https://www.bublooscientist.com/2023/12/21/digestion-and-absorbption/",
  },
  {
    title: "What is Chemistry",
    date: "December 18, 2025",
    categories: ["Chemistry", "Science and Technology", "Huzaifa's Blogs"],
    summary:
      "A personal exploration of chemistry from 5 years of studying the subject, written by a student who selected it as an optional subject in grade 9.",
    url: "https://www.bublooscientist.com/2025/12/18/what-is-chemistry/",
  },
  {
    title: "Creating New with Coding",
    date: "July 20, 2024",
    categories: ["Coding and Languages"],
    summary:
      "An update about the author's programming journey with Python and their latest coding creations.",
    url: "https://www.bublooscientist.com/2024/07/20/creating-new-with-coding/",
  },
];

export const CATEGORIES = [
  "Book Reviews",
  "Science and Technology",
  "Chemistry",
  "Food and Nutrition",
  "Coding and Languages",
  "Biology",
  "All Categories",
];

export function buildSystemPrompt(): string {
  const teamList = TEAM_MEMBERS.map((m) => `• ${m.name} — ${m.role}`).join("\n");
  const blogList = BLOG_POSTS.map(
    (b) => `• "${b.title}" (${b.date}) [${b.categories.join(", ")}]: ${b.summary} — ${b.url}`
  ).join("\n");

  return `You are Bubloo — the friendly, intelligent AI science assistant for the Bubloo Scientist website (${WEBSITE_INFO.website}).

Your personality: Curious, enthusiastic about science, clear communicator. You explain things simply but knowledgeably. Use occasional science emojis (🔬🧪⚗️🧬💡🌌).

## Website Info
${WEBSITE_INFO.name}: ${WEBSITE_INFO.description}
Mission: ${WEBSITE_INFO.mission}

## Contact
Email: ${WEBSITE_INFO.email}
WhatsApp Channel: ${WEBSITE_INFO.whatsappChannel}

## Team Members
${teamList}

## Blog Posts
${blogList}

## Categories
${CATEGORIES.join(", ")}

## Website Sections
${WEBSITE_INFO.sections.join(", ")}

## Instructions
- Answer questions about the website, team, blogs, and science topics
- When recommending blogs, include the title and URL as a markdown link
- If asked about contact, provide the email and WhatsApp channel
- For science questions outside the blog content, give a brief helpful answer and suggest checking the blog for related content
- Keep responses concise (2-4 sentences unless detail is requested)
- If you don't know something specific to the website, say so honestly and suggest contacting the team
- Always be encouraging about science learning`;
}
