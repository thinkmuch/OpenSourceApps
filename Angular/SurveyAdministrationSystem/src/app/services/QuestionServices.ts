import { Injectable, Output, EventEmitter } from '@angular/core';
import { Question } from '../models/Question';
import { Answer } from '../models/Answer';
import { AnswerOption } from '../models/AnswerOption';

@Injectable({
    providedIn: 'root'
})
export class QuestionServices
{
    private idQuestion: number;
    public questions: Array<Question>;
    private answers: Array<Answer>;
    @Output() rowSelected: EventEmitter<number>;

    constructor() {
        
        this.idQuestion = 0;
        this.questions = new Array<Question>();
        this.answers = new Array<Answer>();
        this.rowSelected = new EventEmitter<number>();

        this.rowSelected.subscribe(data => {
            this.idQuestion = data;
        });
    }

    setAnswerQuestion(answer: Answer, idQuestion: number){
        let index = idQuestion - 1;
        this.questions[index].answer = answer;
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

        this.answers = new Array<Answer>();

        let answer1 = new Answer();
        answer1.id = 1;
        answer1.resumeName = "En desacuerdo - De acuerdo";
        
            let option1Answer1 = new AnswerOption;
            option1Answer1.id = 1;
            option1Answer1.text = "Totalmente de acuerdo";

            let option2Answer1 = new AnswerOption;
            option2Answer1.id = 2;
            option2Answer1.text = "De acuerdo";

            let option3Answer1 = new AnswerOption;
            option3Answer1.id = 3;
            option3Answer1.text = "Parcialmente de acuerdo";

            let option4Answer1 = new AnswerOption;
            option4Answer1.id = 4;
            option4Answer1.text = "Ni de acuerdo ni en desacuerdo";

            let option5Answer1 = new AnswerOption;
            option5Answer1.id = 5;
            option5Answer1.text = "Algo en desacuerdo";

            let option6Answer1 = new AnswerOption;
            option6Answer1.id = 6;
            option6Answer1.text = "En desacuerdo";

            let option7Answer1 = new AnswerOption;
            option7Answer1.id = 7;
            option7Answer1.text = "Muy en desacuerdo";

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
        answer3.id = 3;
        answer3.resumeName = "Inapropiado - Apropiado";

            let option1Answer3 = new AnswerOption;
            option1Answer3.id = 1;
            option1Answer3.text = "Extremadamente apropiado";

            let option2Answer3 = new AnswerOption;
            option2Answer3.id = 2;
            option2Answer3.text = "Moderadamente apropiado";

            let option3Answer3 = new AnswerOption;
            option3Answer3.id = 3;
            option3Answer3.text = "Ligeramente apropiado";

            let option4Answer3 = new AnswerOption;
            option4Answer3.id = 4;
            option4Answer3.text = "Ni apropiado ni inapropiado";

            let option5Answer3 = new AnswerOption;
            option5Answer3.id = 5;
            option5Answer3.text = "Ligeramente inapropiado";

            let option6Answer3 = new AnswerOption;
            option6Answer3.id = 6;
            option6Answer3.text = "Moderadamente inapropiado";

            let option7Answer3 = new AnswerOption;
            option7Answer3.id = 7;
            option7Answer3.text = "Extremadamente inapropiado";

        answer3.answerOptions = new Array<AnswerOption>();
        answer3.answerOptions.push(option1Answer3);
        answer3.answerOptions.push(option2Answer3);
        answer3.answerOptions.push(option3Answer3);
        answer3.answerOptions.push(option4Answer3);
        answer3.answerOptions.push(option5Answer3);
        answer3.answerOptions.push(option6Answer3);
        answer3.answerOptions.push(option7Answer3);

        let answer4 = new Answer();
        answer3.id = 4;
        answer3.resumeName = "Por debajo del promedio - Por encima del promedio";

            let option1Answer4 = new AnswerOption;
            option1Answer4.id = 1;
            option1Answer4.text = "Muy por encima del promedio";

            let option2Answer4 = new AnswerOption;
            option2Answer4.id = 2;
            option2Answer4.text = "Moderadamente por encima del promedio";

            let option3Answer4 = new AnswerOption;
            option3Answer4.id = 3;
            option3Answer4.text = "Ligeramente por encima del promedio";

            let option4Answer4 = new AnswerOption;
            option4Answer4.id = 4;
            option4Answer4.text = "Promedio";

            let option5Answer4 = new AnswerOption;
            option5Answer4.id = 5;
            option5Answer4.text = "Ligeramente por debajo del promedio";

            let option6Answer4 = new AnswerOption;
            option6Answer4.id = 6;
            option6Answer4.text = "Moderadamente debajo del promedio";

            let option7Answer4 = new AnswerOption;
            option7Answer4.id = 7;
            option7Answer4.text = "Muy por debajo del promedio";

        answer4.answerOptions = new Array<AnswerOption>();
        answer4.answerOptions.push(option1Answer4);
        answer4.answerOptions.push(option2Answer4);
        answer4.answerOptions.push(option3Answer4);
        answer4.answerOptions.push(option4Answer4);
        answer4.answerOptions.push(option5Answer4);
        answer4.answerOptions.push(option6Answer4);
        answer4.answerOptions.push(option7Answer4);

        let answer5 = new Answer();
        answer5.id = 5;
        answer5.resumeName = "Peor - Mejor";

            let option1Answer5 = new AnswerOption;
            option1Answer5.id = 1;
            option1Answer5.text = "Mucho mejor";

            let option2Answer5 = new AnswerOption;
            option2Answer5.id = 2;
            option2Answer5.text = "Moderadamente mejor";

            let option3Answer5 = new AnswerOption;
            option3Answer5.id = 3;
            option3Answer5.text = "Ligeramente mejor";

            let option4Answer5 = new AnswerOption;
            option4Answer5.id = 4;
            option4Answer5.text = "Casi lo mismo";

            let option5Answer5 = new AnswerOption;
            option5Answer5.id = 5;
            option5Answer5.text = "Un poco peor";

            let option6Answer5 = new AnswerOption;
            option6Answer5.id = 6;
            option6Answer5.text = "Moderadamente peor";

            let option7Answer5 = new AnswerOption;
            option7Answer5.id = 7;
            option7Answer5.text = "Mucho peor";

        answer5.answerOptions = new Array<AnswerOption>();
        answer5.answerOptions.push(option1Answer5);
        answer5.answerOptions.push(option2Answer5);
        answer5.answerOptions.push(option3Answer5);
        answer5.answerOptions.push(option4Answer5);
        answer5.answerOptions.push(option5Answer5);
        answer5.answerOptions.push(option6Answer5);
        answer5.answerOptions.push(option7Answer5);

        let answer6 = new Answer();
        answer6.id = 6;
        answer6.resumeName = "Difícil - Fácil";

            let option1Answer6 = new AnswerOption;
            option1Answer6.id = 1;
            option1Answer6.text = "Extremadamente facil";

            let option2Answer6 = new AnswerOption;
            option2Answer6.id = 2;
            option2Answer6.text = "Moderadamente fácil";

            let option3Answer6 = new AnswerOption;
            option3Answer6.id = 3;
            option3Answer6.text = "Ligeramente fácil";

            let option4Answer6 = new AnswerOption;
            option4Answer6.id = 4;
            option4Answer6.text = "Ni fácil ni difícil";

            let option5Answer6 = new AnswerOption;
            option5Answer6.id = 5;
            option5Answer6.text = "Ligeramente difícil";

            let option6Answer6 = new AnswerOption;
            option6Answer6.id = 6;
            option6Answer6.text = "Moderadamente difícil";

            let option7Answer6 = new AnswerOption;
            option7Answer6.id = 7;
            option7Answer6.text = "Extremadamente difícil";

        answer6.answerOptions = new Array<AnswerOption>();
        answer6.answerOptions.push(option1Answer6);
        answer6.answerOptions.push(option2Answer6);
        answer6.answerOptions.push(option3Answer6);
        answer6.answerOptions.push(option4Answer6);
        answer6.answerOptions.push(option5Answer6);
        answer6.answerOptions.push(option6Answer6);
        answer6.answerOptions.push(option7Answer6);

        let answer7 = new Answer();
        answer7.id = 7;
        answer7.resumeName = "Ineficaz - Efectivo";

            let option1Answer7 = new AnswerOption;
            option1Answer7.id = 1;
            option1Answer7.text = "Extremadamente eficaz";

            let option2Answer7 = new AnswerOption;
            option2Answer7.id = 2;
            option2Answer7.text = "Muy efectivo";

            let option3Answer7 = new AnswerOption;
            option3Answer7.id = 3;
            option3Answer7.text = "Moderadamente efectivo";

            let option4Answer7 = new AnswerOption;
            option4Answer7.id = 4;
            option4Answer7.text = "Ligeramente efectivo";

            let option5Answer7 = new AnswerOption;
            option5Answer7.id = 5;
            option5Answer7.text = "No es efectivo en absoluto";

        answer7.answerOptions = new Array<AnswerOption>();
        answer7.answerOptions.push(option1Answer7);
        answer7.answerOptions.push(option2Answer7);
        answer7.answerOptions.push(option3Answer7);
        answer7.answerOptions.push(option4Answer7);
        answer7.answerOptions.push(option5Answer7);

        let answer8 = new Answer();
        answer8.id = 8;
        answer8.resumeName = "Malo - bueno";

            let option1Answer8 = new AnswerOption;
            option1Answer8.id = 1;
            option1Answer8.text = "Extremadamente bueno";

            let option2Answer8 = new AnswerOption;
            option2Answer8.id = 2;
            option2Answer8.text = "Moderadamente bueno";

            let option3Answer8 = new AnswerOption;
            option3Answer8.id = 3;
            option3Answer8.text = "Ligeramente bueno";

            let option4Answer8 = new AnswerOption;
            option4Answer8.id = 4;
            option4Answer8.text = "Ni bueno ni malo";

            let option5Answer8 = new AnswerOption;
            option5Answer8.id = 5;
            option5Answer8.text = "Ligeramente malo";

            let option6Answer8 = new AnswerOption;
            option6Answer8.id = 6;
            option6Answer8.text = "Moderadamente malo";

            let option7Answer8 = new AnswerOption;
            option7Answer8.id = 7;
            option7Answer8.text = "Extremadamente malo";

        answer8.answerOptions = new Array<AnswerOption>();
        answer8.answerOptions.push(option1Answer8);
        answer8.answerOptions.push(option2Answer8);
        answer8.answerOptions.push(option3Answer8);
        answer8.answerOptions.push(option4Answer8);
        answer8.answerOptions.push(option5Answer8);
        answer8.answerOptions.push(option6Answer8);
        answer8.answerOptions.push(option7Answer8);

        let answer9 = new Answer();
        answer9.id = 9;
        answer9.resumeName = "Arrepentido - Encantador";

            let option1Answer9 = new AnswerOption;
            option1Answer9.id = 1;
            option1Answer9.text = "Encantador";

            let option2Answer9 = new AnswerOption;
            option2Answer9.id = 2;
            option2Answer9.text = "Bueno";

            let option3Answer9 = new AnswerOption;
            option3Answer9.id = 3;
            option3Answer9.text = "Medio";

            let option4Answer9 = new AnswerOption;
            option4Answer9.id = 4;
            option4Answer9.text = "Pobre";

            let option5Answer9 = new AnswerOption;
            option5Answer9.id = 5;
            option5Answer9.text = "Terrible";

        answer9.answerOptions = new Array<AnswerOption>();
        answer9.answerOptions.push(option1Answer9);
        answer9.answerOptions.push(option2Answer9);
        answer9.answerOptions.push(option3Answer9);
        answer9.answerOptions.push(option4Answer9);
        answer9.answerOptions.push(option5Answer9);

        let answer10 = new Answer();
        answer10.id = 10;
        answer10.resumeName = "Credibilidad";

            let option1Answer10 = new AnswerOption;
            option1Answer10.id = 1;
            option1Answer10.text = "Extremadamente creíble";

            let option2Answer10 = new AnswerOption;
            option2Answer10.id = 2;
            option2Answer10.text = "Moderadamente creíble";

            let option3Answer10 = new AnswerOption;
            option3Answer10.id = 3;
            option3Answer10.text = "Ligeramente creíble";

            let option4Answer10 = new AnswerOption;
            option4Answer10.id = 4;
            option4Answer10.text = "Ni creíble ni increíble";

            let option5Answer10 = new AnswerOption;
            option5Answer10.id = 5;
            option5Answer10.text = "Ligeramente increíble";

            let option6Answer10 = new AnswerOption;
            option6Answer10.id = 6;
            option6Answer10.text = "Moderadamente increíble";

            let option7Answer10 = new AnswerOption;
            option7Answer10.id = 7;
            option7Answer10.text = "Extremadamente increíble";

        answer10.answerOptions = new Array<AnswerOption>();
        answer10.answerOptions.push(option1Answer10);
        answer10.answerOptions.push(option2Answer10);
        answer10.answerOptions.push(option3Answer10);
        answer10.answerOptions.push(option4Answer10);
        answer10.answerOptions.push(option5Answer10);
        answer10.answerOptions.push(option6Answer10);
        answer10.answerOptions.push(option7Answer10);

        let answer11 = new Answer();
        answer11.id = 11;
        answer11.resumeName = "Lento - Rápido";

            let option1Answer11 = new AnswerOption;
            option1Answer11.id = 1;
            option1Answer11.text = "Extremadamente rápido";

            let option2Answer11 = new AnswerOption;
            option2Answer11.id = 2;
            option2Answer11.text = "Moderadamente rápido";

            let option3Answer11 = new AnswerOption;
            option3Answer11.id = 3;
            option3Answer11.text = "Ligeramente rápido";

            let option4Answer11 = new AnswerOption;
            option4Answer11.id = 4;
            option4Answer11.text = "Promedio";

            let option5Answer11 = new AnswerOption;
            option5Answer11.id = 5;
            option5Answer11.text = "Ligeramente lento";

            let option6Answer11 = new AnswerOption;
            option6Answer11.id = 6;
            option6Answer11.text = "Moderadamente lento";

            let option7Answer11 = new AnswerOption;
            option7Answer11.id = 7;
            option7Answer11.text = "Extremadamente lento";

        answer11.answerOptions = new Array<AnswerOption>();
        answer11.answerOptions.push(option1Answer11);
        answer11.answerOptions.push(option2Answer11);
        answer11.answerOptions.push(option3Answer11);
        answer11.answerOptions.push(option4Answer11);
        answer11.answerOptions.push(option5Answer11);
        answer11.answerOptions.push(option6Answer11);
        answer11.answerOptions.push(option7Answer11);

        let answer12 = new Answer();
        answer12.id = 12;
        answer12.resumeName = "Improbable - Probable";

            let option1Answer12 = new AnswerOption;
            option1Answer12.id = 1;
            option1Answer12.text = "Extremadamente probable";

            let option2Answer12 = new AnswerOption;
            option2Answer12.id = 2;
            option2Answer12.text = "Moderadamente probable";

            let option3Answer12 = new AnswerOption;
            option3Answer12.id = 3;
            option3Answer12.text = "Ligeramente probable";

            let option4Answer12 = new AnswerOption;
            option4Answer12.id = 4;
            option4Answer12.text = "Ni probable ni improbable";

            let option5Answer12 = new AnswerOption;
            option5Answer12.id = 5;
            option5Answer12.text = "Ligeramente improbable";

            let option6Answer12 = new AnswerOption;
            option6Answer12.id = 6;
            option6Answer12.text = "Moderadamente improbable";

            let option7Answer12 = new AnswerOption;
            option7Answer12.id = 7;
            option7Answer12.text = "Extremadamente improbable";

        answer12.answerOptions = new Array<AnswerOption>();
        answer12.answerOptions.push(option1Answer12);
        answer12.answerOptions.push(option2Answer12);
        answer12.answerOptions.push(option3Answer12);
        answer12.answerOptions.push(option4Answer12);
        answer12.answerOptions.push(option5Answer12);
        answer12.answerOptions.push(option6Answer12);
        answer12.answerOptions.push(option7Answer12);

        let answer13 = new Answer();
        answer13.id = 13;
        answer13.resumeName = "Infeliz - Feliz";

            let option1Answer13 = new AnswerOption;
            option1Answer13.id = 1;
            option1Answer13.text = "Extremadamente feliz";

            let option2Answer13 = new AnswerOption;
            option2Answer13.id = 2;
            option2Answer13.text = "Moderadamente feliz";

            let option3Answer13 = new AnswerOption;
            option3Answer13.id = 3;
            option3Answer13.text = "Un poco feliz";

            let option4Answer13 = new AnswerOption;
            option4Answer13.id = 4;
            option4Answer13.text = "Ni feliz ni infeliz";

            let option5Answer13 = new AnswerOption;
            option5Answer13.id = 5;
            option5Answer13.text = "Ligeramente infeliz";

            let option6Answer13 = new AnswerOption;
            option6Answer13.id = 6;
            option6Answer13.text = "Moderadamente infeliz";

            let option7Answer13 = new AnswerOption;
            option7Answer13.id = 7;
            option7Answer13.text = "Extremadamente infeliz";

        answer13.answerOptions = new Array<AnswerOption>();
        answer13.answerOptions.push(option1Answer13);
        answer13.answerOptions.push(option2Answer13);
        answer13.answerOptions.push(option3Answer13);
        answer13.answerOptions.push(option4Answer13);
        answer13.answerOptions.push(option5Answer13);
        answer13.answerOptions.push(option6Answer13);
        answer13.answerOptions.push(option7Answer13);

        this.answers.push(answer1);
        this.answers.push(answer2);
        this.answers.push(answer3);
        this.answers.push(answer4);
        this.answers.push(answer5);
        this.answers.push(answer6);
        this.answers.push(answer7);
        this.answers.push(answer8);
        this.answers.push(answer9);
        this.answers.push(answer10);
        this.answers.push(answer11);
        this.answers.push(answer12);
        this.answers.push(answer13);

        return this.answers;
    }
}