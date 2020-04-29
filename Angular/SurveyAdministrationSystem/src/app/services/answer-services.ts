import { EventEmitter, Injectable } from '@angular/core';
import { Answer } from '../models/answer';
import { Answer_2 } from '../models/answer_2';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AnswerServices {

    answers_2: Array<Answer_2> = new Array<Answer_2>();
    answers: Array<Answer> = new Array<Answer>();
    answerSelected: EventEmitter<number> = new EventEmitter<number>();
    showOptions: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private _http: HttpClient) { }

    getAll(): Observable<Array<Answer_2>> {
        return this._http.get<Array<Answer_2>>("http://10.2.180.11:5999/api/Answer");
    }
    
    save(name: string) {
        return this._http.post(`http://10.2.180.11:5999/api/Answer?name=${name}`, { });
    }

    update(answer: Answer_2) {
        return this._http.put("http://10.2.180.11:5999/api/Answer", answer);
    }
}