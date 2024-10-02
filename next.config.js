/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/question-answer',
        destination: '/revisions/history/question-answer',
      },
    ];
  },
};