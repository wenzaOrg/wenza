import { z } from 'zod';

export const contactMessageSchema = z.object({
  full_name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  subject: z.enum(['application_question', 'scholarship_question', 'press_partnerships', 'other']),
  message: z.string().min(20).max(2000),
  turnstile_token: z.string().min(1, 'Please complete the security check'),
});

export type ContactMessageSubmission = z.infer<typeof contactMessageSchema>;
