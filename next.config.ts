import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/reservation",
        destination:
          "https://wa.me/22890000000?text=Bonjour%20OCD%20Live%20!%20Je%20souhaite%20r%C3%A9server%20un%20cr%C3%A9neau%20live.",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
