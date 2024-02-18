// @ts-check
const crypto = require('crypto-js');
const { createSecureHeaders } = require('next-secure-headers');

const nonce = crypto.lib.WordArray.random(10).toString(crypto.enc.Base64);
const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
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
