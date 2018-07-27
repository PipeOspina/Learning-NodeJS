/*
Codigo encerrado en una función anónima autoejecutable
http://www.etnassoft.com/2011/03/14/funciones-autoejecutables-en-javascript/
http://
*/
'use strict'

var Clock = (function () {
    const   EventEmitter = require('events').EventEmitter,
            inherit = require('util').inherits

    //Constructor
    var Clock = function() {
        let self = this

        setInterval(function() {
            self.emit('tictac')
        }, 1000)
    }

    inherit(Clock, EventEmitter)

    Clock.prototype.theTime = function() {
        let date = new Date(),
            hrs = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            ampm = (hrs < 12) ? 'am' : 'pm',
            hrsPrsd = parser(hrs),
            //msg = hrs + ':' + min + ':' + sec
            msg = addZero(hrsPrsd) + ':' + addZero(min) + ':' + addZero(sec) + ampm

        function addZero(num) {
            return (num < 10) ? ('0' + num) : num
        }

        function parser(num) {
            let aux = (num <= 12) ? num : (num - 12)
            return (aux == 0) ? 12 : aux
        }

        console.log(msg)
    }

    return Clock
})()

module.exports = Clock