import { Injectable, Output, EventEmitter } from '@angular/core';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { AnswerOption } from '../models/answer-option';
import { Site } from '../models/site';
import { Language } from '../models/laguage';
import { Square } from '../models/square';
import { Hotel } from '../models/hotel';
import { Survey } from '../models/survey';
import { Area } from '../models/area';
import { AnswerType } from '../enums/class-enum';
import { Department } from '../models/department';
import { Cruise } from '../models/cruise';

@Injectable({
    providedIn: 'root'
})
export class SurveyCaptureServices
{
    public language: Language;
    public hotels: Array<{ squareId: number, hotelId: number }>;
    public cruises: Array<Cruise>;
    public questions: Array<Question>;
    private answers: Array<Answer>;
    public nameSurvey: string;
    @Output() rowSelected: EventEmitter<number>;

    constructor() {
        this.questions = new Array<Question>();
        this.answers = new Array<Answer>();
        this.rowSelected = new EventEmitter<number>();
        this.hotels = new Array<{ squareId: number, hotelId: number }>();
        this.cruises = new Array<Cruise>();
    }

    initialize() {
        this.language = new Language();
        this.hotels = new Array<{ squareId: number, hotelId: number }>();
        this.cruises = new Array<Cruise>();
        this.questions = new Array<Question>();
        this.answers = new Array<Answer>();
        this.nameSurvey = "";
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

    generateNewSurvey(): Survey {
        let newSurvey: Survey = new Survey();

        newSurvey.name = this.nameSurvey;
        newSurvey.language = this.language;
        newSurvey.questions = this.questions;
        newSurvey.hotels = this.hotels;

        return newSurvey;
    }

    getLanguageSelected(): Language {
        return this.language;
    }

    getNewSurvey(): Survey {
        let survey = new Survey();

        survey.language = this.language;
        survey.questions = this.questions;
        survey.name = this.nameSurvey;

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

    addHotel(square: Square, hotel: Hotel) {
        this.hotels.push({
            squareId: square.id,
            hotelId: hotel.id
        });
    }

    removeHotel(square: Square, hotel: Hotel) {
       for(let i = 0; i < this.hotels.length; i++) {
           if(square.id == this.hotels[i].squareId && hotel.id == this.hotels[i].hotelId) {
               this.hotels.splice(i, 1);
               break;
           }
       }
    }

    removeAllCruises() {
        this.cruises = [];
    }

    setAcceptNA(idQuestion: number, acceptNA: boolean) {
        let index = idQuestion - 1;
        this.questions[index].acceptNA = acceptNA;
    }

    setJustifyAnswer(idQuestion: number, justify: boolean) {
        let index = idQuestion - 1;
        this.questions[index].justifyAnswer = justify;
    }

    setArea(idQuestion: number, area: Area) {
        let index = idQuestion - 1;
        this.questions[index].area = area;
    }

    setDepartment(idQuestion: number, department: Department) {
        let index = idQuestion - 1;
        this.questions[index].department = department;
    }

    addCruise(cruise: Cruise) {
        this.cruises.push(cruise);
    }

    removeCruise(cruise: Cruise) {
        
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
            option1Answer5.text = "Muy insatisfecho";

            let option2Answer5 = new AnswerOption;
            option2Answer5.id = 2;
            option2Answer5.text = "Insatisfecho";

            let option3Answer5 = new AnswerOption;
            option3Answer5.id = 3;
            option3Answer5.text = "Ni satisfecho ni insatisfecho";

            let option4Answer5 = new AnswerOption;
            option4Answer5.id = 4;
            option4Answer5.text = "Satisfecho";

            let option5Answer5 = new AnswerOption;
            option5Answer5.id = 5;
            option5Answer5.text = "Muy satisfecho";

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
            option1Answer6.text = "Muy inapropiado";

            let option2Answer6 = new AnswerOption;
            option2Answer6.id = 2;
            option2Answer6.text = "Inapropiado";

            let option3Answer6 = new AnswerOption;
            option3Answer6.id = 3;
            option3Answer6.text = "Ni apropiado ni inapropiado";

            let option4Answer6 = new AnswerOption;
            option4Answer6.id = 4;
            option4Answer6.text = "Apropiado";

            let option5Answer6 = new AnswerOption;
            option5Answer6.id = 5;
            option5Answer6.text = "Muy apropiado";

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
            option1Answer8.text = "No";

            let option2Answer8 = new AnswerOption;
            option2Answer8.id = 2;
            option2Answer8.text = "Si";

        answer8.answerOptions = new Array<AnswerOption>()
        answer8.answerOptions.push(option1Answer8);
        answer8.answerOptions.push(option2Answer8);

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
            option2Answer10.text = "Peor";

            let option3Answer10 = new AnswerOption;
            option3Answer10.id = 3;
            option3Answer10.text = "Es lo mismo";

            let option4Answer10 = new AnswerOption;
            option4Answer10.id = 4;
            option4Answer10.text = "Mejor";

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
            option1Answer11.text = "Muy difícil";

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
            option5Answer11.text = "Muy fácil";

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
            option1Answer12.text = "Muy ineficaz";

            let option2Answer12 = new AnswerOption;
            option2Answer12.id = 2;
            option2Answer12.text = "Ineficaz";

            let option3Answer12 = new AnswerOption;
            option3Answer12.id = 3;
            option3Answer12.text = "Normal";

            let option4Answer12 = new AnswerOption;
            option4Answer12.id = 4;
            option4Answer12.text = "Eficaz";

            let option5Answer12 = new AnswerOption;
            option5Answer12.id = 5;
            option5Answer12.text = "Muy eficaz";

        answer12.answerOptions = new Array<AnswerOption>()
        answer12.answerOptions.push(option1Answer12);
        answer12.answerOptions.push(option2Answer12);
        answer12.answerOptions.push(option3Answer12);
        answer12.answerOptions.push(option4Answer12);
        answer12.answerOptions.push(option5Answer12);

        let answer13 = new Answer();
        answer13.id = 13;
        answer13.answerType = AnswerType.SingleAnswer;
        answer13.resumeName = "Bueno - Malo";
        
            let option1Answer13 = new AnswerOption;
            option1Answer13.id = 1;
            option1Answer13.text = "Muy malo";

            let option2Answer13 = new AnswerOption;
            option2Answer13.id = 2;
            option2Answer13.text = "Malo";

            let option3Answer13 = new AnswerOption;
            option3Answer13.id = 3;
            option3Answer13.text = "Ni bueno ni malo";

            let option4Answer13 = new AnswerOption;
            option4Answer13.id = 4;
            option4Answer13.text = "Bueno";

            let option5Answer13 = new AnswerOption;
            option5Answer13.id = 5;
            option5Answer13.text = "Muy bueno";

        answer13.answerOptions = new Array<AnswerOption>()
        answer13.answerOptions.push(option1Answer13);
        answer13.answerOptions.push(option2Answer13);
        answer13.answerOptions.push(option3Answer13);
        answer13.answerOptions.push(option4Answer13);
        answer13.answerOptions.push(option5Answer13);

        let answer14 = new Answer();
        answer14.id = 14;
        answer14.answerType = AnswerType.SingleAnswer;
        answer14.resumeName = "Rápido - Lento";
        
            let option1Answer14 = new AnswerOption;
            option1Answer14.id = 1;
            option1Answer14.text = "Muy lento";

            let option2Answer14 = new AnswerOption;
            option2Answer14.id = 2;
            option2Answer14.text = "Lento";

            let option3Answer14 = new AnswerOption;
            option3Answer14.id = 3;
            option3Answer14.text = "Normal";

            let option4Answer14 = new AnswerOption;
            option4Answer14.id = 4;
            option4Answer14.text = "Rápido";

            let option5Answer14 = new AnswerOption;
            option5Answer14.id = 5;
            option5Answer14.text = "Muy rápido";

        answer14.answerOptions = new Array<AnswerOption>()
        answer14.answerOptions.push(option1Answer14);
        answer14.answerOptions.push(option2Answer14);
        answer14.answerOptions.push(option3Answer14);
        answer14.answerOptions.push(option4Answer14);
        answer14.answerOptions.push(option5Answer14);

        let answer15 = new Answer();
        answer15.id = 15;
        answer15.answerType = AnswerType.SingleAnswer;
        answer15.resumeName = "Probable - Improbable";
        
            let option1Answer15 = new AnswerOption;
            option1Answer15.id = 1;
            option1Answer15.text = "Muy improbable";

            let option2Answer15 = new AnswerOption;
            option2Answer15.id = 2;
            option2Answer15.text = "Algo improbable";

            let option3Answer15 = new AnswerOption;
            option3Answer15.id = 3;
            option3Answer15.text = "Ni probable ni improbable";

            let option4Answer15 = new AnswerOption;
            option4Answer15.id = 4;
            option4Answer15.text = "Algo probable";

            let option5Answer15 = new AnswerOption;
            option5Answer15.id = 5;
            option5Answer15.text = "Muy probale";

        answer15.answerOptions = new Array<AnswerOption>()
        answer15.answerOptions.push(option1Answer15);
        answer15.answerOptions.push(option2Answer15);
        answer15.answerOptions.push(option3Answer15);
        answer15.answerOptions.push(option4Answer15);
        answer15.answerOptions.push(option5Answer15);

        let answer16 = new Answer();
        answer16.id = 16;
        answer16.answerType = AnswerType.SingleAnswer;
        answer16.resumeName = "Feliz - Infeliz";
        
            let option1Answer16 = new AnswerOption;
            option1Answer16.id = 1;
            option1Answer16.text = "Muy infeliz";

            let option2Answer16 = new AnswerOption;
            option2Answer16.id = 2;
            option2Answer16.text = "Infeliz";

            let option3Answer16 = new AnswerOption;
            option3Answer16.id = 3;
            option3Answer16.text = "Normal";

            let option4Answer16 = new AnswerOption;
            option4Answer16.id = 4;
            option4Answer16.text = "Feliz";

            let option5Answer16 = new AnswerOption;
            option5Answer16.id = 5;
            option5Answer16.text = "Muy feliz";

        answer16.answerOptions = new Array<AnswerOption>()
        answer16.answerOptions.push(option1Answer16);
        answer16.answerOptions.push(option2Answer16);
        answer16.answerOptions.push(option3Answer16);
        answer16.answerOptions.push(option4Answer16);
        answer16.answerOptions.push(option5Answer16);

        let answer17 = new Answer();
        answer17.id = 17;
        answer17.answerType = AnswerType.SingleAnswer;
        answer17.resumeName = "Útil - Inútil";
        
            let option1Answer17 = new AnswerOption;
            option1Answer17.id = 1;
            option1Answer17.text = "Muy inútil";

            let option2Answer17 = new AnswerOption;
            option2Answer17.id = 2;
            option2Answer17.text = "Algo inútil";

            let option3Answer17 = new AnswerOption;
            option3Answer17.id = 3;
            option3Answer17.text = "Normal";

            let option4Answer17 = new AnswerOption;
            option4Answer17.id = 4;
            option4Answer17.text = "Algo útil";

            let option5Answer17 = new AnswerOption;
            option5Answer17.id = 5;
            option5Answer17.text = "Muy útil";

        answer17.answerOptions = new Array<AnswerOption>()
        answer17.answerOptions.push(option1Answer17);
        answer17.answerOptions.push(option2Answer17);
        answer17.answerOptions.push(option3Answer17);
        answer17.answerOptions.push(option4Answer17);
        answer17.answerOptions.push(option5Answer17);

        let answer18 = new Answer();
        answer18.id = 18;
        answer18.answerType = AnswerType.SingleAnswer;
        answer18.resumeName = "Importante - Sin importancia";
        
            let option1Answer18 = new AnswerOption;
            option1Answer18.id = 1;
            option1Answer18.text = "Sin importancia";

            let option2Answer18 = new AnswerOption;
            option2Answer18.id = 2;
            option2Answer18.text = "Poco importante";

            let option3Answer18 = new AnswerOption;
            option3Answer18.id = 3;
            option3Answer18.text = "Neutral";

            let option4Answer18 = new AnswerOption;
            option4Answer18.id = 4;
            option4Answer18.text = "Importante";

            let option5Answer18 = new AnswerOption;
            option5Answer18.id = 5;
            option5Answer18.text = "Muy importante";

        answer18.answerOptions = new Array<AnswerOption>()
        answer18.answerOptions.push(option1Answer18);
        answer18.answerOptions.push(option2Answer18);
        answer18.answerOptions.push(option3Answer18);
        answer18.answerOptions.push(option4Answer18);
        answer18.answerOptions.push(option5Answer18);

        let answer19 = new Answer();
        answer19.id = 19;
        answer19.answerType = AnswerType.SingleAnswer;
        answer19.resumeName = "";
        
            let option1Answer19 = new AnswerOption;
            option1Answer19.id = 1;
            option1Answer19.text = "Muy insatisfecho";

            let option2Answer19 = new AnswerOption;
            option2Answer19.id = 2;
            option2Answer19.text = "Insatisfecho";

            let option3Answer19 = new AnswerOption;
            option3Answer19.id = 3;
            option3Answer19.text = "Moderadamente satisfecho";

            let option4Answer19 = new AnswerOption;
            option4Answer19.id = 4;
            option4Answer19.text = "Satisfecho";

            let option5Answer19 = new AnswerOption;
            option5Answer19.id = 5;
            option5Answer19.text = "Muy satisfecho";

        answer19.answerOptions = new Array<AnswerOption>()
        answer19.answerOptions.push(option1Answer19);
        answer19.answerOptions.push(option2Answer19);
        answer19.answerOptions.push(option3Answer19);
        answer19.answerOptions.push(option4Answer19);
        answer19.answerOptions.push(option5Answer19);

        let answer20 = new Answer();
        answer20.id = 20;
        answer20.answerType = AnswerType.SingleAnswer;
        answer20.resumeName = "Me gusta - No me gusta";
        
            let option1Answer20 = new AnswerOption;
            option1Answer20.id = 1;
            option1Answer20.text = "Me desagrada";

            let option2Answer20 = new AnswerOption;
            option2Answer20.id = 2;
            option2Answer20.text = "No me gusta";

            let option3Answer20 = new AnswerOption;
            option3Answer20.id = 3;
            option3Answer20.text = "Ni me gusta ni me disgusta";

            let option4Answer20 = new AnswerOption;
            option4Answer20.id = 4;
            option4Answer20.text = "Me gusta";

            let option5Answer20 = new AnswerOption;
            option5Answer20.id = 5;
            option5Answer20.text = "Me gusta mucho";

        answer20.answerOptions = new Array<AnswerOption>()
        answer20.answerOptions.push(option1Answer20);
        answer20.answerOptions.push(option2Answer20);
        answer20.answerOptions.push(option3Answer20);
        answer20.answerOptions.push(option4Answer20);
        answer20.answerOptions.push(option5Answer20);

        let answer21 = new Answer();
        answer21.id = 21;
        answer21.answerType = AnswerType.SingleAnswer;
        answer21.resumeName = "Mejor - Peor";
        
            let option1Answer21 = new AnswerOption;
            option1Answer21.id = 1;
            option1Answer21.text = "Terribe";

            let option2Answer21 = new AnswerOption;
            option2Answer21.id = 2;
            option2Answer21.text = "Pobre";

            let option3Answer21 = new AnswerOption;
            option3Answer21.id = 3;
            option3Answer21.text = "Normal";

            let option4Answer21 = new AnswerOption;
            option4Answer21.id = 4;
            option4Answer21.text = "Bueno";

            let option5Answer21 = new AnswerOption;
            option5Answer21.id = 5;
            option5Answer21.text = "Excelente";

        answer21.answerOptions = new Array<AnswerOption>()
        answer21.answerOptions.push(option1Answer21);
        answer21.answerOptions.push(option2Answer21);
        answer21.answerOptions.push(option3Answer21);
        answer21.answerOptions.push(option4Answer21);
        answer21.answerOptions.push(option5Answer21);

        let answer22 = new Answer();
        answer22.id = 22;
        answer22.answerType = AnswerType.SingleAnswer;
        answer22.resumeName = "Cómodo - Incómodo";
        
            let option1Answer22 = new AnswerOption;
            option1Answer22.id = 1;
            option1Answer22.text = "Muy incómodo";

            let option2Answer22 = new AnswerOption;
            option2Answer22.id = 2;
            option2Answer22.text = "Incómodo";

            let option3Answer22 = new AnswerOption;
            option3Answer22.id = 3;
            option3Answer22.text = "Normal";

            let option4Answer22 = new AnswerOption;
            option4Answer22.id = 4;
            option4Answer22.text = "Cómodo";

            let option5Answer22 = new AnswerOption;
            option5Answer22.id = 5;
            option5Answer22.text = "Muy cómodo";

        answer22.answerOptions = new Array<AnswerOption>()
        answer22.answerOptions.push(option1Answer22);
        answer22.answerOptions.push(option2Answer22);
        answer22.answerOptions.push(option3Answer22);
        answer22.answerOptions.push(option4Answer22);
        answer22.answerOptions.push(option5Answer22);

        let answer23 = new Answer();
        answer23.id = 23;
        answer23.answerType = AnswerType.SingleAnswer;
        answer23.resumeName = "Interesante - Nada interesante";
        
            let option1Answer23 = new AnswerOption;
            option1Answer23.id = 1;
            option1Answer23.text = "Nada interesante";

            let option2Answer23 = new AnswerOption;
            option2Answer23.id = 2;
            option2Answer23.text = "Un poco interesante";

            let option3Answer23 = new AnswerOption;
            option3Answer23.id = 3;
            option3Answer23.text = "Moderadamente interesante";

            let option4Answer23 = new AnswerOption;
            option4Answer23.id = 4;
            option4Answer23.text = "Interesante";

            let option5Answer23 = new AnswerOption;
            option5Answer23.id = 5;
            option5Answer23.text = "Muy interesante";

        answer23.answerOptions = new Array<AnswerOption>()
        answer23.answerOptions.push(option1Answer23);
        answer23.answerOptions.push(option2Answer23);
        answer23.answerOptions.push(option3Answer23);
        answer23.answerOptions.push(option4Answer23);
        answer23.answerOptions.push(option5Answer23);

        let answer24 = new Answer();
        answer24.id = 24;
        answer24.answerType = AnswerType.SingleAnswer;
        answer24.resumeName = "Bien - Mal";
        
            let option1Answer24 = new AnswerOption;
            option1Answer24.id = 1;
            option1Answer24.text = "Muy mal";

            let option2Answer24 = new AnswerOption;
            option2Answer24.id = 2;
            option2Answer24.text = "Mal";

            let option3Answer24 = new AnswerOption;
            option3Answer24.id = 3;
            option3Answer24.text = "Normal";

            let option4Answer24 = new AnswerOption;
            option4Answer24.id = 4;
            option4Answer24.text = "Bien";

            let option5Answer24 = new AnswerOption;
            option5Answer24.id = 5;
            option5Answer24.text = "Muy bien";

        answer24.answerOptions = new Array<AnswerOption>()
        answer24.answerOptions.push(option1Answer24);
        answer24.answerOptions.push(option2Answer24);
        answer24.answerOptions.push(option3Answer24);
        answer24.answerOptions.push(option4Answer24);
        answer24.answerOptions.push(option5Answer24);

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

        /*
        return this.answers.sort((a, b) => {
            if (a.resumeName > b.resumeName) {
                return 1;
            }
            if (b.resumeName > a.resumeName) {
                return -1;
            }
            return 0;
        });
        */

        return this.answers;
    }
}