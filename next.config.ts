/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['theme.bitspecksolutions.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'theme.bitspecksolutions.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;