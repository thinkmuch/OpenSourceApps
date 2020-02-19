import { SurveySummary } from '../models/survey-summary';
import { Injectable } from '@angular/core';
import { Survey } from '../models/survey';

@Injectable({
    providedIn: 'root'
})
export class SurveyServices
{
    private surveys = new Array<SurveySummary>();
    private fullSurveys = new Array<Survey>();

    getAllSurveysSummary() : Array<SurveySummary>{
        this.surveys = [];

        for(let survey of this.fullSurveys) {
            
            let surveySummary = new SurveySummary();
            surveySummary.id = 1;
            surveySummary.name = survey.name;
            surveySummary.lastModified = "Ene 23, 2020";
            surveySummary.status = 0;
            surveySummary.statusDescripcion = "Inactiva";
            surveySummary.totalQuestions = survey.questions.length;
            surveySummary.lenguages = 1;
            surveySummary.plazas = survey.squares.length;
            surveySummary.owner = true;
            
            this.surveys.push(surveySummary);
        }

        return this.surveys;
    }

    saveNewSurvey(newSurvey: Survey) {
        this.fullSurveys.push(newSurvey);
    }

    deleteSurvey(id: number) {
        for( var i = 0; i < this.surveys.length; i++){ 
            if ( this.surveys[i].id === id) {
              this.surveys.splice(i, 1); 
            }
         }
    }
}