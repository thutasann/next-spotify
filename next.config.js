/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ekmchrclcargwlacasyp.supabase.co'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
