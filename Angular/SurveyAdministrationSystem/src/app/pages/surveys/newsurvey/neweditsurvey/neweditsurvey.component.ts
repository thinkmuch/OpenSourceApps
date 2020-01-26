import { Component, OnInit } from '@angular/core';
import { QuestionServices } from 'src/app/services/QuestionServices';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-neweditsurvey',
  templateUrl: './neweditsurvey.component.html',
  styleUrls: ['./neweditsurvey.component.css']
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
  }
}
