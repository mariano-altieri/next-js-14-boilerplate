import { auth } from '@/app/(auth)/config/auth';
import { DEFAULT_LANDING_PAGE } from './app/commons/constants/routes';

const authRoutes: string[] = ['/login', '/register'];
const apiAuthPrefix = '/api/auth';
const privateRoutes: string[] = ['/admin'];

export default auth((req) => {
  const { nextUrl } = req;
  const { pathname } = nextUrl;
  const isLoggedIn = !!req.auth;

  if (pathname.startsWith(apiAuthPrefix)) {
    return;
  }

  if (authRoutes.includes(pathname)) {
    return isLoggedIn ? Response.redirect(new URL(DEFAULT_LANDING_PAGE, nextUrl)) : undefined;
  }

  if (!isLoggedIn && privateRoutes.some((r) => pathname.startsWith(r))) {
    return Response.redirect(new URL(`/login?redirectTo=${pathname}`, nextUrl));
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
