import { Component, OnInit, Input } from '@angular/core';
import { AnswerOption } from 'src/app/models/answer-option';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';

@Component({
  selector: 'app-multiple-choises',
  templateUrl: './multiple-choises-preview.component.html',
  styleUrls: ['./multiple-choises-preview.component.css']
})
export class MultipleChoisesPreviewComponent implements OnInit {

  @Input() idQuestionInput: number;

  constructor(
    public _surveyCaptureServices: SurveyCaptureServices
  ) { }

  ngOnInit() {
    
  }

  addOption() {
    this._surveyCaptureServices.questions[this.idQuestionInput - 1].answer.answerOptions.push(new AnswerOption());
  }

  updateTextOption(idOption: number, text: string) {
    
  }

  removeOption(idOption: number) {
    this._surveyCaptureServices.removeOptionOfQuestion(this.idQuestionInput, idOption);
  }
}
