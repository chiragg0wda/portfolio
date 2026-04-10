// ============================================================
//  data/config.js  —  EDIT THIS FILE TO PERSONALISE YOUR SITE
// ============================================================

export const siteConfig = {
  // ── PERSONAL ────────────────────────────────────────────────
  name: "CHIRAG A G",
  title: "CSE Student & Full-Stack Developer",
  tagline: "Building intelligent systems at the intersection of AI, ML, and full-stack development.",
  email: "agchiragg0wda@gmail.com",
  phone: "+91 9036714175",
  location: "Bengaluru, India",
  avatarEmoji: "💻",   // fallback if no image
  heroImage: "/avatar.png",  // Add your image to /public folder

  // ── ABOUT ───────────────────────────────────────────────────
  about: `I'm a 3rd year B.Tech CSE student at Kalpataru Institute of Technology with hands-on experience in Python, Machine Learning, and full-stack development. I have a proven ability to build end-to-end applications spanning AI/ML systems, backend APIs, and database-driven platforms. Backed by 8 industry certifications from AWS, Google Cloud, Cisco, and IBM. I'm passionate about leveraging technology to solve real-world problems and constantly seeking opportunities to apply and grow my technical skills in software development, AI, cloud, or data-driven roles.`,

  // ── SOCIAL LINKS ────────────────────────────────────────────
  socials: [
    { label: "GitHub", url: "https://github.com/chiragg0wda", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/chirag-a-g-376571361/", icon: "linkedin" },
  ],

  // ── SKILLS ──────────────────────────────────────────────────
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Python" },
        { name: "JavaScript" },
        { name: "Java" },
      ],
    },
    {
      category: "ML & Data",
      items: [
        { name: "TensorFlow" },
        { name: "Scikit-learn" },
        { name: "Pandas" },
        { name: "Numpy" },
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { name: "React / Next.js" },
        { name: "Flask" },
        { name: "HTML5 / CSS3" },
        { name: "Tailwind CSS" },
        { name: "REST APIs" },
      ],
    },
    {
      category: "Databases & Cloud",
      items: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "AWS" },
        { name: "Google Cloud" },
      ],
    },
  ],

  // ── PROJECTS ────────────────────────────────────────────────
  projects: [
    {
      title: "Agrinova - AI Smart Agricultural System",
      description: "An intelligent remote agricultural system that analyzes real-time crop and sensor data to generate AI-based irrigation and fertilizer recommendations using custom-trained ML models.",
      tags: ["Python", "Flask", "Machine Learning", "IoT", "Sensors"],
      liveUrl: "https://github.com/chiragg0wda",
      repoUrl: "https://github.com/chiragg0wda",
      featured: true,
      emoji: "🌾",
      color: "#10B981",
    },
    {
      title: "GreOT - OPD Management System",
      description: "A multilingual voice-enabled OPD registration system using DwaniAI with secure patient record management and unique ID authentication for hospitals.",
      tags: ["Python", "Flask", "DwaniAI", "MySQL", "Voice"],
      liveUrl: "https://github.com/chiragg0wda",
      repoUrl: "https://github.com/chiragg0wda",
      featured: true,
      emoji: "🏥",
      color: "#06B6D4",
    },
    {
      title: "Dr.Soil - Soil Analysis & Crop Recommendation",
      description: "An AI-driven soil analysis system that processes soil parameters and generates ML-based crop recommendations, enabling data-driven agricultural decision-making.",
      tags: ["Python", "Flask", "Ollama", "Machine Learning"],
      liveUrl: "https://github.com/chiragg0wda",
      repoUrl: "https://github.com/chiragg0wda",
      featured: true,
      emoji: "🌱",
      color: "#22C55E",
    },
  ],

  // ── EXPERIENCE ──────────────────────────────────────────────
  experience: [],

  // ── EDUCATION ───────────────────────────────────────────────
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      school: "Kalpataru Institute of Technology, Tiptur",
      period: "Sept 2023 - Present",
      description: "3rd year CSE student with expertise in Python, Machine Learning, AI, and full-stack development. Backed by 8 industry certifications.",
    },
  ],
};
