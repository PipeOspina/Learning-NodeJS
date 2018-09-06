'use strict'

const express = require('express');
const movies = require('../models/movies');
const router = express.Router();

function index(req, res) {
  req.getConnection((err, movies) => {
    movies.query('SELECT * FROM movie', (err, rows) => {
      if(err) next(new Error('No hay registros de películas'));
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
    if(err) next(new Error('Error al insertar'));
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
      if(err) next(new Error('Registro no encontrado'));
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

function actualizar(req, res, next) {
  req.getConnection((err, data) => {
    let movie = {
      movie_id : req.body.movie_id,
      title: req.body.title,
      release_year: req.body.release_year,
      rating: req.body.rating,
      image: req.body.image
    }

    console.log(movie);

    data.query('UPDATE movie SET ? WHERE movie_id = ?', [movie, movie.movie_id], (err, rows) => {
      return (err) ? next(new Error('Error al actualizar')) : res.redirect('/');
    });
  });
}

function eliminar(req, res, next) {
  let movieId = req.params.movie_id;
  console.log(movieId);

  req.getConnection((err, data) => {
    data.query('DELETE FROM movie WHERE movie_id = ?', movieId, (err, rows) => {
      console.log(err, '---', rows);
      return (err) ? next(new Error('Registro No Encontrado')) : res.redirect('/');
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
  .post('/actualizar/:movie_id', actualizar)
  .post('/eliminar/:movie_id', eliminar)
  .use(error404);

module.exports = router;