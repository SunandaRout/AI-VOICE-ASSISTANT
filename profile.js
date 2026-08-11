// ─────────────────────────────────────────────────────────────
// Centralized portfolio data.
// Everything here is sourced directly from Sunanda's resume.
// Edit THIS FILE to update content anywhere on the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Sunanda Rout",
  headline: "Aspiring Data Analyst",
  tagline:
    "B.Tech student turning raw data into clear, actionable insight — with SQL, Python and Power BI.",
  intro:
    "Aspiring Data Analyst currently pursuing a B.Tech at GITA Autonomous College. Skilled in SQL, Python, Excel, Power BI and data visualization, with hands-on experience building data analysis projects. Passionate about transforming data into actionable insights and solving real-world business problems through analytics and data-driven decision-making.",
  location: "Chandbali, Bhadrak District, Odisha, India — 756133",
  email: "routj345@gmail.com",
  phone: "+91 63717 69621",
  socials: {
    github: "https://github.com/SunandaRout",
    githubFeaturedRepo: "https://github.com/SunandaRout/AI-VOICE-ASSISTANT",
    linkedin: "https://www.linkedin.com/in/sunanda-rout-038091329",
  },
  resumeFile: "/resume.pdf",
};

export const about = {
  summary:
    "I'm an aspiring Data Analyst in the final stretch of my Bachelor of Technology, building a foundation in SQL, Python and Power BI through academic projects and self-directed learning. I enjoy the full arc of working with data — cleaning messy datasets, exploring them to find patterns, and packaging the findings into dashboards and visuals that a non-technical reader can act on.",
  focusAreas: [
    "Data cleaning & exploratory data analysis (EDA)",
    "Dashboarding & reporting with Power BI and Excel",
    "Data analysis and automation with Python",
    "Querying and working with structured data using SQL",
  ],
  lookingFor:
    "Entry-level and internship opportunities in data analytics, business intelligence, or related data-driven roles where I can keep building on these fundamentals.",
};

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "SQL"],
  },
  {
    category: "Data & Analytics",
    items: [
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning",
      "Data Visualization",
      "Statistics",
      "Problem Solving",
    ],
  },
  {
    category: "Libraries & Frameworks",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    category: "Tools & Platforms",
    items: ["Power BI", "Microsoft Excel"],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "GITA Autonomous College",
    duration: "2024 – 2028",
    details:
      "Developing technical and analytical skills with a focus on data-driven problem solving and emerging technologies.",
  },
  {
    degree: "Higher Secondary Education (+2 Science)",
    institution: "Chandbali Government College",
    duration: "2022 – 2024",
    details:
      "Completed +2 Science, building a strong foundation in Mathematics, Physics, and analytical problem-solving skills.",
  },
];

// Sunanda's resume lists hands-on, self-directed experience rather than a
// formal internship — presented honestly as an entry-level/fresher profile.
export const experience = [
  {
    role: "Data Analytics — Academic Projects & Self-Learning",
    organization: "Independent / Academic",
    duration: "Ongoing",
    points: [
      "Built hands-on experience in data analytics through academic projects and self-directed learning.",
      "Worked with SQL, Python, Excel and Power BI to analyze datasets and build interactive dashboards.",
      "Practiced data cleaning, visualization and reporting to extract meaningful business insights from raw data.",
    ],
    stack: ["SQL", "Python", "Excel", "Power BI"],
  },
];

export const projects = [
  {
    name: "Sales Dashboard using Power BI",
    description:
      "An interactive Power BI dashboard that consolidates sales data into visual reports for tracking performance and trends.",
    problem:
      "Raw sales data is hard to interpret in spreadsheet form, making it difficult to spot trends at a glance.",
    contribution:
      "Built the dashboard end-to-end: structured the data model, designed the visuals, and set up interactive filters for exploring performance by category.",
    stack: ["Power BI", "Excel", "Data Visualization"],
    github: null,
    demo: null,
  },
  {
    name: "Netflix Data Analysis using Python",
    description:
      "An exploratory data analysis project on a Netflix dataset to uncover patterns in content type, ratings and release trends.",
    problem:
      "Understanding what makes up a large streaming catalog requires cleaning and exploring the data before any trend becomes visible.",
    contribution:
      "Cleaned the dataset and performed EDA using Python, visualizing findings with Matplotlib and Seaborn.",
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    github: null,
    demo: null,
  },
  {
    name: "Customer Churn Analysis",
    description:
      "An analysis project examining customer data to identify patterns associated with customer churn.",
    problem:
      "Businesses need to understand which factors are associated with customers leaving in order to act on retention.",
    contribution:
      "Cleaned and explored the dataset to surface patterns and present findings in a clear, structured way.",
    stack: ["Python", "SQL", "EDA", "Statistics"],
    github: null,
    demo: null,
  },
];

export const certifications = [
  {
    name: "Data Analyst",
    issuer: "IBM",
    date: "",
    link: null,
  },
  {
    name: "Data Analyst Virtual Experience",
    issuer: "Forage",
    date: "",
    link: null,
  },
  {
    name: "Data Analyst",
    issuer: "Coursera",
    date: "",
    link: null,
  },
];

export const languages = ["English", "Hindi"];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
