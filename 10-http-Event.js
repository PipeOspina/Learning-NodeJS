'use strict'

const http = require('http').createServer()

function webServer(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(
        '<html>'
        +   '<head>'
        +       '<title>Hola Node!</title>'
        +   '</head>'
        +   '<body>'
        +       '<h1>Hola NodeJS!</h1></html>'
        +   '</body>'
    )
}

http
    .on('request', webServer)
    .listen(3000, 'localhost')

console.log('Server running at http://localhost:3000/')