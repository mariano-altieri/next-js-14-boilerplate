'use server';

import { signIn } from '../config/auth';

export async function login(username: string, password: string, redirectTo?: string) {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  const options: any = {};

  if (redirectTo) {
    options.redirectTo = redirectTo;
  }

  await signIn('credentials', formData, options);
}
