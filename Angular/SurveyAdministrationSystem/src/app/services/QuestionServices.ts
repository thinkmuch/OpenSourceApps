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

    setAnswerFreeText(idQuestion: number) {
        let index = idQuestion - 1;
        this.questions[index].answer = new Answer();
        this.questions[index].answer.answerType = AnswerType.FreeText;
    }

    quitAnswerSelected(idQuestion: number) {
        let index = idQuestion - 1;
        this.questions[index].answer = new Answer();
        this.questions[index].answer.answerType = 0;
    }

    getAnswers() : Array<Answer> {

        this.answers = new Array<Answer>();

        let answer1 = new Answer();
        answer1.id = 1;
        answer1.answerType = AnswerType.SingleAnswer;
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
        answer2.answerType = AnswerType.SingleAnswer;
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
        answer3.answerType = AnswerType.SingleAnswer;
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
        answer4.id = 4;
        answer4.answerType = AnswerType.SingleAnswer;
        answer4.resumeName = "Por debajo del promedio - Por encima del promedio";

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
        answer5.answerType = AnswerType.SingleAnswer;
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
        answer6.answerType = AnswerType.SingleAnswer;
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
        answer7.answerType = AnswerType.SingleAnswer;
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
        answer8.answerType = AnswerType.SingleAnswer;
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
        answer9.answerType = AnswerType.SingleAnswer;
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
        answer10.answerType = AnswerType.SingleAnswer;
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
        answer11.answerType = AnswerType.SingleAnswer;
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
        answer12.answerType = AnswerType.SingleAnswer;
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
        answer13.answerType = AnswerType.SingleAnswer;
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

        let answer14 = new Answer();
        answer14.id = 14;
        answer14.answerType = AnswerType.SingleAnswer;
        answer14.resumeName = "Inútil - Útil";

            let option1Answer14 = new AnswerOption;
            option1Answer14.id = 1;
            option1Answer14.text = "Extremadamente útil";

            let option2Answer14 = new AnswerOption;
            option2Answer14.id = 2;
            option2Answer14.text = "Moderadamente útil";

            let option3Answer14 = new AnswerOption;
            option3Answer14.id = 3;
            option3Answer14.text = "Ligeramente útil";

            let option4Answer14 = new AnswerOption;
            option4Answer14.id = 4;
            option4Answer14.text = "Ni útil ni inútil";

            let option5Answer14 = new AnswerOption;
            option5Answer14.id = 5;
            option5Answer14.text = "Ligeramente inútil";

            let option6Answer14 = new AnswerOption;
            option6Answer14.id = 6;
            option6Answer14.text = "Moderadamente inútil";

            let option7Answer14 = new AnswerOption;
            option7Answer14.id = 7;
            option7Answer14.text = "Extremadamente inútil";

        answer14.answerOptions = new Array<AnswerOption>();
        answer14.answerOptions.push(option1Answer14);
        answer14.answerOptions.push(option2Answer14);
        answer14.answerOptions.push(option3Answer14);
        answer14.answerOptions.push(option4Answer14);
        answer14.answerOptions.push(option5Answer14);
        answer14.answerOptions.push(option6Answer14);
        answer14.answerOptions.push(option7Answer14);

        let answer15 = new Answer();
        answer15.id = 15;
        answer15.answerType = AnswerType.SingleAnswer;
        answer15.resumeName = "Sin importancia - Importante";

            let option1Answer15 = new AnswerOption;
            option1Answer15.id = 1;
            option1Answer15.text = "Extremadamente importante";

            let option2Answer15 = new AnswerOption;
            option2Answer15.id = 2;
            option2Answer15.text = "Muy importante";

            let option3Answer15 = new AnswerOption;
            option3Answer15.id = 3;
            option3Answer15.text = "Moderadamente importante";

            let option4Answer15 = new AnswerOption;
            option4Answer15.id = 4;
            option4Answer15.text = "Ligeramente importante";

            let option5Answer15 = new AnswerOption;
            option5Answer15.id = 5;
            option5Answer15.text = "No tan importante";

        answer15.answerOptions = new Array<AnswerOption>();
        answer15.answerOptions.push(option1Answer15);
        answer15.answerOptions.push(option2Answer15);
        answer15.answerOptions.push(option3Answer15);
        answer15.answerOptions.push(option4Answer15);
        answer15.answerOptions.push(option5Answer15);

        let answer16 = new Answer();
        answer16.id = 16;
        answer16.answerType = AnswerType.SingleAnswer;
        answer16.resumeName = "Describe mis sentimientos";

            let option1Answer16 = new AnswerOption;
            option1Answer16.id = 1;
            option1Answer16.text = "Describe claramente mis sentimientos";

            let option2Answer16 = new AnswerOption;
            option2Answer16.id = 2;
            option2Answer16.text = "Principalmente describe mis sentimientos";

            let option3Answer16 = new AnswerOption;
            option3Answer16.id = 3;
            option3Answer16.text = "Describe moderadamente mis sentimientos";

            let option4Answer16 = new AnswerOption;
            option4Answer16.id = 4;
            option4Answer16.text = "Describe levemente mis sentimientos";

            let option5Answer16 = new AnswerOption;
            option5Answer16.id = 5;
            option5Answer16.text = "No describe mis sentimientos";

        answer16.answerOptions = new Array<AnswerOption>();
        answer16.answerOptions.push(option1Answer16);
        answer16.answerOptions.push(option2Answer16);
        answer16.answerOptions.push(option3Answer16);
        answer16.answerOptions.push(option4Answer16);
        answer16.answerOptions.push(option5Answer16);

        let answer17 = new Answer();
        answer17.id = 17;
        answer17.answerType = AnswerType.SingleAnswer;
        answer17.resumeName = "Me describe";

            let option1Answer17 = new AnswerOption;
            option1Answer17.id = 1;
            option1Answer17.text = "Me describe un poco bien";

            let option2Answer17 = new AnswerOption;
            option2Answer17.id = 2;
            option2Answer17.text = "Me describe muy bien";

            let option3Answer17 = new AnswerOption;
            option3Answer17.id = 3;
            option3Answer17.text = "Me describe moderadamente bien";

            let option4Answer17 = new AnswerOption;
            option4Answer17.id = 4;
            option4Answer17.text = "Me describe un poco bien";

            let option5Answer17 = new AnswerOption;
            option5Answer17.id = 5;
            option5Answer17.text = "No me describe";

        answer17.answerOptions = new Array<AnswerOption>();
        answer17.answerOptions.push(option1Answer17);
        answer17.answerOptions.push(option2Answer17);
        answer17.answerOptions.push(option3Answer17);
        answer17.answerOptions.push(option4Answer17);
        answer17.answerOptions.push(option5Answer17);

        let answer18 = new Answer();
        answer18.id = 18;
        answer18.answerType = AnswerType.SingleAnswer;
        answer18.resumeName = "Disgustado - Complacido";

            let option1Answer18 = new AnswerOption;
            option1Answer18.id = 1;
            option1Answer18.text = "Muy satisfechos";

            let option2Answer18 = new AnswerOption;
            option2Answer18.id = 2;
            option2Answer18.text = "Moderadamente satisfecho";

            let option3Answer18 = new AnswerOption;
            option3Answer18.id = 3;
            option3Answer18.text = "Ligeramente complacido";

            let option4Answer18 = new AnswerOption;
            option4Answer18.id = 4;
            option4Answer18.text = "Ni contento ni disgustado";

            let option5Answer18 = new AnswerOption;
            option5Answer18.id = 5;
            option5Answer18.text = "Ligeramente disgustado";

            let option6Answer18 = new AnswerOption;
            option6Answer18.id = 6;
            option6Answer18.text = "Moderadamente disgustado";

            let option7Answer18 = new AnswerOption;
            option7Answer18.id = 7;
            option7Answer18.text = "Extremadamente disgustado";

        answer18.answerOptions = new Array<AnswerOption>();
        answer18.answerOptions.push(option1Answer18);
        answer18.answerOptions.push(option2Answer18);
        answer18.answerOptions.push(option3Answer18);
        answer18.answerOptions.push(option4Answer18);
        answer18.answerOptions.push(option5Answer18);
        answer18.answerOptions.push(option6Answer18);
        answer18.answerOptions.push(option7Answer18);

        let answer19 = new Answer();
        answer19.id = 19;
        answer19.answerType = AnswerType.SingleAnswer;
        answer19.resumeName = "No me gusta - Me gusta";

            let option1Answer19 = new AnswerOption;
            option1Answer19.id = 1;
            option1Answer19.text = "Mucho";

            let option2Answer19 = new AnswerOption;
            option2Answer19.id = 2;
            option2Answer19.text = "Moderado";

            let option3Answer19 = new AnswerOption;
            option3Answer19.id = 3;
            option3Answer19.text = "Un poco";

            let option4Answer19 = new AnswerOption;
            option4Answer19.id = 4;
            option4Answer19.text = "Ni me gusta ni me disgusta";

            let option5Answer19 = new AnswerOption;
            option5Answer19.id = 5;
            option5Answer19.text = "Me disgusta un poco";

            let option6Answer19 = new AnswerOption;
            option6Answer19.id = 6;
            option6Answer19.text = "Me disgusta moderado";

            let option7Answer19 = new AnswerOption;
            option7Answer19.id = 7;
            option7Answer19.text = "Me disgusta mucho";

        answer19.answerOptions = new Array<AnswerOption>();
        answer19.answerOptions.push(option1Answer19);
        answer19.answerOptions.push(option2Answer19);
        answer19.answerOptions.push(option3Answer19);
        answer19.answerOptions.push(option4Answer19);
        answer19.answerOptions.push(option5Answer19);
        answer19.answerOptions.push(option6Answer19);
        answer19.answerOptions.push(option7Answer19);

        let answer20 = new Answer();
        answer20.id = 20;
        answer20.answerType = AnswerType.SingleAnswer;
        answer20.resumeName = "Infeliz - Feliz";

            let option1Answer20 = new AnswerOption;
            option1Answer20.id = 1;
            option1Answer20.text = "Extremadamente feliz";

            let option2Answer20 = new AnswerOption;
            option2Answer20.id = 2;
            option2Answer20.text = "Moderadamente feliz";

            let option3Answer20 = new AnswerOption;
            option3Answer20.id = 3;
            option3Answer20.text = "Un poco feliz";

            let option4Answer20 = new AnswerOption;
            option4Answer20.id = 4;
            option4Answer20.text = "Ni feliz ni infeliz";

            let option5Answer20 = new AnswerOption;
            option5Answer20.id = 5;
            option5Answer20.text = "Ligeramente infeliz";

            let option6Answer20 = new AnswerOption;
            option6Answer20.id = 6;
            option6Answer20.text = "Moderadamente infeliz";

            let option7Answer20 = new AnswerOption;
            option7Answer20.id = 7;
            option7Answer20.text = "Extremadamente infeliz";

        answer20.answerOptions = new Array<AnswerOption>();
        answer20.answerOptions.push(option1Answer20);
        answer20.answerOptions.push(option2Answer20);
        answer20.answerOptions.push(option3Answer20);
        answer20.answerOptions.push(option4Answer20);
        answer20.answerOptions.push(option5Answer20);
        answer20.answerOptions.push(option6Answer20);
        answer20.answerOptions.push(option7Answer20);

        let answer21 = new Answer();
        answer21.id = 21;
        answer21.answerType = AnswerType.SingleAnswer;
        answer21.resumeName = "Inútil - Útil";

            let option1Answer21 = new AnswerOption;
            option1Answer21.id = 1;
            option1Answer21.text = "Extremadamente útil";

            let option2Answer21 = new AnswerOption;
            option2Answer21.id = 2;
            option2Answer21.text = "Moderadamente útil";

            let option3Answer21 = new AnswerOption;
            option3Answer21.id = 3;
            option3Answer21.text = "Ligeramente útil";

            let option4Answer21 = new AnswerOption;
            option4Answer21.id = 4;
            option4Answer21.text = "Ni útil ni inútil";

            let option5Answer21 = new AnswerOption;
            option5Answer21.id = 5;
            option5Answer21.text = "Ligeramente inútil";

            let option6Answer21 = new AnswerOption;
            option6Answer21.id = 6;
            option6Answer21.text = "Moderadamente inútil";

            let option7Answer21 = new AnswerOption;
            option7Answer21.id = 7;
            option7Answer21.text = "Extremadamente inútil";

        answer21.answerOptions = new Array<AnswerOption>();
        answer21.answerOptions.push(option1Answer21);
        answer21.answerOptions.push(option2Answer21);
        answer21.answerOptions.push(option3Answer21);
        answer21.answerOptions.push(option4Answer21);
        answer21.answerOptions.push(option5Answer21);
        answer21.answerOptions.push(option6Answer21);
        answer21.answerOptions.push(option7Answer21);

        let answer22 = new Answer();
        answer22.id = 22;
        answer22.answerType = AnswerType.SingleAnswer;
        answer22.resumeName = "Sin importancia - Importante";

            let option1Answer22 = new AnswerOption;
            option1Answer22.id = 1;
            option1Answer22.text = "Extremadamente importante";

            let option2Answer22 = new AnswerOption;
            option2Answer22.id = 2;
            option2Answer22.text = "Muy importante";

            let option3Answer22 = new AnswerOption;
            option3Answer22.id = 3;
            option3Answer22.text = "Moderadamente importante";

            let option4Answer22 = new AnswerOption;
            option4Answer22.id = 4;
            option4Answer22.text = "Ligeramente importante";

            let option5Answer22 = new AnswerOption;
            option5Answer22.id = 5;
            option5Answer22.text = "No tan importante";

        answer22.answerOptions = new Array<AnswerOption>();
        answer22.answerOptions.push(option1Answer22);
        answer22.answerOptions.push(option2Answer22);
        answer22.answerOptions.push(option3Answer22);
        answer22.answerOptions.push(option4Answer22);
        answer22.answerOptions.push(option5Answer22);

        let answer23 = new Answer();
        answer23.id = 24;
        answer23.answerType = AnswerType.SingleAnswer;
        answer23.resumeName = "Estado civil";

            let option1Answer23 = new AnswerOption;
            option1Answer23.id = 1;
            option1Answer23.text = "Casado";

            let option2Answer23 = new AnswerOption;
            option2Answer23.id = 2;
            option2Answer23.text = "Viudo";

            let option3Answer23 = new AnswerOption;
            option3Answer23.id = 3;
            option3Answer23.text = "Divorciado";

            let option4Answer23 = new AnswerOption;
            option4Answer23.id = 4;
            option4Answer23.text = "Apartado";

            let option5Answer23 = new AnswerOption;
            option5Answer23.id = 5;
            option5Answer23.text = "Nunca casado";

        answer23.answerOptions = new Array<AnswerOption>();
        answer23.answerOptions.push(option1Answer23);
        answer23.answerOptions.push(option2Answer23);
        answer23.answerOptions.push(option3Answer23);
        answer23.answerOptions.push(option4Answer23);
        answer23.answerOptions.push(option5Answer23);

        let answer24 = new Answer();
        answer24.id = 24;
        answer24.answerType = AnswerType.SingleAnswer;
        answer24.resumeName = "Familiar";

            let option1Answer24 = new AnswerOption;
            option1Answer24.id = 1;
            option1Answer24.text = "Extremadamente familiar";

            let option2Answer24 = new AnswerOption;
            option2Answer24.id = 2;
            option2Answer24.text = "Muy familiar";

            let option3Answer24 = new AnswerOption;
            option3Answer24.id = 3;
            option3Answer24.text = "Moderadamente familiar";

            let option4Answer24 = new AnswerOption;
            option4Answer24.id = 4;
            option4Answer24.text = "Ligeramente familiar";

            let option5Answer24 = new AnswerOption;
            option5Answer24.id = 5;
            option5Answer24.text = "No estoy familiarizado en absoluto";

        answer24.answerOptions = new Array<AnswerOption>();
        answer24.answerOptions.push(option1Answer24);
        answer24.answerOptions.push(option2Answer24);
        answer24.answerOptions.push(option3Answer24);
        answer24.answerOptions.push(option4Answer24);
        answer24.answerOptions.push(option5Answer24);

        let answer25 = new Answer();
        answer25.id = 25;
        answer25.answerType = AnswerType.SingleAnswer;
        answer25.resumeName = "Informado";

            let option1Answer25 = new AnswerOption;
            option1Answer25.id = 1;
            option1Answer25.text = "Extremadamente bien informado";

            let option2Answer25 = new AnswerOption;
            option2Answer25.id = 2;
            option2Answer25.text = "Muy bien informado";

            let option3Answer25 = new AnswerOption;
            option3Answer25.id = 3;
            option3Answer25.text = "Moderadamente bien informado";

            let option4Answer25 = new AnswerOption;
            option4Answer25.id = 4;
            option4Answer25.text = "Ligeramente bien informado";

            let option5Answer25 = new AnswerOption;
            option5Answer25.id = 5;
            option5Answer25.text = "No estoy bien informado";

        answer25.answerOptions = new Array<AnswerOption>();
        answer25.answerOptions.push(option1Answer25);
        answer25.answerOptions.push(option2Answer25);
        answer25.answerOptions.push(option3Answer25);
        answer25.answerOptions.push(option4Answer25);
        answer25.answerOptions.push(option5Answer25);

        let answer26 = new Answer();
        answer26.id = 26;
        answer26.answerType = AnswerType.SingleAnswer;
        answer26.resumeName = "Que tan bien";

            let option1Answer26 = new AnswerOption;
            option1Answer26.id = 1;
            option1Answer26.text = "Extremadamente bien";

            let option2Answer26 = new AnswerOption;
            option2Answer26.id = 2;
            option2Answer26.text = "Muy bien";

            let option3Answer26 = new AnswerOption;
            option3Answer26.id = 3;
            option3Answer26.text = "Moderadamente bien";

            let option4Answer26 = new AnswerOption;
            option4Answer26.id = 4;
            option4Answer26.text = "Ligeramente bien";

            let option5Answer26 = new AnswerOption;
            option5Answer26.id = 5;
            option5Answer26.text = "Nada bien";

        answer26.answerOptions = new Array<AnswerOption>();
        answer26.answerOptions.push(option1Answer26);
        answer26.answerOptions.push(option2Answer26);
        answer26.answerOptions.push(option3Answer26);
        answer26.answerOptions.push(option4Answer26);
        answer26.answerOptions.push(option5Answer26);

        let answer27 = new Answer();
        answer27.id = 27;
        answer27.answerType = AnswerType.SingleAnswer;
        answer27.resumeName = "Desafiante";

            let option1Answer27 = new AnswerOption;
            option1Answer27.id = 1;
            option1Answer27.text = "Extremadamente desafiante";

            let option2Answer27 = new AnswerOption;
            option2Answer27.id = 2;
            option2Answer27.text = "Muy retador";

            let option3Answer27 = new AnswerOption;
            option3Answer27.id = 3;
            option3Answer27.text = "Moderadamente desafiante";

            let option4Answer27 = new AnswerOption;
            option4Answer27.id = 4;
            option4Answer27.text = "Ligeramente desafiante";

            let option5Answer27 = new AnswerOption;
            option5Answer27.id = 5;
            option5Answer27.text = "No es un desafío en absoluto";

        answer27.answerOptions = new Array<AnswerOption>();
        answer27.answerOptions.push(option1Answer27);
        answer27.answerOptions.push(option2Answer27);
        answer27.answerOptions.push(option3Answer27);
        answer27.answerOptions.push(option4Answer27);
        answer27.answerOptions.push(option5Answer27);

        let answer28 = new Answer();
        answer28.id = 28;
        answer28.answerType = AnswerType.SingleAnswer;
        answer28.resumeName = "Interesante";

            let option1Answer28 = new AnswerOption;
            option1Answer28.id = 1;
            option1Answer28.text = "Extremadamente interesante";

            let option2Answer28 = new AnswerOption;
            option2Answer28.id = 2;
            option2Answer28.text = "Muy interesante";

            let option3Answer28 = new AnswerOption;
            option3Answer28.id = 3;
            option3Answer28.text = "Moderadamente interesante";

            let option4Answer28 = new AnswerOption;
            option4Answer28.id = 4;
            option4Answer28.text = "Un poco interesante";

            let option5Answer28 = new AnswerOption;
            option5Answer28.id = 5;
            option5Answer28.text = "Nada interesante";

        answer28.answerOptions = new Array<AnswerOption>();
        answer28.answerOptions.push(option1Answer28);
        answer28.answerOptions.push(option2Answer28);
        answer28.answerOptions.push(option3Answer28);
        answer28.answerOptions.push(option4Answer28);
        answer28.answerOptions.push(option5Answer28);

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
        this.answers.push(answer14);
        this.answers.push(answer15);
        this.answers.push(answer16);
        this.answers.push(answer17);
        this.answers.push(answer18);
        this.answers.push(answer19);
        this.answers.push(answer20);
        this.answers.push(answer21);
        this.answers.push(answer22);
        this.answers.push(answer23);
        this.answers.push(answer24);
        this.answers.push(answer25);
        this.answers.push(answer26);
        this.answers.push(answer27);
        this.answers.push(answer28);

        return this.answers;
    }
}

export enum AnswerType {
    SingleAnswer = 1,
    FreeText = 2
}