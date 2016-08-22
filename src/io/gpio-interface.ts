import {Gpio} from 'onoff';

const ON = 1;
const OFF = 0;

/** Read State Functions */
export function getStatus(pin: number): number {
    const target = new Gpio(pin, 'out');
    let status = target.readSync();
    target.unexport();    
    return status;
}


/** Set State Functions */
export function toggle(pin: number): void {
    const target = new Gpio(pin, 'out');
    target.writeSync(target.readSync() === OFF ? ON : OFF);
    target.unexport();
}

export function turnOn(pin: number): void {
    const target = new Gpio(pin, 'out');
    target.writeSync(ON);
    target.unexport();
}

export function turnOff(pin: number): void {
    const target = new Gpio(pin, 'out');
    target.writeSync(OFF);
    target.unexport();
}
