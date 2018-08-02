'use strict'

const fs = require('fs');

let path = './assets/';
let fileName = 'names.txt';
let newFileName = 'names_callback.txt';

fs.access(path + fileName, fs.constants.F_OK, (err) => {
  if(err) console.log('El archivo no existe');
  else {
    console.log('El archivo existe');
    fs.readFile(path + fileName, (err, data) => {
      if(err) console.log('El archivo no se pudo leer');
      else {
        console.log('El archivo se ha leido exitosamente');
        fs.writeFile(path + newFileName, data, (err) => {
          return (err) ? console.log('El archivo no se pudo copiar') : console.log('El archivo se ha copiado con exito');
        });
      }
    });
  }
});