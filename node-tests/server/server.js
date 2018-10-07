const express = require('express');

var app = express();

app.get('/', (req, res) => {
  return res.send('Hello world');
});

app.listen(3000);

module.exports.app = app;
