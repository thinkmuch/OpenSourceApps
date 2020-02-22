import { SurveySummary } from '../models/survey-summary';
import { Injectable } from '@angular/core';
import { Survey } from '../models/survey';
import { QuestionsByLanguage } from '../models/questions-by-language';
import { QuestionText } from '../models/question-text';

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
            
            this.surveys.push(surveySummary);
        }

        return this.surveys;
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