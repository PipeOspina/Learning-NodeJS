'use strict';

const http = require('http').createServer(serverUpload);
const util = require('util');

const formidable = require('formidable');
const fse = require('fs-extra');

function serverUpload(req, res) {
  if(req.method == 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(
      `<h3>Uploader de archivos en Node.js</h3>
      <form action="/upload" enctype="multipart/form-data" method="post">
        <div><input type="file" name="upload" require></div>
        <div><input type="submit" value="Subir Archivo"></div>
      </form>`
    );
  }
}

http.listen(3000);

console.log('Server is runing at http://localhost:3000/');