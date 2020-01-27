import { Component, OnInit, Input } from '@angular/core';
import { QuestionServices } from 'src/app/services/QuestionServices';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() indexInput: number;
  selected: boolean;

  constructor(
    private _questionServices: QuestionServices
  ) { }

  ngOnInit() {
  }

  remove(idQuestion: number) {
    this._questionServices.removeQuestion(idQuestion);
  }

}
