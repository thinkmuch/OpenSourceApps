import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ViewServices } from 'src/app/services/view-services';
import Swal from 'sweetalert2';
import { SurveyServices } from 'src/app/services/survey-services';
import { Survey } from 'src/app/models/survey';
import { Router } from '@angular/router';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';

@Component({
  selector: 'app-controlbuttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.css']
})
export class ControlButtonsComponent implements OnInit {

  constructor(
    public _surveyCaptureServices: SurveyCaptureServices,
    private _snackBar: MatSnackBar,
    private _viewServices: ViewServices,
    private _surveyServices: SurveyServices,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addQuestion() {
    this._surveyCaptureServices.addQuestion();
    this._snackBar.open("Pregunta agregada al final", "OK", {
      duration: 2000
    });
  }

  saveSurvey() {
    let allQuestionCaptured: boolean = this._viewServices.isAllQuestionCaptured();
    let languageSelected: boolean = this._viewServices.isLanguageSelected();
    let surveyNameCaptured: boolean = this._viewServices.isSurveyNameCaptured();
    let isHotelsCaptures: boolean = this._viewServices.isHotelsCaptured();

    if(allQuestionCaptured && 
      languageSelected && 
      surveyNameCaptured &&
      isHotelsCaptures) {

      let newSurvey: Survey = this._surveyCaptureServices.generateNewSurvey();
      // this._surveyServices.saveNewSurvey(newSurvey);

      Swal.fire({
        icon: 'success',
        title: 'Encuesta guardada',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this._surveyCaptureServices.initialize();
        this._router.navigate(["encuestas"]);
      });
    }
    else {
      Swal.fire(
        'Datos incompletos',
        'Debe capturar todos los datos de la encuesta',
        'warning'
      )
    }
  }

  navigateTo(path: string) {
    this._router.navigate([path]);
  }
}
