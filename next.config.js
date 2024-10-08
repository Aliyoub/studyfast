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
