/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ✅ Redirect all /pro/phase-N and /pro/phase=N except 1 and 4
      {
        source: '/pro/phase-:phase((?!1|4)\\d+)',
        destination: '/pro/checkout?phase=:phase',
        permanent: true,
      },
      {
        source: '/pro/phase=:phase((?!1|4)\\d+)',
        destination: '/pro/checkout?phase=:phase',
        permanent: true,
      },

      // 🩶 Optional (just for safety): keep free phases direct
      {
        source: '/pro/phase-1',
        destination: '/pro/phase-1',
        permanent: false,
      },
      {
        source: '/pro/phase=1',
        destination: '/pro/phase=1',
        permanent: false,
      },
      {
        source: '/pro/phase-4',
        destination: '/pro/phase-4',
        permanent: false,
      },
      {
        source: '/pro/phase=4',
        destination: '/pro/phase=4',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
