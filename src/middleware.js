import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('accessToken'); // Adjust this based on your authentication method

  // List of protected routes
  const protectedRoutes = [
  '/card',
  '/payment-failed',
  '/payment-success',
  '/payment-option',
  '/confirm-product',
];

  const { pathname } = req.nextUrl;
  console.log("pathname",pathname)

  // Check if the requested route is protected
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      // If user is not authenticated, redirect to login page and store the requested URL
      const loginUrl = new URL('/login', req.url);
      loginUrl.searchParams.set('from', pathname); // Preserve the route for redirect after login
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next(); // Continue to the requested page if authenticated
}

export const config = {
  matcher: ['/card','/payment-failed','/payment-success','/payment-option','/confirm-product'],
}
  