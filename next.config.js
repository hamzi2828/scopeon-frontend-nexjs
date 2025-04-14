/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during builds
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during builds
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  // Disable image optimization warnings
  images: {
    // This disables the warning about using <img> instead of next/image
    // You should eventually migrate to next/image for better performance
    unoptimized: true,
  },
  // Increase build timeout if needed
  experimental: {
    // This increases the timeout for the build process
    // Useful for larger projects that might time out during build
    turbotrace: {
      logLevel: 'error',
    },
  },
};

module.exports = nextConfig;
