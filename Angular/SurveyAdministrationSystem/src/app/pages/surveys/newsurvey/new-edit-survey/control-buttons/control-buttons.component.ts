import { Component, OnInit, Renderer2 } from '@angular/core';
import { QuestionServices } from 'src/app/services/question-services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewServices } from 'src/app/services/view-services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-controlbuttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.css']
})
export class ControlButtonsComponent implements OnInit {

  constructor(
    public _questionServices: QuestionServices,
    private _snackBar: MatSnackBar,
    private _viewServices: ViewServices,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  addQuestion() {
    this._questionServices.addQuestion();
    this._snackBar.open("Pregunta agregada al final", "OK", {
      duration: 2000
    });
  }

  saveSurvey() {
    let allQuestionCaptured: boolean = this.isAllQuestionCaptured();
    let languageSelected: boolean = this.isLanguageSelected();
    let surveyNameCaptured: boolean = this.isSurveyNameCaptured();

    if(allQuestionCaptured && languageSelected && surveyNameCaptured) {
      console.log("Encuesta capturada correctamente");
    }
    else {
      Swal.fire(
        'Datos incompletos',
        'Debe capturar todos los datos de la encuesta',
        'warning'
      )
    }
  }

  isSurveyNameCaptured(): boolean {
    if(this._viewServices.surveyName.nativeElement.value.length > 0) {
      return true;
    }
    else {
      this.renderer.addClass(this._viewServices.surveyName.nativeElement, "alert-danger");
      return false;
    }
  }

  isAllQuestionCaptured(): boolean {
    let isValidSurvey = true;
    let questionControls = this._viewServices.getQuestionControls();

    questionControls.forEach(control => {
      if(control.nativeElement.value.length == 0) {
        isValidSurvey = false;
        this.renderer.addClass(control.nativeElement, "alert-danger");
      }
    });

    return isValidSurvey;
  }

  isLanguageSelected(): boolean {
    let language = this._questionServices.getLanguageSelected();

    if (language != undefined) {
      return true;
    }
    else {
      this.renderer.addClass(this._viewServices.languageControl.nativeElement, "alert-danger");
      return false;
    }
  }
}
