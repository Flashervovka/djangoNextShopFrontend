import type { NextConfig } from 'next';

const DJANGO_URL = process.env.DJANGO_URL ?? 'http://localhost:8000';

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
  async rewrites() {
    return [
      {
        source: '/media/:path*',
        destination: `${DJANGO_URL}/media/:path*`,
      },
    ];
  },
};

export default nextConfig;
