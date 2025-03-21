/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path');
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  i18n,
  output: 'standalone',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  productionBrowserSourceMaps: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/api/:path*',
          destination: '/api/not-found',
        },
        {
          source: '/:path*',
          destination: '/errors/404',
        },
      ],
    };
  },
};

module.exports = nextConfig;
