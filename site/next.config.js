const  DOCS_URL  = process.env.DOCS_URL ?? "https://kian-codes-docs.vercel.app/"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
    /*   {
        source: '/docs',
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: '/blog/:path*',
        destination: `${DOCS_URL}/docs/:path*`,
      }, */
    ]
  },
}

module.exports = nextConfig
