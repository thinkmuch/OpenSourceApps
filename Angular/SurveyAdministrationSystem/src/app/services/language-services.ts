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

        let language2 = new Language();
        language2.id = 2;
        language2.language = "Inglés";

        let language3 = new Language();
        language3.id = 3;
        language3.language = "Portugués";

        let language4 = new Language();
        language4.id = 4;
        language4.language = "Francés";

        languages.push(language1);
        languages.push(language2);
        languages.push(language3);
        languages.push(language4);

        return languages;
    }
}