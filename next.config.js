/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/:path*', has: [{ type: 'host', value: 'hudsonvirtual.co.uk' }], destination: 'https://www.hudsonvirtual.co.uk/:path*', permanent: true }]
  },
  async headers() {
    return process.env.VERCEL_ENV === 'preview' ? [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }] : []
  },
}
module.exports = nextConfig
