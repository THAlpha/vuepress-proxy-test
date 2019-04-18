module.exports = {
  configureWebpack: (config, isServer) => {
    config.devServer = {
      proxy: {
        '^/auth': {
          target: 'http://localhost:7070',
          ws: true,
          changeOrigin: true
        }
      }
    };
  }
};
