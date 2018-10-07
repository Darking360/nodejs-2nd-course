const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

const logMiddleware = (req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url}`

  console.log(log);

  next();
}

app.use(logMiddleware);

app.get('/', (req, res) => {
  return res.send('Hello from Express');
});

app.get('/about', (req, res) => {
  res.render('about.hbs');
});

app.listen(3000);

console.log('Magic happening in port 3000');
