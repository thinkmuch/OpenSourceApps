import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
import { QuestionServices, AnswerType } from 'src/app/services/question-services';
import { AnswerServices } from 'src/app/services/answer-services';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-predefinedresponsecatalog',
  templateUrl: './predefined-response-catalog.component.html',
  styleUrls: ['./predefined-response-catalog.component.css']
})
export class PredefinedResponseCatalogComponent implements OnInit {

  public disablePredefined: boolean;
  public answers: Array<Answer>;
  private idQuestionSelected: number;
  public answerName: string;

  @ViewChild("checkPredefinedAnswer", {read: ElementRef }) checkSingeAnswer: ElementRef;
  @ViewChild("checkFreeText", {read: ElementRef }) checkFreeText: ElementRef;
  @ViewChild("checkMultitpleOptions", {read: ElementRef }) checkMultipleOptions: ElementRef;
  @ViewChild("checkForceResponse", {read: ElementRef }) checkForceResponse: ElementRef;

  constructor(
    private _questionServices: QuestionServices,
    private _answerServices: AnswerServices,
  ) {
    this.answerName = "";
    this.disablePredefined = false;
    this.answers = new Array<Answer>();

    this._questionServices.rowSelected.subscribe(idQuestion => {
      this.idQuestionSelected = idQuestion;
    })

    this._answerServices.answerSelected.subscribe((idQuestion: number) => {
      let question: Question = this._questionServices.getQuestionById(idQuestion);
      this.setSelectedAnswer(question);
    });
  }

  selectDefaultOption() {
    this.disablePredefined = true;
    this.answerName = "";

    if(this.checkFreeText != undefined && 
       this.checkFreeText.nativeElement != undefined && 
       this.checkFreeText.nativeElement.checked != undefined) {
      this.checkFreeText.nativeElement.checked = false;
    }
    
    if(this.checkMultipleOptions != undefined &&
       this.checkMultipleOptions.nativeElement != undefined &&
       this.checkMultipleOptions.nativeElement.checked != undefined) {
      this.checkMultipleOptions.nativeElement.checked = false;
    }
    
    if(this.checkSingeAnswer != undefined &&
       this.checkSingeAnswer.nativeElement != undefined &&
       this.checkSingeAnswer.nativeElement.checked != undefined) {
      this.checkSingeAnswer.nativeElement.checked = false;
    }

    this.checkForceResponse.nativeElement.checked = false;
  }

  setSelectedAnswer(question: Question) {

    let answer: Answer = question.answer;

    if(answer == undefined || answer.answerType == 0) {
      this.selectDefaultOption()
    }
    else {

      this.answerName = (answer.resumeName == undefined) ? "" : answer.resumeName;
      this.disablePredefined = !(answer.answerType == AnswerType.SingleAnswer);

      this.checkMultipleOptions.nativeElement.checked = false;
      this.checkSingeAnswer.nativeElement.checked = false;
      this.checkFreeText.nativeElement.checked = false;

      if(answer.answerType == AnswerType.FreeText) {
        this.checkFreeText.nativeElement.checked = true;
      }
      else if(answer.answerType == AnswerType.MultipleChoises) {
        this.checkMultipleOptions.nativeElement.checked = true;
      }
      else if(answer.answerType == AnswerType.SingleAnswer) {
        this.checkSingeAnswer.nativeElement.checked = true;
      }

      this.checkForceResponse.nativeElement.checked = question.forceResponse;
    }
  }

  ngOnInit() {
    this.answers = this._questionServices.getAnswers();
  }

  isQuestionSelected() {
    return (this.idQuestionSelected != undefined && this.idQuestionSelected != null);
  }

  onClickAnswerType(answerType: AnswerType) {
    if(this.isQuestionSelected()) {

      this.disablePredefined = (answerType != AnswerType.SingleAnswer);
      this._questionServices.initializeAnswerObject(this.idQuestionSelected, answerType);

      if(answerType == AnswerType.MultipleChoises) {
        this._questionServices.initializeAnswerOptions(this.idQuestionSelected)
      }
    }
  }

  onSelectPredefinedAnswer(answer: Answer) {
    if(this.isQuestionSelected()) {
      this._questionServices.setPredefinedAnswer(this.idQuestionSelected, answer);
    }
  }

  onChangeForceResponse(checked: boolean) {
    console.log(checked);
    if(this.isQuestionSelected()) {
      this._questionServices.setResponseAnswer(this.idQuestionSelected, checked);
    }
  }
}