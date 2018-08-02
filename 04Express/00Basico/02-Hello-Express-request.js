const express = require('express');
const app = express();

function index(req, res) {
  res.sendFile(`${__dirname}/assets/index.html`);
  
}

function user(req, res) {
  res.end(`<h1>Hola ${req.params.name}, tu ID es ${req.params.id} y tienes ${req.params.age} a&ntilde;os</h1><h1>Bienvenido a Express</h1>`);
}

function search(req, res) {
  res.end(`
    <h1>Bienvenido a Express, los resultados de tu busqueda son:</h1>
    <br>
    <mark>${req.query.s}</mark>
  `);
}

app
  .get('/', index)
  .get('/user/:name-:id-:age', user)
  .get('/search/', search) //Cuando no se le pone nada, se utiliza de forma php (en la url con /?s=perros)
  .listen(3000);

console.log(`Running Express on https://localhost:3000`);