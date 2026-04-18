/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@wenza/ui', '@wenza/api-client', '@wenza/store'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
