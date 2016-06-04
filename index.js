var gpio = require('rpi-gpio');
const PIN  = 4;

gpio.setup(PIN, gpio.DIR_OUT, write);
 
function write() {
    gpio.write(PIN, true, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
}
