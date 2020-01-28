import { Injectable } from '@angular/core';
import { Question } from '../models/Question';
import { Answer } from '../models/Answer';
import { AnswerOption } from '../models/AnswerOption';

@Injectable({
    providedIn: 'root'
})
export class QuestionServices
{
    private questions: Array<Question>;
    private answers: Array<Answer>;

    constructor() {
        this.questions = new Array<Question>();
        this.answers = new Array<Answer>();
    }

    getQuestions(): Array<Question> {
        return this.questions;
    }

    addQuestion() {
        let question = new Question();
        this.questions.push(question);
    }

    removeQuestion(idQuestion: number) {
        this.questions.splice(idQuestion - 1, 1);
    }

    updateQuestionText(idQuestion: number, text: string) {
        this.questions[idQuestion - 1].text = text;
    }

    moveUp(idQuestion: number) {
        let index = idQuestion - 1;
        let previusQuestion = this.questions[index - 1];
        let currentQuestion = this.questions[index];

        this.questions[index - 1] = currentQuestion;
        this.questions[index] = previusQuestion;
    }

    moveDown(idQuestion: number) {
        let index = idQuestion - 1;
        let nextQuestion = this.questions[index + 1];
        let currentQuestion = this.questions[index];

        this.questions[index + 1] = currentQuestion;
        this.questions[index] = nextQuestion;
    }

    getAnswers() : Array<Answer> {

        let answer1 = new Answer();
        answer1.id = 1;
        answer1.resumeName = "En desacuerdo - De acuerdo";
        
            let option1Answer1 = new AnswerOption;
            option1Answer1.id = 1;
            option1Answer1.text = "Totalmente de acuerdo";

            let option2Answer1 = new AnswerOption;
            option1Answer1.id = 2;
            option1Answer1.text = "De acuerdo";

            let option3Answer1 = new AnswerOption;
            option1Answer1.id = 3;
            option1Answer1.text = "Parcialmente de acuerdo";

            let option4Answer1 = new AnswerOption;
            option1Answer1.id = 4;
            option1Answer1.text = "Ni de acuerdo ni en desacuerdo";

            let option5Answer1 = new AnswerOption;
            option1Answer1.id = 5;
            option1Answer1.text = "Algo en desacuerdo";

            let option6Answer1 = new AnswerOption;
            option1Answer1.id = 6;
            option1Answer1.text = "En desacuerdo";

            let option7Answer1 = new AnswerOption;
            option1Answer1.id = 7;
            option1Answer1.text = "Muy en desacuerdo";

        answer1.answerOptions = new Array<AnswerOption>()
        answer1.answerOptions.push(option1Answer1);
        answer1.answerOptions.push(option2Answer1);
        answer1.answerOptions.push(option3Answer1);
        answer1.answerOptions.push(option4Answer1);
        answer1.answerOptions.push(option5Answer1);
        answer1.answerOptions.push(option6Answer1);
        answer1.answerOptions.push(option7Answer1);

        let answer2 = new Answer();
        answer2.id = 2;
        answer2.resumeName = "Insatisfecho - Satisfecho";

            let option1Answer2 = new AnswerOption;
            option1Answer2.id = 1;
            option1Answer2.text = "Extremadamente satisfecho";

            let option2Answer2 = new AnswerOption;
            option2Answer2.id = 2;
            option2Answer2.text = "Moderadamente satisfecho";

            let option3Answer2 = new AnswerOption;
            option3Answer2.id = 3;
            option3Answer2.text = "Ligeramente satisfecho";

            let option4Answer2 = new AnswerOption;
            option4Answer2.id = 4;
            option4Answer2.text = "Ni satisfecho ni insatisfecho";

            let option5Answer2 = new AnswerOption;
            option5Answer2.id = 5;
            option5Answer2.text = "Ligeramente insatisfecho";

            let option6Answer2 = new AnswerOption;
            option6Answer2.id = 6;
            option6Answer2.text = "Moderadamente insatisfecho";

            let option7Answer2 = new AnswerOption;
            option7Answer2.id = 7;
            option7Answer2.text = "Extremadamente insatisfecho";

        answer2.answerOptions = new Array<AnswerOption>();
        answer2.answerOptions.push(option1Answer2);
        answer2.answerOptions.push(option2Answer2);
        answer2.answerOptions.push(option3Answer2);
        answer2.answerOptions.push(option4Answer2);
        answer2.answerOptions.push(option5Answer2);
        answer2.answerOptions.push(option6Answer2);
        answer2.answerOptions.push(option7Answer2);

        let answer3 = new Answer();
        answer3.id = 2;
        answer3.resumeName = "Inapropiado - Apropiado";

            let option1Answer3 = new AnswerOption;
            option1Answer2.id = 1;
            option1Answer2.text = "Extremadamente apropiado";

            let option2Answer3 = new AnswerOption;
            option2Answer2.id = 2;
            option2Answer2.text = "Moderadamente apropiado";

            let option3Answer3 = new AnswerOption;
            option3Answer2.id = 3;
            option3Answer2.text = "Ligeramente apropiado";

            let option4Answer3 = new AnswerOption;
            option4Answer2.id = 4;
            option4Answer2.text = "Ni apropiado ni inapropiado";

            let option5Answer3 = new AnswerOption;
            option5Answer2.id = 5;
            option5Answer2.text = "Ligeramente inapropiado";

            let option6Answer3 = new AnswerOption;
            option6Answer2.id = 6;
            option6Answer2.text = "Moderadamente inapropiado";

            let option7Answer3 = new AnswerOption;
            option7Answer2.id = 7;
            option7Answer2.text = "Extremadamente inapropiado";

        answer3.answerOptions = new Array<AnswerOption>();
        answer3.answerOptions.push(option1Answer3);
        answer3.answerOptions.push(option2Answer3);
        answer3.answerOptions.push(option3Answer3);
        answer3.answerOptions.push(option4Answer3);
        answer3.answerOptions.push(option5Answer3);
        answer3.answerOptions.push(option6Answer3);
        answer3.answerOptions.push(option7Answer3);

        this.answers.push(answer1);
        this.answers.push(answer2);
        this.answers.push(answer3);

        return this.answers;
    }
}