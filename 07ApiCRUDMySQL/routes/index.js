'use strict'

const express = require('express');
const movies = require('../models/movies');
const router = express.Router();

function index(req, res) {
  req.getConnection((err, movies) => {
    movies.query('SELECT * FROM movie', (err, rows) => {
      let locals = {
        title: 'Lista de Películas',
        data: rows
      }
      res.render('index', locals);
    });
  });
}

function error404(req, res, next) {
  let error = new Error();
  error.status = 404;
  let locals = {
    title: 'Error 404',
    description: 'Recurso no encontrado :(',
    error: error
  };

  res.render('error', locals);

  next();
}

router
  .use(movies)
  .get('/', index)
  .use(error404);

module.exports = router;