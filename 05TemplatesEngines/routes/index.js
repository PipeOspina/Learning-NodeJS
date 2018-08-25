'use strict'

const express = require('express');
const router = express.Router();

router
  .get('/', index)
  .get('/pug', pug)
  .get('/ejs', ejs);

function index(req, res) {
  res.end(`<h1>Terminamos la configuraci&oacute;n de nuestra primer App en Express</h1>`);
}

function pug(req, res) {
  let locals = {
    title: 'Pug =D',
    link: 'https://pugjs.org/api/getting-started.html',
    description: 'Pug 2 was released in August 2016. To make improvements in the new release possible, we had to make the decision of deprecating or removing some APIs and undocumented language features. We made an effort to make these changes as unintrusive as possible, and many of these changes were previously discouraged in console warnings.'
  };
  res.render('index', locals);
}

function ejs(req, res) {
  let locals = {
    title: 'EJS =D',
    link: 'http://www.embeddedjs.com/',
    description: 'EJS limpia el HTML del JavaScript con plantillas del lado cliente. Combina datos y una plantilla para producir HTML. Codigo entre <%= %> lo añade al HTML que se resuelve.',
    seasons: [
      ['Primavera', ['Abril', 'Mayo', 'Junio']],
      ['Verano', ['Julio', 'Agosto', 'Septiembre']],
      ['Otoño', ['Octubre', 'Noviembre', 'Diciembre']],
      ['Invierno', ['Enero', 'Febrero', 'Marzo']]
    ]
  };
  res.render('index', locals);
}

module.exports = router;