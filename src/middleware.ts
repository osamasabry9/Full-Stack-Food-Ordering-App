// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { i18n, LanguageType, Locale } from "./i18n.config";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";

const PUBLIC_FILE = /\.(.*)$/;

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: LanguageType[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  let locale = '';

  try {
    locale = matchLocale(languages, locales, i18n.defaultLocale);
  } catch {
    locale = i18n.defaultLocale;
  }

  return locale;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public files and API routes
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next')
  ) {
    return;
  }

  // Check if pathname is missing locale or has invalid format
  const pathLocale = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathLocale) {
    const locale = getLocale(request);

    // Handle root path without trailing slash
    const newPath = pathname === '/'
      ? `/${locale}`
      : `/${locale}${pathname}`;

    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Handle double locale (e.g., /en/en)
  const pathSegments = pathname.split('/').filter(Boolean);
  if (pathSegments.length > 1 && i18n.locales.includes(pathSegments[1] as Locale)) {
    const newPath = pathname.replace(`/${pathSegments[0]}/${pathSegments[1]}`, `/${pathSegments[0]}`);
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Set response headers
  const response = NextResponse.next();
  response.headers.set('x-url', request.url);

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
