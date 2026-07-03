export type SkillCategoryId = "frontend" | "backend" | "database" | "tools";

export interface SkillCategory {
  id: SkillCategoryId;
  title: string;
  items: string[];
}

export interface Skills {
  title: string;
  subtitle: string;
  categories: SkillCategory[];
}
