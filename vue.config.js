const path = require('path');

module.exports = {
  outputDir: path.resolve(
    __dirname,
    '../dakku-simul/src/main/webapp/resources/static',
  ),
  publicPath: '/resources/static/',
  indexPath: path.resolve(
    __dirname,
    '../dakku-simul/src/main/webapp/WEB-INF/views/index.html',
  ),
  devServer: {
    overlay: false,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_URL,
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
