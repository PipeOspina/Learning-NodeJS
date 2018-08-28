'use strict'
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const routes = require('./routes/index');

const faviconURL = `${__dirname}/public/img/node-favicon.png`;
const publicDir = express.static(`${__dirname}/public`);
const viewDir = `${__dirname}/views`;

const port = process.env.PORT || 3000;
const app = express();

app
  .set('views', viewDir)
  .set('view engine', 'pug')
  .set('port', port)

  .use(favicon(faviconURL))
  .use(bodyParser.json())
  // Parse application/x-www-form-urlencoded
  .use(bodyParser.urlencoded({extended: false}))
  .use(morgan('dev'))
  .use(publicDir)
  .use(routes);

module.exports = app;