import { Component, OnInit } from '@angular/core';
import { QuestionServices } from 'src/app/services/QuestionServices';

@Component({
  selector: 'app-controlbuttons',
  templateUrl: './controlbuttons.component.html',
  styleUrls: ['./controlbuttons.component.css']
})
export class ControlButtonsComponent implements OnInit {

  constructor(
    private _questionServices: QuestionServices
  ) { }

  ngOnInit() {
  }

  addQuestion() {
    this._questionServices.addQuestion();
  }
}
