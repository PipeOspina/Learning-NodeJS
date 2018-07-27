//https://es.wikipedia.org./wiki/Observer_(patr%C3%B3n_de_dise%C3%B1o)

'use strict'

const EventEmitter = require('events').EventEmitter,
      Pub = new EventEmitter()

Pub
    .on('myEvent', function(message) {
        console.log(message)
    })

    .once('myEvent', function(message) {
        console.log('First time emmision', message)
    })

    .emit('myEvent', 'Soy un emisor de Eventos')

Pub.emit('myEvent', 'Volviendo a emitir')
Pub.removeAllListeners('myEvent')
Pub.emit('myEvent', 'Volviendo a emitir otra vez')