/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hbjruqmmefnuuvzhalvc.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
