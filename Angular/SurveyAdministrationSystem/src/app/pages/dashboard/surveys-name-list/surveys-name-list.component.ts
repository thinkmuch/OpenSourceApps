import { Component, OnInit, Input } from '@angular/core';
import { SurveySummary } from 'src/app/models/survey-summary';
import { SurveyServices } from 'src/app/services/survey-services';
import { QuestionSummary } from 'src/app/models/question-summary';

@Component({
  selector: 'app-surveys-name-list',
  templateUrl: './surveys-name-list.component.html',
  styleUrls: ['./surveys-name-list.component.css']
})
export class SurveysNameListComponent implements OnInit {

  @Input('surveysInput') surveys: Array<SurveySummary>;
  questions: Array<QuestionSummary>;
  
  constructor(
    private _surveyServices: SurveyServices
  ) { }

  ngOnInit() {
    this.questions = new Array<QuestionSummary>();
  }

  onClickSurvey(survey: SurveySummary){
    this.questions = this._surveyServices.getQuestionsSummary(survey.id);
    this._surveyServices.questionsSummary.emit(this.questions);
  }
}
