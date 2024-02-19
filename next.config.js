// @ts-check
const { createSecureHeaders } = require('next-secure-headers');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    domains: ['https://firebasestorage.googleapis.com', 'firebasestorage.googleapis.com'],
},
  generateStaticParams: async () => {
    return {
      '/': { page: '/' },
      '/home': { page: '/home' },
      '/contact': { page: '/contact' },
    };
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: '',
          },
          ...createSecureHeaders({
            contentSecurityPolicy: {
              directives: {
                defaultSrc: ["'none'"],
                prefetchSrc: ["'self'"],
                imgSrc: ["'self'", 'www.gstatic.com', 'https://firebasestorage.googleapis.com/'],
                baseURI: ["'self'"],
                fontSrc: ["'self'", 'https://fonts.gstatic.com'],
                frameSrc: ['*.google.com'],
                styleSrc: [
                  "'self'",
                  'https://fonts.googleapis.com',
                  // `'nonce-${nonce}'`,
                  "'unsafe-inline'",
                ],
                scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'", 'https://www.google.com', 'https://www.gstatic.com'],
                connectSrc: [
                  "'self'",
                  '*.google.com',
                  'https://www.google.com/',
                  'https://*.googleapis.com'
                ],
              },
            },
          }),
        ],
      },
    ];
  },
}

module.exports = nextConfig
