const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>TJABA</h1>');
});

module.exports = app;
