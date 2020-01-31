import { Component, OnInit, Input } from '@angular/core';
import { QuestionServices } from 'src/app/services/QuestionServices';
import { Question } from 'src/app/models/Question';
import { forEach } from '@angular/router/src/utils/collection';
import { AnswerServices } from 'src/app/services/AnswerServices';
import { Answer } from 'src/app/models/Answer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() questionInput: Question;
  @Input() indexInput: number;
  @Input() totalQuestionsInput: number;
  public answer: Answer;
  selected: boolean;

  constructor(
    private _questionServices: QuestionServices,
    private _answerServices: AnswerServices
  ) { }

  ngOnInit() { }

  remove(idQuestion: number) {
    this._questionServices.removeQuestion(idQuestion);
  }

  updateQuestionText(text: string, idQuestion: number) {
    this._questionServices.updateQuestionText(idQuestion, text);
  }

  moveUp(idQuestion: number) {
    this._questionServices.moveUp(idQuestion);
  }

  moveDown(idQuestion:number) {
    this._questionServices.moveDown(idQuestion);
  }

  selectQuestion(idQuestion: number, answer: Answer) {
    
    var deselectedRow = document.getElementsByClassName("selected")[0];
    if(deselectedRow != undefined) {
      deselectedRow.classList.remove("selected");
    }

    var selectedRow = document.getElementById(`${idQuestion}`);
    if(selectedRow != undefined && selectedRow != null) {
      selectedRow.className = "selected";
    }

    this._questionServices.rowSelected.emit(idQuestion);
    this._answerServices.answerSelected.emit(answer);
  }
}
