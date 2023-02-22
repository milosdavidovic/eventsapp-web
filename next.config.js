/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  basePath: "/events",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/events",
        basePath: false,
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "**/**",
      },
    ],
  },
};

module.exports = nextConfig;

