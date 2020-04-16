import { EventEmitter, Injectable } from '@angular/core';
import { Answer } from '../models/answer';
import { Answer_2 } from '../models/answer_2';
import { AnswerType } from '../enums/class-enum';
import { AnswerOption_2 } from '../models/answer-option_2';

@Injectable({
    providedIn: 'root'
})
export class AnswerServices {

    answers_2: Array<Answer_2>;
    answers: Array<Answer>;
    answerSelected: EventEmitter<number>;
    showOptions: EventEmitter<boolean>;

    constructor() {
        this.answers = new Array<Answer>();
        this.answerSelected = new EventEmitter<number>();
        this.showOptions = new EventEmitter<boolean>();

        this.answers_2 = new Array<Answer_2>();
        
        let answer1 = new Answer_2();
        answer1.id = 1;
        answer1.name = "Excelente - Deficiente";
        answer1.answerType = AnswerType.SingleAnswer;
        answer1.status = 1;
        answer1.answerOptions = new Array<AnswerOption_2>();

        let answer2 = new Answer_2();
        answer2.id = 2;
        answer2.name = "0 - 10";
        answer2.answerType = AnswerType.SingleAnswer;
        answer2.status = 1;
        answer2.answerOptions = new Array<AnswerOption_2>();

        let answer3 = new Answer_2();
        answer3.id = 3;
        answer3.name = "Expectativas";
        answer3.status = 1;
        answer3.answerType = AnswerType.SingleAnswer;
        answer3.answerOptions = new Array<AnswerOption_2>();

        let answer4 = new Answer_2();
        answer4.id = 4;
        answer4.name = "De acuerdo - En desacuerdo";
        answer4.answerType = AnswerType.SingleAnswer;
        answer4.status = 1;
        answer4.answerOptions = new Array<AnswerOption_2>();

        this.answers_2.push(answer1);
        this.answers_2.push(answer2);
        this.answers_2.push(answer3);
        this.answers_2.push(answer4);
    }

    getAll(): Array<Answer_2> {
        return this.answers_2;
    }
}