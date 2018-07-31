'use strict';

const http = require('http').createServer(serverUpload);
const util = require('util');

const formidable = require('formidable');
const fse = require('fs-extra');

function serverUpload(req, res) {
  if(req.method.toLowerCase() == 'get' && req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(
      `<h1>Uploader de archivos en Node.js</h1>
      <form action="/upload" enctype="multipart/form-data" method="post">
        <div><input type="file" name="upload" require></div>
        <div><input type="submit" value="Subir Archivo"></div>
      </form>`
    );
  }

  if(req.method.toLowerCase() == 'post' && req.url == '/upload') {
    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(
        `<h1>Archivos Recibidos :)</h1> ${util.inspect({files : files})}
        <br>
        <a href="../">Regresar</a>`
      );
      res.end();
    });

    form.on('progress', (bytesRecived, bytesExpected) => {
      let percentCompleted = ((bytesRecived / bytesExpected) * 100)
      console.log(`Completado al ${percentCompleted.toFixed(2)}%`);
    });

    form.on('error', (err) => {
      console.log(err);
    });

    form.on('end', function (fields, files) {
      let tempPath = this.openedFiles[0].path;
      let fileName = this.openedFiles[0].name;
      let newLocation = './upload/' + fileName;

      fse.copy(tempPath, newLocation, (err) => {
        return (err) ? console.log(err) : console.log(`Funcionó, Yey!!!`);
      });
    });

    return;
  }
}

http.listen(3000);

console.log('Server is runing at http://localhost:3000/');