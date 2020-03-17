import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';
import { AnswerServices } from 'src/app/services/answer-services';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-config-options',
  templateUrl: './config-options.component.html',
  styleUrls: ['./config-options.component.css']
})
export class ConfigOptionsComponent implements OnInit {

  @Input("idQuestionInput") idQuestion: number;
  @ViewChild("checkForceResponse", { read: ElementRef }) checkForceResponse: ElementRef;
  @ViewChild("matCheckAcceptNA", { read: ElementRef }) matCheckAcceptNA: ElementRef;
  @ViewChild("justifyAnswerInput", { read: ElementRef }) justifyAnswerInput: ElementRef;

  constructor(
    private _surveyCaptureServices: SurveyCaptureServices,
    private _answerServices: AnswerServices
  ) { }

  ngOnInit() {
    this._answerServices.answerSelected.subscribe((idQuestion: number) => {
      let question: Question = this._surveyCaptureServices.getQuestionById(idQuestion);
      this.setConfigOptions(question);
    });
  }

  onChangeForceResponse(checked: boolean) {
    this._surveyCaptureServices.setResponseAnswer(this.idQuestion, checked);
  }

  onChangeAcceptNA(checked: boolean) {
    this._surveyCaptureServices.setAcceptNA(this.idQuestion, checked);
  }

  onChangeJustifyAnswer(checked: boolean) {
    this._surveyCaptureServices.setJustifyAnswer(this.idQuestion, checked);
  }

  setConfigOptions(question: Question) {
    this.matCheckAcceptNA.nativeElement.checked = false;
    this.checkForceResponse.nativeElement.checked = question.forceResponse;
    this.justifyAnswerInput.nativeElement.checked = question.justifyAnswer;
  }
}