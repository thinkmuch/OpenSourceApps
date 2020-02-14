import { Injectable, Output, EventEmitter } from '@angular/core';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { AnswerOption } from '../models/answer-option';
import { Site } from '../models/site';
import { Language } from '../models/laguage';
import { Square } from '../models/square';
import { Hotel } from '../models/hotel';
import { Survey } from '../models/survey';

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
    private nameSurvey: string;
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

    getNewSurvey(): Survey {
        let survey = new Survey();

        survey.language = this.language;
        survey.questions = this.questions;
        survey.squares = this.squares;
        survey.name = this.nameSurvey;
        survey.hotels = this.hotels;

        return survey;
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

    setAcceptNA(idQuestion: number, acceptNA: boolean) {
        let index = idQuestion - 1;
        this.questions[index].acceptNA = acceptNA;
    }

    getAnswers() : Array<Answer> {

        this.answers = new Array<Answer>();

        let answer1 = new Answer();
        answer1.id = 1;
        answer1.answerType = AnswerType.SingleAnswer;
        answer1.resumeName = "Excelente - Deficiente";
        
            let option1Answer1 = new AnswerOption;
            option1Answer1.id = 1;
            option1Answer1.text = "Deficiente";

            let option2Answer1 = new AnswerOption;
            option2Answer1.id = 2;
            option2Answer1.text = "Regular";

            let option3Answer1 = new AnswerOption;
            option3Answer1.id = 3;
            option3Answer1.text = "Bueno"

            let option4Answer1 = new AnswerOption;
            option4Answer1.id = 4;
            option4Answer1.text = "Excelente";

        answer1.answerOptions = new Array<AnswerOption>()
        answer1.answerOptions.push(option1Answer1);
        answer1.answerOptions.push(option2Answer1);
        answer1.answerOptions.push(option3Answer1);
        answer1.answerOptions.push(option4Answer1);

        let answer2 = new Answer();
        answer2.id = 2;
        answer2.answerType = AnswerType.SingleAnswer;
        answer2.resumeName = "0 - 10";
        
            let option1Answer2 = new AnswerOption;
            option1Answer2.id = 0;
            option1Answer2.text = "0";

            let option2Answer2 = new AnswerOption;
            option2Answer2.id = 1;
            option2Answer2.text = "1";

            let option3Answer2 = new AnswerOption;
            option3Answer2.id = 2;
            option3Answer2.text = "2"

            let option4Answer2 = new AnswerOption;
            option4Answer2.id = 3;
            option4Answer2.text = "3";

            let option5Answer2 = new AnswerOption;
            option5Answer2.id = 4;
            option5Answer2.text = "4";

            let option6Answer2 = new AnswerOption;
            option6Answer2.id = 5;
            option6Answer2.text = "5";

            let option7Answer2 = new AnswerOption;
            option7Answer2.id = 6;
            option7Answer2.text = "6";

            let option8Answer2 = new AnswerOption;
            option8Answer2.id = 7;
            option8Answer2.text = "7";

            let option9Answer2 = new AnswerOption;
            option9Answer2.id = 8;
            option9Answer2.text = "8";

            let option10Answer2 = new AnswerOption;
            option10Answer2.id = 9;
            option10Answer2.text = "9";

            let option11Answer2 = new AnswerOption;
            option11Answer2.id = 10;
            option11Answer2.text = "10";

        answer1.answerOptions = new Array<AnswerOption>()
        answer1.answerOptions.push(option1Answer1);
        answer1.answerOptions.push(option2Answer1);
        answer1.answerOptions.push(option3Answer1);
        answer1.answerOptions.push(option4Answer1);

        answer2.answerOptions = new Array<AnswerOption>();
        answer2.answerOptions.push(option1Answer2);
        answer2.answerOptions.push(option2Answer2);
        answer2.answerOptions.push(option3Answer2);
        answer2.answerOptions.push(option4Answer2);
        answer2.answerOptions.push(option5Answer2);
        answer2.answerOptions.push(option6Answer2);
        answer2.answerOptions.push(option7Answer2);
        answer2.answerOptions.push(option8Answer2);
        answer2.answerOptions.push(option9Answer2);
        answer2.answerOptions.push(option10Answer2);
        answer2.answerOptions.push(option11Answer2);

        let answer3 = new Answer();
        answer3.id = 3;
        answer3.answerType = AnswerType.SingleAnswer;
        answer3.resumeName = "Expectativas";
        
            let option1Answer3 = new AnswerOption;
            option1Answer3.id = 1;
            option1Answer3.text = "Expectativas no cumplidas";

            let option2Answer3 = new AnswerOption;
            option2Answer3.id = 2;
            option2Answer3.text = "";

            let option3Answer3 = new AnswerOption;
            option3Answer3.id = 3;
            option3Answer3.text = "Cumplió sus expectativas";

            let option4Answer3 = new AnswerOption;
            option4Answer3.id = 4;
            option4Answer3.text = "";

            let option5Answer3 = new AnswerOption;
            option5Answer3.id = 5;
            option5Answer3.text = "Superó sus expectativas";

        answer3.answerOptions = new Array<AnswerOption>()
        answer3.answerOptions.push(option1Answer3);
        answer3.answerOptions.push(option2Answer3);
        answer3.answerOptions.push(option3Answer3);
        answer3.answerOptions.push(option4Answer3);
        answer3.answerOptions.push(option5Answer3);

        let answer4 = new Answer();
        answer4.id = 4;
        answer4.answerType = AnswerType.SingleAnswer;
        answer4.resumeName = "De acuerdo - En desacuerdo";
        
            let option1Answer4 = new AnswerOption;
            option1Answer4.id = 1;
            option1Answer4.text = "Totalmente en deacuerdo";

            let option2Answer4 = new AnswerOption;
            option2Answer4.id = 2;
            option2Answer4.text = "";

            let option3Answer4 = new AnswerOption;
            option3Answer4.id = 3;
            option3Answer4.text = "Neutral";

            let option4Answer4 = new AnswerOption;
            option4Answer4.id = 4;
            option4Answer4.text = "";

            let option5Answer4 = new AnswerOption;
            option5Answer4.id = 5;
            option5Answer4.text = "Totalmente de acuerdo";

        answer4.answerOptions = new Array<AnswerOption>()
        answer4.answerOptions.push(option1Answer4);
        answer4.answerOptions.push(option2Answer4);
        answer4.answerOptions.push(option3Answer4);
        answer4.answerOptions.push(option4Answer4);
        answer4.answerOptions.push(option5Answer4);

        let answer5 = new Answer();
        answer5.id = 5;
        answer5.answerType = AnswerType.SingleAnswer;
        answer5.resumeName = "Satisfecho - Insatisfecho";
        
            let option1Answer5 = new AnswerOption;
            option1Answer5.id = 1;
            option1Answer5.text = "Extremadamente insatisfecho";

            let option2Answer5 = new AnswerOption;
            option2Answer5.id = 2;
            option2Answer5.text = "Algo insatisfecho";

            let option3Answer5 = new AnswerOption;
            option3Answer5.id = 3;
            option3Answer5.text = "Ni satisfecho ni insatisfecho";

            let option4Answer5 = new AnswerOption;
            option4Answer5.id = 4;
            option4Answer5.text = "Algo satisfecho";

            let option5Answer5 = new AnswerOption;
            option5Answer5.id = 5;
            option5Answer5.text = "Extremadamente satisfecho";

        answer5.answerOptions = new Array<AnswerOption>()
        answer5.answerOptions.push(option1Answer5);
        answer5.answerOptions.push(option2Answer5);
        answer5.answerOptions.push(option3Answer5);
        answer5.answerOptions.push(option4Answer5);
        answer5.answerOptions.push(option5Answer5);

        let answer6 = new Answer();
        answer6.id = 6;
        answer6.answerType = AnswerType.SingleAnswer;
        answer6.resumeName = "Apropiado - Inapropiado";
        
            let option1Answer6 = new AnswerOption;
            option1Answer6.id = 1;
            option1Answer6.text = "Extremadamente inapropiado";

            let option2Answer6 = new AnswerOption;
            option2Answer6.id = 2;
            option2Answer6.text = "Algo inapropiado";

            let option3Answer6 = new AnswerOption;
            option3Answer6.id = 3;
            option3Answer6.text = "Ni apropiado ni inapropiado";

            let option4Answer6 = new AnswerOption;
            option4Answer6.id = 4;
            option4Answer6.text = "Algo apropiado";

            let option5Answer6 = new AnswerOption;
            option5Answer6.id = 5;
            option5Answer6.text = "Extremadamente apropiado";

        answer6.answerOptions = new Array<AnswerOption>()
        answer6.answerOptions.push(option1Answer6);
        answer6.answerOptions.push(option2Answer6);
        answer6.answerOptions.push(option3Answer6);
        answer6.answerOptions.push(option4Answer6);
        answer6.answerOptions.push(option5Answer6);

        let answer7 = new Answer();
        answer7.id = 7;
        answer7.answerType = AnswerType.SingleAnswer;
        answer7.resumeName = "Verdadero - Falso";
        
            let option1Answer7 = new AnswerOption;
            option1Answer7.id = 1;
            option1Answer7.text = "Definitivamente falso";

            let option2Answer7 = new AnswerOption;
            option2Answer7.id = 2;
            option2Answer7.text = "Probablemente falso";

            let option3Answer7 = new AnswerOption;
            option3Answer7.id = 3;
            option3Answer7.text = "Ni cierto ni falso";

            let option4Answer7 = new AnswerOption;
            option4Answer7.id = 4;
            option4Answer7.text = "Probablemente cierto";

            let option5Answer7 = new AnswerOption;
            option5Answer7.id = 5;
            option5Answer7.text = "Definitivamente cierto";

        answer7.answerOptions = new Array<AnswerOption>()
        answer7.answerOptions.push(option1Answer7);
        answer7.answerOptions.push(option2Answer7);
        answer7.answerOptions.push(option3Answer7);
        answer7.answerOptions.push(option4Answer7);
        answer7.answerOptions.push(option5Answer7);

        let answer8 = new Answer();
        answer8.id = 8;
        answer8.answerType = AnswerType.SingleAnswer;
        answer8.resumeName = "Si - No";
        
            let option1Answer8 = new AnswerOption;
            option1Answer8.id = 1;
            option1Answer8.text = "Definitivamente no";

            let option2Answer8 = new AnswerOption;
            option2Answer8.id = 2;
            option2Answer8.text = "Probablemente no";

            let option3Answer8 = new AnswerOption;
            option3Answer8.id = 3;
            option3Answer8.text = "Tal vez si o tal vez no";

            let option4Answer8 = new AnswerOption;
            option4Answer8.id = 4;
            option4Answer8.text = "Probablemente si";

            let option5Answer8 = new AnswerOption;
            option5Answer8.id = 5;
            option5Answer8.text = "Definitivamente si";

        answer8.answerOptions = new Array<AnswerOption>()
        answer8.answerOptions.push(option1Answer8);
        answer8.answerOptions.push(option2Answer8);
        answer8.answerOptions.push(option3Answer8);
        answer8.answerOptions.push(option4Answer8);
        answer8.answerOptions.push(option5Answer8);

        let answer9 = new Answer();
        answer9.id = 9;
        answer9.answerType = AnswerType.SingleAnswer;
        answer9.resumeName = "Promedio";
        
            let option1Answer9 = new AnswerOption;
            option1Answer9.id = 1;
            option1Answer9.text = "Muy por debajo del promedio";

            let option2Answer9 = new AnswerOption;
            option2Answer9.id = 2;
            option2Answer9.text = "Algo por debajo del promedio";

            let option3Answer9 = new AnswerOption;
            option3Answer9.id = 3;
            option3Answer9.text = "Promedio";

            let option4Answer9 = new AnswerOption;
            option4Answer9.id = 4;
            option4Answer9.text = "Algo por encima del promedio";

            let option5Answer9 = new AnswerOption;
            option5Answer9.id = 5;
            option5Answer9.text = "Muy por encima del promedio";

        answer9.answerOptions = new Array<AnswerOption>()
        answer9.answerOptions.push(option1Answer9);
        answer9.answerOptions.push(option2Answer9);
        answer9.answerOptions.push(option3Answer9);
        answer9.answerOptions.push(option4Answer9);
        answer9.answerOptions.push(option5Answer9);

        let answer10 = new Answer();
        answer10.id = 10;
        answer10.answerType = AnswerType.SingleAnswer;
        answer10.resumeName = "Mejor - Peor";
        
            let option1Answer10 = new AnswerOption;
            option1Answer10.id = 1;
            option1Answer10.text = "Mucho peor";

            let option2Answer10 = new AnswerOption;
            option2Answer10.id = 2;
            option2Answer10.text = "Un poco peor";

            let option3Answer10 = new AnswerOption;
            option3Answer10.id = 3;
            option3Answer10.text = "Lo mismo";

            let option4Answer10 = new AnswerOption;
            option4Answer10.id = 4;
            option4Answer10.text = "Un poco mejor";

            let option5Answer10 = new AnswerOption;
            option5Answer10.id = 5;
            option5Answer10.text = "Mucho mejor";

        answer10.answerOptions = new Array<AnswerOption>()
        answer10.answerOptions.push(option1Answer10);
        answer10.answerOptions.push(option2Answer10);
        answer10.answerOptions.push(option3Answer10);
        answer10.answerOptions.push(option4Answer10);
        answer10.answerOptions.push(option5Answer10);

        let answer11 = new Answer();
        answer11.id = 11;
        answer11.answerType = AnswerType.SingleAnswer;
        answer11.resumeName = "Fácil - Díficil";
        
            let option1Answer11 = new AnswerOption;
            option1Answer11.id = 1;
            option1Answer11.text = "Extremada difícil";

            let option2Answer11 = new AnswerOption;
            option2Answer11.id = 2;
            option2Answer11.text = "Difícil";

            let option3Answer11 = new AnswerOption;
            option3Answer11.id = 3;
            option3Answer11.text = "Ni fácil ni difícil";

            let option4Answer11 = new AnswerOption;
            option4Answer11.id = 4;
            option4Answer11.text = "Fácil";

            let option5Answer11 = new AnswerOption;
            option5Answer11.id = 5;
            option5Answer11.text = "Extremadamente fácil";

        answer11.answerOptions = new Array<AnswerOption>()
        answer11.answerOptions.push(option1Answer11);
        answer11.answerOptions.push(option2Answer11);
        answer11.answerOptions.push(option3Answer11);
        answer11.answerOptions.push(option4Answer11);
        answer11.answerOptions.push(option5Answer11);

        let answer12 = new Answer();
        answer12.id = 12;
        answer12.answerType = AnswerType.SingleAnswer;
        answer12.resumeName = "Efectivo - Ineficaz";
        
            let option1Answer12 = new AnswerOption;
            option1Answer12.id = 1;
            option1Answer12.text = "Extremadamente ineficaz";

            let option2Answer12 = new AnswerOption;
            option2Answer12.id = 2;
            option2Answer12.text = "Inaficaz";

            let option3Answer12 = new AnswerOption;
            option3Answer12.id = 3;
            option3Answer12.text = "Normal";

            let option4Answer12 = new AnswerOption;
            option4Answer12.id = 4;
            option4Answer12.text = "Eficaz";

            let option5Answer12 = new AnswerOption;
            option5Answer12.id = 5;
            option5Answer12.text = "Extremadamente eficaz";

        answer12.answerOptions = new Array<AnswerOption>()
        answer12.answerOptions.push(option1Answer12);
        answer12.answerOptions.push(option2Answer12);
        answer12.answerOptions.push(option3Answer12);
        answer12.answerOptions.push(option4Answer12);
        answer12.answerOptions.push(option5Answer12);

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