import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Question } from 'src/app/models/question';
import { AnswerServices } from 'src/app/services/answer-services';
import { Answer } from 'src/app/models/answer';
import { MatDialog } from '@angular/material';
import { SitesCatalogModalComponent } from "./sites-catalog-modal/sites-catalog-modal.component";
import { ViewServices } from 'src/app/services/view-services';
import { Alerts } from 'src/app/enums/class-enum';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';

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

  answer: Answer;
  showSitesCatalog: boolean;
  selected: boolean;

  constructor(
    public _surveyCaptureServices: SurveyCaptureServices,
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
    this.renderer.removeClass(this.inputText.nativeElement, Alerts.Danger);
  }

  updateQuestionText(text: string, idQuestion: number) {
    this._surveyCaptureServices.updateQuestionText(idQuestion, text);
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

    this._surveyCaptureServices.rowSelected.emit(idQuestion);
    this._answerServices.showOptions.emit(true);
    this._answerServices.answerSelected.emit(idQuestion);
  }

  selectNewRow() {
    this.renderer.addClass(this.rowQuestion.nativeElement, "selected");
  }

  openCatalogSitesModal(idQuestion: number) {

    // ¿Ya seleccionó hotel y plaza?

    this._matDialog.open(SitesCatalogModalComponent, {
      width: '800px',
      data: { idQuestion: idQuestion}
    });
  }
}