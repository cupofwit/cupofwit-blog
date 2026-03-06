import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware — currently a passthrough.
 *
 * To add authentication later with NextAuth:
 *
 * 1. npm install next-auth
 * 2. Create app/api/auth/[...nextauth]/route.ts
 * 3. Replace this middleware with NextAuth's withAuth() wrapper:
 *
 *    import { withAuth } from 'next-auth/middleware';
 *    export default withAuth({ pages: { signIn: '/login' } });
 *    export const config = { matcher: ['/protected/:path*'] };
 *
 * See: https://next-auth.js.org/configuration/nextjs#middleware
 */
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  // Update this matcher when adding protected routes, e.g.:
  // matcher: ['/dashboard/:path*', '/account/:path*']
  matcher: [],
};
