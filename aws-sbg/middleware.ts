import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Define the secret and key (same as in lib/Auth/session.ts)
const secret = process.env.JWT_SECRET;
const key = secret ? new TextEncoder().encode(secret) : undefined;

export async function middleware(request: NextRequest) {
  // Get the token from cookies
  const token = request.cookies.get('auth_token')?.value;

  // If no token exists, redirect unauthenticated users to the sign-in page
  if (!token) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  try {
    if (!key) throw new Error("JWT_SECRET is missing");

    // Verify the JWT token using jose (which is compatible with Edge runtime)
    await jwtVerify(token, key, {
      algorithms: ["HS256"],
      issuer: "your-app",
      audience: "your-app-users",
    });

    // Token is valid, proceed to the requested route
    return NextResponse.next();
  } catch (error) {
    // If the token is invalid, expired, or malformed, clear it and redirect to sign-in
    const response = NextResponse.redirect(new URL('/auth/signin', request.url));
    response.cookies.delete('auth_token');
    return response;
  }
}

// The config object tells Next.js exactly which routes this middleware should run on.
export const config = {
  // Apply middleware ONLY to protected routes
  // You can add more routes here using an array: matcher: ['/main/:path*', '/profile/:path*']
  matcher: '/main/:path*',
};
