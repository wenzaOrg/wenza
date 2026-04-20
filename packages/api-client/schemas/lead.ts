import { z } from 'zod';

export const leadSubmissionSchema = z.object({
  full_name: z.string().min(2, 'Please provide your full name').max(120),
  email: z.string().email('Please enter a valid email address').max(200),
  phone: z.string().regex(/^(\+234|0)[789][01]\d{8}$/, 'Please enter a valid Nigerian phone number'),
  age: z.number().int().min(16, 'You must be at least 16 years old to apply').max(80),
  employment_status: z.enum(['employed', 'self_employed', 'unemployed', 'student', 'other']),
  education_level: z.enum(['ssce', 'ond', 'hnd', 'bachelors', 'masters', 'phd', 'other']),
  goals: z.string().min(20, 'Please provide more detail about your goals').max(2000),
  course_id: z.number().int().positive().optional(),
  wants_scholarship: z.boolean(),
  turnstile_token: z.string().min(1, 'Please complete the security check'),
  guardian_consent: z.boolean().optional(),
}).refine(
  (data) => data.age >= 18 || data.guardian_consent === true,
  { message: 'Guardian consent required for applicants under 18', path: ['guardian_consent'] }
);

export type LeadSubmission = z.infer<typeof leadSubmissionSchema>;
