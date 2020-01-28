import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
import { QuestionServices } from 'src/app/services/QuestionServices';

@Component({
  selector: 'app-predefinedresponsecatalog',
  templateUrl: './predefinedresponsecatalog.component.html',
  styleUrls: ['./predefinedresponsecatalog.component.css']
})
export class PredefinedresponsecatalogComponent implements OnInit {

  public disablePredefined: boolean;
  public answers: Array<Answer>;

  constructor(
    private _questionServices: QuestionServices
  ) { 
    this.disablePredefined = false;
    this.answers = new Array<Answer>();
  }

  ngOnInit() {
    this.answers = this._questionServices.getAnswers();
  }

  onClickAnswerType(option: number) {
    this.disablePredefined = (option == 2);
  }
}