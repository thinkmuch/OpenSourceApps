import { Component, OnInit, Input } from '@angular/core';
import { AnswerServices } from 'src/app/services/answer-services';
import { Answer_2 } from 'src/app/models/answer_2';

@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.component.html',
  styleUrls: ['./answer-detail.component.css']
})
export class AnswerDetailComponent implements OnInit {
  answerIdSelected: number = 0;
  @Input("answersInput") answers: Array<Answer_2> = new Array<Answer_2>();

  constructor(
    private _answerServices: AnswerServices
  ) { }

  ngOnInit() {
    this._answerServices.answerSelected.subscribe((answerId: number) => {
      this.answerIdSelected = answerId;
    });
  }

}
