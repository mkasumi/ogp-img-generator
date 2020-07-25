const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');
const babelPlugins = [];
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
  cache: true,
  entry: {
    'bundle': `./src/js/index.js`
  },
  output: {
    path: __dirname,
    filename: `./dest/[name].js`
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true,
          failOnError: false
        }
      },
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env', 'react'],
          plugins: babelPlugins
        }
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        loader: 'url-loader',
        options: {
          limit: 20480
        }
      },
      {
       test: /\.vue$/,
       loader: "vue-loader"
      }
    ]
  },
 resolve: {
  modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  // Webpackで利用するときの設定
  alias: {
   'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' webpack 1 用
  },
  extensions: ["*", ".js", ".vue", ".json"]
 },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
   new VueLoaderPlugin()
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    })
  );
  babelPlugins.push("transform-remove-strict-mode");
  babelPlugins.push("babel-plugin-transform-dead-code-elimination");

} else {
  config.devtool = "inline-source-map";
}

module.exports = config;
