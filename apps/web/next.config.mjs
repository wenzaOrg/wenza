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
  env: {
    NEXT_PUBLIC_WHATSAPP_URL: process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://chat.whatsapp.com/placeholder',
    NEXT_PUBLIC_CALENDLY_URL: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/wenza/info-session',
  },
};

export default nextConfig;
