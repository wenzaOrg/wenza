export interface User {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  role: 'student' | 'mentor' | 'admin';
  avatar_url: string | null;
  email_verified_at: string | null;
  created_at: string;
}
