import { Component, OnInit, Input } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
import { QuestionServices } from 'src/app/services/QuestionServices';

@Component({
  selector: 'app-multiplechoises',
  templateUrl: './multiplechoises.component.html',
  styleUrls: ['./multiplechoises.component.css']
})
export class MultiplechoisesComponent implements OnInit {

  @Input() answerInput: Answer;

  constructor(
    private _questionServices: QuestionServices
  ) { }

  ngOnInit() {
  }

}
