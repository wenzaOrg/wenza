import { z } from 'zod';

export const scholarshipApplicationSchema = z.object({
  first_name: z.string().min(2, 'Please provide your first name.').max(80),
  last_name: z.string().min(2, 'Please provide your last name.').max(80),
  email: z.string().email('Please provide a valid email address.').max(200),
  phone: z.string().regex(/^(\+[0-9]{1,4}|0)[0-9]{7,14}$/, 'Please provide a valid phone number.'),
  gender: z.enum(['male', 'female', 'prefer_not_to_say']),
  country: z.string().min(2, 'Please provide your country.').max(80),
  state_or_city: z.string().min(2, 'Please provide your state or city.').max(120),
  current_status: z.enum(['student', 'graduate', 'nysc', 'employed', 'self_employed', 'unemployed', 'other']),
  education_level: z.enum(['high_school', 'degree', 'masters', 'hnd', 'diploma', 'ond', 'mphil_phd', 'nce', 'other']),
  course_id: z.number({ required_error: 'Please select a programme.' }),
  cohort_id: z.number({ required_error: 'Please select an intake cycle.' }),
  learning_mode: z.enum(['online', 'physical', 'hybrid']),
  wants_scholarship: z.boolean().default(true),
  prior_tech_experience: z.enum(['none', 'some', 'experienced']),
  wants_job_placement: z.boolean(),
  turnstile_token: z.string().min(1, 'Please complete the security verification.'),
});

export type ScholarshipApplicationValues = z.infer<typeof scholarshipApplicationSchema>;
