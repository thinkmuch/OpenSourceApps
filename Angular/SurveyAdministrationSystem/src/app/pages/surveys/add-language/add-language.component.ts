import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageServices } from 'src/app/services/language-services';
import { Language } from 'src/app/models/laguage';
import { Question } from 'src/app/models/question';
import { SurveyServices } from 'src/app/services/survey-services';
import { QuestionsByLanguage } from 'src/app/models/questions-by-language';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  surveyId: number;
  languages: Array<Language>;
  languageSelected: Language;
  defaultQuestions: QuestionsByLanguage;
  languageDefault: Language;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _languageServices: LanguageServices,
    private _surveyServices: SurveyServices,
    private _router: Router
  ) { 
    this.surveyId = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this.defaultQuestions = this._surveyServices.getDefaultquestionById(this.surveyId);
    this.languages = new Array<Language>();

    this._languageServices.getAll().forEach(language => {
      if(language.id != this.defaultQuestions.lenguage.id) {
        this.languages.push(language);
      }
    });
  }

  ngOnInit() {
  }

  onSelectLanguage(language: Language) {
    this.languageSelected = language;
  }

  navigateTo(path: string) {
    this._router.navigate([path]);
  }
}
