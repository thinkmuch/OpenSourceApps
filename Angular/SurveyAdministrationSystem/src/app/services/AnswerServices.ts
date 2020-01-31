import { Output, EventEmitter, Injectable } from '@angular/core';
import { Answer } from '../models/Answer';

@Injectable({
    providedIn: 'root'
})
export class AnswerServices {

    public answers: Array<Answer>;
    public answerSelected: EventEmitter<Answer>;
    
    constructor() {
        this.answers = new Array<Answer>();
        this.answerSelected = new EventEmitter<Answer>();
    }
}