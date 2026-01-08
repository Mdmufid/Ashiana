/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },

      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/projects/residential",
        destination: "/projects?catname=residential",
        permanent: true,
      },
      {
        source: "/services/paint",
        destination: "/services/paint-and-wallpaper",
        permanent: true,
      },
      {
        source: "/null",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
