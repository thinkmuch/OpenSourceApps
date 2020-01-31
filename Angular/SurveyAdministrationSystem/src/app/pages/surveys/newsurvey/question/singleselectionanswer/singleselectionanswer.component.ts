import { Component, OnInit, Input } from '@angular/core';
import { Answer } from 'src/app/models/Answer';

@Component({
  selector: 'app-singleselectionanswer',
  templateUrl: './singleselectionanswer.component.html',
  styleUrls: ['./singleselectionanswer.component.css']
})
export class SingleSelectionAnswerComponent implements OnInit {

  @Input() answerInput: Answer;

  constructor() { }

  ngOnInit() {
  }
}
