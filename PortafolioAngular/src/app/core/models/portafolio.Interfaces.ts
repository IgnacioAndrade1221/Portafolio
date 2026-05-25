export type Language = 'es' | 'en';

export interface Translation {
  es: string;
  en: string;
}

export interface Skill {
  name: string;
  category: 'main' | 'complementary' | 'tools';
}

export interface Experience {
  company: string;
  role: Translation;
  period: Translation;
  description: Translation;
}

export interface Project {
  title: string;
  description: Translation;
  techStack: string[];
  videoUrl: string;
  githubUrl?: string;
}

export interface PortfolioData {
  name: string;
  title: Translation;
  about: Translation;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    cvUrl: string;
  };
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: {
    institution: string;
    degree: Translation;
    period: Translation;
  };
}