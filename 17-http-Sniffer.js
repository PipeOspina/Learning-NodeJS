'use strict'

const   http = require('http'),
        options = {
            host : 'holifestival.com',
            port : 80,
            path : '/es/es/index'
        }

var htmlCode = ''

function httpClient(res) {
    console.log(`El sitio ${options.host} ha respondido. Código de estado: ${res.statusCode}`)
    res.on('data', (data) => {
        htmlCode += data
        console.log(
            data,
            data.toString()
        )
    })
}

function httpError(err) {
    console.log(`El sitio ${options.host} no respondió. Código de estado: ${err.code}. Error: ${err.message}`)
}

function webServer(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.end(htmlCode)
}

//Cliente
http.get(options, httpClient)
    .on('error', httpError)
//Servidor
http
    .createServer(webServer)
    .listen(3000)

console.log('Server running at http://localhost:3000')