import type { Skills } from "../types/skills";

export const skills: Skills = {
  title: "Skills",
  subtitle: "Technologies I use to build modern web applications",

  categories: [
    {
      id: "frontend",
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      id: "backend",
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      id: "database",
      title: "Database",
      items: ["PostgreSQL", "Prisma ORM"],
    },
    {
      id: "tools",
      title: "Developer Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "pnpm"],
    },
  ],
};
