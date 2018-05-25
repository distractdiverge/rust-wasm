module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    config.module.rules.push({
      test: /\.wasm$/,
      use: ['wasm-loader']
    });

    return config;
  }
};
