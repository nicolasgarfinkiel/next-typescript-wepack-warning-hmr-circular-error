// next.config.js
module.exports = {
  webpack: (config) => {
    const eslintRule = {
      test: /\.(tsx|ts|js|mjs|jsx)$/,
      enforce: 'pre',
      loader: 'eslint-loader'
    };

    const rules = [].concat(eslintRule, config.module.rules);
    config.module.rules = rules;

    return config;
  }
};
