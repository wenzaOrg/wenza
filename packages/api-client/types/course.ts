export interface Cohort {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  capacity: number;
  status: 'upcoming' | 'active' | 'completed';
}

export interface Lesson {
  id: number;
  title: string;
  order: number;
  content_type: 'video' | 'text' | 'quiz';
  duration_minutes: number | null;
}

export interface Module {
  id: number;
  title: string;
  order: number;
  description: string | null;
  lessons: Lesson[];
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
  modules: Module[];
  cohorts: Cohort[];
  created_at: string;
  updated_at: string;
}
