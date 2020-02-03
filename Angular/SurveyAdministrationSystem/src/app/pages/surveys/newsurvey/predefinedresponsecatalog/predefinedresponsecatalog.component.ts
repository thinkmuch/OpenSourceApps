import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
import { QuestionServices, AnswerType } from 'src/app/services/QuestionServices';
import { AnswerServices } from 'src/app/services/AnswerServices';

@Component({
  selector: 'app-predefinedresponsecatalog',
  templateUrl: './predefinedresponsecatalog.component.html',
  styleUrls: ['./predefinedresponsecatalog.component.css']
})
export class PredefinedResponseCatalogComponent implements OnInit {

  public disablePredefined: boolean;
  public answers: Array<Answer>;
  private idQuestionSelected: number;
  public answerName: string;

  @ViewChild("checkPredefinedAnswer", {read: ElementRef }) checkSingeAnswer: ElementRef;
  @ViewChild("checkFreeText", {read: ElementRef }) checkFreeText: ElementRef;
  @ViewChild("checkMultitpleOptions", {read: ElementRef }) checkMultipleOptions: ElementRef;

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

    this._answerServices.answerSelected.subscribe((answer: Answer) => {
      this.setSelectedAnswer(answer);
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
  }

  setSelectedAnswer(answer: Answer) {
    if(answer == undefined || answer.answerType == 0) {
      this.selectDefaultOption()
    }
    else {
      this.answerName = (answer.resumeName == undefined) ? "" : answer.resumeName;
      this.disablePredefined = !(answer.answerType == AnswerType.SingleAnswer);

      this.checkMultipleOptions.nativeElement.checked = false;
      this.checkSingeAnswer.nativeElement.checked = false;
      this.checkFreeText.nativeElement.checked = false;

      switch(answer.answerType) {
        case AnswerType.FreeText: this.checkFreeText.nativeElement.checked = true; break;
        case AnswerType.SingleAnswer: this.checkSingeAnswer.nativeElement.checked = true; break;
        case AnswerType.MultipleChoises: this.checkMultipleOptions.nativeElement.checked = true; break;
      }
    }
  }

  ngOnInit() {
    this.answers = this._questionServices.getAnswers();
  }

  isQuestionSelected() {
    return (this.idQuestionSelected != undefined && this.idQuestionSelected != null);
  }

  onClickAnswerType(answer: Answer, option: number, type: AnswerType) {
    if(this.isQuestionSelected()) {
      this.disablePredefined = (option != 1);
      this._questionServices.setAnswer(answer, this.idQuestionSelected, type);
    }
  }
}