'use strict'

const fs = require('fs');

let path = './assets/';
let fileName = 'names.txt';
let newFileName = 'names_promises.txt';

let promise;

function existPromise(resolve, reject) {
  fs.access(path + fileName, fs.constants.F_OK, (err) => {
    (err) ? reject(new Error('El archivo no existe')) : resolve(true);
  });
}

function readPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(path + fileName, (err, data) => {
      (err) ? reject(new Error('El archivo no se pudo leer') ) : resolve(data);
    });
  })
}

function writePromise(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path + newFileName, data, (err) => {
      (err) ? reject(new Error('El archivo no se pudo copiar')) : resolve('El archivo se ha copiado con exito');
    });
  });
}

promise = new Promise(existPromise)
  .then(readPromise)
  .then(writePromise)
  .then((resolved) => { console.log(resolved) })
  .catch((err) => { console.log(err.message) });