import createMiddleware from 'next-intl/middleware';

import { defaultLocale, localePrefix, locales, pathnames } from '@/config';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
