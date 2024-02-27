#!/usr/bin/env node
// 4. Create a small HTTP server using Node's HTTP module

const { createServer } = require('http');

const port = 1245;
const host = '127.0.0.1';

const app = createServer((req, resp) => {
  resp.writeHead(200, { 'Content-Type': 'text/plain' });
  resp.end('Hello Holberton School!');
});

app.listen(port, host, () => {
  console.log(`Server is live, running at http://${host}:${port}`);
});

module.exports = app;
