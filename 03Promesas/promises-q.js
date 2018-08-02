'use strict'

const fs = require('fs');
const Q = require('q');

let path = './assets/';
let fileName = 'names.txt';
let newFileName = 'names_callback.txt';

function existFile(file) {
  let defer = Q.defer();
  fs.access(file, fs.constants.F_OK, (err) => {
    return (err) ? defer.reject(new Error('El archivo no existe')) : defer.resolve(true);
  });

  return defer.promise;
}

function readFile(file) {
  let defer = Q.defer();
  fs.readFile(path + fileName, (err, data) => {
    return (err) ? defer.reject(new Error('El archivo no se pudo leer') ) : defer.resolve(data);
  });

  return defer.promise;
}

function writeFile(file, data) {
  let defer = Q.defer();
  fs.writeFile(path + newFileName, data, (err) => {
    return (err) ? defer.reject(new Error('El archivo no se pudo capiar')) : defer.resolve('El archivo se ha copiado con exito');
  })

  return defer.promise;
}

/*
Si existe
  Leelo
  Copialo
  Avisa que todo OK (Y)
  Maneja Errores
*/

existFile(path + fileName)
  .then(() => {return readFile(path + fileName)})
  .then((dataPromise) => {return writeFile(path + newFileName, dataPromise)})
  .then((msg) => {return console.log('Todo OK (Y) ' + msg)})
  .fail((err) => {return console.log(err.message)});