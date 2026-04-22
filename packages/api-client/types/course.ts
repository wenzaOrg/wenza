export interface Cohort {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  capacity: number;
  status: 'upcoming' | 'active' | 'completed';
}

export interface ToolsAndTechnologies {
  name: string;
  logo_url: string;
}

export interface CareerOutcome {
  role: string;
  nigeria_ngn: string;
  us_usd: string;
  global_usd: string | null;
}

export interface CurriculumItem {
  week: number;
  title: string;
  topics: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Mentor {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  title: string;
  company: string;
  avatar_url: string | null;
  bio: string | null;
  linkedin_url: string | null;
  years_experience: number;
}

export interface Course {
  id: number;
  slug: string;
  title: string;
  category: 'engineering' | 'data' | 'design' | 'business' | 'security';
  description: string;
  duration_weeks: number;
  format: 'cohort' | 'self_paced';
  price_ngn: number;
  price_usd: number | null;
  scholarship_price_ngn: number | null;
  thumbnail_url: string | null;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;

  // PR 3 Detail Fields
  curriculum: CurriculumItem[];
  outcomes: string[];
  about_mdx: string;
  faqs: FAQItem[];
  tools_and_technologies: ToolsAndTechnologies[];
  career_outcomes: CareerOutcome[];
  prerequisites: string | null;

  // Relations
  mentors: Mentor[];
  cohorts: Cohort[];
}
