import { Output, EventEmitter, Injectable } from '@angular/core';
import { Answer } from '../models/answer';

@Injectable({
    providedIn: 'root'
})
export class AnswerServices {

    public answers: Array<Answer>;
    public answerSelected: EventEmitter<number>;
    public showOptions: EventEmitter<boolean>;

    constructor() {
        this.answers = new Array<Answer>();
        this.answerSelected = new EventEmitter<number>();
        this.showOptions = new EventEmitter<boolean>();
    }
}