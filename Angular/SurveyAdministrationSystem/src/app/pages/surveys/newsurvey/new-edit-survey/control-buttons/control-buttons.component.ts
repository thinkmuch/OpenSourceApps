import { Component, OnInit } from '@angular/core';
import { QuestionServices } from 'src/app/services/question-services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SurveyServices } from 'src/app/services/survey-services';

@Component({
  selector: 'app-controlbuttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.css']
})
export class ControlButtonsComponent implements OnInit {

  constructor(
    private _questionServices: QuestionServices,
    private _snackBar: MatSnackBar,
    private _surveyServices: SurveyServices
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
    let survey = this._questionServices.getNewSurvey();
    this._surveyServices.saveSurvey(survey);
  }
}
