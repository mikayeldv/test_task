import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { localePrefix, locales } from '../helpers/navigation';

const intlMiddleware = createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'en',
  localeDetection: false,
});

export async function middleware(req: NextRequest) {
  const response = intlMiddleware(req);

  return response || NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.svg$|apple-touch-icon.png$|images/books|icons|manifest|assets|robots.txt|sitemap.xml).*)',
  ],
};
