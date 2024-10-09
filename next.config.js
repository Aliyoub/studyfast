/** @type {import('next').NextConfig} */
// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/question-answer',
//         destination: '/revisions/history/question-answer',
//       },
//     ];
//   },
// };


// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // Autres configurations Next.js
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/question-answer',
        destination: '/revisions/history/question-answer',
      },
    ];
  },
});


const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  // Other Next.js configurations...
  
  webpack: (config, { dev, isServer }) => {
    // Only add GenerateSW in production on the client-side
    if (!dev && !isServer) {
      config.plugins.push(
        new GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          // Additional Workbox configuration here...
        })
      );
    }

    return config;
  },
};

