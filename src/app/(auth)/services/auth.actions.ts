'use server';

import { signIn } from '../config/auth';
import { AuthReponseError, AuthResponseSuccess } from '../interfaces/auth.response';
import { handleAuthErrors } from '../helpers/auth.helpers';

export async function login(
  username: string,
  password: string,
): Promise<AuthReponseError | AuthResponseSuccess> {
  try {
    await signIn('credentials', {
      username,
      password,
      redirect: false,
    });
    return { ok: true };
  } catch (error) {
    return handleAuthErrors(error);
  }
}
