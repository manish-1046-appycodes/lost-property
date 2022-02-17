module.exports = {
  reactStrictMode: true,
  
  experimental: {
    scrollRestoration: false
  },

  images: {
    domains: ['localhost', 'lostpropertyhotel.com', 'curio.greenwich-design-projects.co.uk'],
  },

  trailingSlash: true,
  
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
