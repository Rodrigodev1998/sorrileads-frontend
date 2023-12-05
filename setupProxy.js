const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/sorrileads',
    createProxyMiddleware({
      target: 'http://ec2-34-227-66-235.compute-1.amazonaws.com:8080',
      changeOrigin: true,
    })
  );
};
