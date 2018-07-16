/*
Buffers
    Una tira de bytes (datos binarios)
    Siilar a un array de enteros
    Tamaño fijo
    Manipular datos directamente
        Sockets
        Streams
        Implementar protocolos complejos
        Manipulación de ficheros/imágenes
        Criptografía
*/

'use strict'

let buf = new Buffer(100),
    buf2 = new Buffer(26),
    str = '\u00bd + \u00bc = \u00be'

buf.write('abcd', 0, 4, 'ascii')
console.log(
    buf,
    buf.toString('ascii'),
    str,
    str.length + ' caracteres',
    Buffer.byteLength(str, 'utf8') + ' bytes',
    buf2.length
)

for(let i = 0; i < buf2.length; i++) {
    buf2[i] = i + 97
}

console.log(buf2.toString('ascii'))