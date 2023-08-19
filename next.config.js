const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  swcMinify: true,
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader: '@svgr/webpack', options: {icon: true}}],
    })
    return config;
  },
}

module.exports = nextConfig

