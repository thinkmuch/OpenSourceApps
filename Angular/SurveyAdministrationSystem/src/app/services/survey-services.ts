import { SurveySummary } from '../models/survey-summary';
import { Injectable } from '@angular/core';
import { Survey } from '../models/survey';
import { QuestionsByLanguage } from '../models/questions-by-language';
import { QuestionText } from '../models/question-text';
import { Question } from '../models/question';
import { QuestionSummary } from '../models/question-summary';

@Injectable({
    providedIn: 'root'
})
export class SurveyServices
{
    private surveys = new Array<SurveySummary>();
    public fullSurveys = new Array<Survey>();
    private questionsByLanguage: Array<QuestionsByLanguage>;

    constructor() { 
        this.fullSurveys = new Array<Survey>();
        this.questionsByLanguage = new Array<QuestionsByLanguage>();
    }

    getAllSurveysSummary() : Array<SurveySummary>{
        this.surveys = [];

        if(localStorage.fullSurveys) {
            let arraySurveys = JSON.parse(localStorage.fullSurveys);
            this.fullSurveys = arraySurveys;
        }

        for(let survey of this.fullSurveys) {
            
            let surveySummary = new SurveySummary();
            surveySummary.id = survey.id;
            surveySummary.name = survey.name;
            surveySummary.lastModified = "Ene 23, 2020";
            surveySummary.status = 0;
            surveySummary.statusDescripcion = "Inactiva";
            surveySummary.totalQuestions = survey.questions.length;
            surveySummary.lenguages = 1;
            surveySummary.plazas = survey.squares.length;
            surveySummary.hoteles = survey.hotels.length;
            surveySummary.owner = true;
            surveySummary.answeredCount = 34;
            
            this.surveys.push(surveySummary);
        }

        return this.surveys;
    }

    getQuestionsDetailBySurveyId(): Array<QuestionSummary> {
        let questions = new Array<QuestionSummary>();

        let question1 = new QuestionSummary();
        question1.id = 1;
        question1.text = "¿Su experiencia en general del espectáculo Cirque du Soleil JOYÀ?";

        let question2 = new QuestionSummary();
        question2.id = 2;
        question2.text = "¿Cómo fue su experiencia en general de Jungala Aqua Experience?";

        let question3 = new QuestionSummary();
        question3.id = 3;
        question3.text = "Atención y eficiencia del personal";

        let question4 = new QuestionSummary();
        question4.id = 4;
        question4.text = "Reservación correcta";

        let question5 = new QuestionSummary();
        question5.id = 5;
        question5.text = "Rapidez";

        let question6 = new QuestionSummary();
        question6.id = 6;
        question6.text = "Servicio de Valet parking";

        let question7 = new QuestionSummary();
        question7.id = 7;
        question7.text = "Servicio de Bell boys";

        let question8 = new QuestionSummary();
        question8.id = 8;
        question8.text = "Actitud del Personal de Recepción";

        let question9 = new QuestionSummary();
        question9.id = 9;
        question9.text = "Rapidez en el Registro";

        let question10 = new QuestionSummary();
        question10.id = 10;
        question10.text = "Rapidez en la Salida";

        let question11 = new QuestionSummary();
        question11.id = 11;
        question11.text = "Operadoras de Teléfonos del Hotel";

        let question12 = new QuestionSummary();
        question12.id = 12;
        question12.text = "Atención y Eficiencia del Concierge";

        let question13 = new QuestionSummary();
        question13.id = 13;
        question13.text = "Limpieza al Momento de llegar";

        let question14 = new QuestionSummary();
        question14.id = 14;
        question14.text = "Limpieza del baño";

        let question15 = new QuestionSummary();
        question15.id = 15;
        question15.text = "Limpieza General de la Habitación";

        let question16 = new QuestionSummary();
        question16.id = 16;
        question16.text = "Servicio de Camaristas";

        let question17 = new QuestionSummary();
        question17.id = 17;
        question17.text = "Condiciones del Mobiliario";

        let question18 = new QuestionSummary();
        question18.id = 17;
        question18.text = "Mantenimiento General de la Habitación";

        let question19 = new QuestionSummary();
        question19.id = 19;
        question19.text = "Presentación de Buffets";

        let question20 = new QuestionSummary();
        question20.id = 20;
        question20.text = "Calidad de Alimentos en Buffets";

        let question21 = new QuestionSummary();
        question21.id = 21;
        question21.text = "Calidad de alimentos en General";

        let question22 = new QuestionSummary();
        question22.id = 22;
        question22.text = "Calidad de Bebidas en General";

        let question23 = new QuestionSummary();
        question23.id = 23;
        question23.text = "Apariencia y Cortesía de meseros";

        let question24 = new QuestionSummary();
        question24.id = 24;
        question24.text = "Limpieza de las Albercas";

        let question25 = new QuestionSummary();
        question25.id = 25;
        question25.text = "Atención y Servicio en Boutique";

        let question26 = new QuestionSummary();
        question26.id = 26;
        question26.text = "Calidad del Spa";

        let question27 = new QuestionSummary();
        question27.id = 27;
        question27.text = "Atención y Servicios del Spa";

        questions.push(question1);
        questions.push(question2);
        questions.push(question3);
        questions.push(question4);
        questions.push(question5);
        questions.push(question6);
        questions.push(question7);
        questions.push(question8);
        questions.push(question9);
        questions.push(question10);
        questions.push(question11);
        questions.push(question12);
        questions.push(question13);
        questions.push(question14);
        questions.push(question15);
        questions.push(question16);
        questions.push(question17);
        questions.push(question18);
        questions.push(question19);
        questions.push(question20);
        questions.push(question21);
        questions.push(question22);
        questions.push(question23);
        questions.push(question24);
        questions.push(question25);
        questions.push(question26);
        questions.push(question27);

        return questions;
    }

    saveNewSurvey(newSurvey: Survey) {
        if(localStorage.questionsByLanguage) {
            this.questionsByLanguage = JSON.parse(localStorage.questionsByLanguage);
        }

        newSurvey.id = this.questionsByLanguage.length + 1;

        this.fullSurveys.push(newSurvey);
        localStorage.fullSurveys = JSON.stringify(this.fullSurveys);

        this.saveQuestionText(newSurvey);
    }

    getSurveyById(surveyId: number): Survey {

        if(localStorage.fullSurveys) {
            this.fullSurveys = JSON.parse(localStorage.fullSurveys);

            if(this.fullSurveys.length > 0){
                for(let i = 0; i < this.fullSurveys.length; i++) {
                    if(this.fullSurveys[i].id == surveyId) {
                        return this.fullSurveys[i];
                    }
                }
            }
        }

        return new Survey();
    }

    saveQuestionText(newSurvey: Survey) {
        let questionsText = new QuestionsByLanguage();

        questionsText.surveyId = newSurvey.id;
        questionsText.lenguage = newSurvey.language;
        questionsText.questionsText = new Array<QuestionText>();

        for(let i = 0; i < newSurvey.questions.length; i++) {

            let questionText = new QuestionText();
            questionText.id = newSurvey.questions[i].id;
            questionText.text = newSurvey.questions[i].text;
            questionsText.questionsText.push(questionText);
        }

        this.questionsByLanguage.push(questionsText);
        localStorage.questionsByLanguage = JSON.stringify(this.questionsByLanguage);
    }

    deleteSurvey(id: number) {
        for( var i = 0; i < this.surveys.length; i++){ 
            if ( this.surveys[i].id === id) {
              this.surveys.splice(i, 1); 
            }
         }
    }

    getQuestionsBySurveyId(surveyId: number): QuestionsByLanguage {
        let questions = new QuestionsByLanguage();
        this.questionsByLanguage = JSON.parse(localStorage.questionsByLanguage);

        this.questionsByLanguage.forEach(item => {
            if(item.surveyId == surveyId) {
                questions = item;
            }
        });

        return questions;
    }
}