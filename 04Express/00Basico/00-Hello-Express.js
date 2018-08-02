const express = require('express');
const app = express();

function home(req, res) {
  res.end('<h1>Hola mundo desde Express</h1>');
}

function home2(req, res) {
  res.end('<h1>Hola mundo desde Express con /holi</h1>');
}

app
  .get('/', home)
  .get('/holi', home2)
  .listen(3000);

console.log(`Running Express on https://localhost:3000`);