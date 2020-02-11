import { Component, OnInit, Input } from '@angular/core';
import { Answer } from 'src/app/models/answer';

@Component({
  selector: 'app-single-selection-answer',
  templateUrl: './single-selection-answer-preview.component.html',
  styleUrls: ['./single-selection-answer-preview.component.css']
})
export class SingleSelectionAnswerPreviewComponent implements OnInit {

  @Input() answerInput: Answer;

  constructor() { }

  ngOnInit() {
  }
}
