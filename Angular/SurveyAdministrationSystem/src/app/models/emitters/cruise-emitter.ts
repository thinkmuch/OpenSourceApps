import { Cruise } from '../cruise';

export class CruiseEmitter {
    private cruise: Cruise;
    private row: HTMLElement;

    constructor(_cruise: Cruise, _row: HTMLElement) {
        this.cruise = _cruise;
        this.row = _row;
    }

    get Cruise() {
        return this.cruise;
    }

    get Row() {
        return this.row;
    }

}