import * as z from 'zod';

export const signInSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
});

export type SignIn = z.infer<typeof signInSchema>;

export const registerSchema = z.object({
  username: z.string().min(1, {
    message: 'Please enter a valid username.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
});

export type Register = z.infer<typeof registerSchema>;
