import { Component, OnInit } from '@angular/core';
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
    private _viewServices: ViewServices
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
    let allQuestionCaptured: boolean = this._viewServices.isAllQuestionCaptured();
    let languageSelected: boolean = this._viewServices.isLanguageSelected();
    let surveyNameCaptured: boolean = this._viewServices.isSurveyNameCaptured();
    let isSquaresAndHotelsSelected: boolean = this._viewServices.isSquaresAndHotelsSelected();

    console.log(`allQuestionCaptured = ${allQuestionCaptured}`);
    console.log(`languageSelected = ${languageSelected}`);
    console.log(`surveyNameCaptured = ${surveyNameCaptured}`);
    console.log(`isSquaresAndHotelsSelected = ${isSquaresAndHotelsSelected}`);

    if(allQuestionCaptured && languageSelected && surveyNameCaptured && isSquaresAndHotelsSelected) {
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
}
