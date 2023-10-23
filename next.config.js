/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true,
  i18n,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'core-js/modules/es.array.map': require.resolve('core-js/modules/es.array.map'),
    };
    return config;
  },
}

module.exports = nextConfig
