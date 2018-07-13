'use strict'

class Clock {
    constructor() {
        setInterval(() => {
            this.theTime()
        }, 1000)
    }

    theTime() {
        let date = new Date(),
            hrs = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            ampm = (hrs < 12) ? 'am' : 'pm',
            hrsPrsd = parser(hrs),
            //msg = hrs + ':' + min + ':' + sec
            msg = `${addZero(hrsPrsd)}:${addZero(min)}:${addZero(sec)}${ampm} - ES6`

        function addZero(num) {
            return (num < 10) ? ('0' + num) : num
        }

        function parser(num) {
            let aux = (num <= 12) ? num : (num - 12)
            return (aux == 0) ? 12 : aux
        }

        console.log(msg)
    }
}

module.exports = Clock