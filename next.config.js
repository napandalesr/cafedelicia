// @ts-check
const { createSecureHeaders } = require('next-secure-headers');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  reactStrictMode: true,
  distDir: 'build',
  exportPathMap: function () {
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
                imgSrc: ["'self'"],
                baseURI: ["'self'"],
                fontSrc: ["'self'", 'https://fonts.gstatic.com'],
                frameSrc: ['*.google.com'],
                styleSrc: [
                  "'self'",
                  'https://fonts.googleapis.com',
                  // `'nonce-${nonce}'`,
                  "'unsafe-inline'",
                ],
                scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
                connectSrc: [
                  "'self'",
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
