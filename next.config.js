/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true,
  i18n,
  presets: ['next/babel'],
  plugins: [['@babel/plugin-transform-runtime', { regenerator: true }]],
}

module.exports = nextConfig
