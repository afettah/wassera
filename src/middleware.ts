import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/', '/(ar|en)/:path*'],
};
