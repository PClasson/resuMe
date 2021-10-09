const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "https://pclasson.github.io/resuMe" : "",
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://noop/",
  },
};
