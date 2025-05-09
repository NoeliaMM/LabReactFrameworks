const HtmlWebpackPlugin = require("html-webpack-plugin");
const { defineReactCompilerLoaderOption, reactCompilerLoader } = require('react-compiler-webpack');
const path = require("path");
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      '@': path.resolve(__dirname, 'src'), // Define '@' como alias para 'src'
    },
  },
  entry: {
    app: ["./index.tsx", "./styles.css"],
  },
  devtool: "eval-source-map",
  stats: "errors-only",
  output: {
    filename: "[name].[chunkhash].js",
    publicPath: "/",
  },
  devServer:{
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      // Reglas para CSS modules (archivos .module.css)
      {
        test: /\.module\.css$/, 
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]', // Aquí puedes personalizar el nombre
              },
            },
          },
        ],
      },

        {
          test: /\.[mc]?[jt]sx?$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: reactCompilerLoader,
              options: defineReactCompilerLoaderOption({
                // React Compiler options goes here
              })
            }
          ]
        }
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
    }),
  ],
};
