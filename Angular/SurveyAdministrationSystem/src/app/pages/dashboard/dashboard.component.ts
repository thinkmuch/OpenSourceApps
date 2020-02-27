import { Component, OnInit } from '@angular/core';
import { SurveyServices } from 'src/app/services/survey-services';
import { SurveySummary } from 'src/app/models/survey-summary';
import { QuestionSummary } from 'src/app/models/question-summary';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  surveys: Array<SurveySummary>;
  questions: Array<QuestionSummary>;

  constructor(
   private _surveyServices: SurveyServices
  ) { }

  ngOnInit() {
    this.surveys = this._surveyServices.getAllSurveysSummary();
  }
}