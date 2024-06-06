import { AuthError } from 'next-auth';
import { ZodError } from 'zod';

import { AuthReponseError } from '../interfaces/auth.response';

export function handleAuthErrors(error: unknown): AuthReponseError {
  if (error instanceof AuthError) {
    switch (error.type) {
      case 'CredentialsSignin':
        return {
          ok: false,
          message: 'Invalid credentials',
        };
      default:
        return {
          ok: false,
          message: 'Something went wrong. Please try again later.',
        };
    }
  } else if (error instanceof ZodError) {
    return {
      ok: false,
      message: 'Invalid credentials',
    };
  }

  return {
    ok: false,
    message: 'Something went wrong. Please try again later.',
  };
}
