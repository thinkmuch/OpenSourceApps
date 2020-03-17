import { Component, OnInit, Input } from '@angular/core';
import { Answer_2 } from 'src/app/models/answer_2';

@Component({
  selector: 'app-answers-table',
  templateUrl: './answers-table.component.html',
  styleUrls: ['./answers-table.component.css']
})
export class AnswersTableComponent implements OnInit {
  
  @Input("answersInput") answers: Array<Answer_2>;

  constructor() { }

  ngOnInit() {
  }

}
