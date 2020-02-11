import { Component, OnInit } from '@angular/core';
import { SurveySummary } from '../../../models/survey-summary';
import { Router } from '@angular/router';
import { SurveyServices } from 'src/app/services/survey-services';

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
    this.surveys = this._surveysServices.getAllSurveysSummary();
  }

  goToNewSurvey() {
    this._router.navigate(['encuesta/nueva']);
  }
}