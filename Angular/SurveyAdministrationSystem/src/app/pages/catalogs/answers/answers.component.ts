import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Answer_2 } from 'src/app/models/answer_2';
import { AnswerServices } from 'src/app/services/answer-services';
import { Alerts } from 'src/app/enums/class-enum';
import { Alert } from 'src/app/util/Alert';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  answerNameDisabled: boolean = false;
  saveButtonHidden: boolean = false;
  cancelButtonHidden: boolean = false;
  newButtonHidden: boolean = false;
  loadingAnswers: boolean = false;
  answers: Array<Answer_2> = new Array<Answer_2>();
  answerSelected: Answer_2 = new Answer_2();
  @ViewChild("answerName", { read: ElementRef }) answerInput: ElementRef;

  constructor(
    private _answerServices: AnswerServices,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.getAllAnswers();
  }

  getAllAnswers() {
    this.loadingAnswers = true;

    this._answerServices.getAll().subscribe(
      data => {
        this.answers = data;
        this.loadingAnswers = false;
      },
      error => {
        console.log(error);
        this.loadingAnswers = false;
      }
    );
  }

  restartScreen() {
    this.answerSelected = new Answer_2();
    this.answerNameDisabled = true;
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.newButtonHidden = false;
    this.deselectAllRows();
    this._renderer.removeClass(this.answerInput.nativeElement, Alerts.Danger);
  }

  onClickNew() {
    this.enableEditControls();
  }

  enableEditControls() {
    this.answerNameDisabled = false;
    this.saveButtonHidden = false;
    this.cancelButtonHidden = false;
    this.newButtonHidden = true;
  }

  onClickSave(name: string) {
    if(name == undefined || name.trim().length == 0) {
      this._renderer.addClass(this.answerInput.nativeElement, Alerts.Danger);
      Alert.Danger("Datos incompletos", "Debe capturar el nombre de la respuesta");
    }
    else {
      this.save(name);
    }
  }

  save(name: string) {
    this._answerServices.save(name).subscribe(
      () => {
        this.restartScreen();
        this.getAllAnswers();
      },
      error => {
        console.log(error);
      }
    );
  }

  onInputAnswer() {
    this._renderer.removeClass(this.answerInput.nativeElement, Alerts.Danger);
  }

  cancel() {
    this.restartScreen();
  }

  edit($event) {
    let answer = $event["Answer"];
    let row = $event["Row"];

    this.answerSelected = answer;
    this.enableEditControls();
    this.deselectAllRows();
    this.selectRow(row);
  }

  deselectAllRows() {
    let rows = document.getElementsByClassName("selected");
    if(rows.length > 0) {
      rows[0].classList.remove("selected");
    }
  }

  selectRow(row: HTMLElement) {
    this._renderer.addClass(row, "selected");
  }
}
