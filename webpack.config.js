const webpack = require('webpack');
const path = require('path');
const alias = require('./alias');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env) => {
  console.log("Env: " + JSON.stringify(env));

  const debug = !!env.debug;
  const outDir = env.outDir;

  // Setup paths
  const baseDir = __dirname;
  const nodeModulesPath = path.join(baseDir, '..', 'node_modules');
  const srcPath = path.join(baseDir, 'js');
  const destPath = path.join(baseDir, outDir);

  return {
    target: 'web',
    mode: 'production',
    entry: {
      main: [
        path.join(srcPath, 'main.js'),
      ],
    },
    resolve: {
      extensions: ['.js'],
      modules: [srcPath, nodeModulesPath, 'aliasmodule'],
      alias: alias.resolve.alias,
    },
    resolveLoader: {
      modules: [nodeModulesPath],
    },
    output: {
      path: destPath,
      publicPath: debug ? '/' : '/js/',
      filename: debug ? '[name].js' : '[chunkhash].js',
      chunkFilename: debug ? '[name].js' : '[chunkhash].js',
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
      }),
      new webpack.ProvidePlugin({
      }),
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        append: `\n//# sourceMappingURL=http://localhost:8080/sourcemaps/[url]`,
      }),
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
      ],
      splitChunks: {
        chunks: "all",
      },
      namedModules: !!env.namedModules,
      namedChunks: true,
    },

    devtool: undefined,
    performance: {
      hints: false,
    },
  };
};
