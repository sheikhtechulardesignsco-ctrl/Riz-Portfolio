export type ProjectCategory = 'all' | 'shopify' | 'wordpress' | 'custom' | 'ecommerce';

export interface Project {
  id: string;
  title: string;
  url: string;
  displayUrl: string;
  categories: ProjectCategory[];
  categoryBadge: string;
  tagline: string;
  summary: string;
  description: string;
  clientType: string;
  metric: string;
  metricLabel: string;
  technologies: string[];
  keyFeatures: string[];
  accentColor: string;
  headerBg: string;
  iconLetter: string;
  heroImage: string;
  heroFallbackImage?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    tag?: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}
