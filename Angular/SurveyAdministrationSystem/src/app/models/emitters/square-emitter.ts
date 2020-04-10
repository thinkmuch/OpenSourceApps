import { Square } from '../square';

export class SquareEmitter {
    private square: Square;
    private row: HTMLElement;

    constructor(_square: Square, _row: HTMLElement) {
        this.square = _square;
        this.row = _row;
    }

    get Square() {
        return this.square;
    }

    get Row() {
        return this.row;
    }
}