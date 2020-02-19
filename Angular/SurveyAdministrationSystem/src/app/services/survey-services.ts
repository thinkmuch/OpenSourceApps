import { SurveySummary } from '../models/survey-summary';
import { Injectable } from '@angular/core';
import { Survey } from '../models/survey';

@Injectable({
    providedIn: 'root'
})
export class SurveyServices
{
    private surveys = new Array<SurveySummary>();

    saveSurvey(survey: Survey) {
        console.log(survey);
    }

    getAllSurveysSummary() : Array<SurveySummary>{

        this.surveys = [];

        let survey1 = new SurveySummary();
        survey1.id = 1;
        survey1.name = "Vida Vacations";
        survey1.lastModified = "Ene 23, 2020";
        survey1.status = 1;
        survey1.statusDescripcion = "Activa";
        survey1.totalQuestions = 15;
        survey1.lenguages = 3;
        survey1.plazas = 6;
        survey1.owner = true;
        
        this.surveys.push(survey1);

        return this.surveys;
    }

    deleteSurvey(id: number) {

        for( var i = 0; i < this.surveys.length; i++){ 
            if ( this.surveys[i].id === id) {
              this.surveys.splice(i, 1); 
            }
         }
    }
}