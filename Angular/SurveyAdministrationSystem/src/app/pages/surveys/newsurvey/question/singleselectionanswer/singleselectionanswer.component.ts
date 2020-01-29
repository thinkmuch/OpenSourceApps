import { Component, OnInit, Input } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
import { AnswerOption } from 'src/app/models/AnswerOption';
import { SurveyServices } from 'src/app/services/SurveyServices';
import { QuestionServices } from 'src/app/services/QuestionServices';

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
