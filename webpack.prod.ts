import * as HTMLPlugin from "html-webpack-plugin";
import * as path from "path";
import * as WebPack from "webpack";

const htmlPlugin = new HTMLPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

const config: WebPack.Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [htmlPlugin],
};

export default config;
