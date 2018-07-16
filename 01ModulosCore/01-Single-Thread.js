/*Single Thread*/

'use strict'

function singleThread() {
    process.argv[2] = "Aprendiendo Node =)"
    process.argv[3] = 12
    process.argv[4] = null
    process.argv[5] = true

    console.log('_______________________________________________________')
    console.log('\n-----------------EL PROCESO DE NODE.JS-----------------\n')
    console.log('Id del proceso........... ' + process.pid)
    console.log('Título................... ' + process.title)
    console.log('Directorio de Node....... ' + process.execPath)
    console.log('Directorio actual........ ' + process.cwd())
    console.log('Version de Node.......... ' + process.version)
    console.log('Versiones dependencias... ' + process.versions)
    console.log('Plataforma (S.O)......... ' + process.platform)
    console.log('Arquitectura (S.O)....... ' + process.arch)
    console.log('Tiempo activo de Node.... ' + process.uptime())
    console.log('Argumentos del proceso... ' + process.argv)
    console.log('_______________________________________________________')

    for(let key in process.argv) {
        console.log(key + '.) ' + process.argv[key])
    }
}

singleThread()