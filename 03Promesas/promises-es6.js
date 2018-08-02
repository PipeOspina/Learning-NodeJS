'use strict'

const fs = require('fs');

let path = './assets/';
let fileName = 'names.txt';
let newFileName = 'names_promises.txt';

let promise = new Promise((resolve, reject) => {
  fs.access(path + fileName, fs.constants.F_OK, (err) => {
    (err) ? reject(new Error('El archivo no existe')) : resolve(true);
  });
});

promise
  .then(() => {
    return new Promise((resolve, reject) => {
      fs.readFile(path + fileName, (err, data) => {
        (err) ? reject(new Error('El archivo no se pudo leer') ) : resolve(data);
      });
    })
  })
  .then((resolved) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(path + newFileName, resolved, (err) => {
        (err) ? reject(new Error('El archivo no se pudo copiar')) : resolve('El archivo se ha copiado con exito');
      });
    });
  })
  .then((resolved) => {
    console.log(resolved);
  })
  .catch((err) => {
    console.log(err.message);
  })