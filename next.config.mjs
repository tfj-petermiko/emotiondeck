/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/pro/phase-:phase((?!1|2|3|4|5|6)\\d+)",
        destination: "/pro/checkout?phase=:phase",
        permanent: true,
      },
      {
        source: "/pro/phase=:phase((?!1|2|3|4|5|6)\\d+)",
        destination: "/pro/checkout?phase=:phase",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
