import { Component, OnInit, Input } from '@angular/core';
import { QuestionServices } from 'src/app/services/question-services';
import { AnswerOption } from 'src/app/models/AnswerOption';

@Component({
  selector: 'app-multiplechoises',
  templateUrl: './multiple-choises-preview.component.html',
  styleUrls: ['./multiple-choises-preview.component.css']
})
export class MultipleChoisesPreviewComponent implements OnInit {

  @Input() idQuestionInput: number;

  constructor(
    public _questionServices: QuestionServices
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
