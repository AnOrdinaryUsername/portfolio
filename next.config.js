const NextPWA = require('next-pwa');

module.exports = NextPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
  },
});
