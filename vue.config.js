module.exports = {
  css: {
    // sass loader config
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/main.scss";`,
      },
    },
    extract: {
      filename: "css/[name].css",
      chunkFilename: "css/[name].css",
    },
  },
  configureWebpack: {
    output: {
      filename: "js/[name].js",
      chunkFilename: "js/[name].js",
    },
  },
};
