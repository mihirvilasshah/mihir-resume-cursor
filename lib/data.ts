export const profile = {
  name: "Mihir Vilaskumar Shah",
  shortName: "Mihir Shah",
  title: "Principal Engineer · Team Lead",
  company: "Tricon Infotech",
  location: "Bengaluru, India",
  email: "mihirvilasshah@gmail.com",
  phone: "+91 9095051022",
  linkedin: "https://www.linkedin.com/in/mihirvilasshah/",
  instagram: "https://www.instagram.com/mihirvilasshah/",
  github: "https://github.com/mihirvilasshah",
  avatar: "https://avatars.githubusercontent.com/u/22914681?v=4",
  headline:
    "Architecting scalable, accessible systems. Leading high-impact engineering teams.",
  summary:
    "Principal Engineer with 8+ years building WCAG 2.1 AA web platforms, AI-assisted product experiences, and LMS-integrated libraries for global education and retail clients. Promoted four times at Tricon Infotech—from Associate Software Engineer to Principal—while leading delivery, mentoring engineers, and turning 48-hour prototypes into multi-team engagements.",
} as const;

export const metrics = [
  {
    value: "8+",
    label: "Years shipping product",
    detail: "Jul 2018 → present at Tricon Infotech",
  },
  {
    value: "18",
    label: "Projects contributed",
    detail: "4 led end-to-end as owner",
  },
  {
    value: "4×",
    label: "Promotions in one org",
    detail: "ASE → SE → Senior → Principal",
  },
  {
    value: "48h",
    label: "Career Coach POC",
    detail: "Won the Edmentum IICE engagement",
  },
] as const;

export const terminalLines = [
  "Architecting WCAG 2.1 AA platforms at education scale.",
  "Leading squads through sprints, estimates, and client delivery.",
  "Shipping AI systems with Gemini, Azure Speech, and RAG graphs.",
  "Mentoring engineers while owning architecture and CI/CD.",
] as const;

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "Java", "C", "C++", "PHP"],
  frontend: [
    "Angular 2+",
    "React",
    "HTML",
    "SCSS / CSS",
    "Bootstrap",
    "jQuery",
    "NgRx",
  ],
  backend: ["Node.js", "Express", "C# / .NET", "REST APIs", "EJS"],
  data: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Neo4j"],
  cloud: ["Azure Pipelines", "AWS", "CircleCI", "Git", "Google Analytics"],
  a11yAi: [
    "WCAG 2.1 AA",
    "Karma / Jasmine",
    "LangChain",
    "Google Gemini",
    "Azure Speech",
    "DALL·E",
    "AEM / HTL",
  ],
} as const;

export type Track = "code" | "lead";

export const timeline: {
  year: string;
  title: string;
  org: string;
  track: Track;
  body: string;
}[] = [
  {
    year: "Apr 2023 — Present",
    title: "Principal Engineer · Team Lead",
    org: "Tricon Infotech, Bengaluru",
    track: "lead",
    body: "Owns architecture and delivery across education and AI products. Led four engagements, mentored learning paths, unblocked critical defects, and partnered on client acquisition that expanded multiple teams.",
  },
  {
    year: "2023 — Present",
    title: "Edmentum Interest Inventory & Career Exploration",
    org: "Lead · Angular, C#/.NET, Azure Pipelines, WCAG 2.1 AA",
    track: "code",
    body: "Led the team building a grades 6–12 RIASEC career platform. Drove UI, accessibility, performance, backend structure, CI/CD templates, and the full documentation set—user guides, TDD, architecture, ER, and data dictionary.",
  },
  {
    year: "2024 — 2025",
    title: "AI Speaking Coach",
    org: "React, Node.js, Azure Speech, Gemini, DALL·E",
    track: "code",
    body: "Built a story-driven pronunciation coach: real-time speech feedback, Gemini path-based story generation, and DALL·E illustration prompting for interactive learning.",
  },
  {
    year: "2024 — 2025",
    title: "LLM Meta-tagging Graph",
    org: "Python, Streamlit, LangChain, Gemini, Neo4j",
    track: "code",
    body: "Automated metadata generation with LLMs and stored structured tag–document relationships in Neo4j for fast semantic retrieval.",
  },
  {
    year: "Apr 2022 — Mar 2023",
    title: "Senior Software Engineer",
    org: "Tricon Infotech",
    track: "lead",
    body: "Stepped into senior ownership: estimates, sprint leadership, cross-functional delivery with backend teams, and accessibility as a non-negotiable quality bar.",
  },
  {
    year: "Apr 2020 — Mar 2022",
    title: "Software Engineer",
    org: "Tricon Infotech · McGraw Hill Education suite",
    track: "code",
    body: "Shipped LMS-embeddable libraries—Writing Assignment, Virtual Labs, and Anatomy & Physiology Revealed—on Angular + Node.js, with Google Analytics, CircleCI, and production deploys across environments.",
  },
  {
    year: "Jul 2018 — Mar 2020",
    title: "Associate Software Engineer",
    org: "Tricon Infotech · Walmart AEM & Shopify",
    track: "lead",
    body: "Designed and developed Walmart intranet sites on AEM/HTL, managed workload across the pod, and built a Shopify badging app spanning Angular, Node.js, MongoDB, Liquid, and webhooks.",
  },
  {
    year: "Dec 2016",
    title: "Winter Intern — Android",
    org: "Glocal Technologies, Lucknow",
    track: "code",
    body: "Designed and developed the Olympia Fitness Zone Android application, focusing on a clean, intuitive fitness-domain UX.",
  },
];

export const projects: {
  name: string;
  client: string;
  year: string;
  blurb: string;
  impact: string;
  tags: string[];
  kind: "Leadership" | "AI" | "Education" | "Commerce" | "Open Source";
  href?: string;
}[] = [
  {
    name: "Edmentum IICE",
    client: "Edmentum · Career exploration",
    year: "Lead",
    blurb:
      "Interest Inventory & Career Exploration for middle and high school students using Holland Occupational Themes (RIASEC) to map interests to careers.",
    impact:
      "Team lead. 48-hour Career Coach POC that secured the engagement. WCAG 2.1 AA, Azure Pipelines, and full architecture documentation.",
    tags: ["Angular", "C# / .NET", "Azure Pipelines", "WCAG 2.1 AA", "Bootstrap"],
    kind: "Leadership",
  },
  {
    name: "Edmentum Tutoring Services",
    client: "Edmentum · Virtual tutoring",
    year: "Frontend",
    blurb:
      "Scheduling for virtual tutoring, session tracking, and tutor-to-learner feedback loops.",
    impact:
      "Frontend ownership on Angular with accessibility, API integration, estimates, and CI/CD templates.",
    tags: ["Angular", "HTML/CSS", "C# / .NET", "Azure", "WCAG 2.1 AA"],
    kind: "Education",
  },
  {
    name: "AI Speaking Coach",
    client: "Learning product · Generative AI",
    year: "Builder",
    blurb:
      "Interactive, story-driven speaking practice with live pronunciation analysis and generated illustrations.",
    impact:
      "React UI, Azure Speech integration, Gemini story prompting, DALL·E illustration pipeline.",
    tags: ["React", "Node.js", "Azure Speech", "Gemini", "DALL·E"],
    kind: "AI",
  },
  {
    name: "LLM Meta-tagging System",
    client: "Knowledge graph · RAG-ready",
    year: "Builder",
    blurb:
      "LLM-generated metadata with relationship storage in Neo4j for semantic search and fast retrieval.",
    impact:
      "Streamlit interface, LangChain + Gemini tagging, graph persistence of document–tag links.",
    tags: ["Python", "Streamlit", "LangChain", "Gemini", "Neo4j"],
    kind: "AI",
  },
  {
    name: "MHE Writing Assignment",
    client: "McGraw Hill Education · LMS library",
    year: "Frontend",
    blurb:
      "Embeddable library for creating and taking essay assignments from a given prompt, integrable with supported LMS platforms.",
    impact:
      "Angular + accessibility, Google Analytics instrumentation, CircleCI, API contracts with backend.",
    tags: ["Angular", "Node.js", "CircleCI", "Google Analytics", "WCAG 2.1 AA"],
    kind: "Education",
  },
  {
    name: "MHE Virtual Labs",
    client: "McGraw Hill Education · Simulations",
    year: "Frontend",
    blurb:
      "LMS-integrated library for creating and taking assignments that simulate laboratory experiments.",
    impact:
      "Feature delivery, API integration, and CI/CD deploys across every environment.",
    tags: ["Angular", "Node.js", "Bootstrap", "CI/CD"],
    kind: "Education",
  },
  {
    name: "Anatomy & Physiology Revealed",
    client: "McGraw Hill Education · APR",
    year: "Frontend",
    blurb:
      "Assignment library with quizzes, virtual dissection, and 3D models, packaged for LMS integration.",
    impact:
      "Angular UI, backend structure partnership, defect resolution, and multi-environment releases.",
    tags: ["Angular", "Node.js", "3D models", "Quizzes"],
    kind: "Education",
  },
  {
    name: "Walmart AEM Intranet",
    client: "Walmart · Content sites",
    year: "Design + Dev",
    blurb:
      "Content-driven intranet experiences on Adobe Experience Manager.",
    impact:
      "Designed from content, developed in HTL/Sightly, assigned work across the team, and published live.",
    tags: ["AEM", "HTL / Sightly", "Content design"],
    kind: "Commerce",
  },
  {
    name: "Shopify Badging App",
    client: "Shopify · Full stack",
    year: "Full stack",
    blurb:
      "Merchant badging experience spanning storefront templates, webhooks, and a Node persistence layer.",
    impact:
      "Angular UI, Node.js + MongoDB APIs, Liquid templates, Shopify webhook research and integration.",
    tags: ["Angular", "Node.js", "MongoDB", "Liquid", "Webhooks"],
    kind: "Commerce",
    href: "https://github.com/mihirvilasshah/Shopify-Badging-App",
  },
  {
    name: "Query Pilot",
    client: "Open source · GitHub",
    year: "Personal",
    blurb:
      "AI-powered database and SQL intelligence platform—query understanding for faster data work.",
    impact: "TypeScript product exploring natural-language to SQL workflows.",
    tags: ["TypeScript", "AI", "SQL"],
    kind: "Open Source",
    href: "https://github.com/mihirvilasshah/Query-Pilot",
  },
  {
    name: "Explode Radar",
    client: "Markets · Personal",
    year: "Personal",
    blurb:
      "Scans Indian & US stocks, ETFs, mutual funds, crypto, and commodities for volatility squeezes, breakouts, golden crosses, and relative-strength leaders—then writes a thesis, target, and horizon.",
    impact: "Combines personal-finance curiosity with systematic market structure.",
    tags: ["JavaScript", "Markets", "Analytics"],
    kind: "Open Source",
    href: "https://github.com/mihirvilasshah/explode-radar",
  },
  {
    name: "AI Portfolio",
    client: "Investing · Personal",
    year: "Personal",
    blurb:
      "Investment recommendation platform for Indian & US stocks, ETFs, mutual funds, and crypto with live data, technicals, AI insights, and dual themes.",
    impact: "End-to-end product thinking: data, UX, theming, and recommendation logic.",
    tags: ["TypeScript", "AI", "Theming"],
    kind: "Open Source",
    href: "https://github.com/mihirvilasshah/ai-portfolio",
  },
];

export const education = [
  {
    school: "Liverpool John Moores University",
    via: "Liverpool Business School",
    credential: "MBA, Business Analytics",
    dates: "Sep 2021 — Mar 2023",
  },
  {
    school: "Institute of Management Technology, Ghaziabad",
    via: "PGPM",
    credential: "Post Graduate Programme in Management · 8.79",
    dates: "Sep 2021 — Aug 2022",
  },
  {
    school: "Vellore Institute of Technology",
    via: "Vellore",
    credential: "B.Tech, Computer Science & Engineering · CGPA 8.59",
    dates: "Jun 2014 — Apr 2018",
  },
  {
    school: "Sri Chaitanya Junior College, Hyderabad",
    via: "Andhra Pradesh Board",
    credential: "Class 12 · 94%",
    dates: "2014",
  },
  {
    school: "The Indian High School, Dubai",
    via: "CBSE",
    credential: "Class 10 · CGPA 10",
    dates: "2012",
  },
] as const;

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    dates: "Mar 2025 — Mar 2028",
    href: "https://www.credly.com/badges/2e81e8b5-0387-4b25-8ca2-1bf07e505e7d",
  },
  {
    name: "GitHub Copilot",
    issuer: "Microsoft",
    dates: "May 2026 — May 2028",
    href: "https://learn.microsoft.com/en-in/users/mihirvilaskumarshah-6510/credentials/6034c9abc2221cfa",
  },
] as const;

export const publication = {
  title:
    "Authentication of Electronic Voting Machine (EVM) using two matching points — face recognition and RFID",
  venue:
    "International Journal for Research in Applied Science & Engineering Technology (IJRASET), Volume 6, Issue IV, April 2018",
} as const;

export const languages = [
  { name: "English", level: "Full professional" },
  { name: "Hindi", level: "Native" },
  { name: "Gujarati", level: "Native" },
  { name: "Telugu", level: "Limited working" },
  { name: "Marathi", level: "Elementary" },
  { name: "Sanskrit", level: "Elementary" },
] as const;

export const socialCards = [
  {
    network: "LinkedIn",
    tone: "Professional edge",
    title: "Tech Day of Pink",
    body: "Second year leading the team in pink for breast-cancer awareness—technology meeting purpose, not just a dress code.",
    href: "https://www.linkedin.com/in/mihirvilasshah/",
    tag: "Advocacy",
  },
  {
    network: "LinkedIn",
    tone: "Leadership in the community",
    title: "Youth for Seva",
    body: "School-kit donation drive with Tricon Infotech & YOUTH FOR SEVA—bags, study material, and time with students.",
    href: "https://www.linkedin.com/in/mihirvilasshah/",
    tag: "Service",
  },
  {
    network: "LinkedIn",
    tone: "Team culture",
    title: "Wear It Wednesday",
    body: "Blue as trust and unity. Showing up together, growing together—the same muscle used to run squads.",
    href: "https://www.linkedin.com/in/mihirvilasshah/",
    tag: "Culture",
  },
  {
    network: "Instagram",
    tone: "Creative side",
    title: "Movies & travel",
    body: "Cinema and movement are the reset loop—new cities, new frames, then back to architecture and code.",
    href: "https://www.instagram.com/mihirvilasshah/",
    tag: "Lens",
  },
  {
    network: "Instagram",
    tone: "Craft",
    title: "Calligraphy",
    body: "Letterforms as a precision sport. The same eye that ships pixel-aligned UI enjoys ink on paper.",
    href: "https://www.instagram.com/mihirvilasshah/",
    tag: "Craft",
  },
  {
    network: "Instagram",
    tone: "Play & markets",
    title: "Badminton + personal finance",
    body: "Court time for stamina; markets for curiosity—visible in Explode Radar, AI Portfolio, and unified trackers on GitHub.",
    href: "https://www.instagram.com/mihirvilasshah/",
    tag: "Life",
  },
] as const;

export const marquee = [
  "Angular",
  "TypeScript",
  "React",
  "Node.js",
  "WCAG 2.1 AA",
  "Azure",
  "AWS",
  "Gemini",
  "LangChain",
  "Neo4j",
  "AEM",
  "NgRx",
  "Python",
  "PostgreSQL",
  "Agile / RAD",
] as const;
