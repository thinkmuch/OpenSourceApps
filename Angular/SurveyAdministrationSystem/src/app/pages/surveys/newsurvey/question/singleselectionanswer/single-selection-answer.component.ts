import { Component, OnInit, Input } from '@angular/core';
import { Answer } from 'src/app/models/Answer';

@Component({
  selector: 'app-singleselectionanswer',
  templateUrl: './single-selection-answer.component.html',
  styleUrls: ['./single-selection-answer.component.css']
})
export class SingleSelectionAnswerComponent implements OnInit {

  @Input() answerInput: Answer;

  constructor() { }

  ngOnInit() {
  }
}
