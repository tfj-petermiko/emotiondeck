/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ✅ Redirect all /pro/phase-N → /pro/checkout?phase=N (except 1 and 4)
      {
        source: '/pro/phase-:phase((?!1|4)\\d+)',
        destination: '/pro/checkout?phase=:phase',
        permanent: true,
      },
      // ✅ Redirect all /pro/phase=N → /pro/checkout?phase=N (except 1 and 4)
      {
        source: '/pro/phase=:phase((?!1|4)\\d+)',
        destination: '/pro/checkout?phase=:phase',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
