const express = require('express');
const app = express();

let port = 3000;

function index(req, res) {
  res.sendFile(`${__dirname}/assets/index.html`);
}

function bextlan(req, res) {
  //res.send('<h1>Bienvenid@s a Bextl&aacute;n... Lugar de bits, vectores y pixeles.</h1>');
  res.redirect(301, 'https://jonmircha.com');
}

function json(req, res) {
  res.json({
    name: "Felipe",
    age: 20,
    twitter: "@PipeOxpina"
  });
}

function render(req, res) {
  //Se soluciona en la siguiente clase :)
  res.render(`${__dirname}/assets/index.html`, (err, html) => {
    res.send(html);
  });
}

app
  .get('/', index)
  .get('/bextlan', bextlan)
  .get('/json', json)
  .get('/render', render)
  .listen(port);

console.log(`Running Express app at http://localhost:${port}`)