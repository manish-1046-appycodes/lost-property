module.exports = {
  reactStrictMode: true,
  
  experimental: {
    scrollRestoration: false
  },
  
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
