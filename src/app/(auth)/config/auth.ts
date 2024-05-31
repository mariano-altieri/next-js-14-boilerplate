import NextAuth, { DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { ZodError } from 'zod';

import { AUTH_API_URL } from '../constants/api';

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
      firstName: string;
      lastName: string;
      image: string;
      token: string;
    } & DefaultSession['user'];
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
      authorize: async (credentials) => {
        try {
          let user = null;
          console.log(1);

          // we don't occupy the username and password from the credentials object since we are using a mock server
          // const { username, password } = await signInSchema.parseAsync(credentials);

          const response = await fetch(`${AUTH_API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: 'emilys', // these are the credentials for the mock server
              password: 'emilyspass', // these are the credentials for the mock server
              expiresInMins: 30,
            }),
          });
          user = await response.json();

          if (!user) {
            throw new Error('User not found.');
          }

          // return json object with the user data
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log('redirect', url, baseUrl);
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    jwt({ token, user }) {
      if (user) {
        token.user = user;
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
