export interface ProjectFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
}
