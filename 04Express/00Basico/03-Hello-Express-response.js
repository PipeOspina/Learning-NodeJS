const express = require('express');
const app = express();

let port = 3000;

function index(req, res) {
  res.sendFile(`${__dirname}/assets/index.html`);
}

app
  .get('/', index)
  .listen(port);

console.log(`Running Express app at http://localhost:${port}`)