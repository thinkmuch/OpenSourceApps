import { Component, OnInit, Input } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
import { QuestionServices } from 'src/app/services/QuestionServices';
import { AnswerOption } from 'src/app/models/AnswerOption';

@Component({
  selector: 'app-multiplechoises',
  templateUrl: './multiplechoises.component.html',
  styleUrls: ['./multiplechoises.component.css']
})
export class MultipleChoisesComponent implements OnInit {

  @Input() idQuestionInput: number;

  constructor(
    private _questionServices: QuestionServices
  ) { }

  ngOnInit() {
    
  }

  addOption() {
    this._questionServices.questions[this.idQuestionInput - 1].answer.answerOptions.push(new AnswerOption());
  }

  updateTextOption(idOption: number, text: string) {
    
  }

  removeOption(idOption: number) {
    this._questionServices.removeOptionOfQuestion(this.idQuestionInput, idOption);
  }
}
