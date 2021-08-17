module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
    });
    return config;
  },
  env: {
    contactEndPoint: 'https://formspree.io/f/xoqylwno',
  },
};
