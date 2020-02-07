import { Component, OnInit } from '@angular/core';
import { AnswerServices } from 'src/app/services/AnswerServices';

@Component({
  selector: 'app-optionsperquestion',
  templateUrl: './options-per-question.component.html',
  styleUrls: ['./options-per-question.component.css']
})
export class OptionsPerQuestionComponent implements OnInit {

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
