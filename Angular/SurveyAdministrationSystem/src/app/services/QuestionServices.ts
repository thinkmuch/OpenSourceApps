import { SurveySummary } from '../models/SurveySummary';
import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable({
    providedIn: 'root'
})
export class QuestionServices
{
    questions: Array<Question>;

    constructor() {
        this.questions = new Array<Question>();
    }

    getQuestions(): Array<Question> {

        return this.questions;
    }

    addQuestion() {
        
        let question = new Question();
        this.questions.push(question);
    }
}