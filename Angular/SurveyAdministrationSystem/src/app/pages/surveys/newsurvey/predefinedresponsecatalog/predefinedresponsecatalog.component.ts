import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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

  @ViewChild("checkPredefinedAnswer") checkSingeAnswer: ElementRef;
  @ViewChild("checkFreeText") checkFreeText: ElementRef;
  @ViewChild("checkMultitpleOptions") checkMultipleOptions: ElementRef;

  constructor(
    private _questionServices: QuestionServices,
    private _answerServices: AnswerServices
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
    this.disablePredefined = false;
    this.answerName = "";

    this.checkFreeText.nativeElement.checked = false;
    this.checkMultipleOptions.nativeElement.checked = false;
    this.checkSingeAnswer.nativeElement.checked = false;
  }

  setSelectedAnswer(answer: Answer) {

    if(answer == undefined || answer.answerType == 0) {
      this.selectDefaultOption()
    }
    else {
      switch(answer.answerType) {
        case AnswerType.FreeText: {
          this.selectFreeTextOption();
        }
        break;
        case AnswerType.SingleAnswer: {
          this.selectSingleAnswerOption(answer);
        }
        break;
      }
    }
  }

  selectFreeTextOption() {

    this.answerName = "";
    this.disablePredefined = true;
    this.checkMultipleOptions.nativeElement.checked = false;
    this.checkSingeAnswer.nativeElement.checked = false;
    this.checkFreeText.nativeElement.checked = true;
  }

  selectSingleAnswerOption(answer: Answer) {

    this.answerName = answer.resumeName;
    this.disablePredefined = false;
    this.checkFreeText.nativeElement.checked = false;
    this.checkMultipleOptions.nativeElement.checked = false;
    this.checkSingeAnswer.nativeElement.checked = true;
  }

  ngOnInit() {
    this.answers = this._questionServices.getAnswers();
  }

  isQuestionSelected() {
    return (this.idQuestionSelected != undefined && this.idQuestionSelected != null);
  }

  onClickAnswerType(option: number) {

    if(this.isQuestionSelected()) {
      this.disablePredefined = (option != 1);
      this._questionServices.quitAnswerSelected(this.idQuestionSelected);
    }
  }

  onChangeFreeText() {

    if(this.isQuestionSelected()) {
      this.answerName = "";
      this._questionServices.setAnswerFreeText(this.idQuestionSelected);
    }
  }

  onClickPredefinedAnswer(answer: Answer) {

    if(this.idQuestionSelected != undefined && this.idQuestionSelected != null) {
      this.answerName = answer.resumeName;
      this._questionServices.setAnswerQuestion(answer, this.idQuestionSelected);
    }
  }
}