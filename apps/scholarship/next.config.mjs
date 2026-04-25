/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

// Extract origin from NEXT_PUBLIC_API_URL for CSP connect-src
// CSP needs origin only (no path), e.g. https://wenza-api-production.up.railway.app
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
let apiOrigin;
try {
  apiOrigin = new URL(apiUrl).origin;
} catch {
  apiOrigin = 'http://127.0.0.1:8000';
}

const nextConfig = {
  transpilePackages: ['@wenza/ui', '@wenza/api-client', '@wenza/store'],
  async headers() {
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ''} https://challenges.cloudflare.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' blob: data:;
      font-src 'self';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      frame-src https://challenges.cloudflare.com;
      connect-src 'self' ${apiOrigin};
      upgrade-insecure-requests;
    `
      .replace(/\s{2,}/g, ' ')
      .trim();

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
