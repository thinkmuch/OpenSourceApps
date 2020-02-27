import { Component, OnInit } from '@angular/core';
import { SurveyServices } from 'src/app/services/survey-services';
import { QuestionSummary } from 'src/app/models/question-summary';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Array<QuestionSummary>;

  constructor(
    private _surveyServices: SurveyServices
  ) { }

  ngOnInit() {
    this.questions = this._surveyServices.getQuestionsDetailBySurveyId();
  }
}
