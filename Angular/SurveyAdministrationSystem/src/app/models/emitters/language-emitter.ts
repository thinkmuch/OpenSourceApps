import { Language } from '../laguage';

export class LanguageEmitter {
    private language: Language;
    private row: HTMLElement;

    constructor(_language: Language, _row: HTMLElement) {
        this.language = _language;
        this.row = _row;
    }

    get Language() {
        return this.language;
    }

    get Row() {
        return this.row;
    }
}