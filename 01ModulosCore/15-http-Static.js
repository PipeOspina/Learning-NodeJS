'use strict'

const   http = require('http').createServer(webServer),
        fs = require('fs'),
        path = require('path'),
        url = require('url'),
        urls = [{
            id : 1,
            route : '/',
            output : './assets/index.html'
        },{
            id : 2,
            route : '/acerca',
            output : './assets/acerca.html'
        },{
            id : 3,
            route : '/contacto',
            output : './assets/contacto.html'
        }]

function webServer(req, res) {
    let pathURL = path.basename(req.url),
        id = url.parse(req.url, true).query.id

    console.log(`\nPath: ${pathURL} \nUrl: ${req.url} \nId: ${id}`)

    urls.forEach((pos) => {
        if(pos.route == req.url || pos.id == id) {
            res.writeHead(200, {'Content-Type':'text/html'})
            fs.readFile(pos.output, (err, data) => {
                if(err) throw err
                res.end(data)
            })
        }
    })

    if(!res.finished) {
        res.writeHead(404, {'Content-Type':'text/html'})
        fs.readFile('./assets/404.html', (err, data) => {
            if(err) throw err
            res.end(data)
        })
    }
}

http.listen(3000)

console.log('Server running on server http://localhost:3000')