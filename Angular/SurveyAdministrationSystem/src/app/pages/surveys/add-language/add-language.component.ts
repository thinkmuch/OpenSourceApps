import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageServices } from 'src/app/services/language-services';
import { Language } from 'src/app/models/laguage';
import { Question } from 'src/app/models/question';
import { SurveyServices } from 'src/app/services/survey-services';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  surveyId: number;
  languages: Array<Language>;
  languageSelected: Language;
  defaultQuestions: Array<Question>;
  languageDefault: Language;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _languageServices: LanguageServices,
    private _surveyServices: SurveyServices
  ) { 
    this.surveyId = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this.languages = this._languageServices.getAll();
  }

  ngOnInit() {
  }

  onSelectLanguage(language: Language) {
    this.languageSelected = language;
  }
}
