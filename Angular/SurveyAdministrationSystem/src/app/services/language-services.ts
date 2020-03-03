import { Injectable } from '@angular/core';
import { Language } from '../models/laguage';

@Injectable({
    providedIn: 'root'
})
export class LanguageServices {
    
    constructor() {}

    getAll(): Array<Language> {

        let languages = new Array<Language>();

        let language1 = new Language();
        language1.id = 1;
        language1.language = "Español";
        language1.status = 1;

        let language2 = new Language();
        language2.id = 2;
        language2.language = "Inglés";
        language2.status = 1;

        languages.push(language1);
        languages.push(language2);

        return languages;
    }

    update(language: Language) {

    }
}