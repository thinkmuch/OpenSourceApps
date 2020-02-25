import { Component, OnInit, Input } from '@angular/core';
import { AnswerServices } from 'src/app/services/answer-services';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';

@Component({
  selector: 'app-question-menu',
  templateUrl: './question-menu.component.html',
  styleUrls: ['./question-menu.component.css']
})
export class QuestionMenuComponent implements OnInit {

  @Input('indexInput') index: number;
  @Input('totalQuestionsInput') totalQuestions: number;

  constructor(
    private _surveyCaptureServices: SurveyCaptureServices,
    private _answerServices: AnswerServices
  ) { }

  ngOnInit() {
  }

  moveUp(idQuestion: number) {
    this._surveyCaptureServices.moveUp(idQuestion);
  }

  moveDown(idQuestion:number) {
    this._surveyCaptureServices.moveDown(idQuestion);
  }

  remove(idQuestion: number) {
    this._surveyCaptureServices.removeQuestion(idQuestion);
    this._answerServices.showOptions.emit(false);
  }
}
