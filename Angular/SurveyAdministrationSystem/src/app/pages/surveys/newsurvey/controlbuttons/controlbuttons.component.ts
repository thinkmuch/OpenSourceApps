import { Component, OnInit } from '@angular/core';
import { QuestionServices } from 'src/app/services/QuestionServices';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-controlbuttons',
  templateUrl: './controlbuttons.component.html',
  styleUrls: ['./controlbuttons.component.css']
})
export class ControlButtonsComponent implements OnInit {

  constructor(
    private _questionServices: QuestionServices,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  addQuestion() {
    this._questionServices.addQuestion();
    this._snackBar.open("Pregunta agregada al final", "OK", {
      duration: 2000
    });
  }
}