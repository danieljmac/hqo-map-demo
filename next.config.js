/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    images: {
        domains: [
          '0.gravatar.com',
          '1.gravatar.com',
          '2.gravatar.com',
          'secure.gravatar.com',
          //remove these below, just for demo content
          'http://localhost:3000',
          'localhost:3000',
          'http://localhost',
          'localhost',
        ],
      },
}

module.exports = nextConfig
