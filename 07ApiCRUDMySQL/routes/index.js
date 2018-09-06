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

function agregar(req, res, next) {
  res.render('add-movie', {title: 'Agregar Pelicula'});
}

function add(req, res, next) {
  req.getConnection((err, data) => {
    let movie = {
      movie_id : req.body.movie_id,
      title: req.body.title,
      release_year: req.body.release_year,
      rating: req.body.rating,
      image: req.body.image
    }

    console.log(movie);

    data.query('INSERT INTO movie SET ?', movie, (err, rows) => {
      return (err) ? res.redirect('/agregar') : res.redirect('/');
    });
  });
}

function editar(req, res, next) {
  let movieId = req.params.movie_id;
  console.log(movieId);

  req.getConnection((err, data) => {
    data.query('SELECT * FROM movie WHERE movie_id = ?', movieId, (err, rows) => {
      console.log(err, '---', rows);
      if(err) throw(err)
      else {
        let locals = {
          title: 'Editar Pelicula',
          data: rows
        }

        res.render('edit-movie', locals);
      }
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
  .get('/agregar', agregar)
  .get('/editar/:movie_id', editar)
  .post('/', add)
  .use(error404);

module.exports = router;