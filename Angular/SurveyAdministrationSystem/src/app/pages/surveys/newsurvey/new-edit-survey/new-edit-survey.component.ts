import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { QuestionServices } from 'src/app/services/question-services';
import { Question } from 'src/app/models/question';
import { ViewServices } from 'src/app/services/view-services';

@Component({
  selector: 'app-neweditsurvey',
  templateUrl: './new-edit-survey.component.html',
  styleUrls: ['./new-edit-survey.component.css']
})
export class NewEditSurveyComponent implements OnInit, AfterViewInit {

  isPredefinedChecked: boolean;
  questions: Array<Question>;
  @ViewChild("surveyName", { read: ElementRef }) surveyName: ElementRef;

  constructor(
    private _questionServices: QuestionServices,
    private _viewServices: ViewServices,
    private render: Renderer2
  ) {
    this.questions = new Array<Question>();
  }

  ngAfterViewInit() {
    this._viewServices.surveyName = this.surveyName;
  }

  onClickSurveyName() {
    this.render.removeClass(this.surveyName.nativeElement, "alert-danger");
  }

  ngOnInit() {
    this.questions = this._questionServices.getQuestions();
    document.getElementById("surveyName").focus();
  }

  addQuestion() {
    this._questionServices.addQuestion();
  }
}
