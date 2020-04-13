import { Hotel } from '../hotel';

export class HotelEmitter {
    private hotel: Hotel;
    private row: HTMLElement;

    constructor(_hotel: Hotel, _row: HTMLElement) {
        this.hotel = _hotel;
        this.row = _row;
    }

    get Hotel() {
        return this.hotel;
    }

    get Row() {
        return this.row;
    }
}