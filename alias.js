const path = require('path');

// Dummy Webpack config for IDEA support

module.exports = {
  resolve: {
    alias: {
      'aliasmodule': path.resolve(__dirname, './aliasmodule'),
    },
  },
};
