import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { QuestionServices } from 'src/app/services/question-services';
import { Question } from 'src/app/models/question';
import { AnswerServices } from 'src/app/services/answer-services';
import { Answer } from 'src/app/models/answer';
import { MatDialog } from '@angular/material';
import { SitesCatalogModalComponent } from "./sites-catalog-modal/sites-catalog-modal.component";
import { ViewServices } from 'src/app/services/view-services';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, AfterViewInit {

  @Input('questionInput') question: Question;
  @Input('indexInput') index: number;
  @Input('totalQuestionsInput') totalQuestions: number;
  @ViewChild("inputText", { read: ElementRef }) inputText: ElementRef;
  @ViewChild("rowQuestion", { read: ElementRef}) rowQuestion: ElementRef;

  public answer: Answer;
  public showSitesCatalog: boolean;
  selected: boolean;

  constructor(
    private _questionServices: QuestionServices,
    private _answerServices: AnswerServices,
    public _matDialog: MatDialog,
    private _viewServices: ViewServices,
    private renderer: Renderer2
  ) { 
    this.showSitesCatalog = false;
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this._viewServices.addControl(this.inputText);
  }

  onClickQuestionText() {
    this.renderer.removeClass(this.inputText.nativeElement, "alert-danger");
  }

  updateQuestionText(text: string, idQuestion: number) {
    this._questionServices.updateQuestionText(idQuestion, text);
  }

  deselectCurrentRow() {
    var deselectedRow = document.getElementsByClassName("selected")[0];
    if(deselectedRow != undefined) {
      deselectedRow.classList.remove("selected");
    }
  }

  selectQuestion(idQuestion: number, answer: Answer) {
    this.deselectCurrentRow();
    this.selectNewRow();

    this._questionServices.rowSelected.emit(idQuestion);
    this._answerServices.showOptions.emit(true);
    this._answerServices.answerSelected.emit(idQuestion);
  }

  selectNewRow() {
    this.renderer.addClass(this.rowQuestion.nativeElement, "selected");
  }

  openCatalogSitesModal(idQuestion: number) {
    this._matDialog.open(SitesCatalogModalComponent, {
      width: '800px',
      data: { idQuestion: idQuestion}
    });
  }
}