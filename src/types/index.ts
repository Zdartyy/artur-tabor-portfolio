export interface ProjectFrontmatter {
  title: string;
  subtitle?: string;
  description?: string;
  date: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}
