//https://node.js.org/api/util.html#util_util_inherits_constructor_superconstructor
'use strict'

const EventEmitter = require('events').EventEmitter,
      inherit = require('util').inherits

var Clock = function() {
    let self = this

    setInterval(function() {
        console.log('Holi :)')
        self.emit('tictac')
    }, 1000)
}

inherit(Clock, EventEmitter)

Clock.prototype.theTime = function() {
    let date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = hrs + ':' + min + ':' + sec

    console.log(msg)
}

let cucu = new Clock()

cucu.on('tictac', function() {
    cucu.theTime()
})