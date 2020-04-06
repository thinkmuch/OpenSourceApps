import { Area } from '../area';

export class AreaEmitter {
    private area: Area;
    private row: HTMLElement;

    constructor(_area: Area, _row: HTMLElement) {
        this.area = _area;
        this.row = _row;
    }

    get Area() {
        return this.area;
    }

    get Row() {
        return this.row;
    }
}