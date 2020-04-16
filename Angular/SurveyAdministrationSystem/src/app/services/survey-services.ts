import { SurveySummary } from '../models/survey-summary';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Survey } from '../models/survey';
import { QuestionsByLanguage } from '../models/questions-by-language';
import { QuestionSummary } from '../models/question-summary';

@Injectable({
    providedIn: 'root'
})
export class SurveyServices
{
    private surveys = new Array<SurveySummary>();
    fullSurveys = new Array<Survey>();
    private questionsByLanguage: Array<QuestionsByLanguage> = new Array<QuestionsByLanguage>();
    @Output('questionsSummaryEmmiter') questionsSummary: EventEmitter<Array<QuestionSummary>>;

    constructor() { 
        this.questionsSummary = new EventEmitter<Array<QuestionSummary>>();
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
            surveySummary.plazas = 3;
            surveySummary.hoteles = survey.hotels.length;
            surveySummary.owner = true;
            surveySummary.answeredCount = 34;
            
            this.surveys.push(surveySummary);
        }

        return this.surveys;
    }

    getQuestionsSummary(surveyId: number): Array<QuestionSummary> {

        let questions = new Array<QuestionSummary>();
        let survey = this.getSurveyById(surveyId);

        for(let i = 0; i < survey.questions.length; i++) {
            let questionSummary = new QuestionSummary();
            questionSummary.id = survey.questions[i].id;
            questionSummary.text = survey.questions[i].text;
            questions.push(questionSummary);
        }
        
        return questions;
    }

    saveNewSurvey(newSurvey: Survey) {
       console.log(newSurvey);
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