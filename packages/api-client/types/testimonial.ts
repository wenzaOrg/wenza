export interface Testimonial {
  id: number;
  author_name: string;
  author_role: string;
  source: string;
  avatar_url: string | null;
  content: string;
  rating: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}
