import { Component, OnInit } from '@angular/core';
import { SurveySummary } from '../../../models/surevysummary';
import { Router } from '@angular/router';
import { SurveyServices } from 'src/app/services/SurveyServices';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {

  surveys = new Array<SurveySummary>();

  constructor(
    private _router: Router,
    private _surveysServices: SurveyServices) { }

  ngOnInit() {

    let survey1 = new SurveySummary();
    survey1.name = "Vida Vacations";
    survey1.lastModified = "Ene 23, 2020";
    survey1.status = "Activa";
    survey1.totalQuestions = 15;
    survey1.lenguages = 3;
    survey1.plazas = 6;
    survey1.owner = true;
    this.surveys.push(survey1);

    let survey2 = new SurveySummary();
    survey2.name = "Cruises";
    survey2.lastModified = "Ene 15, 2010";
    survey2.status = "Activa";
    survey2.totalQuestions = 10;
    survey2.lenguages = 3;
    survey2.plazas = 1;
    this.surveys.push(survey2);

    let survey3 = new SurveySummary();
    survey3.name = "Vidanta Park"
    survey3.lastModified = "Feb 10, 2020";
    survey3.status = "Activa";
    survey3.totalQuestions = 18;
    survey3.lenguages = 4;
    survey3.plazas = 1;
    this.surveys.push(survey3);

    let survey4 = new SurveySummary();
    survey4.name = "Cirque Du Soleil";
    survey4.lastModified = "Dic 23, 2019";
    survey4.status = "Activa";
    survey4.totalQuestions = 19;
    survey4.lenguages = 3;
    survey4.plazas = 2;
    survey4.owner = true;
    this.surveys.push(survey4);

    let survey5 = new SurveySummary();
    survey5.name = "Vidanta Weddings";
    survey5.lastModified = "Feb 23, 2020";
    survey5.status = "Activa";
    survey5.totalQuestions = 23;
    survey5.lenguages = 2;
    survey5.plazas = 2;
    this.surveys.push(survey5);
  }

  goToNewSurvey() {
    this._router.navigate(['encuesta/nueva']);
  }
}
