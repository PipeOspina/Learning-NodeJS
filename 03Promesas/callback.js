'use strict'

const fs = require('fs');

fs.exists("assets/names.txt", (exists) => {
  if(exists) console.log("El archivo existe"); else console.log("El archivo no existe");
});