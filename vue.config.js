module.exports = {
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      sass: {
        data: '@import "./src/style.scss";',
      },
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
};
