module.exports = {
  devServer: {
    host:'0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://101.132.124.171:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
  }