/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Obsługuje /pro/phase=4 → /pro/checkout?phase=4
      {
        source: '/pro/phase=:phase',
        destination: '/pro/checkout?phase=:phase',
        permanent: true,
      },
      // Obsługuje /pro/phase-4 → /pro/checkout?phase=4
      {
        source: '/pro/phase-:phase',
        destination: '/pro/checkout?phase=:phase',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
