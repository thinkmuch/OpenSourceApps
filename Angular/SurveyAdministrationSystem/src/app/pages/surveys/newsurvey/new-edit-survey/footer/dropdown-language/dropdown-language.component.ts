import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/laguage';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';
import { LanguageServices } from 'src/app/services/language-services';

@Component({
  selector: 'app-dropdown-language',
  templateUrl: './dropdown-language.component.html',
  styleUrls: ['./dropdown-language.component.css']
})
export class DropdownLanguageComponent implements OnInit {
  languageSelected: Language = new Language();
  loadingLanguages: boolean = false;
  languages: Array<Language> = new Array<Language>();

  constructor(
    private _surveyCaprureServices: SurveyCaptureServices,
    private _languageServices: LanguageServices
  ) { }

  ngOnInit() {
    this.getAllLanguages();
  }

  onSelectLanguage(language: Language) {
    this.languageSelected = language;
    this._surveyCaprureServices.setLanguage(language);
  }

  getAllLanguages() {
    this.loadingLanguages = true;
    this._languageServices.getAllActiveLanguages().subscribe(
      data => {
        this.languages = data;
        this.loadingLanguages = false;
      },
      error => {
        console.log(error);
        this.loadingLanguages = false;
      }
    );
  }
}
