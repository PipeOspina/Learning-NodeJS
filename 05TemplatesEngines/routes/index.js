'use strict'

const express = require('express');
const router = express.Router();

router.get('/', index);

function index(req, res) {
  res.end(`<h1>Terminamos la configuraci&oacute;n de nuestra primer App en Express</h1>`);
}

module.exports = router;