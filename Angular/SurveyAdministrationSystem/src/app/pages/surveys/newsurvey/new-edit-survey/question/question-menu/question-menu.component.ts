import { Component, OnInit } from '@angular/core';
import { AnswerServices } from 'src/app/services/answer-services';

@Component({
  selector: 'app-optionsperquestion',
  templateUrl: './question-menu.component.html',
  styleUrls: ['./question-menu.component.css']
})
export class QuestionMenuComponent implements OnInit {

  public visible: false;

  constructor(
    private _answerServices: AnswerServices
  ) { 
    this._answerServices.showOptions.subscribe(showOption => {
      this.visible = showOption;
    });
  }

  ngOnInit() {
  }
}
