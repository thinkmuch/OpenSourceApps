import { Component, OnInit } from '@angular/core';
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
  public freeTextCheck: boolean;
  public singleAnswerCheck: boolean;
  public multipleSelection: boolean;

  constructor(
    private _questionServices: QuestionServices,
    private _answerServices: AnswerServices
  ) {

    this.freeTextCheck = false;
    this.singleAnswerCheck = false;
    this.multipleSelection = false;
    this.answerName = "";
    this.disablePredefined = false;
    this.answers = new Array<Answer>();

    this._questionServices.rowSelected.subscribe(idQuestionSelected => {
      this.idQuestionSelected = idQuestionSelected;
    })

    this._answerServices.answerSelected.subscribe((answer: Answer) => {
      this.setSelectedAnswer(answer);
    });
  }

  selectDefaultOption() {
    this.multipleSelection = false;
    this.freeTextCheck = false;
    this.singleAnswerCheck = true;
    this.answerName = "";
  }

  setSelectedAnswer(answer: Answer) {

    if(answer == undefined) {
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
    this.singleAnswerCheck = false;
    this.freeTextCheck = true;
    this.disablePredefined = true;
  }

  selectSingleAnswerOption(answer: Answer) {
    this.answerName = answer.resumeName;
    this.freeTextCheck = false;
    this.singleAnswerCheck = true;
    this.disablePredefined = false;
  }

  ngOnInit() {
    this.answers = this._questionServices.getAnswers();
  }

  onClickAnswerType(option: number) {
    if(this.idQuestionSelected != undefined && this.idQuestionSelected != null) {
      this.disablePredefined = (option == 2);
      this._questionServices.quitAnswerSelected(this.idQuestionSelected);
    }
  }

  onChangeFreeText() {
    if(this.idQuestionSelected != undefined && this.idQuestionSelected != null) {
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