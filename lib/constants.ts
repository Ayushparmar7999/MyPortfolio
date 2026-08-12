import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiNodedotjs, SiPython, SiTailwindcss,
  SiPrisma, SiFirebase,
  SiRedux, SiExpress, SiPytorch,
  SiTensorflow, SiWordpress, SiGit, SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiReact as SiReactNative } from "react-icons/si";
import type { IconType } from "react-icons";

/* ================================================================
   NAV LINKS
   ================================================================ */
export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
] as const;

/* ================================================================
   SOCIAL LINKS
   ================================================================ */
export const SOCIAL_LINKS = {
  github: "https://github.com/Ayushparmar7999",
  linkedin: "https://www.linkedin.com/in/ayush-parmar-d3/",
  email: "ayushparmar2105@gmail.com",
  phone: "+917999303078",
} as const;

export const GITHUB_USERNAME = "Ayushparmar7999";

/* ================================================================
   CV PATH
   ================================================================ */
export const CV_PATH = "/ayush-parmar-cv.pdf";

/* ================================================================
   HERO DATA
   ================================================================ */
export const HERO_KEYWORDS = [
  
  "Mobile Apps",
  "Web Apps",
  "AI Products"
] as const;

/* ================================================================
   STATS
   ================================================================ */
export const STATS = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "", label: "Companies" },
] as const;

/* ================================================================
   TECHNOLOGY CATEGORIES
   ================================================================ */
export interface Technology {
  name: string;
  icon: IconType;
  color: string;
  category: string;
}

export const TECH_CATEGORIES = [
  "Frontend",
  "Mobile",
  "Backend",
  "Database",
  "Cloud & Services",
  "AI & Tools",
] as const;

export const TECHNOLOGIES: Technology[] = [
  // Frontend
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#f5f5f5", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { name: "Redux", icon: SiRedux, color: "#764ABC", category: "Frontend" },

  // Mobile
  { name: "React Native", icon: SiReactNative, color: "#61DAFB", category: "Mobile" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "#f5f5f5", category: "Backend" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "Backend" },

  // Database
  { name: "Prisma", icon: SiPrisma, color: "#2D3748", category: "Database" },

  // Cloud & Services
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", category: "Cloud & Services" },
  { name: "AWS", icon: FaAws, color: "#FF9900", category: "Cloud & Services" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "Cloud & Services" },
  { name: "GitHub", icon: SiGithub, color: "#f5f5f5", category: "Cloud & Services" },

  // AI & Tools
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C", category: "AI & Tools" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", category: "AI & Tools" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B", category: "AI & Tools" },
];

/* ================================================================
   EXPERIENCES
   ================================================================ */
export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    year: "Jul 2025 — Feb 2026",
    role: "Associate Software Developer",
    company: "Rankivia Technologies, Indore",
    description:
      "Built and customized responsive web and mobile applications using React Native, React.js and WordPress focusing on modern design, performance optimization, and enhanced user experience.",
    tech: ["React Native", "React.js", "WordPress", "JavaScript"],
  },
  {
    year: "Jan 2025 — May 2025",
    role: "React Native Developer",
    company: "Yash Computech Solution Pvt Ltd, Indore",
    description:
      "Designed and developed mobile applications using React Native with a focus on clean UI, responsive layouts, smooth navigation, and seamless API integration.",
    tech: ["React Native", "JavaScript", "API Integration", "Mobile UI"],
  },
  {
    year: "Aug 2023 — Sep 2024",
    role: "Software Developer",
    company: "Crecer Entertainment Pvt Ltd, Indore",
    description:
      "Developed and maintained a 3D model viewer website using React for the frontend and Node.js for the backend, enhancing user interactivity and generating embedded code for 3D models.",
    tech: ["React", "Node.js", "Three.js", "Web3D"],
  },
];

export interface EducationItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  type: "Education" | "Certification";
}

export const EDUCATION: EducationItem[] = [
  {
    year: "2021 — 2024",
    title: "Bachelor's in Computer Application (BCA)",
    institution: "Makhanlal Chaturvedi University",
    description:
      "Completed degree in Computer Applications, focusing on software engineering, database management systems, and programming foundations.",
    type: "Education",
  },
  {
    year: "2020 — 2021",
    title: "Class XII (Higher Secondary)",
    institution: "Kopal Public Higher Secondary School, Bhopal",
    description:
      "Secondary board certification with a focus on mathematics, science, and computer literacy.",
    type: "Education",
  },
  {
    year: "Certification",
    title: "AI/ML Development Certification",
    institution: "Apna College",
    description:
      "Deep dive into machine learning, deep learning, PyTorch, and NLP model implementation.",
    type: "Certification",
  },
  {
    year: "Certification",
    title: "Python Web Development Certification",
    institution: "Cybrom Technology Pvt. Ltd, Bhopal",
    description:
      "Backend development specializing in Python, API development, and SQL databases.",
    type: "Certification",
  },
];

/* ================================================================
   PROJECTS
   ================================================================ */
export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  image: string;
  github: string;
  live: string;
  architecture?: ArchitectureLayer[];
}

export interface ArchitectureLayer {
  label: string;
  tech: string[];
  color: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Restaurant Booking App",
    subtitle: "Cross-Platform Mobile Application",
    description:
      "A cross-platform restaurant booking application enabling users to explore restaurants, view details, and book reservation slots seamlessly with real-time updates.",
    problem:
      "Traditional restaurant booking was fragmented across calls and walk-ins, with no unified digital experience for users to discover, compare, and reserve tables.",
    solution:
      "Built a seamless mobile app with Firebase-powered real-time database, secure authentication, and an intuitive booking flow that reduced reservation friction by enabling instant slot discovery and confirmation.",
    features: [
      "Restaurant discovery with rich detail pages",
      "Real-time slot availability and booking",
      "Firebase Authentication (email, Google)",
      "Responsive UI with smooth navigation",
      "Push notification for booking confirmations",
    ],
    tech: ["React Native Expo", "Firebase", "Authentication", "Realtime DB"],
    image: "/projects/room.png",
    github: "#",
    live: "#",
    architecture: [
      { label: "Mobile App", tech: ["React Native Expo"], color: "#61DAFB" },
      { label: "Auth Layer", tech: ["Firebase Auth"], color: "#FFCA28" },
      { label: "Backend", tech: ["Firebase Functions"], color: "#FF9900" },
      { label: "Database", tech: ["Firestore Realtime DB"], color: "#47A248" },
    ],
  },
  {
    id: 2,
    title: "Astrolock Application",
    subtitle: "Astrology & Learning Platform",
    description:
      "An astrology application with API integration enabling users to connect with astrologers for consultations and explore in-depth courses on palmistry, Ayurveda, and numerology.",
    problem:
      "Astrology enthusiasts lacked a single platform to both consult professionals and access structured educational content on various astrological disciplines.",
    solution:
      "Developed an integrated mobile app combining live astrologer consultations with a comprehensive course catalog, leveraging API-driven content delivery and smooth UI patterns.",
    features: [
      "Astrologer consultation booking system",
      "In-depth courses on palmistry, numerology, Ayurveda",
      "API-driven dynamic content",
      "User profiles with learning progress",
      "Responsive mobile-first design",
    ],
    tech: ["React Native", "API Integration", "Mobile UI", "REST APIs"],
    image: "/projects/banking.png",
    github: "#",
    live: "#",
    architecture: [
      { label: "Mobile App", tech: ["React Native"], color: "#61DAFB" },
      { label: "API Layer", tech: ["REST APIs"], color: "#3B82F6" },
      { label: "Backend", tech: ["Node.js"], color: "#339933" },
      { label: "Database", tech: ["SQL Database"], color: "#3B82F6" },
    ],
  },
  {
    id: 3,
    title: "AI Chatbot",
    subtitle: "Conversational AI System",
    description:
      "An AI-powered conversational chatbot using LangChain, leveraging large language models to deliver context-aware, accurate, and scalable responses with an optimized generation pipeline.",
    problem:
      "Existing chatbot solutions provided generic responses without contextual understanding, leading to poor user engagement and low accuracy for domain-specific queries.",
    solution:
      "Built a LangChain-powered pipeline with optimized prompt engineering and retrieval-augmented generation, reducing latency and dramatically improving response accuracy for domain-specific conversations.",
    features: [
      "Context-aware conversation engine",
      "LangChain integration with LLMs",
      "Optimized response pipeline",
      "Prompt engineering for accuracy",
      "Scalable architecture",
    ],
    tech: ["LangChain", "LLMs", "Python", "Prompt Engineering"],
    image: "/projects/room.png",
    github: "#",
    live: "#",
    architecture: [
      { label: "Frontend", tech: ["React"], color: "#61DAFB" },
      { label: "API Layer", tech: ["FastAPI"], color: "#3B82F6" },
      { label: "AI Engine", tech: ["LangChain", "LLMs"], color: "#7C3AED" },
      { label: "Vector Store", tech: ["Embeddings DB"], color: "#06B6D4" },
    ],
  },
  {
    id: 4,
    title: "Movie Recommendation System",
    subtitle: "Machine Learning Application",
    description:
      "A movie recommendation system using machine learning algorithms to suggest personalized content based on user input, with data preprocessing and feature extraction.",
    problem:
      "Users faced overwhelming choice in movie catalogs with no personalized way to discover content matching their preferences and viewing history.",
    solution:
      "Implemented content-based and collaborative filtering algorithms with NLP-driven feature extraction from movie metadata, delivering highly relevant recommendations.",
    features: [
      "Content-based filtering algorithm",
      "NLP text cleaning and feature extraction",
      "User preference modeling",
      "Pandas/NumPy data pipeline",
      "Interactive recommendation interface",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    image: "/projects/banking.png",
    github: "#",
    live: "#",
    architecture: [
      { label: "Interface", tech: ["Streamlit"], color: "#FF4B4B" },
      { label: "ML Pipeline", tech: ["Scikit-learn"], color: "#F7931E" },
      { label: "Processing", tech: ["Pandas", "NumPy"], color: "#3776AB" },
      { label: "Data", tech: ["CSV Dataset"], color: "#47A248" },
    ],
  },
  {
    id: 5,
    title: "Financial Management System",
    subtitle: "Swabhiman Pawan Nidhi Limited",
    description:
      "A comprehensive financial management platform for a Nidhi company with secure member management, savings, fixed deposits, recurring deposits, loan management, share capital, and branch operations.",
    problem:
      "The client lacked a unified digital platform to manage complex financial instruments and role-based permissions securely across branches.",
    solution:
      "Developed a robust full-stack solution featuring role-based dashboards with secure authentication, authorization, and audit logging to manage all financial transactions.",
    features: [
      "Role-based dashboards (Admin, Branch Manager, Accountant, Members)",
      "Secure member and branch management",
      "Savings, FD, RD, and loan processing",
      "Secure authentication and audit logging",
      "Comprehensive financial reporting",
    ],
    tech: ["React", "Node.js", "Express", "Database", "Authentication"],
    image: "/projects/room.png",
    github: "#",
    live: "#",
    architecture: [
      { label: "Frontend", tech: ["React"], color: "#61DAFB" },
      { label: "Backend", tech: ["Node.js", "Express"], color: "#339933" },
      { label: "Database", tech: ["SQL Database"], color: "#3B82F6" },
    ],
  },
  {
    id: 6,
    title: "Hostel Management System",
    subtitle: "Educational Institution Tool",
    description:
      "A comprehensive Hostel Management System with secure student registration, room allocation, attendance tracking, fee management, complaint handling, and visitor management.",
    problem:
      "Manual processes for managing hostel facilities led to inefficiencies in room allocation, fee tracking, and communication between students and wardens.",
    solution:
      "Built a unified management portal featuring role-based dashboards for administrators, wardens, and students to streamline all hostel operations seamlessly.",
    features: [
      "Secure student registration and room allocation",
      "Attendance and fee management",
      "Complaint handling and visitor tracking",
      "Role-based dashboards (Admin, Warden, Student)",
      "Responsive internal portal",
    ],
    tech: ["React", "Node.js", "Dashboard", "Role-based Auth"],
    image: "/projects/banking.png",
    github: "#",
    live: "#",
    architecture: [
      { label: "Client App", tech: ["React"], color: "#61DAFB" },
      { label: "API", tech: ["Node.js API"], color: "#3B82F6" },
      { label: "Data Layer", tech: ["SQL Database"], color: "#3B82F6" },
    ],
  },
];

/* ================================================================
   SERVICES
   ================================================================ */
export interface Service {
  title: string;
  description: string;
  iconName: string;
  color: string;
}

export const SERVICES: Service[] = [
  {
    title: "Full Stack Development",
    description:
      "Scalable web applications and SaaS platforms built with modern frameworks, clean architecture, and production-grade infrastructure.",
    iconName: "Monitor",
    color: "#3B82F6",
  },
  {
    title: "Mobile Development",
    description:
      "Production-ready React Native applications for Android & iOS with native performance, smooth animations, and offline support.",
    iconName: "Smartphone",
    color: "#7C3AED",
  },
  {
    title: "Backend Development",
    description:
      "Secure REST & GraphQL APIs, database architecture, authentication systems, and scalable server infrastructure.",
    iconName: "Database",
    color: "#06B6D4",
  },
  {
    title: "AI Integration",
    description:
      "AI-powered features, LLM integrations, intelligent automation workflows, and conversational AI systems.",
    iconName: "Cpu",
    color: "#22C55E",
  },
  {
    title: "UI Engineering",
    description:
      "High-performance, accessible, and responsive interfaces with premium animations and pixel-perfect implementation.",
    iconName: "Palette",
    color: "#F59E0B",
  },
];

/* ================================================================
   DEVELOPMENT PROCESS
   ================================================================ */
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description: "Understanding requirements, goals, and constraints through deep research and stakeholder alignment.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Defining architecture, tech stack, milestones, and creating a clear roadmap for execution.",
  },
  {
    step: "03",
    title: "Design",
    description: "Crafting wireframes and UI systems that balance aesthetic excellence with usability.",
  },
  {
    step: "04",
    title: "Develop",
    description: "Building with clean, modular code following best practices and production-grade standards.",
  },
  {
    step: "05",
    title: "Test",
    description: "Rigorous testing across devices, edge cases, and performance benchmarks.",
  },
  {
    step: "06",
    title: "Deploy",
    description: "CI/CD pipelines, monitoring, and zero-downtime deployment to production.",
  },
  {
    step: "07",
    title: "Scale",
    description: "Optimizing performance, adding features, and scaling infrastructure as the product grows.",
  },
] as const;

/* ================================================================
   COMMAND PALETTE COMMANDS
   ================================================================ */
export const COMMAND_PALETTE_ITEMS = [
  { label: "Go to About", action: "navigate", target: "#about", icon: "User" },
  { label: "Go to Projects", action: "navigate", target: "#projects", icon: "FolderOpen" },
  { label: "Go to Experience", action: "navigate", target: "#experience", icon: "Briefcase" },
  { label: "Go to Services", action: "navigate", target: "#services", icon: "Layers" },
  { label: "Go to Contact", action: "navigate", target: "#contact", icon: "Mail" },
  { label: "View CV", action: "link", target: "/ayush-parmar-cv.pdf", icon: "ExternalLink" },
  { label: "Download CV", action: "download", target: "/ayush-parmar-cv.pdf", icon: "Download" },
  { label: "Open GitHub", action: "link", target: "https://github.com/Ayushparmar7999", icon: "Github" },
  { label: "Open LinkedIn", action: "link", target: "https://www.linkedin.com/in/ayush-parmar-d3/", icon: "Linkedin" },
  { label: "Toggle Theme", action: "theme", target: "", icon: "Sun" },
] as const;
