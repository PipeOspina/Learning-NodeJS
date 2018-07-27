/*
URL
https://nodejs.org/api/url.html
Este modulo dispone de utilidades para la resolucion y analisis de URLs

Query String
https://nodejs.org/api/querystring.html
Este módulo proporciona utilidades para hacer frente a las cadenas de consulta
*/

'use strict'

const   http = require('http').createServer(webServer),
        path = require('path'),
        url = require('url'),
        urls = [{
            id : 1,
            route : '/',
            output : '<h2>Home</h2>'
        },{
            id : 2,
            route : '/acerca',
            output : '<h2>Acerca</h2>'
        },{
            id : 3,
            route : '/contacto',
            output : '<h2>Contacto</h2>'
        }]

function webServer(req, res) {
    let msg = '<h1>Hola Node.js</h1>',
        pathURL = path.basename(req.url),
        id = url.parse(req.url, true).query.id

    console.log(`\nPath: ${pathURL} \nUrl: ${req.url} \nId: ${id}`)
    //Para acceder al sitio con IDs se debe usar la ruta tipo PHP (?id=x), de eso se tratan los querys :)
    urls.forEach((pos) => {
        if(pos.route == req.url || pos.id == id) {
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