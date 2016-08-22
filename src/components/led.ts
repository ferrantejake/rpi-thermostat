import * as io from '../io';

export class Led {
    private state: number;
    private pin: number;

    public constructor(pin: number){
        this.pin = pin;
    }

    public getStatus() {
        io.getStatus(this.pin);
    }

    public toggle() {
        io.toggle(this.pin);
    }

    public turnOn() {
        io.turnOn(this.pin);
    }

    public turnOff() {
        io.turnOff(this.pin);
    }
}