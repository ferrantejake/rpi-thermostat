import {Led} from './components';

const led = new Led(12);
let interval = setInterval(function() {
    led.toggle();
}, 1000);