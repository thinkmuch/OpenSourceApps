import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';

@Component({
  selector: 'app-dropdown-predefined-answer',
  templateUrl: './dropdown-predefined-answer.component.html',
  styleUrls: ['./dropdown-predefined-answer.component.css']
})
export class DropdownPredefinedAnswerComponent implements OnInit {

  @Input('idQuestionSelectedInput') idQuestionSelected: number;
  @Input('answerNameInput') answerName: string;
  @Input('answersInput') answers: Array<Answer>;
  @Input('disablePredefinedInput') disablePredefined: boolean;
  @Output('selectPredefinedAnswerOutput') onSelectPredefinedAnswerEmitter: EventEmitter<boolean>;

  constructor(
    private _surveyCaptureServices: SurveyCaptureServices
  ) { 
    this.onSelectPredefinedAnswerEmitter = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  isQuestionSelected() {
    return (this.idQuestionSelected != undefined && this.idQuestionSelected != null);
  }

  onSelectPredefinedAnswer(answer: Answer) {
    if(this.isQuestionSelected()) {
      this.answerName = answer.resumeName;
      this._surveyCaptureServices.setPredefinedAnswer(this.idQuestionSelected, answer);
      this.onSelectPredefinedAnswerEmitter.emit(true);
    }
  }
}