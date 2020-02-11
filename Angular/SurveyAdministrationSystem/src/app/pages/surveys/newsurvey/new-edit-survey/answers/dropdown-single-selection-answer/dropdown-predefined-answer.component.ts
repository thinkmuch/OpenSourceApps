import { Component, OnInit, Input } from '@angular/core';
import { QuestionServices } from 'src/app/services/question-services';
import { Answer } from 'src/app/models/answer';

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

  constructor(
    private _questionServices: QuestionServices
  ) { }

  ngOnInit() {
  }

  isQuestionSelected() {
    return (this.idQuestionSelected != undefined && this.idQuestionSelected != null);
  }

  onSelectPredefinedAnswer(answer: Answer) {
    if(this.isQuestionSelected()) {
      this._questionServices.setPredefinedAnswer(this.idQuestionSelected, answer);
    }
  }
}