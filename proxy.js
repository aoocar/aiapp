const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'https://api.dify.ai' });
});

server.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});
