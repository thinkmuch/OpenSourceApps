import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
import { QuestionServices } from 'src/app/services/QuestionServices';
import { AnswerServices } from 'src/app/services/AnswerServices';
import { SurveyServices } from 'src/app/services/SurveyServices';

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

  constructor(
    private _questionServices: QuestionServices
  ) {

    this.answerName = "";
    this.disablePredefined = false;
    this.answers = new Array<Answer>();

    this._questionServices.rowSelected.subscribe(idQuestionSelected => {
      this.idQuestionSelected = idQuestionSelected;
    })
  }

  ngOnInit() {
    this.answers = this._questionServices.getAnswers();
  }

  onClickAnswerType(option: number) {
    this.disablePredefined = (option == 2);
  }

  onChangeFreeText(value: any) {
    this.answerName = "";
    this._questionServices.setAnswerFreeText(this.idQuestionSelected);
  }

  selectPredefinedQuestion(answer: Answer) {
    this.answerName = answer.resumeName;
    this._questionServices.setAnswerQuestion(answer, this.idQuestionSelected);
  }
}