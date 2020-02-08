import { Component, OnInit, Input } from '@angular/core';
import { QuestionServices } from 'src/app/services/question-services';
import { Question } from 'src/app/models/Question';
import { AnswerServices } from 'src/app/services/answer-services';
import { Answer } from 'src/app/models/Answer';
import { MatDialog } from '@angular/material';
import { SitesCatalogModalComponent } from "./sites-catalog-modal/sites-catalog-modal.component";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() questionInput: Question;
  @Input() indexInput: number;
  @Input() totalQuestionsInput: number;

  public answer: Answer;
  public showSitesCatalog: boolean;
  selected: boolean;

  constructor(
    private _questionServices: QuestionServices,
    private _answerServices: AnswerServices,
    public _matDialog: MatDialog
  ) { 
    this.showSitesCatalog = false;
  }

  ngOnInit() { }

  remove(idQuestion: number) {
    this._questionServices.removeQuestion(idQuestion);
    this._answerServices.showOptions.emit(false);
  }

  updateQuestionText(text: string, idQuestion: number) {
    this._questionServices.updateQuestionText(idQuestion, text);
  }

  moveUp(idQuestion: number) {
    this._questionServices.moveUp(idQuestion);
  }

  moveDown(idQuestion:number) {
    this._questionServices.moveDown(idQuestion);
  }

  deselectCurrentRow() {
    var deselectedRow = document.getElementsByClassName("selected")[0];
    if(deselectedRow != undefined) {
      deselectedRow.classList.remove("selected");
    }
  }

  selectQuestion(idQuestion: number, answer: Answer) {
    this.deselectCurrentRow();
    this.selectNewRow(idQuestion);

    this._questionServices.rowSelected.emit(idQuestion);
    this._answerServices.showOptions.emit(true);
    this._answerServices.answerSelected.emit(idQuestion);
  }

  selectNewRow(idQuestion: number) {
    var selectedRow = document.getElementById(`${idQuestion}`);
    if(selectedRow != undefined && selectedRow != null) {
      selectedRow.className = "selected";
    }
  }

  openCatalogSitesModal(idQuestion: number) {
    this._matDialog.open(SitesCatalogModalComponent, {
      width: '800px',
      data: { idQuestion: idQuestion}
    });
  }
}