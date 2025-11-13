// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // 🔒 Security headers only (synchronous)
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  // Only add CSP in production
  // if (process.env.NODE_ENV === 'production') {
  //   response.headers.set(
  //     'Content-Security-Policy',
  //     [
  //       "default-src 'self'",
  //       "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://app.visionarybizz.com",
  //       "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  //       "font-src 'self' https://fonts.gstatic.com",
  //       "img-src 'self' data: https: blob:",
  //       "connect-src 'self' https://res.cloudinary.com https://app.visionarybizz.com",
  //       "frame-src 'self' https://app.visionarybizz.com",
  //       "frame-ancestors 'self'"
  //     ].join('; ')
  //   )
  // }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt, sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}