'use strict'

const app = require('./app');
const server = app.listen(app.get('port'), port);

function port() {
  console.log(`Iniciando Express en el puerto ${app.get('port')}`);
}