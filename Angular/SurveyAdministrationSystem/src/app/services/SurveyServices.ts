import { SurveySummary } from '../models/SurveySummary';
import { Injectable } from '@angular/core';
import { Answer } from '../models/Answer';

@Injectable({
    providedIn: 'root'
})
export class SurveyServices
{
    private surveys = new Array<SurveySummary>();

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
        
        let survey2 = new SurveySummary();
        survey2.id = 2;
        survey2.name = "Cruises";
        survey2.lastModified = "Ene 15, 2010";
        survey2.status = 1;
        survey2.statusDescripcion = "Activa";
        survey2.totalQuestions = 10;
        survey2.lenguages = 3;
        survey2.plazas = 1;
        survey2.owner = false;
        
        let survey3 = new SurveySummary();
        survey3.id = 3;
        survey3.name = "Vidanta Park"
        survey3.lastModified = "Feb 10, 2020";
        survey3.status = 0;
        survey3.statusDescripcion = "Inactiva";
        survey3.totalQuestions = 18;
        survey3.lenguages = 4;
        survey3.plazas = 1;
        survey3.owner = true;
        
        let survey4 = new SurveySummary();
        survey4.id = 4;
        survey4.name = "Cirque Du Soleil";
        survey4.lastModified = "Dic 23, 2019";
        survey4.status = 1;
        survey4.statusDescripcion = "Activa";
        survey4.totalQuestions = 19;
        survey4.lenguages = 3;
        survey4.plazas = 2;
        survey4.owner = true;
        
        let survey5 = new SurveySummary();
        survey5.id = 5;
        survey5.name = "Vidanta Weddings";
        survey5.lastModified = "Feb 23, 2020";
        survey5.status = 0;
        survey5.statusDescripcion = "Inactiva";
        survey5.totalQuestions = 23;
        survey5.lenguages = 2;
        survey5.plazas = 2;
        survey5.owner = false;

        let survey6 = new SurveySummary();
        survey6.id = 7;
        survey6.name = "La Cantina";
        survey6.lastModified = "Feb 1, 2020";
        survey6.status = 1;
        survey6.statusDescripcion = "Activa";
        survey6.totalQuestions = 10;
        survey6.lenguages = 3;
        survey6.plazas = 4;
        survey6.owner = true;
        
        this.surveys.push(survey1);
        this.surveys.push(survey2);
        this.surveys.push(survey3);
        this.surveys.push(survey4);
        this.surveys.push(survey5);
        this.surveys.push(survey6);

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