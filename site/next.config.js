const { DOCS_URL } = process.env

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig, {
  async rewrites() {
    return[
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/docs',
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: '/blog/:path*',
        destination: `${DOCS_URL}/docs/:path*`,
      },
    ]
  }
}
