import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Answer_2 } from 'src/app/models/answer_2';
import { AnswerServices } from 'src/app/services/answer-services';
import Swal from 'sweetalert2';
import { Alerts } from 'src/app/enums/class-enum';

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
    this.answerNameDisabled = true;
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.newButtonHidden = false;
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

      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre de la respuesta',
        icon: 'warning'
      });
    }
    else {
      this.save(name);
    }
  }

  save(name: string) {
    this._answerServices.save(name).subscribe(
      data => {
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
}
