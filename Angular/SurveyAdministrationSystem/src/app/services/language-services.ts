import { Injectable } from '@angular/core';
import { Language } from '../models/laguage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LanguageServices {
    
    languages = new Array<Language>();

    constructor(
        private _http: HttpClient
    ) { }

    getAll(): Observable<Array<Language>> {
        return this._http.get<Array<Language>>("http://10.2.180.10:5999/api/Language");
    }

    getAllActiveLanguages(): Observable<Array<Language>> {
        return this._http.get<Array<Language>>("http://10.2.180.10:5999/api/Language/Active");
    }

    update(language: Language) {
       return this._http.put("http://10.2.180.10:5999/api/Language", language);
    }

    save(name: string) {
        return this._http.post(`http://10.2.180.10:5999/api/Language?name=${name}`, {});
    }

    delete(languageId: number) {
        return this._http.delete(`http://10.2.180.10:5999/api/Language/${languageId}`);
    }
}