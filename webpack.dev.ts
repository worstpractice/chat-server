import * as HTMLPlugin from "html-webpack-plugin";
import * as WebPack from "webpack";

const htmlPlugin = new HTMLPlugin({
  template: "./src/index.html",
});

const config: WebPack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
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
