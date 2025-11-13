import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'app.visionarybizz.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/listings/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
          { key: 'Content-Language', value: 'en-SA, ar-SA' }, // Saudi Arabia with bilingual support
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
        ]
      },
      {
        source: '/global-listings/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
          { key: 'Content-Language', value: 'en-SA, ar-SA' }, // Saudi Arabia with bilingual support
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
        ]
      },
      {
        source: '/add-listing',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
          { key: 'Content-Language', value: 'en-SA, ar-SA' }
        ]
      },
      {
        source: '/dashboard/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' }
        ]
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'X-Content-Type-Options', value: 'nosniff' }
        ]
      },
      // About and Services pages
      {
        source: '/about-us',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
          { key: 'Content-Language', value: 'en-SA, ar-SA' }
        ]
      },
      {
        source: '/services/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
          { key: 'Content-Language', value: 'en-SA, ar-SA' }
        ]
      },
      // AI Agent specific headers
      {
        source: '/(.*)',
        headers: [
          { key: 'X-AI-Agent-Optimized', value: 'true' },
          { key: 'X-Knowledge-Graph-Enabled', value: 'true' },
          { key: 'X-Entity-Recognition', value: 'enabled' },
          { key: 'X-Market', value: 'Saudi Arabia' },
          { key: 'X-Region', value: 'Gulf' }
        ]
      }
    ]
  },
};

export default nextConfig;