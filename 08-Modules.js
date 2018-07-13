'use strict'

const   My_Data = require('./my-data.js'),
        Clock = require('./Clock-ES' + '6'/*'5'*/ + '.js')

let cucu = new Clock()

console.log(My_Data.name, My_Data.email, My_Data)

cucu.on('tictac', function() {
    cucu.theTime()
})