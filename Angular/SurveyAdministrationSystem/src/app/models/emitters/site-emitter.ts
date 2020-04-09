import { Site } from '../site';

export class SiteEmitter {
    private site: Site;
    private row: HTMLElement;

    constructor(_site: Site, _row: HTMLElement) {
        this.site = _site;
        this.row = _row;
    }

    get Site() {
        return this.site;
    }

    get Row() {
        return this.Row;
    }
}