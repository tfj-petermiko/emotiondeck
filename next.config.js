/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ✅ Redirect all /pro/phase-N → /pro/checkout?phase=N (except 1, 4 and 6)
      {
        source: '/pro/phase-:phase((?!1|2|3|4|5|6)\\d+)',
        destination: '/pro/checkout?phase=:phase',
        permanent: true,
      },
      // ✅ Redirect all /pro/phase=N → /pro/checkout?phase=N (except 1, 4 and 6)
      {
        source: '/pro/phase=:phase((?!1|2|3|4|5|6)\\d+)',
        destination: '/pro/checkout?phase=:phase',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
