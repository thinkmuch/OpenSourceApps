import { Component, OnInit } from '@angular/core';
import { Answer_2 } from 'src/app/models/answer_2';
import { AnswerServices } from 'src/app/services/answer-services';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  answerNameDisabled: boolean;
  saveButtonHidden: boolean;
  cancelButtonHidden: boolean;
  newButtonHidden: boolean;
  answers: Array<Answer_2>;

  constructor(
    private _answerServices: AnswerServices
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.answers = this._answerServices.getAll();
  }

  restartScreen() {
    this.answerNameDisabled = true;
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.newButtonHidden = false;
  }

  enableEditControls() {
    this.answerNameDisabled = false;
    this.saveButtonHidden = false;
    this.cancelButtonHidden = false;
    this.newButtonHidden = true;
  }

  cancel() {
    this.restartScreen();
  }
}
