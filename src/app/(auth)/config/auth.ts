import NextAuth, { DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { AUTH_API_URL } from '../constants/api';
import { signInSchema } from '../schemas/auth.schemas';
import { User } from '../interfaces/user.interface';

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User & DefaultSession['user'];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {},
        password: {},
      },
      authorize: async ({ username, password }) => {
        try {
          // Validate against schema
          const validated = signInSchema.safeParse({ username, password });

          if (!validated.success) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }

          // Send login request
          const response = await fetch(`${AUTH_API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: validated.data.username,
              password: validated.data.password,
              expiresInMins: 30,
            }),
          });

          if (response.ok) {
            return await response.json();
          }

          // Return `null` to indicate that the credentials are invalid
          return null;
        } catch (error) {
          // Return `null` to indicate that the credentials are invalid
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        return { ...token, user };
      }

      return token;
    },
    session({ session, token }) {
      if (token.user) {
        return { ...session, user: token.user };
      }

      return session;
    },
  },
});
