import { Injectable } from '@angular/core';
import { Language } from '../models/laguage';
import { Status } from '../enums/class-enum';

@Injectable({
    providedIn: 'root'
})
export class LanguageServices {
    
    languages = new Array<Language>();

    constructor() {
        let language1 = new Language();
        language1.id = 1;
        language1.language = "Español";
        language1.status = 1;

        let language2 = new Language();
        language2.id = 2;
        language2.language = "Inglés";
        language2.status = 1;

        this.languages.push(language1);
        this.languages.push(language2);
    }

    getAll(): Array<Language> {
        return this.languages;
    }

    update(language: Language) {

    }

    exist(name: string): boolean {

        for(let i = 0; i < this.languages.length; i++) {
            if(this.languages[i].language.trim() == name.trim()) {
                return true;
            }
        }

        return false;
    }

    save(name: string) {

        let id = this.languages.length + 1;
        let language = new Language();

        language.id = id;
        language.language = name;
        language.status = Status.Inactive;

        this.languages.push(language);
        console.log(this.languages);
    }
}