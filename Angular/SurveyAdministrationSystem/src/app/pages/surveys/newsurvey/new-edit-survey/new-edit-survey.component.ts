import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
import { QuestionServices } from 'src/app/services/question-services';
import { Question } from 'src/app/models/question';
import { ViewServices } from 'src/app/services/view-services';
import { Alerts } from 'src/app/enums/class-enum';
import { ActivatedRoute } from '@angular/router';
import { Language } from 'src/app/models/laguage';
import { Square } from 'src/app/models/square';
import { Survey } from 'src/app/models/survey';
import { SurveyServices } from 'src/app/services/survey-services';

@Component({
  selector: 'app-neweditsurvey',
  templateUrl: './new-edit-survey.component.html',
  styleUrls: ['./new-edit-survey.component.css']
})
export class NewEditSurveyComponent implements OnInit, AfterViewInit, OnDestroy {

  isPredefinedChecked: boolean;
  questions: Array<Question>;
  private surveyId: number;
  public isNewSurvey: boolean;
  @ViewChild("surveyName", { read: ElementRef }) surveyName: ElementRef;

  constructor(
    public _questionServices: QuestionServices,
    private _viewServices: ViewServices,
    private render: Renderer2,
    private _activatedRoute: ActivatedRoute,
    private _surveyServices: SurveyServices
  ) { }

  ngAfterViewInit() {
    this._viewServices.surveyNameControl = this.surveyName;
  }

  onClickSurveyName() {
    this.render.removeClass(this.surveyName.nativeElement, Alerts.Danger);
  }

  ngOnInit() {
    this.questions = new Array<Question>();

    this._activatedRoute.params.subscribe(params => {
      this.surveyId = params['id'];

      if(this.surveyId > 0) {
        this.isNewSurvey = false;
        this.loadSurvey(this.surveyId);
      }
      else {
        this.isNewSurvey = true;
        this.questions = this._questionServices.getQuestions();
        this.surveyName.nativeElement.focus();
      }
    });
  }

  ngOnDestroy() {
    this._questionServices.initialize();
  }

  addQuestion() {
    this._questionServices.addQuestion();
  }

  loadSurvey(surveyId: number) {
    let survey: Survey = this._surveyServices.getSurveyById(surveyId);

    this._questionServices.nameSurvey = survey.name;
    this._questionServices.language = survey.language;
    this._questionServices.questions = survey.questions;
    this._questionServices.squares = survey.squares;
    this._questionServices.hotels = survey.hotels;

    this.questions = this._questionServices.questions;
  }
}