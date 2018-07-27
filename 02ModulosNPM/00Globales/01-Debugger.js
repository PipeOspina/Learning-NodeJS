'use strict'

const http = require('http')

function webServer(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'})
    debugger;
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
    .createServer(webServer)
    .listen(3000, 'localhost')

console.log('Server running at http://localhost:3000/')