'use strict'

const mysql = require('mysql');
const myConnection = require('express-myconnection');

const dbOptions = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'movies'
};

const Movies = myConnection(mysql, dbOptions, 'request');

module.exports = Movies;