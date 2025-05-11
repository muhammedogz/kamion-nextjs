import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTES } from '@/constants/routes';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const isAuthPage = request.nextUrl.pathname === ROUTES.ROOT;

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL(ROUTES.ROOT, request.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL(ROUTES.DASHBOARD, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [ROUTES.ROOT, ROUTES.DASHBOARD],
};
