#!/usr/bin/env node
// 6. Create a small HTTP server using Express

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Express Server listening on port ${port}`);
});

module.exports = app;
