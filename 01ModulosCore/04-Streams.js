/*
Streams
    'Chorros' de información que se transmiten en 'pedazos' (Chunks)
    3 tipos: Lectura / Escritura / Duplex
    Instancias de EventEmitter
    Acceso asincrono
    Es raro crear Streams directamente
    Pero muchos recursos nos ofrecen este interfaz
    Detrás de muchos mecanismos de Node.JS
        stdin/stdout
        request de HTTP
        Sockets
        Manipulacion de ficheros
*/

'use strict'

let fs = require('fs'),
    readStream = fs.createReadStream('assets/names.txt'),
    writeStream = fs.createWriteStream('assets/copy_names.txt')

/*
readStream.pipe(writeStream)

readStream.on('data', function(chunk) {
    console.log(
        'He leido:',
        chunk.length,
        'caracteres'
    )
})

readStream.on('end', function() {
    console.log('Terminé de leer el archivo.')
})
*/

readStream.pipe(writeStream)
readStream
    .on('data', dataLength)
    .on('end', endInfo)

function dataLength(chunk) {
    console.log(
        'He leido:',
        chunk.length,
        'caracteres'
    )
}

function endInfo() {
    console.log('Terminé de leer el archivo.')
}