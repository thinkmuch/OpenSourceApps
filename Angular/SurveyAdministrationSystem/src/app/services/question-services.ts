import { Injectable, Output, EventEmitter } from '@angular/core';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { AnswerOption } from '../models/answer-option';
import { Site } from '../models/site';
import { Language } from '../models/laguage';
import { Square } from '../models/square';
import { Hotel } from '../models/hotel';

@Injectable({
    providedIn: 'root'
})
export class QuestionServices
{
    public language: Language;
    public squares: Array<Square>;
    public hotels: Array<Hotel>;
    public questions: Array<Question>;
    private answers: Array<Answer>;
    @Output() rowSelected: EventEmitter<number>;

    constructor() {
        this.questions = new Array<Question>();
        this.answers = new Array<Answer>();
        this.rowSelected = new EventEmitter<number>();
        this.squares = new Array<Square>();
        this.hotels = new Array<Hotel>();
    }

    initializeAnswerObject(idQuestion: number, answerType: AnswerType) {
        let index = idQuestion - 1;
        this.questions[index].answer = new Answer();
        this.questions[index].answer.answerType = answerType;
    }

    initializeAnswerOptions(idQuestions: number) {
        let index = idQuestions - 1;
        this.questions[index].answer.answerOptions = new Array<AnswerOption>();
        this.questions[index].answer.answerOptions.push(new AnswerOption());
    }

    getQuestionById(idQuestion: number): Question {
        let index = idQuestion - 1;
        return this.questions[index];
    }

    setPredefinedAnswer(idQuestion: number, answer: Answer) {
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

    quitAnswerSelected(idQuestion: number) {
        let index = idQuestion - 1;
        this.questions[index].answer = new Answer();
        this.questions[index].answer.answerType = 0;
    }

    removeOptionOfQuestion(idQuestion: number, idOption) {
        this.questions[idQuestion - 1].answer.answerOptions.splice(idOption, 1);
    }

    setSiteToAnswer(idQuestion, site: Site) {
        let index = idQuestion - 1;
        this.questions[index].site = site;
    }

    getSite(idQuestion: number): Site {
        let index = idQuestion - 1;
        return this.questions[index].site;
    }

    setResponseAnswer(idQuestion: number, forceResponse: boolean) {
        let index = idQuestion - 1;
        this.questions[index].forceResponse = forceResponse;
    }

    setLanguage(language: Language) {
        this.language = language;
    }

    addSquare(square: Square) {
        this.squares.push(square);
    }

    removeSquare(square: Square) {
        for(let i = 0; i < this.squares.length; i++) {
            if(this.squares[i].id == square.id) {
                this.squares.splice(i, 1);
            }
        }
    }

    removeAllSquares() {
        this.squares = [];
    }

    addHotel(hotel: Hotel) {
        this.hotels.push(hotel);
    }

    removeAllHotels() {
        this.hotels = [];
    }

    removeHotel(hotel: Hotel) {
        for(let i = 0; i < this.hotels.length; i++) {
            if(this.hotels[i].id == hotel.id) {
                this.hotels.splice(i, 1);
            }
        }
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
        answer20.resumeName = "Si - No";

            let option1Answer20 = new AnswerOption;
            option1Answer20.id = 1;
            option1Answer20.text = "Definitivamente si";

            let option2Answer20 = new AnswerOption;
            option2Answer20.id = 2;
            option2Answer20.text = "Probablemente si";

            let option3Answer20 = new AnswerOption;
            option3Answer20.id = 3;
            option3Answer20.text = "Puede que si o puede que no";

            let option4Answer20 = new AnswerOption;
            option4Answer20.id = 4;
            option4Answer20.text = "Probablemtnte no";

            let option5Answer20 = new AnswerOption;
            option5Answer20.id = 5;
            option5Answer20.text = "Definitivamente no";

        answer20.answerOptions = new Array<AnswerOption>();
        answer20.answerOptions.push(option1Answer20);
        answer20.answerOptions.push(option2Answer20);
        answer20.answerOptions.push(option3Answer20);
        answer20.answerOptions.push(option4Answer20);
        answer20.answerOptions.push(option5Answer20);

        let answer21 = new Answer();
        answer21.id = 21;
        answer21.answerType = AnswerType.SingleAnswer;
        answer21.resumeName = "Cierto - Falso";

            let option1Answer21 = new AnswerOption;
            option1Answer21.id = 1;
            option1Answer21.text = "Definitivamente cierto";

            let option2Answer21 = new AnswerOption;
            option2Answer21.id = 2;
            option2Answer21.text = "Probablemente cierto";

            let option3Answer21 = new AnswerOption;
            option3Answer21.id = 3;
            option3Answer21.text = "Ni cierto ni falso";

            let option4Answer21 = new AnswerOption;
            option4Answer21.id = 4;
            option4Answer21.text = "Probablemente falso";

            let option5Answer21 = new AnswerOption;
            option5Answer21.id = 5;
            option5Answer21.text = "Definitivamente falso";

        answer21.answerOptions = new Array<AnswerOption>();
        answer21.answerOptions.push(option1Answer21);
        answer21.answerOptions.push(option2Answer21);
        answer21.answerOptions.push(option3Answer21);
        answer21.answerOptions.push(option4Answer21);
        answer21.answerOptions.push(option5Answer21);

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

        let answer29 = new Answer();
        answer29.id = 29;
        answer29.answerType = AnswerType.SingleAnswer;
        answer29.resumeName = "Con qué precisión";

            let option1Answer29 = new AnswerOption;
            option1Answer29.id = 1;
            option1Answer29.text = "Extremadamente preciso";

            let option2Answer29 = new AnswerOption;
            option2Answer29.id = 2;
            option2Answer29.text = "Con mucha precisión";

            let option3Answer29 = new AnswerOption;
            option3Answer29.id = 3;
            option3Answer29.text = "Moderadamente precisa";

            let option4Answer29 = new AnswerOption;
            option4Answer29.id = 4;
            option4Answer29.text = "Ligeramente exacto";

            let option5Answer29 = new AnswerOption;
            option5Answer29.id = 5;
            option5Answer29.text = "No con precisión en absoluto";

        answer29.answerOptions = new Array<AnswerOption>();
        answer29.answerOptions.push(option1Answer29);
        answer29.answerOptions.push(option2Answer29);
        answer29.answerOptions.push(option3Answer29);
        answer29.answerOptions.push(option4Answer29);
        answer29.answerOptions.push(option5Answer29);

        let answer30 = new Answer();
        answer30.id = 30;
        answer30.answerType = AnswerType.SingleAnswer;
        answer30.resumeName = "Adecuado - Inadecuado";

            let option1Answer30 = new AnswerOption;
            option1Answer30.id = 1;
            option1Answer30.text = "Extremadamente adecuado";

            let option2Answer30 = new AnswerOption;
            option2Answer30.id = 2;
            option2Answer30.text = "Moderadamente adecuado";

            let option3Answer30 = new AnswerOption;
            option3Answer30.id = 3;
            option3Answer30.text = "Ligeramente adecuado";

            let option4Answer30 = new AnswerOption;
            option4Answer30.id = 4;
            option4Answer30.text = "Ni adecuado ni inadecuado";

            let option5Answer30 = new AnswerOption;
            option5Answer30.id = 5;
            option5Answer30.text = "Ligeramente inadecuado";

            let option6Answer30 = new AnswerOption;
            option6Answer30.id = 6;
            option6Answer30.text = "Moderadamente inadecuado";

            let option7Answer30 = new AnswerOption;
            option7Answer30.id = 7;
            option7Answer30.text = "Extremadamente inadecuado";

        answer30.answerOptions = new Array<AnswerOption>();
        answer30.answerOptions.push(option1Answer30);
        answer30.answerOptions.push(option2Answer30);
        answer30.answerOptions.push(option3Answer30);
        answer30.answerOptions.push(option4Answer30);
        answer30.answerOptions.push(option5Answer30);
        answer30.answerOptions.push(option6Answer30);
        answer30.answerOptions.push(option7Answer30);

        let answer31 = new Answer();
        answer31.id = 31;
        answer31.answerType = AnswerType.SingleAnswer;
        answer31.resumeName = "Profesional - No profesional";

            let option1Answer31 = new AnswerOption;
            option1Answer31.id = 1;
            option1Answer31.text = "Extremadamente profesional";

            let option2Answer31 = new AnswerOption;
            option2Answer31.id = 2;
            option2Answer31.text = "Moderadamente profesional";

            let option3Answer31 = new AnswerOption;
            option3Answer31.id = 3;
            option3Answer31.text = "Ligeramente profesional";

            let option4Answer31 = new AnswerOption;
            option4Answer31.id = 4;
            option4Answer31.text = "Ni profesional ni no profesional";

            let option5Answer31 = new AnswerOption;
            option5Answer31.id = 5;
            option5Answer31.text = "Ligeramente poco profesional";

            let option6Answer31 = new AnswerOption;
            option6Answer31.id = 6;
            option6Answer31.text = "Moderadamente poco profesional";

            let option7Answer31 = new AnswerOption;
            option7Answer31.id = 7;
            option7Answer31.text = "Extremadamente profesional";

        answer31.answerOptions = new Array<AnswerOption>();
        answer31.answerOptions.push(option1Answer31);
        answer31.answerOptions.push(option2Answer31);
        answer31.answerOptions.push(option3Answer31);
        answer31.answerOptions.push(option4Answer31);
        answer31.answerOptions.push(option5Answer31);
        answer31.answerOptions.push(option6Answer31);
        answer31.answerOptions.push(option7Answer31);

        let answer32 = new Answer();
        answer32.id = 32;
        answer32.answerType = AnswerType.SingleAnswer;
        answer32.resumeName = "Competente - Incompetente";

            let option1Answer32 = new AnswerOption;
            option1Answer32.id = 1;
            option1Answer32.text = "Extremadamente competente";

            let option2Answer32 = new AnswerOption;
            option2Answer32.id = 2;
            option2Answer32.text = "Moderadamente competente";

            let option3Answer32 = new AnswerOption;
            option3Answer32.id = 3;
            option3Answer32.text = "Ligeramente competente";

            let option4Answer32 = new AnswerOption;
            option4Answer32.id = 4;
            option4Answer32.text = "Ni competente ni incompetente";

            let option5Answer32 = new AnswerOption;
            option5Answer32.id = 5;
            option5Answer32.text = "Ligeramente incompetente";

            let option6Answer32 = new AnswerOption;
            option6Answer32.id = 6;
            option6Answer32.text = "Moderadamente incompetente";

            let option7Answer32 = new AnswerOption;
            option7Answer32.id = 7;
            option7Answer32.text = "Extremadamente incompetente";

        answer32.answerOptions = new Array<AnswerOption>();
        answer32.answerOptions.push(option1Answer32);
        answer32.answerOptions.push(option2Answer32);
        answer32.answerOptions.push(option3Answer32);
        answer32.answerOptions.push(option4Answer32);
        answer32.answerOptions.push(option5Answer32);
        answer32.answerOptions.push(option6Answer32);
        answer32.answerOptions.push(option7Answer32);

        let answer33 = new Answer();
        answer33.id = 33;
        answer33.answerType = AnswerType.SingleAnswer;
        answer33.resumeName = "Positivo - negativo";

            let option1Answer33 = new AnswerOption;
            option1Answer33.id = 1;
            option1Answer33.text = "Extremadamente positivo";

            let option2Answer33 = new AnswerOption;
            option2Answer33.id = 2;
            option2Answer33.text = "Moderadamente positivo";

            let option3Answer33 = new AnswerOption;
            option3Answer33.id = 3;
            option3Answer33.text = "Ligeramente positivo";

            let option4Answer33 = new AnswerOption;
            option4Answer33.id = 4;
            option4Answer33.text = "Ni positivo ni negativo";

            let option5Answer33 = new AnswerOption;
            option5Answer33.id = 5;
            option5Answer33.text = "Ligeramente negativo";

            let option6Answer33 = new AnswerOption;
            option6Answer33.id = 6;
            option6Answer33.text = "Moderadamente negativo";

            let option7Answer33 = new AnswerOption;
            option7Answer33.id = 7;
            option7Answer33.text = "Extremadamente negativo";

        answer33.answerOptions = new Array<AnswerOption>();
        answer33.answerOptions.push(option1Answer33);
        answer33.answerOptions.push(option2Answer33);
        answer33.answerOptions.push(option3Answer33);
        answer33.answerOptions.push(option4Answer33);
        answer33.answerOptions.push(option5Answer33);
        answer33.answerOptions.push(option6Answer33);
        answer33.answerOptions.push(option7Answer33);

        let answer34 = new Answer();
        answer34.id = 34;
        answer34.answerType = AnswerType.SingleAnswer;
        answer34.resumeName = "Cómodo - Incómodo";

            let option1Answer34 = new AnswerOption;
            option1Answer34.id = 1;
            option1Answer34.text = "Extremadamente cómodo";

            let option2Answer34 = new AnswerOption;
            option2Answer34.id = 2;
            option2Answer34.text = "Moderadamente cómodo";

            let option3Answer34 = new AnswerOption;
            option3Answer34.id = 3;
            option3Answer34.text = "Ligeramente cómodo";

            let option4Answer34 = new AnswerOption;
            option4Answer34.id = 4;
            option4Answer34.text = "Ni cómodo ni incómodo";

            let option5Answer34 = new AnswerOption;
            option5Answer34.id = 5;
            option5Answer34.text = "Ligeramente incómodo";

            let option6Answer34 = new AnswerOption;
            option6Answer34.id = 6;
            option6Answer34.text = "Moderadamente incómodo";

            let option7Answer34 = new AnswerOption;
            option7Answer34.id = 7;
            option7Answer34.text = "Extremadamente incómodo";

        answer34.answerOptions = new Array<AnswerOption>();
        answer34.answerOptions.push(option1Answer34);
        answer34.answerOptions.push(option2Answer34);
        answer34.answerOptions.push(option3Answer34);
        answer34.answerOptions.push(option4Answer34);
        answer34.answerOptions.push(option5Answer34);
        answer34.answerOptions.push(option6Answer34);
        answer34.answerOptions.push(option7Answer34);

        let answer35 = new Answer();
        answer35.id = 35;
        answer35.answerType = AnswerType.SingleAnswer;
        answer35.resumeName = "Razonable - Irrazonable";

            let option1Answer35 = new AnswerOption;
            option1Answer35.id = 1;
            option1Answer35.text = "Extremadamente razonable";

            let option2Answer35 = new AnswerOption;
            option2Answer35.id = 2;
            option2Answer35.text = "Moderadamente razonable";

            let option3Answer35 = new AnswerOption;
            option3Answer35.id = 3;
            option3Answer35.text = "Ligeramente razonable";

            let option4Answer35 = new AnswerOption;
            option4Answer35.id = 4;
            option4Answer35.text = "Ni razonable ni irrazonable";

            let option5Answer35 = new AnswerOption;
            option5Answer35.id = 5;
            option5Answer35.text = "Ligeramente irracional";

            let option6Answer35 = new AnswerOption;
            option6Answer35.id = 6;
            option6Answer35.text = "Moderadamente irrazonable";

            let option7Answer35 = new AnswerOption;
            option7Answer35.id = 7;
            option7Answer35.text = "Extremadamente irrazonable";

        answer35.answerOptions = new Array<AnswerOption>();
        answer35.answerOptions.push(option1Answer35);
        answer35.answerOptions.push(option2Answer35);
        answer35.answerOptions.push(option3Answer35);
        answer35.answerOptions.push(option4Answer35);
        answer35.answerOptions.push(option5Answer35);
        answer35.answerOptions.push(option6Answer35);
        answer35.answerOptions.push(option7Answer35);

        let answer36 = new Answer();
        answer36.id = 36;
        answer36.answerType = AnswerType.SingleAnswer;
        answer36.resumeName = "Claro - Poco claro";

            let option1Answer36 = new AnswerOption;
            option1Answer36.id = 1;
            option1Answer36.text = "Extremadamente claro";

            let option2Answer36 = new AnswerOption;
            option2Answer36.id = 2;
            option2Answer36.text = "Moderadamente claro";

            let option3Answer36 = new AnswerOption;
            option3Answer36.id = 3;
            option3Answer36.text = "Ligeramente claro";

            let option4Answer36 = new AnswerOption;
            option4Answer36.id = 4;
            option4Answer36.text = "Ni claro ni claro";

            let option5Answer36 = new AnswerOption;
            option5Answer36.id = 5;
            option5Answer36.text = "Ligeramente poco claro";

            let option6Answer36 = new AnswerOption;
            option6Answer36.id = 6;
            option6Answer36.text = "Moderadamente poco claro";

            let option7Answer36 = new AnswerOption;
            option7Answer36.id = 7;
            option7Answer36.text = "Extremadamente poco claro";

        answer36.answerOptions = new Array<AnswerOption>();
        answer36.answerOptions.push(option1Answer36);
        answer36.answerOptions.push(option2Answer36);
        answer36.answerOptions.push(option3Answer36);
        answer36.answerOptions.push(option4Answer36);
        answer36.answerOptions.push(option5Answer36);
        answer36.answerOptions.push(option6Answer36);
        answer36.answerOptions.push(option7Answer36);

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
        this.answers.push(answer23);
        this.answers.push(answer24);
        this.answers.push(answer25);
        this.answers.push(answer26);
        this.answers.push(answer27);
        this.answers.push(answer28);
        this.answers.push(answer29);
        this.answers.push(answer30);
        this.answers.push(answer31);
        this.answers.push(answer32);
        this.answers.push(answer33);
        this.answers.push(answer34);
        this.answers.push(answer35);
        this.answers.push(answer36);

        return this.answers.sort((a, b) => {
            if (a.resumeName > b.resumeName) {
                return 1;
            }
            if (b.resumeName > a.resumeName) {
                return -1;
            }
            return 0;
        });
    }
}

export enum AnswerType {
    SingleAnswer = 1,
    FreeText = 2,
    MultipleChoises = 3
}