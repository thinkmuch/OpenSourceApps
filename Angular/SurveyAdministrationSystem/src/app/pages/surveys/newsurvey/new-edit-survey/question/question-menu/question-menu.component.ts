import { Component, OnInit, Input } from '@angular/core';
import { QuestionServices } from 'src/app/services/question-services';
import { AnswerServices } from 'src/app/services/answer-services';

@Component({
  selector: 'app-question-menu',
  templateUrl: './question-menu.component.html',
  styleUrls: ['./question-menu.component.css']
})
export class QuestionMenuComponent implements OnInit {

  @Input('indexInput') index: number;
  @Input('totalQuestionsInput') totalQuestions: number;

  constructor(
    private _questionServices: QuestionServices,
    private _answerServices: AnswerServices
  ) { }

  ngOnInit() {
  }

  moveUp(idQuestion: number) {
    this._questionServices.moveUp(idQuestion);
  }

  moveDown(idQuestion:number) {
    this._questionServices.moveDown(idQuestion);
  }

  remove(idQuestion: number) {
    this._questionServices.removeQuestion(idQuestion);
    this._answerServices.showOptions.emit(false);
  }
}
