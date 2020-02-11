import { Component, OnInit } from '@angular/core';
import { QuestionServices } from 'src/app/services/question-services';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-neweditsurvey',
  templateUrl: './new-edit-survey.component.html',
  styleUrls: ['./new-edit-survey.component.css']
})
export class NewEditSurveyComponent implements OnInit {

  isPredefinedChecked: boolean;
  questions: Array<Question>;

  constructor(
    private _questionServices: QuestionServices
  ) {
    this.questions = new Array<Question>();
  }

  ngOnInit() {
    this.questions = this._questionServices.getQuestions();
    document.getElementById("surveyName").focus();
  }

  addQuestion() {
    this._questionServices.addQuestion();
  }
}
