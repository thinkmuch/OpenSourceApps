import { SurveySummary } from '../models/survey-summary';
import { Injectable } from '@angular/core';
import { Survey } from '../models/survey';
import { QuestionsByLanguage } from '../models/questions-by-language';
import { Question } from '../models/question';

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
            surveySummary.lenguages = this.getTotalLAnguagesBySurvey(survey.id);
            surveySummary.plazas = survey.squares.length;
            surveySummary.hoteles = survey.hotels.length;
            surveySummary.owner = true;
            
            this.surveys.push(surveySummary);
        }

        return this.surveys;
    }

    getTotalLAnguagesBySurvey(surveyId: number): number {
        let totalLAnguages: number = 0;

        if(localStorage.questionsByLanguage) {
            this.questionsByLanguage = JSON.parse(localStorage.questionsByLanguage);
        }

        this.questionsByLanguage.forEach(language => {
            if(language.surveyId == surveyId) {
                totalLAnguages++;
            }
        });

        return totalLAnguages;
    }

    saveNewSurvey(newSurvey: Survey) {

        if(localStorage.questionsByLanguage) {
            this.questionsByLanguage = JSON.parse(localStorage.questionsByLanguage);
        }

        newSurvey.id = this.questionsByLanguage.length + 1;

        this.fullSurveys.push(newSurvey);
        localStorage.fullSurveys = JSON.stringify(this.fullSurveys);

        let questions = new QuestionsByLanguage();
        questions.surveyId = newSurvey.id;
        questions.lenguage = newSurvey.language;
        questions.questions = newSurvey.questions;

        this.questionsByLanguage.push(questions);
        localStorage.questionsByLanguage = JSON.stringify(this.questionsByLanguage);
    }

    deleteSurvey(id: number) {
        for( var i = 0; i < this.surveys.length; i++){ 
            if ( this.surveys[i].id === id) {
              this.surveys.splice(i, 1); 
            }
         }
    }

    getDefaultquestionById(surveyId: number): QuestionsByLanguage {

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