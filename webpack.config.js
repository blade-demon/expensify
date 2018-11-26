const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = env => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");
  const HtmlWebpack = new HtmlWebpackPlugin({
    template: "src/index.html"
  });

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "[name].[hash].js"
    },
    module: {
      rules: [
        { loader: "babel-loader", test: /\.js$/, exclude: /node_modules/ },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      // proxy requests  back to index.html
      historyApiFallback: true
    },
    plugins: [HtmlWebpack, CSSExtract]
  };
};
