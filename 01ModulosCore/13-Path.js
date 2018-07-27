/*
Path
https://nodejs.org/api/path.html
Contiene utilidades para manejar y transformar las rutas de los directorios y archivos a formato de cadena. El sistema de archivos no es consultado para comprobar si los cambios son validos
*/

'use strict'

const   http = require('http').createServer(webServer),
        path = require('path'),
        urls = [{
            route : '/',
            output : '<h2>Home</h2>'
        },{
            route : '/acerca',
            output : '<h2>Acerca</h2>'
        },{
            route : '/contacto',
            output : '<h2>Contacto</h2>'
        }]

function webServer(req, res) {
    let msg = '<h1>Hola Node.js</h1>',
        pathURL = path.basename(req.url)

    console.log(pathURL, req.url)

    urls.forEach((pos) => {
        if(pos.route == req.url) {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(msg + pos.output)
        }
    })

    if(!res.finished) {
        res.writeHead(404, {'Content-Type':'text/html'})
        res.end('<h1>Error 404: Not Found</h1>')
    }
}

http.listen(3000)

console.log('Server running on server http://localhost:3000')