import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Define the secret and key (same as in lib/Auth/session.ts)
const secret = process.env.JWT_SECRET;
const key = secret ? new TextEncoder().encode(secret) : undefined;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('auth_token')?.value;

  const isAuthRoute = pathname === '/auth/signin' || pathname === '/auth/signup';
  const isProtectedRoute = pathname.startsWith('/main');

  let isValid = false;

  if (token) {
    try {
      if (!key) throw new Error("JWT_SECRET is missing");
      await jwtVerify(token, key, {
        algorithms: ["HS256"],
        issuer: "your-app",
        audience: "your-app-users",
      });
      isValid = true;
    } catch (error) {
      isValid = false;
    }
  }

  // Redirect authenticated users away from auth pages
  if (isAuthRoute && isValid) {
    return NextResponse.redirect(new URL('/main/dashboard', request.url));
  }

  // Redirect unauthenticated users away from protected pages
  if (isProtectedRoute && !isValid) {
    const response = NextResponse.redirect(new URL('/auth/signin', request.url));
    response.cookies.delete('auth_token');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/main/:path*', '/auth/signin', '/auth/signup'],
};
