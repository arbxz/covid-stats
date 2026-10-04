export const defaultLocale = 'en' as const;

export const locales = ['en', 'fr'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    fr: '/pfadnamen',
  },
} as const;

export const localePrefix = 'always' as const;

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
